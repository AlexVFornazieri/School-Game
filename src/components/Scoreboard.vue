<template>
  <v-snackbar
    :timeout="timeout"
    :color="color"
    top right vertical
    multi-line
    v-model="snackbar">
    <span class="emoticon">
      <v-icon dark>{{icon}}</v-icon>
    </span>
    <span v-html="message"></span>
    <v-btn dark flat @click.native="snackbar = false">OK</v-btn>
  </v-snackbar>
</template>

<style scoped>
  .emoticon {
    position: absolute;
    bottom: -25px;
    font-size: 6rem;
  }
</style>

<script>
  export default {
    data () {
      return {
        timeout: 5000,
        color: '',
        message: '',
        icon: '',
        snackbar: false
      }
    },
    mounted () {
      this.$bus.$on('add-score', (score, target) => {
        if (score === 0) return
        this.$service.addScore(score, target)
        if (score >= 0) {
          this.color = 'success'
          this.icon = 'fa-smile'
          this.message = `<b>Parabéns!</b> + ${score} pontos.`
        } else {
          console.log(score)
          this.color = 'danger'
          this.icon = 'fa-frown'
          this.message = `<b>Ah não!</b> - ${score} pontos.`
        }
        this.$nextTick(() => {
          this.snackbar = true
        })
      })

      this.$bus.$on('show-message', (message, color) => {
        this.message = message
        this.color = color
        if (color === 'error') this.icon = 'fa-frown'
        else if (color === 'success') this.icon = 'fa-smile'
        else this.icon = ''
        this.$nextTick(() => {
          this.snackbar = true
        })
      })
    }
  }
</script>

<style scoped>

</style>
