let dock1 = document.querySelector("main"),
   dock2 = document.querySelector(".secondHalfRoomPagePart"),
   dock3 = document.querySelector(".relevantRoomsContainer"),
   roomName = document.getElementById("nameOfRoom").textContent;
var cls = $("#nameOfRoom").attr("class"),
   fixedCategory = cls.replace("Category", "");
cubeRoomsData.forEach((o) => {
   if (o.name === roomName) {
      const e = `<div class="firstHalfRoomPagePart">\n    <a href="javascript:history.back()" class="backArrow" aria-label="Go Back"><span class="leftArrow"></span></a>\n    <div class="roomImage slideInRight" style="background-image: url(${o.img})"></div>\n</div>`,
         a = `<div class="roomLogo">\n            <img src="${o.logo}" alt="${o.alt}">\n        </div>`,
         r = `<div class="roomDescription">\n            <p>\n                ${o.description}\n            </p>\n        </div>`;
      dock1.insertAdjacentHTML("afterbegin", e),
         dock2.insertAdjacentHTML("afterbegin", a),
         dock3.insertAdjacentHTML("beforebegin", r);
   }
});
let rooms = cubeRoomsData.filter((o) => o.name !== roomName && o.category === fixedCategory);
rooms.forEach((o) => {
   const e = `<a href="${o.link}">\n                <div class="roomBoxParent ${o.category}Hover">\n                    <div class="upperRoomBoxPart">\n                        <div class="roomBoxLogo">\n                            <img src="${o.logo}" alt="${o.alt}">\n                        </div>\n                    </div>\n                    <div class="lowerRoomBoxPart">\n                        <h3 class="${o.title_setId}">${o.name}</h3>\n                        <div class="roomBoxDif">\n                            <img src="${o.difficulty_images.physical}" alt="thunder">\n                            <img src="${o.difficulty_images.brain}" alt="glasses">\n                            <img src="${o.difficulty_images.skill}" alt="gears">\n                        </div>\n                    </div>\n                </div>\n</a>`;
   dock3.insertAdjacentHTML("afterbegin", e);
});
