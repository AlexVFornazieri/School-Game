<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'BackHome', params: {last: parseInt(id)}}" @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{id + 1}}ª Fase - Vídeo aula</v-toolbar-title>
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
          @paused="paused"
          @ended="ended"
        />
      </section>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    props: ['id'],
    data () {
      return {
        videoId: this.$service.getVideoId(this.id),
        message: '',
        played: false,
        color: '',
        timePlaying: 0
      }
    },
    mounted () {
      const self = this
      window.addEventListener('hashchange', function () {
        console.log('Hash changed to', window.location.hash)
        self.exit()
      })
    },
    methods: {
      playing (player) {
        if (!this.played) {
          const message = '<span>Assista o vídeo até o fim <b>e ganhe um bonus!</b></span>'
          this.$bus.$emit('show-message', message, 'info')
          this.played = true
        }
        this.interval = setInterval(() => {
          this.timePlaying += 1
        }, 1000)
      },
      exit () {
        clearInterval(this.interval)
      },
      paused () {
        clearInterval(this.interval)
      },
      ended (player) {
        clearInterval(this.interval)
        if (!this.$service.getVideoWatched(this.id)) {
          this.$service.setVideoWatched(this.id)
          if (player.getDuration() * 0.98 > this.timePlaying) {
            const message = 'Oh no! Você não assistiu ao vídeo por completo, ficará sem bonus.'
            this.$bus.$emit('show-message', message, 'error')
          } else {
            this.$bus.$emit('add-score', 10, this.id)
          }
        }
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>
