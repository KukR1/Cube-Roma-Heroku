let dock = document.querySelector(".roomBoxesContainer");
var cls = $(".roomBoxesContainer").attr("id"),
   fixedCategory = cls.replace("Category", "");
let rooms = cubeRoomsData.filter((o) => o.category === fixedCategory);
rooms.forEach((o) => {
   const e = `<a href="${o.link}" class="${o.category}">\n                <div class="roomBoxParent ${o.category}Hover">\n                    <div class="upperRoomBoxPart">\n                        <div class="roomBoxLogo">\n                            <img src="${o.logo}" alt="${o.alt}">\n                        </div>\n                    </div>\n                    <div class="lowerRoomBoxPart text-center">\n                        <h3 class="${o.title_setId}">${o.name}</h3>\n                        <div class="roomBoxDif">\n                              <img src="${o.difficulty_images.physical}" alt="thunder">\n                            <img src="${o.difficulty_images.brain}" alt="glasses">\n                            <img src="${o.difficulty_images.skill}" alt="skills">\n                        </div>\n                    </div>\n                </div>\n</a>`;
   dock.insertAdjacentHTML("afterbegin", e);
});
