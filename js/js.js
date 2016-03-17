$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.navbar').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.navbar').css({position: 'fixed', top: '0px'});
                        $('#stickyalias').css('display', 'block');
                } else {
                        $('.navbar').css({position: 'static', top: '0px'});
                        $('#stickyalias').css('display', 'none');
                }
        });
  });

  var touch = Modernizr.touch;
  $('.Gustav').imageScroll({
    imageAttribute: (touch === true) ? 'image-mobile' : 'image',
    touch: touch
  });
