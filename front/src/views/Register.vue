<template>
  <v-row>
    <v-col class="register">
      <Header />

      <v-row class="register__content">
        <v-col class="pb-0 pt-0">
          <v-row class="pt-4">
            <v-btn
              icon
              elevation="5"
              class="ma-2 white darken-4"
            >
              <v-icon color="red">
                mdi-arrow-left
              </v-icon>
            </v-btn>
          </v-row>

          <v-row class="register__form">
            <v-col>
              <v-row class="register__name">
                <v-text-field
                  v-model="name"
                  label="name"
                  placeholder="your name"
                  outlined
                  dense
                  color="tield"
                ></v-text-field>
              </v-row>

              <v-row class="register__birthday">
                <v-text-field
                  v-model="birthday"
                  label="birthday"
                  placeholder="00/00/0000"
                  v-mask="'##/##/####'"
                  outlined
                  dense
                  color="tield"
                ></v-text-field>
              </v-row>

              <v-row class="register__city-and-state">
                <v-text-field
                  v-model="cityAndState"
                  label="city / State"
                  placeholder="city name, state"
                  outlined
                  dense
                  color="tield"
                ></v-text-field>
              </v-row>

              <v-row class="register__personal-register">
                <v-text-field
                  v-model="personalRegister"
                  label="personal register"
                  placeholder="000.000.000-00"
                  v-mask="'###.###.###-##'"
                  maxlength="14"
                  outlined
                  dense
                  color="tield"
                ></v-text-field>
              </v-row>

              <v-row class="register__email">
                <v-text-field
                  v-model="email"
                  label="e-mail"
                  placeholder="email@email.com"
                  outlined
                  dense
                  color="tield"
                ></v-text-field>
              </v-row>

              <v-row class="register__password">
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
              </v-row>

              <v-row class="register__button">
                <v-btn
                  block
                  x-large
                  color="teal dark-0"
                  @click="tryRegister()"
                >
                  Register
                </v-btn>
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
  name: 'Register',
  components: {
    Header,
  },
  data() {
    return {
      name: '',
      birthday: '',
      cityAndState: '',
      personalRegister: '',
      email: '',
      password: '',
      response: null,
      showPassword: false,
    };
  },
  methods: {
    ...mapActions('user', [
      'Register',
      'setUser',
    ]),
    async tryRegister() {
      const header = {
        name: this.name,
        birthday: this.birthday,
        city: this.cityAndState,
        personalRegister: this.personalRegister,
        email: this.email,
        password: this.password,
      };
      const data = await this.Register(header);

      if (data.status === 200) {
        this.response = data;
        // alert(this.response.data.result);

        this.name = '';
        this.birthday = '';
        this.cityAndState = '';
        this.personalRegister = '';
        this.email = '';
        this.password = '';
        // this.$router.push({ path: '/home' });
      } else {
        this.response = data.response.status;
        alert(data.response.data.result);
      }
    },
  },
};
</script>

<style lang="scss">
  .register {
    &__content {
      height: calc(100vh - calc(138px + 18px));

      background: var(--blue-water);
    }

    &__form {
      height: 630px;
      margin: 100px 30vh;
      padding: 40px;
      border-radius: 8px;

      background: var(--green-blue);
    }

    &__name,
    &__birthday,
    &__city-and-state,
    &__personal-register,
    &__email,
    &__password {
      margin: 10px 0;
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
