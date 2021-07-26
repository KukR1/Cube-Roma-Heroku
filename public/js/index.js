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
