// scripts/audit_keywords.ts
import fs from 'node:fs';
import path from 'node:path';

const keywords = [
  '机场推荐',
  '机场节点',
  '性价比机场',
  '梯子推荐',
  'vpn',
  'vpn机场',
  'vpn节点',
  'vpn推荐'
];

const distDir = path.resolve('dist');

function getAllHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);

interface KwStat {
  keyword: string;
  totalOccurrences: number;
  pagesWithKeyword: number;
  titleOccurrences: number;
  metaDescOccurrences: number;
  metaKeywordsOccurrences: number;
  h1Occurrences: number;
}

const stats: Record<string, KwStat> = {};
for (const kw of keywords) {
  stats[kw] = {
    keyword: kw,
    totalOccurrences: 0,
    pagesWithKeyword: 0,
    titleOccurrences: 0,
    metaDescOccurrences: 0,
    metaKeywordsOccurrences: 0,
    h1Occurrences: 0
  };
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const lowerContent = content.toLowerCase();

  for (const kw of keywords) {
    const kwLower = kw.toLowerCase();
    // Count total occurrences
    let pos = 0;
    let count = 0;
    while ((pos = lowerContent.indexOf(kwLower, pos)) !== -1) {
      count++;
      pos += kwLower.length;
    }

    if (count > 0) {
      stats[kw].totalOccurrences += count;
      stats[kw].pagesWithKeyword += 1;
    }

    // Check <title>
    const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
    if (titleMatch && titleMatch[1].toLowerCase().includes(kwLower)) {
      stats[kw].titleOccurrences += 1;
    }

    // Check <meta name="description"
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
    if (descMatch && descMatch[1].toLowerCase().includes(kwLower)) {
      stats[kw].metaDescOccurrences += 1;
    }

    // Check <meta name="keywords"
    const kwMatch = content.match(/<meta\s+name=["']keywords["']\s+content=["']([\s\S]*?)["']/i);
    if (kwMatch && kwMatch[1].toLowerCase().includes(kwLower)) {
      stats[kw].metaKeywordsOccurrences += 1;
    }

    // Check <h1>
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match && h1Match[1].toLowerCase().includes(kwLower)) {
      stats[kw].h1Occurrences += 1;
    }
  }
}

console.log(`\n=================== BING 8大主攻核心关键词深度覆盖审计 ===================`);
console.log(`全站扫描生产 HTML 页面总数: ${htmlFiles.length} 个\n`);

console.table(Object.values(stats).map(s => ({
  '关键词': s.keyword,
  '全网出现频次 (次)': s.totalOccurrences,
  '覆盖页面数 (个)': `${s.pagesWithKeyword} / ${htmlFiles.length}`,
  '页面覆盖率': `${((s.pagesWithKeyword / htmlFiles.length) * 100).toFixed(1)}%`,
  'Title 标题覆盖': `${s.titleOccurrences} 页`,
  'Meta 描述覆盖': `${s.metaDescOccurrences} 页`,
  'Keywords 标签覆盖': `${s.metaKeywordsOccurrences} 页`,
  'H1 主标题覆盖': `${s.h1Occurrences} 页`
})));

// 检查重点首页、排行榜、推荐页中的落地情况
const keyLandingPages = [
  { name: '首页 (/)', path: path.join(distDir, 'index.html') },
  { name: '机场推荐 (/recommend/)', path: path.join(distDir, 'recommend', 'index.html') },
  { name: '性价比机场 (/recommend/budget/)', path: path.join(distDir, 'recommend', 'budget', 'index.html') },
  { name: '机场排行 (/ranking/)', path: path.join(distDir, 'ranking', 'index.html') },
  { name: '综合总榜 (/ranking/overall/)', path: path.join(distDir, 'ranking', 'overall', 'index.html') },
  { name: '参数对比 (/compare/)', path: path.join(distDir, 'compare', 'index.html') },
  { name: '客户端教程 (/guides/)', path: path.join(distDir, 'guides', 'index.html') },
  { name: '深度评测博客 (/blog/)', path: path.join(distDir, 'blog', 'index.html') }
];

console.log(`\n=================== 核心权重落地页逐页关键词命中检测 ===================`);
for (const page of keyLandingPages) {
  if (fs.existsSync(page.path)) {
    const c = fs.readFileSync(page.path, 'utf-8').toLowerCase();
    const hitList = keywords.filter(kw => c.includes(kw.toLowerCase()));
    console.log(`[${page.name}] 命中关键词数: ${hitList.length} / 8 -> [${hitList.join(', ')}]`);
  }
}
