define(function (require, exports) {
  var info = require('./info');
  exports.greet = function () {
    return "Greatings from " + info.name + "!";
  }
});
