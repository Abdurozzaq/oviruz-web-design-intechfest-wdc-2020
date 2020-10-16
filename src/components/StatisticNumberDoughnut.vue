<template>
  <div class="my-5">
    <b-container>
      <b-row align-v="center">

        <b-col cols="12" lg="6" md="6" sm="12">
          <doughnut-chart data-aos="zoom-in"/>
        </b-col>

        <b-col cols="12" lg="6" md="6" sm="12">
          <h3 data-aos="zoom-in" class="robotofont grey-color-font text-sm-center text-md-left mt-5">Doughnut Chart Statistik Jumlah Covid-19 di Indonesia</h3>
          <h5 data-aos="zoom-in" class="pt-2 robotofont grey-color-font text-sm-center text-md-left">
            Data Jumlah Covid-19 di Indonesia ini bisa saja berubah seiring berjalannya waktu
          </h5>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>


<script>
import DoughnutChart from '@/components/charts/DoughnutJumlahNasional.vue'
export default {
  components: {
    DoughnutChart,
  }
}
</script>

