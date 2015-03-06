define(function (require, exports) {
  var info = require('app/info');
  exports.greet = function () {
    return "Greatings from " + info.name + "!";
  }
});
