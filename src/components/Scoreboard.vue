<template>
  <v-snackbar
    :timeout="timeout"
    :color="color"
    bottom right vertical
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
        timeout: 6000,
        color: '',
        message: '',
        snackbar: false,
        score: 0
      }
    },
    mounted () {
      this.$bus.$on('add-score', (score) => {
        if (score === 0) return
        this.score += score
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
    }
  }
</script>

<style scoped>

</style>
