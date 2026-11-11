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
