// fetcher.js

/*eslint no-console:"off"*/

import _const from "./_const";

function extract_trending_search ( json_in ) {
  return json_in.default.trendingSearchesDays[0].trendingSearches;
}

function fetch_post_request(json_in) {
  let API_BASE_URL = _const.API_BASE_URL;
  console.log('calling fetch_post_request')

  return fetch(API_BASE_URL + "/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(json_in)
  });
}

function helloworld(hello_in) {
  console.log(hello_in);
  console.log(_const.DEFAULT_HASH);
}

export default {
  methods: {
    helloworld: helloworld,
    fetch_post_request: fetch_post_request,
    extract_trending_search: extract_trending_search
  }
};
