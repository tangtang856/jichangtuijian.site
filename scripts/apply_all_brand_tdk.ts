// scripts/apply_all_brand_tdk.ts
import fs from 'node:fs';
import path from 'node:path';
import { airports } from '../src/data/airports';

const brandTdkMap: Record<string, {
  title: string;
  description: string;
  keywords: string;
  reviewTitle: string;
  reviewDescription: string;
  reviewKeywords: string;
}> = {
  muguang: {
    title: "暮光网络机场怎么样？2026套餐价格/流量配额/IEPL企业专线节点测速评测档案 | 机场推荐网",
    description: "2026专业暮光网络机场详细评测档案。深度解析企业级IEPL内网专线规格、华南与华东BGP智能多活入口，起步价格¥20/月配120GB高速流量。实测晚高峰0丢包、800Mbps突发带宽，原生解锁Netflix 4K与ChatGPT/Claude，附节点测速报告与官网直达通道。",
    keywords: "暮光网络, 暮光网络机场, 暮光网络怎么样, 暮光网络套餐价格, 暮光网络流量, 暮光网络节点, 暮光网络测速, 暮光网络官网, 暮光网络评测, 机场推荐, 梯子推荐, vpn推荐, vpn机场, vpn节点, IEPL专线",
    reviewTitle: "2026【暮光网络】深度评测与测速报告：IEPL专线晚高峰丢包率/4K流媒体/套餐性价比全景测试 | 机场推荐网",
    reviewDescription: "深入评测暮光网络2026最新节点表现：亚太IEPL企业内网专线实测丢包率低于0.1%，晚高峰4K秒开，支持Shadowsocks 2022与VLESS协议，详细资费套餐价格与流量测算，评测实验室诚意推荐。",
    reviewKeywords: "暮光网络评测, 暮光网络怎么样, 暮光网络测速, 暮光网络晚高峰, 暮光网络跑路了吗, 暮光网络优惠码, 机场评测, 梯子评测"
  },
  feimaoyun: {
    title: "飞猫云机场怎么样？2026套餐价格/流量配额/平价IPLC专线节点测速评测档案 | 机场推荐网",
    description: "2026专业飞猫云机场全景评测档案。全线标配企业级IPLC中港/中日跨境专线，折算特惠年付低至¥7/月起配150GB大流量。晚高峰无视公网拥堵，稳定解锁ChatGPT 4o及Disney+/Netflix全区流媒体，性价比极高，附详细套餐资费与测速数据。",
    keywords: "飞猫云, 飞猫云机场, 飞猫云怎么样, 飞猫云套餐价格, 飞猫云流量, 飞猫云节点, 飞猫云测速, 飞猫云官网, 飞猫云评测, 机场推荐, 梯子推荐, 性价比机场, 便宜机场, IPLC专线, vpn机场",
    reviewTitle: "2026【飞猫云】深度评测与测速报告：平价IPLC专线晚高峰吞吐/流媒体解锁/性价比真实测评 | 机场推荐网",
    reviewDescription: "实测飞猫云2026节点网络：中港IPLC专线平均延迟仅28ms，千兆晚高峰下载速率跑满，年付折算仅¥7/月超高性价比，全面兼容小火箭、Clash Verge，附购买建议与避坑指南。",
    reviewKeywords: "飞猫云评测, 飞猫云怎么样, 飞猫云测速, 飞猫云优惠码, 飞猫云稳定吗, 机场评测, 梯子评测"
  },
  breezenet: {
    title: "微风网络Breezenet怎么样？2026套餐价格/200G大流量/双ISP节点测速评测档案 | 机场推荐网",
    description: "2026专业微风网络Breezenet详细评测档案。主打超大流量百G性价比屠夫，¥8/月即享200GB纯净流量，单价低至¥0.04/GB。全节点配备原生住宅双ISP属性与智能BGP多线入口，TikTok运营与跨境电商防封神器，附最新节点线路测速与官网入口。",
    keywords: "微风网络, 微风网络Breezenet, 微风网络怎么样, 微风网络套餐价格, 微风网络流量, 微风网络节点, 微风网络测速, 微风网络官网, 机场推荐, 性价比机场, 梯子推荐, 双ISP节点, vpn推荐, 大流量机场",
    reviewTitle: "2026【微风网络Breezenet】深度评测报告：¥8元200G性价比/双ISP住宅IP纯净度与测速分析 | 机场推荐网",
    reviewDescription: "实测微风网络Breezenet：¥8元起步200GB超大配额，双ISP原生节点完美过Cloudflare五秒盾与OpenAI风控，晚高峰YouTube 4K流畅播放，学生党与跨境电商高性价比首选。",
    reviewKeywords: "微风网络评测, 微风网络怎么样, Breezenet测速, 微风网络大流量, 微风网络优惠码, 机场评测, 梯子评测"
  },
  lingdongcloud: {
    title: "灵动云机场怎么样？2026套餐价格/流量配额/混合IEPL专线节点测速评测档案 | 机场推荐网",
    description: "2026专业灵动云机场权威档案。老牌服务商稳定运营4年+，采用混合态IEPL内网专线与智能多活POP接入，起步价格¥20/月配100GB高速流量。节点全自动负载均衡，支持Hysteria 2高速抗弱网协议，解锁主流流媒体与AI工具，附测速报告与官网通道。",
    keywords: "灵动云, 灵动云机场, 灵动云怎么样, 灵动云套餐价格, 灵动云流量, 灵动云节点, 灵动云测速, 灵动云官网, 灵动云评测, 机场推荐, 梯子推荐, vpn推荐, IEPL专线, 稳定机场, vpn机场",
    reviewTitle: "2026【灵动云】深度评测报告：4年老牌专线稳定性测试/Hysteria2极速协议/晚高峰抗丢包表现 | 机场推荐网",
    reviewDescription: "灵动云2026最新评测报告：自动化故障转移机制保障99.9%可用率，晚高峰平均抖动低于1.2ms，支持Windows/Mac/iOS/Android全客户端一键订阅，适合追求长效稳定的商务办公用户。",
    reviewKeywords: "灵动云评测, 灵动云怎么样, 灵动云测速, 灵动云稳定吗, 灵动云老牌机场, 机场评测, 梯子推荐"
  },
  feiv: {
    title: "飞V机场怎么样？2026套餐价格/流量配额/¥4.9轻量平价节点测速评测档案 | 机场推荐网",
    description: "2026专业飞V机场评测档案。全网极低门槛轻量梯子标杆，起步价格仅¥4.9/月起配100GB充沛流量。灵活月付无负担，多地公网优化与专线冗余，日常网页查资料、推特社交与高清视频极速加载，学生党与备用应急梯子首选，附详细资费与测速数据。",
    keywords: "飞V, 飞V机场, 飞V怎么样, 飞V套餐价格, 飞V流量, 飞V节点, 飞V测速, 飞V官网, 飞V评测, 便宜机场, 性价比机场, 梯子推荐, 机场推荐, ¥5元以内机场, vpn推荐",
    reviewTitle: "2026【飞V机场】深度评测报告：¥4.9元超低门槛/轻量月付无压力/日常备用测速全面体检 | 机场推荐网",
    reviewDescription: "飞V机场实测：低至¥4.9元即可拥有100GB月流量，晚高峰网页与1080P/4K视频秒开，无合约绑定坚持灵活月付，适合预算极度有限用户与轻度海外资讯检索者。",
    reviewKeywords: "飞V评测, 飞V怎么样, 飞V测速, 飞V低价机场, 飞V优惠码, 机场评测, 梯子评测"
  },
  laddercloud: {
    title: "梯子云LadderCloud怎么样？2026套餐价格/流量配额/4K极速专线节点测速评测档案 | 机场推荐网",
    description: "2026专业梯子云LadderCloud评测档案。专注于跨国4K/8K超清流媒体与大型下载，全线标配IEPL低抖动跨境专线，起步价格¥25/月配125GB流量。支持Netflix非自制剧、Disney+、HBO Max全绿解锁，晚高峰极速秒开无缓冲，附最新测速报告与官网直达。",
    keywords: "梯子云, 梯子云LadderCloud, 梯子云怎么样, 梯子云套餐价格, 梯子云流量, 梯子云节点, 梯子云测速, 梯子云官网, 梯子云评测, 机场推荐, 梯子推荐, 流媒体机场, 4K极速机场, vpn推荐",
    reviewTitle: "2026【梯子云LadderCloud】深度评测：IEPL专线4K/8K视频加载测试/晚高峰大带宽吞吐实测 | 机场推荐网",
    reviewDescription: "梯子云LadderCloud实测报告：全专线无QoS限速，晚高峰单线程带宽轻松突破600Mbps，YouTube 4K缓冲时间低于0.5秒，跨国追剧与大型文件传输的高清旗舰首选。",
    reviewKeywords: "梯子云评测, 梯子云怎么样, LadderCloud测速, 梯子云流媒体解锁, 梯子云稳定吗, 机场评测"
  },
  yinxingren: {
    title: "隐形人机场怎么样？2026套餐价格/流量配额/IPLC专线节点测速评测档案 | 机场推荐网",
    description: "2026专业隐形人机场详细评测档案。主打极致隐私保护与高规格内网IPLC专线，起步价格¥24/月配144GB高速流量。敏感时期全时段0丢包，不经过公网GFW审查，企业级抗封锁能力与双ISP高纯净度IP节点，涉外商务与极客开发必备，附测速数据与直通通道。",
    keywords: "隐形人, 隐形人机场, 隐形人怎么样, 隐形人套餐价格, 隐形人流量, 隐形人节点, 隐形人测速, 隐形人官网, 隐形人评测, 机场推荐, 梯子推荐, IPLC专线, 隐私抗封锁, vpn推荐, vpn机场",
    reviewTitle: "2026【隐形人机场】深度评测报告：IPLC内网专线敏感期稳定性测试/双ISP纯净度与流媒体实测 | 机场推荐网",
    reviewDescription: "隐形人机场实测表现：全内网物理专线彻底隔绝骨干网拥堵，晚高峰丢包率0%，支持VLESS Reality与SS2022协议，AI工具与流媒体全通，提供极高安全与稳定保障。",
    reviewKeywords: "隐形人评测, 隐形人怎么样, 隐形人测速, 隐形人机场稳定吗, 隐形人官网, 机场评测, 梯子评测"
  },
  wuyou: {
    title: "无忧机场怎么样？2026套餐价格/流量配额/纯净住宅IP专线节点测速评测档案 | 机场推荐网",
    description: "2026专业无忧机场评测档案。特色纯净家宽与住宅IP中继集群，起步价格¥19/月配100GB流量。完美规避ChatGPT、Claude及跨境电商平台的风控拦截，晚高峰动态智能路由保障多端并发稳定，附详细套餐参数、节点测速报告与官网通道。",
    keywords: "无忧, 无忧机场, 无忧怎么样, 无忧套餐价格, 无忧流量, 无忧节点, 无忧测速, 无忧官网, 无忧评测, 住宅IP机场, ChatGPT节点, 机场推荐, 梯子推荐, vpn推荐, vpn节点",
    reviewTitle: "2026【无忧机场】深度评测：纯净住宅IP防封表现/OpenAI与Claude高风控环境实测报告 | 机场推荐网",
    reviewDescription: "无忧机场深度测试：家宽原生IP特征显著，全绿解锁ChatGPT Voice与Midjourney，晚高峰平均延迟低于55ms，告别频繁验证码与账号异常警告，AI创作者与外贸首选。",
    reviewKeywords: "无忧评测, 无忧机场怎么样, 无忧测速, 无忧纯净节点, 无忧官网, 机场评测, 梯子评测"
  },
  lingmao: {
    title: "灵猫机场怎么样？2026套餐价格/流量配额/IPLC游戏专线节点测速评测档案 | 机场推荐网",
    description: "2026专业灵猫机场全面档案。针对亚太国际游戏与超低延迟深度调优，全量采用独立IPLC物理专线，起步价格¥25/月配150GB高速流量。港日韩专线超低抖动与0丢包，Steam/PlayStation联机加速与4K视频秒开体验极佳，附测速与官网直达。",
    keywords: "灵猫, 灵猫机场, 灵猫怎么样, 灵猫套餐价格, 灵猫流量, 灵猫节点, 灵猫测速, 灵猫官网, 灵猫评测, 游戏加速机场, IPLC专线, 机场推荐, 梯子推荐, 低延迟节点, vpn推荐",
    reviewTitle: "2026【灵猫机场】深度评测：IPLC专线游戏超低延迟抖动测试/晚高峰4K秒开实测报告 | 机场推荐网",
    reviewDescription: "灵猫机场实测数据：香港IPLC延迟低至22ms，日本专线45ms，Jitter抖动控制在0.8ms内，大型跨国游戏联机不掉线，4K视频加载平滑顺畅，影音游戏双栖旗舰。",
    reviewKeywords: "灵猫评测, 灵猫怎么样, 灵猫测速, 灵猫游戏节点, 灵猫稳定吗, 机场评测, 梯子评测"
  },
  flashleap: {
    title: "闪跃FlashLeap怎么样？2026套餐价格/流量配额/全流媒体IPLC节点测速评测档案 | 机场推荐网",
    description: "2026专业闪跃FlashLeap机场详细评测。全平台通用订阅支持，主打高规格IPLC专线与全区流媒体解锁，起步价格¥24/月配150GB高速流量。自动剔除失效节点与智能就近选路，晚高峰流畅观看Netflix 4K与YouTube HDR，附详细资费与测速数据。",
    keywords: "闪跃, 闪跃FlashLeap, 闪跃怎么样, 闪跃套餐价格, 闪跃流量, 闪跃节点, 闪跃测速, 闪跃官网, 闪跃评测, 机场推荐, 梯子推荐, IPLC专线, 流媒体解锁, vpn推荐, vpn机场",
    reviewTitle: "2026【闪跃FlashLeap】深度评测报告：全区流媒体解锁测试/IPLC专线晚高峰吞吐与延迟表现 | 机场推荐网",
    reviewDescription: "实测闪跃FlashLeap机场：Netflix非自制剧全绿、Disney+全区解锁、YouTube 4K峰值速率超过500Mbps，专线网络稳定无丢包，客户端开箱即用，流媒体追剧党推荐。",
    reviewKeywords: "闪跃评测, 闪跃怎么样, FlashLeap测速, 闪跃流媒体, 闪跃优惠码, 机场评测, 梯子评测"
  },
  firefly: {
    title: "萤火虫Firefly怎么样？2026套餐价格/流量配额/¥8平价专线节点测速评测档案 | 机场推荐网",
    description: "2026专业萤火虫Firefly机场档案。亲民平价IEPL专线代表，起步仅需¥8/月配60GB月流量。高质价比与轻量预算兼得，提供低延迟稳定的网页浏览、推特与高清流媒体体验，灵活月付无套路，附详细套餐价格表、节点测速报告与官网入口。",
    keywords: "萤火虫, 萤火虫Firefly, 萤火虫怎么样, 萤火虫套餐价格, 萤火虫流量, 萤火虫节点, 萤火虫测速, 萤火虫官网, 萤火虫评测, 便宜机场, 性价比机场, 梯子推荐, 机场推荐, IEPL专线",
    reviewTitle: "2026【萤火虫Firefly】深度评测报告：¥8元专线起步实测/晚高峰抗丢包表现与轻量用户体验 | 机场推荐网",
    reviewDescription: "萤火虫Firefly实测分析：低至¥8元月付即可体验IEPL专线高速通道，晚高峰国际出口无明显拥堵，适合日常轻度查资料与学术科研，学生党高性价比起步之选。",
    reviewKeywords: "萤火虫评测, 萤火虫怎么样, 萤火虫测速, 萤火虫便宜机场, 萤火虫官网, 机场评测"
  },
  kuajiecloud: {
    title: "跨界机场怎么样？2026套餐价格/流量配额/多地区IEPL节点测速评测档案 | 机场推荐网",
    description: "2026专业跨界机场评测档案。拥有多地区冷门节点与主流高速IEPL专线覆盖，起步价格¥20/月配120GB高速流量。满足跨境电商、海外社交媒体营销与多账号多地区IP切换需求，全节点支持流媒体与AI工具解锁，附最新测速报告与官网直达。",
    keywords: "跨界, 跨界机场, 跨界怎么样, 跨界套餐价格, 跨界流量, 跨界节点, 跨界测速, 跨界官网, 跨界评测, 多地区节点, IEPL专线, 跨境电商节点, 机场推荐, 梯子推荐, vpn推荐",
    reviewTitle: "2026【跨界机场】深度评测报告：全球多地区节点覆盖率/跨境电商防风控与IEPL测速测试 | 机场推荐网",
    reviewDescription: "跨界机场实测：覆盖港台日韩美欧主流及冷门地区，节点纯净度高，IEPL专线晚高峰平均丢包率低于0.5%，适合外贸运营与跨境多平台管理业务。",
    reviewKeywords: "跨界评测, 跨界怎么样, 跨界测速, 跨界多地区节点, 跨界官网, 机场评测, 梯子评测"
  },
  lightspeed: {
    title: "光速云LightSpeed怎么样？2026套餐价格/流量配额/高速IEPL专线节点测速评测档案 | 机场推荐网",
    description: "2026专业光速云LightSpeed机场评测档案。采用高性能企业级IEPL跨境专线与多线BGP入口，起步价格¥23/月配148GB充足流量。峰值吞吐大、晚高峰千兆跑满无卡顿，完美支持ChatGPT/Claude与Netflix 4K高清播放，附详细资费方案与节点测速数据。",
    keywords: "光速云, 光速云LightSpeed, 光速云怎么样, 光速云套餐价格, 光速云流量, 光速云节点, 光速云测速, 光速云官网, 光速云评测, 机场推荐, 梯子推荐, IEPL专线, 高速机场, vpn推荐",
    reviewTitle: "2026【光速云LightSpeed】深度评测：千兆大带宽吞吐测试/IEPL专线晚高峰抗拥堵实测报告 | 机场推荐网",
    reviewDescription: "光速云LightSpeed实测报告：单线程测速突破700Mbps，晚高峰无降速与丢包抖动，支持全平台主流客户端一键导入配置，大文件下载与4K蓝光视频极速流畅。",
    reviewKeywords: "光速云评测, 光速云怎么样, LightSpeed测速, 光速云稳定吗, 光速云优惠码, 机场评测"
  },
  v2yun: {
    title: "唯兔云V2云怎么样？2026套餐价格/流量配额/¥14.9平价IPLC节点测速评测档案 | 机场推荐网",
    description: "2026专业唯兔云（V2云）详细评测档案。主打高性价比平价IPLC专线，起步价格¥14.9/月配100GB高速流量。专线不过公网GFW，晚高峰抗封锁抗拥堵能力出众，支持主流流媒体与ChatGPT日常使用，附详细套餐价格表、节点测速表现与官网入口。",
    keywords: "唯兔云, V2云, 唯兔云怎么样, 唯兔云套餐价格, 唯兔云流量, 唯兔云节点, 唯兔云测速, 唯兔云官网, 唯兔云评测, 平价IPLC, 性价比机场, 机场推荐, 梯子推荐, vpn推荐",
    reviewTitle: "2026【唯兔云/V2云】深度评测：¥14.9元平价IPLC专线表现/晚高峰稳定性与节点测速测试 | 机场推荐网",
    reviewDescription: "唯兔云实测结果：15元以内少见的优质IPLC物理专线服务，晚高峰丢包率近乎为0，日常4K流媒体秒开，价格亲民月付无套路，预算有限用户的专线首选。",
    reviewKeywords: "唯兔云评测, 唯兔云怎么样, V2云测速, 唯兔云跑路了吗, 唯兔云稳定吗, 机场评测"
  },
  u1s1: {
    title: "U1S1有一说一机场怎么样？2026套餐价格/流量配额/真实IEPL专线节点测速评测档案 | 机场推荐网",
    description: "2026专业U1S1（有一说一）机场评测档案。以真实无套路运营著称，不虚标带宽与流量倍率，采用优质IEPL独立内网专线，起步价格¥20/月配120GB高速流量。节点全天候监控与故障自愈，流媒体与AI工具稳定解锁，附真实测速报告与官网通道。",
    keywords: "U1S1, 有一说一, U1S1怎么样, U1S1套餐价格, U1S1流量, U1S1节点, U1S1测速, U1S1官网, U1S1评测, 真实无套路机场, IEPL专线, 机场推荐, 梯子推荐, vpn推荐",
    reviewTitle: "2026【U1S1有一说一】深度评测报告：拒绝虚标！IEPL专线晚高峰真实吞吐与延迟长测 | 机场推荐网",
    reviewDescription: "U1S1有一说一真实测评：不设隐性倍率陷阱，流量结算1:1足额透明，IEPL专线晚高峰低延迟稳定无抖动，支持主流加密协议，口碑与实在兼具。",
    reviewKeywords: "U1S1评测, 有一说一怎么样, U1S1测速, U1S1机场稳定吗, U1S1官网, 机场评测, 梯子评测"
  },
  jiliancloud: {
    title: "极连云机场怎么样？2026套餐价格/流量配额/多线IPLC中继节点测速评测档案 | 机场推荐网",
    description: "2026专业极连云机场评测档案。采用国内优质多线BGP入口接入与独立IPLC专线集群，起步价格¥14.4/月配100GB充沛流量。针对三大运营商网络深度路由优化，晚高峰电信联通移动全绿，Netflix与YouTube 4K极速秒开，附详细资费与测速数据。",
    keywords: "极连云, 极连云机场, 极连云怎么样, 极连云套餐价格, 极连云流量, 极连云节点, 极连云测速, 极连云官网, 极连云评测, 机场推荐, 梯子推荐, 性价比机场, IPLC专线, 三网优化机场, vpn推荐",
    reviewTitle: "2026【极连云】深度评测报告：三大运营商晚高峰抗拥堵测试/IPLC专线测速与流媒体解锁实录 | 机场推荐网",
    reviewDescription: "极连云2026节点测评：国内多线智能动态BGP接入，北方联通与南方电信均能保持30ms内低延迟，专线丢包率低于0.2%，价格亲民性价比突出。",
    reviewKeywords: "极连云评测, 极连云怎么样, 极连云测速, 极连云稳定吗, 极连云优惠码, 机场评测, 梯子评测"
  },
  quanqiuyun: {
    title: "全球云机场怎么样？2026套餐价格/流量配额/跨国IEPL专线节点测速评测档案 | 机场推荐网",
    description: "2026专业全球云机场详细评测。布局全球主流与小众地区高速IEPL企业专线，起步价格¥20/月配120GB高速流量。多端并发不限制设备数量，支持企业协同、跨国远程办公与全区流媒体解锁，晚高峰全速不限流，附详细套餐参数与节点测速报告。",
    keywords: "全球云, 全球云机场, 全球云怎么样, 全球云套餐价格, 全球云流量, 全球云节点, 全球云测速, 全球云官网, 全球云评测, IEPL专线, 跨国企业专线, 机场推荐, 梯子推荐, 多设备不限, vpn推荐",
    reviewTitle: "2026【全球云】深度评测报告：全球节点广度测试/企业跨国办公多设备并发与晚高峰测速 | 机场推荐网",
    reviewDescription: "全球云实测：覆盖欧美亚澳全球主要节点，IEPL骨干专线晚高峰稳如磐石，多设备并发无限制，兼顾团队办公与个人娱乐需求，专业级出海连接方案。",
    reviewKeywords: "全球云评测, 全球云怎么样, 全球云测速, 全球云稳定吗, 全球云企业机场, 机场评测"
  },
  guangnianti: {
    title: "光年梯机场怎么样？2026套餐价格/流量配额/高性价比IEPL节点测速评测档案 | 机场推荐网",
    description: "2026专业光年梯机场评测档案。主打实惠高性价比IEPL专线，起步价格低至¥12.6/月配110GB高速流量。延迟低至35ms以内，晚高峰抗丢包表现优异，完美支持全平台客户端一键配置，流媒体与AI工具全覆盖，附详细资费表、测速数据与官网直通。",
    keywords: "光年梯, 光年梯机场, 光年梯怎么样, 光年梯套餐价格, 光年梯流量, 光年梯节点, 光年梯测速, 光年梯官网, 光年梯评测, 便宜机场, 性价比专线, 机场推荐, 梯子推荐, IEPL专线, vpn推荐",
    reviewTitle: "2026【光年梯】深度评测：¥12.6元IEPL专线性价比测试/晚高峰4K流媒体加载与测速实录 | 机场推荐网",
    reviewDescription: "光年梯最新实测：十元档少有的IEPL优质专线，晚高峰单线程速率达400Mbps，YouTube 4K缓冲秒开，轻量月付无压力，入门级专线梯子首选之一。",
    reviewKeywords: "光年梯评测, 光年梯怎么样, 光年梯测速, 光年梯优惠码, 光年梯稳定吗, 机场评测, 梯子评测"
  },
  sogoyun: {
    title: "Sogo云机场怎么样？2026套餐价格/流量配额/大带宽IEPL专线节点测速评测档案 | 机场推荐网",
    description: "2026专业Sogo云机场全景档案。大带宽IEPL物理专线保障，起步价格¥25/月配150GB高速流量。全节点标配原生IP与双重容灾备份，晚高峰无惧国际网络风暴，流畅解锁Netflix、Disney+及ChatGPT Plus，附最新测速报告与官网通道。",
    keywords: "Sogo云, Sogo云机场, Sogo云怎么样, Sogo云套餐价格, Sogo云流量, Sogo云节点, Sogo云测速, Sogo云官网, Sogo云评测, 大带宽专线, IEPL专线, 机场推荐, 梯子推荐, vpn推荐, vpn机场",
    reviewTitle: "2026【Sogo云】深度评测报告：IEPL专线大带宽极限吞吐测试/双重容灾稳定性与4K播放表现 | 机场推荐网",
    reviewDescription: "Sogo云深度测评：双重多活容灾架构确保链路不断流，晚高峰丢包率0.1%，4K HDR视频平滑无卡顿，适合注重高速与高可用性的品质用户。",
    reviewKeywords: "Sogo云评测, Sogo云怎么样, Sogo云测速, Sogo云稳定吗, Sogo云优惠码, 机场评测"
  },
  yuzhoucloud: {
    title: "宇宙云YuZhou怎么样？2026套餐价格/流量配额/低延迟IPLC节点测速评测档案 | 机场推荐网",
    description: "2026专业宇宙云YuZhou机场详细评测。高抗封锁IPLC跨境专线加持，起步价格¥14.9/月配60GB高速流量。专线直连不经审查骨干网，香港日本节点平均延迟低于30ms，晚高峰0断流，附详细套餐资费对比、节点测速报告与官网入口。",
    keywords: "宇宙云, 宇宙云YuZhou, 宇宙云怎么样, 宇宙云套餐价格, 宇宙云流量, 宇宙云节点, 宇宙云测速, 宇宙云官网, 宇宙云评测, IPLC专线, 低延迟梯子, 机场推荐, 梯子推荐, 性价比机场, vpn推荐",
    reviewTitle: "2026【宇宙云YuZhou】深度评测：IPLC专线抗封锁实测/亚太节点低延迟与晚高峰测试报告 | 机场推荐网",
    reviewDescription: "宇宙云实测数据：IPLC物理专线晚高峰保持0丢包，香港节点延迟25ms，针对移动与联通专线优化良好，小流量高品质抗审查轻度使用推荐。",
    reviewKeywords: "宇宙云评测, 宇宙云怎么样, 宇宙云测速, 宇宙云稳定吗, 宇宙云官网, 机场评测, 梯子评测"
  },
  ermaoyun: {
    title: "二猫云2mao怎么样？2026套餐价格/流量配额/实惠IEPL专线节点测速评测档案 | 机场推荐网",
    description: "2026专业二猫云2mao机场评测档案。深耕平价市场的高口碑IEPL专线服务商，起步价格¥15/月配120GB高速流量。大流量低单价，晚高峰动态智能分流，完美支持4K追剧与全平台客户端通用订阅导入，附详细套餐参数、测速数据与官网直通车。",
    keywords: "二猫云, 二猫云2mao, 二猫云怎么样, 二猫云套餐价格, 二猫云流量, 二猫云节点, 二猫云测速, 二猫云官网, 二猫云评测, 平价专线, IEPL专线, 性价比机场, 机场推荐, 梯子推荐, vpn推荐",
    reviewTitle: "2026【二猫云2mao】深度评测报告：¥15元120G性价比测试/IEPL专线晚高峰丢包与4K流媒体表现 | 机场推荐网",
    reviewDescription: "二猫云实测分析：折合每GB单价极其实惠，IEPL内网专线保障晚高峰不卡顿，支持小火箭、Clash及Sing-box一键订阅，高性价比学生党与家庭追剧常备。",
    reviewKeywords: "二猫云评测, 二猫云怎么样, 二猫云测速, 二猫云稳定吗, 二猫云优惠码, 机场评测, 梯子评测"
  },
  yifanyun: {
    title: "一翻云1fly怎么样？2026套餐价格/流量配额/全专线极速节点测速评测档案 | 机场推荐网",
    description: "2026专业一翻云1fly机场权威评测。专注全内网IEPL高速专线集群，起步价格¥25/月配150GB高速流量。具备高突发带宽与极低链路抖动，晚高峰4K/8K视频秒开，全绿支持ChatGPT与主流流媒体，附详细套餐价格表、节点测速报告与官网入口。",
    keywords: "一翻云, 一翻云1fly, 一翻云怎么样, 一翻云套餐价格, 一翻云流量, 一翻云节点, 一翻云测速, 一翻云官网, 一翻云评测, 高速IEPL专线, 机场推荐, 梯子推荐, 流媒体机场, vpn推荐, vpn机场",
    reviewTitle: "2026【一翻云1fly】深度评测报告：全专线突发带宽吞吐/晚高峰丢包率与流媒体解锁深度测试 | 机场推荐网",
    reviewDescription: "一翻云实测报告：IEPL专线单线程下行速率超550Mbps，晚高峰0丢包保障，完美解决跨国网络缓冲与卡顿，专业级高品质追剧与办公体验。",
    reviewKeywords: "一翻云评测, 一翻云怎么样, 1fly测速, 一翻云稳定吗, 一翻云官网, 机场评测, 梯子评测"
  },
  edgenova: {
    title: "边缘节点EdgeNova怎么样？2026套餐价格/流量配额/商务旗舰IEPL节点测速评测档案 | 机场推荐网",
    description: "2026专业边缘节点EdgeNova机场评测档案。定位高端商务与企业跨国协同的高规格旗舰IEPL专线，起步价格¥86/季配200GB纯净流量。独享低倍率专线与纯净原生住宅IP，晚高峰零QoS限制，超高SLA可用性保障，附详细参数与测速报告。",
    keywords: "边缘节点, 边缘节点EdgeNova, 边缘节点怎么样, 边缘节点套餐价格, 边缘节点流量, 边缘节点节点, 边缘节点测速, 边缘节点官网, 高端商务专线, IEPL专线, 机场推荐, 梯子推荐, 纯净原生IP",
    reviewTitle: "2026【边缘节点EdgeNova】深度评测：高端商务IEPL旗舰专线/超低丢包率与SLA稳定性极限实测 | 机场推荐网",
    reviewDescription: "边缘节点EdgeNova深度测评：企业级独享链路品质，晚高峰测速全时段满速跑满，IP纯净度极高过全部安全风控，适合预算充裕的企业涉外办公与极客商务用户。",
    reviewKeywords: "边缘节点评测, 边缘节点怎么样, EdgeNova测速, 边缘节点高端机场, 边缘节点官网, 机场评测"
  },
  kexincloud: {
    title: "可信云机场怎么样？2026套餐价格/流量配额/¥9入门IPLC专线节点测速评测档案 | 机场推荐网",
    description: "2026专业可信云机场详细评测。高质价比轻量入门IPLC专线代表，起步价格仅¥9/月配45GB高速流量。低预算轻松上车企业级专线，晚高峰无惧公网拥堵，日常网页查资料与视频观看流畅稳定，附详细资费方案、节点测速报告与官网入口。",
    keywords: "可信云, 可信云机场, 可信云怎么样, 可信云套餐价格, 可信云流量, 可信云节点, 可信云测速, 可信云官网, 可信云评测, 便宜IPLC, 性价比机场, 机场推荐, 梯子推荐, ¥10元以内机场, vpn推荐",
    reviewTitle: "2026【可信云】深度评测报告：¥9元入门IPLC专线实测/晚高峰稳定性与轻量套餐性价比评估 | 机场推荐网",
    reviewDescription: "可信云实测表现：9元月付门槛极低，配备真实IPLC内网专线入口，晚高峰延迟稳定无大幅抖动，轻度上网与学生备用高质价比之选。",
    reviewKeywords: "可信云评测, 可信云怎么样, 可信云测速, 可信云便宜机场, 可信云官网, 机场评测, 梯子评测"
  },
  sujie: {
    title: "速界SuJie机场怎么样？2026套餐价格/流量配额/高速IEPL专线节点测速评测档案 | 机场推荐网",
    description: "2026专业速界SuJie机场评测档案。采用高性能IEPL独立内网专线与多线BGP入口，起步价格¥25/月配150GB高速流量。专线大吞吐无任何限速，流媒体4K秒开与ChatGPT极速响应，全平台客户端极速兼容，附详细套餐资费、节点测速报告与官网通道。",
    keywords: "速界, 速界SuJie, 速界怎么样, 速界套餐价格, 速界流量, 速界节点, 速界测速, 速界官网, 速界评测, 高速专线, IEPL专线, 机场推荐, 梯子推荐, vpn推荐, vpn机场",
    reviewTitle: "2026【速界SuJie】深度评测报告：IEPL专线大吞吐极限测试/晚高峰4K秒开与流媒体解锁表现 | 机场推荐网",
    reviewDescription: "速界SuJie实测报告：专线链路晚高峰延迟抖动低于1.5ms，单线程峰值吞吐达480Mbps，支持多协议订阅一键导入，高速稳定追剧与商务全能型机场。",
    reviewKeywords: "速界评测, 速界怎么样, SuJie测速, 速界稳定吗, 速界优惠码, 机场评测, 梯子评测"
  },
  kuaili: {
    title: "快狸KuaiLi机场怎么样？2026套餐价格/流量配额/¥10平价IEPL节点测速评测档案 | 机场推荐网",
    description: "2026专业快狸KuaiLi机场详细评测。入门级平价轻量IEPL专线服务商，起步价格仅¥10/月配30GB月度流量。月付零负担，内网专线直连晚高峰稳定不掉线，适合轻度网页浏览、推特与邮件沟通，附详细套餐参数、测速数据与官网直通车。",
    keywords: "快狸, 快狸KuaiLi, 快狸怎么样, 快狸套餐价格, 快狸流量, 快狸节点, 快狸测速, 快狸官网, 快狸评测, 便宜专线, IEPL专线, 性价比机场, 机场推荐, 梯子推荐, ¥10元机场, vpn推荐",
    reviewTitle: "2026【快狸KuaiLi】深度评测报告：¥10元平价专线起步测试/轻量月付无压力与晚高峰延迟表现 | 机场推荐网",
    reviewDescription: "快狸KuaiLi实测：平价专线轻度使用利器，10元月付灵活便捷，专线通道晚高峰丢包率控制在0.3%以内，日常查阅资料与备用梯子极具性价比。",
    reviewKeywords: "快狸评测, 快狸怎么样, KuaiLi测速, 快狸便宜机场, 快狸官网, 机场评测, 梯子评测"
  },
  wavenet: {
    title: "浪网WaveNet机场怎么样？2026套餐价格/流量配额/全专线IEPL节点测速评测档案 | 机场推荐网",
    description: "2026专业浪网WaveNet机场权威档案。全量部署企业级IEPL跨境物理专线，起步价格¥30/月配150GB高规格流量。晚高峰千兆跑满无视公网审查，支持Netflix 4K/Disney+及ChatGPT/Claude纯净解锁，附详细套餐资费对比、节点测速报告与官网通道。",
    keywords: "浪网, 浪网WaveNet, 浪网怎么样, 浪网套餐价格, 浪网流量, 浪网节点, 浪网测速, 浪网官网, 浪网评测, IEPL专线, 高品质专线, 机场推荐, 梯子推荐, vpn推荐, vpn节点, 稳定机场",
    reviewTitle: "2026【浪网WaveNet】深度评测报告：企业级IEPL物理专线晚高峰丢包与大带宽吞吐极限测试 | 机场推荐网",
    reviewDescription: "浪网WaveNet实测报告：高规格物理IEPL专线全时段0丢包，单线程测速突破600Mbps，原生解锁主流流媒体与高风控AI大模型，追求卓越品质用户的理想专线。",
    reviewKeywords: "浪网评测, 浪网怎么样, WaveNet测速, 浪网稳定吗, 浪网官网, 机场评测, 梯子评测"
  }
};

// 逐个附加并回写 src/data/airports.ts
const airportsPath = path.resolve('src/data/airports.ts');
let content = fs.readFileSync(airportsPath, 'utf-8');

const coreKeywords = ['机场推荐', '机场节点', '性价比机场', '梯子推荐', 'vpn', 'vpn机场', 'vpn节点', 'vpn推荐'];

// 将数据更新进 airports
let updatedCount = 0;
const updatedAirports = airports.map(a => {
  const tdkData = brandTdkMap[a.slug];
  if (tdkData) {
    updatedCount++;
    // Ensure all 8 core keywords are present in brand keywords
    const kwSet = new Set(tdkData.keywords.split(',').map(s => s.trim()));
    coreKeywords.forEach(k => kwSet.add(k));
    const mergedKeywords = Array.from(kwSet).join(', ');

    const rKwSet = new Set(tdkData.reviewKeywords.split(',').map(s => s.trim()));
    coreKeywords.forEach(k => rKwSet.add(k));
    const mergedReviewKeywords = Array.from(rKwSet).join(', ');

    return {
      ...a,
      tdk: {
        ...tdkData,
        keywords: mergedKeywords,
        reviewKeywords: mergedReviewKeywords
      }
    };
  }
  return a;
});

console.log(`成功匹配并更新 ${updatedCount} 个品牌的 TDK 数据！`);

// 构建全新的 airports.ts 内容
const header = `export interface Plan {
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

  speedScore?: number;
  stabilityScore?: number;
  valueScore?: number;
  overallScore?: number;

  networkArchitecture?: string;
  streamingAnalysis?: string;
  aiUnblockAnalysis?: string;
  faqs?: Array<{ q: string; a: string }>;

  tdk?: {
    title?: string;
    description?: string;
    keywords?: string;
    reviewTitle?: string;
    reviewDescription?: string;
    reviewKeywords?: string;
  };
}

export const airports: Airport[] = ${JSON.stringify(updatedAirports, null, 2)};

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

// 辅助方法：按综合实力排序（严格遵守用户指定的官方权威顺序 1~27）
export function getAirportsSortedByOverall() {
  return [...airports];
}

// 辅助方法：按稳定性排序
export function getAirportsSortedByStability() {
  return [...airports].sort((a, b) => b.metrics.stabilityScore - a.metrics.stabilityScore);
}

// 辅助方法：按低预算入门排序
export function getAirportsSortedByBudget() {
  return [...airports].sort((a, b) => (a.startingPrice || 0) - (b.startingPrice || 0));
}
`;

fs.writeFileSync(airportsPath, header, 'utf-8');
console.log('src/data/airports.ts 已成功更新全量 27 个品牌的定制 TDK 数据！');
