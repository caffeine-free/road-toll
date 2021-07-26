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
              @click="backToOperation"
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

              <v-row class="d-flex justify-space-between">
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  elevation="5"
                  class="ma-2 mt-5 white darken-4"
                  @click="reloadChart"
                >
                  <v-icon color="red">
                    mdi-reload
                  </v-icon>
                </v-btn>
              </v-row>

              <BarChart
                :categories="categories"
                :series="series"
                class="pt-10"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Header from '@/components/Header.vue';
import BarChart from '@/components/BarChart.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'report',
  components: {
    Header,
    BarChart,
  },
  data() {
    return {
      rawData: [],
      series: [],
      categories: [],
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
  create() {
    this.getData();
  },
  computed: {
    ...mapGetters('user', [
      'getName',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'Report',
    ]),
    backToOperation() {
      this.$router.push({ path: '/operation' });
    },
    reloadChart() {
      this.getData();
    },
    async getData() {
      const { data } = await this.Report();
      this.rawData = data;

      this.categories = this.rawData.result.categories;
      this.series = this.rawData.result.series;
    },
  },
};
</script>

<style lang="scss">
  .report {
    &__content {
      min-height: 720px;
      height: calc(100vh - calc(138px + 18px));

      background: var(--blue-water);
    }

    &__form {
      height: 600px;
      margin: 0px 10vh;
      border-radius: 8px;

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
