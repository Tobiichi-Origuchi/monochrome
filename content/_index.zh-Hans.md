+++
title = "Monochrome"
description = "适用于个人网站和博客的极简、可配置 Zola 主题。"
+++

Monochrome 让博客的结构保持直观、可预测。主题使用黑、灰、白配色和直角边缘，配有固定的垂直侧栏与居中的阅读区域，在宽屏和窄屏上都能保持舒适的排版。

## 主题特征

- 默认不使用 JavaScript。导航、下拉菜单、响应式侧栏和折叠区域均使用原生 HTML 与 CSS。
- 通过 `prefers-color-scheme` 自动适配亮色和暗色主题。
- 垂直导航完全由配置定义，并支持可折叠的多级分组。
- 支持多语言页面、界面翻译，以及每种语言独立的 Atom 和 RSS Feed。
- 使用模块化 Sass 和可复用的 Zola Component，不依赖内联样式或旧式模板功能。
- 包含代码高亮、可选的代码复制增强、标签、脚注、提示框、表格、媒体等常用内容元素。
- 为桌面、平板和覆盖式移动端导航分别提供响应式布局。

可以通过[部件演示页面](@/demo/index.md)查看主题包含的内容元素。

## 安装

在现有 Zola 网站中，将 Monochrome 添加到 `themes` 目录：

```shell
git submodule add https://github.com/Tobiichi-Origuchi/monochrome.git themes/monochrome
git submodule update --init
```

在网站的 `zola.toml` 顶层启用主题：

```toml
theme = "monochrome"
```

本仓库带有完整注释的 `zola.toml` 可作为配置参考。复制需要的语言、标签、Markdown 和 `[extra]` 设置，然后将示例标题、导航、页脚链接和 `base_url` 替换成你自己的内容。
