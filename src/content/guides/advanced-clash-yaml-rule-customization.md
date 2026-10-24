---
title: "手把手教你编写自定义 Clash YAML 规则组与精准分流策略"
description: "玩转 Clash 配置文件。深入理解 rule-providers、proxy-groups、DOMAIN-KEYWORD 与 IP-CIDR 语法。"
platform: "General"
publishDate: "2026-03-30"
clientApps: ["Clash Verge Rev","Mihomo"]
---

## Clash 规则执行顺序法则
Clash 的规则自上而下匹配，一旦命中立即执行相应策略。
因此，特定域名规则（DOMAIN-SUFFIX）必须写在大范围地理规则（GEOIP）之前。

