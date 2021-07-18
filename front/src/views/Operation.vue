<template>
  <v-row>
    <v-col class="operation">
      <Header />

      <v-row class="operation__content">
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

          <v-row class="operation__form">
            <v-col class="max-form">
              <v-row class="operation__header d-flex justify-space-between">
                <h5>
                  Operator:
                </h5>

                <h5>
                  {{ getName }}
                </h5>
              </v-row>

              <v-row class="pa-5">
                <v-col>
                  <v-row class="operation__vehicle pb-7">
                    <v-select
                      solo
                      dense
                      hide-details
                      label="type of vehilcle"
                      color="black"
                      class="pa-1"
                      v-model="vehicle"
                      :items="tollPrices"
                      :menu-props="{ top: false, offsetY: true }"
                    ></v-select>
                  </v-row >

                  <v-row class="operation__payment-method pb-7">
                    <v-select
                      solo
                      dense
                      hide-details
                      label="payment method"
                      color="black"
                      class="pa-1"
                      v-model="paymentMethod"
                      :items="paymentMethods"
                      :menu-props="{ top: false, offsetY: true }"
                    ></v-select>
                  </v-row >

                  <v-row class="operation__value">
                    <v-text-field
                      v-model="amountPaid"
                      label="value"
                      outlined
                      dense
                      color="tield"
                      class="pa-1"
                    ></v-text-field>
                  </v-row >
                </v-col>

                <v-col>
                  <v-row class="operation__license-plate pt-1">
                    <v-text-field
                      v-model="licensePlate"
                      label="license plate"
                      placeholder="XXX-0000"
                      outlined
                      dense
                      color="tield"
                      class="pa-1"
                    ></v-text-field>
                  </v-row >

                  <v-row class="operation__note pt-1">
                    <v-text-field
                      v-model="note"
                      label="note"
                      outlined
                      dense
                      color="tield"
                      class="pr-1 pl-1"
                    ></v-text-field>
                  </v-row >
                </v-col>
              </v-row>

              <v-col class="operation__display">
                <v-row no-gutters>
                  <h1 class="small-letters">
                    change:
                  </h1>
                </v-row>

                <v-row no-gutters class="big-number d-flex flex-row-reverse">
                  {{ change }}
                </v-row>
              </v-col>

              <v-row class="operation__buttons">
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-col class="operation__button">
                  <v-btn
                    block
                    x-large
                    color="red dark-0"
                    @click="cancelOperation()"
                  >
                    Cancel
                  </v-btn>
                </v-col>

                <v-col class="operation__button">
                  <v-btn
                    block
                    x-large
                    color="teal dark-0"
                    @click="confirmOperation()"
                  >
                    Confirm
                  </v-btn>
                </v-col>
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
  name: 'operation',
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
      'Operation',
      'setUser',
    ]),
    cancelOperation() {
      this.vehicle = {};
      this.paymentMethod = {};
      this.amountPaid = '';
      this.licensePlate = '';
      this.note = '';
    },
    async confirmOperation() {
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
        const data = await this.Operation(header);

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
  },
};
</script>

<style lang="scss">
  .operation {
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

    &__vehicle {
      padding-top: 4px;
    }

    &__display {
      max-height: 200px;

      border-radius: 8px;
      background: var(--lighten-green-blue);
    }

    &__email,
    &__password {
      margin: 20px 0;
    }

    &__buttons {
      padding-bottom: 50px;
    }

    &__button {
      margin-top: 5px;
      max-height: 50px;
    }

    &__image {
      height: 300px;

      justify-content: center;
    }
  }

  .big-number {
    font-size: 100px;
    color: var(--red);
  }

  .small-letters {
    -webkit-text-stroke-width: 0px;
    font-size: 50px;
  }

  .max-form {
    max-height: 600px;
  }
</style>
