export class Service {
  constructor () {
    this.modulos = [
      {
        titulo: 'Noções de Força',
        tags: 'Definição, Força Resultante, Equilíbrio',
        cover: 'http://beto.abelha.network/static/img/forca_fisica.jpg',
        habilitado: true,
        videoId: 'lpe7mT2LSuY',
        videoWatched: false,
        teoriaRead: false,
        exemplosRead: false,
        aswered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto: `
        <h2>Noções de Força</h2>

        <br>
        <v-alert color="info" icon="info" :value="true">
          <b>Definição:</b> Quando acontece uma interação entre corpos, podem ocorrer variações na velocidade,
          deformações ou ambos os fenômenos. <b>As causas dessas variações ou deformações são denominadas forças.</b>
        </v-alert>
        <br>

        <p>Quando um corpo é abandonado de uma determinada altura, cai com movimento acelerado devido a força de atração
          da Terra.</p>

        <p>Ao chutarmos uma bola, o pé faz sobre ela uma força que, além de deformá-la, inicia-lhe o
          movimento.
          <img src="http://beto.abelha.network/static/img/mod_01_img_01.png"/>
        </p>

        <p>Quando as superfícies dos corpos que interagem se tocam – como a interação pé-bola, por exemplo, a força é
          chamada de contato.</p>

        <p>Ocorrendo a interação e estando os corpos a distância, a força é chamada de campo. Um exemplo é a interação
          Terra-maça. Em dinâmica vamos tratar de forças cujo efeito principal, é causar variações na velocidade
          de um corpo, isto é. Aceleração.
          <img src="http://beto.abelha.network/static/img/mod_01_img_02.png"/>
        </p>

        <v-alert color="info" icon="info" :value="true">
          Forças são interações entre corpos, causando variações no seu estado de movimento ou uma
          deformação.
        </v-alert>
        <br>
        <p>Tal qual a aceleração, a força é uma grandeza vetorial, exigindo, portanto, para ser caracterizada, uma
          intensidade, uma direção e um sentido. A unidade de força no SI é o newton (N).</p>

        <h3>Força resultante</h3>
        <p>
          Seja uma partícula na qual estão aplicadas várias forças. Esse sistema de forças pode ser substituído por uma
          força, a força resultante, que é capaz de produzir na partícula o mesmo efeito que todas as forças aplicadas.
          <img src="http://beto.abelha.network/static/img/mod_01_img_03.png"/>
        </p>
          `
        },

        exemplos: {
          timeRead: 5,
          texto: `
          
        <h2>Noções de Força</h2>

        <br>
        <v-alert color="info" icon="info" :value="true">
          <b>Exemplos:</b> Os exemplos ajuram a fixar o conteúdo do módulo. Veja todos e ganhe um bobus!</b>
        </v-alert>
        <br>

        <div class="exemplo">
          <p class="textoExemplo">Duas forças concorrentes, F1 E F2, de intensidade 4N e 3N, atuam num mesmo ponto
            material, formando um
            ângulo α entre si. Determine a intensidade da força resultante para os seguintes valore de α: </p>
          <ul>
            <li>0° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_01.png"/></li>
            <li>60° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_02.png"/></li>
            <li>90° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_03.png"/></li>
            <li>180° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_04.png"/></li>
          </ul>
        </div>`
        },

        questoes: [{
          texto: 'O que é força?',
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
        titulo: '1ª Lei de Newton ou princípio da inércia',
        cover: 'http://beto.abelha.network/static/img/leis_de_newton.png',
        videoId: '0lmB4pNgQWU',
        habilitado: true,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            `
            <h2>1ª LEI DE NEWTON OU PRINCÍPIO DA INÉRCIA<h2>
            
            <h3>O que é a primeira lei de Newton?</h3>
            <p>Também chamada de Lei da Inércia, essa é a coisa mais importante para entender sobre movimento.</p>
            
            <h3>Por que a velocidade dos objetos diminui? </h3>
            <p>Antes de Galileu e Newton, muitos acreditavam que os objetos desaceleravam porque possuíam uma tendência natural para isso. Mas essas pessoas não levavam em consideração várias forças - ex: atrito, gravidade, e a resistência do ar - que provocam mudança de velocidade nos objetos aqui na terra. Se pudéssemos observar o movimento de um objeto no espaço, poderíamos notar as tendências naturais do movimento de um objeto livre de quaisquer influências externas. No espaço profundo, veríamos que se um objeto possui velocidade, ele continuaria a se mover com essa mesma velocidade até que alguma força causasse uma variação no seu movimento. Da mesma forma, se um objeto estivesse parado no espaço, ele continuaria em repouso até que alguma força agisse sobre ele, variando seu movimento.</p> 
            Primeira Lei de Newton: Um objeto em repouso permanece em repouso, ou se estiver em movimento, permanece em movimento com velocidade constante, a menos que uma força externa atue sobre ele.</p>
            Note o uso repetido do verbo "permanece". Podemos pensar nessa lei como a preservação do status quo do movimento. A primeira lei de Newton afirma que deve haver uma causa - que é uma força resultante externa - para que haja qualquer variação na velocidade (uma variação na magnitude ou na direção). Um objeto deslizando sobre uma mesa ou sobre o chão perde velocidade por ação da força resultante do atrito agindo sobre o objeto.</p>
            
            <h3>O que força, força externa e força resultante significam?</h3>
            
            <p>Uma força é um impulso ou uma tração exercida sobre um objeto por outro objeto. As unidades de F são chamadas Newtons, ou simplesmente N. Uma força externa é uma força que se origina fora de um objeto, em vez de uma força interna ao objeto. Por exemplo, a força da gravidade que a Terra exerce sobre a lua é uma força externa à lua. Contudo, a força da gravidade que o núcleo da lua exerce sobre sua crosta externa é uma força interna à lua. Forças internas a um objeto não podem gerar variação em seu movimento geral.</p> 
            Já a força resultante, expressa como ΣF, sobre um objeto é a força total exercida sobre o objeto. Se diversas forças agem sobre um objeto, então a força resultante é a soma de todas as forças. Mas cuidado: já que a força F é um vetor, para encontrar a força resultante ΣF, as forças precisam ser somadas como vetores, utilizando a soma de vetores.</p>
            Em outras palavras, se uma caixa tivesse uma força de magnitude 45 Newtons sendo exercida pela direita e uma força de magnitude 30 Newtons sendo exercida pela esquerda, a força resultante na direção horizontal seria: </p>
            <p>ΣF horizontal = 45 N − 30 N<br>ΣF horizontal =15 N</p>
            <p><b>Considerando a direita como a direção positiva.</b></p>
            <p>A primeira lei de Newton estabelece que caso a força resultante sobre um objeto seja zero  (ΣF=0), então esse objeto terá aceleração nula. Isso não necessariamente significa que o objeto está em repouso, mas significa que possui velocidade constante. Em outras palavras, velocidade constante igual a zero, em repouso, ou diferente de zero, movendo-se com uma velocidade constante.</p> 
            <p>Para uma caixa, se a força para a direita teve uma magnitude de 45 Newtons e a força para a esquerda teve uma magnitude de 45 Newtons, a força líquida seria zero. A caixa de burritos tanto continuaria se movendo com uma velocidade constante — se começou com velocidade antes que as forças foram aplicadas — como permaneceria em repouso — se já estava em repouso antes de as forças serem aplicadas.</p>
            
            <h3>O que significa massa?</h3> 
            <p>A propriedade de um corpo permanecer em repouso ou permanecer em movimento com velocidade constante é chamada de inércia. A primeira lei de Newton muitas vezes é chamada de lei da inércia. Como sabemos a partir de experiências, alguns objetos têm mais inércia que outros. Obviamente, é mais difícil variar o movimento de uma pedra grande do que o de uma bola de basquete, por exemplo.</p>
            <p>A inércia de um objeto é medida por sua massa. A massa pode ser determinada medindo o quão difícil é acelerar um objeto. Quanto mais massa um objeto tem, mais difícil é acelerá-lo.</p>
            <p>Além disso, grosseiramente falando, quando mais "coisas" (ou matéria) há em algo, mais massa ele tem, e mais difícil será alterar sua velocidade (por exemplo, fazê-lo acelerar).</p>
            `
        },
        exemplos: {
          timeRead: 3,
          texto: `
          
          
          `
        }
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
    this.habilitaModulos(target)
  }

  getTeoriaRead (target) {
    return this.modulos[target].teoriaRead
  }

  setAnswered (target) {
    this.modulos[target].answered = true
    this.habilitaModulos(target)
  }

  getAnswered (target) {
    return this.modulos[target].answered
  }

  getTeoria (target) {
    return this.modulos[target].teoria
  }

  getExemplos (target) {
    return this.modulos[target].exemplos
  }

  setExemplosRead (target) {
    this.modulos[target].exemplosRead = true
  }

  getExemplosRead (target) {
    return this.modulos[target].exemplosRead
  }

  getVideoId (target) {
    return this.modulos[target].videoId
  }

  habilitaModulos (target) {
    const modulo = this.modulos[target]
    if (modulo.answered && modulo.teoriaRead) {
      this.modulos[target + 1].habilitado = true
    }
  }
}
