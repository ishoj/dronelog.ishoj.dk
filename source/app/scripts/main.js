

(function($) {


  'use strict';

  /***************************************/
  /****  D O C U M E N T   R E A D Y  ****/
  /***************************************/

  $(document).ready(function() {

    var isMenu = false;


    // BURGER MENU
    $('.burger a').click(function(){

      $(this).toggleClass('action');
      $('.dimmer').toggleClass('action');

      if(!isMenu) {
        isMenu = true;
        $('.nav-mobile').toggleClass('action');
      }
      else {
        isMenu = false;
        $('.nav-mobile').toggleClass('action');
      }

    });


    // JQUERY-MATCH-HEIGHTS
    // https://github.com/liabru/jquery-match-height
    $(function() {
      $('[data-match-heights] > div').matchHeight();
    });


    $(window).resize(function() {
      var windowWidth = $(window).width();
      if(windowWidth >= 960) {
        if(isMenu) {
          $('.burger a, .nav-mobile, .dimmer').toggleClass('action');
          isMenu = false;
        }
      }
    });

    function setDroneMenu() {
      var windowWidth = $(window).width();
      // desktop
      if(windowWidth >= 960) {
        if($('.log-menu').hasClass('hide-me')) {
          $('.log-menu').removeClass('hide-me');
        }
      }
      // mobile
      else {
        if(!$('.log-menu').hasClass('hide-me')) {
          $('.log-menu').addClass('hide-me');
        }
      }
    }
    // INIT
    setDroneMenu();

    $(window).resize(function() {
      setDroneMenu();
    });




  });


  /*********************************/
  /****  W I N D O W   L O A D  ****/
  /*********************************/

  $(window).load(function() {



  });


})(jQuery);
