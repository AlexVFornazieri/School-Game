<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-slide-y-transition mode="out-in">
          <v-card>
            <v-card-media src="http://beto.abelha.network/static/img/forca_fisica.jpg" height="150px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">#1 - Noções de Força</h3>
                <div>Definição, Força Resultante, Equilíbrio</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary">Teoria</v-btn>
              <v-btn color="primary">Vídeo</v-btn>
              <v-btn color="primary">Exemplos</v-btn>
              <v-btn color="primary">Questionário</v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-y-transition>
      </v-flex>

      <v-flex xs12 sm6 offset-sm3>
        <v-slide-y-transition mode="out-in">
          <v-card>
            <v-card-media src="http://beto.abelha.network/static/img/leis_de_newton.png" height="150px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">#2 - Leis de Newtom</h3>
                <div>Inercia, Dinâmica, Ação e Reação</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn disabled color="primary" :to="{name: 'Teoria'}">Iniciar</v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-y-transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {}
</script>
