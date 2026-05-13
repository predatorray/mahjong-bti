# Mahjong BTI

[English](./README.md) · [简体中文](./README.zh-CN.md) · [繁體中文](./README.zh-TW.md) · [日本語](./README.ja.md) · **한국어**

**Mahjong Behavior Type Indicator (마작 행동 유형 지표)** —— 마작 플레이어를 위한 16가지 성격 진단.
12개의 빠른 질문으로 탁자 위 당신이 어떤 플레이어인지 알려드립니다.

👉 **온라인에서 해보기: <https://www.predatorray.me/mahjong-bti/>**

React + MUI로 만든 싱글 페이지 앱이며, GitHub Pages에 호스팅되도록 설계되었습니다.

<p align="center">
  <img src="https://raw.githubusercontent.com/predatorray/mahjong-bti/assets/screenshot-result-ko.png" alt="결과 페이지 스크린샷" width="460" />
</p>

## 기술 스택

- React 19 + TypeScript (Create React App)
- MUI 7
- `react-router-dom` 7 (GitHub Pages 호환을 위해 HashRouter 사용)
- 경량 자체 제작 i18n (영어 + 간체 중국어 등)
- Jest + React Testing Library (단위 테스트)
- Playwright (E2E 테스트, 데스크톱 + 모바일)

## 네 가지 축

| 축 | 첫 번째 극 | 두 번째 극 |
|----|-----------|-----------|
| **A / D** | **A** 공격형 (밀어붙임) | **D** 수비형 (방총 회피) |
| **B / S** | **B** 큰 손형 (역만 추구) | **S** 작은 손형 (이기면 이긴 것) |
| **C / F** | **C** 계산형 (확률, 읽기) | **F** 직감형 (감각, 운) |
| **T / W** | **T** 신중형 (규율, 계획 중시) | **W** 자유형 (느슨, 기분 따라) |

총 16가지 조합 —— 예를 들어 `ABCT` (도룡도), `DSFW` (게으른 챔피언).

## 로컬 개발

```bash
npm install
npm start            # 개발 서버 http://localhost:3000
npm run build        # 프로덕션 빌드
npm test             # 단위 테스트 (watch 모드)
npm run test:ci      # 단위 테스트 (단발 실행)
npm run e2e:install  # 최초 1회: Playwright Chromium 다운로드
npm run e2e          # E2E 테스트
```

## 배포

`package.json`의 `homepage` 필드는
`https://predator-ray.github.io/mahjong-bti`로 설정되어 있습니다. 배포 명령:

```bash
npm run deploy
```

빌드 후 `gh-pages` 브랜치에 게시합니다.
