<template>
  <v-row>
    <v-col class="recover">
      <Header />

      <v-row class="recover__content">
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

          <v-row class="recover__form">
            <v-col>
              <v-row class="recover__email">
                <v-text-field
                  v-model="email"
                  label="e-mail"
                  placeholder="email@email.com"
                  outlined
                  dense
                  :rules="requiredRule"
                  color="tield"
                ></v-text-field>
              </v-row >

              <v-row class="recover__personal-register">
                <v-text-field
                  v-model="personalRegister"
                  label="personal register"
                  placeholder="000.000.000-00"
                  v-mask="'###.###.###-##'"
                  maxlength="14"
                  outlined
                  dense
                  :rules="requiredRule"
                  color="tield"
                ></v-text-field>
              </v-row>

              <v-row  class="recover__password">
                <v-text-field
                  v-model="newPassword"
                  label="new password"
                  placeholder="********"
                  outlined
                  dense
                  color="tield"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="passwordRules"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-row >

              <v-row class="recover__button">
                <v-btn
                  block
                  x-large
                  color="teal dark-0"
                  @click="tryRecover()"
                >
                  Recover
                </v-btn>
              </v-row>

              <v-row class="recover__image">
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
  name: 'recover',
  components: {
    Header,
  },
  data() {
    return {
      email: '',
      personalRegister: '',
      newPassword: '',
      passwordRules: [
        (v) => (v && v.length >= 5) || 'This field must have atleast 5 characters',
      ],
      requiredRule: [
        (v) => !!v || 'Required.',
      ],
      response: null,
      showPassword: false,
      imageSrc: 'https://image.flaticon.com/icons/png/512/829/829274.png',
    };
  },
  methods: {
    ...mapActions('user', [
      'Recover',
      'setUser',
    ]),
    async tryRecover() {
      const header = {
        email: this.email,
        personalRegister: this.personalRegister,
        password: this.newPassword,
      };
      const data = await this.Recover(header);

      if (data.status === 200) {
        this.response = data;

        this.email = '';
        this.personalRegister = '';
        this.newPassword = '';

        // this.$router.push({ path: '/home' });
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
  .recover {
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
    &__password,
    &__personal-register {
      margin: 5px 0;
    }

    &__button {
      margin: 45px 0;
    }

    &__image {
      height: 300px;

      justify-content: center;
    }
  }
</style>
