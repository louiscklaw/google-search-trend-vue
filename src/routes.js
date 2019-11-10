// routes.js
import about from './pages/about.vue'
import helloworld from './pages/helloworld.vue'
import programming_language from './pages/programming_language.vue'

let route_component_pair = [
  ['/', helloworld],
  [ '/about', about ],
  ['/programming_language', programming_language]
]

export default route_component_pair.map( a => {return {path:a[0],component:a[1]};} )