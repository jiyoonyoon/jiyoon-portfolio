window.onbeforeunload = function () {
  $('.loading').show();
}
$(window).on('load', function () {
  $('.loading').fadeOut(1000);
});