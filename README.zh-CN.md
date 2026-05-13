# Mahjong BTI

[English](./README.md) · **简体中文** · [繁體中文](./README.zh-TW.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md)

**麻将行为类型指标（Mahjong Behavior Type Indicator）** —— 面向麻将玩家的 16 型人格测试。
十二道快问快答，告诉你在牌桌上是哪一种玩家。

👉 **在线体验： <https://www.predatorray.me/mahjong-bti/>**

基于 React + MUI 的单页应用，部署在 GitHub Pages 上。

<p align="center">
  <img src="https://raw.githubusercontent.com/predatorray/mahjong-bti/assets/screenshot-result-zh.png" alt="结果页截图" width="460" />
</p>

## 技术栈

- React 19 + TypeScript（Create React App）
- MUI 7
- `react-router-dom` 7（使用 HashRouter 以兼容 GitHub Pages）
- 轻量自研 i18n（英文 + 简体中文）
- Jest + React Testing Library（单元测试）
- Playwright（端到端测试，桌面端 + 移动端）

## 四个维度

| 维度 | 第一极 | 第二极 |
|------|--------|--------|
| **A / D** | **A** 进攻型（攻击） | **D** 防守型（避免放铳） |
| **B / S** | **B** 大牌型（追求役满） | **S** 小牌型（赢就是赢） |
| **C / F** | **C** 计算型（概率、读牌） | **F** 直觉型（手感、运气） |
| **T / W** | **T** 严谨型（自律、按计划走） | **W** 狂野型（随性、看心情） |

共有 16 种可能的组合 —— 例如 `ABCT`（屠龙者）、`DSFW`（躺赢冠军）。

## 本地开发

```bash
npm install
npm start            # 开发服务器 http://localhost:3000
npm run build        # 生产环境构建
npm test             # 单元测试（监听模式）
npm run test:ci      # 单元测试（单次运行）
npm run e2e:install  # 一次性：下载 Playwright Chromium
npm run e2e          # 端到端测试
```

## 部署

`package.json` 中的 `homepage` 字段已设置为
`https://predator-ray.github.io/mahjong-bti`。部署命令：

```bash
npm run deploy
```

该命令会构建并将产物发布到 `gh-pages` 分支。
