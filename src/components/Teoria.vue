<template>
  <v-content>
    <v-toolbar fixed>
      <v-btn icon :to="{name: 'Home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>1ª Fase - Teoria</v-toolbar-title>
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
          <b>Definição:</b> Quando acontece uma interação entre corpos, podem ocorrer variações na velocidade,
          deformações ou ambos os fenômenos. <b>As causas dessas variações ou deformações são denominadas forças.</b>
        </v-alert>
        <br>

        <p>Quando um corpo é abandonado de uma determinada altura, cai com movimento acelerado devido a força de atração
          da Terra.</p>

        <p>Ao chutarmos uma bola, o pé faz sobre ela uma força que, além de deformá-la, inicia-lhe o
          movimento.</p>

        <p>Quando as superfícies dos corpos que interagem se tocam – como a interação pé-bola, por exemplo, a força é
          chamada de contato.</p>

        <p>Ocorrendo a interação e estando os corpos a distância, a força é chamada de campo. Um exemplo é a interação
          Terra-maça. Em dinâmica vamos tratar de forças cujo efeito principal, é causar variações na velocidade
          de um corpo, isto é. Aceleração.</p>

        <v-alert color="info" icon="info" :value="true">
          Forças são interações entre corpos, causando variações no seu estado de movimento ou uma
          deformação.
        </v-alert>
        <br>
        <p>Tal qual a aceleração, a força é uma grandeza vetorial, exigindo, portanto, para ser caracterizada, uma
          intensidade, uma direção e um sentido. A unidade de força no SI é o newton (N).</p>
      </section>

    </v-container>
  </v-content>
</template>

<script>
  export default {
    mounted () {
      setTimeout(() => {
        if (!this.$service.getTeoriaRead(0)) {
          this.$service.setTeoriaRead(0)
          this.$bus.$emit('add-score', 50, 0)
        }
      }, 3000)
    }
  }
</script>

<style scoped>

</style>
