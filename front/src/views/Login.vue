<template>
  <v-row>
    <v-col class="login">
      <Header />

      <v-row class="login__content">
        <v-col>
          <v-row>
            <v-btn
              icon
              elevation="5"
              class="ma-2 white darken-4"
              @click="backToHome"
            >
              <v-icon color="red">
                mdi-arrow-left
              </v-icon>
            </v-btn>
          </v-row>

          <v-row class="login__form">
            <v-col>
              <v-row class="login__email">
                <v-text-field
                  v-model="email"
                  label="e-mail"
                  placeholder="email@email.com"
                  outlined
                  dense
                  color="tield"
                ></v-text-field>
              </v-row >

              <v-row  class="login__password">
                <v-text-field
                  v-model="password"
                  label="password"
                  placeholder="********"
                  outlined
                  dense
                  color="tield"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-row >

              <v-row class="login__button">
                <v-btn
                  block
                  x-large
                  color="teal dark-0"
                  @click="tryLogin()"
                >
                  Login
                </v-btn>
              </v-row>

              <v-row class="login__image">
                <v-img
                  :lazy-src="imageSrc"
                  :src="imageSrc"
                  max-height="200"
                  max-width="250"
                ></v-img>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {
    Header,
  },
  data() {
    return {
      email: '',
      password: '',
      response: null,
      showPassword: false,
      imageSrc: 'https://image.flaticon.com/icons/png/512/829/829274.png',
    };
  },
  methods: {
    ...mapActions('user', [
      'Login',
      'setUser',
    ]),
    async tryLogin() {
      const header = {
        email: this.email,
        password: this.password,
      };
      const data = await this.Login(header);

      if (data.status === 200) {
        this.response = data;
        this.setUser(this.response.data);

        this.email = '';
        this.password = '';

        this.$router.push({ path: '/operation' });
      } else {
        this.response = data.response.status;
        alert(data.response.data.result);
      }
    },
    backToHome() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="scss">
  .login {
    &__content {
      height: calc(100vh - calc(138px + 18px));

      background: var(--blue-water);
    }

    &__form {
      height: 600px;
      margin: 100px 30vh;
      padding: 40px;
      border-radius: 8px;

      background: var(--green-blue);
    }

    &__email,
    &__password {
      margin: 20px 0;
    }

    &__button {
      margin: 60px 0;
    }

    &__image {
      height: 300px;

      justify-content: center;
    }
  }
</style>
