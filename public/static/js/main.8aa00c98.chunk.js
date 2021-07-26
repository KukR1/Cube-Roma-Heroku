(this.webpackJsonpdesigners = this.webpackJsonpdesigners || []).push([
   [0],
   {
      117: function (e, t, a) {
         "use strict";
         a.r(t);
         var i = a(0),
            s = a.n(i),
            n = a(45),
            o = a.n(n),
            r = (a(63), a(46)),
            c = a(47),
            l = a(56),
            p = a(48),
            d = a(57),
            m = (a(64), a(49)),
            x = a.n(m),
            k = a(50),
            h = a.n(k),
            y = a(51),
            u = a.n(y),
            f = a(52),
            g = a.n(f),
            v = a(53),
            b = a.n(v),
            E = a(54),
            S = a.n(E),
            G = a(31),
            D = a(55),
            w = a.n(D),
            A = {
               loop: !1,
               autoplay: !0,
               animationData: G,
               rendererSettings: { preserveAspectRatio: "xMidYMax none" },
            },
            B = {
               loop: !1,
               autoplay: !1,
               animationData: G,
               rendererSettings: { preserveAspectRatio: "xMaxYMax none" },
            },
            V = (function (e) {
               function t(e) {
                  var a;
                  return (
                     Object(r.a)(this, t),
                     ((a = Object(l.a)(
                        this,
                        Object(p.a)(t).call(this, e)
                     )).iconClickHandler = function (e) {
                        a.state.isStopped &&
                           a.setState(
                              { selectedSvg: e, playLottie: !0, isStopped: !1 },
                              function () {
                                 document
                                    .getElementById("content")
                                    .classList.add("fade-in");
                                 setTimeout(function () {
                                    a.setState({
                                       contentDecider: a.state.selectedSvg - 1,
                                    });
                                 }, 750),
                                    setTimeout(function () {
                                       document
                                          .getElementById("content")
                                          .classList.remove("fade-in"),
                                          a.setState({
                                             playLottie: !1,
                                             isStopped: !0,
                                          });
                                    }, 1500);
                              }
                           );
                     }),
                     (a.state = {
                        selectedSvg: 1,
                        playLottie: !1,
                        isStopped: !0,
                        contentDecider: 0,
                        contentToRender: [
                           "Make a team of 2 to 6 people and come up with a team name!",
                           "In the screens located in the main aisle, players can scan their wristband anytime to see their live-score.",
                           "Each player gets an RFID wristband in which there are all his personal and his team\u2019s information.",
                           "Outside the rooms there is a display where players can choose the difficulty level of the game. Point - system is linked to the difficulty level chosen for each challenge!",
                           "Outside each entrance there is a light.If the light is green the room is free,if the light is red another team is inside trying to beat the challenge and you have to wait! In order to have access in the room, all players should scan their wristbands.By the time the last player scans its wristband, the time starts counting down!",
                           "Inside the room, if the red light is flashing you have failed to beat the challenge. However, you can try again as many times as you wish! If the light is green, congratulations! You have beaten the challenge!",
                        ],
                     }),
                     a
                  );
               }
               return (
                  Object(d.a)(t, e),
                  Object(c.a)(t, [
                     {
                        key: "render",
                        value: function () {
                           var e = this;
                           return s.a.createElement(
                              "div",
                              { className: "App" },
                              s.a.createElement(
                                 "div",
                                 null,
                                 s.a.createElement(
                                    "div",
                                    { className: "wrapper" },
                                    s.a.createElement(
                                       "p",
                                       { className: "content", id: "content" },
                                       this.state.contentToRender[
                                          this.state.contentDecider
                                       ]
                                    ),
                                    s.a.createElement(w.a, {
                                       eventListeners: [
                                          {
                                             eventName: "complete",
                                             callback: function () {
                                                console.log("hello");
                                             },
                                          },
                                       ],
                                       isStopped: this.state.isStopped,
                                       isClickToPauseDisabled:
                                          !this.state.playLottie,
                                       options: this.state.playLottie ? A : B,
                                       className: "wrapped_lottie",
                                    }),
                                    s.a.createElement("img", {
                                       src: b.a,
                                       alt: "",
                                       onClick: function () {
                                          return e.iconClickHandler(1);
                                       },
                                       style:
                                          1 !== this.state.selectedSvg
                                             ? { opacity: "0.1" }
                                             : void 0,
                                       className: "wrapped_svg_around1",
                                    }),
                                    s.a.createElement("img", {
                                       src: S.a,
                                       alt: "",
                                       onClick: function () {
                                          return e.iconClickHandler(2);
                                       },
                                       style:
                                          2 !== this.state.selectedSvg
                                             ? { opacity: "0.1" }
                                             : void 0,
                                       className: "wrapped_svg_around2",
                                    }),
                                    s.a.createElement("img", {
                                       src: g.a,
                                       alt: "",
                                       className: "wrapped_svg_around3",
                                       onClick: function () {
                                          return e.iconClickHandler(3);
                                       },
                                       style:
                                          3 !== this.state.selectedSvg
                                             ? { opacity: "0.1" }
                                             : void 0,
                                    }),
                                    s.a.createElement("img", {
                                       src: u.a,
                                       alt: "",
                                       className: "wrapped_svg_around4",
                                       onClick: function () {
                                          return e.iconClickHandler(4);
                                       },
                                       style:
                                          4 !== this.state.selectedSvg
                                             ? { opacity: "0.1" }
                                             : void 0,
                                    }),
                                    s.a.createElement("img", {
                                       src: h.a,
                                       alt: "",
                                       className: "wrapped_svg_around5",
                                       onClick: function () {
                                          return e.iconClickHandler(5);
                                       },
                                       style:
                                          5 !== this.state.selectedSvg
                                             ? { opacity: "0.1" }
                                             : void 0,
                                    }),
                                    s.a.createElement("img", {
                                       src: x.a,
                                       alt: "",
                                       className: "wrapped_svg_around6",
                                       onClick: function () {
                                          return e.iconClickHandler(6);
                                       },
                                       style:
                                          6 !== this.state.selectedSvg
                                             ? { opacity: "0.1" }
                                             : void 0,
                                    })
                                 )
                              )
                           );
                        },
                     },
                  ]),
                  t
               );
            })(s.a.Component);
         o.a.render(
            s.a.createElement(V, null),
            document.getElementById("root")
         );
      },
      31: function (e) {
         e.exports = JSON.parse(
            '{"v":"5.6.5","fr":25,"ip":0,"op":51,"w":550,"h":550,"nm":"LOOP","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"GLOW 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0],"e":[40]},{"t":34.0003255208333}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[268.738,274.512,0],"ix":2},"a":{"a":0,"k":[540,960,0],"ix":1},"s":{"a":0,"k":[95,95,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-233.313,-130.25],[-5.75,-262.5],[230.375,-130],[230.375,125],[-5.45,262.5],[-233,124.875]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[546.875,960.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":30,"op":51,"st":32.0833333333333,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"GLOW 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[40],"e":[0]},{"t":10}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[268.738,274.512,0],"ix":2},"a":{"a":0,"k":[540,960,0],"ix":1},"s":{"a":0,"k":[95,95,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-233.313,-130.25],[-5.75,-262.5],[230.375,-130],[230.375,125],[-5.45,262.5],[-233,124.875]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[546.875,960.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":10,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"GLOW","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7.917,"s":[100],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8.333,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31.667,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32.083,"s":[100],"e":[100]},{"t":40.4169921875}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[274.155,274.487,0],"ix":2},"a":{"a":0,"k":[545.688,960,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-233.313,-130.25],[-5.75,-262.5],[230.375,-130],[230.375,125],[-5.45,262.5],[-233,124.875]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0,0.286274509804,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[546.875,960.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":51,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"ROTATE_01","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8.333,"s":[0],"e":[180]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[180],"e":[180]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[180],"e":[360]},{"t":32.0830078125}],"ix":10},"p":{"a":0,"k":[277.275,259.38,0],"ix":2},"a":{"a":0,"k":[540,960,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":8.333,"s":[100,100,100],"e":[50,50,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":15,"s":[50,50,100],"e":[50,50,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":25,"s":[50,50,100],"e":[100,100,100]},{"t":32.0830078125}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-2.762,-1.401],[0,0],[0,0],[0.239,2.46]],"o":[[0,0],[-0.036,3.096],[0,0],[0,0],[-2.07,-1.349],[0,0]],"v":[[-62.331,-105.206],[-64.576,34.614],[-60.124,41.958],[64.612,105.206],[-46.391,32.916],[-50.044,26.889]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[377.269,1061.287],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[2.712,-1.495],[0,0],[0,0],[-0.153,2.466]],"o":[[0,0],[0.143,3.093],[0,0],[0,0],[2.022,-1.42],[0,0]],"v":[[58.857,-107.723],[61.758,31.938],[57.563,39.432],[-63.401,107.723],[43.524,30.873],[46.967,24.723]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[719.143,1055.056],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-2.657,-1.591],[0,0],[0,0],[2.209,-1.108]],"o":[[0,0],[2.601,-1.68],[0,0],[0,0],[-2.245,-1.034],[0,0]],"v":[[-123.32,39.006],[-5.255,-37.27],[3.333,-37.416],[123.32,34.433],[2.999,-20.975],[-4.048,-20.857]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[541.246,729.648],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":8.33333333333333,"op":32,"st":0,"bm":0}],"markers":[]}'
         );
      },
      49: function (e, t, a) {
         e.exports = a.p + "static/media/spin2.df227a15.svg";
      },
      50: function (e, t, a) {
         e.exports = a.p + "static/media/spin3.cb09fbbd.svg";
      },
      51: function (e, t, a) {
         e.exports = a.p + "static/media/spin4.d6640aee.svg";
      },
      52: function (e, t, a) {
         e.exports = a.p + "static/media/spin5.82235363.svg";
      },
      53: function (e, t, a) {
         e.exports = a.p + "static/media/spin6.8037c7fc.svg";
      },
      54: function (e, t, a) {
         e.exports = a.p + "static/media/spin7.951b8171.svg";
      },
      58: function (e, t, a) {
         e.exports = a(117);
      },
      63: function (e, t, a) {},
      64: function (e, t, a) {},
   },
   [[58, 1, 2]],
]);
//# sourceMappingURL=main.8aa00c98.chunk.js.map
