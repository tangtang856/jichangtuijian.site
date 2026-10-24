---
title: "Mac 系统代理开关灰色、无法保存或连不上网的排查指南"
description: "解决 macOS 代理设置常见异常。清理残留 LaunchDaemons、重置网络配置与修复 DNS 冲突。"
platform: "macOS"
publishDate: "2026-03-20"
clientApps: ["System Settings","Network"]
---

## 常见故障表现
- 软件关闭后网页无法打开，提示“未连接到互联网”；
- 系统设置中的“代理”设置每次修改后无法保存；
- 提示端口被其他程序占用。

---

## 快速自愈解决方案
1. **检查客户端是否异常退出：** 重新打开 Clash 或 Surge，正常勾选系统代理后再通过软件菜单正规退出，让软件自动注销系统代理端口。
2. **终端清理环境变量：** 运行 `networksetup -setwebproxystate "Wi-Fi" off` 强制关闭代理。

