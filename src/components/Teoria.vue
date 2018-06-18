<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'Home'}" @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{parseInt(id) + 1}}ª Fase - Teoria</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <section id="teoria" v-html="texto"></section>

    </v-container>
  </v-content>
</template>

<style>
  #teoria {
    margin-top: 5em;
  }

  #teoria img {
    width: 100%;
  }
</style>

<script>
  /* eslint-disable no-undef */

  export default {
    props: ['id'],
    data () {
      return {
        texto: this.$service.getTeoria(this.id).texto
      }
    },
    mounted () {
      const self = this
      window.addEventListener('hashchange', function () {
        console.log('Hash changed to', window.location.hash)
        self.exit()
      })
      this.$vuetify.goTo(0)
      this.$timer = setTimeout(() => {
        if (!this.$service.getTeoriaRead(this.id)) {
          this.$service.setTeoriaRead(this.id)
          this.$bus.$emit('add-score', 50, 0)
        }
      }, this.$service.getTeoria(this.id).timeRead * 1000)

      this.$nextTick(function () {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'editor-output'])
      })
    },
    methods: {
      exit () {
        clearTimeout(this.$timer)
      }
    }
  }
</script>
