# Bing Webmaster Tools (必应站长平台) 完整配置与运营指南

本文档为 `https://jichangtuijian.site` 针对微软 Bing 搜索引擎官方站长工具的专属实操手册。

---

## 一、所有权验证 (Site Verification)

在正式部署到 Cloudflare Pages 后，请完成站长平台认证：

1. 打开 [Bing Webmaster Tools 官网](https://www.bing.com/webmasters) 并使用微软账号登录。
2. 点击 **“添加网站（Add a site）”**，输入正式生产域名：`https://jichangtuijian.site`。
3. 选择验证方式：
   - **方式 A（推荐·DNS CNAME 验证）：** 在 Cloudflare DNS 控制台中，添加一条由 Bing 提供的 CNAME 记录，最快 1 分钟即可生效。
   - **方式 B（XML 文件验证）：** 下载 Bing 提供的验证文件（如 `BingSiteAuth.xml`），将其放置于项目的 `public/` 目录下并重新执行部署。
   - **方式 C（Google Search Console 导入）：** 若已在 GSC 完成认证，可直接一键授权同步。

> **需人工完成操作：** 此步骤需站长登录微软账号与域名 DNS 管理后台完成。

---

## 二、提交 XML 网站地图 (Sitemap Submission)

本站已通过 `@astrojs/sitemap` 自动生成符合搜索引擎标准规范的 `sitemap-index.xml`。

1. 在 Bing 站长平台左侧菜单中，点击 **“网站地图（Sitemaps）”**。
2. 在提交输入框中填入完整的绝对路径：
   ```text
   https://jichangtuijian.site/sitemap-index.xml
   ```
3. 点击 **“提交（Submit）”**。
4. 提交后系统会显示状态为 `Processing`（处理中）。通常在 24 小时内，Bingbot 会首次拉取并显示发现的有效 URL 总数。

---

## 三、IndexNow 自动化推送验证

IndexNow 是由 Bing 和 Yandex 共同主导的下一代即时索引协议。

### 1. 验证文件配置状态
- 本站 API 密钥：`b6a5f782c3d149028f411b931e50f38e`
- 验证文件位置：`https://jichangtuijian.site/b6a5f782c3d149028f411b931e50f38e.txt`
- 该文件已内置于 `public/` 目录，构建时将自动发布到网站根目录。

### 2. 本地与构建流水线触发指令
- 提交更新文章：
  ```bash
  npm run indexnow
  ```
- 提交单个指定 URL：
  ```bash
  npx tsx scripts/indexnow.ts --url https://jichangtuijian.site/blog/vpn-vs-airport-proxy-comparison/
  ```

---

## 四、URL Inspection (URL 检查与实时抓取测试)

当发布新文章或对核心页面（如首页、综合排行榜）进行重大修改后：

1. 点击左侧 **“URL 检查（URL Inspection）”**。
2. 输入待检查的 URL（例如：`https://jichangtuijian.site/ranking/overall/`）。
3. 点击 **“实时测试（Live Test）”**，Bing 会模拟 Bingbot 立即发起请求。
4. 重点检查：
   - HTTP 状态码是否为 `200 OK`
   - 页面标题与 Meta Description 是否与源码一致
   - 移动端友好度与 HTML 渲染结果
5. 测试通过后，可点击 **“请求索引（Request Indexing）”** 加速收录。

---

## 五、搜索表现与关键词监控 (Search Performance)

每周登录查看核心主攻关键词的数据表现：

- **主攻核心词监控列表：**
  - `机场推荐`
  - `机场节点`
  - `性价比机场`
  - `梯子推荐`
  - `vpn`
  - `vpn机场`
  - `vpn节点`
  - `vpn推荐`
- **关注四大指标：**
  - **总展示次数（Impressions）：** 页面出现在 Bing 搜索结果中的次数。
  - **总点击次数（Clicks）：** 真实访问网站的搜索用户量。
  - **平均点击率（CTR）：** 点击次数 ÷ 展示次数。若 CTR 低于 3%，应优化 Title 和 Meta Description 的文案吸引力。
  - **平均排名（Average Position）：** 监测核心关键词是否稳步进入前 10 名。

---

## 六、索引覆盖与抓取排查 (Index Coverage & Crawl Issues)

1. 定期进入 **“抓取错误（Crawl Issues）”** 页面，确保无 `5xx 服务器错误`、`4xx 错误` 或 `重定向循环`。
2. 进入 **“已阻止的 URL（Blocked URLs）”**，确认未误在 `robots.txt` 中封锁重要的 `/ranking/`、`/recommend/` 或 `/blog/` 目录。
