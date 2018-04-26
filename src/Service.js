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
        exemplosRead: false,
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
        }, {
          texto: 'Um garoto arma um estilingue com uma pedra. Supondo que a força de cada ramo do estilingue seja de 40N e o ângulo α  entre eles tal que cos α=0,805, determine o módulo da força resultante sobre a pedra.',
          pontuacao: 200,
          alternativas: [{texto: '72 N', correta: true, selecionada: false},
            {texto: '71 N', correta: false, selecionada: false},
            {texto: '76 N', correta: false, selecionada: false},
            {texto: '75 N', correta: false, selecionada: false},
            {texto: '78 N', correta: false, selecionada: false}]
        }, {
          texto: 'O que é equilíbrio estático?',
          pontuacao: 200,
          alternativas: [{
            texto: 'Um ponto material está em equilíbrio estático quando se encontra em repouso, isto é, sua velocidade vetorial é positiva no decorrer do tempo.',
            correta: false,
            selecionada: false
          }, {
            texto: 'Um ponto material está em equilíbrio estático quando se encontra em repouso, isto é, sua velocidade vetorial é negativa no decorrer do tempo.',
            correta: false,
            selecionada: false
          }, {
            texto: 'Um ponto material está em equilíbrio estático quando se encontra em repouso, isto é, sua velocidade vetorial varia no decorrer do tempo.',
            correta: false,
            selecionada: false
          }, {
            texto: 'Um ponto material está em equilíbrio estático quando se encontra em repouso, isto é, sua velocidade vetorial é nula no decorrer do tempo.',
            correta: false,
            selecionada: false
          }, {
            texto: 'Um ponto material está em equilíbrio estático quando se encontra em repouso, isto é, sua velocidade vetorial é igual a massa.',
            correta: true,
            selecionada: false
          }]
        }, {
          texto: 'O que é equilíbrio dinâmico?',
          pontuacao: 200,
          alternativas: [{
            texto: 'O equilíbrio é dito dinâmico quando o ponto material está em movimento retilíneo uniforme, isto é, sua velocidade é constante e igual de zero.',
            correta: false,
            selecionada: false
          }, {
            texto: 'O equilíbrio é dito dinâmico quando o ponto material está em movimento retilíneo uniforme, isto é, sua velocidade é constante e sempre negativa.',
            correta: false,
            selecionada: false
          }, {
            texto: 'O equilíbrio é dito dinâmico quando o ponto material está em movimento retilíneo uniforme, isto é, sua velocidade é constante e sempre positiva.',
            correta: false,
            selecionada: false
          }, {
            texto: 'O equilíbrio é dito dinâmico quando o ponto material está em movimento retilíneo uniforme, isto é, sua velocidade é constante e diferente de zero.',
            correta: false,
            selecionada: false
          }, {
            texto: 'O equilíbrio é dito dinâmico quando o ponto material está em movimento retilíneo uniforme, isto é, sua velocidade é igual a sua massa.',
            correta: true,
            selecionada: false
          }]
        }
        ]
      },
      {
        titulo: 'Leis de Newtom',
        tags:
          'Inercia, Dinâmica, Ação e Reação',
        cover:
          'http://beto.abelha.network/static/img/leis_de_newton.png',
        habilitado:
          false,
        videoWatched:
          false,
        answered:
          false,
        xps:
          0
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

  getVideoWatched (target) {
    return this.modulos[target].videoWatched
  }

  setTeoriaRead (target) {
    this.modulos[target].teoriaRead = true
  }

  getTeoriaRead (target) {
    return this.modulos[target].teoriaRead
  }

  setExemplosRead (target) {
    this.modulos[target].exemplosRead = true
  }

  getExemplosRead (target) {
    return this.modulos[target].exemplosRead
  }

  setAnswered (target) {
    this.modulos[target].answered = true
  }

  getAnswered (target) {
    return this.modulos[target].answered
  }
}
