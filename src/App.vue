<template>
  <v-app id="inspire">
    <router-view/>
    <scoreboard/>
  </v-app>
</template>

<style>
  .application.theme--light {
    background-color: #FFF;
  }
</style>

<script>
  import Scoreboard from './components/Scoreboard'

  export default {
    components: {
      Scoreboard
    }
  }
</script>
