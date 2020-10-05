jQuery(document).ready(function(){

    // start hover menu
    $('ul.custom-hover li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });
    // start hover menu




    //start slick slider
      
        $('.home-slick-slider').slick({
            slidesToShow: 1,
            dots: true,
            infinite: true,
            speed: 700,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            arrow:true
        });
   

        // our team
        jQuery('.our-team ').owlCarousel({
            items:1,
            loop:true,
            // margin:10,
            nav:false,
            // autoplay:true,
            autoplayTimeout:10000,
            dots:true,
            slideTransition:'linear',
            slideBy:1,
            // navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                992:{
                    items:3
                }

            }
        
        });

   // happy client
    jQuery('.happy-client ').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        dots:true,
        slideTransition:'linear',
        slideBy:1,
        // navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    
    });


    //active current page
    jQuery(' ul li a').click(function(){
        jQuery('li a').removeClass('active');
        jQuery('li a').addClass('active');
    })

});

// //sticky header
// $(window).scroll(function(){
//     if ($(window).scrollTop() >=10) {
//         $('nav').addClass('fixed-header');
//     }
//     else {
//         $('nav').removeClass('fixed-header');
//     }
// });

