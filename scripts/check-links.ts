import fs from 'node:fs';
import path from 'node:path';

console.log('=== [QA 验证 2/3] 开始全站内链健康度检查 (scripts/check-links.ts) ===\n');

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error(`[FAIL] dist 目录不存在。请先运行 npm run build 构建静态页面！`);
  process.exit(1);
}

// 递归查找所有 html 文件
function getAllHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`已在 dist/ 目录中发现 ${htmlFiles.length} 个 HTML 静态页面。开始解析内部超链接...`);

let brokenCount = 0;
let checkedLinksCount = 0;

htmlFiles.forEach((htmlPath) => {
  let content = fs.readFileSync(htmlPath, 'utf-8');
  // 移除 <script> 标签内容，避免把客户端 JS 模板字符串当作静态 HTML 超链接检测
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  const relPath = path.relative(distDir, htmlPath);

  // 匹配所有 href="..."
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);

  for (const match of hrefMatches) {
    const href = match[1];

    // 过滤外链、锚点、mailto、javascript、tel
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('javascript:') ||
      href.startsWith('tel:')
    ) {
      continue;
    }

    checkedLinksCount++;

    // 清理 URL 参数和锚点
    const cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref || cleanHref === '') continue;

    // 计算在 dist 中对应的磁盘路径
    let targetFilePath = '';
    if (cleanHref.endsWith('/')) {
      targetFilePath = path.join(distDir, cleanHref, 'index.html');
    } else if (cleanHref.includes('.')) {
      targetFilePath = path.join(distDir, cleanHref);
    } else {
      // 兼容可能省略尾部斜杠的路径
      targetFilePath = path.join(distDir, `${cleanHref}.html`);
      if (!fs.existsSync(targetFilePath)) {
        targetFilePath = path.join(distDir, cleanHref, 'index.html');
      }
    }

    if (!fs.existsSync(targetFilePath)) {
      console.error(`[FAIL 链接失效] 页面 [${relPath}] 中的链接 "${href}" 找不到目标文件: ${path.relative(distDir, targetFilePath)}`);
      brokenCount++;
    }
  }
});

console.log(`\n已检查内部链接总计: ${checkedLinksCount} 条`);
if (brokenCount > 0) {
  console.error(`[FAIL] 发现 ${brokenCount} 个失效的内部死链！请立即修复。`);
  process.exit(1);
} else {
  console.log(`[PASS] 全站内链健康度 100%，无任何死链或 404 引用！`);
}
