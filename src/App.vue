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
  .math {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .math--inline{
    display: inline-block;
    /*NOTE leave space for trailing punctuation*/
    max-width: 99%;
  }

  .math--block{
    display: block
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
