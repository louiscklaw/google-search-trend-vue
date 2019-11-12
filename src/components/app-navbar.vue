<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="https://www.gstatic.com/images/branding/lockups/1x/lockup_trends_color_142x24dp.png"
            alt="Lightweight UI components for Vue.js based on Bulma">
        </b-navbar-item>
      </template>

      <template slot="start" v-for="(menu_href, menu_text) in menuitems">
        <b-navbar-item
          v-if="typeof(menu_href) == typeof('')" :key="menu_text"
          tag="router-link"
          :to="menu_href" >{{ menu_text }}</b-navbar-item>

        <b-navbar-dropdown
          v-if="typeof(menu_href) == typeof([])"
          :key="menu_text"
          :label="menu_text">
          <b-navbar-item
            tag="router-link"
            :to="menu_href"
            v-for="(menu_href, menu_text) in menuitems[menu_text]"
            :key="menu_text" >{{ menu_text }}</b-navbar-item>
        </b-navbar-dropdown>

      </template>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuitems: {
          'Helloworld': '/',
          'google trends': {
            'programming_language': '/programming_language',
            'lihkg_vs_hkgolden': '/lihkg_vs_hkgolden',
            'hktvmall_vs_bigbigchannel': '/hktvmall_vs_bigbigchannel',
            'jobs_ads': '/jobs_ads',
            'IOT': '/IOT',
            'technical terms': '/tech_terms',
            'mobile test farms': '/test_farms',
            'belt and road': '/belt_and_road',
            'moving service': '/moving_service',
            'webapp framework': '/react_vue_angular'
            'cryptocurrency': '/cryptocurrency'
          },
          'test page': {
            'test chartjs': '/test_chartjs',
            'test hot topics': '/test_hot_topics',
            'test maps': '/test_maps',
            'test loader': '/test_loader',
            'test choropleth': '/test_choropleth',
            'test pug': '/test_pug'
          },
          'About': '/about'
        }
      }
    },
    name: 'navbar',
    props: {
      msg: String
    }
  }
</script>
