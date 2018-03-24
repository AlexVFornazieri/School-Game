export class Service {
  constructor () {
    this.modulos = [
      {
        titulo: 'Noções de Força',
        tags: 'Definição, Força Resultante, Equilíbrio',
        cover: 'http://beto.abelha.network/static/img/forca_fisica.jpg',
        habilitado: true,
        videoWatched: false,
        teoriaRead: false,
        aswered: false,
        xps: 0,
        questoes: [{
          texto: 'O que é força? É uma grandeza escalar ou vetorial?',
          pontuacao: 200,
          respondiada: false,
          alternativas: [
            {
              texto: 'Forças são interações entre corpos, causando variações no seu estado de movimento ou uma deformação. É uma grandeza escalar.',
              correta: false,
              selecionada: false
            },
            {
              texto: 'Forças são interações entre corpos, causando variações no seu estado de movimento ou uma deformação. É uma grandeza vetorial.',
              correta: true,
              selecionada: false
            },
            {
              texto: 'Forças são interações entre velocidades, causando variações no seu estado de movimento ou uma deformação.  É uma grandeza vetorial.',
              correta: false,
              selecionada: false
            },
            {
              texto: 'Forças são interações entre temperaturas, causando variações no seu estado de movimento ou uma deformação.  É uma grandeza vetorial.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'O que é a resultante em um sistema de forças?',
          pontuacao: 200,
          alternativas: [
            {
              texto: 'Seja uma partícula na qual estão aplicadas várias forças. Esse sistema de forças pode ser substituído por uma força, a força resultante, que é capaz de produzir na velocidade o mesmo efeito que todas as forças aplicadas.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Seja uma partícula na qual estão aplicadas várias forças. Esse sistema de forças pode ser substituído por uma força, a força resultante, que é capaz de produzir na gravidade o mesmo efeito que todas as forças aplicadas.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Seja uma partícula na qual estão aplicadas várias forças. Esse sistema de forças pode ser substituído por uma força, a força resultante, que é capaz de produzir na aceleração o mesmo efeito que todas as forças aplicadas.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Seja uma partícula na qual estão aplicadas várias forças. Esse sistema de forças pode ser substituído por uma força, a força resultante, que é capaz de produzir na partícula o mesmo efeito que todas as forças aplicadas.',
              correta: true,
              selecionada: false
            }]
        }
        ]
      },
      {
        titulo: 'Leis de Newtom',
        tags: 'Inercia, Dinâmica, Ação e Reação',
        cover: 'http://beto.abelha.network/static/img/leis_de_newton.png',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0
      }
    ]
  }

  listaModulos () {
    return this.modulos
  }

  getQuestoes (target) {
    return this.modulos[target].questoes
  }

  addScore (score, target) {
    this.modulos[target].xps += score
  }

  setVideoWatched (target) {
    this.modulos[target].videoWatched = true
  }

  setTeoriaRead (target) {
    this.modulos[target].teoriaRead = true
  }

  setAnswered (target) {
    this.modulos[target].answered = true
  }
}
