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
        xps: 0
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
