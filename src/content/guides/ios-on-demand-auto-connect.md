---
title: "iOS 配置“按需连接（On-Demand）”实现无感翻墙与锁屏不断连"
description: "iPhone 科学上网终极体验：配置小火箭与 Loon 的按需连接，让代理像蜂窝网络一样随时在线且毫秒响应。"
platform: "iOS"
publishDate: "2026-03-08"
clientApps: ["Shadowrocket","Loon","Surge"]
---

## 什么是按需连接？
苹果系统底层的 NetworkExtension 框架提供了 **On-Demand（按需连接）** 功能。开启后，iOS 会根据当前连接的 Wi-Fi 名称或网络请求域名，自动决定是否唤醒代理隧道。

---

## 小火箭开启按需连接步骤
1. 打开小火箭 → 设置 → **“按需连接”**。
2. 开启“总开关”，并勾选“蜂窝网络”与“Wi-Fi”。
3. 开启后，手机重启后客户端会自动在后台启动，无需每次手动打开软件点开关。

