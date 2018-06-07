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
      }, {
        titulo: '2ª Lei de Newton ou princípio fundamental da dinâmica',
        cover: 'http://beto.abelha.network/static/img/2_lei.jpg',
        videoId: 'ZQPO9-LGoAU',
        habilitado: true,
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
          texto: 'Em um acidente, um carro de 1200 kg e velocidade de 162 Km/h chocou-se com um muro e gastou 0,3 s para parar. Marque a alternativa que indica a comparação correta entre o peso do carro e a força, considerada constante, que atua sobre o veículo em virtude da colisão.\n' +
          'ADOTE: g = 10m/s2\n',
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
