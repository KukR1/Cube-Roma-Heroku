var animation2 = bodymovin.loadAnimation({
      wrapper: document.getElementById("bm2"),
      renderer: "svg",
      speed: 1,
      loop: !1,
      autoplay: !1,
      path: "../js/skills.json",
   }),
   isComplete2 = !0;
document.getElementById("bm2").addEventListener("mouseenter", function () {
   isComplete2 && (animation2.goToAndPlay(0), (isComplete2 = !1));
}),
   animation2.addEventListener("complete", function () {
      isComplete2 = !0;
   });
var animation3 = bodymovin.loadAnimation({
      wrapper: document.getElementById("bm3"),
      renderer: "svg",
      speed: 1,
      loop: !1,
      autoplay: !1,
      path: "../js/all.json",
   }),
   isComplete3 = !0;
document.getElementById("bm3").addEventListener("mouseenter", function () {
   isComplete3 && (animation3.goToAndPlay(0), (isComplete3 = !1));
}),
   animation3.addEventListener("complete", function () {
      isComplete3 = !0;
   });
var animation4 = bodymovin.loadAnimation({
      wrapper: document.getElementById("bm0"),
      renderer: "svg",
      speed: 1,
      loop: !1,
      autoplay: !1,
      path: "../js/physical.json",
   }),
   isComplete4 = !0;
document.getElementById("bm0").addEventListener("mouseenter", function () {
   isComplete4 && (animation4.goToAndPlay(0), (isComplete4 = !1));
}),
   animation4.addEventListener("complete", function () {
      isComplete4 = !0;
   });
var animation5 = bodymovin.loadAnimation({
      wrapper: document.getElementById("bm5"),
      renderer: "svg",
      speed: 1,
      loop: !1,
      autoplay: !1,
      path: "../js/brain.json",
   }),
   isComplete5 = !0;
document.getElementById("bm5").addEventListener("mouseenter", function () {
   isComplete5 && (animation5.goToAndPlay(0), (isComplete5 = !1));
}),
   animation5.addEventListener("complete", function () {
      isComplete5 = !0;
   });

/* /////
 SVG ID PICKER FROM home.blade 
*/ //////
document.getElementById("exp_chall").innerHTML = svgExploreChallenges.exp_chall;
document.getElementById("cubioWlc").innerHTML = svgCubio.cubioWlc;
document.getElementById("cubioWlc1").innerHTML = svgCubio.cubioWlc1;
document.getElementById("fam").innerHTML = svgFamilies.fam;
document.getElementById("fam1").innerHTML = svgFamilies.fam1;
document.getElementById("fam2").innerHTML = svgFamilies.fam2;
document.getElementById("fam3").innerHTML = svgFamilies.fam3;
document.getElementById("fam4").innerHTML = svgFamilies.fam4;
document.getElementById("fr").innerHTML = svgFriends.fr;
document.getElementById("fr1").innerHTML = svgFriends.fr1;
document.getElementById("fr2").innerHTML = svgFriends.fr2;
document.getElementById("fr3").innerHTML = svgFriends.fr3;
document.getElementById("st").innerHTML = svgStudents.st;
document.getElementById("st1").innerHTML = svgStudents.st1;
document.getElementById("st2").innerHTML = svgStudents.st2;
document.getElementById("st3").innerHTML = svgStudents.st3;
document.getElementById("ath").innerHTML = svgAthletes.ath;
document.getElementById("ath1").innerHTML = svgAthletes.ath1;
document.getElementById("ath2").innerHTML = svgAthletes.ath2;
document.getElementById("ath3").innerHTML = svgAthletes.ath3;
document.getElementById("ath4").innerHTML = svgAthletes.ath4;
document.getElementById("team").innerHTML = svgTeamBuilding.team;
document.getElementById("team0").innerHTML = svgTeamBuilding.team0;
document.getElementById("team1").innerHTML = svgTeamBuilding.team1;
document.getElementById("team2").innerHTML = svgTeamBuilding.team2;
document.getElementById("team3").innerHTML = svgTeamBuilding.team3;
document.getElementById("team4").innerHTML = svgTeamBuilding.team4;
document.getElementById("school").innerHTML = svgSchoolTrips.school;
document.getElementById("school0").innerHTML = svgSchoolTrips.school0;
document.getElementById("school1").innerHTML = svgSchoolTrips.school1;
document.getElementById("school2").innerHTML = svgSchoolTrips.school2;
document.getElementById("school3").innerHTML = svgSchoolTrips.school3;
document.getElementById("birthdays").innerHTML = svgBirthdays.birthdays;
document.getElementById("birthdays0").innerHTML = svgBirthdays.birthdays0;
document.getElementById("birthdays1").innerHTML = svgBirthdays.birthdays1;
document.getElementById("birthdays2").innerHTML = svgBirthdays.birthdays2;
document.getElementById("birthdays3").innerHTML = svgBirthdays.birthdays3;
document.getElementById("birthdays4").innerHTML = svgBirthdays.birthdays4;
document.getElementById("mask1").innerHTML = svgMasks.mask1;
document.getElementById("mask2").innerHTML = svgMasks.mask2;
