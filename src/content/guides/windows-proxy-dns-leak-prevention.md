---
title: "Windows 代理防 DNS 污染与 WebRTC 真实 IP 泄漏防范教程"
description: "深度保障网络安全。配置 Fake-IP 分流、禁用浏览器 WebRTC 局域网广播，防止中国大陆真实 IP 地址意外泄漏。"
platform: "Windows"
publishDate: "2026-02-10"
clientApps: ["Clash Verge Rev","Chrome","Edge"]
---

## 为什么会发生 DNS 泄漏与真实 IP 暴露？
很多用户在访问海外网站或特定 AI 工具（如 ChatGPT、Claude）时经常被识别出所在地理位置，根本原因通常不在于节点服务器，而在于本地电脑的 **DNS 泄漏** 与 **WebRTC 协议泄漏**。

---

## 核心防护方案
1. **启用 Fake-IP 模式：** 在客户端中将 DNS 模式由 Redir-Host 切换为 Fake-IP。客户端会为海外域名分配 198.18.0.0/16 虚拟内网保留地址，解析过程完全由境外落地节点在远端完成，彻底阻断本地 DNS 污染。
2. **关闭浏览器 WebRTC：** 在 Chrome 或 Edge 浏览器中安装 `WebRTC Control` 插件，开启全面封锁模式，杜绝本地宽带 IP 被网页通过 STUN 服务器捕获。

