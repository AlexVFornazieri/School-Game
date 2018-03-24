<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'Home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>1ª Fase - Questionário</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <br><br>
    <v-container>
      <section id="questoes">
        <div class="questao">
          <div class="pergunta">{{pergunta.texto}}
            <div class="valor">Valendo: <span>{{pergunta.pontuacao}}</span> pontos.</div>
          </div>

          <a class="alternativa"
             :class="alternativa.selecionada ? (alternativa.correta ? 'correta' : 'error') : (pergunta.respondiada ? 'disabled':'')"
             v-for="(alternativa, index) in pergunta.alternativas"
             @click="check(index)">
            <span class="letra">{{letras[index]}}</span>
            <span class="texto">{{alternativa.texto}}</span>
          </a>
        </div>
      </section>
      <v-footer fixed>
        <v-btn flat :disabled="isFirstQuestion" @click="back">
          <v-icon left>arrow_back</v-icon>
          Anterior
        </v-btn>
        <v-spacer/>
        <v-btn flat @click.native="next()" :color="isLastQuestion ? 'error':''">
          {{isLastQuestion ? 'Finalizar':'Proxima'}}
          <v-icon right>arrow_forward</v-icon>
        </v-btn>
      </v-footer>
    </v-container>
  </v-content>
</template>

<style>
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

  .alternativa .letra {
    float: left;
    font-weight: bold;
    font-size: 2rem;
    padding-right: 10px;
  }
</style>


<script>
  export default {
    data () {
      return {
        total: 0,
        letras: ['A', 'B', 'C', 'D', 'E'],
        pergunta: {},
        questoes: [],
        index: 0
      }
    },
    mounted () {
      this.questoes = this.$service.getQuestoes(0)
      this.pergunta = this.questoes[0]
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
            this.$service.addScore(this.pergunta.pontuacao, 0)
            this.$bus.$emit('show-message', message, 'success')
          }
        }
      },

      back () {
        if (!this.isFirstQuestion) {
          this.index -= 1
          this.pergunta = this.questoes[this.index]
        }
      },
      next () {
        if (!this.isLastQuestion) {
          this.index += 1
          this.pergunta = this.questoes[this.index]
        } else {
          const message = `Questionário concluído, ${this.total} pontos acumulados.`
          this.$bus.$emit('show-message', message, 'info')
          this.$service.setAnswered(0)
          this.$router.push({name: 'Home'})
        }
      }
    },
    computed: {
      isLastQuestion () {
        return this.questoes.length - 1 === this.index
      },

      isFirstQuestion () {
        return this.index === 0
      }
    }
  }
</script>
