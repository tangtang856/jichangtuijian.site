---
title: "Windows 开启 TUN 虚拟网卡模式教程：接管全局网络与游戏加速"
description: "全面解析 Clash Verge 与 Sing-box 的 TUN 模式原理。解决 Git 命令行、Steam 游戏与特定软件绕过系统代理的难题。"
platform: "Windows"
publishDate: "2026-02-08"
clientApps: ["Clash Verge Rev","Sing-box"]
---

## 什么是 TUN 模式？
常规的“系统代理”仅在应用层向 Windows 操作系统注册了 HTTP/HTTPS/SOCKS5 代理端口。许多不遵守系统代理设置的软件（例如 Git 命令行、部分端游、WSL 子系统等）会直接绕过代理。
**TUN 模式（Virtual Network Terminal）** 则会在操作系统网络层虚拟出一个专属网络适配器，以驱动级别拦截整台电脑的所有数据包并交由代理内核处理。

---

## 在 Clash Verge Rev 中开启 TUN
1. 打开 Clash Verge Rev 设置页面。
2. 找到 **“服务模式（Service Mode）”**，点击右侧的“安装”按钮，弹出 UAC 提权提示时选择“是”。
3. 服务模式显示为绿色“已安装”后，即可开启 **“Tun 模式”** 开关。
4. 此时在 Windows 网络连接设置中可以看到一个名为 `Mihomo` 或 `Clash` 的虚拟网卡已处于连接状态。

