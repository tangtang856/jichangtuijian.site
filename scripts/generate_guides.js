import fs from 'node:fs';
import path from 'node:path';

const guidesDir = path.resolve('src/content/guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}

const tutorials = [
  // Windows (5)
  {
    slug: 'windows-clash-verge-rev-setup',
    title: 'Windows 系统 Clash Verge Rev 从零安装到订阅导入保姆级教程',
    description: '2026最新 Windows 平台 Clash Verge Rev 客户端配置指南。手把手教你下载开源安装包、导入机场订阅链接、开启 TUN 虚拟网卡及设置开机自启。',
    platform: 'Windows',
    publishDate: '2026-02-01',
    clientApps: ['Clash Verge Rev', 'Clash Meta'],
    content: `
## 教程简介
在 Windows 10/11 系统中，**Clash Verge Rev** 是目前开源社区中最受欢迎、维护最活跃的图形化代理客户端。它基于现代化的 Tauri 框架构建，内存占用低，原生支持最新的 Clash.Meta (Mihomo) 内核，具备强大的规则分流与延迟优选能力。

---

## 步骤一：获取客户端安装包
1. 访问 Clash Verge Rev 官方 GitHub Releases 页面，避免使用搜索引擎下载带有恶意插件的第三方修改版。
2. 64位 Windows 用户选择下载 \`Clash.Verge_x.x.x_x64-setup.exe\`。
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
`
  },
  {
    slug: 'windows-sing-box-client-guide',
    title: 'Sing-box Windows 官方客户端安装与轻量化规则集配置指南',
    description: '详解新一代通用代理核心 Sing-box 在 Windows 平台的安装使用。内存占用极低、原生支持 Hysteria 2、Shadowsocks 与 Trojan 协议。',
    platform: 'Windows',
    publishDate: '2026-02-03',
    clientApps: ['Sing-box', 'Sing-box GUI'],
    content: `
## 为什么选择 Sing-box？
Sing-box 是由开源社区独立研发的新一代跨平台通用代理核心。相较于传统代理客户端，Sing-box 最大的优势是极低的核心内存开销（常驻内存通常不足 40MB）以及对新兴 UDP 协议（如 Hysteria 2、TUIC v5）的原生支持。

---

## 客户端下载与环境准备
1. 访问 Sing-box 官方 GitHub 仓库下载 \`sing-box-windows-amd64.zip\` 或带有图形界面的第三方客户端（如 Hiddify 或 GUI.for.SingBox）。
2. 解压到无中文字符的路径（例如 \`C:\\Tools\\sing-box\`）。

---

## 订阅转换与导入
1. 若你的机场支持直接输出 Sing-box 格式，直接在客户端中粘贴配置链接。
2. 若机场仅提供 Clash 订阅，可通过支持的在线转换工具或客户端内置解析器将订阅解析为 Sing-box JSON 格式。
3. 启动内核后，选择 \`Rule\` 分流模式即可实现智能代理。
`
  },
  {
    slug: 'windows-v2rayn-core-setup',
    title: 'v2rayN 客户端配置教程：Xray / VLESS 与 Trojan 节点管理',
    description: '经典老牌 Windows 代理软件 v2rayN 详细教程。手把手教你更新 Xray-core、导入 VLESS Reality 节点及配置自定义 PAC 分流规则。',
    platform: 'Windows',
    publishDate: '2026-02-05',
    clientApps: ['v2rayN', 'Xray-core'],
    content: `
## v2rayN 核心特性
v2rayN 是 Windows 平台上资历最深、兼容性最全面的代理客户端之一。它原生支持 Xray 核心、Sing-box 核心与 Mihomo 核心的无缝切换，特别适合管理 VLESS Reality 和 Trojan 协议节点。

---

## 安装与核心更新
1. 从 GitHub 仓库下载带有 Complete 核心的发布包 \`v2rayN-with-dependencies.zip\`。
2. 解压后运行 \`v2rayN.exe\`。
3. 点击顶部菜单栏的 **“检查更新”** → **“Xray-core”**，确保底层内核升级到最新稳定版。

---

## 导入节点与开启服务
1. 点击 **“订阅分组”** → **“订阅分组设置”** → 点击“添加”，在可选地址中粘贴机场提供的 V2Ray/通用订阅。
2. 回到主界面，按快捷键 \`Ctrl + U\` 更新订阅。
3. 底部任务栏托盘右键点击 v2rayN 图标，将路由模式设置为 **“绕过大陆(Whitelist)”**，系统代理设置为 **“自动配置系统代理”**。
`
  },
  {
    slug: 'windows-tun-mode-global-proxy',
    title: 'Windows 开启 TUN 虚拟网卡模式教程：接管全局网络与游戏加速',
    description: '全面解析 Clash Verge 与 Sing-box 的 TUN 模式原理。解决 Git 命令行、Steam 游戏与特定软件绕过系统代理的难题。',
    platform: 'Windows',
    publishDate: '2026-02-08',
    clientApps: ['Clash Verge Rev', 'Sing-box'],
    content: `
## 什么是 TUN 模式？
常规的“系统代理”仅在应用层向 Windows 操作系统注册了 HTTP/HTTPS/SOCKS5 代理端口。许多不遵守系统代理设置的软件（例如 Git 命令行、部分端游、WSL 子系统等）会直接绕过代理。
**TUN 模式（Virtual Network Terminal）** 则会在操作系统网络层虚拟出一个专属网络适配器，以驱动级别拦截整台电脑的所有数据包并交由代理内核处理。

---

## 在 Clash Verge Rev 中开启 TUN
1. 打开 Clash Verge Rev 设置页面。
2. 找到 **“服务模式（Service Mode）”**，点击右侧的“安装”按钮，弹出 UAC 提权提示时选择“是”。
3. 服务模式显示为绿色“已安装”后，即可开启 **“Tun 模式”** 开关。
4. 此时在 Windows 网络连接设置中可以看到一个名为 \`Mihomo\` 或 \`Clash\` 的虚拟网卡已处于连接状态。
`
  },
  {
    slug: 'windows-proxy-dns-leak-prevention',
    title: 'Windows 代理防 DNS 污染与 WebRTC 真实 IP 泄漏防范教程',
    description: '深度保障网络安全。配置 Fake-IP 分流、禁用浏览器 WebRTC 局域网广播，防止中国大陆真实 IP 地址意外泄漏。',
    platform: 'Windows',
    publishDate: '2026-02-10',
    clientApps: ['Clash Verge Rev', 'Chrome', 'Edge'],
    content: `
## 为什么会发生 DNS 泄漏与真实 IP 暴露？
很多用户在访问海外网站或特定 AI 工具（如 ChatGPT、Claude）时经常被识别出所在地理位置，根本原因通常不在于节点服务器，而在于本地电脑的 **DNS 泄漏** 与 **WebRTC 协议泄漏**。

---

## 核心防护方案
1. **启用 Fake-IP 模式：** 在客户端中将 DNS 模式由 Redir-Host 切换为 Fake-IP。客户端会为海外域名分配 198.18.0.0/16 虚拟内网保留地址，解析过程完全由境外落地节点在远端完成，彻底阻断本地 DNS 污染。
2. **关闭浏览器 WebRTC：** 在 Chrome 或 Edge 浏览器中安装 \`WebRTC Control\` 插件，开启全面封锁模式，杜绝本地宽带 IP 被网页通过 STUN 服务器捕获。
`
  },

  // Android (5)
  {
    slug: 'android-clash-verge-meta-guide',
    title: '安卓手机 Clash Verge / Meta 客户端安装与一键导入教程',
    description: '适合所有 Android 手机品牌的科学上网指引。涵盖华为鸿蒙、小米澎湃OS、OPPO、vivo 安装 APK、配置分流与开机自启动。',
    platform: 'Android',
    publishDate: '2026-02-12',
    clientApps: ['Clash Meta for Android', 'Flclash'],
    content: `
## 安卓客户端选型推荐
在 Android 平台上，目前综合体验最好的两款基于 Meta 内核的客户端是 **Clash Meta for Android (CMFA)** 与开源跨平台的 **Flclash**。它们对现代 Android 13/14/15 系统具备良好的电源适配。

---

## 安装与配置三步走
1. 下载适合你手机 CPU 架构的 APK 安装包（现代智能手机绝大多数为 \`arm64-v8a\`）。
2. 打开应用后点击“配置”，选择右上角“+”号中的“URL导入”，填入机场后台复制的 Clash 订阅。
3. 勾选配置后返回首页，点击中央的连接开关，并在弹出的 Android VpnService 系统授权窗口中点击“确定”。
`
  },
  {
    slug: 'android-v2rayng-setup-optimization',
    title: 'v2rayNG 手机版使用教程：分应用代理与大流量省电优化',
    description: '极简轻量级安卓翻墙神器 v2rayNG 使用手册。教你配置指定国内 App 直连、定时自动更新订阅与分流规则。',
    platform: 'Android',
    publishDate: '2026-02-15',
    clientApps: ['v2rayNG'],
    content: `
## v2rayNG 的轻量优势
v2rayNG 专注于轻量化代理连接，无复杂的规则嵌套，运行极其省电。它支持通过扫描二维码秒速导入节点，并提供了直观的“分应用代理”界面。

---

## 开启“分应用代理”避免微信走流量
1. 点击左上角侧边栏菜单，进入 **“设置”**。
2. 开启 **“分应用代理”** 开关。
3. 点击进入分应用列表，你可以勾选“仅代理选中的应用”（仅勾选 Chrome、YouTube、Twitter、Telegram 等），让微信、淘宝、抖音完全绕过代理客户端，保证国内网络最快直连。
`
  },
  {
    slug: 'android-sing-box-mobile-tutorial',
    title: 'Sing-box 安卓手机版配置教程：新一代极速内核上手指引',
    description: '教你在 Android 上配置 Sing-box 官方客户端。支持原生 Hysteria 2 与 TUIC 协议，抗弱网丢包性能优异。',
    platform: 'Android',
    publishDate: '2026-02-18',
    clientApps: ['Sing-box for Android'],
    content: `
## 专为现代网络设计的移动端内核
Sing-box for Android 采用了 Google Play 官方推荐的高效架构，直接通过独立的 TUN 设备处理网络数据，对 5G/4G 与 Wi-Fi 之间的网络漫游切换提供了毫秒级重连机制。

---

## 订阅与策略组选择
1. 在 Profiles 界面点击“New Profile”，输入 Profile Name 并粘贴远程订阅链接。
2. 在 Groups 标签中查看根据延迟自动测速选出的最快节点。
3. 开启主界面右上角连接开关即可开始使用。
`
  },
  {
    slug: 'android-background-keep-alive-battery',
    title: '安卓手机代理客户端后台常驻防被杀与电池白名单设置指南',
    description: '彻底解决小米澎湃OS、华为鸿蒙 HarmonyOS 与 OPPO/vivo 锁屏后代理频繁断开断流的系统优化教程。',
    platform: 'Android',
    publishDate: '2026-02-20',
    clientApps: ['System Settings', 'Battery Optimization'],
    content: `
## 为什么锁屏后科学上网会突然断开？
国内深度定制的安卓系统为了省电，通常具有极其激进的后台进程查杀机制。当手机息屏 5-10 分钟后，系统会自动强制终止代理客户端的 VpnService 进程。

---

## 三项必须设置的系统权限
1. **多任务后台加锁：** 在手机多任务卡片预览界面，长按或下拉代理客户端卡片，点击小锁图标锁定。
2. **电池优化设为“无限制”：** 进入系统设置 → 应用管理 → 特殊权限 → 电池优化，找到客户端选择“不优化 / 允许高耗电”。
3. **开启自启动与关联启动：** 在权限管理中允许该软件开机自启动并在后台保持常驻。
`
  },
  {
    slug: 'android-tv-box-proxy-setup',
    title: '安卓电视机顶盒 (Android TV / 电视棒) 安装代理客户端看 4K 教程',
    description: '在索尼电视、小米电视盒子、Chromecast with Google TV 上安装 Clash 或 v2rayNG，畅享 YouTube 4K 与 Netflix HDR。',
    platform: 'Android',
    publishDate: '2026-02-22',
    clientApps: ['Clash for Android TV', 'v2rayNG TV'],
    content: `
## 电视大屏观影的特殊需求
智能电视通常只支持遥控器方向键操作，因此需要下载专门针对 Android TV 界面进行遥控器适配的客户端版本（如 Clash for Android TV 版）。

---

## 安装与配置步骤
1. 将下载好的 TV 版 APK 存入 U 盘，插在电视盒子上通过文件管理器安装。
2. 使用手机或电脑在局域网内打开客户端显示的 Web 管理界面（例如 \`http://192.168.1.100:9090\`），在电脑浏览器上直接粘贴订阅链接，免去电视遥控器打字的痛苦。
3. 配置完成后，在电视上打开 YouTube TV 版，即可直接解锁 4K 60FPS 极清画质。
`
  },

  // iOS (5)
  {
    slug: 'ios-shadowrocket-beginner-tutorial',
    title: 'Shadowrocket（小火箭）新手保姆级安装、外区 ID 与节点导入教程',
    description: 'iPhone 与 iPad 科学上网第一首选软件。手把手教你登录外区 Apple ID、扫码导入订阅、设置规则分流与开机自动化。',
    platform: 'iOS',
    publishDate: '2026-02-25',
    clientApps: ['Shadowrocket (小火箭)'],
    content: `
## 什么是小火箭（Shadowrocket）？
Shadowrocket 是一款运行在 iOS 平台上的高性能网络代理工具。它支持全协议支持（Shadowsocks、Trojan、Vmess、VLESS、Hysteria2），支持自定义规则分流与广告拦截，售价仅需 2.99 美元。

---

## 外区 Apple ID 登录安全准则
- **绝对不要在“设置”中登录 iCloud！**
- 打开 App Store 应用，点击右上角头像，滑到最底部退出自己的中国区账号。
- 在当前页面登录美区或港区 Apple ID，下载完成后立即换回自己的国区主账号。

---

## 一键扫码导入与连接
1. 打开小火箭，点击右上角扫描图标，扫描机场后台的专属订阅二维码。
2. 节点列表自动拉取完毕后，点击选中任意一个延迟低的香港或新加坡节点。
3. 全局路由务必保持为 **“配置（Config）”** 状态。
4. 打开顶部主开关，初次连接在系统弹窗中输入锁屏密码允许添加 VPN 配置。
`
  },
  {
    slug: 'ios-loon-client-configuration',
    title: 'Loon iOS 客户端高级配置教程：分流规则、插件模块与节点测速',
    description: '被誉为“轻量级 Surge”的 iOS 代理神器 Loon 详细使用指引。支持可视化节点管理、脚本重写与去广告规则。',
    platform: 'iOS',
    publishDate: '2026-02-28',
    clientApps: ['Loon'],
    content: `
## Loon 的特色功能
Loon 拥有现代化的 iOS 设计语言，交互流畅，支持一键载入远程插件（Plugin）。它不仅能完美分流 ChatGPT 与境外流媒体，还能拦截大量主流 App 的开屏商业广告。

---

## 快速配置流程
1. 打开 Loon，在“配置”标签中点击“订阅” → 点击右上角“+”添加节点订阅。
2. 进入“策略组”调整常用流媒体的分流出口节点。
3. 点击主界面开启连接即可。
`
  },
  {
    slug: 'ios-surge-ios-setup-rules',
    title: 'Surge iOS 旗舰网络调试与高级分流全流程指引',
    description: 'iOS 最强网络工具 Surge 5 使用教程。深度解析出站分流、捕获网络请求、本地 DNS 映射与企业级网络优化。',
    platform: 'iOS',
    publishDate: '2026-03-02',
    clientApps: ['Surge iOS'],
    content: `
## Surge 的高端定位
Surge 是专为网络开发者和高级用户设计的网络开发与代理套件。它拥有全球最精准的协议分析引擎和极高的网络吞吐稳定性。

---

## 模块与分流设置
1. 通过托管配置（Managed Configuration）直接订阅机场提供的完整 Surge 配置。
2. 开启“智能策略组（Smart Group）”，Surge 会根据实际网络往返延迟与丢包率自动无感切换最佳节点。
`
  },
  {
    slug: 'ios-quantumult-x-vanilla-guide',
    title: 'Quantumult X（圈叉）从零配置指南：策略组与 JS 脚本重写教程',
    description: '经典 iOS 代理应用圈叉（QX）新手上手教程。涵盖节点资源解析、分流规则集引用与重写模块配置。',
    platform: 'iOS',
    publishDate: '2026-03-05',
    clientApps: ['Quantumult X'],
    content: `
## Quantumult X 的架构设计
Quantumult X 以强大的规则分流引擎和灵活的 JavaScript 脚本支持著称。在底部的风车图标中，用户可以自由添加 Server、Filter 与 Rewrite 远程资源。

---

## 添加节点资源标签
1. 点击右下角风车图标 → 节点「引用（订阅）」。
2. 点击右上角“+”，输入资源名称并粘贴机场订阅链接，勾选“更新前筛选”。
3. 在主界面长按小圆点可进行节点延迟排序与切换。
`
  },
  {
    slug: 'ios-on-demand-auto-connect',
    title: 'iOS 配置“按需连接（On-Demand）”实现无感翻墙与锁屏不断连',
    description: 'iPhone 科学上网终极体验：配置小火箭与 Loon 的按需连接，让代理像蜂窝网络一样随时在线且毫秒响应。',
    platform: 'iOS',
    publishDate: '2026-03-08',
    clientApps: ['Shadowrocket', 'Loon', 'Surge'],
    content: `
## 什么是按需连接？
苹果系统底层的 NetworkExtension 框架提供了 **On-Demand（按需连接）** 功能。开启后，iOS 会根据当前连接的 Wi-Fi 名称或网络请求域名，自动决定是否唤醒代理隧道。

---

## 小火箭开启按需连接步骤
1. 打开小火箭 → 设置 → **“按需连接”**。
2. 开启“总开关”，并勾选“蜂窝网络”与“Wi-Fi”。
3. 开启后，手机重启后客户端会自动在后台启动，无需每次手动打开软件点开关。
`
  },

  // macOS (5)
  {
    slug: 'macos-clash-verge-rev-mac-setup',
    title: 'Mac 电脑科学上网首选：Clash Verge Rev (M芯片原生) 安装指引',
    description: '针对 Apple Silicon M1/M2/M3/M4 芯片原生编译的 Mac 版 Clash Verge Rev 配置教程。',
    platform: 'macOS',
    publishDate: '2026-03-10',
    clientApps: ['Clash Verge Rev Mac'],
    content: `
## Mac 端为什么推荐 Clash Verge Rev？
它基于苹果原生安全框架，完美适配 macOS Sonoma 与 Sequoia，提供菜单栏状态图标，支持深色模式切换，并且能够无痛开启 TUN 模式接管整台 Mac 的所有系统流量。

---

## 软件安装与权限授权
1. 下载 \`Clash.Verge_x.x.x_aarch64.dmg\` 并拖入“应用程序”文件夹。
2. 首次打开若提示“无法验证开发者”，在 Mac 系统设置 → **“隐私与安全性”** 中点击“仍要打开”。
3. 导入订阅后在设置中开启“系统代理”，在代理页面选择节点即可。
`
  },
  {
    slug: 'macos-terminal-shell-proxy-export',
    title: 'macOS 终端 Terminal / iTerm2 命令行代理加速终极配置',
    description: '解决 Mac 终端无法通过系统代理加速的难题。一键配置 zsh / bash 环境变量别名快速拉取 GitHub 代码。',
    platform: 'macOS',
    publishDate: '2026-03-12',
    clientApps: ['Terminal', 'iTerm2', 'zsh'],
    content: `
## 痛点：Mac 系统代理对终端无效
macOS 的“网络偏好设置”中的 HTTP/SOCKS 代理通常只对 Safari 和 Chrome 等图形浏览器生效，终端中的 \`curl\`、\`git clone\`、\`npm install\` 默认直接走公网。

---

## 配置一键开关别名
打开终端，编辑 \`~/.zshrc\` 文件：
\`\`\`bash
# 代理快捷指令 (假设客户端端口为 7897)
alias setproxy="export http_proxy=http://127.0.0.1:7897; export https_proxy=http://127.0.0.1:7897; echo '终端代理已开启'"
alias unsetproxy="unset http_proxy; unset https_proxy; echo '终端代理已关闭'"
\`\`\`
保存后执行 \`source ~/.zshrc\`。以后在终端输入 \`setproxy\` 即可满速拉取海外代码。
`
  },
  {
    slug: 'macos-surge-mac-gateway-setup',
    title: 'Surge Mac 版局域网旁路网关模式与全家设备共享代理教程',
    description: '发挥 Mac 电脑的强大算力。将 Mac 作为家庭软路由旁路网关，为 Apple TV、Switch 与手机提供静默代理。',
    platform: 'macOS',
    publishDate: '2026-03-15',
    clientApps: ['Surge Mac'],
    content: `
## 什么是 Surge Mac 网关模式？
Surge Mac 拥有独家的 Enhanced Mode（增强模式）与 Router Mode（路由器模式）。只需开启网关共享功能，你的 Mac 就能化身一台性能强悍的企业级透明网关。

---

## 核心设置步骤
1. 打开 Surge Mac 偏好设置 →“常规”→ 勾选 **“允许来自局域网的连接”**。
2. 开启 **“作为局域网网关”** 选项。
3. 在同一 Wi-Fi 下的 Apple TV 或手机的网络设置中，将“路由器/网关”和“DNS”地址修改为你 Mac 的局域网 IP（例如 \`192.168.1.50\`）。
`
  },
  {
    slug: 'macos-git-homebrew-github-acceleration',
    title: 'Mac 开发者必备：Git、Homebrew 与 Docker 镜像代理加速教程',
    description: '告别 brew update 卡死与 git clone 报错。手把手配置 Git 专有代理与 Docker Hub 镜像分流。',
    platform: 'macOS',
    publishDate: '2026-03-18',
    clientApps: ['Git', 'Homebrew', 'Docker Desktop'],
    content: `
## 提升开发效率的必须步骤
对于 Mac 开发者而言，GitHub 速度慢、Homebrew 依赖拉取超时、Docker 镜像无法下载是家常便饭。

---

## 仅对 GitHub 域名开启 Git 代理
不要全局代理 Git，以免影响国内 GitLab 与 Gitee：
\`\`\`bash
git config --global http.https://github.com.proxy http://127.0.0.1:7897
git config --global https.https://github.com.proxy http://127.0.0.1:7897
\`\`\`
`
  },
  {
    slug: 'macos-system-proxy-troubleshooting',
    title: 'Mac 系统代理开关灰色、无法保存或连不上网的排查指南',
    description: '解决 macOS 代理设置常见异常。清理残留 LaunchDaemons、重置网络配置与修复 DNS 冲突。',
    platform: 'macOS',
    publishDate: '2026-03-20',
    clientApps: ['System Settings', 'Network'],
    content: `
## 常见故障表现
- 软件关闭后网页无法打开，提示“未连接到互联网”；
- 系统设置中的“代理”设置每次修改后无法保存；
- 提示端口被其他程序占用。

---

## 快速自愈解决方案
1. **检查客户端是否异常退出：** 重新打开 Clash 或 Surge，正常勾选系统代理后再通过软件菜单正规退出，让软件自动注销系统代理端口。
2. **终端清理环境变量：** 运行 \`networksetup -setwebproxystate "Wi-Fi" off\` 强制关闭代理。
`
  },

  // Router (5)
  {
    slug: 'router-openwrt-openclash-setup',
    title: 'OpenWrt 软路由安装 OpenClash 插件实现全家设备自动科学上网',
    description: '打造无感家庭代理网络。在 OpenWrt 软路由上安装 OpenClash，配置 Meta 内核与 Fake-IP 混合模式。',
    platform: 'Router',
    publishDate: '2026-03-22',
    clientApps: ['OpenWrt', 'OpenClash'],
    content: `
## 为什么要在路由器端实现科学上网？
在路由器上配置代理后，全家所有设备（包括无法安装客户端的扫地机器人、电视机、PS5 游戏机）连上 Wi-Fi 即可自动无感分流，彻底摆脱每台手机电脑都要单独开软件的烦恼。

---

## OpenClash 核心配置步骤
1. 在 OpenWrt 软件源中安装 \`luci-app-openclash\` 插件。
2. 进入 OpenClash 控制面板，在“配置订阅”中导入机场订阅链接并转换为 Meta 配置。
3. 运行模式推荐选择 **“Fake-IP (TUN 模式)”**，开启核心守护进程。
`
  },
  {
    slug: 'router-passwall-xray-tutorial',
    title: 'PassWall 插件配置教程：基于 Xray 核心的多节点负载均衡与分流',
    description: 'OpenWrt 上轻巧稳定的 PassWall 详细配置指南。节点自动故障转移与自动分流策略实操。',
    platform: 'Router',
    publishDate: '2026-03-24',
    clientApps: ['PassWall', 'Xray-core'],
    content: `
## PassWall 的稳定性优势
PassWall 对低配路由器非常友好，采用模块化设计。用户可以针对 Google、Netflix、国内流量分别指定不同的节点出口。

---

## 负载均衡与节点自动切换
1. 添加节点订阅后，在“节点列表”中勾选参与负载均衡的节点。
2. 设置自动轮询时间，当某个节点延迟超过阈值时，路由器会自动将流量切换至备用专线。
`
  },
  {
    slug: 'router-clash-meta-tproxy-transparent',
    title: '旁路由透明网关 (TProxy) 模式配置与网络防环路全景指南',
    description: '单网口主路由 + 旁路由拓扑深度解析。配置 TProxy 透明代理与正确设置网关 IP 避免广播风暴。',
    platform: 'Router',
    publishDate: '2026-03-25',
    clientApps: ['OpenWrt', 'TProxy'],
    content: `
## 旁路由网络拓扑解析
主路由（负责 DHCP 拨号，如 192.168.1.1）+ 旁路由（负责翻墙分流，如 192.168.1.2）。
只需将需要翻墙的设备的“默认网关”指向旁路由 IP 即可实现精准控制。
`
  },
  {
    slug: 'router-ps5-switch-xbox-game-acceleration',
    title: '主机玩家教程：通过代理软路由给 PS5 / Switch / Xbox 联机加速',
    description: '告别游戏下载几十 KB/s 与 NAT 类型受限。配置软路由节点让家用主机享受低延迟专线加速。',
    platform: 'Router',
    publishDate: '2026-03-26',
    clientApps: ['OpenClash', 'Gaming Console'],
    content: `
## 主机联网的痛点
任天堂 eShop 商店打不开、PlayStation Network 下载游戏慢如蜗牛、Xbox 联机提示 NAT 严格（Strict）。

---

## 路由器端优化规则
在 OpenClash 中将游戏分流规则（Nintendo、PlayStation、Xbox 服务域名）绑定到低延迟的香港或日本 IPLC 专线，并开启 Full-Cone NAT 模式即可将 NAT 类型提升为 Open。
`
  },
  {
    slug: 'router-home-dns-smart-fallback',
    title: '软路由 MosDNS + AdGuard Home 配合代理去广告防污染全景方案',
    description: '家庭顶级 DNS 架构：国内域名走运营商低延迟解析，国外域名走代理防污染加密通道。',
    platform: 'Router',
    publishDate: '2026-03-28',
    clientApps: ['MosDNS', 'AdGuard Home'],
    content: `
## 终极家庭 DNS 拓扑
客户端发出 DNS 请求 → AdGuard Home（过滤广告）→ MosDNS（智能分流）→ 国内域名走阿里/腾讯 DNS，海外域名走代理核心远端解析。彻底解决 DNS 污染与 CDN 访问减速问题。
`
  },

  // Advanced General (5)
  {
    slug: 'advanced-subconverter-subscription-management',
    title: '使用 Subconverter 自建或本地转换订阅规则教程',
    description: '摆脱第三方在线转换泄露订阅风险。手把手教你在本地电脑或 VPS 运行 Subconverter 容器。',
    platform: 'General',
    publishDate: '2026-03-29',
    clientApps: ['Subconverter', 'Docker'],
    content: `
## 为什么尽量避免使用公共第三方订阅转换？
很多公开免费的在线订阅转换网站会在后台记录用户的订阅 URL，不仅可能盗用你的套餐流量，还存在隐私泄露风险。

---

## 本地 Docker 快速启动
\`\`\`bash
docker run -d --name subconverter -p 25500:25500 tindy2013/subconverter:latest
\`\`\`
启动后，即可在本地客户端使用 \`http://127.0.0.1:25500\` 转换任何协议节点。
`
  },
  {
    slug: 'advanced-clash-yaml-rule-customization',
    title: '手把手教你编写自定义 Clash YAML 规则组与精准分流策略',
    description: '玩转 Clash 配置文件。深入理解 rule-providers、proxy-groups、DOMAIN-KEYWORD 与 IP-CIDR 语法。',
    platform: 'General',
    publishDate: '2026-03-30',
    clientApps: ['Clash Verge Rev', 'Mihomo'],
    content: `
## Clash 规则执行顺序法则
Clash 的规则自上而下匹配，一旦命中立即执行相应策略。
因此，特定域名规则（DOMAIN-SUFFIX）必须写在大范围地理规则（GEOIP）之前。
`
  },
  {
    slug: 'advanced-node-speed-latency-testing',
    title: '如何科学测量节点晚高峰丢包与真实单线程可用带宽',
    description: '拒绝白天测速截图忽悠。使用 Speedtest-CLI 与 PingPlotter 深度监测晚高峰真实网络表现。',
    platform: 'General',
    publishDate: '2026-03-31',
    clientApps: ['PingPlotter', 'Speedtest'],
    content: `
## 测速的三大误区
1. 只看白天测速，不看晚高峰 20:00-23:00。
2. 只看多线程测速跑满，不看单线程 4K 播放实际拉流速度。
3. 只看 Ping 延迟，不看连续 200 个数据包的丢包率。
`
  },
  {
    slug: 'advanced-custom-domain-direct-routing',
    title: '如何配置局域网 NAS、公司内网与国内政务网站强制直连',
    description: '避免翻墙代理干扰内网通讯。手把手教你添加私有 IP 段与特殊内网域名直连白名单。',
    platform: 'General',
    publishDate: '2026-04-01',
    clientApps: ['All Clients'],
    content: `
## 常见内网访问冲突
开启全局代理后，访问群晖 NAS 网页（192.168.1.100）或公司内网 OA 系统突然打不开。
只需在客户端分流规则顶部添加：
\`\`\`yaml
rules:
  - IP-CIDR,192.168.0.0/16,DIRECT
  - IP-CIDR,10.0.0.0/8,DIRECT
  - DOMAIN-SUFFIX,internal.company.com,DIRECT
\`\`\`
`
  },
  {
    slug: 'advanced-failover-url-test-health-check',
    title: '客户端自动化健康检测（Url-Test / Fallback）无感容灾配置',
    description: '实现断网自动秒级切换。配置健康检查周期与故障转移策略，告别手动频繁换节点。',
    platform: 'General',
    publishDate: '2026-04-02',
    clientApps: ['Clash', 'Sing-box'],
    content: `
## 什么是自动故障转移？
客户端定期向 Google 生成 204 返回码的测试链接发送轻量探测包。一旦当前使用节点断流超过 5 秒，系统无感切换至次优备用节点，保障远程办公永不断线。
`
  }
];

tutorials.forEach(t => {
  const filePath = path.join(guidesDir, `${t.slug}.md`);
  const frontmatter = `---
title: "${t.title}"
description: "${t.description}"
platform: "${t.platform}"
publishDate: "${t.publishDate}"
clientApps: ${JSON.stringify(t.clientApps)}
---
${t.content}
`;
  fs.writeFileSync(filePath, frontmatter, 'utf8');
});

console.log(`Successfully generated ${tutorials.length} detailed tutorial markdown files in ${guidesDir}!`);
