(window.webpackJsonp = window.webpackJsonp || []).push([
   [0],
   [
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function (e, t, n) {
         e.exports = n.p + "static/media/CUBE.88f64e26.svg";
      },
      function (e, t, n) {
         e.exports = n.p + "static/media/SKILLS.076c7146.svg";
      },
      function (e, t, n) {
         e.exports = n.p + "static/media/BRAIN.649b9889.svg";
      },
      function (e, t, n) {
         e.exports = n.p + "static/media/PHYSICAL.6e74d489.svg";
      },
      function (e, t, n) {
         e.exports = n.p + "static/media/REPLAY.bc41e784.svg";
      },
      function (e, t, n) {
         e.exports = n(28);
      },
      ,
      ,
      ,
      ,
      function (e, t, n) {},
      ,
      function (e, t, n) {},
      ,
      function (e, t, n) {},
      ,
      function (e, t, n) {},
      ,
      function (e, t, n) {
         "use strict";
         n.r(t);
         var a = n(0),
            r = n.n(a),
            c = n(9),
            i = n.n(c),
            l = (n(20), n(1)),
            o = n(2),
            u = n(4),
            s = n(3),
            m = n(5),
            p = n(6),
            f = n(7),
            y = n(10),
            g = n.n(y),
            d = n(11),
            v = n.n(d),
            T = n(12),
            h = n.n(T),
            E = n(13),
            b = n.n(E),
            S = { TWO_PLAYERS: 0, VERSUS_COMPUTER: 1 },
            O = [
               r.a.createElement("img", {
                  src: g.a,
                  alt: "cube Logo",
                  className: "svgPlaying",
               }),
               r.a.createElement("img", {
                  src: h.a,
                  alt: "cube Logo",
                  className: "svgPlaying",
               }),
               r.a.createElement("img", {
                  src: v.a,
                  alt: "cube Logo",
                  className: "svgPlaying",
               }),
               r.a.createElement("img", {
                  src: b.a,
                  alt: "cube Logo",
                  className: "svgPlaying",
               }),
            ],
            x = { HUMAN: 0, COMPUTER: 1 },
            P = function (e) {
               return e
                  .map(function (e, t) {
                     return [e, t];
                  })
                  .filter(function (e) {
                     return null === e[0];
                  });
            },
            j = function (e) {
               return P(e).length > 0;
            },
            R = function (e) {
               for (
                  var t = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6],
                     ],
                     n = 0;
                  n < t.length;
                  n++
               ) {
                  var a = Object(f.a)(t[n], 3),
                     r = a[0],
                     c = a[1],
                     i = a[2];
                  if (null !== e[r] && e[r] === e[c] && e[r] === e[i])
                     return {
                        position:
                           n >= 0 && n <= 2
                              ? "h h".concat(n)
                              : n >= 3 && n <= 5
                              ? "v v".concat(n - 3)
                              : "d".concat(n - 6),
                        iconType: e[r],
                        isTie: null,
                     };
               }
               return { position: "", iconType: null, isTie: !j(e) || null };
            },
            I = function (e, t, n) {
               return [].concat(
                  Object(p.a)(e.slice(0, t)),
                  [n],
                  Object(p.a)(e.slice(t + 1, e.length))
               );
            },
            C = function (e) {
               var t,
                  n,
                  a = P(e);
               return a.length > 0
                  ? a[
                       ((t = 0),
                       (n = a.length),
                       t + Math.floor(Math.random() * (n - t)))
                    ][1]
                  : null;
            },
            N = function e(t, n, a, r) {
               var c = (function (e, t) {
                  for (
                     var n = [
                           [0, 1, 2],
                           [3, 4, 5],
                           [6, 7, 8],
                           [0, 3, 6],
                           [1, 4, 7],
                           [2, 5, 8],
                           [0, 4, 8],
                           [2, 4, 6],
                        ],
                        a = 0;
                     a < n.length;
                     a++
                  ) {
                     var r = Object(f.a)(n[a], 3),
                        c = r[0],
                        i = r[1],
                        l = r[2];
                     if (null !== e[c] && e[c] === e[i] && e[c] === e[l])
                        return e[c] === t ? 10 : -10;
                  }
                  return 0;
               })(t, a);
               if (10 === c) return c - n;
               if (-10 === c) return c + n;
               if (!j(t)) return 0;
               var i,
                  l = t.length;
               if (r) {
                  i = -1e3;
                  for (var o = 0; o < l; o++) {
                     if (null === t[o]) {
                        var u = I(t, o, a);
                        i = Math.max(i, e(u, n + 1, a, !r));
                     }
                  }
               } else {
                  i = 1e3;
                  for (var s = 0; s < l; s++) {
                     if (null === t[s]) {
                        var m = I(t, s, 1 - a);
                        i = Math.min(i, e(m, n + 1, a, !r));
                     }
                  }
               }
               return i;
            },
            M = function (e, t) {
               for (var n = -1e3, a = null, r = e.length, c = 0; c < r; c++) {
                  if (null === e[c]) {
                     var i = I(e, c, t),
                        l = N(i, 0, t, !1);
                     l > n && ((n = l), (a = c));
                  }
               }
               return a;
            },
            U = 500,
            w = r.a.createContext(),
            A = (function (e) {
               function t() {
                  var e, n;
                  Object(l.a)(this, t);
                  for (
                     var a = arguments.length, r = new Array(a), c = 0;
                     c < a;
                     c++
                  )
                     r[c] = arguments[c];
                  return (
                     ((n = Object(u.a)(
                        this,
                        (e = Object(s.a)(t)).call.apply(e, [this].concat(r))
                     )).initState = {
                        gameType: S.VERSUS_COMPUTER,
                        currentIcon: 0,
                        playerTurn: 1,
                        cells: new Array(9).fill(null),
                        gameState: {
                           position: "",
                           iconType: null,
                           isTie: null,
                        },
                        gamesPlayed: 1,
                     }),
                     (n.state = {
                        gameType: n.initState.gameType,
                        currentIcon: n.initState.currentIcon,
                        playerTurn: n.initState.playerTurn,
                        cells: n.initState.cells,
                        gameState: n.initState.gameState,
                        gamesPlayed: n.initState.gamesPlayed,
                        changeType: function (e) {
                           n.state.gameType !== e && n.initNewGame(e);
                        },
                        humanPlay: function (e) {
                           n.humanPlay(e);
                        },
                        newGame: function () {
                           n.initNewGame(n.state.gameType);
                        },
                     }),
                     (n.initGame = function () {
                        n.state.gameType === S.VERSUS_COMPUTER &&
                           n.state.playerTurn === x.COMPUTER &&
                           (n.timeout && clearTimeout(n.timeout),
                           (n.timeout = setTimeout(function () {
                              var e = C(n.state.cells);
                              n.computerPlay(e);
                           }, U)));
                     }),
                     (n.initNewGame = function () {
                        var e =
                           arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : n.initState.gameType;
                        n.setState(
                           function () {
                              return {
                                 gameType: e,
                                 currentIcon: 0,
                                 playerTurn: 1,
                                 cells: n.initState.cells,
                                 gameState: n.initState.gameState,
                                 gamesPlayed: n.state.gamesPlayed + 1,
                              };
                           },
                           function () {
                              n.initGame();
                           }
                        );
                     }),
                     (n.applyState = function (e, t) {
                        var n = e.cells,
                           a = 1 - e.currentIcon,
                           r = 1 - e.playerTurn,
                           c = I(n, t, e.currentIcon);
                        return {
                           gameState: R(c),
                           currentIcon: a,
                           playerTurn: r,
                           cells: c,
                        };
                     }),
                     (n.humanPlay = function (e) {
                        "" !== n.state.gameState.position ||
                           null !== n.state.cells[e] ||
                           (n.state.gameType !== S.TWO_PLAYERS &&
                              n.state.playerTurn !== x.HUMAN) ||
                           n.setState(
                              function (t) {
                                 return n.applyState(t, e);
                              },
                              function () {
                                 "" === n.state.gameState.position &&
                                    n.state.gameType === S.VERSUS_COMPUTER &&
                                    n.state.playerTurn === x.COMPUTER &&
                                    setTimeout(function () {
                                       n.makeAIMove();
                                    }, U);
                              }
                           );
                     }),
                     (n.computerPlay = function (e) {
                        "" === n.state.gameState.position &&
                           null === n.state.cells[e] &&
                           n.state.gameType === S.VERSUS_COMPUTER &&
                           n.state.playerTurn === x.COMPUTER &&
                           n.setState(function (t) {
                              return n.applyState(t, e);
                           });
                     }),
                     (n.makeAIMove = function () {
                        var e;
                        null !==
                           (e =
                              n.state.gamesPlayed % 3 === 0
                                 ? C(n.state.cells, n.state.currentIcon)
                                 : M(n.state.cells, n.state.currentIcon)) &&
                           n.computerPlay(e);
                     }),
                     n
                  );
               }
               return (
                  Object(m.a)(t, e),
                  Object(o.a)(t, [
                     {
                        key: "componentDidMount",
                        value: function () {
                           this.initGame();
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           return r.a.createElement(
                              w.Provider,
                              { value: this.state },
                              this.props.children
                           );
                        },
                     },
                  ]),
                  t
               );
            })(a.Component),
            k =
               (n(22),
               function (e) {
                  return r.a.createElement(w.Consumer, null, function (t) {
                     var n = t.cells[e.index],
                        a =
                           null !== n
                              ? 1 === n
                                 ? O[(t.gamesPlayed % 3) + 1]
                                 : O[n]
                              : "I",
                        c = "I" !== a ? "done" : "";
                     return r.a.createElement(
                        "button",
                        {
                           className: "cell cell-"
                              .concat(e.index, " ")
                              .concat(c),
                           onClick: function () {
                              return t.humanPlay(e.index);
                           },
                           style: "I" === a ? { color: "transparent" } : void 0,
                        },
                        a
                     );
                  });
               }),
            L = (function (e) {
               function t(e) {
                  var n;
                  return (
                     Object(l.a)(this, t),
                     ((n = Object(u.a)(
                        this,
                        Object(s.a)(t).call(this, e)
                     )).boardRef = r.a.createRef()),
                     n
                  );
               }
               return (
                  Object(m.a)(t, e),
                  Object(o.a)(t, [
                     {
                        key: "componentDidUpdate",
                        value: function () {
                           var e = this;
                           "" !== this.context.gameState.position
                              ? setTimeout(function () {
                                   e.boardRef.current.classList.add("full");
                                }, 50)
                              : this.boardRef.current.classList.remove("full");
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           return r.a.createElement(
                              "div",
                              {
                                 className: "board ".concat(
                                    this.context.gameState.position
                                 ),
                                 ref: this.boardRef,
                              },
                              r.a.createElement(
                                 "div",
                                 { className: "board-row" },
                                 r.a.createElement(k, { index: 0 }),
                                 r.a.createElement(k, { index: 1 }),
                                 r.a.createElement(k, { index: 2 })
                              ),
                              r.a.createElement(
                                 "div",
                                 { className: "board-row" },
                                 r.a.createElement(k, { index: 3 }),
                                 r.a.createElement(k, { index: 4 }),
                                 r.a.createElement(k, { index: 5 })
                              ),
                              r.a.createElement(
                                 "div",
                                 { className: "board-row" },
                                 r.a.createElement(k, { index: 6 }),
                                 r.a.createElement(k, { index: 7 }),
                                 r.a.createElement(k, { index: 8 })
                              )
                           );
                        },
                     },
                  ]),
                  t
               );
            })(a.Component);
         L.contextType = w;
         var _ = (function (e) {
            function t() {
               return (
                  Object(l.a)(this, t),
                  Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
               );
            }
            return (
               Object(m.a)(t, e),
               Object(o.a)(t, [
                  {
                     key: "render",
                     value: function () {
                        var e = "",
                           t = this.context.currentIcon;
                        return (
                           (e = this.context.gameState.isTie
                              ? "Tie!"
                              : this.context.gameType === S.TWO_PLAYERS
                              ? "" === this.context.gameState.position
                                 ? "It's player(".concat(O[t], ") turn")
                                 : "You win!"
                              : "" === this.context.gameState.position
                              ? this.context.playerTurn === x.HUMAN
                                 ? "It's your turn"
                                 : "It's Cubio's turn"
                              : this.context.playerTurn === x.HUMAN
                              ? "Cubio wins!"
                              : "You win!"),
                           r.a.createElement(
                              "main",
                              { className: "main" },
                              r.a.createElement(
                                 "div",
                                 { className: "info" },
                                 e
                              ),
                              r.a.createElement(L, null)
                           )
                        );
                     },
                  },
               ]),
               t
            );
         })(a.Component);
         _.contextType = w;
         var G = _,
            Y = (n(24), n(14)),
            H = n.n(Y),
            V = (function (e) {
               function t() {
                  return (
                     Object(l.a)(this, t),
                     Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
                  );
               }
               return (
                  Object(m.a)(t, e),
                  Object(o.a)(t, [
                     {
                        key: "render",
                        value: function () {
                           var e = this;
                           return r.a.createElement(
                              "div",
                              { className: "tictatoe__footer" },
                              r.a.createElement("img", {
                                 src: H.a,
                                 alt: "Replay Tic Tac Toe",
                                 className: "replayImg",
                                 onClick: function () {
                                    return e.context.newGame();
                                 },
                              })
                           );
                        },
                     },
                  ]),
                  t
               );
            })(a.Component);
         V.contextType = w;
         var B = V,
            W =
               (n(26),
               (function (e) {
                  function t() {
                     return (
                        Object(l.a)(this, t),
                        Object(u.a)(this, Object(s.a)(t).apply(this, arguments))
                     );
                  }
                  return (
                     Object(m.a)(t, e),
                     Object(o.a)(t, [
                        {
                           key: "render",
                           value: function () {
                              return r.a.createElement(
                                 A,
                                 null,
                                 r.a.createElement(
                                    "div",
                                    { className: "tictactoe" },
                                    r.a.createElement(G, null),
                                    r.a.createElement(B, null)
                                 )
                              );
                           },
                        },
                     ]),
                     t
                  );
               })(a.Component));
         i.a.render(
            r.a.createElement(W, null),
            document.getElementById("tictactoe")
         );
      },
   ],
   [[15, 2, 1]],
]);
//# sourceMappingURL=main.55d7acac.chunk.js.map
