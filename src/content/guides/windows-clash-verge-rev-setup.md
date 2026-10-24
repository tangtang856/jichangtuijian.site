---
title: "Windows 系统 Clash Verge Rev 从零安装到订阅导入保姆级教程"
description: "2026最新 Windows 平台 Clash Verge Rev 客户端配置指南。手把手教你下载开源安装包、导入机场订阅链接、开启 TUN 虚拟网卡及设置开机自启。"
platform: "Windows"
publishDate: "2026-02-01"
clientApps: ["Clash Verge Rev","Clash Meta"]
---

## 教程简介
在 Windows 10/11 系统中，**Clash Verge Rev** 是目前开源社区中最受欢迎、维护最活跃的图形化代理客户端。它基于现代化的 Tauri 框架构建，内存占用低，原生支持最新的 Clash.Meta (Mihomo) 内核，具备强大的规则分流与延迟优选能力。

---

## 步骤一：获取客户端安装包
1. 访问 Clash Verge Rev 官方 GitHub Releases 页面，避免使用搜索引擎下载带有恶意插件的第三方修改版。
2. 64位 Windows 用户选择下载 `Clash.Verge_x.x.x_x64-setup.exe`。
3. 双击安装程序，按提示完成安装。首次启动若弹出 Windows Defender 防火墙警告，请务必勾选“专用网络”和“公用网络”并点击“允许访问”。

---

## 步骤二：导入机场订阅链接
1. 登录你所购买的机场后台控制台（如 [暮光网络](/airport/muguang/) 或 [微风网络](/airport/breezenet/)），找到并点击“一键复制 Clash 订阅链接”。
2. 打开 Clash Verge Rev 客户端，点击左侧菜单栏的 **“订阅（Profiles）”**。
3. 在顶部的 URL 输入框中粘贴订阅地址，点击右侧的 **“导入（Import）”** 按钮。
4. 导入成功后，鼠标右键点击配置卡片，选择 **“设为激活（Activate）”**。

---

## 步骤三：节点选择与开启系统代理
1. 点击左侧的 **“代理（Proxies）”** 页面。
2. 模式务必保持为 **“规则（Rule）”** 模式（实现国内直连、国外走节点）。
3. 点击右上角“闪电”图标进行批量延迟测速，选择一个延迟在 50ms 以内的优质香港或日本节点。
4. 点击左侧 **“设置（Settings）”**，将 **“系统代理（System Proxy）”** 开关打开即可无障碍浏览外网。

---

## 高阶设置：开启 TUN 模式
在“设置”中开启 **“Tun 模式”**，点击安装服务模式（Service Mode）。TUN 虚拟网卡将接管整台电脑的所有底层 TCP/UDP 流量，使不走系统代理的命令行、游戏客户端也能自动享受网络加速。

