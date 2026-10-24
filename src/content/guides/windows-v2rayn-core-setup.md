---
title: "v2rayN 客户端配置教程：Xray / VLESS 与 Trojan 节点管理"
description: "经典老牌 Windows 代理软件 v2rayN 详细教程。手把手教你更新 Xray-core、导入 VLESS Reality 节点及配置自定义 PAC 分流规则。"
platform: "Windows"
publishDate: "2026-02-05"
clientApps: ["v2rayN","Xray-core"]
---

## v2rayN 核心特性
v2rayN 是 Windows 平台上资历最深、兼容性最全面的代理客户端之一。它原生支持 Xray 核心、Sing-box 核心与 Mihomo 核心的无缝切换，特别适合管理 VLESS Reality 和 Trojan 协议节点。

---

## 安装与核心更新
1. 从 GitHub 仓库下载带有 Complete 核心的发布包 `v2rayN-with-dependencies.zip`。
2. 解压后运行 `v2rayN.exe`。
3. 点击顶部菜单栏的 **“检查更新”** → **“Xray-core”**，确保底层内核升级到最新稳定版。

---

## 导入节点与开启服务
1. 点击 **“订阅分组”** → **“订阅分组设置”** → 点击“添加”，在可选地址中粘贴机场提供的 V2Ray/通用订阅。
2. 回到主界面，按快捷键 `Ctrl + U` 更新订阅。
3. 底部任务栏托盘右键点击 v2rayN 图标，将路由模式设置为 **“绕过大陆(Whitelist)”**，系统代理设置为 **“自动配置系统代理”**。

