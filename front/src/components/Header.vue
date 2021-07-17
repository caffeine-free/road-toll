<template>
  <v-row class="header">
    <v-col>
      <v-row class="header__title">
        <h1>
          {{ title }}
        </h1>
      </v-row>

      <v-row class="header__bottom-border"></v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Road Toll',
    };
  },
};
</script>

<style lang="scss">
  .header {
    &__title {
      height: 138px;
      align-content: center;
      padding-left: calc(100vw - 97vw);

      background: var(--dark-quamarine);
    }

    &__bottom-border {
      height: 18px;

      background: var(--green-blue);
    }
  }

</style>
