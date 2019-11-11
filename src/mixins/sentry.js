// sentry.js

import Vue from 'vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

export default {
  init: () => {
    Sentry.init({
      dsn: 'https://ecffb9d8c68b49a29f4cdc4a9d2ceddd@sentry.io/1815240',
      integrations: [new Integrations.Vue({Vue, attachProps: true})],
    });
  }
}
