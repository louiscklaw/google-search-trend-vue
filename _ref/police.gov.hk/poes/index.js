#!/usr/bin/env node

const fs = require('fs')

const field_name = {
  0: "時間",
  1: "公衆集會",
  2: "公衆遊行",
  3: "總數"
}




var Xray = require('x-ray')
var x = Xray()

x('https://www.police.gov.hk/ppp_tc/09_statistics/poes.html', 'table@html')
  .then(res => {
    fs.writeFileSync('./result.html', `<html><body><table>${res}</table></body></html>`)
  })

x('https://www.police.gov.hk/ppp_tc/09_statistics/poes.html', 'table tr', [{
  1: x(['th:not([align="left"])']),
  2: x(['td'])
}])
  .then(res => {
    console.log(JSON.stringify(res))
    let years = res[0]['1']
    let field_1 = res[1]['2']
    let field_2 = res[2]['2']
    let field_3 = res[3]['2']

    let output = years.map( year => {
      return {
        [year]:{
        [field_name[1]]: field_1.shift(),
        [field_name[2]]: field_2.shift(),
        [field_name[3]]: field_3.shift()}
      }
    })

    fs.writeFileSync('./result.json', JSON.stringify(output))
  })