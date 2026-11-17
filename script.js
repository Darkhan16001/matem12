
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

// =====================================
// САБАҚТЫҢ АТАУЫ МЕН МАҚСАТЫ
// =====================================

const lesson = {
  title:
    "Нақты көрсеткішті дәрежелік функцияның туындысы мен интегралы",

  goal:
    "Дәрежелік функцияның туындысын, алғашқы функциясын және анықталған интегралын есептеу ережелерін түсіну. Бүтін, теріс және бөлшек көрсеткіштері бар функцияларды туындылау және интегралдау."
};

// =====================================
// 5 ТҮСІНДІРМЕ
// ТЕК ТЕОРИЯ, ӨЗІНДІК ЖҰМЫС ЖОҚ
// =====================================

const theory = [
  {
    title: "Дәрежелік функцияның туындысы",

    definition:
      "Туынды функцияның өзгеру жылдамдығын сипаттайды. Дәрежелік функцияның туындысын табу үшін көрсеткішті коэффициент ретінде алдына шығарып, көрсеткішті бірге азайтамыз.",

    explain:
      "Мысалы, айнымалының кубының туындысын есептейік. Алдымен үш санын көбейткіш етіп жазамыз. Дәреже көрсеткіші үштен екіге кемиді. Нәтиже үш көбейтілген айнымалының квадратына тең болады.",

    rule:
      "Оң аргумент үшін кез келген нақты көрсеткішті дәрежелік функцияның туындысын табу кезінде дәреже көрсеткішін бірге кемітеміз.",

    formula:
      M`\boxed{(x^a)'=ax^{a-1}},\qquad x>0`,

    steps: [
      M`y=x^3`,
      M`y'=3x^{3-1}`,
      M`\boxed{y'=3x^2}`
    ],

    warning:
      "Туынды алғанда көрсеткішті бірге кемітуді ұмытпаңдар."
  },

  {
    title: "Бөлшек көрсеткішті дәреженің туындысы",

    definition:
      "Бөлшек көрсеткішті функцияның туындысын дәрежелік функцияның жалпы ережесімен табамыз. Алынған нәтижені түбірі бар өрнек түрінде жазуға болады.",

    explain:
      "Квадрат түбірлі функцияны бір екінші көрсеткішті дәреже ретінде қарастырамыз. Бір екінші көрсеткішін алдына шығарып, одан бірді азайтамыз. Нәтижесінде теріс бір екінші көрсеткіш пайда болады. Оны бөлшекке айналдырамыз.",

    rule:
      "Көрсеткіш бөлшек болса да, туынды алу ережесі сақталады. Бірақ анықталу облысын ескеру қажет.",

    formula:
      M`\boxed{(\sqrt{x})'=\frac1{2\sqrt{x}}},\qquad x>0`,

    steps: [
      M`y=x^{\frac12}`,
      M`y'=\frac12x^{-\frac12}`,
      M`\boxed{y'=\frac1{2\sqrt{x}}}`
    ],

    warning:
      "Квадрат түбірдің туындысы x нөлге тең болғанда анықталмайды."
  },

  {
    title: "Теріс көрсеткішті функцияның туындысы",

    definition:
      "Теріс көрсеткішті дәрежені бөлімі айнымалының оң дәрежесіне тең бөлшек түрінде көрсетуге болады. Оның туындысын табу үшін жалпы дәрежелік ереже қолданылады.",

    explain:
      "Мысалы, айнымалының теріс екінші дәрежесін алайық. Көрсеткішті алдына шығарамыз. Теріс екіден бірді азайтсақ, теріс үш шығады. Нәтижені бөлімі айнымалының кубына тең бөлшек түрінде жазамыз.",

    rule:
      "Теріс көрсеткішті туындылағанда көрсеткіш алдына жазылып, бірге кемітіледі. Нөл аргументін қолдануға болмайды.",

    formula:
      M`\boxed{(x^{-n})'=-nx^{-n-1}},\qquad x\ne0`,

    steps: [
      M`y=x^{-2}`,
      M`y'=-2x^{-3}`,
      M`\boxed{y'=-\frac2{x^3}}`
    ],

    warning:
      "Теріс көрсеткіш пен туындының алдындағы минус таңбасын шатастырмаңдар."
  },

  {
    title: "Дәрежелік функцияның интегралы",

    definition:
      "Алғашқы функция — туындысы бастапқы берілген функцияға тең функция. Оны табу үшін көрсеткішке бір қосып, жаңа көрсеткішке бөлеміз.",

    explain:
      "Мысалы, айнымалының квадратының алғашқы функциясын табайық. Көрсеткіш екіге бір қосып, үш аламыз. Айнымалының кубын үшке бөлеміз. Соңына еркін тұрақтыны қосамыз. Осы функциядан туынды алсақ, бастапқы айнымалының квадраты шығады.",

    rule:
      "Дәрежелік функцияны интегралдағанда көрсеткішке бір қосып, нәтижені жаңа көрсеткішке бөлеміз. Көрсеткіш теріс бірге тең болғанда бұл формула қолданылмайды.",

    formula:
      M`\boxed{\int x^a\,dx=\frac{x^{a+1}}{a+1}+C},\quad a\ne-1`,

    steps: [
      M`\int x^2\,dx`,
      M`=\frac{x^{2+1}}{2+1}+C`,
      M`\boxed{\frac{x^3}{3}+C}`
    ],

    warning:
      "Анықталмаған интегралдың соңына C еркін тұрақтысын міндетті түрде жазыңдар."
  },

  {
    title: "Анықталған интеграл және Ньютон–Лейбниц формуласы",

    definition:
      "Анықталған интегралды есептеу үшін алдымен алғашқы функция табылады. Содан кейін алғашқы функцияның жоғарғы шекарадағы мәнінен төменгі шекарадағы мәні азайтылады.",

    explain:
      "Мысалы, нөлден екіге дейін айнымалының интегралын есептейміз. Айнымалының алғашқы функциясы — айнымалы квадратының жартысы. Екі санының квадраты төрт, оның жартысы екі. Төменгі шекарада нөл шығады. Жауап екіге тең.",

    rule:
      "Алғашқы функцияның жоғарғы шекарадағы мәнінен төменгі шекарадағы мәнін азайтамыз.",

    formula:
      M`\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}`,

    steps: [
      M`\int_0^2 x\,dx`,
      M`=\left.\frac{x^2}{2}\right|_0^2`,
      M`=\frac{2^2}{2}-\frac{0^2}{2}`,
      M`\boxed{2}`
    ],

    warning:
      "Анықталған интегралдың соңына C тұрақтысын жазудың қажеті жоқ."
  }
];

// =====================================
// 10 КОНСПЕКТ
// ӘРҚАЙСЫСЫНДА 2 ӨЗІНДІК ЕСЕП
// =====================================

const notes = [
  {
    title: "Дәрежелік функцияның туындысы",

    text:
      "Дәрежелік функцияның туындысын табу үшін дәреже көрсеткішін коэффициент ретінде алдына жазамыз. Содан кейін көрсеткішті бірге азайтамыз.",

    formula: M`(x^a)'=ax^{a-1}`,

    example: [
      M`(x^4)'=4x^{4-1}`,
      M`=4x^3`
    ],

    self: [
      {
        q: M`(x^5)'`,
        steps: [M`5x^{5-1}`, M`=5x^4`],
        answer: M`\boxed{5x^4}`
      },
      {
        q: M`(x^6)'`,
        steps: [M`6x^{6-1}`, M`=6x^5`],
        answer: M`\boxed{6x^5}`
      }
    ]
  },

  {
    title: "Тұрақты коэффициенттің туындысы",

    text:
      "Егер дәрежелік функцияның алдында тұрақты коэффициент болса, оны туынды таңбасының сыртына шығарамыз. Содан кейін функцияның туындысын табамыз.",

    formula: M`(kx^a)'=kax^{a-1}`,

    example: [
      M`(5x^3)'`,
      M`=5\cdot3x^2`,
      M`=15x^2`
    ],

    self: [
      {
        q: M`(4x^4)'`,
        steps: [M`=4\cdot4x^3`, M`=16x^3`],
        answer: M`\boxed{16x^3}`
      },
      {
        q: M`(7x^2)'`,
        steps: [M`=7\cdot2x`, M`=14x`],
        answer: M`\boxed{14x}`
      }
    ]
  },

  {
    title: "Бөлшек көрсеткіштің туындысы",

    text:
      "Бөлшек көрсеткішті дәреже үшін де жалпы туынды ережесі қолданылады. Көрсеткіштен бірді азайтқанда бөлшектердің ортақ бөлімін ескеру керек.",

    formula:
      M`\left(x^{\frac mn}\right)'=\frac mn x^{\frac mn-1},\quad x>0`,

    example: [
      M`\left(x^{\frac32}\right)'`,
      M`=\frac32x^{\frac12}`,
      M`=\frac{3\sqrt{x}}2`
    ],

    self: [
      {
        q: M`\left(x^{\frac52}\right)'`,
        steps: [M`=\frac52x^{\frac32}`],
        answer: M`\boxed{\frac52x^{\frac32}}`
      },
      {
        q: M`\left(x^{\frac13}\right)'`,
        steps: [M`=\frac13x^{-\frac23}`],
        answer: M`\boxed{\frac1{3x^{\frac23}}}`
      }
    ]
  },

  {
    title: "Квадрат түбірдің туындысы",

    text:
      "Квадрат түбір — бір екінші көрсеткішті дәрежелік функция. Оның туындысы екі еселенген квадрат түбірге кері шама болады.",

    formula: M`(\sqrt{x})'=\frac1{2\sqrt{x}},\quad x>0`,

    example: [
      M`(4\sqrt{x})'`,
      M`=\frac4{2\sqrt{x}}`,
      M`=\frac2{\sqrt{x}}`
    ],

    self: [
      {
        q: M`(6\sqrt{x})'`,
        steps: [M`=\frac6{2\sqrt{x}}`],
        answer: M`\boxed{\frac3{\sqrt{x}}}`
      },
      {
        q: M`(10\sqrt{x})'`,
        steps: [M`=\frac{10}{2\sqrt{x}}`],
        answer: M`\boxed{\frac5{\sqrt{x}}}`
      }
    ]
  },

  {
    title: "Теріс көрсеткішті туындылау",

    text:
      "Теріс бүтін көрсеткішті функцияны туындылағанда дәреже көрсеткіші коэффициент ретінде алдына жазылады. Нөлде мұндай функция анықталмайды.",

    formula:
      M`(x^{-n})'=-nx^{-n-1}`,

    example: [
      M`(x^{-3})'`,
      M`=-3x^{-4}`,
      M`=-\frac3{x^4}`
    ],

    self: [
      {
        q: M`(x^{-4})'`,
        steps: [M`=-4x^{-5}`],
        answer: M`\boxed{-\frac4{x^5}}`
      },
      {
        q: M`(3x^{-2})'`,
        steps: [M`=3(-2)x^{-3}`],
        answer: M`\boxed{-\frac6{x^3}}`
      }
    ]
  },

  {
    title: "Қосынды мен айырманың туындысы",

    text:
      "Функциялар қосындысының туындысы олардың туындыларының қосындысына тең. Айырма үшін де осы ереже қолданылады.",

    formula: M`(f\pm g)'=f'\pm g'`,

    example: [
      M`(x^3+2x^2)'`,
      M`=3x^2+4x`
    ],

    self: [
      {
        q: M`(x^4+3x^2)'`,
        steps: [M`=4x^3+6x`],
        answer: M`\boxed{4x^3+6x}`
      },
      {
        q: M`(5x^3-2x)'`,
        steps: [M`=15x^2-2`],
        answer: M`\boxed{15x^2-2}`
      }
    ]
  },

  {
    title: "Дәрежелік функцияның интегралы",

    text:
      "Алғашқы функцияны табу үшін дәреже көрсеткішіне бір қосып, сол санға бөлеміз. Нәтижеге еркін тұрақты қосылады.",

    formula:
      M`\int x^a\,dx=\frac{x^{a+1}}{a+1}+C,\quad a\ne-1`,

    example: [
      M`\int x^3\,dx`,
      M`=\frac{x^4}{4}+C`
    ],

    self: [
      {
        q: M`\int x^4\,dx`,
        steps: [M`=\frac{x^5}{5}+C`],
        answer: M`\boxed{\frac{x^5}{5}+C}`
      },
      {
        q: M`\int x^5\,dx`,
        steps: [M`=\frac{x^6}{6}+C`],
        answer: M`\boxed{\frac{x^6}{6}+C}`
      }
    ]
  },

  {
    title: "Бөлшек көрсеткішті функцияның интегралы",

    text:
      "Бөлшек көрсеткішті функцияны интегралдағанда көрсеткішке бір қосылады. Жаңа көрсеткіш бөлшек болса, соған бөлуді кері бөлшекке көбейту арқылы орындаймыз.",

    formula:
      M`\int x^{\frac12}\,dx=\frac23x^{\frac32}+C`,

    example: [
      M`\int\sqrt{x}\,dx`,
      M`=\frac23x^{\frac32}+C`
    ],

    self: [
      {
        q: M`\int x^{\frac32}\,dx`,
        steps: [M`=\frac{x^{\frac52}}{\frac52}+C`],
        answer: M`\boxed{\frac25x^{\frac52}+C}`
      },
      {
        q: M`\int x^{-\frac12}\,dx`,
        steps: [M`=\frac{x^{\frac12}}{\frac12}+C`],
        answer: M`\boxed{2\sqrt{x}+C}`
      }
    ]
  },

  {
    title: "Анықталған интеграл",

    text:
      "Анықталған интегралды есептегенде алдымен алғашқы функцияны табамыз. Содан кейін жоғарғы шекарадағы мәннен төменгі шекарадағы мәнді азайтамыз.",

    formula:
      M`\int_a^b f(x)\,dx=F(b)-F(a)`,

    example: [
      M`\int_0^2x^2\,dx`,
      M`=\left.\frac{x^3}{3}\right|_0^2`,
      M`=\frac83`
    ],

    self: [
      {
        q: M`\int_0^3 2x\,dx`,
        steps: [M`=\left.x^2\right|_0^3`],
        answer: M`\boxed9`
      },
      {
        q: M`\int_1^2 3x^2\,dx`,
        steps: [M`=\left.x^3\right|_1^2`, M`=8-1`],
        answer: M`\boxed7`
      }
    ]
  },

  {
    title: "Туынды мен интегралдың байланысы",

    text:
      "Туынды мен алғашқы функция өзара байланысты. Егер алғашқы функциядан туынды алсақ, бастапқы берілген функцияға қайта ораламыз.",

    formula:
      M`F'(x)=f(x)\Longrightarrow\int f(x)\,dx=F(x)+C`,

    example: [
      M`F(x)=\frac{x^4}{4}`,
      M`F'(x)=x^3`
    ],

    self: [
      {
        q: M`F(x)=\frac{x^5}{5},\quad F'(x)=?`,
        steps: [M`F'(x)=\frac55x^4`],
        answer: M`\boxed{x^4}`
      },
      {
        q: M`F(x)=2x^{\frac32},\quad F'(x)=?`,
        steps: [M`=2\cdot\frac32x^{\frac12}`],
        answer: M`\boxed{3\sqrt{x}}`
      }
    ]
  }
];

// =====================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// =====================================

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,

    tasks: [
      {
        q: M`f(x)=x^2,\quad f'(2)=?`,
        value: 4,
        steps: [
          M`f'(x)=2x`,
          M`f'(2)=2\cdot2=4`
        ]
      },
      {
        q: M`f(x)=x^3,\quad f'(2)=?`,
        value: 12,
        steps: [
          M`f'(x)=3x^2`,
          M`f'(2)=3\cdot4=12`
        ]
      },
      {
        q: M`f(x)=3x^2,\quad f'(2)=?`,
        value: 12,
        steps: [
          M`f'(x)=6x`,
          M`f'(2)=12`
        ]
      },
      {
        q: M`f(x)=x^4,\quad f'(1)=?`,
        value: 4,
        steps: [
          M`f'(x)=4x^3`,
          M`f'(1)=4`
        ]
      },
      {
        q: M`f(x)=5x,\quad f'(4)=?`,
        value: 5,
        steps: [
          M`f'(x)=5`,
          M`f'(4)=5`
        ]
      }
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,

    tasks: [
      {
        q: M`f(x)=\sqrt{x},\quad f'(4)=?`,
        value: 1/4,
        steps: [
          M`f'(x)=\frac1{2\sqrt{x}}`,
          M`f'(4)=\frac1{2\cdot2}=\frac14`
        ]
      },
      {
        q: M`f(x)=x^{\frac13},\quad f'(8)=?`,
        value: 1/12,
        steps: [
          M`f'(x)=\frac13x^{-\frac23}`,
          M`f'(8)=\frac1{3\cdot4}=\frac1{12}`
        ]
      },
      {
        q: M`f(x)=x^{-1},\quad f'(2)=?`,
        value: -1/4,
        steps: [
          M`f'(x)=-\frac1{x^2}`,
          M`f'(2)=-\frac14`
        ]
      },
      {
        q: M`f(x)=2x^3,\quad f'(3)=?`,
        value: 54,
        steps: [
          M`f'(x)=6x^2`,
          M`f'(3)=6\cdot9=54`
        ]
      },
      {
        q: M`f(x)=4\sqrt{x},\quad f'(4)=?`,
        value: 1,
        steps: [
          M`f'(x)=\frac2{\sqrt{x}}`,
          M`f'(4)=\frac22=1`
        ]
      }
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,

    tasks: [
      {
        q: M`\int_0^2x\,dx`,
        value: 2,
        steps: [
          M`F(x)=\frac{x^2}{2}`,
          M`F(2)-F(0)=2`
        ]
      },
      {
        q: M`\int_0^3 2x\,dx`,
        value: 9,
        steps: [
          M`F(x)=x^2`,
          M`F(3)-F(0)=9`
        ]
      },
      {
        q: M`\int_0^2 3x^2\,dx`,
        value: 8,
        steps: [
          M`F(x)=x^3`,
          M`F(2)-F(0)=8`
        ]
      },
      {
        q: M`\int_1^3x^2\,dx`,
        value: 26/3,
        steps: [
          M`F(x)=\frac{x^3}{3}`,
          M`\frac{27}{3}-\frac13=\frac{26}{3}`
        ]
      },
      {
        q: M`\int_0^4\sqrt{x}\,dx`,
        value: 16/3,
        steps: [
          M`F(x)=\frac23x^{\frac32}`,
          M`\frac23\cdot8=\frac{16}{3}`
        ]
      }
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,

    tasks: [
      {
        q: M`\int_1^4x^{-\frac12}\,dx`,
        value: 2,
        steps: [
          M`F(x)=2\sqrt{x}`,
          M`2(2-1)=2`
        ]
      },
      {
        q: M`\int_1^2x^{-2}\,dx`,
        value: 1/2,
        steps: [
          M`F(x)=-\frac1x`,
          M`-\frac12+1=\frac12`
        ]
      },
      {
        q: M`\int_0^1x^{\frac12}\,dx`,
        value: 2/3,
        steps: [
          M`F(x)=\frac23x^{\frac32}`,
          M`\frac23`
        ]
      },
      {
        q: M`f(x)=x^{\frac32},\quad f'(4)=?`,
        value: 3,
        steps: [
          M`f'(x)=\frac32\sqrt{x}`,
          M`f'(4)=3`
        ]
      },
      {
        q: M`\int_1^3(2x+1)\,dx`,
        value: 10,
        steps: [
          M`F(x)=x^2+x`,
          M`F(3)-F(1)=12-2=10`
        ]
      }
    ]
  }
];

// =====================================
// ТОПТЫҚ ОЙЫН — 15 СҰРАҚ
// =====================================

const quiz = [
  {
    q: "Дәрежелік функцияның туындысының формуласы?",
    options: [
      "ax^(a−1)",
      "x^(a+1)",
      "ax^a",
      "x/a"
    ],
    correct: 0
  },
  {
    q: "x² функциясының туындысы?",
    options: ["x", "x²", "2x", "2"],
    correct: 2
  },
  {
    q: "x³ функциясының туындысы?",
    options: ["x²", "3x²", "3x", "x³"],
    correct: 1
  },
  {
    q: "Тұрақты санның туындысы?",
    options: ["1", "Сол сан", "−1", "0"],
    correct: 3
  },
  {
    q: "√x функциясының туындысы?",
    options: [
      "1/(2√x)",
      "2√x",
      "√x/2",
      "1/√x"
    ],
    correct: 0
  },
  {
    q: "x⁻¹ функциясының туындысы?",
    options: [
      "1/x²",
      "−x",
      "−1/x²",
      "x⁻²"
    ],
    correct: 2
  },
  {
    q: "x⁴ функциясының туындысы?",
    options: ["4x", "4x³", "x³", "x⁵/5"],
    correct: 1
  },
  {
    q: "Анықталмаған интегралдың соңына не қосылады?",
    options: ["x", "π", "Нөл", "C тұрақтысы"],
    correct: 3
  },
  {
    q: "x² функциясының алғашқы функциясы?",
    options: [
      "x³/3+C",
      "2x",
      "x²+C",
      "x⁴/4+C"
    ],
    correct: 0
  },
  {
    q: "2x функциясының анықталмаған интегралы?",
    options: [
      "2+C",
      "x+C",
      "x²+C",
      "2x²+C"
    ],
    correct: 2
  },
  {
    q: "Интегралдау кезінде көрсеткіш қалай өзгереді?",
    options: [
      "Бірге кемиді",
      "Бірге артады",
      "Өзгермейді",
      "Екі еселенеді"
    ],
    correct: 1
  },
  {
    q: "Дәрежелік интеграл формуласының ерекше жағдайы?",
    options: ["a=2", "a=0", "a=3", "a=−1"],
    correct: 3
  },
  {
    q: "Нөлден екіге дейін x функциясының интегралы?",
    options: ["2", "4", "1", "0"],
    correct: 0
  },
  {
    q: "x³ функциясының алғашқы функциясы?",
    options: [
      "3x²",
      "x⁴+C",
      "x⁴/4+C",
      "x³+C"
    ],
    correct: 2
  },
  {
    q: "Туынды мен интеграл қалай байланысады?",
    options: [
      "Бірдей амалдар",
      "Өзара байланысты кері амалдар",
      "Байланысы жоқ",
      "Тек сандарға қолданылады"
    ],
    correct: 1
  }
];

// =====================================
// ҮЙ ТАПСЫРМАСЫ
// =====================================

const homework = [
  {
    title: "1. Туындыны есептеу",

    text:
      "Берілген функциялардың туындыларын табыңдар. Барлық көрсеткіштерді дұрыс ықшамдап жазыңдар.",

    formulas: [
      M`f(x)=5x^{\frac32}-3x^2`,
      M`f(x)=4\sqrt{x}+\frac2x`,
      M`f(x)=2x^{\sqrt2}`
    ]
  },

  {
    title: "2. Интегралдарды есептеу",

    text:
      "Алғашқы функцияларды тауып, анықталған интегралдардың мәндерін есептеңдер. Әр қадамды дәптерге жазыңдар.",

    formulas: [
      M`\int_1^4\sqrt{x}\,dx`,
      M`\int_1^2\frac1{x^2}\,dx`,
      M`\int_0^2(3x^2+2x)\,dx`
    ]
  },

  {
    title: "3. Теориялық тапсырма",

    text:
      "Туынды мен интегралдың айырмашылығы және байланысы туралы 8–10 сөйлем жазыңдар. Бір функциядан туынды алып, оның алғашқы функциясын табуға мысал келтіріңдер.",

    formulas: [
      M`(x^a)'=ax^{a-1}`,
      M`\int x^a\,dx=\frac{x^{a+1}}{a+1}+C`
    ]
  }
];

// =====================================
// БАРЛЫҚ 37 СЛАЙД
// =====================================

const slides = [
  {type: "intro", title: "Кіріспе"}
];

theory.forEach((item, index) => {
  slides.push({
    type: "theory",
    index,
    title: `Түсіндірме ${index + 1}`
  });
});

notes.forEach((item, index) => {
  slides.push({
    type: "note",
    index,
    title: `Конспект ${index + 1}`
  });
});

levels.forEach((item, index) => {
  slides.push({
    type: "level",
    index,
    title: `${index + 1}-деңгей`
  });
});

quiz.forEach((item, index) => {
  slides.push({
    type: "game",
    index,
    title: `${index % 3 + 1}-топ, ${index + 1}-сұрақ`
  });
});

slides.push(
  {type: "homework", title: "Үй жұмысы"},
  {type: "finish", title: "Қорытынды"}
);

// =====================================
// САЙТТЫҢ КҮЙІ
// =====================================

let currentPage = 0;
let individualScore = 0;

let teamScores = [0, 0, 0];

const completedTasks = new Set();
const gameAnswers = new Map();

let secondsLeft = 80 * 60;
let timerInterval = null;
let timerDeadline = 0;

// =====================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// =====================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function math(tex) {
  return `<div class="math">\\[${tex}\\]</div>`;
}

function card(color, title, body) {
  return `
    <section class="card ${color}">
      <h3>${escapeHTML(title)}</h3>
      ${body}
    </section>
  `;
}

function renderSteps(items) {
  return items.map((formula, index) => `
    <div class="step">
      <strong>${index + 1}-қадам</strong>
      ${math(formula)}
    </div>
  `).join("");
}

// =====================================
// КОНСПЕКТТЕГІ ӨЗІНДІК ЖҰМЫСТАР
// =====================================

function renderSelfWorks(items, noteIndex) {
  return items.map((task, index) => {
    const id = `self_${noteIndex}_${index}`;

    return `
      <section class="self-task">

        <h3>
          ✏️ ${index + 1}-өзіндік есеп
        </h3>

        ${math(task.q)}

        <p>
          Алдымен есепті дәптерге шығарыңдар.
          Содан кейін жауапты тексеріңдер.
        </p>

        <button class="action"
                data-toggle="${id}">
          Шешу жолын көрсету
        </button>

        <div class="solution"
             id="${id}"
             hidden>

          ${renderSteps(task.steps)}

          <h3>Дұрыс жауап</h3>

          ${math(task.answer)}

        </div>

      </section>
    `;
  }).join("");
}

// =====================================
// БІРІНШІ БЕТ
// =====================================

function renderIntro() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §11. ${escapeHTML(lesson.title)}
      </h1>

      ${card("blue", "Сабақтың мақсаты", `
        <p>${escapeHTML(lesson.goal)}</p>
      `)}

      ${card("gold", "Туындының формуласы",
        math(M`(x^a)'=ax^{a-1}`)
      )}

      ${card("gold", "Интегралдың формуласы",
        math(M`\int x^a\,dx=\frac{x^{a+1}}{a+1}+C,\quad a\ne-1`)
      )}

      ${card("green", "Сабақтың құрылымы", `
        <p>5 толық түсіндірме</p>
        <p>10 конспект және 20 өзіндік есеп</p>
        <p>4 деңгей — 20 есеп</p>
        <p>3 топ — 15 сұрақ</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("purple", "80 минуттық жоспар", `
        <p>Кіріспе — 5 минут</p>
        <p>Түсіндірмелер — 20 минут</p>
        <p>Конспект пен өзіндік жұмыс — 15 минут</p>
        <p>Деңгейлік тапсырмалар — 20 минут</p>
        <p>Командалық ойын — 15 минут</p>
        <p>Үй жұмысы және қорытынды — 5 минут</p>
      `)}

    </div>
  `;
}

// =====================================
// ТҮСІНДІРМЕ
// МҰНДА ӨЗІНДІК ЖҰМЫС ЖОҚ
// =====================================

function renderTheory(index) {
  const t = theory[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТҮСІНДІРМЕ ${index + 1} / 5
      </div>

      <h2>${escapeHTML(t.title)}</h2>

      ${card("blue", "Анықтама", `
        <p>${escapeHTML(t.definition)}</p>
      `)}

      ${card("purple", "Қарапайым түсіндірме", `
        <p>${escapeHTML(t.explain)}</p>
      `)}

      ${card("green", "Ереже", `
        <p>${escapeHTML(t.rule)}</p>
      `)}

      ${card("gold", "Негізгі формула",
        math(t.formula)
      )}

      ${card("green", "Толық шығарылған мысал",
        renderSteps(t.steps)
      )}

      ${card("red", "Маңызды ескерту", `
        <p>${escapeHTML(t.warning)}</p>
      `)}

    </div>
  `;
}

// =====================================
// КОНСПЕКТ
// ТЕК ОСЫНДА ӨЗІНДІК ЖҰМЫС БАР
// =====================================

function renderNote(index) {
  const n = notes[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${index + 1} / 10
      </div>

      <h2>${escapeHTML(n.title)}</h2>

      <div class="notebook">
        <h3>✍ Дәптерге жазып алыңдар</h3>
        <p>${escapeHTML(n.text)}</p>
      </div>

      ${card("gold", "Негізгі формула",
        math(n.formula)
      )}

      ${card("green", "Шығарылған мысал",
        renderSteps(n.example)
      )}

      <div class="eyebrow">
        ӨЗІНДІК ЖҰМЫС
      </div>

      <h2>✏️ Екі есеп</h2>

      ${renderSelfWorks(n.self, index)}

    </div>
  `;
}

// =====================================
// 4 ДЕҢГЕЙ
// =====================================

function renderLevel(index) {
  const level = levels[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМАЛАР
        ${index + 1} / 4
      </div>

      <h2>📐 ${escapeHTML(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>
          Әр дұрыс жауап: +${level.points} ұпай
        </span>
      </div>

      <p>
        Есепті дәптерге шығарыңдар.
        Жауапты сан немесе жай бөлшек
        түрінде енгізіңдер.
      </p>

      <div class="level-grid">

        ${level.tasks.map((task, i) => {
          const key = `${index}_${i}`;
          const done = completedTasks.has(key);

          return `
            <section class="level-task">

              <h3>${i + 1}-есеп</h3>

              ${math(task.q)}

              <div class="answer-row">

                <input
                  id="answer_${key}"
                  type="text"
                  placeholder="Жауабы, мысалы 1/4"
                  ${done ? "disabled" : ""}
                >

                <button
                  data-check="${key}"
                  ${done ? "disabled" : ""}>
                  ${done ? "✓ Дұрыс" : "Тексеру"}
                </button>

              </div>

              <div
                id="feedback_${key}"
                class="feedback ${done ? "correct" : ""}">

                ${done
                  ? `✓ Дұрыс! +${level.points} ұпай`
                  : "Жауапты енгізіңдер."}

              </div>

              <button
                class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div
                class="solution"
                id="solution_${key}"
                hidden>

                ${renderSteps(task.steps)}

                <h3>Дұрыс жауап</h3>

                ${math(String(task.value))}

              </div>

            </section>
          `;
        }).join("")}

      </div>

    </div>
  `;
}

// =====================================
// 3 ТОПТЫҚ ОЙЫН
// =====================================

function renderGame(index) {
  const question = quiz[index];
  const team = index % 3;
  const chosen = gameAnswers.get(index);

  return `
    <div class="slide">

      <div class="eyebrow">
        КОМАНДАЛЫҚ ОЙЫН ${index + 1} / 15
      </div>

      <h2>
        🏆 ${team + 1}-топ жауап береді
      </h2>

      <div class="scores">

        ${teamScores.map((points, i) => `
          <div class="team ${i === team ? "current" : ""}">
            ${i + 1}-топ

            <strong>${points}</strong>
          </div>
        `).join("")}

      </div>

      ${card("gold", `${index + 1}-сұрақ`, `

        <p>${escapeHTML(question.q)}</p>

        <div class="answers">

          ${question.options.map((option, i) => {
            let cls = "";

            if (chosen !== undefined) {
              if (i === question.correct) {
                cls = "correct";
              } else if (i === chosen) {
                cls = "wrong";
              }
            }

            return `
              <button
                class="${cls}"
                data-choice="${i}"
                ${chosen !== undefined ? "disabled" : ""}>

                ${"ABCD"[i]}. ${escapeHTML(option)}

              </button>
            `;
          }).join("")}

        </div>

        <p>
          ${chosen === undefined
            ? "Төрт жауаптың біреуін таңдаңдар."
            : chosen === question.correct
              ? "✓ Дұрыс! +10 ұпай."
              : "Дұрыс жауап: " +
                escapeHTML(question.options[question.correct])}
        </p>

      `)}

      ${card("blue", "Ойын ережесі", `
        <p>Кезек: 1-топ → 2-топ → 3-топ.</p>
        <p>Әр дұрыс жауап — 10 ұпай.</p>
        <p>
          Жауаптан кейін сол жақтағы
          «Келесі» батырмасын басыңдар.
        </p>
      `)}

    </div>
  `;
}

// =====================================
// ҮЙ ЖҰМЫСЫ
// =====================================

function renderHomework() {
  return `
    <div class="slide">

      <div class="eyebrow">
        ҮЙ ТАПСЫРМАСЫ
      </div>

      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item, i) => card(
        ["blue", "gold", "green"][i],
        item.title,
        `<p>${escapeHTML(item.text)}</p>` +
        item.formulas.map(math).join("")
      )).join("")}

    </div>
  `;
}

// =====================================
// ҚОРЫТЫНДЫ
// =====================================

function renderFinish() {
  const maxScore = Math.max(...teamScores);

  const winners = teamScores
    .map((score, i) => {
      return score === maxScore ? `${i + 1}-топ` : null;
    })
    .filter(Boolean);

  return `
    <div class="slide">

      <div class="eyebrow">
        САБАҚ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="gradient">
        Сабақ аяқталды!
      </h1>

      <div class="scores">

        ${teamScores.map((score, i) => `
          <div class="team">
            ${i + 1}-топ
            <strong>${score}</strong>
          </div>
        `).join("")}

      </div>

      ${card("green", "Ойын нәтижесі", `
        <p>
          ${winners.join(", ")}
          ${winners.length === 1
            ? "— жеңімпаз!"
            : "— бірдей ұпай жинады!"}
        </p>
      `)}

      ${card("blue", "Деңгейлік тапсырмалар", `
        <p>
          Дұрыс шығарылған есеп:
          ${completedTasks.size} / 20
        </p>

        <p>
          Жеке ұпай: ${individualScore}
        </p>
      `)}

      ${card("gold", "Бүгінгі сабақ", `
        <p>Дәрежелік функциядан туынды алдық.</p>
        <p>Алғашқы функцияны таптық.</p>
        <p>Анықталмаған интегралдарды есептедік.</p>
        <p>Анықталған интегралдарды есептедік.</p>
      `)}

      <h2>Сау болыңыздар!</h2>

    </div>
  `;
}

// =====================================
// ФОРМУЛАЛАРДЫ КӨРСЕТУ
// =====================================

let mathQueue = Promise.resolve();

function refreshMath() {
  if (!window.MathJax) return;

  // Жаңа бетке көшкенде формулаларды
  // кезекпен өңдейміз.
  mathQueue = mathQueue
    .then(async () => {
      await MathJax.startup.promise;
      await MathJax.typesetPromise([$("content")]);
    })
    .catch(error => {
      console.warn("MathJax қатесі:", error);
    });
}

// =====================================
// БЕТТІ КӨРСЕТУ
// =====================================

function render() {
  const slide = slides[currentPage];

  let html = "";

  switch (slide.type) {
    case "intro":
      html = renderIntro();
      break;

    case "theory":
      html = renderTheory(slide.index);
      break;

    case "note":
      html = renderNote(slide.index);
      break;

    case "level":
      html = renderLevel(slide.index);
      break;

    case "game":
      html = renderGame(slide.index);
      break;

    case "homework":
      html = renderHomework();
      break;

    case "finish":
      html = renderFinish();
      break;
  }

  if (window.MathJax?.typesetClear) {
    MathJax.typesetClear([$("content")]);
  }

  $("content").innerHTML = html;
  $("content").scrollTop = 0;

  $("pageCounter").textContent =
    `${currentPage + 1} / ${slides.length}`;

  $("pageTitle").textContent = slide.title;

  $("pageProgress").style.width =
    `${(currentPage + 1) / slides.length * 100}%`;

  $("prevPage").disabled =
    currentPage === 0;

  $("nextPage").disabled =
    currentPage === slides.length - 1;

  updateTotalScore();

  document.querySelectorAll(
    "[data-section]"
  ).forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.section === slide.type
    );
  });

  refreshMath();
}

// =====================================
// ҰПАЙ
// =====================================

function updateTotalScore() {
  const gameScore = teamScores.reduce(
    (sum, value) => sum + value,
    0
  );

  $("totalScore").textContent =
    individualScore + gameScore;
}

// =====================================
// НАВИГАЦИЯ
// =====================================

function nextPage() {
  if (currentPage < slides.length - 1) {
    currentPage++;
    render();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    render();
  }
}

function jumpTo(type) {
  const index = slides.findIndex(
    slide => slide.type === type
  );

  if (index >= 0) {
    currentPage = index;
    render();
  }
}

$("nextPage").addEventListener(
  "click", nextPage
);

$("prevPage").addEventListener(
  "click", previousPage
);

document.querySelectorAll(
  "[data-section]"
).forEach(button => {
  button.addEventListener("click", () => {
    jumpTo(button.dataset.section);
  });
});

// =====================================
// БАТЫРМАЛАРҒА ОҚИҒА ҚОСУ
// =====================================

$("content").addEventListener("click", event => {
  const toggleButton = event.target.closest(
    "[data-toggle]"
  );

  if (toggleButton) {
    const target = $(toggleButton.dataset.toggle);

    if (target) {
      target.hidden = !target.hidden;
      if (!target.hidden) refreshMath();
    }

    return;
  }

  const checkButton = event.target.closest(
    "[data-check]"
  );

  if (checkButton) {
    checkAnswer(checkButton.dataset.check);
    return;
  }

  const choiceButton = event.target.closest(
    "[data-choice]"
  );

  if (choiceButton) {
    answerGame(Number(choiceButton.dataset.choice));
  }
});

// =====================================
// 4 ДЕҢГЕЙДІ ТЕКСЕРУ
// =====================================

function checkAnswer(key) {
  if (completedTasks.has(key)) return;

  const [levelIndex, taskIndex] =
    key.split("_").map(Number);

  const level = levels[levelIndex];
  const task = level.tasks[taskIndex];

  const input = $("answer_" + key);
  const feedback = $("feedback_" + key);

  const raw = input.value.trim();

  if (!raw) {
    feedback.textContent =
      "Алдымен жауапты енгізіңдер.";
    return;
  }

  let answer;

  try {
    answer = calculate(raw);
  } catch (error) {
    feedback.textContent =
      "Жауапты дұрыс сан немесе бөлшек түрінде жазыңдар.";
    return;
  }

  const expected = task.value;

  const tolerance =
    0.000001 * Math.max(1, Math.abs(expected));

  if (Math.abs(answer - expected) <= tolerance) {
    completedTasks.add(key);
    individualScore += level.points;

    input.disabled = true;

    const button = document.querySelector(
      `[data-check="${key}"]`
    );

    if (button) {
      button.disabled = true;
      button.textContent = "✓ Дұрыс";
    }

    feedback.textContent =
      `✓ Дұрыс! +${level.points} ұпай`;

    feedback.classList.add("correct");

    updateTotalScore();
  } else {
    feedback.textContent =
      "Қате жауап. Шешуді қайта тексеріңдер.";
  }
}

// =====================================
// КОМАНДАЛЫҚ ОЙЫН
// =====================================

function answerGame(choice) {
  const slide = slides[currentPage];

  if (slide.type !== "game") return;

  const index = slide.index;

  if (gameAnswers.has(index)) return;

  gameAnswers.set(index, choice);

  if (choice === quiz[index].correct) {
    const teamIndex = index % 3;
    teamScores[teamIndex] += 10;
  }

  render();
}

$("resetGame").addEventListener("click", () => {
  teamScores = [0, 0, 0];
  gameAnswers.clear();
  render();
});

// =====================================
// ТОЛЫҚ ЭКРАН
// =====================================

$("fullscreenBtn").addEventListener(
  "click",
  async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn(error);
    }
  }
);

// =====================================
// 80 МИНУТТЫҚ ТАЙМЕР
// =====================================

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );
}

function updateTimer() {
  $("remaining").textContent =
    formatTime(secondsLeft);

  $("elapsed").textContent =
    formatTime(4800 - secondsLeft);

  $("timeProgress").style.width =
    `${(4800 - secondsLeft) / 4800 * 100}%`;
}

function startTimer() {
  if (timerInterval !== null) return;
  if (secondsLeft <= 0) return;

  timerDeadline =
    Date.now() + secondsLeft * 1000;

  timerInterval = setInterval(() => {
    secondsLeft = Math.max(
      0,
      Math.ceil(
        (timerDeadline - Date.now()) / 1000
      )
    );

    updateTimer();

    if (secondsLeft === 0) {
      pauseTimer();
    }
  }, 250);
}

function pauseTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  pauseTimer();
  secondsLeft = 4800;
  updateTimer();
}

$("timerStart").addEventListener(
  "click", startTimer
);

$("timerPause").addEventListener(
  "click", pauseTimer
);

$("timerReset").addEventListener(
  "click", resetTimer
);

// =====================================
// АЛМАТЫНЫҢ АҒЫМДАҒЫ УАҚЫТЫ
// =====================================

function updateClock() {
  $("clock").textContent =
    new Intl.DateTimeFormat("kk-KZ", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
}

updateClock();

setInterval(updateClock, 1000);

// =====================================
// ЕКІ КАЛЬКУЛЯТОР
// =====================================

const calcValues = {
  basic: "",
  science: ""
};

const calcKeys = {
  basic: [
    "C", "⌫", "(", ")",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ],

  science: [
    "C", "⌫", "(", ")",
    "sin", "cos", "tg", "ctg",
    "√", "∛", "x²", "xʸ",
    "log", "ln", "π", "e",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ]
};

const calcMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "sin": "sin(",
  "cos": "cos(",
  "tg": "tan(",
  "ctg": "ctg(",
  "√": "sqrt(",
  "∛": "cbrt(",
  "log": "log(",
  "ln": "ln(",
  "π": "pi",
  "x²": "^2",
  "xʸ": "^"
};

// =====================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// =====================================

function createCalculator(type) {
  const grid = $("keys-" + type);

  calcKeys[type].forEach(key => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = key;

    if (key === "C") {
      button.classList.add("clear");
    }

    if (key === "=") {
      button.classList.add("equal");
    }

    if ([
      "sin", "cos", "tg",
      "ctg", "log", "ln"
    ].includes(key)) {
      button.classList.add("trig");
    }

    if ([
      "+", "−", "×", "÷",
      "√", "∛", "x²", "xʸ"
    ].includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click", () => {
      pressCalc(type, key);
    });

    grid.appendChild(button);
  });
}

// =====================================
// КАЛЬКУЛЯТОРҒА МӘН ЕНГІЗУ
// =====================================

function pressCalc(type, key) {
  let value = calcValues[type];

  if (key === "C") {
    value = "";
  }

  else if (key === "⌫") {
    value = value.slice(0, -1);
  }

  else if (key === "=") {
    try {
      const result = calculate(value);
      value = String(
        Number(result.toPrecision(12))
      );
    } catch (error) {
      value = "Қате";
    }
  }

  else {
    if (value === "Қате") {
      value = "";
    }

    value += calcMap[key] ?? key;
  }

  calcValues[type] = value;

  const display = $("display-" + type);

  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;
}

// =====================================
// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ ЖҮЙЕСІ
// =====================================

// Тригонометриялық бұрыштар — градуспен.
// eval() қолданылмайды.

function calculate(input) {
  const source = String(input)
    .replace(/\s+/g, "")
    .replace(/,/g, ".");

  let pos = 0;

  const rad = x => x * Math.PI / 180;

  const functions = {
    sin: x => Math.sin(rad(x)),

    cos: x => Math.cos(rad(x)),

    tan: x => {
      if (Math.abs(Math.cos(rad(x))) < 1e-12) {
        throw new Error(
          "Тангенс анықталмаған"
        );
      }

      return Math.tan(rad(x));
    },

    ctg: x => {
      if (Math.abs(Math.sin(rad(x))) < 1e-12) {
        throw new Error(
          "Котангенс анықталмаған"
        );
      }

      return Math.cos(rad(x)) / Math.sin(rad(x));
    },

    sqrt: x => Math.sqrt(x),

    cbrt: x => Math.cbrt(x),

    log: x => Math.log10(x),

    ln: x => Math.log(x)
  };

  function take(char) {
    if (source[pos] === char) {
      pos++;
      return true;
    }

    return false;
  }

  function atom() {
    if (take("(")) {
      const result = expression();

      if (!take(")")) {
        throw new Error(
          "Жақша жабылмаған"
        );
      }

      return result;
    }

    const rest = source.slice(pos);

    const numberMatch = rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if (numberMatch) {
      pos += numberMatch[0].length;

      return Number(numberMatch[0]);
    }

    if (rest.startsWith("pi")) {
      pos += 2;
      return Math.PI;
    }

    if (rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    for (const name of Object.keys(functions)) {
      if (rest.startsWith(name + "(")) {
        pos += name.length + 1;

        const argument = expression();

        if (!take(")")) {
          throw new Error(
            "Жақша жабылмаған"
          );
        }

        return functions[name](argument);
      }
    }

    throw new Error(
      "Дұрыс емес өрнек"
    );
  }

  function postfix() {
    let result = atom();

    while (take("%")) {
      result /= 100;
    }

    return result;
  }

  function power() {
    let result = postfix();

    if (take("^")) {
      result = Math.pow(
        result,
        unary()
      );
    }

    return result;
  }

  function unary() {
    if (take("+")) {
      return unary();
    }

    if (take("-")) {
      return -unary();
    }

    return power();
  }

  function term() {
    let result = unary();

    while (true) {
      if (take("*")) {
        result *= unary();
      }

      else if (take("/")) {
        const divisor = unary();

        if (divisor === 0) {
          throw new Error(
            "Нөлге бөлуге болмайды"
          );
        }

        result /= divisor;
      }

      else {
        break;
      }
    }

    return result;
  }

  function expression() {
    let result = term();

    while (true) {
      if (take("+")) {
        result += term();
      }

      else if (take("-")) {
        result -= term();
      }

      else {
        break;
      }
    }

    return result;
  }

  if (!source) {
    throw new Error(
      "Бос өрнек"
    );
  }

  const result = expression();

  if (
    pos !== source.length ||
    !Number.isFinite(result)
  ) {
    throw new Error(
      "Есептеу қатесі"
    );
  }

  return Math.abs(result) < 1e-12
    ? 0
    : result;
}

// =====================================
// КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// =====================================

function toggleCalculator(type) {
  const element = $("calc-" + type);

  const other = type === "basic"
    ? "science"
    : "basic";

  const opening =
    !element.classList.contains("visible");

  $("calc-" + other).classList.remove(
    "visible"
  );

  element.classList.toggle(
    "visible",
    opening
  );

  if (opening) {
    const rect = element.getBoundingClientRect();

    const maxX = Math.max(
      0,
      window.innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      window.innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(0, Math.min(maxX, rect.left)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, rect.top)) + "px";
  }
}

$("basicOpen").addEventListener(
  "click",
  () => toggleCalculator("basic")
);

$("scienceOpen").addEventListener(
  "click",
  () => toggleCalculator("science")
);

document.querySelectorAll(
  "[data-close]"
).forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.close;

    $("calc-" + type).classList.remove(
      "visible"
    );
  });
});

// =====================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// =====================================

function makeDraggable(element) {
  const handle = element.querySelector(
    ".calc-head"
  );

  let drag = null;

  handle.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) {
      return;
    }

    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: rect.left,
      top: rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", event => {
    if (!drag) return;
    if (event.pointerId !== drag.id) return;

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    const maxX = Math.max(
      0,
      window.innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      window.innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(
        0,
        Math.min(maxX, drag.left + dx)
      ) + "px";

    element.style.top =
      Math.max(
        0,
        Math.min(maxY, drag.top + dy)
      ) + "px";
  });

  handle.addEventListener("pointerup", () => {
    drag = null;
  });

  handle.addEventListener("pointercancel", () => {
    drag = null;
  });
}

// =====================================
// БАРЛЫҒЫН ІСКЕ ҚОСУ
// =====================================

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
