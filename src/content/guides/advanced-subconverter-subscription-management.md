---
title: "使用 Subconverter 自建或本地转换订阅规则教程"
description: "摆脱第三方在线转换泄露订阅风险。手把手教你在本地电脑或 VPS 运行 Subconverter 容器。"
platform: "General"
publishDate: "2026-03-29"
clientApps: ["Subconverter","Docker"]
---

## 为什么尽量避免使用公共第三方订阅转换？
很多公开免费的在线订阅转换网站会在后台记录用户的订阅 URL，不仅可能盗用你的套餐流量，还存在隐私泄露风险。

---

## 本地 Docker 快速启动
```bash
docker run -d --name subconverter -p 25500:25500 tindy2013/subconverter:latest
```
启动后，即可在本地客户端使用 `http://127.0.0.1:25500` 转换任何协议节点。

