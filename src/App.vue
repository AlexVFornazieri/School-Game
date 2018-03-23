<template>
  <v-app id="inspire">
    <router-view/>
    <scoreboard/>
  </v-app>
</template>

<script>
  import Scoreboard from './components/Scoreboard'

  export default {
    components: {
      Scoreboard
    }
  }
</script>
