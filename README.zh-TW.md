# Mahjong BTI

[English](./README.md) · [简体中文](./README.zh-CN.md) · **繁體中文** · [日本語](./README.ja.md) · [한국어](./README.ko.md)

**麻將行為類型指標（Mahjong Behavior Type Indicator）**—— 為麻將玩家設計的 16 型人格測驗。
十二道快問快答，揭曉你在牌桌上是哪一種玩家。

以 React + MUI 打造的單頁應用，設計用於部署在 GitHub Pages 上。

<p align="center">
  <img src="https://raw.githubusercontent.com/predatorray/mahjong-bti/assets/screenshot-result-zh.png" alt="結果頁截圖" width="460" />
</p>

## 技術棧

- React 19 + TypeScript（Create React App）
- MUI 7
- `react-router-dom` 7（使用 HashRouter 以相容 GitHub Pages）
- 輕量自製 i18n（英文 + 簡體中文）
- Jest + React Testing Library（單元測試）
- Playwright（端到端測試,桌面端 + 行動端）

## 四個維度

| 維度 | 第一極 | 第二極 |
|------|--------|--------|
| **A / D** | **A** 進攻型（攻擊） | **D** 防守型（避免放槍） |
| **B / S** | **B** 大牌型（追求役滿） | **S** 小牌型（贏就是贏） |
| **C / F** | **C** 計算型（機率、讀牌） | **F** 直覺型（手感、運氣） |
| **T / W** | **T** 嚴謹型（自律、按計畫走） | **W** 狂野型（隨性、看心情） |

共有 16 種可能的組合 —— 例如 `ABCT`（屠龍者）、`DSFW`（躺贏冠軍）。

## 本機開發

```bash
npm install
npm start            # 開發伺服器 http://localhost:3000
npm run build        # 正式環境建置
npm test             # 單元測試（監看模式）
npm run test:ci      # 單元測試（單次執行）
npm run e2e:install  # 一次性：下載 Playwright Chromium
npm run e2e          # 端到端測試
```

## 部署

`package.json` 中的 `homepage` 欄位已設定為
`https://predator-ray.github.io/mahjong-bti`。部署指令：

```bash
npm run deploy
```

此指令會建置並將產物發佈到 `gh-pages` 分支。
