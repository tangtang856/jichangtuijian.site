---
title: "macOS 终端 Terminal / iTerm2 命令行代理加速终极配置"
description: "解决 Mac 终端无法通过系统代理加速的难题。一键配置 zsh / bash 环境变量别名快速拉取 GitHub 代码。"
platform: "macOS"
publishDate: "2026-03-12"
clientApps: ["Terminal","iTerm2","zsh"]
---

## 痛点：Mac 系统代理对终端无效
macOS 的“网络偏好设置”中的 HTTP/SOCKS 代理通常只对 Safari 和 Chrome 等图形浏览器生效，终端中的 `curl`、`git clone`、`npm install` 默认直接走公网。

---

## 配置一键开关别名
打开终端，编辑 `~/.zshrc` 文件：
```bash
# 代理快捷指令 (假设客户端端口为 7897)
alias setproxy="export http_proxy=http://127.0.0.1:7897; export https_proxy=http://127.0.0.1:7897; echo '终端代理已开启'"
alias unsetproxy="unset http_proxy; unset https_proxy; echo '终端代理已关闭'"
```
保存后执行 `source ~/.zshrc`。以后在终端输入 `setproxy` 即可满速拉取海外代码。

