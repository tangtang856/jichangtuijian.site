---
title: "Sing-box Windows 官方客户端安装与轻量化规则集配置指南"
description: "详解新一代通用代理核心 Sing-box 在 Windows 平台的安装使用。内存占用极低、原生支持 Hysteria 2、Shadowsocks 与 Trojan 协议。"
platform: "Windows"
publishDate: "2026-02-03"
clientApps: ["Sing-box","Sing-box GUI"]
---

## 为什么选择 Sing-box？
Sing-box 是由开源社区独立研发的新一代跨平台通用代理核心。相较于传统代理客户端，Sing-box 最大的优势是极低的核心内存开销（常驻内存通常不足 40MB）以及对新兴 UDP 协议（如 Hysteria 2、TUIC v5）的原生支持。

---

## 客户端下载与环境准备
1. 访问 Sing-box 官方 GitHub 仓库下载 `sing-box-windows-amd64.zip` 或带有图形界面的第三方客户端（如 Hiddify 或 GUI.for.SingBox）。
2. 解压到无中文字符的路径（例如 `C:\Tools\sing-box`）。

---

## 订阅转换与导入
1. 若你的机场支持直接输出 Sing-box 格式，直接在客户端中粘贴配置链接。
2. 若机场仅提供 Clash 订阅，可通过支持的在线转换工具或客户端内置解析器将订阅解析为 Sing-box JSON 格式。
3. 启动内核后，选择 `Rule` 分流模式即可实现智能代理。

