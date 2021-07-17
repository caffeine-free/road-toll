<template>
  <v-row>
    <v-col class="home">
      <v-row class="home__header">
        <h1>
          {{ title }}
        </h1>
      </v-row>

      <v-row class="home__top-border"></v-row>

      <v-row class="home__content">
        <v-col class="home__left-aside">
          <v-row>
            <Welcome />
          </v-row>
        </v-col>
        <v-col class="home__right-aside">
          <v-row class="button">
            <v-btn
              block
              large
              color="teal accent-3"
            >
              Login
            </v-btn>
          </v-row>

          <v-row class="button">
            <v-btn
              block
              large
              color="teal accent-3"
            >
              Register
            </v-btn>
          </v-row>

          <v-row class="button">
            <v-btn
              block
              large
              color="teal accent-3"
            >
              Recover Password
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
  },
  data() {
    return {
      title: 'Road Toll',
    };
  },
};
</script>

<style lang="scss">
  .home {
    &__header {
      height: 138px;
      align-content: center;
      padding-left: calc(100vw - 97vw);

      background: var(--dark-quamarine);
    }

    &__top-border {
      height: 18px;

      background: var(--green-blue);
    }

    &__content {
      height: calc(100vh - calc(138px + 18px));
      padding: 70px;

      background: var(--blue-water);
    }

    &__left-aside {

    }

    &__right-aside {
      margin-left: 40px;
    }
  }

  .button {
    padding: 80px;
  }

</style>
