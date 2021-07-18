<template>
  <v-row>
    <v-col class="welcome">
      <v-row class="welcome__header">
        <h2 class="pa-4">
          {{ title }}
        </h2>
      </v-row>

      <v-row class="welcome__message">
        <h4 class="pa-7">
          {{ message }}
        </h4>
      </v-row>

      <v-row class="welcome__image">
        <v-img
          :lazy-src="imageSrc"
          :src="imageSrc"
          max-height="190"
          max-width="200"
        ></v-img>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      title: 'Welcome to Road Toll,',
      message: 'the right place to manage your toll.',
      imageSrc: 'https://image.flaticon.com/icons/png/512/829/829274.png',
    };
  },
};
</script>

<style lang="scss">
  .welcome {
    height: 650px;
    max-height: 650px;
    border-radius: 8px;

    background: var(--green-blue);

    &__header {
      border-radius: 8px;
      text-align: left;
      margin: 3px !important;

      background: var(--lighten-green-blue);
    }

    &__message {
      text-align: left;
    }

    &__image {
      align-content: center;
      justify-content: center;
    }
  }

</style>
