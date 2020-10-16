<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: [
            'Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Yogyakarta', 'Banten'
          ],
          datasets: [{
            label: 'Kasus',
            borderWidth: 0,
            backgroundColor: [
              'rgb(150,104,230)',
              'rgb(150,104,230)',
              'rgb(150,104,230)',
              'rgb(150,104,230)',
              'rgb(150,104,230)',
              'rgb(150,104,230)',
            ],
            data: [88174, 27522, 27106, 47280, 3145, 7148]
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
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>