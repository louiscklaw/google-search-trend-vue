// routes.js
import about from './pages/about.vue'
import helloworld from './components/HelloWorld.vue'


let route_component_pair = [
  ['/', helloworld],
  [ '/about', about ]
]

export default route_component_pair.map( a => {return {path:a[0],component:a[1]};} )