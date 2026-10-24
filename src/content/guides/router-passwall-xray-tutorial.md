---
title: "PassWall 插件配置教程：基于 Xray 核心的多节点负载均衡与分流"
description: "OpenWrt 上轻巧稳定的 PassWall 详细配置指南。节点自动故障转移与自动分流策略实操。"
platform: "Router"
publishDate: "2026-03-24"
clientApps: ["PassWall","Xray-core"]
---

## PassWall 的稳定性优势
PassWall 对低配路由器非常友好，采用模块化设计。用户可以针对 Google、Netflix、国内流量分别指定不同的节点出口。

---

## 负载均衡与节点自动切换
1. 添加节点订阅后，在“节点列表”中勾选参与负载均衡的节点。
2. 设置自动轮询时间，当某个节点延迟超过阈值时，路由器会自动将流量切换至备用专线。

