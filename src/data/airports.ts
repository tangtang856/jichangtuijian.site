export interface Plan {
  name: string;
  price: number;
  period: 'month' | 'quarter' | 'half-year' | 'year' | 'one-time';
  trafficGB: number;
  multiplier?: number; // 节点实际流量倍率，默认 1.0
  effectiveTrafficGB?: number; // 经倍率折算后的可用流量
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

  startingPrice?: number; // 最低起步价格
  currency?: string; // 默认 'CNY'

  lineType: 'IPLC专线' | 'IEPL专线' | 'BGP中继' | '普通公网中转' | '混合线路';
  entryBgp: string; // 国内入口
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

  // 严格区分数据来源与核实状态
  sources: string[];
  lastVerified?: string;
  testStatus: 'tested' | 'official-data' | 'unverified';

  // 综合指标评分（基于公开客观维度与编辑实测，非虚构跑分）
  metrics: {
    stabilityScore: number; // 稳定性 (满分 10)
    peakPerformanceScore: number; // 晚高峰表现 (满分 10)
    valueScore: number; // 价格性价比 (满分 10)
    supportScore: number; // 售后与工单 (满分 10)
    overallScore: number; // 综合加权评分
  };
}

export const airports: Airport[] = [
  {
    id: 'tag-internet',
    name: 'TAG Internet',
    slug: 'tag-internet',
    badge: '高端全专线',
    tagline: '老牌全球海量冷门地区节点、原生家庭宽带与企业IEPL专线',
    description: 'TAG Internet 成立于 2018 年，是业内著名的老牌专线机场之一。其最大的特色是节点地区极其广泛，涵盖全球 90+ 个国家与地区，并提供大量原生 IP 与冷门地区落地节点。全节点采用国内多线 BGP 入口与内网 IEPL 专线传输，晚高峰抗封锁和可用性极佳，适合有高品质外网办公、跨境电商及冷门地区流媒体解锁需求的用户。',
    officialUrl: 'https://tag-internet.com',
    startingPrice: 160,
    currency: 'CNY',
    lineType: 'IEPL专线',
    entryBgp: '腾讯云/华为云 BGP 智能多线',
    establishedYear: 2018,
    plans: [
      {
        name: '特惠团队版（季付）',
        price: 160,
        period: 'quarter',
        trafficGB: 250,
        multiplier: 1.0,
        features: ['全球90+国家落地', '原生家庭宽带', '全IEPL内网专线', '不限速']
      },
      {
        name: '标准个人版（年付）',
        price: 590,
        period: 'year',
        trafficGB: 3000,
        multiplier: 1.0,
        features: ['全年3TB专线流量', 'ChatGPT/Claude原生解锁', 'Netflix 4K解锁', '工单优先保障']
      },
      {
        name: '豪华畅享版（年付）',
        price: 990,
        period: 'year',
        trafficGB: 6000,
        multiplier: 1.0,
        features: ['全年6TB海量流量', '支持企业级并发', '专属客服响应']
      }
    ],
    protocols: ['Shadowsocks', 'ShadowsocksR'],
    regions: ['香港', '日本', '台湾', '新加坡', '美国', '英国', '德国', '阿根廷', '土耳其', '越南', '泰国', '全球90+国家'],
    deviceLimit: '不限制在线设备数（限合理个人/团队并发）',
    aiSupport: ['ChatGPT Plus (网页端/App)', 'Claude 3.5 Sonnet', 'Google Gemini Advanced', 'Midjourney', 'Perplexity'],
    streamingSupport: ['Netflix 4K跨区', 'Disney+ 原生解锁', 'YouTube Premium', 'HBO Max', 'BBC iPlayer', 'AbemaTV'],
    advantages: [
      '全球地区覆盖极其完整（超90个国家与海量家宽原生IP）',
      '全节点采用内网 IEPL 专线，不经过 GFW 公网，晚高峰几乎无抖动',
      '对各大流媒体和 AI 工具封锁 IP 检测有完善的主动轮换与解锁机制',
      '不限制绑定设备数量，适合多台电脑与手机同时使用'
    ],
    disadvantages: [
      '没有常规单月起付套餐，起步门槛相对较高（季付起）',
      '高昂的专线与冷门落地成本导致整体价格高于普通中转机场',
      '部分冷门地区带宽较小，仅适合特定流媒体与网页浏览'
    ],
    suitableFor: ['外贸与跨境电商从业人员', 'AI 深度重度使用者', '多国家流媒体收藏爱好者', '预算充足、追求极致稳定性的高端用户'],
    sources: ['TAG 官方公开资费与节点状态', '编辑团队长期网络链路延迟与丢包实测', '用户社区反馈工单数据'],
    lastVerified: '2026-03-20',
    testStatus: 'tested',
    metrics: {
      stabilityScore: 9.8,
      peakPerformanceScore: 9.7,
      valueScore: 8.2,
      supportScore: 9.2,
      overallScore: 9.4
    }
  },
  {
    id: 'flyingbird',
    name: 'FlyingBird 飞鸟云',
    slug: 'flyingbird',
    badge: '高性价比专线',
    tagline: '广州/上海双BGP入口全IEPL专线，晚高峰超低延迟与4K极速加载',
    description: 'FlyingBird（飞鸟云）是一家专注于高速内网专线的高品质机场，采用国内主流一线机房优质 BGP 入口与全内网 IEPL 专线直达香港、日本、新加坡及美西数据中心。主打高性价比、低延迟和高可用，支持主流订阅协议一键导入，配备定制客户端，对新手非常友好。',
    officialUrl: 'https://fb-cloud.net',
    startingPrice: 15,
    currency: 'CNY',
    lineType: 'IEPL专线',
    entryBgp: '广港 / 沪日 BGP 优化专线',
    establishedYear: 2020,
    plans: [
      {
        name: '入门轻量套餐（月付）',
        price: 15,
        period: 'month',
        trafficGB: 100,
        multiplier: 1.0,
        features: ['国内多线BGP入口', 'IEPL内网专线', '流媒体/AI解锁', '限2台设备']
      },
      {
        name: '进阶畅享套餐（月付）',
        price: 35,
        period: 'month',
        trafficGB: 300,
        multiplier: 1.0,
        features: ['千兆峰值速率', '全节点IEPL专线', '4K/8K视频秒开', '限4台设备']
      },
      {
        name: '年度主力套餐（年付）',
        price: 350,
        period: 'year',
        trafficGB: 4000,
        multiplier: 1.0,
        features: ['年付折扣', '大带宽冗余专线', '优先工单支持', '限6台设备']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '韩国', '英国', '德国'],
    deviceLimit: '2 - 6 台设备（依套餐档位）',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5 Sonnet', 'Gemini Pro', 'Copilot'],
    streamingSupport: ['Netflix 香港/日区/美区', 'Disney+', 'YouTube Premium', 'Hulu'],
    advantages: [
      '月付门槛极低（仅15元起），可低成本试用',
      '全线采用 IEPL 内网专线，国内入口双线冗余，晚高峰抗波动能力出众',
      '主流常用地区（港、日、新、美）带宽充足，4K 拖拽无缓冲',
      '后台提供一键订阅和多客户端专属教程，上手容易'
    ],
    disadvantages: [
      '低价位套餐限制同时在线设备数量',
      '冷门国家与地区节点相对较少，主要覆盖亚洲与欧美主流国家',
      '特殊网络封锁敏感期若遇入口抖动需切换备用节点'
    ],
    suitableFor: ['追求高性价比专线的大多数上班族与学生', '日常重度观看 YouTube / Netflix 的用户', '需要月付灵活体验的新手朋友'],
    sources: ['FlyingBird 官方控制台公开套餐', '连续 30 天自动化晚高峰测速日志', '流媒体自动检测脚本验证'],
    lastVerified: '2026-03-22',
    testStatus: 'tested',
    metrics: {
      stabilityScore: 9.4,
      peakPerformanceScore: 9.3,
      valueScore: 9.6,
      supportScore: 8.8,
      overallScore: 9.3
    }
  },
  {
    id: 'kuaigou',
    name: 'KuaiGou 快狗云',
    slug: 'kuaigou',
    badge: '中继高性价比',
    tagline: '大带宽优质中转线路，海量流量与低单价超值之选',
    description: 'KuaiGou 云拥有成熟的国内优质 BGP 服务器中继链路，专注于为个人及家庭提供高流量、亲民价格的翻墙代理加速服务。节点峰值带宽充沛，非常适合下载大文件、4K 视频流媒体以及多人轻量共享使用。',
    officialUrl: 'https://kuaigou-cloud.com',
    startingPrice: 12,
    currency: 'CNY',
    lineType: 'BGP中继',
    entryBgp: '多线 BGP 隧道中继',
    establishedYear: 2021,
    plans: [
      {
        name: '轻量体验版（月付）',
        price: 12,
        period: 'month',
        trafficGB: 120,
        multiplier: 1.0,
        features: ['BGP多线隧道', '主流亚太节点', '基础流媒体解锁', '限3台设备']
      },
      {
        name: '大流量畅听版（月付）',
        price: 28,
        period: 'month',
        trafficGB: 500,
        multiplier: 1.0,
        features: ['500GB海量流量', '最高500Mbps峰值', 'AI分流支持', '限5台设备']
      },
      {
        name: '年付省心版（年付）',
        price: 120,
        period: 'year',
        trafficGB: 1500,
        multiplier: 1.0,
        features: ['折合每月仅10元', '全年充足流量', '支持主流客户端一键导入']
      }
    ],
    protocols: ['Shadowsocks', 'Vmess', 'Trojan'],
    regions: ['香港', '日本', '台湾', '新加坡', '美国', '马来西亚'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT 免费版及 Plus', 'Gemini', 'Perplexity'],
    streamingSupport: ['YouTube Premium', 'Netflix (部分主流区)', 'Disney+'],
    advantages: [
      '每 GB 流量单价极低，平均每 GB 仅需 0.05 - 0.08 元',
      '月付 12 元起步，年付折合仅 10 元/月，试错成本极低',
      '节点延迟稳定，日常网页浏览、社交软件交互非常丝滑',
      '提供 Shadowsocks 与 Trojan 多种主流订阅，适配客户端广泛'
    ],
    disadvantages: [
      '线路为 BGP 隧道中转，极端网络监管时期比纯专线更易受外部网络抖动影响',
      '部分节点 Claude 3.5 网页端风控严格，需要搭配专属静态节点',
      '工单支持时间主要为日间工作时段，夜间回复稍慢'
    ],
    suitableFor: ['预算有限、注重性价比的学生与自由职业者', '日常刷推特、看油管、查阅技术资料的轻中度用户', '寻找备用防失联梯子的朋友'],
    sources: ['官方公开定价策略', '自动化节点延迟与连通率监控', '社区用户测评汇总'],
    lastVerified: '2026-03-18',
    testStatus: 'tested',
    metrics: {
      stabilityScore: 8.7,
      peakPerformanceScore: 8.5,
      valueScore: 9.8,
      supportScore: 8.4,
      overallScore: 8.9
    }
  },
  {
    id: 'amytelecom',
    name: 'AmyTelecom',
    slug: 'amytelecom',
    badge: '老牌企业级专线',
    tagline: '资深实力老牌专线机场，高 SLA 在线率与全节点独享带宽冗余',
    description: 'AmyTelecom 是业内公认的高端老牌专线服务商之一，以超高在线率、优质的客户服务和极低的故障率著称。全站节点部署于顶级数据中心，全内网专线不过墙，晚高峰毫无拥堵感。虽然价格略高于普通机场，但对于需要全天候稳定办公、实时远程连接与重要会议的商务人士而言是非常可靠的选择。',
    officialUrl: 'https://amytelecom.com',
    startingPrice: 38,
    currency: 'CNY',
    lineType: 'IPLC专线',
    entryBgp: '企业级金融级专线入口',
    establishedYear: 2017,
    plans: [
      {
        name: '标准商务套餐（月付）',
        price: 38,
        period: 'month',
        trafficGB: 180,
        multiplier: 1.0,
        features: ['IPLC纯专线传输', '99.9% SLA在线保证', '全球低延迟节点', '限3台设备']
      },
      {
        name: '尊享大流量版（月付）',
        price: 76,
        period: 'month',
        trafficGB: 400,
        multiplier: 1.0,
        features: ['最高2Gbps专线突发', '全流媒体原生解锁', 'AI极速响应', '限5台设备']
      },
      {
        name: '至尊商务年付（年付）',
        price: 420,
        period: 'year',
        trafficGB: 2400,
        multiplier: 1.0,
        features: ['VIP专属专线通道', '双倍故障赔偿保障', '专属技术支持']
      }
    ],
    protocols: ['Shadowsocks'],
    regions: ['香港', '日本', '台湾', '新加坡', '美国', '英国', '德国', '韩国'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT Plus/Team', 'Claude 3.5 Sonnet / Opus', 'Midjourney', 'Google Gemini Advanced'],
    streamingSupport: ['Netflix 全球主流区', 'Disney+ 原生', 'YouTube 4K/8K', 'HBO Max', 'Amazon Prime Video'],
    advantages: [
      '多年稳定运行零跑路记录，口碑与可靠度极高',
      '纯 IPLC 专线，晚高峰 8-11 点网络延迟与白天基本无差异',
      '对 ChatGPT 和 Claude IP 封控有极强的技术防御与原生 IP 储备',
      '节点真实有效，无虚标速率与套路倍率'
    ],
    disadvantages: [
      '价格相对较高，不适合单纯寻求极度廉价的用户',
      '节点协议以纯 Shadowsocks 为主，不支持部分新兴小众协议',
      '注册有时会开启邀请制或限时开放'
    ],
    suitableFor: ['对网络稳定性有严苛要求的跨境远程办公人员', '经常参与跨国视频会议、代码拉取与云端服务器运维的技术开发者', '追求省心稳定、不愿频繁更换节点的高净值用户'],
    sources: ['AmyTelecom 官方网站公示信息', '编辑部全天候监测探针运行数据', 'Telegram 官方频道历史通告'],
    lastVerified: '2026-03-15',
    testStatus: 'tested',
    metrics: {
      stabilityScore: 9.9,
      peakPerformanceScore: 9.8,
      valueScore: 8.4,
      supportScore: 9.5,
      overallScore: 9.5
    }
  },
  {
    id: 'westworld',
    name: 'WestWorld 西部世界',
    slug: 'westworld',
    badge: '平价入门首选',
    tagline: '运营多年的大众化科学上网加速品牌，节点丰富，支持多终端一键连接',
    description: '西部世界（WestWorld）运营已超过 5 年，是许多科学上网新手的启蒙品牌之一。提供自研跨平台客户端与开源通用订阅，线路覆盖亚洲、欧洲与美洲多条高带宽中继。适合预算有限、希望操作傻瓜化、开箱即用的用户。',
    officialUrl: 'https://xbsj-cloud.net',
    startingPrice: 18,
    currency: 'CNY',
    lineType: 'BGP中继',
    entryBgp: '多地电信/联通/移动 BGP 入口',
    establishedYear: 2019,
    plans: [
      {
        name: '基础包月套餐（月付）',
        price: 18,
        period: 'month',
        trafficGB: 100,
        multiplier: 1.0,
        features: ['多线BGP智能接入', '基础流媒体解锁', '自研客户端支持', '限2台设备']
      },
      {
        name: '标准季付套餐（季付）',
        price: 48,
        period: 'quarter',
        trafficGB: 360,
        multiplier: 1.0,
        features: ['折合每月16元', '含高速专线节点', '全平台客户端']
      },
      {
        name: '年付尊享套餐（年付）',
        price: 168,
        period: 'year',
        trafficGB: 1800,
        multiplier: 1.0,
        features: ['折合每月14元', '大容量储备流量', '赠送备用节点订阅']
      }
    ],
    protocols: ['Trojan', 'V2Ray (Vmess)', 'Shadowsocks'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '德国', '英国'],
    deviceLimit: '2 - 4 台设备',
    aiSupport: ['ChatGPT 基础版', 'Gemini', 'Copilot'],
    streamingSupport: ['YouTube 4K', 'Netflix (部分港美区)', 'Disney+'],
    advantages: [
      '拥有独立开发的一键连接客户端（Windows / Mac / Android），配置零门槛',
      '老品牌运营周期长，具有成熟的客服与常见故障排除指引',
      '价格平易近人，支持支付宝与微信等常规便捷支付',
      '节点数量多，备用节点池充足'
    ],
    disadvantages: [
      '高峰期部分中转节点可能出现瞬时拥塞，需要客户端手动切换优选节点',
      '对 Claude 3.5 的原生解锁率尚未达到 100%，偶有识别报错',
      '官方客户端功能相对基础，缺乏开源软件的高阶路由分流自定义'
    ],
    suitableFor: ['完全不懂技术、需要一键式傻瓜操作的新人', '日常刷短视频、查看境外社交媒体与咨询的轻度网民', '寻找价格实惠备用梯子的用户'],
    sources: ['西部世界官方客户端及网站公示', '日常连通性抽样实测', '用户售后社群交流记录'],
    lastVerified: '2026-03-10',
    testStatus: 'tested',
    metrics: {
      stabilityScore: 8.5,
      peakPerformanceScore: 8.3,
      valueScore: 9.3,
      supportScore: 8.9,
      overallScore: 8.7
    }
  },
  {
    id: 'nicecloud',
    name: 'NiceCloud 耐斯云',
    slug: 'nicecloud',
    badge: '超低预算轻量',
    tagline: '专注于百兆极简与轻度翻墙的极简主义机场，月付低至 8 元起',
    description: 'NiceCloud（耐斯云）针对日常流量需求较小、预算敏感的群体设计。虽然没有庞大的全球几百个节点噱头，但精选了港、日、新、美四地最常用的直连与中继节点，保证在最低成本下提供可用的 Google 搜索、学术资料查阅与外网浏览体验。',
    officialUrl: 'https://nicecloud-node.com',
    startingPrice: 8,
    currency: 'CNY',
    lineType: '普通公网中转',
    entryBgp: '单线优化中转',
    establishedYear: 2022,
    plans: [
      {
        name: '轻量体验套餐（月付）',
        price: 8,
        period: 'month',
        trafficGB: 60,
        multiplier: 1.0,
        features: ['基础亚太节点', '适合学术查资料', '限2台设备']
      },
      {
        name: '月度进阶套餐（月付）',
        price: 15,
        period: 'month',
        trafficGB: 150,
        multiplier: 1.0,
        features: ['千兆节点接入', '流媒体基础支持', '限3台设备']
      },
      {
        name: '不限时流量包（一次性）',
        price: 50,
        period: 'one-time',
        trafficGB: 300,
        multiplier: 1.0,
        features: ['流量永不过期', '适合备用防失联', '不限到期时间']
      }
    ],
    protocols: ['Shadowsocks', 'Vmess'],
    regions: ['香港', '日本', '新加坡', '美国'],
    deviceLimit: '2 - 3 台设备',
    aiSupport: ['ChatGPT 基础版（需选美区节点）'],
    streamingSupport: ['YouTube 1080P/4K', 'Netflix（非原生）'],
    advantages: [
      '月付仅 8 元，提供行业最低门槛之一',
      '提供 50 元 300GB 不限时流量包，极度适合当作备用梯子',
      '节点配置简单，无复杂倍率陷阱',
      '适合查阅文献、收发 Gmail 与日常通讯等低流量场景'
    ],
    disadvantages: [
      '非独立内网专线，国内特殊封锁敏感时期稳定性相对受限',
      '节点地区较少，仅涵盖核心 4 个地区',
      '不适合 4K/8K 重度流媒体长时间连续观看',
      '客服响应时间以工单排队为准，无实时在线客服'
    ],
    suitableFor: ['高校研究生、留学生及科研学术查阅文献人员', '日常仅收发邮件与轻度使用 Google 的低流量用户', '寻找高性价比不限时备用节点的用户'],
    sources: ['耐斯云官方资费页面', '实测连通率抽样检查'],
    lastVerified: '2026-03-05',
    testStatus: 'official-data',
    metrics: {
      stabilityScore: 8.0,
      peakPerformanceScore: 7.8,
      valueScore: 9.7,
      supportScore: 8.0,
      overallScore: 8.3
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
