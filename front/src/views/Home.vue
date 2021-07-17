<template>
  <v-row>
    <v-col class="home">
      <Header />

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
              @click="redirectToLogin"
            >
              Login
            </v-btn>
          </v-row>

          <v-row class="button">
            <v-btn
              block
              large
              color="teal accent-3"
              @click="redirectToRegister"
            >
              Register
            </v-btn>
          </v-row>

          <v-row class="button">
            <v-btn
              block
              large
              color="teal accent-3"
              @click="redirectToRecoverPassword"
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
import Header from '@/components/Header.vue';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Welcome,
  },
  data() {
    return {
      title: 'Road Toll',
    };
  },
  methods: {
    redirectToLogin() {
      this.$router.push({ path: '/login' });
    },
    redirectToRegister() {
      this.$router.push({ path: '/register' });
    },
    redirectToRecoverPassword() {
      this.$router.push({ path: '/recover-password' });
    },
  },
};
</script>

<style lang="scss">
  .home {
    &__content {
      height: calc(100vh - calc(138px + 18px));
      padding: 70px;

      background: var(--blue-water);
    }

    &__right-aside {
      margin-left: 40px;
    }
  }

  .button {
    padding: 80px;
  }

</style>
