$(document).ready(function () {
   var isScrolling;

   // Listen for scroll events
   window.addEventListener(
      "scroll",
      function (event) {
         // Clear our timeout throughout the scroll
         window.clearTimeout(isScrolling);

         // Set a timeout to run after scrolling ends
         isScrolling = setTimeout(function () {
            // Run the callback
            if ($("body").hasClass("disable-scroll")) {
               $("body").removeClass("disable-scroll");
               $(".sidenav").removeClass("drop");
               $("#burger").removeClass("toggle");
            }
         }, 2);
      },
      false
   );
   $(".target-burger").click(function (e) {
      $(".target-burger").toggleClass("toggle"),
         $(".sidenav").toggleClass("drop"),
         $("body").toggleClass("disable-scroll"),
         $(".flags").toggleClass("drop"),
         $(
            "#homePageTop, #iAmCubio, #whatIsCube, #categories, #cube_experience, #whoCanPlay, #contact-section, #faq, #join, .allCategories, .roomBoxesContainer"
         ).toggleClass("blurall"),
         $(".logo").toggleClass("logonav"),
         $("body").toggleClass("overfl");
   }),
      /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
         document.addEventListener("touchstart", (e) => {}),
      $('a.nav-links[href*="#"]:not([href="#"])').click(function () {}),
      $(".nav-links").click(function () {
         $("#burger").hasClass("toggle") &&
            ($(".target-burger").removeClass("toggle"),
            $(".navbar").removeClass("drop"),
            $(".flags").removeClass("drop"),
            $(
               "#homePageTop, #iAmCubio, #whatIsCube, #categories, #cube_experience, #whoCanPlay, #contact-section, #faq, #join, .allCategories, .roomBoxesContainer"
            ).removeClass("blurall"),
            $(".logo").removeClass("logonav"),
            $("body").removeClass("overfl"));
      });
   var e = 0;
   $(window).scroll(function () {
      var o = $(this).scrollTop();
      o < 10 ||
         (o > 0 &&
            o < $(document).height() - $(window).height() &&
            (o > e && $("#nav2")
               ? $("#nav2").removeClass("is-visible").addClass("is-hidden")
               : $("#nav2")
                    .removeClass("is-hidden")
                    .addClass("is-visible")
                    .addClass("scrolling"),
            (e = o)));
   });
});
