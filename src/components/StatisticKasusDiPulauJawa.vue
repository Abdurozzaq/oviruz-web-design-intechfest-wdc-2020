<template>
  <div class="my-5">
    <b-container>
      <b-row align-v="center">

        <b-col cols="12" lg="6" md="6" sm="12">
          <h3 data-aos="zoom-in" class="robotofont grey-color-font text-sm-center text-md-right">Bar Chart Statistik Kasus Covid-19 di Pulau Jawa</h3>
          <h5 data-aos="zoom-in" class="pt-2 robotofont grey-color-font text-sm-center text-md-right mb-5">
            Data Kasus Covid-19 di Pulau Jawa ini bisa saja berubah seiring berjalannya waktu. Untuk data Realtime bisa dilihat di <a class="linkteks" href="https://covid19.go.id/peta-sebaran">https://covid19.go.id/peta-sebaran</a>
          </h5>
        </b-col>

        <b-col cols="12" lg="6" md="6" sm="12">
          <bar data-aos="zoom-in"/>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import Bar from '@/components/charts/BarKasusDiPulauJawa.vue'
export default {
  components: {
    Bar,
  }
}
</script>

<style>
.linkteks {
  color: rgb(150,104,230);
}
</style>
