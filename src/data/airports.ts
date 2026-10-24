export interface Plan {
  name: string;
  price: number;
  period: 'month' | 'quarter' | 'half-year' | 'year' | 'one-time';
  trafficGB: number;
  multiplier?: number;
  effectiveTrafficGB?: number;
  features?: string[];
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  badge?: string;
  tagline: string;
  description: string;

  officialUrl?: string;
  affiliateUrl?: string;

  startingPrice?: number;
  currency?: string;

  lineType: 'IPLC专线' | 'IEPL专线' | 'BGP中继' | '普通公网中转' | '混合线路';
  entryBgp: string;
  establishedYear: number;

  plans: Plan[];

  protocols: string[];
  regions: string[];

  deviceLimit?: string;

  aiSupport?: string[];
  streamingSupport?: string[];

  advantages: string[];
  disadvantages: string[];

  suitableFor: string[];

  sources: string[];
  lastVerified?: string;
  testStatus: 'tested' | 'official-data' | 'unverified';

  metrics: {
    stabilityScore: number;
    peakPerformanceScore: number;
    valueScore: number;
    supportScore: number;
    overallScore: number;
  };
}

export const airports: Airport[] = [
  {
    "id": "muguang",
    "name": "暮光网络",
    "slug": "muguang",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥20起步门槛与高性价比流量配额",
    "description": "暮光网络是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥20 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://varnexa.twilightaff.com/#/?code=8EtJCnBT",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=8EtJCnBT",
    "startingPrice": 20,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "专线基础月付",
        "price": 20,
        "period": "month",
        "trafficGB": 120,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥20/月起，120GB/月专线节点"
        ]
      },
      {
        "name": "海量进阶月付",
        "price": 38,
        "period": "month",
        "trafficGB": 300,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "大流量支持，满足多设备并发"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥20 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.4,
      "peakPerformanceScore": 9,
      "valueScore": 9.1,
      "supportScore": 8.8,
      "overallScore": 9.2
    }
  },
  {
    "id": "feimaoyun",
    "name": "飞猫云",
    "slug": "feimaoyun",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥7起步门槛与高性价比流量配额",
    "description": "飞猫云是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥7 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://flycat1.flycatvipaff.cc/#/?code=6AGf1hoH",
    "affiliateUrl": "https://flycat1.flycatvipaff.cc/#/?code=6AGf1hoH",
    "startingPrice": 7,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "特惠年付折算",
        "price": 7,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "年付折算约 ¥7/月起，150GB流量，优惠码 flycat888"
        ]
      },
      {
        "name": "畅享月付版",
        "price": 16,
        "period": "month",
        "trafficGB": 350,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "双线冗余入口智能调度"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥7 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.1,
      "peakPerformanceScore": 8.9,
      "valueScore": 9.5,
      "supportScore": 9.4,
      "overallScore": 9.2
    }
  },
  {
    "id": "breezenet",
    "name": "微风网络 Breezenet",
    "slug": "breezenet",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥8起步门槛与高性价比流量配额",
    "description": "微风网络 Breezenet是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥8 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
    "startingPrice": 8,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "微风入门版",
        "price": 8,
        "period": "month",
        "trafficGB": 200,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥8/月起，200GB超大流量，专属优惠码 weifeng90"
        ]
      },
      {
        "name": "微风进阶版",
        "price": 18,
        "period": "month",
        "trafficGB": 500,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "IEPL/IPLC高速专线，千兆原生IP解锁"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥8 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9,
      "peakPerformanceScore": 9.3,
      "valueScore": 9.7,
      "supportScore": 8.9,
      "overallScore": 9.2
    }
  },
  {
    "id": "lingdongcloud",
    "name": "灵动云",
    "slug": "lingdongcloud",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥20起步门槛与高性价比流量配额",
    "description": "灵动云是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥20 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr",
    "startingPrice": 20,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "均衡基础版",
        "price": 20,
        "period": "month",
        "trafficGB": 100,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "¥20/月起，100GB/月起均衡配置"
        ]
      },
      {
        "name": "畅享月付版",
        "price": 36,
        "period": "month",
        "trafficGB": 260,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "Trojan安全协议稳定防封"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥20 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9,
      "peakPerformanceScore": 9.3,
      "valueScore": 9.1,
      "supportScore": 9.4,
      "overallScore": 9.2
    }
  },
  {
    "id": "feiv",
    "name": "飞V",
    "slug": "feiv",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥4.9起步门槛与高性价比流量配额",
    "description": "飞V是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥4.9 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe",
    "affiliateUrl": "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe",
    "startingPrice": 4.9,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "轻量入门版",
        "price": 4.9,
        "period": "month",
        "trafficGB": 100,
        "multiplier": 1,
        "features": [
          "300 Mbps",
          "3台设备",
          "¥4.9/月起，突破性极低起步价"
        ]
      },
      {
        "name": "不限时海量版",
        "price": 29,
        "period": "month",
        "trafficGB": 200,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "5台设备",
          "流量永久不清零，极低成本应急备用"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "3台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥4.9 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.5,
      "peakPerformanceScore": 9.5,
      "valueScore": 9.7,
      "supportScore": 9.5,
      "overallScore": 9.5
    }
  },
  {
    "id": "laddercloud",
    "name": "梯子云 LadderCloud",
    "slug": "laddercloud",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥25起步门槛与高性价比流量配额",
    "description": "梯子云 LadderCloud是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥25 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://varnexa.ladderaff.com/#/?code=eC6eLAbq",
    "affiliateUrl": "https://varnexa.ladderaff.com/#/?code=eC6eLAbq",
    "startingPrice": 25,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "中转基础版",
        "price": 25,
        "period": "month",
        "trafficGB": 125,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥25/月起，125GB高速中转"
        ]
      },
      {
        "name": "海量专线版",
        "price": 48,
        "period": "month",
        "trafficGB": 350,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "最高可达500GB海量方案"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥25 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.2,
      "peakPerformanceScore": 9.4,
      "valueScore": 9.4,
      "supportScore": 9.2,
      "overallScore": 9.3
    }
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "slug": "yinxingren",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥24起步门槛与高性价比流量配额",
    "description": "隐形人是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥24 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
    "affiliateUrl": "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
    "startingPrice": 24,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "纯专线入门版",
        "price": 24,
        "period": "month",
        "trafficGB": 144,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "5台设备",
          "¥24/月起，144GB/月 IEPL纯专线，优惠码 yxr888"
        ]
      },
      {
        "name": "纯专线主力版",
        "price": 48,
        "period": "month",
        "trafficGB": 350,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "8台设备",
          "千兆大带宽，晚高峰零卡顿"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Hysteria 2"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "5台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥24 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.1,
      "peakPerformanceScore": 9.6,
      "valueScore": 9.1,
      "supportScore": 9.2,
      "overallScore": 9.3
    }
  },
  {
    "id": "wuyou",
    "name": "无忧",
    "slug": "wuyou",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥19起步门槛与高性价比流量配额",
    "description": "无忧是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥19 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
    "startingPrice": 19,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "无忧基础版",
        "price": 19,
        "period": "month",
        "trafficGB": 100,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "¥19/月起，100GB/月真实IPLC专线，优惠码 wuyou666"
        ]
      },
      {
        "name": "无忧进阶版",
        "price": 36,
        "period": "month",
        "trafficGB": 260,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "Shadowsocks / V2Ray多协议支持"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥19 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9,
      "peakPerformanceScore": 9.3,
      "valueScore": 9.6,
      "supportScore": 9.3,
      "overallScore": 9.2
    }
  },
  {
    "id": "lingmao",
    "name": "灵猫",
    "slug": "lingmao",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥25起步门槛与高性价比流量配额",
    "description": "灵猫是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥25 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://vip02.civetaff.com/#/?code=L8njCHcY",
    "affiliateUrl": "https://vip02.civetaff.com/#/?code=L8njCHcY",
    "startingPrice": 25,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "IPLC专线版",
        "price": 25,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥25/月起，150GB/月真实IPLC专线"
        ]
      },
      {
        "name": "旗舰大流量版",
        "price": 48,
        "period": "month",
        "trafficGB": 350,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "全节点原生IP流媒体与AI解锁"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥25 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.2,
      "peakPerformanceScore": 9.4,
      "valueScore": 9.7,
      "supportScore": 8.9,
      "overallScore": 9.3
    }
  },
  {
    "id": "flashleap",
    "name": "闪跃 FlashLeap",
    "slug": "flashleap",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥24起步门槛与高性价比流量配额",
    "description": "闪跃 FlashLeap是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥24 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://vip02.flashleapaff.com/#/?code=YAc3qeJu",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=YAc3qeJu",
    "startingPrice": 24,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "纯专线入门版",
        "price": 24,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥24/月起，150GB/月 IPLC纯专线，优惠码 shanyue"
        ]
      },
      {
        "name": "纯专线进阶版",
        "price": 46,
        "period": "month",
        "trafficGB": 360,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "低延迟游戏与4K流媒体极致体验"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥24 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 8.9,
      "peakPerformanceScore": 9.4,
      "valueScore": 9.3,
      "supportScore": 9.4,
      "overallScore": 9.2
    }
  },
  {
    "id": "firefly",
    "name": "萤火虫（Firefly）",
    "slug": "firefly",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥8起步门槛与高性价比流量配额",
    "description": "萤火虫（Firefly）是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥8 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://vip02.fireflyaff.com/#/?code=aQ8mjvgI",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=aQ8mjvgI",
    "startingPrice": 8,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "特惠年付折算",
        "price": 8,
        "period": "month",
        "trafficGB": 60,
        "multiplier": 1,
        "features": [
          "300 Mbps",
          "3台设备",
          "年付折算约 ¥8/月，60GB/月，优惠码 firefly"
        ]
      },
      {
        "name": "标准月付版",
        "price": 16,
        "period": "month",
        "trafficGB": 160,
        "multiplier": 1,
        "features": [
          "600 Mbps",
          "5台设备",
          "优质线路与VLESS协议支持"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "3台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥8 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 8.9,
      "peakPerformanceScore": 8.9,
      "valueScore": 9.7,
      "supportScore": 9.3,
      "overallScore": 9.1
    }
  },
  {
    "id": "kuajiecloud",
    "name": "跨界",
    "slug": "kuajiecloud",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥20起步门槛与高性价比流量配额",
    "description": "跨界是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥20 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://vip02.kuajieaff.com/#/?code=fyw3K4dM",
    "affiliateUrl": "https://vip02.kuajieaff.com/#/?code=fyw3K4dM",
    "startingPrice": 20,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "全专线基础版",
        "price": 20,
        "period": "month",
        "trafficGB": 120,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥20/月起，120GB/月全专线架构"
        ]
      },
      {
        "name": "全专线旗舰版",
        "price": 42,
        "period": "month",
        "trafficGB": 320,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "全专线架构Shadowsocks协议"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥20 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.4,
      "peakPerformanceScore": 9.1,
      "valueScore": 9.6,
      "supportScore": 8.8,
      "overallScore": 9.3
    }
  },
  {
    "id": "lightspeed",
    "name": "光速云 LightSpeed",
    "slug": "lightspeed",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥23起步门槛与高性价比流量配额",
    "description": "光速云 LightSpeed是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥23 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://mdlky.gsyaff.com/#/?code=h8U06aFi",
    "affiliateUrl": "https://mdlky.gsyaff.com/#/?code=h8U06aFi",
    "startingPrice": 23,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "隧道基础版",
        "price": 23,
        "period": "month",
        "trafficGB": 148,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥23/月起，148GB公网隧道中转，优惠码 jichangcha09"
        ]
      },
      {
        "name": "隧道高配版",
        "price": 42,
        "period": "month",
        "trafficGB": 360,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "高度灵活套餐，大带宽中转"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥23 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.4,
      "peakPerformanceScore": 9.1,
      "valueScore": 9.8,
      "supportScore": 9.3,
      "overallScore": 9.4
    }
  },
  {
    "id": "v2yun",
    "name": "唯兔云（V2云）",
    "slug": "v2yun",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥14.9起步门槛与高性价比流量配额",
    "description": "唯兔云（V2云）是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥14.9 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://vip02.civetaff.com/#/?code=L8njCHcY",
    "affiliateUrl": "https://vip02.civetaff.com/#/?code=L8njCHcY",
    "startingPrice": 14.9,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "IPLC超值版",
        "price": 14.9,
        "period": "month",
        "trafficGB": 100,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "¥14.9/月超低起步，100GB/月真实IPLC专线，优惠码 rabbit"
        ]
      },
      {
        "name": "IPLC进阶版",
        "price": 28,
        "period": "month",
        "trafficGB": 240,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "VLESS / SS双协议支持"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥14.9 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.5,
      "peakPerformanceScore": 9.4,
      "valueScore": 9.5,
      "supportScore": 8.7,
      "overallScore": 9.4
    }
  },
  {
    "id": "u1s1",
    "name": "U1S1（有一说一）",
    "slug": "u1s1",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥20起步门槛与高性价比流量配额",
    "description": "U1S1（有一说一）是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥20 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://pkdj7.vipaff.cc/#/?code=5khH0gk9",
    "affiliateUrl": "https://pkdj7.vipaff.cc/#/?code=5khH0gk9",
    "startingPrice": 20,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "三网优化基础版",
        "price": 20,
        "period": "month",
        "trafficGB": 120,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥20/月起，120GB/月 BGP三网优化 + IEPL，优惠码 U1S1"
        ]
      },
      {
        "name": "三网优化旗舰版",
        "price": 38,
        "period": "month",
        "trafficGB": 300,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "BGP国内入口多线智能分流"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥20 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.5,
      "peakPerformanceScore": 9.2,
      "valueScore": 9.5,
      "supportScore": 8.9,
      "overallScore": 9.4
    }
  },
  {
    "id": "jiliancloud",
    "name": "极连云",
    "slug": "jiliancloud",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥14.4起步门槛与高性价比流量配额",
    "description": "极连云是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥14.4 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://kdjhao.jlyvipaff.com/#/?code=KoOVOSUK",
    "affiliateUrl": "https://kdjhao.jlyvipaff.com/#/?code=KoOVOSUK",
    "startingPrice": 14.4,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "亲民双专线版",
        "price": 14.4,
        "period": "month",
        "trafficGB": 100,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "¥14.4/月亲民门槛，100GB/月 IPLC / IEPL双专线"
        ]
      },
      {
        "name": "双专线增强版",
        "price": 28,
        "period": "month",
        "trafficGB": 250,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "自研/通用多协议丰富支持"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥14.4 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.5,
      "peakPerformanceScore": 9.3,
      "valueScore": 9.7,
      "supportScore": 8.8,
      "overallScore": 9.4
    }
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "slug": "quanqiuyun",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥20起步门槛与高性价比流量配额",
    "description": "全球云是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥20 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://sswdh.gcvipaff.com/#/?code=MHKtn1Zj",
    "affiliateUrl": "https://sswdh.gcvipaff.com/#/?code=MHKtn1Zj",
    "startingPrice": 20,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "中转经典版",
        "price": 20,
        "period": "month",
        "trafficGB": 120,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "约 ¥20/月起，120GB/月经典中转优化，优惠码 tt88"
        ]
      },
      {
        "name": "中转海量版",
        "price": 38,
        "period": "month",
        "trafficGB": 300,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "VLESS / Trojan双协议"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥20 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.5,
      "peakPerformanceScore": 9.2,
      "valueScore": 9.6,
      "supportScore": 9.3,
      "overallScore": 9.4
    }
  },
  {
    "id": "guangnianti",
    "name": "光年梯",
    "slug": "guangnianti",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥12.6起步门槛与高性价比流量配额",
    "description": "光年梯是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥12.6 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://ggmq.gntaff.com/#/?code=p4Zyugsg",
    "affiliateUrl": "https://ggmq.gntaff.com/#/?code=p4Zyugsg",
    "startingPrice": 12.6,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "击穿底价版",
        "price": 12.6,
        "period": "month",
        "trafficGB": 110,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "¥12.6击穿底价，110GB/月高质量IEPL专线"
        ]
      },
      {
        "name": "大流量专线版",
        "price": 26,
        "period": "month",
        "trafficGB": 280,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "Shadowsocks轻量低延迟协议"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥12.6 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9,
      "peakPerformanceScore": 9.2,
      "valueScore": 9.5,
      "supportScore": 9.3,
      "overallScore": 9.2
    }
  },
  {
    "id": "sogoyun",
    "name": "Sogo云",
    "slug": "sogoyun",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥25起步门槛与高性价比流量配额",
    "description": "Sogo云是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥25 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://wzjc.sogoyunaff.cc/#/?code=x0Urrpy6",
    "affiliateUrl": "https://wzjc.sogoyunaff.cc/#/?code=x0Urrpy6",
    "startingPrice": 25,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "企业专线版",
        "price": 25,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "600 Mbps",
          "5台设备",
          "¥25/月起，150GB/月 IEPL企业级专线"
        ]
      },
      {
        "name": "企业尊享版",
        "price": 46,
        "period": "month",
        "trafficGB": 350,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "8台设备",
          "自研协议/通用协议双支持"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "5台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥25 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.5,
      "peakPerformanceScore": 9.5,
      "valueScore": 9.5,
      "supportScore": 9.5,
      "overallScore": 9.5
    }
  },
  {
    "id": "yuzhoucloud",
    "name": "宇宙云 YuZhou",
    "slug": "yuzhoucloud",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥14.9起步门槛与高性价比流量配额",
    "description": "宇宙云 YuZhou是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥14.9 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://wzjc.yuzoucloud.cc/#/?code=b4Fi0Szw",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=b4Fi0Szw",
    "startingPrice": 14.9,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "双线超值版",
        "price": 14.9,
        "period": "month",
        "trafficGB": 60,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "¥14.9/月起，60GB/月起双专线，优惠码 YUZHOU553"
        ]
      },
      {
        "name": "双线畅享版",
        "price": 28,
        "period": "month",
        "trafficGB": 180,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "IPLC / IEPL双专线架构稳定护航"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥14.9 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.2,
      "peakPerformanceScore": 9.4,
      "valueScore": 9.1,
      "supportScore": 9.1,
      "overallScore": 9.2
    }
  },
  {
    "id": "ermaoyun",
    "name": "二猫云 2mao",
    "slug": "ermaoyun",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥15起步门槛与高性价比流量配额",
    "description": "二猫云 2mao是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥15 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://waaa.2maoyunaff.cc/#/?code=k164I9vP",
    "affiliateUrl": "https://waaa.2maoyunaff.cc/#/?code=k164I9vP",
    "startingPrice": 15,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "多节点基础版",
        "price": 15,
        "period": "month",
        "trafficGB": 120,
        "multiplier": 1,
        "features": [
          "400 Mbps",
          "4台设备",
          "约 ¥15/月起，多种套餐可选，多节点覆盖"
        ]
      },
      {
        "name": "多节点大流量版",
        "price": 30,
        "period": "month",
        "trafficGB": 280,
        "multiplier": 1,
        "features": [
          "800 Mbps",
          "6台设备",
          "多地区节点无缝切换"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Vmess"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥15 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.3,
      "peakPerformanceScore": 9.6,
      "valueScore": 9.3,
      "supportScore": 8.8,
      "overallScore": 9.3
    }
  },
  {
    "id": "yifanyun",
    "name": "一翻云 1fly",
    "slug": "yifanyun",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥25起步门槛与高性价比流量配额",
    "description": "一翻云 1fly是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥25 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://wzjc.1flyunaff.cc/#/?code=ioDl0bjT",
    "affiliateUrl": "https://wzjc.1flyunaff.cc/#/?code=ioDl0bjT",
    "startingPrice": 25,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "专线畅行版",
        "price": 25,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥25/月起，150GB/月专线节点"
        ]
      },
      {
        "name": "专线旗舰版",
        "price": 45,
        "period": "month",
        "trafficGB": 350,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "主流协议高速稳定传输"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥25 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.3,
      "peakPerformanceScore": 9.2,
      "valueScore": 9.4,
      "supportScore": 9.3,
      "overallScore": 9.3
    }
  },
  {
    "id": "edgenova",
    "name": "边缘节点 EdgeNova",
    "slug": "edgenova",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥86起步门槛与高性价比流量配额",
    "description": "边缘节点 EdgeNova是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥86 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://work.edgenovaaff.cc/#/?code=X5qMxgMA",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/?code=X5qMxgMA",
    "startingPrice": 86,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "年付大流量版",
        "price": 86,
        "period": "year",
        "trafficGB": 200,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "5台设备",
          "约 ¥86/年起（折合月付约 ¥7.2/月），大流量IEPL专线直连"
        ]
      },
      {
        "name": "进阶专线版",
        "price": 168,
        "period": "year",
        "trafficGB": 450,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "8台设备",
          "专用客户端支持与高带宽保障"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "5台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥86 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.3,
      "peakPerformanceScore": 9.4,
      "valueScore": 9.3,
      "supportScore": 9.1,
      "overallScore": 9.3
    }
  },
  {
    "id": "kexincloud",
    "name": "可信云",
    "slug": "kexincloud",
    "badge": "IPLC专线",
    "tagline": "IPLC专线网络架构 · ¥9起步门槛与高性价比流量配额",
    "description": "可信云是一家专注于稳定高可用网络加速的服务商，主打IPLC专线线路架构。起步价格仅为 ¥9 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://work.kosingaff.com/#/?code=xL7Nwyrh",
    "affiliateUrl": "https://work.kosingaff.com/#/?code=xL7Nwyrh",
    "startingPrice": 9,
    "currency": "CNY",
    "lineType": "IPLC专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "IPLC特惠版",
        "price": 9,
        "period": "month",
        "trafficGB": 45,
        "multiplier": 1,
        "features": [
          "300 Mbps",
          "3台设备",
          "¥9/月起，45GB/月真实IPLC专线"
        ]
      },
      {
        "name": "IPLC标准版",
        "price": 22,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "600 Mbps",
          "5台设备",
          "低门槛纯内网专线保障"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "3台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IPLC专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥9 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9,
      "peakPerformanceScore": 9.2,
      "valueScore": 9.4,
      "supportScore": 9.4,
      "overallScore": 9.2
    }
  },
  {
    "id": "sujie",
    "name": "速界 SuJie",
    "slug": "sujie",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥25起步门槛与高性价比流量配额",
    "description": "速界 SuJie是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥25 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://work.speedworldaff.cc/#/?code=B3AkKmN7",
    "affiliateUrl": "https://work.speedworldaff.cc/#/?code=B3AkKmN7",
    "startingPrice": 25,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "新手优化版",
        "price": 25,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "500 Mbps",
          "4台设备",
          "¥25/月起，约150GB按套餐而定，新手优化线路"
        ]
      },
      {
        "name": "极速畅联版",
        "price": 45,
        "period": "month",
        "trafficGB": 350,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "6台设备",
          "官方客户端一键连接零门槛"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "4台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥25 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.3,
      "peakPerformanceScore": 8.9,
      "valueScore": 9.7,
      "supportScore": 9.2,
      "overallScore": 9.3
    }
  },
  {
    "id": "kuaili",
    "name": "快狸 KuaiLi",
    "slug": "kuaili",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥10起步门槛与高性价比流量配额",
    "description": "快狸 KuaiLi是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥10 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://work.kuailicloud.cc/#/?code=WP3eonx2",
    "affiliateUrl": "https://work.kuailicloud.cc/#/?code=WP3eonx2",
    "startingPrice": 10,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "IEPL轻量年付折算",
        "price": 10,
        "period": "month",
        "trafficGB": 30,
        "multiplier": 1,
        "features": [
          "300 Mbps",
          "3台设备",
          "年付折算约 ¥10/月起，30GB/月 IEPL专线"
        ]
      },
      {
        "name": "IEPL标准版",
        "price": 24,
        "period": "month",
        "trafficGB": 120,
        "multiplier": 1,
        "features": [
          "600 Mbps",
          "5台设备",
          "自研客户端极简上手体验"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "3台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥10 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.3,
      "peakPerformanceScore": 8.9,
      "valueScore": 9.8,
      "supportScore": 9.2,
      "overallScore": 9.3
    }
  },
  {
    "id": "wavenet",
    "name": "浪网 WaveNet",
    "slug": "wavenet",
    "badge": "IEPL专线",
    "tagline": "IEPL专线网络架构 · ¥30起步门槛与高性价比流量配额",
    "description": "浪网 WaveNet是一家专注于稳定高可用网络加速的服务商，主打IEPL专线线路架构。起步价格仅为 ¥30 起，全节点支持主流流媒体 4K 播放与 ChatGPT / Claude AI 原生解锁，适配 Clash Verge Rev、Shadowrocket 小火箭、Sing-box 等多平台客户端一键导入配置，晚高峰丢包率低且表现顺畅。",
    "officialUrl": "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy",
    "startingPrice": 30,
    "currency": "CNY",
    "lineType": "IEPL专线",
    "entryBgp": "国内多线 BGP 优化智能入口",
    "establishedYear": 2021,
    "plans": [
      {
        "name": "自研优化版",
        "price": 30,
        "period": "month",
        "trafficGB": 150,
        "multiplier": 1,
        "features": [
          "600 Mbps",
          "5台设备",
          "¥30/月起，150GB/月自研客户端优化线路"
        ]
      },
      {
        "name": "自研旗舰版",
        "price": 58,
        "period": "month",
        "trafficGB": 360,
        "multiplier": 1,
        "features": [
          "1000 Mbps",
          "8台设备",
          "VLESS先进协议高流量方案"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "台湾",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "deviceLimit": "5台设备 同时在线",
    "aiSupport": [
      "ChatGPT 4o / Plus",
      "Claude 3.5 Sonnet",
      "Gemini Pro",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K跨区",
      "Disney+",
      "YouTube Premium",
      "HBO Max"
    ],
    "advantages": [
      "全线采用 IEPL专线 传输架构，晚高峰抗封锁抖动性能优异",
      "起步套餐低至 ¥30 起，每GB流量性价比非常突出",
      "原生解锁 ChatGPT / Claude AI 网页端与各大海外流媒体 4K",
      "支持主流客户端一键导入，新手操作零技术门槛"
    ],
    "disadvantages": [
      "低价轻量档位限制同时在线设备数量",
      "部分极特殊敏感时期若遇入口维护需刷新订阅切换备用节点"
    ],
    "suitableFor": [
      "日常网页浏览与社交媒体",
      "看 YouTube / Netflix 4K 高清视频",
      "ChatGPT / Claude AI 辅助办公",
      "预算适中追求稳定性的用户"
    ],
    "sources": [
      "服务商官方公开资费",
      "节点连通性探针实测数据",
      "流媒体与AI解锁自动化检测"
    ],
    "lastVerified": "2026-03-24",
    "testStatus": "tested",
    "metrics": {
      "stabilityScore": 9.5,
      "peakPerformanceScore": 9.4,
      "valueScore": 9.1,
      "supportScore": 9.1,
      "overallScore": 9.3
    }
  }
];

// 辅助方法：获取按性价比计算每GB单价并排序
export function getAirportsSortedByValue() {
  return [...airports].sort((a, b) => {
    const aMinPlan = a.plans.find(p => p.period === 'month') || a.plans[0];
    const bMinPlan = b.plans.find(p => p.period === 'month') || b.plans[0];
    const aCostPerGb = aMinPlan ? aMinPlan.price / aMinPlan.trafficGB : 999;
    const bCostPerGb = bMinPlan ? bMinPlan.price / bMinPlan.trafficGB : 999;
    return aCostPerGb - bCostPerGb;
  });
}

// 辅助方法：按综合评分排序
export function getAirportsSortedByOverall() {
  return [...airports].sort((a, b) => b.metrics.overallScore - a.metrics.overallScore);
}

// 辅助方法：按稳定性排序
export function getAirportsSortedByStability() {
  return [...airports].sort((a, b) => b.metrics.stabilityScore - a.metrics.stabilityScore);
}

// 辅助方法：按低预算入门排序
export function getAirportsSortedByBudget() {
  return [...airports].sort((a, b) => (a.startingPrice || 0) - (b.startingPrice || 0));
}
