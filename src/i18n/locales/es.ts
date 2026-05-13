import { Translations } from '../translations.type';

const es: Translations = {
  lang: 'Español',
  app_title: 'Mahjong BTI',
  app_subtitle: 'Indicador de tipo de comportamiento en Mahjong',
  app_description:
    'Dieciséis personalidades de Mahjong. Doce preguntas rápidas. Descubre qué jugador eres en realidad en la mesa.',
  home_cta_start: 'Empezar el test',
  home_footnote: 'Unos 2 minutos · 12 preguntas',

  wizard_progress: (current: number, total: number) =>
    `Pregunta ${current} de ${total}`,
  wizard_prev: 'Anterior',
  wizard_next: 'Siguiente',
  wizard_finish: 'Ver mi tipo',
  wizard_pick_hint: 'Elige la opción que más se parezca a ti',

  loading_messages: [
    'Analizando tus respuestas…',
    'Leyendo los descartes…',
    'Contando las fichas…',
    'Determinando tu arquetipo…',
  ],

  result_title: 'Tú eres',
  result_subtitle: 'Tu personalidad de Mahjong',
  result_retake: 'Repetir el test',
  result_share: 'Compartir',
  result_share_text: (code: string, name: string) =>
    `Soy ${code} — ${name}. ¿Y tú, qué personalidad de Mahjong tienes?`,
  result_axes_heading: 'Tus dimensiones',

  share_button: 'Compartir',
  share_title: 'Compartir Mahjong BTI',
  share_link_label: 'Enlace',
  share_copy: 'Copiar enlace',
  share_copied: '¡Copiado!',
  share_close: 'Cerrar',
  share_scan_hint: 'O escanea el código QR',

  axis_AD: 'Agresivo — Defensivo',
  axis_BS: 'Manos grandes — Manos pequeñas',
  axis_CF: 'Calculado — Intuitivo',
  axis_TW: 'Disciplinado — Libre',

  axis_AD_tagline: 'Cuando aprieta la cosa, ¿avanzas o te repliegas?',
  axis_BS_tagline: 'Un final espectacular, ¿o veinte pequeñas victorias tranquilas?',
  axis_CF_tagline: '¿Mandan los números, o tu intuición tiene la última palabra?',
  axis_TW_tagline: '¿Sigues el plan, o te dejas llevar por lo que la mesa te ofrece?',

  pole_A: 'Agresivo',
  pole_D: 'Defensivo',
  pole_B: 'Manos grandes',
  pole_S: 'Manos pequeñas',
  pole_C: 'Calculado',
  pole_F: 'Intuitivo',
  pole_T: 'Disciplinado',
  pole_W: 'Libre',

  pole_A_description:
    'Oyes el barajeo y hueles la sangre. Las fichas en tu mano no son recuerdos, son munición, y las gastas como alguien que cree de verdad que la próxima victoria es suya. La paciencia es para quienes no confían en su propia mano.',
  pole_D_description:
    'Prefieres no ganar nada antes que perderlo todo. Lees la pila de descartes como hojas de té, abandonas un sueño a medio construir sin pestañear, y dejas que tus rivales choquen entre sí mientras esperas tranquilo detrás de tu muralla — fichas intactas, ego intacto, sueño intacto.',
  pole_B_description:
    'Una victoria barata te aburre. Romperás una mano perfectamente válida para ir a por la que tus amigos seguirán comentando en el desayuno. Si vas a ganar, que merezca una foto — y quizá un pequeño discurso de aceptación.',
  pole_S_description:
    'Ganar poco, ganar a menudo, volver a ganar. No necesitas confeti ni fuegos artificiales — necesitas un goteo constante de manos cerradas y una pilita ordenada de fichas. Todas las victorias suman igual en la hoja, así que ¿para qué hacer horas extra?',
  pole_C_description:
    'Los descartes son datos, las esperas son probabilidades, y la mesa es una hoja de cálculo en vivo que estás resolviendo. No crees en la suerte; crees en el largo plazo, y el largo plazo, en promedio, te quiere. La varianza es solo el clima.',
  pole_F_description:
    'Algunas fichas se sienten amistosas, otras malditas, y has dejado de fingir lo contrario. Te mueves por corazonadas, vibras y un silencioso «esa no» — y el universo te respalda una y otra vez. Los escépticos pueden contar fichas; tú seguirás ganando.',
  pole_T_description:
    'Eliges un plan y te casas con él. Sin FOMO, sin descartes emocionales, sin jugadas heroicas a la 1 de la madrugada. La disciplina no es sexy hasta que cuentas las fichas al final de la noche — y entonces, muy en silencio, es lo más sexy de la mesa.',
  pole_W_description:
    'Los planes son sugerencias, no rejas de prisión. Surfeas el momento, cambias de estilo entre manos, y dejas que la energía de la mesa lleve el volante. Los jugadores predecibles no te llegan a la suela — incluido, a veces, tú mismo, y eso es la mitad de la diversión.',

  questions: {
    q1: {
      question: 'Es la primera ronda y robas una ficha. Piensas:',
      options: [
        'A jugar — empiezo a montar la mano ya mismo.',
        'Despacio. A ver primero qué descartan los demás.',
      ],
    },
    q2: {
      question: 'Un rival está claramente cerca de ganar y su mano parece grande. Tú:',
      options: [
        'Le haces la carrera — mi mano también es buena, quiero ganar.',
        'Pasas a defensa. Mejor no soltarle nada.',
      ],
    },
    q3: {
      question: 'En el último robo de la ronda te falta una sola ficha para ganar, pero la espera es peligrosa. Tú:',
      options: [
        'Descartas viva y vas a por la victoria.',
        'Descartas seguro. Mejor empate que perder fichas.',
      ],
    },
    q4: {
      question: 'Puedes cerrar una mano rápida y barata, o romper la forma para optar a una mucho mayor. Tú:',
      options: [
        'Rompes la forma — una gran victoria merece la espera.',
        'Te llevas la victoria. Cualquier victoria es una victoria.',
      ],
    },
    q5: {
      question: 'Robas una ficha que podría sostener una mano mucho mayor. Tú:',
      options: [
        'Construyes alrededor. Esta mano tiene que ser enorme.',
        'Lo apuntas y sigues jugando con eficiencia.',
      ],
    },
    q6: {
      question: 'Tu mano soñada en Mahjong es:',
      options: [
        'Una mano grande, satisfactoria, digna de foto.',
        'Veinte victorias pequeñas en una sola noche.',
      ],
    },
    q7: {
      question: 'A la hora de decidir qué descartar, te apoyas sobre todo en:',
      options: [
        'Contar fichas, leer descartes, sopesar probabilidades.',
        'La intuición. La ficha correcta simplemente se siente bien.',
      ],
    },
    q8: {
      question: 'Acabas de encadenar una racha brutal de derrotas. La solución es:',
      options: [
        'Revisar tus jugadas y ajustar la estrategia.',
        'Cambiar de asiento, lavarte las manos, tocar el amuleto.',
      ],
    },
    q9: {
      question: 'Alguien anuncia una espera extraña. Piensas:',
      options: [
        '«Estadísticamente, las fichas seguras son X, Y, Z.»',
        '«Esa ficha me da mala espina. Mejor evitarla.»',
      ],
    },
    q10: {
      question: 'Has fijado un plan para la mano. A mitad de ronda:',
      options: [
        'Te ciñes al plan — la disciplina paga a largo plazo.',
        'Te adaptas con libertad. La mesa cambia; yo también.',
      ],
    },
    q11: {
      question: 'Estás en la mesa para:',
      options: [
        'Jugar en serio. El objetivo es ganar.',
        'Pasarlo bien. Ganar es un bonito extra.',
      ],
    },
    q12: {
      question: 'Tras tres victorias seguidas, tú:',
      options: [
        'Mantienes el mismo estilo concentrado que te trajo hasta aquí.',
        'Te relajas — sigues la onda y pruebas alguna locura.',
      ],
    },
  },

  types: {
    ABCT: {
      name: 'El Cazadragones',
      tagline: 'Frío, preciso, letal — el asesino de la mesa.',
      description:
        'Atacas con disciplina quirúrgica. Cada descarte está calculado, cada empuje cronometrado, y cuando vas a por la kill, no fallas. La mesa respira más tranquila cuando estás callado.',
    },
    ABCW: {
      name: 'El Apostador Poseído',
      tagline: 'Manos grandes, apuestas grandes, energía grande.',
      description:
        'Juegas alto y a ganar. Lees la mesa lo bastante bien para saber cuándo lanzarte, y te lanzas sin pestañear. Los puntos de estilo vienen de propina.',
    },
    ABFT: {
      name: 'El Berserker',
      tagline: 'Empuja, empuja, empuja. El miedo, para luego.',
      description:
        'La paciencia está sobrevalorada. Construyes con agresividad, empujas con agresividad y confías en tu instinto para llevarte. Cuando funciona, es glorioso. Cuando no, a la siguiente mano.',
    },
    ABFW: {
      name: 'El Místico',
      tagline: 'Protegido por la suerte, impulsado por las vibras.',
      description:
        'Juegas al ataque, pero tu verdadera estrategia es la fe. Mueves fichas por intuición, y el universo parece seguirte. Los escépticos lo llaman suerte; tú lo llamas alineación.',
    },
    ASCT: {
      name: 'La Cadena de Montaje',
      tagline: 'Cantar cada combinación. Ganar cada ronda.',
      description:
        'Eficiencia antes que elegancia. Tomas cuando puedes tomar, encadenas cuando puedes encadenar, y montas una mano pequeña y limpia hasta una victoria pequeña y limpia — una y otra vez.',
    },
    ASCW: {
      name: 'La Asesina Veloz',
      tagline: 'En espera ya en la sexta ficha.',
      description:
        'Juegas rápido. Mientras los demás aún están ordenando fichas, tú ya estás esperando para ganar. Quizá no marques alto, pero marcas primero — y a menudo.',
    },
    ASFT: {
      name: 'El Conformista Tranquilo',
      tagline: 'Una victoria pequeña sigue siendo una victoria.',
      description:
        'Lees la sala y te llevas las fichas. Sin necesidad de fuegos artificiales: una victoria silenciosa y repetible te basta. Saber cuándo es suficiente es un superpoder en sí mismo.',
    },
    ASFW: {
      name: 'El Rey del Pollo',
      tagline: 'Veinte victorias. Ninguna pesa demasiado.',
      description:
        'Ganas toda la noche — puntos mínimos, sonrisas máximas. El valor de la mano da igual; lo que importa es el placer de decir «gano». Eres la mascota de cualquier mesa de Mahjong.',
    },
    DBCT: {
      name: 'El Trapichero',
      tagline: 'No gana. No suelta. Y aun así, va arriba.',
      description:
        'Desapareces en la mesa. No persigues victorias; sobrevives a las rondas. Al final de la noche, las fichas están discretamente apiladas a tu lado, y nadie sabe muy bien cómo.',
    },
    DBCW: {
      name: 'El Operador a la Inversa',
      tagline: 'Defendiendo… defendiendo… ¡ataque sorpresa!',
      description:
        'Juegas seguro durante diez rondas y empujas en una. Tu imprevisibilidad es el arma — los rivales dejan de leerte, y ahí es exactamente cuando golpeas.',
    },
    DBFT: {
      name: 'El Rentista Silencioso',
      tagline: 'Manos calladas. Fichas grandes.',
      description:
        'Hablas bajo y juegas alto. No necesitas parecer agresivo — cuando cantas, la mano ya es enorme. Menos drama, más bonus.',
    },
    DBFW: {
      name: 'El Maestro Zen',
      tagline: 'La fortuna favorece al imperturbable.',
      description:
        'Ganar y perder son nubes que pasan. Juegas con sereno desapego y, no se sabe cómo, las fichas adecuadas siguen encontrándote. La mesa es tu sala de meditación.',
    },
    DSCT: {
      name: 'La Calculadora',
      tagline: 'La probabilidad es tu lenguaje del amor.',
      description:
        'Conoces las probabilidades de cada espera, el conteo de cada ficha y el valor esperado de cada jugada. Quizá no ganes cada mano, pero tomas la decisión correcta cada vez — y el largo plazo es tuyo.',
    },
    DSCW: {
      name: 'El Aventurero Prudente',
      tagline: 'Primero las matemáticas, luego el coraje.',
      description:
        'Quieres arriesgar, de verdad — pero solo después de echar cuentas. El resultado es un juego cuidadoso y reflexivo que de vez en cuando sorprende a todos, tú incluido.',
    },
    DSFT: {
      name: 'Seguridad ante Todo',
      tagline: 'La defensa es una estrategia completa.',
      description:
        'Tu prioridad es simple: no soltar la ficha buena. Juegas para sobrevivir, te plantas pronto y dejas que el caos pase de largo. Si todos pierden fichas y tú no, ya has ganado.',
    },
    DSFW: {
      name: 'El Campeón del Pasota',
      tagline: 'Vine por las botanas. Me quedé por la compañía.',
      description:
        'El Mahjong es la guarnición — los amigos son el plato principal. Juegas suelto, te ríes mucho y la hoja del marcador te da bastante igual. Sinceramente, eso también es una forma de maestría.',
    },
  },
};

export default es;
