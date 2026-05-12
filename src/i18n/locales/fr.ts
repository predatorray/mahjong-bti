import { Translations } from '../translations.type';

const fr: Translations = {
  lang: 'Français',
  app_title: 'Mahjong BTI',
  app_subtitle: 'Indicateur de type comportemental au Mahjong',
  app_description:
    'Seize personnalités de Mahjong. Douze questions rapides. Découvrez quel joueur vous êtes vraiment à la table.',
  home_cta_start: 'Commencer le test',
  home_footnote: 'Environ 2 minutes · 12 questions',

  wizard_progress: (current: number, total: number) =>
    `Question ${current} sur ${total}`,
  wizard_prev: 'Précédent',
  wizard_next: 'Suivant',
  wizard_finish: 'Voir mon type',
  wizard_pick_hint: 'Choisissez la réponse qui vous ressemble le plus',

  result_title: 'Vous êtes',
  result_subtitle: 'Votre personnalité Mahjong',
  result_retake: 'Refaire le test',
  result_share: 'Partager',
  result_share_text: (code: string, name: string) =>
    `Je suis ${code} — ${name}. Et vous, quelle est votre personnalité Mahjong ?`,
  result_axes_heading: 'Vos dimensions',

  share_button: 'Partager',
  share_title: 'Partager Mahjong BTI',
  share_link_label: 'Lien',
  share_copy: 'Copier le lien',
  share_copied: 'Copié !',
  share_close: 'Fermer',
  share_scan_hint: 'Ou scannez le QR code',

  axis_AD: 'Agressif — Défensif',
  axis_BS: 'Grandes mains — Petites mains',
  axis_CF: 'Calculé — Intuition',
  axis_TW: 'Discipliné — Libre',

  axis_AD_tagline: 'Quand la pression monte, vous foncez ou vous reculez ?',
  axis_BS_tagline: 'Un feu d\'artifice final, ou vingt petites victoires tranquilles ?',
  axis_CF_tagline: 'Les chiffres mènent le jeu, ou votre instinct a-t-il le dernier mot ?',
  axis_TW_tagline: 'Vous tenez votre plan, ou vous suivez ce que la table vous propose ?',

  pole_A: 'Agressif',
  pole_D: 'Défensif',
  pole_B: 'Grandes mains',
  pole_S: 'Petites mains',
  pole_C: 'Calculé',
  pole_F: 'Intuition',
  pole_T: 'Discipliné',
  pole_W: 'Libre',

  pole_A_description:
    'Le bruit du mélange vous électrise. Les tuiles dans votre main ne sont pas des souvenirs, ce sont des munitions, et vous les dépensez comme quelqu\'un qui croit sincèrement que la prochaine victoire est la sienne. La patience, c\'est pour ceux qui ne font pas confiance à leur jeu.',
  pole_D_description:
    'Vous préférez ne rien gagner plutôt que tout perdre. Vous lisez la défausse comme du marc de café, démontez sans hésiter un rêve à moitié construit, et laissez vos adversaires s\'entrechoquer pendant que vous attendez tranquillement derrière votre mur — jetons intacts, ego intact, sommeil intact.',
  pole_B_description:
    'Une victoire facile vous ennuie. Vous casserez une main parfaitement valable pour chasser celle dont vos amis parleront encore au petit-déjeuner. Si vous gagnez, ça doit valoir une photo — et éventuellement un petit discours.',
  pole_S_description:
    'Gagner petit, gagner souvent, gagner encore. Vous n\'avez pas besoin de confettis — il vous faut un flux régulier de mains conclues et une jolie pile de jetons. Toutes les victoires comptent pareil sur la feuille de score, alors pourquoi faire des heures sup ?',
  pole_C_description:
    'Les défausses sont des données, les attentes sont des probabilités, et la table est un tableur en direct que vous êtes en train de résoudre. Vous ne croyez pas à la chance ; vous croyez au long terme, et le long terme, en moyenne, vous le rend bien. La variance n\'est qu\'un caprice de la météo.',
  pole_F_description:
    'Certaines tuiles vous semblent amicales, d\'autres maudites, et vous avez cessé de faire semblant du contraire. Vous jouez à l\'intuition, aux vibrations, et à ce petit «pas celle-là» — et l\'univers vous donne raison. Les sceptiques peuvent compter les tuiles ; vous, vous continuez à gagner.',
  pole_T_description:
    'Vous choisissez un plan et vous l\'épousez. Pas de FOMO, pas de défausses émotionnelles, pas de coups d\'éclat à 1h du matin. La discipline n\'est pas sexy — jusqu\'à ce qu\'on compte les jetons à la fin de la soirée, et alors, très discrètement, c\'est la chose la plus sexy à la table.',
  pole_W_description:
    'Les plans sont des suggestions, pas des prisons. Vous surfez sur l\'élan, changez de style entre les mains, et laissez l\'énergie de la table tenir le volant. Les joueurs prévisibles ne tiennent pas la comparaison — y compris, parfois, vous-même, et c\'est la moitié du plaisir.',

  questions: {
    q1: {
      question: 'C\'est le premier tour, vous piochez une tuile. Vous pensez :',
      options: [
        'Allons-y — je commence à former ma main tout de suite.',
        'Doucement. Je regarde d\'abord ce que les autres défaussent.',
      ],
    },
    q2: {
      question: 'Un adversaire est clairement proche de gagner, et sa main semble grosse. Vous :',
      options: [
        'Vous lui faites la course — votre main aussi est bonne.',
        'Vous passez en défense. Pas la peine de lui donner la tuile.',
      ],
    },
    q3: {
      question: 'À la dernière pioche du tour, il vous manque une tuile pour gagner, mais l\'attente est dangereuse. Vous :',
      options: [
        'Vous défaussez une tuile vivante et tentez la victoire.',
        'Vous défaussez une tuile sûre. Mieux vaut un nul qu\'une perte.',
      ],
    },
    q4: {
      question: 'Vous pouvez conclure une main rapide et bon marché, ou casser la forme pour viser un gros score. Vous :',
      options: [
        'Vous cassez la forme — une grosse victoire vaut l\'attente.',
        'Vous prenez la victoire. Une victoire est une victoire.',
      ],
    },
    q5: {
      question: 'Vous tirez une tuile qui pourrait porter une bien plus grosse main. Vous :',
      options: [
        'Vous construisez autour. Cette main doit être énorme.',
        'Vous la notez et continuez à jouer efficacement.',
      ],
    },
    q6: {
      question: 'Votre main de rêve au Mahjong, c\'est :',
      options: [
        'Une grosse main satisfaisante, digne d\'une photo.',
        'Vingt petites victoires dans la soirée.',
      ],
    },
    q7: {
      question: 'Pour décider quelle tuile défausser, vous comptez surtout sur :',
      options: [
        'Compter les tuiles, lire les défausses, peser les probabilités.',
        'L\'intuition. La bonne tuile semble bonne, point.',
      ],
    },
    q8: {
      question: 'Vous venez d\'enchaîner les défaites. La solution :',
      options: [
        'Analyser vos coups et ajuster la stratégie.',
        'Changer de siège, vous laver les mains, toucher le porte-bonheur.',
      ],
    },
    q9: {
      question: 'Quelqu\'un annonce une attente inhabituelle. Vous pensez :',
      options: [
        '« Statistiquement, les tuiles sûres sont X, Y, Z. »',
        '« Cette tuile sent mauvais. À éviter. »',
      ],
    },
    q10: {
      question: 'Vous avez établi un plan pour la main. En cours de route :',
      options: [
        'Vous tenez le plan — la discipline paie à long terme.',
        'Vous vous adaptez librement. La table change, vous aussi.',
      ],
    },
    q11: {
      question: 'Vous êtes à la table pour :',
      options: [
        'Jouer sérieusement. L\'objectif, c\'est gagner.',
        'Vous amuser. Gagner, c\'est un bonus sympa.',
      ],
    },
    q12: {
      question: 'Après trois victoires d\'affilée, vous :',
      options: [
        'Gardez le même style concentré qui vous a mené là.',
        'Vous relâchez — vous suivez l\'ambiance et tentez un coup fou.',
      ],
    },
  },

  types: {
    ABCT: {
      name: 'Le Tueur de Dragons',
      tagline: 'Froid, précis, létal — le tueur à la table.',
      description:
        'Vous attaquez avec une discipline chirurgicale. Chaque défausse est calculée, chaque poussée est minutée, et quand vous frappez, vous ne ratez pas. La table respire mieux quand vous êtes silencieux.',
    },
    ABCW: {
      name: 'Le Flambeur Possédé',
      tagline: 'Grosses mains, grosses mises, grosse énergie.',
      description:
        'Vous jouez fort et pour gagner. Vous lisez la table assez bien pour savoir quand frapper, et vous frappez sans cligner. Le style vient en prime.',
    },
    ABFT: {
      name: 'Le Berserker',
      tagline: 'Pousser, pousser, pousser. La peur, c\'est pour plus tard.',
      description:
        'La patience est surestimée. Vous construisez agressivement, poussez agressivement, et faites confiance à vos instincts. Quand ça marche, c\'est glorieux. Sinon, on passe à la main suivante.',
    },
    ABFW: {
      name: 'Le Mystique',
      tagline: 'Protégé par la chance, propulsé par les vibrations.',
      description:
        'Vous attaquez, mais votre vraie stratégie, c\'est la foi. Vous déplacez les tuiles à l\'instinct, et l\'univers semble vous suivre. Les sceptiques appellent ça de la chance ; vous appelez ça l\'alignement.',
    },
    ASCT: {
      name: 'La Chaîne de Montage',
      tagline: 'Annoncer chaque combinaison. Gagner chaque tour.',
      description:
        'Efficacité plutôt qu\'élégance. Vous prenez quand vous pouvez prendre, et roulez une petite main propre jusqu\'à une petite victoire propre — encore et encore.',
    },
    ASCW: {
      name: 'L\'Assassin Rapide',
      tagline: 'En attente dès la sixième tuile.',
      description:
        'Vous jouez vite. Pendant que les autres arrangent encore leurs tuiles, vous attendez déjà la victoire. Vous ne marquez pas gros, mais vous marquez en premier — et souvent.',
    },
    ASFT: {
      name: 'Le Satisfait Tranquille',
      tagline: 'Une petite victoire reste une victoire.',
      description:
        'Vous lisez la salle et empochez les jetons. Pas besoin de feu d\'artifice : une victoire discrète et répétable, c\'est parfait. Savoir s\'arrêter, c\'est un super-pouvoir.',
    },
    ASFW: {
      name: 'Le Roi des Petites Mains',
      tagline: 'Vingt victoires. Aucune ne pèse lourd.',
      description:
        'Vous gagnez toute la soirée — points minimaux, sourires maximaux. La valeur de la main ne compte pas ; c\'est la joie de dire « j\'ai gagné ». Vous êtes la mascotte de toute table de Mahjong.',
    },
    DBCT: {
      name: 'Le Filou Discret',
      tagline: 'Jamais gagnant. Jamais perdant. Mais devant à la fin.',
      description:
        'Vous disparaissez dans la table. Vous ne chassez pas la victoire ; vous survivez aux tours. À la fin de la soirée, les jetons sont tranquillement empilés de votre côté, et personne ne sait trop comment.',
    },
    DBCW: {
      name: 'L\'Opérateur à Contre-courant',
      tagline: 'Défendre… défendre… attaque surprise !',
      description:
        'Vous jouez prudent pendant dix tours, puis vous frappez. Votre imprévisibilité est l\'arme — les adversaires arrêtent de vous lire, et c\'est exactement là que vous frappez.',
    },
    DBFT: {
      name: 'Le Rentier Silencieux',
      tagline: 'Mains discrètes. Grosses tuiles.',
      description:
        'Vous parlez doucement et jouez gros. Pas besoin de paraître agressif — quand vous annoncez, la main est déjà énorme. Moins de drame, plus de bonus.',
    },
    DBFW: {
      name: 'Le Maître Zen',
      tagline: 'La fortune sourit aux imperturbables.',
      description:
        'Gagner et perdre sont des nuages qui passent. Vous jouez avec un détachement serein, et les bonnes tuiles continuent à vous trouver. La table est votre salle de méditation.',
    },
    DSCT: {
      name: 'La Calculatrice',
      tagline: 'La probabilité est votre langage amoureux.',
      description:
        'Vous connaissez les chances de chaque attente, le compte de chaque tuile, l\'espérance de chaque coup. Vous ne gagnez peut-être pas chaque main, mais vous prenez la bonne décision à chaque fois — et le long terme vous appartient.',
    },
    DSCW: {
      name: 'L\'Aventurier Prudent',
      tagline: 'Les maths d\'abord, le courage ensuite.',
      description:
        'Vous voulez prendre des risques, vraiment — mais seulement après avoir calculé. Le résultat est un jeu réfléchi qui surprend parfois tout le monde, vous y compris.',
    },
    DSFT: {
      name: 'Sécurité Avant Tout',
      tagline: 'La défense est une stratégie complète.',
      description:
        'Votre priorité est simple : ne pas donner la tuile gagnante. Vous jouez pour survivre, vous couchez tôt, vous laissez passer le chaos. Si tout le monde perd des jetons et pas vous, vous avez déjà gagné.',
    },
    DSFW: {
      name: 'Le Champion du Glandage',
      tagline: 'Venu pour les snacks. Resté pour la compagnie.',
      description:
        'Le Mahjong est l\'accompagnement — les amis sont le plat principal. Vous jouez détendu, riez souvent, et vous fichez pas mal du score. Honnêtement, c\'est aussi une forme de maîtrise.',
    },
  },
};

export default fr;
