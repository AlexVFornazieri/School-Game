<template>
  <v-layout row justify-center>
    <v-dialog v-model="isOpen" max-width="400px">
      <v-card>
        <v-toolbar color="primary" dark card prominent>
          <v-toolbar-title>Parabéns</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="text-xs-center">
          <p>Você concluí todos os modúlos!</p>
          <div>
            <span class="points">{{total}}</span>
            <br>
            <span>Pontos acumulados</span>
          </div>
          <!-- <p>Tempo: <b>{{timing}} min.</b></p> !-->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click.native="reload"
            :loading="loading">
            <v-icon>fa-reload</v-icon>
            Reiniciar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<style>
  .points {
    font-weight: bold;
    font-size: 3em;
  }
</style>

<script>
  export default {
    data () {
      return {
        loading: false,
        isOpen: false,
        timing: this.$service.getTime(),
        total: this.$service.getTotal()
      }
    },
    methods: {
      open () {
        this.isOpen = true
      },
      reload () {
        this.loading = true
        this.$service.reset()
        window.location.assign(window.location.href.split('/#')[0])
      }
    }
  }
</script>
