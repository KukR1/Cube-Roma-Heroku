let dock = document.querySelector(".roomBoxesContainer");
cubeRoomsData.forEach((o) => {
   const a = `<a href="${o.link}" class="${o.category}">\n                <div class="roomBoxParent ${o.category}Hover">\n                    <div class="upperRoomBoxPart">\n                        <div class="roomBoxLogo">\n                            <img src="${o.logo}" alt="${o.alt}">\n                        </div>\n                    </div>\n                    <div class="lowerRoomBoxPart">\n                        <h3 class="${o.title_setId}">${o.name}</h3>\n                        <div class="roomBoxDif">\n                              <img src="${o.difficulty_images.physical}" alt="thunder">\n                            <img src="${o.difficulty_images.brain}" alt="glasses">\n                            <img src="${o.difficulty_images.skill}" alt="gears">\n                        </div>\n                    </div>\n                </div>\n</a>`;
   dock.insertAdjacentHTML("afterbegin", a);
});

$(window).on("load", function () {
   var $grid = $(".roomsGrid").isotope({
      layoutMode: "fitRows",
   });

   // filter items on button click
   $(".filter-button-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
         filter: filterValue,
      });
   });
});
