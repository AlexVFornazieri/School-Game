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

  .math--inline {
    display: inline-block;
    /*NOTE leave space for trailing punctuation*/
    max-width: 99%;
  }

  .math--block {
    display: block
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #263238;
    padding: 8px;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
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
