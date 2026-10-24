---
title: "OpenWrt 软路由安装 OpenClash 插件实现全家设备自动科学上网"
description: "打造无感家庭代理网络。在 OpenWrt 软路由上安装 OpenClash，配置 Meta 内核与 Fake-IP 混合模式。"
platform: "Router"
publishDate: "2026-03-22"
clientApps: ["OpenWrt","OpenClash"]
---

## 为什么要在路由器端实现科学上网？
在路由器上配置代理后，全家所有设备（包括无法安装客户端的扫地机器人、电视机、PS5 游戏机）连上 Wi-Fi 即可自动无感分流，彻底摆脱每台手机电脑都要单独开软件的烦恼。

---

## OpenClash 核心配置步骤
1. 在 OpenWrt 软件源中安装 `luci-app-openclash` 插件。
2. 进入 OpenClash 控制面板，在“配置订阅”中导入机场订阅链接并转换为 Meta 配置。
3. 运行模式推荐选择 **“Fake-IP (TUN 模式)”**，开启核心守护进程。

