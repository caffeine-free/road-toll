<template>
  <v-row>
    <v-col class="report">
      <Header />

      <v-row class="report__content">
        <v-col>
          <v-row class="d-flex justify-space-between">
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

          <v-row class="report__form">
            <v-col class="max-form">
              <v-row class="report__header d-flex justify-space-between">
                <h5>
                  Operator:
                </h5>

                <h5>
                  {{ getName }}
                </h5>
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'report',
  components: {
    Header,
  },
  data() {
    return {
      vehicle: {},
      paymentMethod: {},
      amountPaid: 0,
      licensePlate: '',
      note: '',
      email: '',
      password: '',
      response: null,
      showPassword: false,
      imageSrc: 'https://image.flaticon.com/icons/png/512/829/829274.png',
      tollPrices: [
        {
          text: 'motorcycle',
          axis: 2,
          value: 3.20,
        },
        {
          text: 'car',
          axis: 4,
          value: 6.40,
        },
        {
          text: 'bus / truck',
          axis: 4,
          value: 12.80,
        },
        {
          text: 'big truck',
          axis: 6,
          value: 38.40,
        },
      ],
      paymentMethods: [
        {
          text: 'cash',
          value: 'cash',
        },
        {
          text: 'card',
          value: 'card',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('user', [
      'getName',
      'getEmail',
    ]),
    change() {
      const isThereAmountPaid = parseFloat(this.amountPaid);
      const isThereVehicleSelect = parseFloat(this.vehicle);

      const change = isThereAmountPaid && isThereVehicleSelect
        ? (isThereAmountPaid - isThereVehicleSelect).toFixed(2)
        : '0.00';

      return change;
    },
  },
  methods: {
    ...mapActions('user', [
      'report',
      'setUser',
    ]),
    cancelreport() {
      this.vehicle = {};
      this.paymentMethod = {};
      this.amountPaid = '';
      this.licensePlate = '';
      this.note = '';
    },
    async confirmreport() {
      const allInfo = this.vehicle && this.paymentMethod && this.amountPaid && this.licensePlate;
      if (allInfo) {
        const vehicleType = this.tollPrices.filter((el) => el.value === this.vehicle).text;

        const header = {
          vehicleType,
          email: this.getEmail,
          licensePlate: this.licensePlate,
          paymentMethod: this.paymentMethod,
          value: this.amountPaid,
        };
        const data = await this.report(header);

        if (data.status === 200) {
          this.response = data;
          alert(data.response.data.result);
        } else {
          this.response = data.response.status;
          alert('There s something wrong');
        }
      } else {
        alert('Missing data to be filled');
      }
    },
    backToHome() {
      this.$router.push({ path: '/' });
    },
    goToReport() {
      this.$router.push({ path: '/report' });
    },
  },
};
</script>

<style lang="scss">
  .report {
    &__content {
      height: calc(100vh - calc(138px + 18px));

      background: var(--blue-water);
    }

    &__form {
      height: 600px;
      margin: 0px 10vh;
      border-radius: 8px;
      // max-width: 800px;

      background: var(--green-blue);
    }

    &__header {
      border-radius: 8px 8px 0 0;
      align-items: center;
      padding: 0 30px;

      height: 60px;
      background: var(--dark-quamarine);
    }
  }
</style>
