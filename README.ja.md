# Mahjong BTI

[English](./README.md) · [简体中文](./README.zh-CN.md) · [繁體中文](./README.zh-TW.md) · **日本語** · [한국어](./README.ko.md)

**Mahjong Behavior Type Indicator（麻雀行動タイプ指標）** —— 麻雀プレイヤー向けの 16 タイプ性格診断。
12 問のクイック診断で、卓上でのあなたのプレイヤータイプが分かります。

👉 **オンラインで試す: <https://www.predatorray.me/mahjong-bti/>**

React + MUI で作られたシングルページアプリで、GitHub Pages 上でのホスティングを想定しています。

<p align="center">
  <img src="https://raw.githubusercontent.com/predatorray/mahjong-bti/assets/screenshot-result-ja.png" alt="結果ページのスクリーンショット" width="460" />
</p>

## 技術スタック

- React 19 + TypeScript（Create React App）
- MUI 7
- `react-router-dom` 7（GitHub Pages 互換のため HashRouter を使用）
- 軽量な自作 i18n（英語 + 簡体字中国語）
- Jest + React Testing Library（ユニットテスト）
- Playwright（E2E テスト、デスクトップ + モバイル）

## 4 つの軸

| 軸 | 第一極 | 第二極 |
|----|--------|--------|
| **A / D** | **A** 攻撃型（攻め） | **D** 守備型（放銃回避） |
| **B / S** | **B** 大物手型（役満狙い） | **S** 速攻型（和了優先） |
| **C / F** | **C** 計算型（確率・読み） | **F** 感覚型（直感・運） |
| **T / W** | **T** 堅実型（規律、プラン重視） | **W** ワイルド型（自由、気分次第） |

組み合わせは 16 通り —— 例えば `ABCT`（ドラゴンスレイヤー）、`DSFW`（ぐうたらチャンピオン）。

## ローカル開発

```bash
npm install
npm start            # 開発サーバー http://localhost:3000
npm run build        # 本番ビルド
npm test             # ユニットテスト（watch モード）
npm run test:ci      # ユニットテスト（単発実行）
npm run e2e:install  # 初回のみ：Playwright Chromium をダウンロード
npm run e2e          # E2E テスト
```

## デプロイ

`package.json` の `homepage` フィールドは
`https://predator-ray.github.io/mahjong-bti` に設定されています。デプロイコマンド:

```bash
npm run deploy
```

ビルドして `gh-pages` ブランチに公開します。
