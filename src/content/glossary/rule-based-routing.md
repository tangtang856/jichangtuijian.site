---
title: "什么是规则分流与TUN模式？国内免流与国外加速原理解析"
description: "名词解释：分流规则（Rule-based Routing）与虚拟网卡TUN模式的技术概念、运作原理及如何实现国内网站直连与国外网站智能翻墙加速。"
term: "规则分流与 TUN 模式"
category: "客户端技术"
publishDate: "2026-01-25"
---

### 术语定义 (Definition)

**规则分流**（Rule-based Routing）是指客户端（如 Clash、Sing-box、Shadowrocket）根据预先设定的网络域名、IP 地址归属地或进程名称规则，动态决定将每一个网络请求发送至“直连（DIRECT）”、“代理节点（PROXY）”或“拒绝连接（REJECT）”的智能路由技术。

**TUN 模式**（Network TUN Device）是指客户端在操作系统内核中创建一个虚拟网络适配器（Virtual Network Adapter），在网络层（第 3 层）直接接管整台设备的所有 IP 数据包，使所有软件无需单独配置系统代理即可享受规则分流。

---

### 技术工作原理 (How it Works)

当你在浏览器中输入一个网址时，分流引擎会按顺序匹配规则树：

1. **域名后缀规则 (DOMAIN-SUFFIX)：** 匹配到 `baidu.com`、`qq.com` 或 `taobao.com` → 自动走 **DIRECT（本地直连）**，不经过代理，不消耗机场流量。
2. **地理 IP 规则 (GEOIP)：** 目标 IP 归属地为中国大陆（CN）→ 自动走 **DIRECT**。
3. **境外受限域名：** 匹配到 `google.com`、`youtube.com` 或 `github.com` → 自动走 **PROXY（代理节点）**。
4. **AI 专属规则：** 匹配到 `openai.com` 或 `claude.ai` → 自动定向至拥有原生家宽属性的专属美区节点。
5. **广告过滤规则：** 匹配到常见恶意商业广告域名 → 自动执行 **REJECT** 丢弃数据包。

---

### 为什么日常使用必须开启规则分流？

- **节省流量费用：** 避免百度网盘下载、爱奇艺看剧浪费宝贵的机场专线流量配额。
- **避免服务锁区：** 网易云音乐、Bilibili 和各大银行 App 在检测到非大陆 IP 时常会触发安全告警或版权限制，分流直连彻底解决此问题。

---

### 深入教程
- 配置分流：[Windows Clash Verge 使用指南](/guides/windows/)
- 手机分流配置：[iOS Shadowrocket 小火箭配置教程](/guides/ios/)
