import about from './pages/about.vue'

import helloworld from './pages/helloworld.vue'
import programming_language from './pages/programming_language.vue'
import lihkg_vs_hkgolden from './pages/lihkg_vs_hkgolden.vue'
import hktvmall_vs_bigbigchannel from './pages/hktvmall_vs_bigbigchannel.vue'
import jobs_ads from './pages/jobs_ads.vue'
import IOT from './pages/IOT.vue'
import tech_terms from './pages/tech_terms.vue'
import test_farms from './pages/test_farms.vue'
import belt_and_road from './pages/belt_and_road.vue'
import moving_service from './pages/moving_service.vue'
import react_vue_angular from './pages/react_vue_angular.vue'
import cryptocurrency from './pages/cryptocurrency.vue'

import test_maps from './pages/test/test_maps.vue'
import test_chartjs from './pages/test/test_chartjs.vue'
import test_hot_topics from './pages/test/test_hot_topics.vue'
import test_loader from './pages/test/test_loader.vue'
import test_choropleth from './pages/test/test_choropleth.vue'
import test_pug from './pages/test/test_pug.vue'




let route_component_pair = [
  [ '/', helloworld ],
  [ '/about', about ],
  [ '/programming_language', programming_language ],
  [ '/lihkg_vs_hkgolden', lihkg_vs_hkgolden ],
  [ '/hktvmall_vs_bigbigchannel', hktvmall_vs_bigbigchannel ],
  [ '/jobs_ads', jobs_ads ],
  [ '/IOT', IOT ],
  [ '/tech_terms', tech_terms ],
  [ '/test_farms', test_farms ],
  [ '/belt_and_road', belt_and_road ],
  [ '/moving_service', moving_service ],
  [ '/react_vue_angular', react_vue_angular],
  [ '/react_vue_angular', react_vue_angular],
  [ '/cryptocurrency', cryptocurrency],


  [ '/test_maps', test_maps ],
  [ '/test_chartjs', test_chartjs ],
  [ '/test_hot_topics', test_hot_topics ],
  [ '/test_loader', test_loader ],
  [ '/test_choropleth', test_choropleth ],
  [ '/test_pug', test_pug ],

]

export default route_component_pair.map( a => {
  return {
    path: a[ 0 ],
    component: a[ 1 ]
  };
} )