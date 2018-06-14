export class Service {
  constructor () {
    this.modulos = [
      /* ---------- */
      {
        titulo: 'Noções de Força',
        tags: 'Definição, Força Resultante, Equilíbrio',
        cover: 'http://beto.abelha.network/static/img/capas/01.jpg',
        habilitado: true,
        videoId: 'lpe7mT2LSuY',
        videoWatched: false,
        teoriaRead: false,
        exemplosRead: false,
        aswered: false,
        xps: 0,
        teoria: {
          timeRead: 15,
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
          timeRead: 10,
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
          respondiada: false,
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
          respondiada: false,
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
          respondiada: false,
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

      /* ---------- */
      {
        titulo: '1ª Lei de Newton ou princípio da inércia',
        cover: 'http://beto.abelha.network/static/img/capas/02.jpg',
        videoId: '0lmB4pNgQWU',
        habilitado: false,
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
          <h2>Exemplo 1: Sonda espacial à deriva</h2> 
          <p>Uma sonda espacial está à deriva com uma velocidade constante no espaço (longe de qualquer influência de planetas e estrelas) com seus propulsores desligados. Se dois propulsores forem ligados simultaneamente exercendo forças idênticas para as direções esquerda e direita nas direções mostradas, o que aconteceria com o movimento do foguete?
          <img src="http://beto.abelha.network/static/img/mod_02_ex_img_01.png"/></p>
           <ul>
           <li>a) A sonda espacial continuaria com velocidade constante</li>
           <li>b) A sonda espacial aumentaria sua velocidade</li>
           <li>c) A sonda espacial diminuiria sua velocidade e pararia</li>
           <li>d) A sonda espacial pararia imediatamente. </li>
          </ul>
          
          <p><b>A resposta correta é:</b> a) De acordo com a primeira lei de Newton, uma força resultante não-nula é necessária para variar a velocidade de um objeto. A força resultante na sonda espacial é zero (já que as forças se cancelam), então não há variação na velocidade da sonda.</p>
          
          <h2>Exemplo 2: O elevador </h2>
                    <p>Um elevador está sendo puxado para cima com uma velocidade constante por um cabo como visto no diagrama abaixo. Enquanto o elevador está se movendo para cima com velocidade constante, como a magnitude da força para cima exercida no elevador pelo cabo FC se comparada à magnitude da força da gravidade para baixo FG no elevador?
                    <img src="http://beto.abelha.network/static/img/mod_02_ex_img_02.png"/>
                    </p>
          <ul>
          <li>a) FC é maior que FG </li>
          <li>b) FC é igual a FG</li>
          <li>c) FC é menor que FG</li>
          <li>d) FC poderia ser maior ou menor FG  dependendo da massa do elevador.</li>
          </ul>
          
          <p><b>A alternativa correta é:</b> b) Se o elevador está se movendo com velocidade constante, a força resultante deve ser zero. Para que a força resultante no elevador seja zero, as forças para cima e para baixo devem se cancelar exatamente.</p>
          
          <h2>Exemplo 3: A trajetória da sonda espacial</h2>
          <p>Uma sonda espacial está à deriva com uma velocidade constante no espaço (longe de qualquer influência de planetas e estrelas) com seus propulsores desligados. Se um propulsor for ligado e logo depois desligado fazendo uma pequena explosão de força na direção mostrada, o que melhor representaria o caminho viajado pelo foguete após o propulsor ser desligado?
          <img src="http://beto.abelha.network/static/img/mod_02_ex_img_03.png"/></p>
          
           <ul>
          <li>a) trajetória a </li>
          <li>b) trajetória b</li>
          <li>c) trajetória c</li>
          <li>d) trajetória d</li>
          </ul>
          
          <p><b>A reposta correta é:</b> c) Depois que o propulsor é desligado, não haverá força resultante na sonda espacial. Já que a força resultante é zero, a velocidade (tanto a magnitude quanto a direção) deve ser constante. Então, devido à primeira lei de Newton, a sonda espacial se move em linha reta com uma velocidade constante. O fato de que havia uma força vertical sobre a sonda espacial não afeta a velocidade horizontal da sonda espacial, ela varia apenas a velocidade vertical. Um vetor velocidade constante na vertical e outro na horizontal resulta em uma linha diagonal reta no espaço.</p>          
          `
        },
        questoes: [{
          texto: 'De acordo com a Primeira Lei de Newton:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'Um corpo tende a permanecer em repouso ou em movimento retilíneo uniforme quando a resultante das forças que atuam sobre ele é nula.',
              correta: true,
              selecionada: false
            }, {
              texto: 'Um corpo permanece em movimento apenas enquanto houver uma força atuando sobre ele.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Quando a resultante das forças que atuam sobre um corpo é igual a zero, esse corpo somente pode estar em repouso.',
              correta: false,
              selecionada: false
            }, {
              texto: 'A inércia de um objeto independe de sua massa.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Baseando-se na primeira Lei de Newton, assinale a alternativa correta:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'Se estivermos dentro de um ônibus e deixarmos um objeto cair, esse objeto fará uma trajetória retilínea em relação ao solo, pois o movimento do ônibus não afeta o movimento de objetos em seu interior.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Quando usamos o cinto de segurança dentro de um carro, estamos impedindo que, na ocorrência de uma frenagem, sejamos arremessados para fora do carro, em virtude da tendência de permanecermos em movimento.',
              correta: true,
              selecionada: false
            }, {
              texto: 'Quanto maior a massa de um corpo, mais fácil será alterar sua velocidade.',
              correta: false,
              selecionada: false
            },
            {
              texto: 'O estado de repouso e o de movimento retilíneo independem do referencial adotado.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'As estatísticas indicam que o uso de cinto de segurança deve ser obrigatório para prevenir lesões mais graves em motoristas e passageiros no caso de acidentes. Fisicamente, a função do cinto está relacionada com a:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'Primeira Lei de Newton;',
              correta: true,
              selecionada: false
            }, {
              texto: 'Lei de Snell;',
              correta: false,
              selecionada: false
            }, {
              texto: 'Lei de Ampére;',
              correta: false,
              selecionada: false
            },
            {
              texto: 'Lei de Ohm;',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Julgue as afirmações abaixo:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'Se um corpo sob a ação de várias forças está em equilíbrio, então esse corpo só pode estar em repouso.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Um corpo permanece em movimento retilíneo uniforme ou em repouso quando não existe nenhuma força atuando sobre ele.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Quando a resultante das forças que atuam sobre um corpo é nula, esse corpo permanece em repouso ou em movimento uniforme em qualquer direção.',
              correta: false,
              selecionada: false
            },
            {
              texto: 'Um objeto sob a ação de várias forças está em equilíbrio, isso significa que ele pode estar em repouso ou em movimento retilíneo uniforme.',
              correta: false,
              selecionada: true
            }
          ]
        }, {
          texto: 'A primeira Lei de Newton afirma que, se a soma de todas as forças atuando sobre o corpo é zero, o mesmo ...',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'terá um movimento uniformemente variado.',
              correta: false,
              selecionada: false
            }, {
              texto: 'apresentará velocidade constante.',
              correta: true,
              selecionada: false
            }, {
              texto: 'apresentará velocidade constante em módulo, mas sua direção pode ser alterada.',
              correta: false,
              selecionada: false
            },
            {
              texto: 'será desacelerado.',
              correta: false,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: '2ª Lei de Newton ou princípio fundamental da dinâmica',
        cover: 'http://beto.abelha.network/static/img/capas/03.jpg',
        videoId: 'ZQPO9-LGoAU',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            `
            <h2>2ª Lei de Newton ou princípio fundamental da dinâmica<h2>
            
            <h3>O que é a segunda lei de Newton?<h3>
            <p>No mundo da física introdutória, a Segunda Lei de Newton é uma das leis mais importantes que você irá aprender. Ela é usada em quase todos os capítulos de todo livro de física, por isso é importante a dominar esta lei o quanto antes.</p>
            <p>Sabemos que os objetos só podem ser acelerados se houver forças atuando sobre eles. A segunda lei de Newton nos diz exatamente quanto um objeto será acelerado por uma dada força resultante. $$a=\\frac{\\sum F}{m}$$</p>
            
            <p>Para sermos claros, a é a aceleração do objeto, $\\sum{F}$ é a força resultante sobre o objeto, e m é a massa do objeto.</p> 
            <p>Olhando para a fórmula da Segunda Lei de Newton mostrada acima, podemos ver que a aceleração é proporcional à força resultante, $\\sum{F}$, e inversamente proporcional à massa, m. Em outras palavras, se a força resultante for dobrada, a aceleração do objeto seria duas vezes maior. Da mesma forma, se a massa do objeto for dobrada, sua aceleração cairia pela metade.</p>
            
            <h3>O que significa força resultante?</h3>
            
            <p>Uma força é um compressão ou uma tração, e a força resultante $\\sum{F}$ é a força total — ou a soma das forças — exercida sobre um objeto. Adição de vetores é um pouco diferente da adição de números regulares. Quando adicionamos vetores, devemos levar em consideração a sua direção. A força resultante é a soma vetorial de todas as forças exercidas sobre um objeto.</p>
            
            <h3>O que a expressão soma vetorial significa?</h3>
            
            <p>Podemos encontrar a soma de múltiplas forças vetoriais graficamente usando o método de cauda-a-ponta. Isto significa que colocamos a cauda de cada vetor de força que queremos adicionar na ponta do vetor de força anterior. Então, depois de colocar o último vetor de força, o vetor de força total apontaria para a cauda do primeiro até a última ponta como visto no diagrama abaixo.
            <img src="http://beto.abelha.network/static/img/mod_03_img_01.png"/></p>
             
            <p>Por exemplo, considere duas forças de magnitude 30 N e 20 N que são exercida para a direita e esquerda, respectivamente, sobre a ovelha mostrada acima. Se supormos que para a direita é o sentido positivo, a força resultante sobre as ovelhas pode ser encontrada por:
            <img src="http://beto.abelha.network/static/img/mod_03_img_02.png"/></p>
             
            <p>$\\sum{F}$ = 30N – 20N <br>
            $\\sum{F}$ = 10 N (para a direita)</p>
            
            <p>Se houvesse mais forças horizontais, poderíamos encontrar a força resultante somando todas as forças para a direita e subtraindo todas as forças para a esquerda.</p>
            <p>Tendo em vista que força é um vetor, podemos escrever a Segunda Lei de Newton como $\\vec{{a}}=\\frac{\\sum\\vec{{F}}}{{m}}$.</p>
            
            <p>Isso mostra que o sentido do vetor aceleração total aponta no mesmo sentido do vetor força resultante. Em outras palavras, se força resultante  aponta para a direita, a aceleração a deve apontar para a direita também.</p>
            
            <h3>Como usamos a 2ª Lei de Newton? </h3>
            
            <p>Se o problema que você está analisando tem muitas forças em várias direções, muitas vezes é mais fácil analisar cada direção de forma independente.</p>
            <p>Em outras palavras, para a direção horizontal podemos escrever $$a_x=\\frac{\\sum F_x}{m}$$</p>
            <p>Isso mostra que a aceleração \${a}_{x}$ na direção horizontal é igual à força resultante na direção horizontal, $\\sum{F}_{x}$ , dividida pela massa.</p>
            
            
            <p>Ao utilizar essas equações temos de ter cuidado para só substituir forças horizontais na fórmula horizontal da Segunda Lei de Newton e substituir forças verticais na fórmula vertical da Segunda Lei de Newton. Fazemos isso porque forças horizontais afetam apenas a aceleração horizontal e forças verticais afetam apenas a aceleração vertical. Por exemplo, considere uma galinha de massa m que tem forças de magnitude \${F}_\\mathbf{1}$, \${F}_\\mathbf{2}$, \${F}_\\mathbf{3}$ e \${F}_\\mathbf{4}$ exercida sobre ela nos direções mostradas abaixo.</p>
             
            <p>As forças \${F}_\\mathbf{1}$ e \${F}_\\mathbf{3}$ afetam a aceleração horizontal, uma vez que elas atuam ao longo da direção horizontal. Aplicando a Segunda Lei de Newton para a direção horizontal e assumindo o sentido positivo para a direita, temos 
            $$a_x=\\frac{\\sum F_x}{m}=\\frac{F_1-F_3}{m}$$</p>
            <p>Da mesma forma, as forças {F}_\\mathbf{2} e {F}_\\mathbf{4} afetam a aceleração vertical, já que elas atuam ao longo da direção vertical. Aplicando a Segunda Lei de Newton para a direção vertical e assumindo o sentido positivo para cima, temos
            $$a_y=\\frac{\\sum F_y}{m}=\\frac{F_2-F_4}{m}$$</p>
            <p><b>Atenção:</b> um erro comum que as pessoas cometem é inserir uma força vertical em uma equação de força horizontal, ou vice-versa.</p>
            
            <h3>O que fazemos quando uma força é direcionada em um ângulo?</h3>
            <p>Quando as forças são aplicadas em direções diagonais, ainda podemos analisá-las em direções separadas independentes. Forças diagonais, entretanto, contribuirão para a aceleração nas direções vertical e horizontal.</p>
            <p>Por exemplo, digamos que a força \${F}_\\mathbf{3}$ sobre a galinha agora está direcionada em um ângulo θ, como mostrado abaixo.</p>
            
            <p>A força \${F}_\\mathbf{3}$ afetará tanto as acelerações verticais quanto horizontais, mas apenas a componente horizontal do \${F}_\\mathbf{3}$ afetará a aceleração horizontal; somente a componente vertical do \${F}_\\mathbf{3}$ afetará a aceleração vertical. Então vamos decompor a força \${F}_\\mathbf{3}$ em componentes horizontais e verticais, como visto abaixo.</p>
             
            <p>Agora, vemos que a força \${F}_\\mathbf{3}$ consiste de uma força horizontal \${F}_{\\mathbf{3}{x}}$ e uma força \${F}_{\\mathbf{3}{y}}$.</p>
            <p>Usando trigonometria, podemos encontrar a magnitude da componente horizontal com \${F}_{\\mathbf{3}{x}}={F}_\\mathbf{3}.{cos}\\mathbf{\\theta}$. Da mesma forma, podemos encontrar a magnitude do componente vertical com \${F}_{\\mathbf{3}{y}}={F}_\\mathbf{3}.{sen}\\mathbf{\\theta}$.</p>
            <p>Agora podemos proceder normalmente, inserindo todas as forças direcionadas horizontalmente na fórmula horizontal da Segunda Lei de Newton.</p>
            <p>$$a_x=\\frac{\\sum F_x}{m}=\\frac{F_1-F_{3x}}{m}=\\frac{F_1-F_3.cos\\mathbf{\\theta}}{m}$$</p>
            <p>Da mesma forma, podemos inserir todas as forças direcionadas verticalmente na fórmula vertical da Segunda Lei de Newton.
            $$a_y=\\frac{\\sum F_y}{m}=\\frac{F_2-F_4+F_{3y}}{m}=\\frac{F_2-F_4+F_3.sen\\mathbf{\\theta}}{m}$$</p>

            `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
            <h2>Exemplo 1: Newton, a tartaruga</h2>
            <p>Uma tartaruga de 1,2 kg chamada Newton tem quatro forças exercidas sobre ela, como mostrado no diagrama abaixo.</p>
            <p>Qual é a aceleração horizontal da tartaruga Newton?<br>
            Qual é a aceleração vertical da tartaruga Newton?
            <img src="http://beto.abelha.network/static/img/mod_03_ex_img_01.png"></p>
            <p>Para encontrar a aceleração horizontal, usaremos a Segunda Lei de Newton para a direção horizontal.</p>
            <p>$a_x=\\frac{\\sum F_x}{m}$ (Comece com a Segunda Lei de Newton para a direção horizontal.)</p>
            <p>$a_x=\\frac{\\left(30N\\right).cos{30}^o-22N}{1,2Kg}$ (Substitua as forças horizontais com os sinais negativos corretos.)</p>
            <p>$a_x=\\frac{26N-22N}{1,2Kg}$ (Certifique-se que sua calculadora está modo "graus", se calculando em graus.)</p>
            <p>$a_x=3,3\\frac{m}{s^2}$ (Calcule e comemore!)</p>
            <p>Para encontrar a aceleração vertical, usaremos a Segunda Lei de Newton para a direção vertical.</p>
            <p>$a_y=\\frac{\\sum F_y}{m}$ (Comece com a Segunda Lei de Newton para a direção vertical.)</p>
            <p>$a_y=\\frac{16N-12N-\\left(30N\\right).sen{30}^o}{1,2Kg}$ (Substitua as forças verticais com os sinais negativos corretos.)
            </p><p>$a_y=\\frac{16N-12N-15N}{1,2Kg}$ (Certifique-se que sua calculadora está modo "graus", se calculando em graus.)</p>
            <p>$a_y=-9,2\\frac{m}{s^2}$ (Calcule e comemore!)</p>
            
            <h2>Exemplo 2: O queijo suspenso</h2>
            <p>Uma fatia de queijo é suspensa em repouso por dois fios que exercem forças de magnitude \\mathbit{F}_\\mathbf{1} e \\mathbit{F}_\\mathbf{2}, como pode ser visto abaixo. Há também uma força da gravidade para baixo sobre o queijo de magnitude 20N.
            <img src="http://beto.abelha.network/static/img/mod_03_ex_img_02.png"></p>
            <p>Começaremos usando ou a versão horizontal ou a vertical da Segunda Lei de Newton. Não sabemos o valor de nenhuma das forças horizontais, mas sabemos a magnitude de uma das forças verticais 20N. Uma vez que temos mais informações sobre a direção vertical, vamos analisar nesse sentido primeiro.</p>
            <p>$a_y=\\frac{\\sum F_y}{m}$ (Comece com a Segunda Lei de Newton para a direção vertical.)</p>
            <p>$a_y=\\frac{F_1.sen{60}^o-20N}{m}$ (Substitua as forças verticais com os sinais negativos corretos.)</p>
            <p>$0=\\frac{F_1.sen{60}^o-20N}{m}$ (A aceleração vertical é zero, já que o queijo está em repouso.)</p>
            <p>$0=F_1.sen{60}^o-20N$ (Multiplique ambos os lados pela massa m.)</p>
            <p>$F_1=\\frac{20N}{sen{60}^o}$ (Resolva para \\mathbit{F}_\\mathbf{1}.)</p>
            <p>$F_1=23N$ (Calcule e comemore!)</p>
            <p>Agora para encontrar a força \\mathbit{F}_\\mathbf{2}, vamos usar a Segunda Lei de Newton para a direção horizontal.</p>
            <p>$a_x=\\frac{\\sum F_x}{m}$ (Comece com a Segunda Lei de Newton para a direção horizontal.)</p>
            <p>a_x=\\frac{F_1.cos{60}^o-F_2}{m} (Substitua as forças horizontais com os sinais negativos corretos.)</p>
            <p>$a_x=\\frac{\\left(23N\\right).cos{60}^o-F_2}{m}$ (Substitua o valor de \\mathbit{F}_\\mathbf{1}=23N, obtido no cálculo vertical.)</p>
            <p>$0=\\frac{\\left(23N\\right).cos{60}^o-F_2}{m}$ (A aceleração horizontal é zero, já que o queijo está em repouso.)</p>
            <p>$0=\\left(23N\\right).cos{60}^o-F_2$ (Multiplique ambos os lados pela massa m.)</p>
            <p>$F_2=\\left(23N\\right).cos{60}^o$  (Resolva para $\{F}_\\mathbf{2}$.)</p>
            <p>$F_2=11,5N$ (Calcule e comemore!)</p>
            `
        },
        questoes: [{
          texto: 'Em um acidente, um carro de 1200 kg e velocidade de 162 Km/h chocou-se com um muro e gastou 0,3 s para parar. Marque a alternativa que indica a comparação correta entre o peso do carro e a força, considerada constante, que atua sobre o veículo em virtude da colisão.<br>' +
          'ADOTE: g = 10m/s^2<br>',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '10 vezes menor.',
              correta: false,
              selecionada: false
            }, {
              texto: '10 vezes maior.',
              correta: false,
              selecionada: false
            }, {
              texto: '15 vezes menor.',
              correta: true,
              selecionada: false
            }, {
              texto: '20 vezes maior.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: ') Um corpo de massa m está sujeito à ação de uma força F que o desloca segundo um eixo vertical em sentido contrário ao da gravidade. Se esse corpo se move com velocidade constante, é porque:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'a força F é maior do que a da gravidade.',
              correta: false,
              selecionada: false
            }, {
              texto: 'a força resultante sobre o corpo é nula.',
              correta: true,
              selecionada: false
            }, {
              texto: 'a força F é menor do que a gravidade.',
              correta: false,
              selecionada: false
            },
            {
              texto: 'a diferença entre os módulos das duas forças é diferente de zero.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: ') Sobre um corpo de massa igual a 20 kg atuam duas forças de mesma direção e sentidos opostos que correspondem a 60 N e 20 N. Determine a aceleração em que esse objeto movimenta-se.',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '$1m/s^2$',
              correta: false,
              selecionada: false
            }, {
              texto: '$2m/s^2$',
              correta: true,
              selecionada: false
            }, {
              texto: '$4m/s^2$',
              correta: false,
              selecionada: false
            },
            {
              texto: '$6m/s^2$',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Um corpo de massa m é submetido a uma força resultante de módulo F, adquirindo aceleração a. A força resultante que se deve aplicar a um corpo de massa m/2 para que ele adquira aceleração 4a deve ter módulo:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'F/2',
              correta: false,
              selecionada: false
            }, {
              texto: 'F',
              correta: false,
              selecionada: false
            }, {
              texto: '2F',
              correta: true,
              selecionada: false
            },
            {
              texto: '4F',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Durante um intervalo de tempo de 4s atua uma força constante sobre um corpo de massa 8,0kg que está inicialmente em movimento retilíneo com velocidade escalar de 9m/s. Sabendo-se que no fim desse intervalo de tempo a velocidade do corpo tem módulo de 6m/s, na direção e sentido do movimento original, a força que atuou sobre ele tem intensidade de:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '3,0N no sentido do movimento original',
              correta: false,
              selecionada: false
            }, {
              texto: '6,0N em sentido contrário ao movimento original.',
              correta: true,
              selecionada: false
            }, {
              texto: '12,0N no sentido do movimento original.',
              correta: false,
              selecionada: false
            },
            {
              texto: '24,0N em sentido contrário ao movimento original',
              correta: false,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: '3ª Lei de Newton ou Princípio da Ação e Reação',
        cover: 'http://beto.abelha.network/static/img/capas/04.jpg',
        videoId: 'R9hh0WPe8Uc',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            `
            <h2>3ª Lei de Newton ou Princípio da Ação e Reação</h2>

            <h3>O que é a terceira lei de Newton?</h3>
            
            <p>Você provavelmente sabe que a Terra lhe puxa para baixo. O que você pode não perceber é que você também está puxando a Terra para cima. Por exemplo, se a Terra está puxando você para baixo com uma força gravitacional de 500 N, você também está puxando para cima na terra com uma força gravitacional de 500 N. Este fato notável é consequência da Terceira Lei de Newton.</p>
            <p>A Terceira Lei de Newton: Se um objeto A exerce uma força sobre um objeto B, então o objeto B deve exercer uma força de igual magnitude e de sentido oposto sobre o objeto A.</p>
            <p>Esta lei representa uma certa simetria na natureza: as forças sempre ocorrem aos pares, e um corpo não pode exercer uma força sobre outro, sem ele mesmo experimentar uma força. Às vezes, vagamente, nos referimos à essa lei como ação-reação, onde a força exercida é a ação e a força experimentada como consequência é a reação.</p>
            <p>Podemos ver rapidamente a Terceira Lei de Newton em ação dando uma olhada como pessoas se movem. Considere uma nadadora empurrando o lado da piscina, como ilustrado abaixo.
            <img src="http://beto.abelha.network/static/img/mod_04_img_01.png"></p>
            
            <p>A nadadora empurra contra a parede da piscina com os pés e acelera em sentido oposto ao seu impulso. A parede exerce uma força igual e oposta de volta sobre o nadador. Você pode pensar que as duas forças iguais e opostas iriam se cancelar, mas elas não fazem isso porque elas atuam em sistemas diferentes. Nesse caso, existem dois sistemas que podemos investigar: a nadadora ou a parede. Se escolhermos a nadadora para ser o sistema de interesse, como na imagem acima,
             então $F_{\\text{parede no pé}}$ é uma força externa sobre este sistema e afeta o seu movimento. A nadadora se move na direção do $F_{\\text{parede no pé}}$.
             Em contraste, a força $F_{\\text{pé na parede}}$  atua na parede e não no nosso sistema de interesse. Assim, $F_{\\text{pé na parede}}$  não afeta diretamente o movimento do sistema e não cancela $F_{\\text{parede no pé}}$. Observe que a nadadora empurra no sentido oposto ao que ela deseja se mover. A reação do empurrão é, portanto, no sentido desejado.</p>
                        
            <h3>Quais são outros exemplos da terceira lei de Newton?</h3>
            
            <p>É fácil encontrar outros exemplos da terceira lei de Newton. Conforme uma professora anda na frente da lousa, ela exerce uma força para trás no chão. O chão exerce uma força de reação para frente na professora, o que a faz acelerar para frente.</p>
            <p>Da mesma forma, um carro acelera porque o chão empurra as rodas para a frente, em reação às rodas do carro empurrando o chão para trás. Você pode ver evidências das rodas empurrando o chão para trás quando os pneus giram em uma estrada de cascalho e jogam pedras para trás.</p>
            <p>Em outro exemplo, os foguetes se movem expelindo para trás gases em alta velocidade. Isso significa que o foguete exerce uma grande força para trás no gás na câmara de combustão do foguete, e o gás portanto exerce uma grande força de reação para frente no foguete. Essa força de reação é chamada de empuxo. É um erro de conceito comum dizer que os foguetes se impulsionam empurrando o solo ou o ar atrás deles. Eles na verdade funcionam melhor no vácuo, onde podem expelir os gases mais facilmente.</p>
            <p>Da mesma forma, helicópteros cria elevação empurrando o ar para baixo, sofrendo, assim, uma força de reação para cima. Pássaros e aviões também voam exercendo uma força no ar em sentido oposto de qualquer força que precisam. Por exemplo, as asas de um pássaro forçam o ar para baixo e para trás a fim de obter elevação e movimento para frente e para cima.</p>
            `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
            <h2>Exemplo 1: Empurrando uma geladeira</h2>
            <p>Uma pessoa conduz um carro, Carro 1, para a direita enquanto empurra um outro carro, Carro 2, este carregando uma geladeira enorme. A massa total do Carro 2, carro mais geladeira, é três vezes a massa total do Carro 1, carro mais pessoa. Se a pessoa está dirigindo com força suficiente para que os dois carros aceleram para a direita, o que pode ser dito com certeza sobre as magnitudes das forças sobre os carros?
            <img src="http://beto.abelha.network/static/img/mod_04_ex_img_01.png"></p>
            
            <p>A força no Carro 2 exercida pelo Carro 1 é igual em magnitude à força no Carro 1 exercida pelo Carro 2.</p>
            <p>Não importa se há aceleração ou se a massa de um objeto é maior do que o outro objeto. Pares de força reativas são sempre iguais em magnitude. Sabemos que as forças nesta questão são pares de força reativas uma vez que se trocar a ordem dos objetos na frase "força exercida no Carro 2 pelo Carro 1 nos dá a "força exercida no Carro 1 pelo Carro 2. Trocando a ordem dos objetos envolvidos na força—isto é, o objeto exercendo a força e o objeto em que a força é exercida—é uma maneira fácil de identificar par de força da terceira lei.</p>
            
            <h2>Exemplo 2: Movimento de um Corpo</h2>
            <p>Qual a massa de um corpo que, partindo do repouso, atinge uma velocidade de 12m/s em 20s? Sabendo que a força aplicada nele tem módulo igual a 30N.</p>
            
            $$\{V}={V}_{0}+{a}.{t}$$
            
            $$\{12}={0}+{a}.{20}$$
            
            $$\{a}={0},{6}{m}/{s}$$
            
            $$\{F}={m}.{a}$$
            
            $$\{30}={m}.{0},{6}$$
            
            $$\{m}={50}{kg}$$
            `
        },
        questoes: [{
          texto: 'Após estudar a Terceira lei de Newton, um estudante concluiu que um cavalo, ao tentar puxar uma carroça, ' +
          'não deveria sair do lugar, já que o cavalo faz uma força sobre a carroça e vice-versa. A respeito dessa observação, ' +
          'marque a alternativa correta.',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'O estudante está correto, sendo esse um tipo de problema que Newton não conseguiu resolver.',
              correta: false,
              selecionada: false
            }, {
              texto: 'O estudante está errado, pois a força de atrito entre as patas do cavalo e o solo é a responsável pelo movimento.',
              correta: false,
              selecionada: false
            }, {
              texto: 'O estudante está correto e não há uma lei da Física que possa explicar esse fato.',
              correta: false,
              selecionada: false
            }, {
              texto: 'O estudante está errado, pois as forças aplicadas são de mesma intensidade, mas atuam em corpos diferentes. Sendo assim, não haverá equilíbrio, e a carroça movimentar-se-á.',
              correta: true,
              selecionada: false
            }
          ]
        }, {
          texto: 'A respeito da Terceira lei de Newton, marque a alternativa verdadeira.',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'Os pares de ação e reação podem ser formados exclusivamente por forças de contato.',
              correta: false,
              selecionada: false
            }, {
              texto: 'As forças de ação e reação sempre se anulam.',
              correta: false,
              selecionada: false
            }, {
              texto: 'A força normal é uma reação da força peso aplicada por um corpo sobre uma superfície.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Como estão aplicadas em corpos diferentes, as foças de ação e reação não se equilibram.',
              correta: true,
              selecionada: false
            }
          ]
        }, {
          texto: 'Analisando as Leis de Newton, pode-se concluir corretamente que:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'O movimento retilíneo e uniforme é consequência da aplicação de uma força constante sobre o corpo que se move.',
              correta: false,
              selecionada: false
            }, {
              texto: 'A lei da inércia prevê a existência de referenciais inerciais absolutos, em repouso, como é o caso do centro de nossa galáxia.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Para toda ação existe uma reação correspondente, sendo exemplo dessa circunstância a força normal, que é reação à força peso sobre objetos apoiados em superfícies planas.',
              correta: false,
              selecionada: false
            },
            {
              texto: 'Se um corpo é dotado de aceleração, esta certamente é consequência da ação de uma força, ou de um conjunto de forças de resultante diferente de zero, agindo sobre o corpo.',
              correta: true,
              selecionada: false
            }
          ]
        }, {
          texto: 'Se um corpo é dotado de aceleração, esta certamente é consequência da ação de uma força, ou de um conjunto de forças de resultante diferente de zero, agindo sobre o corpo.',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'Porque as leis de Newton são válidas somente na Terra.',
              correta: false,
              selecionada: false
            }, {
              texto: 'Por conta da gravidade zero do espaço.',
              correta: false,
              selecionada: false
            }, {
              texto: ' No espaço, não existe ar para ser empurrado pela hélice, logo, a aeronave não pode ser impulsionada para frente. Pela Terceira lei de Newton, a hélice empurra o ar e, consequentemente, a aeronave é empurrada para frente.',
              correta: true,
              selecionada: false
            },
            {
              texto: 'No espaço, somente é válida a lei da Inércia.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Suponha que uma pessoa puxe uma corda de um equipamento de ginástica com uma força de intensidade igual a 100 N. Determine o valor da força que o equipamento faz sobre a pessoa e marque a opção correta.',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '-100N',
              correta: false,
              selecionada: false
            }, {
              texto: '200N',
              correta: false,
              selecionada: false
            }, {
              texto: '100N',
              correta: true,
              selecionada: false
            },
            {
              texto: '-200N',
              correta: false,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: 'Força peso',
        cover: 'http://beto.abelha.network/static/img/capas/05.jpg',
        videoId: 'TfC4svFp6Vg',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            `
            <h2>Força peso</h2>
            <h3>O que é peso?</h3>
            <p>Peso, P, é apenas outro nome para a força da gravidade $F_g$. O peso é uma força que age o tempo todo sobre todos os objetos próximos à Terra. A Terra puxa todos os objetos com uma força de gravidade para baixo, na direção do seu centro. A magnitude da força da gravidade pode ser encontrada multiplicando a massa m do objeto pela magnitude da aceleração da gravidade $g = + 9,8 m/s^2$.</p>
            
            <h3>Por que g não é negativo?<h3>
            <p>A aceleração da gravidade $/{a}_{g}$ é negativa (considerando que você escolheu para baixo como a direção negativa), mas a letra g é normalmente usada para representar a magnitude da aceleração da gravidade. Em outras palavras,</p>
            
            $$g = |a_g|= | - 9,8 m/s^2 |= + 9,8 m/s^2 = \\text{magnitude da aceleração da gravidade}$$
            
            $$a_g= - 9,8 m/s^2 = \\text{magnitude da aceleração da gravidade}$$
            
            <img src="http://beto.abelha.network/static/img/mod_05_img_01.png">
            
            <p>Essa força da gravidade $F_g=m.g$ (ou "peso") é exercida pela Terra em todos os objetos, independentemente da forma como eles estão se movendo, e de que outras forças são exercidas sobre eles. Em outras palavras, haverá uma força gravitacional de magnitude m.g exercida para baixo em todos os objetos próximos da Terra, estejam eles caindo, voando com uma dada angulação, em repouso sobre uma mesa, ou acelerando para cima em um elevador. Pode haver outras forças que contribuem para a aceleração do objeto, mas a força da gravidade está sempre presente.</p>
            
            <h3>E se formos para o espaço?</h3>
            
            <p>A força da gravidade em um objeto fica cada vez menor quanto mais longe um objeto estiver da Terra. Contudo, a força da gravidade vai muito além da atmosfera terrestre. Por exemplo, na posição da Estação Espacial Internacional, a terra causa aceleração da gravidade de magnitude $g = 8,7 m/s^2$. Esse valor é menor que o valor de g na superfície da Terra, mas não tão pequeno quanto as pessoas pensam. Os astronautas na Estação Espacial Internacional experimentam uma ausência de peso não porque não há força da gravidade, mas porque eles estão em uma órbita em queda livre ao redor da Terra.
            <img src="http://beto.abelha.network/static/img/mod_05_img_02.png"></p>
             
            <p>A força da gravidade exercida pela Terra tem alcance infinito (isto é, puxa coisas que estão infinitamente distantes), mas a força fica cada vez menor quanto maior a distância entre um objeto e a Terra.</p>
            
            <h3>O peso é diferente da massa?</h3>
            <p>Sim, o peso é diferente da massa. O peso P é a força da gravidade $F_g$ exercida em um objeto. A massa m é uma medida da inércia do objeto (isto é, o quanto ele resiste a variações em sua velocidade). Elas estão relacionadas porque massas maiores têm pesos maiores, já que P = m.g. Por exemplo, uma massa e 2Kg terá um peso de magnitude $P = (2Kg).(9,8 m/s^2)=19,6N$.</p>
            
            <p>O peso de um objeto vai variar se o objeto for levado para longe da Terra, ou colocado em um planeta diferente, já que a força da gravidade sobre o objeto será menor. Contudo, a massa do objeto será a mesma, não importa onde o objeto esteja, seja na Terra, no espaço ou na Lua.</p> 
            
            <p>Muitas pessoas confundem massa com peso. Tenha em mente que a unidade da massa é o Kg, mas como o peso é uma força, sua unidade é N.</p> 
            `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
<h2>Exemplo 1: O Peso do Avião</h2>

<p>Um avião de massa 4.500Kg  está decolando, voando pelo ar e acelerando para a frente e para cima. Há uma força de empuxo de 6.700N  no avião na direção do movimento e uma força de resistência do ar de 4.300N.
<img src="http://beto.abelha.network/static/img/mod_05_ex_img_01.png"></p>

<h3>Qual é a força da gravidade sobre o avião durante a decolagem?</h3>

<p>A força da gravidade nunca é maior ou menor que m.g, independentemente de quaisquer outras forças ou acelerações envolvidas. Então, podemos calcular a força da gravidade no avião (isto é, o peso) simplesmente usando:</p>

<p>$F_g=m.g$ (use a fórmula para o peso)<br>
$F_g=(4.500Kg).(9,8m/s^2)) ( insira os valores para a massa e para gravidade)<br>
$F_g=44.100N$ (calcule e comemore)</p>

<h2>Exemplo 2: Calculando a massa</h2>

<p>Um elefante da floresta africana tem um peso de 25.000 N.
<img src="http://beto.abelha.network/static/img/mod_05_ex_img_02.png"></p>
 
<h3>Qual é a massa do elefante da floresta africana?</h3>

<p>O peso é outro nome para a força da gravidade \\mathbit{m}.\\mathbit{g}. Podemos calcular a massa usando a fórmula
 $$P=F_g= m.g$$</p>

<p>F_g=m.g (use a fórmula para o peso)<br>

$25.000N=m.9,8m/s^2$ (insira os valores para o peso e para gravidade)<br>

$m=\\frac{25.000N}{9,8m/s^2}$ (calcule a massa m)<br>

$m=2.551Kg $ (calcule e comemore)</p>

<p>Lembre-se: A força peso é sempre VERTICAL PARA BAIXO em relação a terra. <img src="http://beto.abelha.network/static/img/mod_05_ex_img_03.png"></p>

<p>Muitas pessoas confundem massa com peso. Tenha em mente que a unidade da massa é o Kg, mas como o peso é uma força, sua unidade é N.
<img src="http://beto.abelha.network/static/img/mod_05_ex_img_04.png"></p>
            `
        },
        questoes: [{
          texto: 'Quando o astronauta Neil Armstrong desceu do módulo lunar e pisou na Lua, em 20 de julho de 1969, a sua massa total, incluindo seu corpo, trajes especiais e equipamento de sobrevivência, era de aproximadamente 300 kg. O campo gravitacional lunar é cerca de 1/6 do campo gravitacional terrestre. Se a aceleração da gravidade na Terra é aproximadamente 10,0 m/s^2, podemos afirmar que:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'A massa total de Armstrong na Lua é de 300kg e seu peso é 500N',
              correta: true,
              selecionada: false
            }, {
              texto: 'A massa total de Armstrong na Terra é de 50,0 kg e seu peso é 3000N',
              correta: false,
              selecionada: false
            }, {
              texto: 'A massa total de Armstrong na Terra é de 300 kg e seu peso é 500N.',
              correta: false,
              selecionada: false
            }, {
              texto: 'A massa total de Armstrong na Lua é de 50,0 kg e seu peso é 3000N.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Sobre a superfície da Terra, onde g = 10 m/s^2, um astronauta apresenta peso igual a 700 N. Em uma expedição à Lua, onde g = 1,6 m/s^2, a massa desse astronauta será igual a:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '70 kg e ele pesará 112N.',
              correta: true,
              selecionada: false
            }, {
              texto: '70 kg e ele pesará 700N.',
              correta: false,
              selecionada: false
            }, {
              texto: '112 kg e ele pesará 700N.',
              correta: false,
              selecionada: false
            }, {
              texto: '112 kg e ele pesará 112N.',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Um objeto que pesa 650 N na Terra tem peso igual a 1625 N em Júpiter. Determine a gravidade desse planeta, em m/s^2, sabendo que a gravidade da Terra é de $10 m/s^2$.',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '15',
              correta: false,
              selecionada: false
            }, {
              texto: '22',
              correta: false,
              selecionada: false
            }, {
              texto: '25',
              correta: true,
              selecionada: false
            },
            {
              texto: '28',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Leia as seguintes afirmações a respeito da força peso.<br>' +
          'I- A força peso tem direção vertical e sentido para cima.<br>' +
          'II – O peso é definido como o produto da massa do corpo pelo valor da aceleração da gravidade e sempre é medido, de acordo com o Sistema Internacional de Unidades, em newtons (N).<br>' +
          'III – A unidade kgf (quilograma-força) não pode ser utilizada para determinar o peso de um corpo.<br>' +
          'IV – A força normal, de acordo com a Terceira Lei de Newton, é uma reação à força peso.<br>' +
          'Está correta a alternativa que apresenta:<br>',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'I e IV',
              correta: false,
              selecionada: false
            }, {
              texto: 'I, II e IV',
              correta: false,
              selecionada: false
            }, {
              texto: 'II',
              correta: true,
              selecionada: false
            },
            {
              texto: 'III e IV',
              correta: false,
              selecionada: false
            }
          ]
        }, {
          texto: 'Qual o peso de uma pessoa de 70 Kg na lua? Considere que a gravidade na lua é de 1,6m/s^2.',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '160N',
              correta: false,
              selecionada: false
            }, {
              texto: '150N',
              correta: false,
              selecionada: false
            }, {
              texto: '112N',
              correta: true,
              selecionada: false
            },
            {
              texto: '100N',
              correta: false,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: 'Força normal',
        cover: 'http://beto.abelha.network/static/img/capas/06.jpg',
        videoId: 'TfC4svFp6Vg',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            ` <h3>Força Normal</h3>
              
              <p>Já fez uma curva rápido demais e deu de cara com uma parede? Eu já. Isso dói e faz eu me sentir um bobo. Podemos culpar a força normal pela dor que sentimos quando trombamos com objetos sólidos. A força normal é a força que as superfícies exercem para evitar que objetos sólidos atravessem uns aos outros.</p>
              <p>A força normal é uma força de contato. Se duas superfícies não estão em contato, elas não podem exercer uma força normal uma sobre a outra. Por exemplo, as superfícies de uma mesa e de uma caixa não podem exercer forças normais uma na outra se elas não estiverem em contato. 
              <img src="http://beto.abelha.network/static/img/mod_06_img_01.png"></p>
               
              <p>Contudo, quando duas superfícies estão em contato (por exemplo, uma caixa e uma mesa) elas exercem uma força normal uma na outra, perpendicular às superfícies de contato. Essa força normal será tão grande quanto necessário para evitar que as superfícies penetrem uma na outra.
              <img src="http://beto.abelha.network/static/img/mod_06_img_02.png"></p>
              
              <p>O mecanismo pelo qual a mesa exerce uma força normal é semelhante ao de uma mola comprimida que exerce uma força. Quando um peso é colocado sobre uma mesa, a superfície se deforma suavemente e tem sua forma alterada (normalmente isso é imperceptível, a menos que o peso seja muito grande) e há uma força restauradora que tenta restaurar a mesa à sua forma natural e não comprimida (isto é, a forma quando não há peso algum em cima). Chamamos essa força que a mesa exerce para restaurar a si mesma de força normal. Se você fizer força suficiente sobre a mesa, a grande deformação é capaz de quebrá-la.</p>
              <p>Claro, a caixa também seria comprimida suavemente e tentaria se restaurar para sua forma natural.</p>
              <p>As deformações reais dos objetos em contato sob condições normais (não extremas) são normalmente minúsculas, então qualquer alteração na forma ou no volume quase sempre pode ser ignorada em um dado problema.</p>
              <p>A palavra "normal" em força normal não quer dizer corriqueira ou comum. O "normal" aqui se refere a perpendicular. Isso porque a força normal, normalmente representada por FN, ou apenas N, é uma força direcionada perpendicularmente às duas superfícies em contato. Faz sentido que a força seja perpendicular à superfície porque a força normal é o que evita que objetos sólidos atravessem uns os outros. As superfícies também podem exercer forças de contato na direção paralela às superfícies, mas normalmente chamamos essas forças de forças de atrito (já que elas trabalham para evitar que as superfícies deslizem uma sobre a outra) ao invés de chamá-las de forças normais.</p>
              
              <h3>Como superfícies inanimadas "sabem" exercer uma força normal?</h3>
              
              <p>Faz sentido para a maioria das pessoas que uma pessoa teria que exercer uma força para cima com suas mãos ao carregar um pacote pesado de ração, como visto na Figura (a) abaixo.</p>
              <p>Mas algumas pessoas acham que é difícil de acreditar que um objeto inanimado, como uma mesa, possa exercer uma força normal ascendente sobre um saco de ração de cachorro como pode ser visto na Figura  (b) abaixo. Às vezes as pessoas acreditam que a mesa não está de fato exercendo uma força para cima, mas simplesmente "ficando no caminho" da comida de cachorro que está caindo. Mas não é assim que as leis de Newton funcionam. Se houvesse apenas uma força descendente da gravidade sobre o pacote de ração este teria que acelerar para baixo. A mesa deve fazer mais do que "ficar no caminho". A mesa deve exercer uma força para cima para evitar que o pacote de ração a atravesse.</p>
              
              <p>Estranhamente, se um objeto pesado for colocado sobre uma mesa, esta deve exercer mais força normal para evitar que o peso a atravesse. Como a mesa sabe exercer apenas a quantidade certa de força para evitar que o objeto a atravesse?</p>
              <p>Basicamente, a mesa "sabe" quanta força precisa ser exercida com base em quanto a superfície/objeto está sendo comprimido ou deformado. Quando objetos sólidos se deformam, eles normalmente tentam se restaurar e "voltar" à sua forma natural. Quanto maior o peso, maior a deformação, e maior é a força restauradora que tenta fazer a superfície voltar a sua forma natural. Essa deformação seria perceptível se a carga fosse colocada em uma mesa, mas até mesmo objetos rígidos se deformam quando uma força é aplicada a eles. A menos que o objeto seja deformado além do seu limite, ele vai exercer uma força restauradora bem parecida com a de uma mola deformada (ou um trampolim, ou uma cama elástica). Então, quando a carga é colocada sobre a mesa, a mesa cede até que a força restauradora se torne tão grande quanto o peso da carga. Nesse ponto a força resultante externa na carga é zero. Essa é a situação na qual a carga está em repouso sobre a mesa. A mesa cede rapidamente, e a depressão é leve, então normalmente não a percebemos.
              <img src="http://beto.abelha.network/static/img/mod_06_img_03.png"></p>
              
               
              <p>Figura: (a) A pessoa segurando o pacote de ração deve exercer uma força para cima $F_{mão}$ igual em magnitude e na direção oposta ao peso do pacote de ração  $W$,   (b) A mesa cede quando o pacote de ração é colocado sobre ela, como um trampolim rígido. As forças de restauração elástica na mesa aumentam conforme ela cede, até que exerçam uma força normal $N$ ou $F_n$  de igual magnitude e direção oposta ao peso da carga.</p>
              
              <h3>Como se calcula a força normal?</h3>
              
              <p>Não existe, na verdade, uma fórmula criada especificamente para calcular a força normal. Para encontrar a força normal, normalmente usamos o fato de que sabemos algo sobre a aceleração perpendicular às superfícies (já que consideramos que as superfícies não podem atravessar uma a outra). Portanto, quase sempre usamos a segunda lei de Newton para calcular a força normal usando essa estratégia.</p>
              
                <ul>
                  <li>Desenhe um diagrama de forças mostrando todas as forças agindo no objeto em questão.</li>
                  <li>Escolha a direção para a segunda lei de Newton na mesma direção da força normal (isto é, perpendicular às superfícies de contato)</li>
                  <li>Insira a aceleração, a massa e as forças atuantes na segunda lei de Newton $a =\\frac{\\sum F}{m}$ para essa direção.</li>
                  <li>Calcule a força normal  $F_n$.</li>
                </ul>
              
              <p>Essencialmente, estamos calculando a força normal considerando que ela será tão grande ou tão pequena quanto necessário para evitar que as superfícies penetrem uma na outra.</p>
              
              <p>Vamos aplicar essa estratégia ao exemplo simples a seguir. Considere o caso simples de uma caixa de massa m que está em repouso sobre uma mesa, como mostrado abaixo. 
              <img src="http://beto.abelha.network/static/img/mod_06_img_04.png"></p>
              
               
              <p>Seguindo o procedimento, obtemos<br>
              
              $a_y = \\frac{\\sum F_y}{m}$  (use a segunda lei de Newton para a direção vertical, porque $F_n$ é vertical)<br>
              
              $0=\\frac{F_n-F_g}{m}$ (insira a aceleração vertical e as forças verticais)</p>
              
              <h3>Por que a aceleração vertical não é -9,8?</h3>
              <p>Cuidado, os objetos em queda livre têm uma aceleração vertical de $a_y = 9,8m/s^2$, mas uma caixa em repouso sobre uma mesa não tem aceleração (isto é, $a_y=0$).</p>
              
              <p>$F_n = F_g$  (calcule a força normal)<br>
              $F_n = m.g$  (use o fato de que $F_g = m.g$)</p>
              
              <p>Nesse caso simples de um objeto sobre uma superfície horizontal, a força normal será igual à força da gravidade $F_n = m.g$</p>  
              
              <h3>E se a caixa estivesse deslizando sobre a mesa?</h3>
              <p>Nada mudaria em nossos cálculos e a força normal continuaria sendo $F_n = m.g$. O fato de haver ou não um movimento horizontal não afeta as forças ou a aceleração na direção vertical.</p>
              <p>Agora, se adicionássemos uma aceleração vertical ou forças verticais, isso poderia afetar nossos cálculos acima e a força normal não seria necessariamente $F_n = m.g$.</p>
              
              <p>A força normal nem sempre será igual a $m.g$.  Se considerarmos um caso mais complicado, no qual a superfície de contato não é horizontal, ou em que haja forças verticais adicionais presentes, ou ainda, em que haja aceleração vertical, a força normal não será necessariamente igual a $m.g . Contudo, mesmo em um caso mais complicado, ainda podemos calcular a força normal usando o processo mostrado acima. Podemos inserir uma aceleração diferente, ou pode haver mais forças para incluir, mas a estratégia geral para resolver o problema de calcular a força normal usando a segunda lei de Newton seria o mesmo.</p>
              `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
            <h2>Exemplo 1: Força normal em um elevador</h2>
            <p>Um pacote de gomas de mascar sabor kiwi de $4,5Kg$ está sendo entregue no último andar de um prédio comercial. A caixa está no chão de um elevador, que acelera para cima com uma aceleração de magnitude de $a=3,0m/s^2. O entregador também está com um pé sobre a caixa, exercendo no pacote uma força para baixo de magnitude de $5N$.</p>
            
            <h3>Qual é a força normal exercida pelo chão do elevador no pacote?</h3>
            
            <p>Primeiro desenhamos um diagrama de forças mostrando todas as forças que agem no pacote (não incluímos a aceleração no diagrama porque a aceleração não é uma força. Além disso, não incluímos uma força de elevador adicional porque a força normal é a força exercida na caixa pelo elevador).
            <img src="http://beto.abelha.network/static/img/mod_06_ex_img_01.png"></p>
            
            <p>$a_y=\\frac{\\sum F_y}{m}$ (usamos a segunda lei de Newton para a direção vertical)</p>
            
            <p>$3,0m/s^2 = frac{F_n-F_g-5N}{m} (insira a aceleração vertical, a massa e as forças verticais)</p>
            
            <p>$13,5N= F_n-m.g-5N$ (use $F_n = m.g$, e multiplique os dois lados pela massa $4,5Kg$)</p>
            
            <p>$13,5N = F_n - 4,5Kg.9,8m/s^2-5N$  (insira os valores para a massa m e g)</p>
            
            <p>$F_n=62,6N$ (comemore)</p>
            
            <p>Observe que, se tivéssemos inocentemente usado $F_n=m.g=44, 1N$, teríamos encontrado a resposta errada. A força normal aqui é diferente de $g$ porque havia uma aceleração vertical e uma força vertical adicional.</p>
            
            <h2>Exemplo 2: Força normal com força diagonal</h2>
            <p>Uma pessoa está empurrando uma caixa de cookies de chocolate com menta de usado $1kg$ em uma mesa sem atrito com uma força diagonal para baixo de usado $F_A=10N$, com um ângulo de \\theta=30^0 , como mostrado abaixo.</p>
            
            
            <h3>Qual é a força normal exercida pela mesa na caixa de cookies?<h3>
            
            <img src="http://beto.abelha.network/static/img/mod_06_ex_img_02.png">
             
            <p>Mesmo que esse pareça um tipo diferente de problema, o abordamos com a mesma estratégia de antes. Primeiro desenhamos um diagrama de forças de todas as forças agindo sobre a caixa.[img3]</p>
              
            <h3>Por que não desenhamos as forças na direção do ponto?</h3>
            <p>A convenção típica para desenhar diagramas de forças (isto é, diagramas de corpo livre) é desenhar todas as forças emanando do centro do ponto (o qual representa o objeto em questão) e não direcionadas para o ponto.
            <img src="http://beto.abelha.network/static/img/mod_06_ex_img_03.png"></p>
            
            <p>$F_Ay=\\frac{\\sum F_y}{m}$ (Agora, usamos a segunda lei de Newton para a direção vertical porque F_n é vertical)<br>
            $0=\\frac{F_n-F_g-10N.\\sen 30^0}{1kg}$ (insira a aceleração vertical, a massa e as forças verticais)</p>
            
            <h3>De onde veio o termo $10N.\\sen 30°$, e por que ele é negativo?</h3>
            <p>Precisamos decompor a força diagonal em componentes vertical e horizontal, como mostrado abaixo. 
            <img src="http://beto.abelha.network/static/img/mod_06_ex_img_04.png"></p>
             
            <p>A componente vertical pode ser encontrada usando trigonometria e a definição de $\\sen$, <br>
            $\\sen 30^0=\\frac{oposto}{hipotenusa}=\\frac{F_Ay}{F_A}$<br>
            $\\sen 30^0=\\frac{F_Ay}{10N}$<br>
            $F_Ay = 10N.(sen30^0)$</p>
            
            <p>Observe também que essa componente vertical F_Ay está direcionada para baixo, e é por isso que a incluímos como um termo negativo na segunda lei de Newton para a direção vertical.</p>
            
            <p>$F_n=F_g+10N.\\sen30^0$  (calcule algebricamente o $F_n$)<br>
            $F_n=m.g+10N.sen30^0$  (use $F_g=m.g$)<br>
            $F_n=1kg.9,8m/s^2 + 10N.\\sen30^0=14,8N$ (calcule comemore)</p>
            
            <p>Lembre-se: A decomposição da força norma é sempre perpendicular a superfície de apoio. 
            <img src="http://beto.abelha.network/static/img/mod_06_ex_img_05.png"></p>
            `
        },
        questoes: [{
          texto: 'Vamos supor que você esteja em um supermercado, aguardando a pesagem de uma quantidade de maçãs em uma balança de molas cuja unidade de medida é o quilograma-força.\n' +
          'A leitura da balança corresponde:',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: 'ao módulo da força normal, pois essa é a força de interação entre as maçãs e a balança, cujo valor é supostamente igual ao do módulo do peso das maçãs.',
              correta: true,
              selecionada: false
            }, {
              texto: 'tanto ao valor do módulo da força peso quanto ao do módulo da força normal, pois ambas constituem um par ação-reação, segundo a terceira lei de Newton.',
              correta: false,
              selecionada: false
            }, {
              texto: 'ao módulo do peso das maçãs, pois essa é a força de interação entre as maçãs e a balança.',
              correta: false,
              selecionada: false
            }, {
              texto: 'ao módulo da força resultante sobre as maçãs.',
              correta: false,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: 'Força elástica',
        cover: 'http://beto.abelha.network/static/img/capas/07.jpg',
        videoId: 'oE5ICFXuvn8',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            ` `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
            `
        },
        questoes: [{
          texto: '',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: 'Força de tração',
        cover: 'http://beto.abelha.network/static/img/capas/08.jpg',
        videoId: 'tfD7v4Nz4CY',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            ` `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
            `
        },
        questoes: [{
          texto: '',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: 'Força de atrito',
        cover: 'http://beto.abelha.network/static/img/capas/09.jpg',
        videoId: 'gHe26-eI4fc',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            ` `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
            `
        },
        questoes: [{
          texto: '',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            }
          ]
        }]
      },

      /* ---------- */
      {
        titulo: 'Força centrípeta',
        cover: 'http://beto.abelha.network/static/img/capas/10.jpg',
        videoId: 'ArHh_7kSv4M',
        habilitado: false,
        videoWatched: false,
        answered: false,
        xps: 0,
        teoria: {
          timeRead: 10,
          texto:
            ` `
        },
        exemplos: {
          timeRead: 3,
          texto:
            `
            `
        },
        questoes: [{
          texto: '',
          respondiada: false,
          pontuacao: 200,
          alternativas: [
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            },
            {
              texto: '',
              correta: true,
              selecionada: false
            }
          ]
        }]
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
    if (target >= this.modulos.length - 1) return
    const modulo = this.modulos[target]
    if (modulo.answered && modulo.teoriaRead) {
      this.modulos[target + 1].habilitado = true
    }
  }
}
