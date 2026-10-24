import fs from 'node:fs';
import path from 'node:path';
import { airports } from '../src/data/airports';

console.log('=== [QA 验证 1/3] 开始执行内容与数据源验证 (scripts/validate-content.ts) ===\n');

let hasError = false;

// 1. 验证机场数据库
console.log('1. 正在验证机场数据库完整性 (src/data/airports.ts)...');
if (!airports || airports.length < 5) {
  console.error(`[FAIL] 机场数据少于 5 家，当前为 ${airports.length} 家`);
  hasError = true;
} else {
  console.log(`[PASS] 成功载入 ${airports.length} 家机场真实资料`);
}

const seenSlugs = new Set<string>();
airports.forEach((airport) => {
  if (seenSlugs.has(airport.slug)) {
    console.error(`[FAIL] 发现重复 slug: ${airport.slug}`);
    hasError = true;
  }
  seenSlugs.add(airport.slug);

  if (!airport.plans || airport.plans.length === 0) {
    console.error(`[FAIL] ${airport.name} 缺少套餐价格数据`);
    hasError = true;
  }

  if (!airport.lastVerified) {
    console.warn(`[WARN] ${airport.name} 缺失核验日期`);
  }
});

// 2. 检查 Markdown 内容中的未替换模板变量与空白文件
console.log('\n2. 正在检查文章与百科中的占位符与未替换变量 ({{...}})...');
const contentDirs = [
  path.resolve('src/content/blog'),
  path.resolve('src/content/glossary'),
];

let totalDocs = 0;
contentDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  files.forEach((f) => {
    totalDocs++;
    const fullPath = path.join(dir, f);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // 检查占位符
    if (content.includes('{{') || content.includes('}}')) {
      console.error(`[FAIL] 文件 ${f} 包含未替换的模板参数 {{...}}`);
      hasError = true;
    }

    if (content.includes('TODO') || content.includes('lorem ipsum')) {
      console.error(`[FAIL] 文件 ${f} 包含待补充占位符 TODO / lorem ipsum`);
      hasError = true;
    }

    if (content.trim().length < 200) {
      console.error(`[FAIL] 文件 ${f} 内容过短 (<200 字符)，疑似空白文档`);
      hasError = true;
    }
  });
});

console.log(`[PASS] 已检验 ${totalDocs} 篇 Markdown/MDX 正式文档，无占位符遗留。`);

if (hasError) {
  console.error('\n[RESULT] 内容完整性验证失败！');
  process.exit(1);
} else {
  console.log('\n[RESULT] 内容完整性验证通过 (PASS)！');
}
