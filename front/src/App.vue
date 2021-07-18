<template>
  <v-app>
    <v-col id="app">
      <transition>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </v-col>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css">
  :root {
    --dark-quamarine: #017371;
    --green-blue: #56FCA2;
    --blue-water: #0E87CC;
    --lighten-green-blue: #EFFEEF;
    --red: #CC4C4D;
    --black: #000000;
    --white: #FFFFFF;
  }

  #app {
    font-family: 'Staatliches', cursive;
    text-align: center;
    color: var(--blue-water);
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
  }

  h1 {
    font-size: 71px;
    color: var(--red);
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: var(--white);
  }

  h2 {
    font-size: 70px;
  }

  h4 {
    font-size: 45px;
  }

  h2,
  h4 {
    color: var(--dark-quamarine);
  }
</style>
