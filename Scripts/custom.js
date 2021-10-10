/* ------------------------------- 768 -------------------------------
  Project Name : TORNADOPACK
  Project Date: 29 July, 2016
  Author Website : http://www.faisalsamroz.com
  Author Email : faisalsamroz@gmail.com
---------------------------------------------------------------------- */

jQuery(document).ready(function(){
  
  "use strict";

  // Add animations on scroll

  if(jQuery('html').hasClass('.animate-in')){
    var topcoords = jQuery('.animate-in').offset().top;
  }
  jQuery(function(){
    // Get each on load data attribute elements
    jQuery('.animate-in:first').addClass('animated');
    jQuery('.animate-in').each(function(){
      var animationStyle = jQuery(this).data('animation');
      if(animationStyle == 'load'){
        var animationSpeed = jQuery(this).data('speed');
        jQuery(this).addClass('animated');
        jQuery(this).css({'transition':animationSpeed+'s'}); 
      }
    });
    var jQueryelems = jQuery('.animate-in');
    var winheight = jQuery(window).height();
    var fullheight = jQuery(document).height();     
    jQuery(window).scroll(function(){
      animate_elems();
    });
    function animate_elems() {
      var wintop = jQuery(window).scrollTop(); 
      jQueryelems.each(function(){
        var jQueryelm = jQuery(this);
        var animationShow = jQueryelm.data('show-screen');
        var animationSpeed = jQueryelm.data('speed');
        var topcoords = jQueryelm.offset().top; 
        if(wintop > (topcoords - (winheight*animationShow))) {
          jQueryelm.addClass('animated');
          jQueryelm.css({'transition':animationSpeed+'s'});
        }
              
      });
      
    } 
  });
  
   	
	
  // Mobile navigation
  jQuery(".flexnav").flexNav({
    animationSpeed: 250,
    transitionOpacity: !0,
    buttonSelector: ".menu-button",
    hoverIntent: !1,
    hoverIntentTimeout: 150,
    calcItemWidths: !1
  });

  // Remove class
	jQuery(".nav ul li a").click(function() {
		jQuery(this).parents(".flexnav").removeClass("flexnav-show");
	});
   
  // Go to target element on click

  jQuery(".scroll").click(function(event){
    var wd = jQuery(window).width();
    var gethash = jQuery(this).attr('href');
    if ( gethash.indexOf('#') > -1 ) {
      event.preventDefault();
      var dest=0;
      if(jQuery(this.hash).offset().top > jQuery(document).height()-jQuery(window).height()){
        dest=jQuery(document).height()-jQuery(window).height();
      } else{
      if(wd < 992){
        dest=jQuery(this.hash).offset().top-90; 
      } 
      if(wd < 474){
        dest=jQuery(this.hash).offset().top-90; 
      } else {
        dest=jQuery(this.hash).offset().top-90;
      }
    }
      //go to destination
      jQuery('html,body').animate({scrollTop:dest}, 1000,'swing');
    }
  });

});



// Reponsive carousel
jQuery(window).on('load',function(){
  var wd = jQuery(window).width();

  if(wd < 768){
    jQuery('#wrap').find('.testimonial-block').unwrap();
    jQuery('.testimonial-block').addClass('item');
    jQuery('.carousel-inner').find('.testimonial-block:first').addClass('active');
  }    
}); 