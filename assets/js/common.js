/**
 *  First file to load. Set up all paths.
 */

// config
requirejs.config({
  baseUrl: '/assets/js/lib',
  paths: {
    // namespaces
    app: '../app',
    // libs
    jquery: [
      '//code.jquery.com/jquery-1.11.2.min',
      // load local when CDN fails
      'jquery-2.1.3'
    ],
    moment: 'moment-2.9.0',
    FillTextJSONP: '../app/filltextjsonp'
  }
});
