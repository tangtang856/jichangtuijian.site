import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const sitemapIndex = path.join(distDir, 'sitemap-index.xml');
const sitemapXml = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemapIndex)) {
  fs.copyFileSync(sitemapIndex, sitemapXml);
  console.log('[Postbuild] Generated dist/sitemap.xml alias from sitemap-index.xml');
}
