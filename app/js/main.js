   $(document).ready(function() {

     var heightt = 100
     /*,
       heightt = $(window).height()*/
     ;

     $(window).scroll(function() {
       if ($(window).scrollTop() > heightt) {
         $('.left_logo').css("display", "block");
         $('.navigation').css("position", "fixed");
         $('.fix_search').css("display", "block");
       } else {
         $('.left_logo').css("display", "none");
         $('.navigation').css("position", "relative");
         $('.fix_search').css("display", "none");
       }
     });

     $(".rslides").responsiveSlides({
       speed: 800,
       timeout: 2500,
       nav: true,
       pager: false
     });

     $('.mob_menu').click(function() {
       $('.sub_menumob').css("z-index", "5000");
       $('.sub_menumob').css("opacity", "1");
       $('.sub_menumob').css("transition", " 0.35s ease");
       $('.sub_menumob').css("top", "0");
       $('.sub_menumob').css("transition", " 0.35s ease");
     });

     $('.sub_close').click(function() {
       $('.sub_menumob').css("z-index", "0");
       $('.sub_menumob').css("opacity", "0");
       $('.sub_menumob').css("transition", " 0.05s ease");
       $('.sub_menumob').css("top", "-2000px");
       $('.sub_menumob').css("transition", " 0.05s ease");
     });

     $('.submenu').mouseleave(function() {
       $(this).css("top", "-600px");
       $(this).css("transition", " 1s ease");
     });


     $(".campaign_two").hover(function() {
       $(".campaign_two .img").css("transform", "scale(1.02)");
       $(".campaign_two .social").css("display", "block");


     }, function() {
       $(".campaign_two .img").css("transform", "scale(1)");
       $(".campaign_two .social").css("display", "none");
     });


     $(".campaign_three").hover(function() {
       $(".campaign_three .img").css("transform", "scale(1.02)");
       $(".campaign_three .social").css("display", "block");


     }, function() {
       $(".campaign_three .img").css("transform", "scale(1)");
       $(".campaign_three .social").css("display", "none");
     });


     $(".two").hover(function() {
       $(".two .img").css("transform", "scale(1.02)");
       $(".two .social").css("display", "block");


     }, function() {
       $(".two .img").css("transform", "scale(1)");
       $(".two .social").css("display", "none");
     });


     $(".three").hover(function() {
       $(".three .img").css("transform", "scale(1.02)");
       $(".three .social").css("display", "block");


     }, function() {
       $(".three .img").css("transform", "scale(1)");
       $(".three .social").css("display", "none");
     });

     $(".four").hover(function() {
       $(".four .img").css("transform", "scale(1.02)");
       $(".four .social").css("display", "block");


     }, function() {
       $(".four .img").css("transform", "scale(1)");
       $(".four .social").css("display", "none");
     });


     $(".ninetwo").hover(function() {
       $(".ninetwo .img").css("transform", "scale(1.02)");
       $(".ninetwo .social").css("display", "block");


     }, function() {
       $(".ninetwo .img").css("transform", "scale(1)");
       $(".ninetwo .social").css("display", "none");
     });


     $(".ninethree").hover(function() {
       $(".ninethree .img").css("transform", "scale(1.02)");
       $(".ninethree .social").css("display", "block");


     }, function() {
       $(".ninethree .img").css("transform", "scale(1)");
       $(".ninethree .social").css("display", "none");
     });

     $(".listone").hover(function() {
       $(".listone .overlay").css("display", "block");
     }, function() {
       $(".listone .overlay").css("display", "none");
     });

     $(".listtwo").hover(function() {
       $(".listtwo .overlay").css("display", "block");
     }, function() {
       $(".listtwo .overlay").css("display", "none");
     });

     $(".listthree").hover(function() {
       $(".listthree .overlay").css("display", "block");
     }, function() {
       $(".listthree .overlay").css("display", "none");
     });

     $(".listfour").hover(function() {
       $(".listfour .overlay").css("display", "block");
     }, function() {
       $(".listfour .overlay").css("display", "none");
     });

     $(".listeat").click(function() {
       $(".contenteat").css("display", "block");
       $(".contentdrink").css("display", "none");
       $(".contentcook").css("display", "none");
       $(".contententer").css("display", "none");
       $(".contenttravel").css("display", "none");
       $(".listeat").addClass('active');
       $(".listdrink").removeClass('active');
       $(".listcook").removeClass('active');
       $(".listenter").removeClass('active');
       $(".listtra").removeClass('active');
     });

     $(".listdrink").click(function() {
       $(".contentdrink").css("display", "block");
       $(".contenteat").css("display", "none");
       $(".contentcook").css("display", "none");
       $(".contententer").css("display", "none");
       $(".contenttravel").css("display", "none");
       $(".listdrink").addClass('active');
       $(".listeat").removeClass('active');
       $(".listcook").removeClass('active');
       $(".listenter").removeClass('active');
       $(".listtra").removeClass('active');
     });

     $(".listcook").click(function() {
       $(".contentcook").css("display", "block");
       $(".contenteat").css("display", "none");
       $(".contentdrink").css("display", "none");
       $(".contententer").css("display", "none");
       $(".contenttravel").css("display", "none");
       $(".listcook").addClass('active');
       $(".listeat").removeClass('active');
       $(".listdrink").removeClass('active');
       $(".listenter").removeClass('active');
       $(".listtra").removeClass('active');
     });

     $(".listenter").click(function() {
       $(".contententer").css("display", "block");
       $(".contenteat").css("display", "none");
       $(".contentdrink").css("display", "none");
       $(".contentcook").css("display", "none");
       $(".contenttravel").css("display", "none");
       $(".listenter").addClass('active');
       $(".listeat").removeClass('active');
       $(".listdrink").removeClass('active');
       $(".listcook").removeClass('active');
       $(".listtra").removeClass('active');
     });

     $(".listtra").click(function() {
       $(".contenttravel").css("display", "block");
       $(".contenteat").css("display", "none");
       $(".contentdrink").css("display", "none");
       $(".contententer").css("display", "none");
       $(".contentcook").css("display", "none");
       $(".listtra").addClass('active');
       $(".listeat").removeClass('active');
       $(".listdrink").removeClass('active');
       $(".listenter").removeClass('active');
       $(".listcook").removeClass('active');
     });


     $(".owl-hero").owlCarousel({
       loop: true,
       margin: 0,
       nav: true,
       autoplay: true,
       autoplayTimeout: 5000,
       autoplaySpeed: 600,
       navSpeed: 600,
       dotsSpeed: 600,
       responsive: {
         0: {
           items: 1
         },
         768: {
           items: 1
         },
         1024: {
           items: 1
         }
       }
     });

     $(".owl-campaign").owlCarousel({
       loop: true,
       margin: 0,
       nav: true,
       autoplay: true,
       autoplayTimeout: 5000,
       autoplaySpeed: 600,
       navSpeed: 600,
       dotsSpeed: 600,
       responsive: {
         0: {
           items: 1
         },
         768: {
           items: 1
         },
         1024: {
           items: 2
         },
         1280: {
           items: 3
         }
       }
     });

     $(".owl-third").owlCarousel({
       loop: true,
       margin: 0,
       nav: true,
       autoplay: false,
       autoplayTimeout: 5000,
       autoplaySpeed: 600,
       navSpeed: 600,
       dotsSpeed: 600,
       responsive: {
         0: {
           items: 1
         },
         768: {
           items: 2
         },
         1024: {
           items: 2
         },
         1280: {
           items: 3
         }
       }
     });

     $(".owl-fourth").owlCarousel({
       loop: true,
       margin: 0,
       nav: true,
       autoplay: false,
       autoplayTimeout: 5000,
       autoplaySpeed: 600,
       navSpeed: 600,
       dotsSpeed: 600,
       responsive: {
         0: {
           items: 1
         },
         768: {
           items: 1
         },
         1024: {
           items: 1
         }
       }
     });

   });
