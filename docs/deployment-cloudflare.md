# Cloudflare Pages 部署与上线指南

本站 `https://jichangtuijian.site` 专为 Cloudflare Pages 静态站点托管优化设计，构建速度快，享有全球边缘 Anycast CDN 加速与免费 SSL/TLS 证书。

---

## 一、关联 GitHub 仓库与创建项目

1. 登录 [Cloudflare Dashboard 控制台](https://dash.cloudflare.com/)。
2. 在左侧菜单点击 **“Workers & Pages”** → **“Create application”** → 选择 **“Pages”** 标签。
3. 点击 **“Connect to Git (关联 Git)”**。
4. 选择 GitHub 授权账号并选中本次项目仓库：
   ```text
   https://github.com/tangtang856/jichangtuijian.site.git
   ```
5. 点击 **“Begin setup”** 开始配置构建参数。

---

## 二、构建参数配置 (Build Settings)

在构建设置页面中，填写以下标准化参数：

- **Project name (项目名称):** `jichangtuijian-site`（或自定义）
- **Production branch (生产分支):** `main`
- **Framework preset (框架预设):** `Astro`
- **Build command (构建命令):**
  ```bash
  npm run build
  ```
- **Build output directory (构建输出目录):**
  ```text
  dist
  ```

### 环境变量 (Environment variables)
展开底部的 **“Environment variables”**，添加：
- **Variable name:** `NODE_VERSION`
- **Value:** `20.18.0`

点击 **“Save and Deploy (保存并部署)”**。Cloudflare 将自动拉取代码并完成静态构建。

---

## 三、绑定自定义正式域名

1. 在 Pages 项目详情页中，点击顶部的 **“Custom domains (自定义域)”** 标签。
2. 点击 **“Set up a custom domain (设置自定义域)”**。
3. 输入本次正式域名：
   ```text
   jichangtuijian.site
   ```
4. 如果域名已在 Cloudflare 管理，系统将自动配置 DNS 解析；若域名在第三方注册商（如 NameSilo、GoDaddy、腾讯云等），请按照页面提示在 DNS 解析中添加一条指向 Pages 项目的 `CNAME` 记录。
5. 部署完成后，在浏览器中访问 `https://jichangtuijian.site` 检查页面。

---

## 四、安全与性能推荐设置

在 Cloudflare 仪表盘中，建议开启以下优化：

1. **SSL/TLS 加密模式：** 设置为 **“Full (Strict)”**。
2. **Always Use HTTPS (始终使用 HTTPS):** 开启。
3. **HTTP/3 (with QUIC):** 开启，显著降低移动端首包握手延迟。
4. **Brotli 压缩:** 开启，进一步减少 HTML、CSS 与 JS 传输体积。
