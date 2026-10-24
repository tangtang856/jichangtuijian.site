---
title: "客户端自动化健康检测（Url-Test / Fallback）无感容灾配置"
description: "实现断网自动秒级切换。配置健康检查周期与故障转移策略，告别手动频繁换节点。"
platform: "General"
publishDate: "2026-04-02"
clientApps: ["Clash","Sing-box"]
---

## 什么是自动故障转移？
客户端定期向 Google 生成 204 返回码的测试链接发送轻量探测包。一旦当前使用节点断流超过 5 秒，系统无感切换至次优备用节点，保障远程办公永不断线。

