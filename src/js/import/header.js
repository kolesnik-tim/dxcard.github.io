//header fixed
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function() {
  if(mywindow.scrollTop() > 50) {
    $('.header').addClass('active');
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
      $('.header').stop().removeClass('scroll');
      $('.slider__header').css({'top': 0});
      up = !up;
    } else if(newscroll < mypos && up) {
      $('.header').stop().addClass('scroll');
      $('.slider__header').css({'top': $('.header').innerHeight()});
      up = !up;
    }
    mypos = newscroll;
  } else {
    $('.header').removeClass('active');
  }
});
