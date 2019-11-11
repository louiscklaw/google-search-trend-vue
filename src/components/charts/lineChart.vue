

<script>
  import { Line } from 'vue-chartjs'
  import { bus } from '../../main'

  export default {
    extends: Line,
    props: [ 'labels', 'datasets', 'listen_to' ],
    props_old:{
      labels: [String],
      datasets: [Array],
      listen_to: String,
      legend_display: {
        default: true
      }
    },
    created() {
      // // Overwriting base render method with actual data.
      /*eslint no-console:"off"*/
      bus.$on( this.listen_to, ( inputs ) => {
        console.log( `test ${inputs[2].legend_display=='false'}` )
        console.log( inputs[2].legend_display )
        this.renderChart( {
          labels: inputs[ 0 ],
          datasets: inputs[ 1 ]
        }, {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: inputs[2].legend_display=='true'
          }
        } )
      } )
    }
  }
</script>