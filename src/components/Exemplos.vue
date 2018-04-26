<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'Home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>1ª Fase - Exemplos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <section>
        <h2>Noções de Força</h2>

        <br>
        <v-alert color="info" icon="info" :value="true">
          <b>Exemplos:</b> Os exemplos ajuram a fixar o conteúdo do módulo. Veja todos e ganhe um bobus!</b>
        </v-alert>
        <br>

        <div class="exemplo">
          <p class="textoExemplo">Duas forças concorrentes, F1 E F2, de intensidade 4N e 3N, atuam num mesmo ponto material, formando um
            ângulo α entre si. Determine a intensidade da força resultante para os seguintes valore de α: </p>
          <ul>
            <li>0° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_01.png"/></li>
            <li>60° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_02.png"/></li>
            <li>90° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_03.png"/></li>
            <li>180° <img src="http://beto.abelha.network/static/img/mod_01_ex_img_04.png"/></li>
          </ul>
        </div>
      </section>

    </v-container>
  </v-content>
</template>

<script>
  export default {
    mounted () {
      setTimeout(() => {
        if (!this.$service.getExemplosRead(0)) {
          this.$service.setExemplosRead(0)
          this.$bus.$emit('add-score', 10, 0)
        }
      }, 3000)
    }
  }
</script>

<style scoped>
.exemplo img{
  width: 100%;
}
</style>
