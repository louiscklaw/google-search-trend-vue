import Vue from 'vue'

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faUserSecret,
  faCamera,
  faSearch,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'

function initIcons() {
  library.add( faUserSecret )
  library.add( faCamera )
  library.add(faSearch)
  library.add(faExternalLinkAlt)
}

export default {

  faInit: function () {
    initIcons()
    // import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
    // library.add(faFontAwesome)
    Vue.component( 'font-awesome-icon', FontAwesomeIcon )

  }
}