---
title: "旁路由透明网关 (TProxy) 模式配置与网络防环路全景指南"
description: "单网口主路由 + 旁路由拓扑深度解析。配置 TProxy 透明代理与正确设置网关 IP 避免广播风暴。"
platform: "Router"
publishDate: "2026-03-25"
clientApps: ["OpenWrt","TProxy"]
---

## 旁路由网络拓扑解析
主路由（负责 DHCP 拨号，如 192.168.1.1）+ 旁路由（负责翻墙分流，如 192.168.1.2）。
只需将需要翻墙的设备的“默认网关”指向旁路由 IP 即可实现精准控制。

