<template>
  <v-snackbar
    :timeout="timeout"
    :color="color"
    top right vertical
    multi-line
    v-model="snackbar">
    <span v-html="message"></span>
    <v-btn dark flat @click.native="snackbar = false">OK</v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    data () {
      return {
        timeout: 3000,
        color: '',
        message: '',
        snackbar: false
      }
    },
    mounted () {
      this.$bus.$on('add-score', (score, target) => {
        if (score === 0) return
        this.$service.addScore(score, target)
        if (score >= 0) {
          this.color = 'success'
          this.message = `<b>Parabéns!</b> + ${score} pontos.`
        } else {
          console.log(score)
          this.color = 'danger'
          this.message = `<b>Ah não!</b> - ${score} pontos.`
        }
        this.snackbar = true
      })

      this.$bus.$on('show-message', (message, color) => {
        this.message = message
        this.color = color
        this.snackbar = true
      })
    }
  }
</script>

<style scoped>

</style>
