/* eslint-disable */
// Build-time SEO prerender. For each known route, writes a static
// <route>/index.html with route-specific <title>, meta description, canonical,
// Open Graph, and Twitter Card tags injected into <head>. Also emits sitemap.xml.
//
// The body is unchanged — React hydrates as usual. The goal here is real URLs
// on GitHub Pages (no SPA-404 fallback hack) plus per-route head metadata so
// crawlers and social previews see the right thing.

const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');
const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const HOMEPAGE = (pkg.homepage || '').replace(/\/$/, '');

const TYPES = {
  ABCT: { name: 'The Dragon Slayer', tagline: 'Cold, precise, lethal — the killer at the table.' },
  ABCW: { name: 'The Possessed Gambler', tagline: 'Big hands, big bets, big energy.' },
  ABFT: { name: 'The Berserker', tagline: 'Push, push, push. Fear is for later.' },
  ABFW: { name: 'The Mystic', tagline: 'Protected by luck, powered by vibes.' },
  ASCT: { name: 'The Assembly Line', tagline: 'Call every meld. Win every round.' },
  ASCW: { name: 'The Speed Assassin', tagline: 'Tenpai by the sixth tile.' },
  ASFT: { name: 'The Content Quitter', tagline: 'A small win is still a win.' },
  ASFW: { name: 'The Chicken King', tagline: 'Twenty wins. None of them count for much.' },
  DBCT: { name: 'The Sleazeball', tagline: 'Never win. Never deal in. Somehow still on top.' },
  DBCW: { name: 'The Reverse Operator', tagline: 'Defending… defending… surprise attack!' },
  DBFT: { name: 'The Silent Earner', tagline: 'Quiet hands. Big tiles.' },
  DBFW: { name: 'The Zen Master', tagline: 'Fortune favors the unbothered.' },
  DSCT: { name: 'The Calculator', tagline: 'Probability is your love language.' },
  DSCW: { name: 'The Cautious Adventurer', tagline: 'Math first, courage second.' },
  DSFT: { name: 'Safety First', tagline: 'Defense is a complete strategy.' },
  DSFW: { name: 'The Slacker Champion', tagline: 'Came for the snacks. Stayed for the company.' },
};

const SITE_NAME = 'Mahjong BTI';
const SITE_DESC =
  'Sixteen Mahjong personalities. Twelve quick questions. Discover the player you are at the table.';

const routes = [
  { path: '/', title: `${SITE_NAME} — Mahjong Behavior Type Indicator`, description: SITE_DESC },
  { path: '/test', title: `Take the Test — ${SITE_NAME}`, description: 'Answer 12 quick questions to discover your Mahjong player archetype.' },
  ...Object.keys(TYPES).map((code) => ({
    path: `/result/${code}`,
    title: `${TYPES[code].name} (${code}) — ${SITE_NAME}`,
    description: `${TYPES[code].tagline} Discover the Mahjong player archetype ${code}.`,
  })),
];

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectMeta(html, { title, description, url }) {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
  if (/<meta\s+name="description"[^>]*>/.test(out)) {
    out = out.replace(/<meta\s+name="description"[^>]*>/, `<meta name="description" content="${d}" />`);
  }
  const block = [
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:url" content="${escapeAttr(url)}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
  ].map((line) => `    ${line}`).join('\n');
  return out.replace('</head>', `${block}\n  </head>`);
}

const indexHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

for (const route of routes) {
  const url = HOMEPAGE + route.path;
  const html = injectMeta(indexHtml, { ...route, url });
  const outPath =
    route.path === '/'
      ? path.join(BUILD_DIR, 'index.html')
      : path.join(BUILD_DIR, route.path, 'index.html');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
}

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map((r) => `  <url><loc>${HOMEPAGE + r.path}</loc></url>`).join('\n') +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap);

console.log(`prerender: wrote ${routes.length} HTML files + sitemap.xml`);
