<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'Home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>1ª Fase - Vídeo aula</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <br><br>
    <v-container>
      <section id="video">
        <youtube
          ref="youtube"
          width="100%"
          heigth="auto"
          :video-id="videoId"
          @playing="playing"
          @ended="ended"
        />
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
        played: false,
        color: '',
        timePlaying: 0
      }
    },
    methods: {
      playing (player) {
        console.log(player)
        if (!this.played) {
          const message = '<span>Assista o vídeo até o fim <b>e ganhe um bonus!</b></span>'
          this.$bus.$emit('show-message', message, 'info')
          this.played = true
        }
        const interval = setInterval(() => {
          this.timePlaying += 1
        }, 1000)
      },
      ended () {
        if (!this.$service.getVideoWatched(0)) {
          this.$service.setVideoWatched(0)
          this.$bus.$emit('add-score', 10, 0)
        }
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>
