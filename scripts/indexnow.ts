import fs from 'node:fs';
import path from 'node:path';

const HOST = 'jichangtuijian.site';
const KEY = 'b6a5f782c3d149028f411b931e50f38e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const HISTORY_FILE = path.resolve('docs/indexnow-history.json');

interface SubmissionLog {
  timestamp: string;
  urls: string[];
  status: number | string;
  response: string;
  success: boolean;
}

// 确保目录存在
function ensureDir(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function loadHistory(): SubmissionLog[] {
  if (fs.existsSync(HISTORY_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8'));
    } catch {
      return [];
    }
  }
  return [];
}

function saveHistory(history: SubmissionLog[]) {
  ensureDir(HISTORY_FILE);
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf-8');
}

// 发送 HTTP 请求并实现重试
async function sendIndexNow(urlList: string[], retries = 3): Promise<{ status: number; text: string }> {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`[IndexNow] 正在向 ${ENDPOINT} 提交 ${urlList.length} 个 URL (尝试 ${attempt}/${retries})...`);
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'JiChangTuiJian-IndexNow-Client/1.0',
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      return { status: response.status, text };
    } catch (err: any) {
      console.error(`[IndexNow] 尝试 ${attempt} 发生网络异常: ${err.message}`);
      if (attempt === retries) {
        throw err;
      }
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }

  throw new Error('达到最大重试次数');
}

async function main() {
  const args = process.argv.slice(2);
  let urlsToSubmit: string[] = [];

  // 1. 检查指定参数 --url
  const urlArgIndex = args.indexOf('--url');
  if (urlArgIndex !== -1 && args[urlArgIndex + 1]) {
    urlsToSubmit = [args[urlArgIndex + 1]];
  } else if (args.includes('--all')) {
    // 提交全站已构建的正式 URL（扫描 dist 目录）
    console.log('[IndexNow] 正在扫描 dist 目录获取全量生产页面 URL...');
    const distDir = path.resolve('dist');
    function getHtmlFiles(dir: string): string[] {
      let res: string[] = [];
      const list = fs.readdirSync(dir);
      for (const item of list) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          res = res.concat(getHtmlFiles(full));
        } else if (item.endsWith('.html')) {
          res.push(full);
        }
      }
      return res;
    }

    if (fs.existsSync(distDir)) {
      const files = getHtmlFiles(distDir);
      urlsToSubmit = files
        .map((f) => {
          let rel = path.relative(distDir, f).replace(/\\/g, '/');
          if (rel === 'index.html') return `https://${HOST}/`;
          if (rel.endsWith('/index.html')) return `https://${HOST}/${rel.replace(/\/index\.html$/, '')}/`;
          if (rel.endsWith('index.html')) return `https://${HOST}/${rel.replace(/index\.html$/, '')}`;
          return `https://${HOST}/${rel}`;
        })
        .filter((u) => !u.includes('404.html'));
      console.log(`[IndexNow] 成功提取全站 ${urlsToSubmit.length} 个生产页面 URL！`);
    } else {
      console.warn('[IndexNow] 未检测到 dist/ 目录，使用核心页面兜底提交。');
      urlsToSubmit = [
        `https://${HOST}/`,
        `https://${HOST}/recommend/`,
        `https://${HOST}/recommend/budget/`,
        `https://${HOST}/recommend/premium/`,
        `https://${HOST}/recommend/vpn/`,
        `https://${HOST}/ranking/`,
        `https://${HOST}/ranking/overall/`,
        `https://${HOST}/compare/`,
      ];
    }
  } else {
    // 默认模式：提交最近有更新或新发布的重点核心页面
    console.log('[IndexNow] 未指定 --url，执行默认差异化提交（最新更新文章与专题）...');
    urlsToSubmit = [
      `https://${HOST}/`,
      `https://${HOST}/recommend/budget/`,
      `https://${HOST}/recommend/stable/`,
      `https://${HOST}/ranking/overall/`,
      `https://${HOST}/ranking/value/`,
      `https://${HOST}/blog/vpn-vs-airport-proxy-comparison/`,
      `https://${HOST}/blog/proxy-protocols-ss-trojan-vless-hysteria2/`,
      `https://${HOST}/blog/iplc-iepl-bgp-transit-explained/`,
    ];
  }

  // 去重
  urlsToSubmit = Array.from(new Set(urlsToSubmit));

  console.log(`[IndexNow] 待提交 URL 清单 (${urlsToSubmit.length} 条):`);
  urlsToSubmit.forEach((u) => console.log(` - ${u}`));

  try {
    const result = await sendIndexNow(urlsToSubmit);
    const success = result.status === 200 || result.status === 202;
    console.log(`[IndexNow] 响应状态码: ${result.status} ${success ? '(成功接收)' : '(请检查错误)'}`);
    console.log(`[IndexNow] 响应内容: ${result.text || '(无额外正文，协议正常)'}`);

    const logEntry: SubmissionLog = {
      timestamp: new Date().toISOString(),
      urls: urlsToSubmit,
      status: result.status,
      response: result.text || 'HTTP 200/202 Accepted',
      success,
    };

    const history = loadHistory();
    history.push(logEntry);
    saveHistory(history);

    console.log('\n[重要合规提示]');
    console.log('1. IndexNow 接口返回 200/202 仅代表 Bing 已成功接收 URL 变更信号。');
    console.log('2. 这不代表 Bing 已经立即完成索引收录。实际抓取与建库由 Bingbot 调度决定。');
    console.log(`3. 提交历史记录已写入 ${HISTORY_FILE}`);
  } catch (err: any) {
    console.error(`[IndexNow] 提交失败: ${err.message}`);
    const logEntry: SubmissionLog = {
      timestamp: new Date().toISOString(),
      urls: urlsToSubmit,
      status: 'ERROR',
      response: err.message,
      success: false,
    };
    const history = loadHistory();
    history.push(logEntry);
    saveHistory(history);
    process.exitCode = 1;
  }
}

main();
