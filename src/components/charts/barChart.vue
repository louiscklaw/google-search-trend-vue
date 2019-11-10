

<script>
  import {
    Bar
  } from 'vue-chartjs'

  export default {
    extends: Bar,
    props:['labels', 'datasets'],
    mounted() {
      // Overwriting base render method with actual data.
      this.renderChart( {
        labels: this.labels,
        datasets: this.datasets

      },{
        responsive: true,
        maintainAspectRatio: false
      }  )
    }
  }
</script>