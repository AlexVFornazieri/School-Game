<template>
  <v-content>
    <start-modal></start-modal>
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{player.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="reset">
          <v-list-tile-action>
            <v-icon>fa-eraser</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Reiniciar (reset)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 v-for="(modulo,index) in modulos" :key="index" :id="'mod' + index">
          <v-slide-y-transition mode="out-in">
            <v-card class="modules">
              <v-card-media height="150px" :src="modulo.cover"></v-card-media>
              <v-card-title primary-title>
                <div>

                  <h3 class="headline mb-0">
                    <span class="moduleNumber">{{index+1}}</span>{{modulo.titulo}}</h3>
                </div>
              </v-card-title>
              <v-layout row wrap>
                <v-flex xs6 class="helpLine">
                  <div class="span">50 Pontos</div>
                  <div class="span">10 Pontos (bonus)</div>
                  <div class="span">10 Pontos (bonus)</div>
                  <div class="span">1000 Pontos</div>
                </v-flex>
                <v-flex xs6>
                  <v-btn
                    :to="{name: 'Teoria', params: {id: index}}" block
                    :disabled="!modulo.habilitado"
                    :color="modulo.teoriaRead ? 'success':'primary'">
                    Teoria
                  </v-btn>

                  <v-btn
                    :to="{name: 'Exemplos', params: {id: index}}" block
                    :disabled="!modulo.habilitado"
                    :color="modulo.exemplosRead ? 'success':'primary'">
                    Exemplos
                  </v-btn>

                  <v-btn
                    slot="activator"
                    :to="{name: 'Video', params: {id: index}}" block
                    :disabled="!modulo.habilitado"
                    :color="modulo.videoWatched ? 'success':'primary'">
                    Vídeo Aula
                  </v-btn>

                  <v-btn
                    :to="{name: 'Questoes', params: {id: index}}" block
                    :disabled="!modulo.habilitado"
                    :color="modulo.answered ? 'success':'primary'">
                    Questões
                  </v-btn>

                  <p class="counter"><span>{{modulo.xps}}</span> pontos</p>
                </v-flex>
              </v-layout>
            </v-card>
          </v-slide-y-transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import StartModal from './StartModal'

  export default {
    components: {
      StartModal
    },
    props: {
      last: {
        default: 0
      }
    },
    data () {
      return {
        modulos: [],
        dialog: false,
        drawer: null,
        player: {}
      }
    },

    mounted () {
      console.log(this.$service.getTime() / 6000)
      this.player = this.$service.getPlayer()
      this.modulos = this.$service.listaModulos()
      this.$nextTick(() => {
        this.$vuetify.goTo('#mod' + this.last, {duration: 150})
      })
    },

    methods: {
      reset () {
        this.$service.reset()
        window.location.assign(window.location.href.split('/#')[0])
      }
    }
  }
</script>

<style scoped>
  .counter {
    font-size: large;
    font-weight: 400;
    text-align: center;
  }

  .helpLine div.span {
    text-align: right;
    color: rgba(0, 0, 0, 0.5);
    height: 36px;
    line-height: 36px;
    margin: 6px 0;
  }

  .modules .moduleNumber {
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 1.6rem;
    margin-right: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #FFF;
    font-weight: bold;
  }

  .tooltip__content {
    z-index: 0 !important;
  }

  .counter span {
    font-weight: bold;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
