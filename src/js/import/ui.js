import '../lib/selectize.min.js';
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