<template>
  <v-row class="page-not-found">
    <v-col>
      <v-row class="page-not-found__error">
        <h1>{{ title }}</h1>
      </v-row>

      <v-row class="page-not-found__message">
        <h4>{{ message }}</h4>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PageNotFound',
  data() {
    return {
      title: '404',
      message: 'Page Not Found...',
    };
  },
};
</script>

<style lang="scss">
  .page-not-found {
    background: var(--dark-quamarine);
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;

    &__error,
    &__message {
      justify-content: center;
    }

    &__message {
      h4 {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--white);
      }
    }
  }
</style>
