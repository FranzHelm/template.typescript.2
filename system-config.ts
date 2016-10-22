declare var System: any;

System.config({
  paths: {
    'npm:': 'node_modules/'
  },
  map: {
    'app': 'app',
    'lodash': 'npm:lodash/lodash.js',
  },
  packages: {
     'app': { main: './main.js', defaultExtension: 'js'}
  }
});
