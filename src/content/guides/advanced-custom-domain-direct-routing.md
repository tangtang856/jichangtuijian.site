---
title: "如何配置局域网 NAS、公司内网与国内政务网站强制直连"
description: "避免翻墙代理干扰内网通讯。手把手教你添加私有 IP 段与特殊内网域名直连白名单。"
platform: "General"
publishDate: "2026-04-01"
clientApps: ["All Clients"]
---

## 常见内网访问冲突
开启全局代理后，访问群晖 NAS 网页（192.168.1.100）或公司内网 OA 系统突然打不开。
只需在客户端分流规则顶部添加：
```yaml
rules:
  - IP-CIDR,192.168.0.0/16,DIRECT
  - IP-CIDR,10.0.0.0/8,DIRECT
  - DOMAIN-SUFFIX,internal.company.com,DIRECT
```

