$(window).on("load", function () {
   var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

   var h =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

   var imageWidth = $(".roomImage img").width();

   var a2 = w - imageWidth;

   if (w <= 5120 && w > 1124) {
      $(".firstHalfRoomPagePart").css("width", imageWidth);
      $(".secondHalfRoomPagePart").css("width", a2);
   } else if (w <= 1124 && w > 905) {
      $(".firstHalfRoomPagePart").css("width", "80%");
      $(".roomImage img").css("width", "100%");
      $(".roomImage img").css("height", "100vh");
      $(".secondHalfRoomPagePart").css("width", "20%");
   }
   $("#slide-12").click(function () {
      $("#slide-12").addClass("active");
      $("#slide-22").removeClass("active");
   });
   $("#slide-22").click(function () {
      $("#slide-22").addClass("active");
      $("#slide-12").removeClass("active");
   });

   $(".slider").slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
   });
});
let dock1 = document.querySelector("main"),
   dock2 = document.querySelector(".secondHalfRoomPagePart"),
   dock3 = document.querySelector(".relevantRoomsContainer"),
   roomName = document.getElementById("nameOfRoom").textContent;
var cls = $("#nameOfRoom").attr("class"),
   fixedCategory = cls.replace("Category", "");

cubeRoomsData.forEach((o) => {
   if (o.name === roomName) {
      var e = `<div class="firstHalfRoomPagePart">
            <a href="javascript:history.back()" class="backArrow" aria-label="Go Back">
              <span class="leftArrow"></span>
            </a>

            <div id="slide" class="slider text-center">`;

      if (o.img.first) {
         e += `<div id="slideOne" class="roomImage">
              <img src="${o.img.first}" />
            </div>`;
      }
      if (o.img.second) {
         e += `<div id="slideTwo" class="roomImage">
              <img src="${o.img.second}" />
            </div>`;
      }
      if (o.img.third) {
         e += `<div id="slideThird" class="roomImage">
              <img src="${o.img.third}" />
            </div>`;
      }

      e += `</div>
             </div>`;

      var a = `<div class="roomLogo">\n            <img src="${o.logo}" alt="${o.alt}">\n        </div>`;
      var r = `<div class="roomDescription">\n            <p>\n                ${o.description}\n            </p>\n        </div>`;

      dock1.insertAdjacentHTML("afterbegin", e);
      dock2.insertAdjacentHTML("afterbegin", a);
      dock3.insertAdjacentHTML("beforebegin", r);
   }
});
let rooms = cubeRoomsData.filter((o) => o.name !== roomName && o.category === fixedCategory);
rooms.forEach((o) => {
   const e = `<a href="${o.link}">\n                <div class="roomBoxParent ${o.category}Hover">\n                    <div class="upperRoomBoxPart">\n                        <div class="roomBoxLogo">\n                            <img src="${o.logo}" alt="${o.alt}">\n                        </div>\n                    </div>\n                    <div class="lowerRoomBoxPart">\n                        <h3 class="${o.title_setId}">${o.name}</h3>\n                        <div class="roomBoxDif">\n                            <img src="${o.difficulty_images.physical}" alt="thunder">\n                            <img src="${o.difficulty_images.brain}" alt="glasses">\n                            <img src="${o.difficulty_images.skill}" alt="gears">\n                        </div>\n                    </div>\n                </div>\n</a>`;
   dock3.insertAdjacentHTML("afterbegin", e);
});
