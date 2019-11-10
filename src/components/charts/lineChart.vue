

<script>
  import { Line } from 'vue-chartjs'
  import { bus } from '../../main'

  export default {
    extends: Line,
    props: [ 'labels', 'datasets', 'listen_to' ],
    created() {
      // // Overwriting base render method with actual data.

      bus.$on( this.listen_to, ( inputs ) => {
        this.renderChart( {
          labels: inputs[0],
          datasets: inputs[1]

        }, {
          responsive: true,
          maintainAspectRatio: false
        } )
      } )
    }
  }
</script>