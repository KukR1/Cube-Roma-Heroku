var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isIphone = /(iPhone)/i.test(navigator.userAgent);
var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
if (is_Edge || is_safari || isIphone) {
   document.getElementById("vid").style.display = "none";
   // var windowSmall=window.matchMedia("(max-width: 989px)");
   var img = document.createElement("img");
   var x = document.getElementsByClassName("cubeVideo")[0];
   x.id = "imageFallback";
   if (window.matchMedia("(max-width:1189px)").matches) {
      img.src = "../img/home_page/cubio-looks-up.png";

      document.getElementById("imageFallback").appendChild(img);
   } else {
      img.src = "../img/home_page/cubio-looks-right.png";

      document.getElementById("imageFallback").appendChild(img);
   }
} else {
   var w = window.matchMedia("(max-width: 1181px)"),
      vid = document.getElementById("vid"),
      source = document.createElement("source");
   (source.id = "hvid"),
      source.setAttribute("type", "video/webm"),
      vid.appendChild(source),
      w.matches
         ? (source.removeAttribute("src"),
           source.setAttribute("src", "../img/home_page/cubio_mob.webm"))
         : (source.removeAttribute("src"),
           source.setAttribute("src", "../img/home_page/cubio_contact.webm")),
      window.addEventListener("resize", function () {
         var e = window.matchMedia("(max-width: 1181px)"),
            t =
               (document.getElementById("vid"),
               document.getElementById("hvid"));
         e.matches
            ? (t.src = "../img/home_page/cubio_mob.webm")
            : (t.src = "../img/home_page/cubio_contact.webm");
      }),
      (function (e) {
         function t(t) {
            for (
               var o, i, a = t[0], c = t[1], l = t[2], u = 0, p = [];
               u < a.length;
               u++
            )
               (i = a[u]),
                  Object.prototype.hasOwnProperty.call(n, i) &&
                     n[i] &&
                     p.push(n[i][0]),
                  (n[i] = 0);
            for (o in c)
               Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
            for (d && d(t); p.length; ) p.shift()();
            return s.push.apply(s, l || []), r();
         }

         function r() {
            for (var e, t = 0; t < s.length; t++) {
               for (var r = s[t], o = !0, a = 1; a < r.length; a++) {
                  var c = r[a];
                  0 !== n[c] && (o = !1);
               }
               o && (s.splice(t--, 1), (e = i((i.s = r[0]))));
            }
            return e;
         }
         var o = {},
            n = {
               1: 0,
            },
            s = [];

         function i(t) {
            if (o[t]) return o[t].exports;
            var r = (o[t] = {
               i: t,
               l: !1,
               exports: {},
            });
            return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
         }
         (i.m = e),
            (i.c = o),
            (i.d = function (e, t, r) {
               i.o(e, t) ||
                  Object.defineProperty(e, t, {
                     enumerable: !0,
                     get: r,
                  });
            }),
            (i.r = function (e) {
               "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                     value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", {
                     value: !0,
                  });
            }),
            (i.t = function (e, t) {
               if ((1 & t && (e = i(e)), 8 & t)) return e;
               if (4 & t && "object" == typeof e && e && e.__esModule) return e;
               var r = Object.create(null);
               if (
                  (i.r(r),
                  Object.defineProperty(r, "default", {
                     enumerable: !0,
                     value: e,
                  }),
                  2 & t && "string" != typeof e)
               )
                  for (var o in e)
                     i.d(
                        r,
                        o,
                        function (t) {
                           return e[t];
                        }.bind(null, o)
                     );
               return r;
            }),
            (i.n = function (e) {
               var t =
                  e && e.__esModule
                     ? function () {
                          return e.default;
                       }
                     : function () {
                          return e;
                       };
               return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
               return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = "./");
         var a = (this.webpackJsonpdesigners =
               this.webpackJsonpdesigners || []),
            c = a.push.bind(a);
         (a.push = t), (a = a.slice());
         for (var l = 0; l < a.length; l++) t(a[l]);
         var d = c;
         r();
      })([]),
      (function (e) {
         e.fn.visible = function (t) {
            var r = e(this),
               o = e(window),
               n = o.scrollTop(),
               s = n + o.height(),
               i = r.offset().top,
               a = i + r.height();
            return (!0 === t ? i : a) <= s && (!0 === t ? a : i) >= n;
         };
      })(jQuery);
}

function validateEmail(e) {
   return /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{3,}[.]{1}[a-zA-Z0-9._-]{2,}/.test(
      e
   );
}

function validateForm() {
   event.preventDefault();
   var e = $("#fname").val(),
      t = $("#lname").val(),
      r = $("#email").val(),
      o = $("#message").val(),
      n = !1,
      s = !1,
      i = !1;
   if (e.length <= 0)
      return producePrompt("Name is required", "fname-error", "red"), !1;
   if (
      (e.length >= 1 && (producePrompt(" ", "fname-error", "green"), (n = !0)),
      t.length <= 0)
   )
      return producePrompt("Last name is required", "lname-error", "red"), !1;
   if (
      (t.length >= 1 && (producePrompt(" ", "lname-error", "green"), (s = !0)),
      r.length <= 0)
   )
      return producePrompt("Email is required", "email-error", "red"), !1;
   if (!validateEmail(r))
      return producePrompt("Email is not valid", "email-error", "red"), !1;
   if ((producePrompt(" ", "email-error", "green"), (i = !0), o.length <= 10)) {
      var a = 10 - o.length;
      return (
         a > 0 &&
         (producePrompt(
            a + " more character(s) are required for the message to be sent",
            "message-error",
            "red"
         ),
         !1)
      );
   }
   if (
      (producePrompt(
         "Thank you for contacting us!",
         "message-error",
         "#2efddb"
      ),
      !0 === n && !0 === s && !0 === i && !0 === !0)
   ) {
      var c = {
         fname: e,
         lname: t,
         email: r,
         message: o,
      };
      $.ajax({
         type: "POST",
         url: "../../base.php",
         data: c,
         success: function (e) {
            $("#successMsg").html(e), console.log(e);
         },
         error: function (e) {
            console.log("FAILED");
         },
      });
   }
}

function errorMessageShow(e) {
   document.getElementById(e).style.display = "block";
}

function errorMessageHide(e) {
   document.getElementById(e).style.display = "none";
}

function producePrompt(e, t, r) {
   (document.getElementById(t).innerHTML = e),
      (document.getElementById(t).style.color = r);
}
var win = $(window),
   allMods = $(".title h3, .form-container, .iAmCubioSlide"),
   oneMod = $(".iAmCubioImg, .cubeVideo video, .iAmCubioImg img");
allMods.each(function (e, t) {
   (t = $(t)).visible(!0) && t.addClass("already-visible");
}),
   oneMod.each(function (e, t) {
      (t = $(t)).visible(!0) && t.addClass("already-visible");
   }),
   win.scroll(function (e) {
      allMods.each(function (e, t) {
         (t = $(t)).visible(!0) && t.addClass("slide-in");
      }),
         oneMod.each(function (e, t) {
            (t = $(t)).visible(!0) && t.addClass("slide-rtl-in");
         });
   }),
   $(document).ready(function () {
      $("#physicalIcon").mouseenter(function () {
         $("#categories").addClass("gradientRed");
      }),
         $("#physicalIcon").mouseleave(function () {
            $("#categories").removeClass("gradientRed");
         }),
         $("#brainIcon").mouseenter(function () {
            $("#categories").addClass("gradientGreen");
         }),
         $("#brainIcon").mouseleave(function () {
            $("#categories").removeClass("gradientGreen");
         }),
         $("#skillsIcon").mouseenter(function () {
            $("#categories").addClass("gradientYellow");
         }),
         $("#skillsIcon").mouseleave(function () {
            $("#categories").removeClass("gradientYellow");
         }),
         $("#allIcon").mouseenter(function () {
            $("#categories").addClass("gradientCube");
         }),
         $("#allIcon").mouseleave(function () {
            $("#categories").removeClass("gradientCube");
         });
   });
