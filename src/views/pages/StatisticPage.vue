<template>
  <div>
    <b-card class="border-0 bg-title-statistic rounded-0 py-3">
      <b-card-text>
        <h3 class="text-title-statistic my-auto">Statistik Covid-19 di Indonesia</h3>
      </b-card-text>
    </b-card>

    <number/>
    <number-doughnut-chart/>
    <top-3/>
    <bar-pulau-jawa/>
    <Footer/>
    <copyright/>
  </div>
</template>

<script>
import Number from '../../components/StatisticNumber.vue'
import Top3 from'../../components/StatisticTop3.vue'
import BarPulauJawa from '../../components/StatisticKasusDiPulauJawa.vue'
import Footer from '../../components/Footer.vue'
import Copyright from '../../components/Copyright.vue'
import NumberDoughnutChart from '../../components/StatisticNumberDoughnut.vue'
export default {
  components: {
    Number,
    NumberDoughnutChart,
    Top3,
    BarPulauJawa,
    Footer,
    Copyright
  }
}
</script>

<style>
.bg-title-statistic {
  background: #2A353B;
}

.text-title-statistic {
  color: #B867C6;
}
</style>