<template>
  <v-content>
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
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
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
        <v-flex xs12 sm6 offset-sm3 v-for="(modulo,index) in modulos" :key="index">
          <v-slide-y-transition mode="out-in">
            <v-card>
              <v-card-media height="150px" :src="modulo.cover"></v-card-media>
              <p class="counter"><span>{{modulo.xps}}</span> pontos</p>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{'#' + (index+1) + ' - ' + modulo.titulo}}</h3>
                  <div>{{modulo.tags}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                  :to="{name: 'Teoria'}"
                  :disabled="!modulo.habilitado"
                  icon outline :color="modulo.teoriaRead ? 'success':'primary'">
                  <v-icon>library_books</v-icon>
                </v-btn>
                <v-btn
                  :to="{name: 'Video'}"
                  :disabled="!modulo.habilitado"
                  icon outline :color="modulo.videoWatched ? 'success':'primary'">
                  <v-icon>play_arrow</v-icon>
                </v-btn>
                <v-btn
                  :disabled="!modulo.habilitado"
                  icon outline color="primary">
                  <v-icon>explicit</v-icon>
                </v-btn>
                <v-btn
                  :to="{name: 'Questoes'}"
                  :disabled="!modulo.habilitado"
                  icon outline :color="modulo.answered ? 'success':'primary'">
                  <v-icon>question_answer</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-slide-y-transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        modulos: [],
        dialog: false,
        drawer: null,
        items: [
          {icon: 'settings', text: 'Configurações'},
          {icon: 'chat_bubble', text: 'Feedback'},
          {icon: 'help', text: 'Ajuda'}
        ]
      }
    },

    mounted () {
      this.modulos = this.$service.listaModulos()
    }
  }
</script>

<style scoped>
  .counter {
    position: absolute;
    left: 20px;
    bottom: 0;
    font-size: large;
    font-weight: 400;
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
