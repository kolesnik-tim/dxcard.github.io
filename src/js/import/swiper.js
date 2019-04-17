import Swiper from 'swiper';


// //home
// var swiper = new Swiper('.swiper-shares', {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-shares-next',
//     prevEl: '.swiper-shares-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination-shares',
//     clickable: true,
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 1,
//       spaceBetween: 30
//     }
//   }
// });

var swiper2 = new Swiper('.swiper-animated', {
  slidesPerView: 'auto',
  spaceBetween: 3,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  }
});
if($('.swiper-animated').length) {
  swiper2.update();
}


var swiper2 = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
  }
});
