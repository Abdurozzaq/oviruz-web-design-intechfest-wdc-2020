<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    data () {
      return {
        chartData: {
          labels: ["Positif",	"Sembuh",	"Meninggal"],
          datasets: [{
              borderWidth: 0,
              backgroundColor: [
              'rgb(150,104,230)',
              'rgb(98,255,171)',
              'rgb(255,171,98)',              
              ],
              data: [340622,	258519,	12027]
            }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>