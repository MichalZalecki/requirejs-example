require(['../common'], function () {
  require(['jquery', 'moment'],
  function ($,        moment) {

    var $moment = $('.moment'),
      updateMoment = function () {
        $moment.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        setTimeout(updateMoment, 900);
      };
    updateMoment();

  });
});
