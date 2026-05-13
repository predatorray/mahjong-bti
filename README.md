# Mahjong BTI

**Mahjong Behavior Type Indicator** — a 16-personality test for Mahjong players.
Twelve quick questions reveal which kind of player you are at the table.

Built as a React + MUI single-page application, designed to be hosted on GitHub
Pages.

<p align="center">
  <img src="https://raw.githubusercontent.com/predatorray/mahjong-bti/assets/screenshot-result.png" alt="Result page screenshot" width="460" />
</p>

## Stack

- React 19 + TypeScript (Create React App)
- MUI 7
- `react-router-dom` 7 (HashRouter for GitHub Pages compatibility)
- Lightweight in-house i18n (English + 简体中文)
- Jest + React Testing Library (unit tests)
- Playwright (end-to-end tests, desktop + mobile profiles)

## The four dimensions

| Axis | First pole | Second pole |
|------|------------|-------------|
| **A / D** | **A**ggressive (attack) | **D**efensive (avoid dealing in) |
| **B / S** | **B**ig hands (yakuman-chaser) | **S**mall hands (any win is a win) |
| **C / F** | **C**alculated (probability, reading) | **F**eel / faith (intuition, luck) |
| **T / W** | **T**ight (disciplined, sticks to plan) | **W**ild (loose, mood-driven) |

Sixteen possible codes — e.g. `ABCT` (the Dragon Slayer), `DSFW` (the Slacker
Champion).

## Local development

```bash
npm install
npm start            # dev server on http://localhost:3000
npm run build        # production bundle
npm test             # unit tests (watch mode)
npm run test:ci      # unit tests (single run)
npm run e2e:install  # one-time: download Playwright Chromium
npm run e2e          # run end-to-end tests
```

## Deploy

The `homepage` field in `package.json` is set for
`https://predator-ray.github.io/mahjong-bti`. To deploy:

```bash
npm run deploy
```

This builds and publishes the bundle to the `gh-pages` branch.
