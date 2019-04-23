import '../lib/selectize.min.js';
import AOS from 'aos';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';

//select
// $('select').selectize();

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });





import skrollr from '../lib/skrollr.js';
$(document).ready(function() {
  var s = skrollr.init({
    smoothScrolling: true,
  });
});


//footer
$('.footer__nav__block h3').on('click', function() {
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next('ul').slideUp();
  } else{
    $('.footer__nav__block h3').removeClass('active').next('ul').slideUp();
    $(this).addClass('active');
    $(this).next('ul').slideDown();
  }
});

//animate

AOS.init({
  duration: 1500,
  offset: 200,
});
