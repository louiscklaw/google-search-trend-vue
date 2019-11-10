// routes.js
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
]

export default route_component_pair.map( a => {
  return {
    path: a[ 0 ],
    component: a[ 1 ]
  };
} )