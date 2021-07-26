let thisRoomName = document.getElementById("nameOfRoom").textContent;
cubeRoomsData.forEach((cubeRoom) => {
   if (cubeRoom.name === thisRoomName) {
      var circle1 = document.getElementById("physicalCircle"),
         text1 = document.getElementById("physicalDifficultyPercent"),
         angle1 = 0,
         percent1 = 4.7 * cubeRoom.difficulty_percent.physical;
      window.timer1 = window.setInterval(
         function () {
            circle1.setAttribute("stroke-dasharray", angle1 + ", 20000"),
               (text1.innerHTML = parseInt((angle1 / 471) * 100) + "%"),
               angle1 >= percent1 && window.clearInterval(window.timer1),
               470 === percent1
                  ? (text1.setAttribute("transform", "translate(25 198.77)"),
                    (angle1 += 6))
                  : (angle1 += 7);
         }.bind(this),
         30
      );
      var circle2 = document.getElementById("brainCircle"),
         text2 = document.getElementById("brainDifficultyPercent"),
         angle2 = 0,
         percent2 = 4.7 * cubeRoom.difficulty_percent.brain;
      window.timer2 = window.setInterval(
         function () {
            circle2.setAttribute("stroke-dasharray", angle2 + ", 20000"),
               (text2.innerHTML = parseInt((angle2 / 471) * 100) + "%"),
               angle2 >= percent2 && window.clearInterval(window.timer2),
               470 === percent2
                  ? (text2.setAttribute("transform", "translate(25 198.77)"),
                    (angle2 += 6))
                  : (angle2 += 7);
         }.bind(this),
         30
      );
      var circle3 = document.getElementById("skillCircle"),
         text3 = document.getElementById("skillDifficultyPercent"),
         angle3 = 0,
         percent3 = 4.7 * cubeRoom.difficulty_percent.skill;
      window.timer3 = window.setInterval(
         function () {
            circle3.setAttribute("stroke-dasharray", angle3 + ", 20000"),
               (text3.innerHTML = parseInt((angle3 / 471) * 100) + "%"),
               angle3 >= percent3 && window.clearInterval(window.timer3),
               470 === percent3
                  ? (text3.setAttribute("transform", "translate(25 198.77)"),
                    (angle3 += 6))
                  : (angle3 += 7);
         }.bind(this),
         30
      );
   }
});
