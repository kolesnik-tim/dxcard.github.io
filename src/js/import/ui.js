import '../lib/selectize.min.js';
import Parallax from 'parallax-js';
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



var improvement__parallax_1 = document.getElementById('improvement__parallax-1');
var parallaxInstance = new Parallax(improvement__parallax_1);


var improvement__parallax_2 = document.getElementById('improvement__parallax-2');
var parallaxInstance = new Parallax(improvement__parallax_2);


var improvement__parallax_3 = document.getElementById('improvement__parallax-3');
var parallaxInstance = new Parallax(improvement__parallax_3);
