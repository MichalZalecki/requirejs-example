require(['../common'], function () {
  require(['jquery', 'please', 'app/greater'],
  function ($,        Please,   greater) {

    var $please = $('.please'),
      updatePlease = function () {
        $please.css({'background-color': Please.make_color()});
        setTimeout(updatePlease, 900);
      };
    updatePlease();

    console.info(greater.greet());

  });
});
