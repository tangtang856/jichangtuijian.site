---
title: "Mac 开发者必备：Git、Homebrew 与 Docker 镜像代理加速教程"
description: "告别 brew update 卡死与 git clone 报错。手把手配置 Git 专有代理与 Docker Hub 镜像分流。"
platform: "macOS"
publishDate: "2026-03-18"
clientApps: ["Git","Homebrew","Docker Desktop"]
---

## 提升开发效率的必须步骤
对于 Mac 开发者而言，GitHub 速度慢、Homebrew 依赖拉取超时、Docker 镜像无法下载是家常便饭。

---

## 仅对 GitHub 域名开启 Git 代理
不要全局代理 Git，以免影响国内 GitLab 与 Gitee：
```bash
git config --global http.https://github.com.proxy http://127.0.0.1:7897
git config --global https.https://github.com.proxy http://127.0.0.1:7897
```

