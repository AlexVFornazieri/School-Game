<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'Teoria'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>1ª Fase - Vídeo aula</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <br> <br>
      <section id="video">
        <v-alert
          :color="color"
          icon="check_circle"
          :value="true"
          v-if="Boolean(message)"
          v-html="message"
        >
        </v-alert>
        <youtube
          ref="youtube"
          width="100%"
          heigth="auto"
          :video-id="videoId"
          @playing="playing"
          @ended="ended"
        />
        <div class="text-xs-center">
          <v-btn large color="success">
            Exercícios
            <v-icon right>arrow_forward</v-icon>
          </v-btn>
        </div>
      </section>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        videoId: 'lpe7mT2LSuY',
        message: '',
        color: ''
      }
    },
    methods: {
      playing () {
        this.color = 'success'
        this.message = '<span>Assista o vídeo até o fim <b>e ganhe um bonus!</b></span>'
      },
      ended () {
        this.$bus.$emit('add-score', 10)
        this.message = ''
      }
    }
  }
</script>

<style>
  #video iframe {
    height: auto !important;
  }
</style>
