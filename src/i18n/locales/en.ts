const en = {
  lang: 'English',
  app_title: 'Mahjong BTI',
  app_subtitle: 'Mahjong Behavior Type Indicator',
  app_description:
    'Sixteen Mahjong personalities. Twelve quick questions. Discover the player you are at the table.',
  home_cta_start: 'Take the Test',
  home_footnote: 'About 2 minutes · 12 questions',

  wizard_progress: (current: number, total: number) =>
    `Question ${current} of ${total}`,
  wizard_prev: 'Previous',
  wizard_next: 'Next',
  wizard_finish: 'See My Type',
  wizard_pick_hint: 'Pick the option that feels most like you',

  result_title: 'You are',
  result_subtitle: 'Your Mahjong personality',
  result_retake: 'Retake the Test',
  result_share: 'Share',
  result_share_text: (code: string, name: string) =>
    `I'm ${code} — ${name}. What's your Mahjong personality?`,

  share_button: 'Share',
  share_title: 'Share Mahjong BTI',
  share_link_label: 'Link',
  share_copy: 'Copy link',
  share_copied: 'Copied!',
  share_close: 'Close',
  share_scan_hint: 'Or scan the QR code',
  result_axes_heading: 'Your dimensions',

  axis_AD: 'Aggressive — Defensive',
  axis_BS: 'Big hands — Small hands',
  axis_CF: 'Calculated — Feel',
  axis_TW: 'Tight — Wild',

  axis_AD_tagline: 'When the heat is on, do you press forward or pull back?',
  axis_BS_tagline: 'One fireworks finale, or twenty quiet little wins?',
  axis_CF_tagline: 'Do the numbers run the show, or does your gut get the final say?',
  axis_TW_tagline: 'Stick to the plan, or roll with whatever the table throws at you?',

  pole_A: 'Aggressive',
  pole_D: 'Defensive',
  pole_B: 'Big hands',
  pole_S: 'Small hands',
  pole_C: 'Calculated',
  pole_F: 'Feel',
  pole_T: 'Tight',
  pole_W: 'Wild',

  pole_A_description:
    'You hear the shuffle, you smell blood. Tiles in your hand are ammunition, not souvenirs, and you spend them like a player who genuinely believes the next win is yours. Patience is for people who do not trust their own hand.',
  pole_D_description:
    'You would rather win nothing than lose everything. You read the discard pile like tea leaves, fold a half-built dream without flinching, and let your opponents collide with each other while you sit quietly behind your wall — chips intact, ego intact, sleep schedule intact.',
  pole_B_description:
    'A cheap win bores you. You will break a perfectly working hand to chase the one your friends will still be talking about at breakfast. If you are going to win, it had better be worth a photo — and possibly a small acceptance speech.',
  pole_S_description:
    'Win small, win often, win again. You do not need confetti or fireworks — you need a steady drip of cleared hands and a tidy little pile of chips. Every win counts the same on the scoresheet, so why work overtime when the assembly line is humming?',
  pole_C_description:
    'Discards are data, waits are probabilities, and the table is a live spreadsheet you happen to be solving. You do not believe in luck; you believe in the long run, and the long run, on average, loves you back. Variance is just weather.',
  pole_F_description:
    'Some tiles feel friendly, some feel cursed, and you have stopped pretending otherwise. You move on hunches, vibes, and a quiet sense of "not that one" — and somehow the universe keeps backing you up. Skeptics are welcome to count tiles; you will keep winning.',
  pole_T_description:
    'You pick a plan and you marry it. No FOMO calls, no mood-based discards, no 1AM hero plays. Discipline is unsexy until you tally the chips at the end of the night — and then, very quietly, it is the sexiest thing at the table.',
  pole_W_description:
    'Plans are suggestions, not prison bars. You ride momentum, flip styles between hands, and let the table\'s energy steer the wheel. Predictable players have nothing on you — including, occasionally, yourself, which is half the fun.',

  questions: {
    q1: {
      question: 'It is the first round, and you draw a tile. You think:',
      options: [
        'Game on — let me start shaping a hand right away.',
        'Slow down. Let me see what everyone discards first.',
      ],
    },
    q2: {
      question: 'An opponent is clearly close to winning, and their hand looks big. You:',
      options: [
        'Race them — my hand is good too, I want the win.',
        'Switch to defense. No need to deal in.',
      ],
    },
    q3: {
      question: 'On the last draw of the round, you are one tile away from winning but the wait is dangerous. You:',
      options: [
        'Discard live and chase the win.',
        'Discard safe. Better to draw than to lose chips.',
      ],
    },
    q4: {
      question: 'You can either complete a quick cheap hand now, or break shape for a chance at a big yaku. You:',
      options: [
        'Break shape — a big win is worth the wait.',
        'Take the win. Any win is a win.',
      ],
    },
    q5: {
      question: 'You see a juicy dora indicator. You:',
      options: [
        'Build around it. This hand should be huge.',
        'Note it and keep playing efficiently.',
      ],
    },
    q6: {
      question: 'Your dream hand at Mahjong is:',
      options: [
        'A satisfying, photo-worthy big yaku.',
        'Twenty small wins in one night.',
      ],
    },
    q7: {
      question: 'You are deciding which tile to discard. You mostly rely on:',
      options: [
        'Counting tiles, reading discards, weighing odds.',
        'Gut feeling. The right tile just feels right.',
      ],
    },
    q8: {
      question: 'You just had a brutal losing streak. The fix is to:',
      options: [
        'Review your plays and adjust the strategy.',
        'Change seats, wash your hands, flip the lucky charm.',
      ],
    },
    q9: {
      question: 'Someone declares an unusual wait. You think:',
      options: [
        '"Statistically, the safe tiles are X, Y, Z."',
        '"Something about that tile feels wrong. Avoid it."',
      ],
    },
    q10: {
      question: 'You set a plan for the hand. Mid-round you:',
      options: [
        'Stick to the plan — discipline wins long-term.',
        'Adapt freely. The table changes; so do I.',
      ],
    },
    q11: {
      question: 'You are at the table to:',
      options: [
        'Play seriously. The goal is to win.',
        'Have fun. Winning is a nice bonus.',
      ],
    },
    q12: {
      question: 'After three wins in a row, you:',
      options: [
        'Keep the same focused style that got you here.',
        'Loosen up — ride the vibe and try something wild.',
      ],
    },
  },

  types: {
    ABCT: {
      name: 'The Dragon Slayer',
      tagline: 'Cold, precise, lethal — the killer at the table.',
      description:
        'You play attack with surgical discipline. Every discard is calculated, every push is timed, and when you go for the kill, you do not miss. The table feels safer when you are quiet.',
    },
    ABCW: {
      name: 'The Possessed Gambler',
      tagline: 'Big hands, big bets, big energy.',
      description:
        'You play loud and play to win. You read the table well enough to know when to swing big, and you swing without flinching. Style points are earned along the way.',
    },
    ABFT: {
      name: 'The Berserker',
      tagline: 'Push, push, push. Fear is for later.',
      description:
        'Patience is overrated. You build aggressively, push aggressively, and trust your instincts to carry you through. When it works, it is glorious. When it does not, on to the next hand.',
    },
    ABFW: {
      name: 'The Mystic',
      tagline: 'Protected by luck, powered by vibes.',
      description:
        'You play offense, but your real strategy is faith. You move tiles based on feel, and the universe seems to oblige. Skeptics call it luck; you call it alignment.',
    },
    ASCT: {
      name: 'The Assembly Line',
      tagline: 'Call every meld. Win every round.',
      description:
        'Efficiency over elegance. You pung when you can pung, chow when you can chow, and roll a clean small hand to a clean small win — over and over again.',
    },
    ASCW: {
      name: 'The Speed Assassin',
      tagline: 'Tenpai by the sixth tile.',
      description:
        'You play fast. While others are still arranging tiles, you are already waiting to win. You may not score huge, but you score first — and often.',
    },
    ASFT: {
      name: 'The Content Quitter',
      tagline: 'A small win is still a win.',
      description:
        'You read the room and pocket the chips. No need for fireworks: a quiet, repeatable victory feels just right. Knowing when enough is enough is its own superpower.',
    },
    ASFW: {
      name: 'The Chicken King',
      tagline: 'Twenty wins. None of them count for much.',
      description:
        'You win all night long — minimum points, maximum smiles. The hand value does not matter; the joy of saying "I win" does. You are the mascot of every Mahjong table.',
    },
    DBCT: {
      name: 'The Sleazeball',
      tagline: 'Never win. Never deal in. Somehow still on top.',
      description:
        'You disappear into the table. You do not chase wins; you survive rounds. By the end of the night the chips are quietly stacked on your side, and no one is quite sure how.',
    },
    DBCW: {
      name: 'The Reverse Operator',
      tagline: 'Defending… defending… surprise attack!',
      description:
        'You play safe for ten rounds, then push for one. Your unpredictability is the weapon — opponents stop reading you, and that is exactly when you strike.',
    },
    DBFT: {
      name: 'The Silent Earner',
      tagline: 'Quiet hands. Big tiles.',
      description:
        'You speak softly and play big tiles. You do not need to look aggressive — when you do declare, the hand is already enormous. Less drama, more dora.',
    },
    DBFW: {
      name: 'The Zen Master',
      tagline: 'Fortune favors the unbothered.',
      description:
        'Winning and losing are passing clouds. You play with serene detachment, and somehow the right tiles keep finding you. The table is your meditation hall.',
    },
    DSCT: {
      name: 'The Calculator',
      tagline: 'Probability is your love language.',
      description:
        'You know the odds of every wait, the count of every tile, and the expected value of every move. You may not win every hand, but you make the right call every time — and the long run is yours.',
    },
    DSCW: {
      name: 'The Cautious Adventurer',
      tagline: 'Math first, courage second.',
      description:
        'You want to take risks, you really do — but only after you have run the numbers. The result is a careful, thoughtful style that occasionally surprises everyone, including you.',
    },
    DSFT: {
      name: 'Safety First',
      tagline: 'Defense is a complete strategy.',
      description:
        'Your priority is simple: do not deal in. You play to survive, fold early, and let the chaos pass you by. If everyone else loses chips and you do not, you have already won.',
    },
    DSFW: {
      name: 'The Slacker Champion',
      tagline: 'Came for the snacks. Stayed for the company.',
      description:
        'Mahjong is the side dish — the friends are the meal. You play loose, laugh often, and absolutely do not care about the score sheet. Honestly, that is its own kind of mastery.',
    },
  },
} as const;

export default en;
