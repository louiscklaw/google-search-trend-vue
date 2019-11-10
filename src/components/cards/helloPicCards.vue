<template>
  <div class="card">
    <div class="card-image">
      <bar-chart
        v-bind:labels="labels"
        v-bind:datasets="datasets"
        ></bar-chart>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left reserved">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">search compare 1 year</p>
          <p class="subtitle is-6" >@johnsmith</p>
        </div>
      </div>

      <div class="content reserved">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>

<script>
  import barChart from '../charts/bar_chart.vue'
  import lineChart from '../charts/lineChart.vue'

  export default {
    data(){
      return{
        labels: [ '111', '222', '333', '444', 'May', 'June', 'July', 'August', 'September', 'October',
          'November', 'December'
        ],
        datasets:[ {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [ -1, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11 ]
        } ]
      }
    },
    components: {
      'bar-chart': barChart
      'line-chart': lineChart
    }
  }

</script>

<style lang="scss" scoped>
.reserved{
  display:none;
}
</style>