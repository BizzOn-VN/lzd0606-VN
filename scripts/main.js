'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});



   // $("#md-popup-2").fancybox({
   //                 clickSlide: false,
   //                clickOutside: false,
   //             }).trigger('click');

 // $("#md-popup-7").fancybox({
   //                 clickSlide: false,
   //                clickOutside: false,
   //             }).trigger('click');
 // $("#md-popup-8").fancybox({
   //                 clickSlide: false,
   //                clickOutside: false,
   //             }).trigger('click');
// $("#md-popup-9").fancybox({
//                    clickSlide: false,
//                   clickOutside: false,
//                }).trigger('click');


$(document).ready(function() {
    $('[data-fancybox]').fancybox({
        clickOutside: false,
        clickSlide: false
    });
});