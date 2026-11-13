# 梅课宣传站

面向 SEU 同学的产品介绍与分发入口。独立于私有 Flutter 主工程及 MeiKe-web 网页版产物仓库。

## 本地预览

无需依赖或构建：`python3 -m http.server 8843 --bind 127.0.0.1`，打开 http://127.0.0.1:8843/ 。

## 更新下载入口

编辑 `config.js`：`webAppUrl` 为 iPhone 网页版链接。Android 测试完成后，在 `android.url` 填入 HTTPS APK 下载链接，并填写 `version`、`size` 和可选 `releaseNotesUrl`。空链接保持禁用状态，避免假下载。脚本会同步更新下载按钮、状态及介绍。请在真实设备验证安装包后再开放。

## 页面内容

黄绿与纸色视觉、响应式布局、三主题交互演示、示例课程弹窗、奶家角色点名、iOS 主屏幕添加指引、Android 预留入口、平台差异与本地数据备份说明。遵循系统减少动态效果偏好。无追踪脚本、无用户表单、无后台。

课表是明确标注的演示数据；页面不承诺毫秒级性能或所有平台功能一致。iOS 操作步骤参考 Apple 官方说明：https://support.apple.com/zh-cn/guide/iphone/iphea86e5236/ios 。奶家图片复用梅课现有主题素材，公开宣传前请由团队确认素材使用范围。

## 发布

经所有者授权，宣传站源码公开，使用 GitHub Pages 从 main 分支根目录发布。地址：https://everflora.github.io/MeiKe-site/ 。梅课主工程仍独立保持私有。发布文件仅 `index.html`、`style.css`、`app.js`、`config.js` 和 `assets/`；不包含主工程、账户或服务器凭据。

## 当前 Android 安装包

版本 1.6.5（构建 25），Android 7.0 及以上，24,256,309 字节，托管在本仓库的 Release `android-v1.6.5`。SHA-256：`392a89e9f88763ac7a36f1c0e56f645ce2d4365dad3c0dddbe6bca1f233bb058`。APK 不放入源码 Git 历史。

## 实机展示与校园功能

首页课表采用团队提供的原始实机图，并展示整周课表、劳动教育、素质讲座三张截图（`assets/app-timetable.jpg`、`assets/app-campus.jpg`、`assets/app-lectures.jpg`），可点击放大。主题切换仅改变下方标注的示意卡片，不会给真实截图换色。校园宣传点包括本周讲座、教务通知、劳动教育和校历，同时说明部分功能需学校账号及不同平台开放差异。导航栏和页脚的 GitHub 入口指向公开组织主页 https://github.com/Everflora ，避免让普通访客进入私有主工程的 404 页面。
