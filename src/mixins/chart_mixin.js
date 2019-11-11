/*eslint no-console:"off"*/

import fetcher from './fetcher'
import _const from './_const'

let fm = fetcher.methods

export default {
  methods: {
    helloworld(){
      alert('helloworld from chart_mixin')
    },
    chart_interest_over_time(params) {
      console.log(params)
      return fm.fetch_post_request({
        q: _const.Q_INTEREST_OVER_TIME,
        param: params
      })
      .then( res => res.json() )
      .then( ( json ) => {
        // create_chart( "#"+"!{_chart_id}", !{JSON.stringify(params.keyword)} , json );

        // update_chart_info_table("#"+"!{_info_table_id}", !{JSON.stringify(params.keyword)} , json)
        return json

      } );

    }
  }
}