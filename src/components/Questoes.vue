<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'BackHome', params: {last: parseInt(id)}}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{parseInt(id) + 1}}ª Fase - Questionário</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <br><br><br>
    <v-container>
      <section id="questoes">
        <div class="questao">
          <div class="pergunta" v-html="pergunta.texto">
            <div class="valor">Valendo: <span>{{pergunta.pontuacao}}</span> pontos.</div>
          </div>

          <a class="alternativa"
             :class="alternativa.selecionada ? (alternativa.correta ? 'correta' : 'error') : (pergunta.respondiada ? 'disabled':'')"
             v-for="(alternativa, index) in pergunta.alternativas"
             @click="check(index)">
            <span class="letra">{{letras[index]}}</span>
            <span class="texto" v-html="alternativa.texto"></span>
          </a>
        </div>
      </section>
      <v-footer fixed>
        <v-btn flat :disabled="isFirstQuestion" @click="back">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-btn flat @click.native="next()" :disabled="isLastQuestion">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
        <v-btn flat @click.native="done()" :color="allAnswered ? 'success':'error'">
          Finalizar
        </v-btn>
      </v-footer>
    </v-container>
  </v-content>
</template>

<style>
  #questoes img {
    width: 100%;
  }

  .alternativa {
    display: block;
    padding: 10px;
    color: #004d40;
  }

  .alternativa.errada {
    background-color: #efc0b2;
  }

  .alternativa.correta {
    background-color: #00e676;
  }

  .alternativa.disabled {
    opacity: 0.5;
  }

  .valor {
    font-size: 1rem;
    background-color: #00bcd4;
    display: inline;
    padding: 5px;
    border-radius: 5px;
  }

  .valor span {
    font-weight: bold;
  }

  .pergunta {
    font-size: 2rem;
  }

  #questoes {
    margin-bottom: 2em;
  }

  .alternativa .letra {
    font-weight: bold;
    font-size: 2rem;
    padding-right: 10px;
  }
</style>


<script>
  /* eslint-disable no-undef */

  export default {
    props: ['id'],
    data () {
      return {
        total: 0,
        letras: ['A', 'B', 'C', 'D', 'E'],
        pergunta: {},
        questoes: [],
        respondidas: 0,
        index: 0
      }
    },
    mounted () {
      this.questoes = this.$service.getQuestoes(this.id)
      this.pergunta = this.questoes[0]
      this.$nextTick(() => {
        this.change()
      })
    },
    methods: {
      check (index) {
        const alternativa = this.pergunta.alternativas[index]
        if (this.pergunta.respondiada) {
          const message = 'Essa pergunta já foi respondida.'
          this.$bus.$emit('show-message', message, 'info')
        } else if (alternativa.selecionada) {
          const message = 'Essa resposta já foi selecionada.'
          this.$bus.$emit('show-message', message, 'info')
        } else {
          alternativa.selecionada = true
          if (!alternativa.correta) {
            this.pergunta.pontuacao -= 50
            const message = 'Oh no! Resposta errada (-50 pontos).'
            this.$bus.$emit('show-message', message, 'error')
          } else {
            this.pergunta.respondiada = true
            this.total += this.pergunta.pontuacao
            const message = `Muito bem! Respota correta (+${this.pergunta.pontuacao} pontos).`
            this.$service.addScore(this.pergunta.pontuacao, this.id)
            this.$bus.$emit('show-message', message, 'success')
            this.respondidas += 1
          }
        }
      },

      back () {
        if (!this.isFirstQuestion) {
          this.index -= 1
          this.pergunta = this.questoes[this.index]
          this.$nextTick(this.change)
        }
      },
      next () {
        this.index += 1
        this.pergunta = this.questoes[this.index]
        this.$nextTick(this.change)
      },
      done () {
        if (!this.allAnswered) {
          const message = `Ah questões não respondidas, use as setas para verificar.`
          this.$bus.$emit('show-message', message, 'info')
          return
        }

        if (!this.$service.getAnswered(this.id)) {
          const message = `Questionário concluído, ${this.total} pontos acumulados.`
          this.$bus.$emit('show-message', message, 'info')
          if (this.$service.setAnswered(this.id)) {}
          setTimeout(() => {
            const message = `Muito bem! Próxima fase foi desbloqueada.`
            this.$bus.$emit('show-message', message, 'success')
          }, 3000)
        }
        this.$router.push({name: 'BackHome', params: {last: parseInt(this.id)}})
      },
      change () {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'editor-output'])
        this.$vuetify.goTo(0)
      }
    },
    computed: {
      allAnswered () {
        return this.respondidas === this.questoes.length
      },

      isLastQuestion () {
        return this.questoes.length - 1 === this.index
      },

      isFirstQuestion () {
        return this.index === 0
      }
    }
  }
</script>
