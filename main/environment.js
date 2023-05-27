
const path = require('path')
var { config } = { config: {} };

config = {
  plugins: {
    'ngx-progressbar': {
      spinnerPosition: 'left'
    }
  },
  loading: {
    preAngularBootstrap: {
      loader: 'main/src/assets/logo2-low-opacity.svg',
      background: '#9395ab',
    },
    afterAngularBootstrap: {
      loader: {
        name: 'lds-heart',
        color: '#c85958'
      },
      // loader: {
      //   name: 'lds-default',
      //   color: '#c85958'
      // },
      background: '#9395abb5',
    },
  },
  domain: 'main.example.domain.com',
  title: 'Codete RxJs Quick Start',
  pwa: {
    name: 'Codete RxJs Quick Start',
    short_name: 'codete-rxjs-start',
  }


}
module.exports = exports = { config };
