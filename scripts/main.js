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



   $("#md-popup-2").fancybox({
                   clickSlide: false,
                  clickOutside: false,
               }).trigger('click');
    // $("#md-popup-3").fancybox().trigger('click');
 // $("#md-popup-7").fancybox().trigger('click');
  // $("#md-popup-8").fancybox().trigger('click');


