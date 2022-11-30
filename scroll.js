
$(document).ready(function () {

})
$(window).scroll(function () {
  var main = $('.main')
  var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

  if (scroll > 0) {
    sticky.addClass('fixed');
    main.addClass('addspace');
  }
  else {
    sticky.removeClass('fixed');
    main.removeClass('addspace');
  };
});

var $w = $(window).scroll(function () {
  var targetOffsetOne = $("#anchor1").offset().top;
  var targetOffsetTwo = $("#anchor2").offset().top;
  var targetOffsetThree = $("#anchor3").offset().top;
  var targetOffsetFour = $("#anchor4").offset().top;
  if ($w.scrollTop() > targetOffsetOne && $w.scrollTop() < targetOffsetTwo - 10) {
    $('#navHome').css({ "color": "burlywood" });
    $('#navVideo').css({ "color": "azure" });
    $('#navBasic').css({ "color": "azure" });
    $('#navFeatures').css({ "color": "azure" });
    $('#navContact').css({ "color": "azure" });
  }
  if ($w.scrollTop() > targetOffsetTwo - 10) {
    $('#navHome').css({ "color": "azure" });
    $('#navVideo').css({ "color": "burlywood" });
    $('#navBasic').css({ "color": "azure" });
    $('#navFeatures').css({ "color": "azure" });
    $('#navContact').css({ "color": "azure" });
  }
  if ($w.scrollTop() > targetOffsetThree - 10) {
    $('#navHome').css({ "color": "azure" });
    $('#navVideo').css({ "color": "azure" });
    $('#navBasic').css({ "color": "burlywood" });
    $('#navFeatures').css({ "color": "azure" });
    $('#navContact').css({ "color": "azure" });
  }
  if ($w.scrollTop() > targetOffsetFour - 100) {
    $('#navHome').css({ "color": "azure" });
    $('#navVideo').css({ "color": "azure" });
    $('#navBasic').css({ "color": "azure" });
    $('#navFeatures').css({ "color": "burlywood" });
    $('#navContact').css({ "color": "azure" });
  }
  if ($w.scrollTop() + $(window).height() == $(document).height()) {
    $('#navHome').css({ "color": "azure" });
    $('#navVideo').css({ "color": "azure" });
    $('#navBasic').css({ "color": "azure" });
    $('#navFeatures').css({ "color": "azure" });
    $('#navContact').css({ "color": "burlywood" });
  }
});
