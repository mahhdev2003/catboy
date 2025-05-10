(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    2711: function (e) {
      e.exports = (function (e) {
        function t(l) {
          if (n[l]) return n[l].exports;
          var a = (n[l] = { exports: {}, id: l, loaded: !1 });
          return (
            e[l].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports
          );
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
      })([
        function (e, t, n) {
          "use strict";
          function l(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var a =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var l in n)
                    Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
                }
                return e;
              },
            i = (l(n(1)), n(6)),
            o = l(i),
            r = l(n(7)),
            s = l(n(8)),
            c = l(n(9)),
            d = l(n(10)),
            p = l(n(11)),
            u = l(n(14)),
            x = [],
            f = !1,
            g = {
              offset: 120,
              delay: 0,
              easing: "ease",
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: "DOMContentLoaded",
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            },
            m = function () {
              if (
                (arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0] &&
                  (f = !0),
                f)
              )
                return (x = (0, p.default)(x, g)), (0, d.default)(x, g.once), x;
            },
            h = function () {
              (x = (0, u.default)()), m();
            },
            v = function () {
              x.forEach(function (e, t) {
                e.node.removeAttribute("data-aos"),
                  e.node.removeAttribute("data-aos-easing"),
                  e.node.removeAttribute("data-aos-duration"),
                  e.node.removeAttribute("data-aos-delay");
              });
            },
            b = function (e) {
              return (
                !0 === e ||
                ("mobile" === e && c.default.mobile()) ||
                ("phone" === e && c.default.phone()) ||
                ("tablet" === e && c.default.tablet()) ||
                ("function" == typeof e && !0 === e())
              );
            },
            w = function (e) {
              (g = a(g, e)), (x = (0, u.default)());
              var t = document.all && !window.atob;
              return b(g.disable) || t
                ? v()
                : (g.disableMutationObserver ||
                    s.default.isSupported() ||
                    (console.info(
                      '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                    ),
                    (g.disableMutationObserver = !0)),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", g.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", g.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", g.delay),
                  "DOMContentLoaded" === g.startEvent &&
                  ["complete", "interactive"].indexOf(document.readyState) > -1
                    ? m(!0)
                    : "load" === g.startEvent
                    ? window.addEventListener(g.startEvent, function () {
                        m(!0);
                      })
                    : document.addEventListener(g.startEvent, function () {
                        m(!0);
                      }),
                  window.addEventListener(
                    "resize",
                    (0, r.default)(m, g.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    (0, r.default)(m, g.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "scroll",
                    (0, o.default)(function () {
                      (0, d.default)(x, g.once);
                    }, g.throttleDelay)
                  ),
                  g.disableMutationObserver || s.default.ready("[data-aos]", h),
                  x);
            };
          e.exports = { init: w, refresh: m, refreshHard: h };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (e, t) {
          (function (t) {
            "use strict";
            function n(e, t, n) {
              function l(t) {
                var n = g,
                  l = m;
                return (g = m = void 0), (k = t), (v = e.apply(l, n));
              }
              function i(e) {
                return (k = e), (b = setTimeout(d, t)), _ ? l(e) : v;
              }
              function o(e) {
                var n = t - (e - w);
                return F ? y(n, h - (e - k)) : n;
              }
              function s(e) {
                var n = e - w;
                return void 0 === w || n >= t || n < 0 || (F && e - k >= h);
              }
              function d() {
                var e = N();
                return s(e) ? p(e) : void (b = setTimeout(d, o(e)));
              }
              function p(e) {
                return (b = void 0), z && g ? l(e) : ((g = m = void 0), v);
              }
              function u() {
                void 0 !== b && clearTimeout(b),
                  (k = 0),
                  (g = w = m = b = void 0);
              }
              function x() {
                return void 0 === b ? v : p(N());
              }
              function f() {
                var e = N(),
                  n = s(e);
                if (((g = arguments), (m = this), (w = e), n)) {
                  if (void 0 === b) return i(w);
                  if (F) return (b = setTimeout(d, t)), l(w);
                }
                return void 0 === b && (b = setTimeout(d, t)), v;
              }
              var g,
                m,
                h,
                v,
                b,
                w,
                k = 0,
                _ = !1,
                F = !1,
                z = !0;
              if ("function" != typeof e) throw new TypeError(c);
              return (
                (t = r(t) || 0),
                a(n) &&
                  ((_ = !!n.leading),
                  (h = (F = "maxWait" in n) ? j(r(n.maxWait) || 0, t) : h),
                  (z = "trailing" in n ? !!n.trailing : z)),
                (f.cancel = u),
                (f.flush = x),
                f
              );
            }
            function l(e, t, l) {
              var i = !0,
                o = !0;
              if ("function" != typeof e) throw new TypeError(c);
              return (
                a(l) &&
                  ((i = "leading" in l ? !!l.leading : i),
                  (o = "trailing" in l ? !!l.trailing : o)),
                n(e, t, { leading: i, maxWait: t, trailing: o })
              );
            }
            function a(e) {
              var t = "undefined" == typeof e ? "undefined" : s(e);
              return !!e && ("object" == t || "function" == t);
            }
            function i(e) {
              return (
                !!e &&
                "object" == ("undefined" == typeof e ? "undefined" : s(e))
              );
            }
            function o(e) {
              return (
                "symbol" == ("undefined" == typeof e ? "undefined" : s(e)) ||
                (i(e) && w.call(e) == p)
              );
            }
            function r(e) {
              if ("number" == typeof e) return e;
              if (o(e)) return d;
              if (a(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = a(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(u, "");
              var n = f.test(e);
              return n || g.test(e)
                ? m(e.slice(2), n ? 2 : 8)
                : x.test(e)
                ? d
                : +e;
            }
            var s =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              c = "Expected a function",
              d = NaN,
              p = "[object Symbol]",
              u = /^\s+|\s+$/g,
              x = /^[-+]0x[0-9a-f]+$/i,
              f = /^0b[01]+$/i,
              g = /^0o[0-7]+$/i,
              m = parseInt,
              h =
                "object" == ("undefined" == typeof t ? "undefined" : s(t)) &&
                t &&
                t.Object === Object &&
                t,
              v =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : s(self)) &&
                self &&
                self.Object === Object &&
                self,
              b = h || v || Function("return this")(),
              w = Object.prototype.toString,
              j = Math.max,
              y = Math.min,
              N = function () {
                return b.Date.now();
              };
            e.exports = l;
          }).call(
            t,
            (function () {
              return this;
            })()
          );
        },
        function (e, t) {
          (function (t) {
            "use strict";
            function n(e, t, n) {
              function a(t) {
                var n = g,
                  l = m;
                return (g = m = void 0), (k = t), (v = e.apply(l, n));
              }
              function i(e) {
                return (k = e), (b = setTimeout(d, t)), _ ? a(e) : v;
              }
              function r(e) {
                var n = t - (e - N);
                return F ? j(n, h - (e - k)) : n;
              }
              function c(e) {
                var n = e - N;
                return void 0 === N || n >= t || n < 0 || (F && e - k >= h);
              }
              function d() {
                var e = y();
                return c(e) ? p(e) : void (b = setTimeout(d, r(e)));
              }
              function p(e) {
                return (b = void 0), z && g ? a(e) : ((g = m = void 0), v);
              }
              function u() {
                void 0 !== b && clearTimeout(b),
                  (k = 0),
                  (g = N = m = b = void 0);
              }
              function x() {
                return void 0 === b ? v : p(y());
              }
              function f() {
                var e = y(),
                  n = c(e);
                if (((g = arguments), (m = this), (N = e), n)) {
                  if (void 0 === b) return i(N);
                  if (F) return (b = setTimeout(d, t)), a(N);
                }
                return void 0 === b && (b = setTimeout(d, t)), v;
              }
              var g,
                m,
                h,
                v,
                b,
                N,
                k = 0,
                _ = !1,
                F = !1,
                z = !0;
              if ("function" != typeof e) throw new TypeError(s);
              return (
                (t = o(t) || 0),
                l(n) &&
                  ((_ = !!n.leading),
                  (h = (F = "maxWait" in n) ? w(o(n.maxWait) || 0, t) : h),
                  (z = "trailing" in n ? !!n.trailing : z)),
                (f.cancel = u),
                (f.flush = x),
                f
              );
            }
            function l(e) {
              var t = "undefined" == typeof e ? "undefined" : r(e);
              return !!e && ("object" == t || "function" == t);
            }
            function a(e) {
              return (
                !!e &&
                "object" == ("undefined" == typeof e ? "undefined" : r(e))
              );
            }
            function i(e) {
              return (
                "symbol" == ("undefined" == typeof e ? "undefined" : r(e)) ||
                (a(e) && b.call(e) == d)
              );
            }
            function o(e) {
              if ("number" == typeof e) return e;
              if (i(e)) return c;
              if (l(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = l(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(p, "");
              var n = x.test(e);
              return n || f.test(e)
                ? g(e.slice(2), n ? 2 : 8)
                : u.test(e)
                ? c
                : +e;
            }
            var r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              s = "Expected a function",
              c = NaN,
              d = "[object Symbol]",
              p = /^\s+|\s+$/g,
              u = /^[-+]0x[0-9a-f]+$/i,
              x = /^0b[01]+$/i,
              f = /^0o[0-7]+$/i,
              g = parseInt,
              m =
                "object" == ("undefined" == typeof t ? "undefined" : r(t)) &&
                t &&
                t.Object === Object &&
                t,
              h =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : r(self)) &&
                self &&
                self.Object === Object &&
                self,
              v = m || h || Function("return this")(),
              b = Object.prototype.toString,
              w = Math.max,
              j = Math.min,
              y = function () {
                return v.Date.now();
              };
            e.exports = n;
          }).call(
            t,
            (function () {
              return this;
            })()
          );
        },
        function (e, t) {
          "use strict";
          function n(e) {
            var t = void 0,
              l = void 0;
            for (t = 0; t < e.length; t += 1) {
              if ((l = e[t]).dataset && l.dataset.aos) return !0;
              if (l.children && n(l.children)) return !0;
            }
            return !1;
          }
          function l() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function a() {
            return !!l();
          }
          function i(e, t) {
            var n = window.document,
              a = new (l())(o);
            (r = t),
              a.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0,
              });
          }
          function o(e) {
            e &&
              e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                  l = Array.prototype.slice.call(e.removedNodes);
                if (n(t.concat(l))) return r();
              });
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = function () {};
          t.default = { isSupported: a, ready: i };
        },
        function (e, t) {
          "use strict";
          function n(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function l() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ""
            );
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var l = t[n];
                  (l.enumerable = l.enumerable || !1),
                    (l.configurable = !0),
                    "value" in l && (l.writable = !0),
                    Object.defineProperty(e, l.key, l);
                }
              }
              return function (t, n, l) {
                return n && e(t.prototype, n), l && e(t, l), t;
              };
            })(),
            i =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            o =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            r =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            s =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            c = (function () {
              function e() {
                n(this, e);
              }
              return (
                a(e, [
                  {
                    key: "phone",
                    value: function () {
                      var e = l();
                      return !(!i.test(e) && !o.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "mobile",
                    value: function () {
                      var e = l();
                      return !(!r.test(e) && !s.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "tablet",
                    value: function () {
                      return this.mobile() && !this.phone();
                    },
                  },
                ]),
                e
              );
            })();
          t.default = new c();
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e, t, n) {
              var l = e.node.getAttribute("data-aos-once");
              t > e.position
                ? e.node.classList.add("aos-animate")
                : "undefined" != typeof l &&
                  ("false" === l || (!n && "true" !== l)) &&
                  e.node.classList.remove("aos-animate");
            },
            l = function (e, t) {
              var l = window.pageYOffset,
                a = window.innerHeight;
              e.forEach(function (e, i) {
                n(e, a + l, t);
              });
            };
          t.default = l;
        },
        function (e, t, n) {
          "use strict";
          function l(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = l(n(12)),
            i = function (e, t) {
              return (
                e.forEach(function (e, n) {
                  e.node.classList.add("aos-init"),
                    (e.position = (0, a.default)(e.node, t.offset));
                }),
                e
              );
            };
          t.default = i;
        },
        function (e, t, n) {
          "use strict";
          function l(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = l(n(13)),
            i = function (e, t) {
              var n = 0,
                l = 0,
                i = window.innerHeight,
                o = {
                  offset: e.getAttribute("data-aos-offset"),
                  anchor: e.getAttribute("data-aos-anchor"),
                  anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
                };
              switch (
                (o.offset && !isNaN(o.offset) && (l = parseInt(o.offset)),
                o.anchor &&
                  document.querySelectorAll(o.anchor) &&
                  (e = document.querySelectorAll(o.anchor)[0]),
                (n = (0, a.default)(e).top),
                o.anchorPlacement)
              ) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  n += e.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  n += e.offsetHeight;
                  break;
                case "top-center":
                  n += i / 2;
                  break;
                case "bottom-center":
                  n += i / 2 + e.offsetHeight;
                  break;
                case "center-center":
                  n += i / 2 + e.offsetHeight / 2;
                  break;
                case "top-top":
                  n += i;
                  break;
                case "bottom-top":
                  n += e.offsetHeight + i;
                  break;
                case "center-top":
                  n += e.offsetHeight / 2 + i;
              }
              return (
                o.anchorPlacement || o.offset || isNaN(t) || (l = t), n + l
              );
            };
          t.default = i;
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e) {
            for (
              var t = 0, n = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: n, left: t };
          };
          t.default = n;
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e) {
            return (
              (e = e || document.querySelectorAll("[data-aos]")),
              Array.prototype.map.call(e, function (e) {
                return { node: e };
              })
            );
          };
          t.default = n;
        },
      ]);
    },
    5557: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(8007);
        },
      ]);
    },
    5816: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo-waifu.d5d3e3eb.svg",
        height: 211,
        width: 577,
      };
    },
    3137: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var l = n(4924),
        a = n(5893),
        i = n(7294),
        o = n(5675),
        r = n.n(o),
        s = n(7969),
        c = n(4705),
        d = {
          src: "/_next/static/media/start-fellow.6cfee016.svg",
          height: 20,
          width: 20,
        },
        p = n(3967),
        u = n.n(p),
        x = function (e) {
          var t = e.slayer,
            n = e.handleOpenSlayer,
            o = t.data,
            p = t.isOpen,
            x = (0, i.useRef)(null);
          (0, s.Z)(x, function () {
            n(!1);
          });
          var f,
            g = function () {
              return (0, a.jsx)("div", {
                className: "w-[16px] lg:w-[23px] h-[16px] lg:h-[23px] relative",
                children: (0, a.jsx)(r(), {
                  src: d,
                  alt: "start fellow",
                  layout: "fill",
                }),
              });
            };
          return (0, a.jsx)(a.Fragment, {
            children:
              p &&
              (0, a.jsx)("div", {
                className:
                  "fixed z-[60] -top-12 lg:top-0 left-0 w-screen h-screen transition-all duration-300 lg:bg-[#000000]/70 ".concat(
                    p ? "block" : "hidden"
                  ),
                children: (0, a.jsx)("div", {
                  className:
                    "relative flex items-center justify-center w-full h-full lg:mt-0",
                  children: (0, a.jsx)("div", {
                    className:
                      "relative w-[360px] h-[620px] lg:w-[1164px] lg:h-[700px] bg-black rounded-3xl border-2 lg:border-4 border-[#00FFFF]",
                    ref: x,
                    children: (0, a.jsxs)("div", {
                      className:
                        "absolute top-0 right-0 left-0 bottom-0 bg-[url('~/public/images/home/collection/bg-purple.png')] bg-no-repeat bg-center bg-cover flex items-center flex-col mx-auto mb-4",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute z-20 h-[32px] lg:h-[50px] w-[32px] lg:w-[50px] right-2 lg:right-4 top-2 lg:top-4 cursor-pointer",
                          onClick: function () {
                            return n(!1);
                          },
                          children: (0, a.jsx)("img", {
                            src: c.Z.src,
                            layout: "fill",
                            alt: "Close Menu Mobile",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "relative z-10 h-full lg:top-1/2 lg:-translate-y-1/2 flex flex-col-reverse lg:flex-row items-center justify-between mx-2 lg:mx-[60px] gap-2 lg:gap-6",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "w-full lg:w-1/2 grow",
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-[40px] lg:text-[96px] leading-[40px] lg:leading-[96px] font-league-bold",
                                  children: o.name,
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center justify-start gap-6 mb-3",
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: u()(
                                        "text-[24px] leading-[24px] font-league",
                                        ((f = {
                                          "text-[#949494]":
                                            "Common" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Founders Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                          "text-[#39de02]":
                                            "Uncommon" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Founders Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                          "text-[#0c75a4]":
                                            "Rare" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Founders Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                          "text-[#ff0a12]":
                                            "Epic" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Founders Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                          "text-[#ff7603]":
                                            "Legendary" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Founders Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                          "text-[#febe00]":
                                            "Bonus" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Founders Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                          "text-[#b85f33]":
                                            "Common" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Slayers Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                          "text-[#b5c1fc]":
                                            "Uncommon" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.rarity) &&
                                            "Slayers Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position),
                                        }),
                                        (0, l.Z)(
                                          f,
                                          "text-[#febe00]",
                                          "Rare" ===
                                            (null === o || void 0 === o
                                              ? void 0
                                              : o.rarity) &&
                                            "Slayers Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position)
                                        ),
                                        (0, l.Z)(
                                          f,
                                          "text-[#00BBE6]",
                                          "Epic" ===
                                            (null === o || void 0 === o
                                              ? void 0
                                              : o.rarity) &&
                                            "Slayers Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position)
                                        ),
                                        (0, l.Z)(
                                          f,
                                          "text-[#ff7603]",
                                          "Legendary" ===
                                            (null === o || void 0 === o
                                              ? void 0
                                              : o.rarity) &&
                                            "Slayers Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position)
                                        ),
                                        (0, l.Z)(
                                          f,
                                          "text-[#E427FF]",
                                          "Bonus" ===
                                            (null === o || void 0 === o
                                              ? void 0
                                              : o.rarity) &&
                                            "Waifu" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position)
                                        ),
                                        (0, l.Z)(
                                          f,
                                          "text-[#FFFF00]",
                                          "Bonus" ===
                                            (null === o || void 0 === o
                                              ? void 0
                                              : o.rarity) &&
                                            "Slayers Edition" ===
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.position)
                                        ),
                                        f)
                                      ),
                                      children: o.rarity,
                                    }),
                                    o &&
                                      o.medal &&
                                      (0, a.jsx)("div", {
                                        className:
                                          "relative w-[52px] h-[52px] mb-3",
                                        children: (0, a.jsx)(r(), {
                                          src: o.medal,
                                          alt: o.name,
                                          layout: "fill",
                                        }),
                                      }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "text-[12px] lg:text-[16px] leading-[12px] lg:leading-[16px] font-gotham mb-2 lg:mb-[24px] max-h-[170px] overflow-auto",
                                  children: o.description,
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center justify-start gap-6 lg:gap-8 mt-6 lg:mt-0 lg:mb-4",
                                  children: [
                                    o &&
                                      o.character &&
                                      o.character.map(function (e, t) {
                                        return (0,
                                        a.jsxs)("div", { children: [(0, a.jsx)("p", { className: "text-[12px] lg:text-[16px] font-gotham-bold text-[#E427FF] lg:mb-2", children: e.title }), (0, a.jsx)("p", { className: "text-[12px] lg:text-[16px] font-gotham", children: e.name })] }, t);
                                      }),
                                    o &&
                                      o.rarity &&
                                      "Bonus" !== o.rarity &&
                                      "Waifu" !== o.position &&
                                      (0, a.jsx)("div", {
                                        className:
                                          "bg-[rgba(255,255,255,0.50)] w-auto max-w-[160px] rounded-lg flex items-center justify-start gap-[5px] p-2 lg:p-3",
                                        children: (function (e) {
                                          var t = [];
                                          switch (e.rarity) {
                                            case "UnCommon":
                                              for (var n = 0; n < 2; n++)
                                                t.push(g());
                                              break;
                                            case "Rare":
                                              for (var l = 0; l < 3; l++)
                                                t.push(g());
                                              break;
                                            case "Epic":
                                              for (var a = 0; a < 4; a++)
                                                t.push(g());
                                              break;
                                            case "Legendary":
                                              for (var i = 0; i < 5; i++)
                                                t.push(g());
                                              break;
                                            default:
                                              for (var o = 0; o < 1; o++)
                                                t.push(g());
                                          }
                                          return t;
                                        })(o),
                                      }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "flex items-center justify-start gap-4 lg:gap-10",
                                  children:
                                    o &&
                                    o.buttons &&
                                    o.buttons.map(function (e, t) {
                                      return (0,
                                      a.jsx)("div", { className: "[background:linear-gradient(90deg,#5470FE_0%,#F567C7_100%)] cursor-pointer rounded-[47px] flex items-center justify-center w-auto mr-3 lg:mr-0 mt-2 lg:mt-10 hover:scale-105 scale-100 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_#522C65]", children: (0, a.jsx)("p", { className: "font-gotham-bold text-[14px] lg:text-[22px] py-2 px-3 lg:px-8", children: e }) }, t);
                                    }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "relative w-1/2 lg:w-[calc(50%-120px)] h-[240px] lg:h-[580px] mt-3 lg:mt-0",
                              children: (0, a.jsx)(r(), {
                                src: o.imagePopup,
                                layout: "fill",
                                alt: "text",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
          });
        };
    },
    8007: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return $;
          },
        });
      var l = n(6042),
        a = n(9396),
        i = n(5893),
        o = n(7294),
        r = n(7746),
        s = n(5675),
        c = n.n(s),
        d = "/_next/static/media/title-japanese-horizontal.f6be324e.png",
        p = "/_next/static/media/title-japanese-vertical.64e926fa.png",
        u = "/_next/static/media/title-catboy.8b6b6054.png",
        x = "/_next/static/media/Banner-Haru.eed22fab.png",
        f = function () {
          return (0, i.jsx)(o.Fragment, {
            children: (0, i.jsxs)("div", {
              className:
                "relative z-30 h-[1000px] lg:h-[1400px] w-screen [background:radial-gradient(100%_53.52%_at_50.00%_46.48%,rgba(0,0,0,0.00)_0%,#000_90%)] lg:bg-[transparent]",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "absolute z-30 overflow-hidden w-[140%] lg:w-[150%] h-[290px] lg:h-[400px] border-b-4 lg:border-b-8 border-[#FFFFFF] rounded-b-[50%] left-[50%] lg:left-1/2 -translate-x-1/2 top-[470px] lg:top-[580px]",
                }),
                (0, i.jsxs)("div", {
                  className: "relative max-w-[1440px] mx-auto",
                  children: [
                    (0, i.jsx)("div", {
                      "data-aos": "fade-left",
                      className:
                        "absolute z-10 w-[346px] lg:w-[750px] h-[346px] lg:h-[800px] top-[366px] lg:top-[70px] right-0 left-0 lg:left-auto mx-auto lg:mx-0 lg:right-[128px]",
                      children: (0, i.jsx)(c(), {
                        src: x,
                        layout: "fill",
                        alt: "Title Japanese Horizontal",
                        className: "select-none pointer-events-none",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "absolute z-40 w-full lg:w-[698px] h-[388px] top-[124px] lg:top-[202px] lg:left-[55px]",
                      children: (0, i.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "w-[326px] lg:w-[614px] h-[44px] lg:h-[84px] relative",
                            children: (0, i.jsx)(c(), {
                              src: d,
                              alt: "title japanese",
                              layout: "fill",
                              className: "select-none pointer-events-none",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "w-[370px] lg:w-[698px] h-[120px] lg:h-[184px] relative",
                            children: (0, i.jsx)(c(), {
                              src: u,
                              alt: "title japanese",
                              layout: "fill",
                              className: "select-none pointer-events-none",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "text-[20px] lg:text-[40px] font-league-bold font-bold text-white",
                            children: "Once a Catboy, always a Catboy",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex items-center justify-center gap-3 mt-2",
                            children: [
                              (0, i.jsx)("button", {
                                className:
                                  "[background:linear-gradient(90deg,#5470FE_0%,#F567C7_100%)] rounded-[47px] px-3 lg:px-7 h-[40px] lg:h-[55px] lg:max-h-[55px] hover:scale-105 scale-100 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_#522C65]",
                                onClick: function () {
                                  window.open(
                                    "https://app.uniswap.org/swap?outputCurrency=0xTBA"
                                  );
                                },
                                children: (0, i.jsx)("p", {
                                  className:
                                    "text-[16px] lg:text-[22px] font-gotham-bold",
                                  children: "Buy with ETH",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "absolute hidden lg:block z-30 w-[127px] h-[936px] top-0 right-[28px]",
                      children: (0, i.jsx)(c(), {
                        src: p,
                        layout: "fill",
                        alt: "Title Japanese Horizontal",
                        className: "select-none pointer-events-none",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute z-30 w-[297px] lg:w-[722px] h-[123px] lg:h-[296px] bottom-[200px] lg:bottom-[300px] right-0 left-0 mx-auto rounded-md",
                  children: (0, i.jsx)("div", {
                    className:
                      "absolute z-10 bg-[url('~/public/images/home/dapp-banner.png')] bg-no-repeat bg-center bg-cover top-0 right-0 left-0 bottom-0",
                    children: (0, i.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center my-auto h-full",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "font-league-bold text-center text-[14px] leading-4 lg:text-[40px] lg:leading-[40px] uppercase mb-3 shadow-custom",
                          children: [
                            "Step in to the world of ",
                            (0, i.jsx)("br", {}),
                            " Catboy",
                          ],
                        }),
                        (0, i.jsx)("button", {
                          className:
                            "[background:linear-gradient(90deg,#5470FE_0%,#F567C7_100%)] rounded-[47px] py-4 px-8 w-[112px] lg:w-[208px] flex items-center justify-center h-[34px] lg:h-[66px] max-h-[66px] hover:scale-105 scale-100 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_#522C65]",
                          onClick: function () {
                            window.open("https://dapp.catboy-eth.space/");
                          },
                          children: (0, i.jsx)("p", {
                            className:
                              "text-[16px] lg:text-[32px] font-gotham-bold uppercase",
                            children: "DAPP",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "absolute z-30 w-full lg:w-[1330px] px-4 lg:px-0 bottom-0 mx-auto right-0 left-0",
                  children: [
                    (0, i.jsx)("h2", {
                      className:
                        "text-[24px] lg:text-[40px] leading-normal font-league-bold",
                      children: "Welcome to Catboy!",
                    }),
                    (0, i.jsx)("p", {
                      className:
                        "text-[14px] leading-[14px] lg:text-[32px] lg:leading-[36px] font-gotham",
                      children:
                        "Catboy brings a fresh and playful twist to the world of blockchain, offering the first AI interaction. Catboy is allowing fans to collect and trade unique anime-inspired entities with tons of reward programs. Experience the thrill of our exciting Lottery Raffle Events, Battle of the Catboys\u2122 Game & More!",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute z-20 bottom-[200px] lg:bottom-[500px] h-[600px] lg:h-[340px] w-full [background:linear-gradient(180deg,rgba(0,0,0,0.00)_49.44%,#000_75.35%)]",
                }),
                (0, i.jsx)("div", {
                  className:
                    "hidden lg:block absolute -z-10 bottom-0 h-[500px] w-full [background:radial-gradient(53.52%_53.52%_at_50.00%_46.48%,rgba(0,0,0,0.00)_0%,#000_75.90%)]",
                }),
              ],
            }),
          });
        },
        g = "/_next/static/media/purple-circle.c96fc300.png",
        m = "/_next/static/media/place-orange.d3aae2c5.png",
        h = "/_next/static/media/plane.3ebe2965.png",
        v = function () {
          var e = (0, o.useState)([]),
            t = e[0],
            n = e[1];
          return (
            (0, o.useEffect)(function () {
              fetch("/data/ecosystem.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  n(e);
                });
            }, []),
            (0, i.jsx)(o.Fragment, {
              children: (0, i.jsxs)("div", {
                className:
                  "relative h-[750px] lg:h-[1500px] w-full overflow-hidden bg-gradient-to-t from-transparent via-transparent to-black lg:[background:radial-gradient(53.52%_53.52%_at_50.00%_46.48%,rgba(0,0,0,0.00)_0%,#000_75.90%)]",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "absolute z-20 right-0 left-0 top-[64px] lg:top-[100px] max-w-[1440px] mx-auto",
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "font-hitandrun text-[32px] lg:text-[64px] uppercase text-center",
                        children: "ECOSYSTEM",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "grid grid-cols-2 gap-3 lg:gap-24 mx-6 lg:mx-[256px] mt-16 lg:mt-[96px]",
                        children:
                          null === t || void 0 === t
                            ? void 0
                            : t.map(function (e, t) {
                                return (0,
                                i.jsxs)("div", { "data-aos": "zoom-in-up", className: "relative w-[165px] lg:w-[408px] h-[126px] lg:h-[286px] bg-2 rounded-[28px] lg:rounded-[70px] border border-[#000] mb-10 lg:mb-0 mx-auto", children: [(0, i.jsx)("div", { className: "absolute -top-[50px] lg:-top-[100px] w-[111px] lg:w-[250px] h-[111px] lg:h-[250px] right-0 left-0 mx-auto z-20", children: (0, i.jsx)(c(), { src: e.image, alt: e.title, layout: "fill", className: "select-none pointer-events-none" }) }), (0, i.jsx)("div", { className: "absolute top-0 left-0 right-0 bottom-[30px] lg:bottom-[20px] m-auto [background:radial-gradient(50%_50.00%_at_50%_50.00%,rgba(0,0,0,0.57)_0%,rgba(0,0,0,0.00)_100%)] w-[65px] lg:w-[162px] h-[14px] lg:h-[36px] mx-auto" }), (0, i.jsx)("div", { className: "absolute z-30 top-[56px] lg:top-[160px] w-full px-2 lg:px-0", children: (0, i.jsxs)("div", { className: "", children: [(0, i.jsx)("p", { className: "font-league-medium font-semibold text-[14px] lg:text-[36px] text-center", children: e.title }), (0, i.jsx)("p", { className: "font-gotham w-full lg:w-3/4 mx-auto text-[12px] lg:text-[22px] text-center leading-[12px] lg:leading-[24px] px-2", children: e.description })] }) })] }, t);
                              }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute z-10 w-[267px] lg:w-[625px] h-[267px] lg:h-[625px] bottom-0 lg:bottom-[380px] -left-[180px] lg:-left-[400px]",
                    children: (0, i.jsx)(c(), {
                      src: g,
                      layout: "fill",
                      alt: "Plant Purple",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute z-10 w-[285px] lg:w-[625px] h-[285px] lg:h-[625px] lg:top-[200px] -left-[180px] lg:-left-[450px]",
                    children: (0, i.jsx)(c(), {
                      src: m,
                      layout: "fill",
                      alt: "Plane Orange",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute z-10 w-[312px] lg:w-[680px] h-[312px] lg:h-[680px] bottom-[200px] lg:bottom-[550px] -right-[200px] lg:-right-[420px]",
                    children: (0, i.jsx)(c(), {
                      src: h,
                      layout: "fill",
                      alt: "Plane Pink",
                    }),
                  }),
                ],
              }),
            })
          );
        },
        b = "/_next/static/media/arrow-slider.855e4065.svg",
        w = n(719),
        j = n(8116),
        y = {
          src: "/_next/static/media/icon_right.d2c39161.svg",
          height: 1600,
          width: 1600,
        },
        N = n(8606),
        k =
          (n(933),
          n(8770),
          n(3390),
          n(9846),
          n(2338),
          n(5519),
          n(706),
          n(92),
          n(5083),
          function (e) {
            var t = e.handleCollection,
              n = (0, o.useState)([]),
              l = n[0],
              a = n[1],
              r = (0, o.useState)(0),
              s = r[0],
              d = r[1];
            (0, o.useEffect)(function () {
              fetch("/data/collection.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  a(e);
                });
            }, []);
            return (0, i.jsx)(o.Fragment, {
              children: (0, i.jsxs)("div", {
                className:
                  "relative z-30 h-[664px] md:h-[664px] lg:h-[772px] w-full",
                children: [
                  (0, i.jsx)("p", {
                    className:
                      "relative z-20 font-hitandrun text-[32px] lg:text-[64px] uppercase text-center mb-10",
                    children: "Catboy Collection",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "relative z-30 [background:linear-gradient(90deg,#5470FE_0%,#F567C7_100%)] p-4 rounded-[64px] lg:rounded-[47px] h-[78px] w-[204px] lg:w-[400px] flex items-center justify-center gap-2 mx-auto mb-5 lg:mb-0",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, i.jsx)("p", {
                            className:
                              "text-[16px] lg:text-[28px] leading-4 lg:leading-[28px] font-gotham-bold",
                            children: l && l.length > 0 && l[s].season,
                          }),
                          (0, i.jsx)("p", {
                            className: "text-[14px] lg:text-[20px] font-gotham",
                            children: l && l.length > 0 && l[s].name,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "absolute z-30 right-0 left-0 mx-auto",
                    children:
                      l &&
                      l.length > 0 &&
                      (0, i.jsxs)(w.tq, {
                        navigation: {
                          nextEl: ".swiper-arrow-prev",
                          prevEl: ".swiper-arrow-next",
                        },
                        slidesPerView: 4,
                        loop: !0,
                        speed: 150,
                        effect: "coverflow",
                        grabCursor: !0,
                        centeredSlides: !0,
                        coverflowEffect: {
                          rotate: 0,
                          stretch: 50,
                          depth: 250,
                          slideShadows: !0,
                          modifier: 1,
                        },
                        breakpoints: {
                          1024: { slidesPerView: 4 },
                          768: { slidesPerView: 2 },
                          375: { slidesPerView: 2 },
                        },
                        pagination: !0,
                        modules: [j.tl, j.pt, j.W_, j.lI, j.o3],
                        className:
                          "mySwipper z-30 h-[400px] md:h-[400px] lg:h-[420px] w-full top-4 lg:top-20",
                        children: [
                          l[s].items.map(function (e, n) {
                            return (0, i.jsx)(
                              w.o5,
                              {
                                children: function (n) {
                                  var l = n.isActive;
                                  return (0, i.jsxs)("div", {
                                    className:
                                      "relative w-[230px] h-[350px] lg:w-[255px] lg:h-[371px] mx-auto cursor-pointer group",
                                    onClick: function () {
                                      l && t({ data: e, isOpen: !0 });
                                    },
                                    children: [
                                      (0, i.jsx)("img", {
                                        src: e.image,
                                        alt: e.name,
                                        objectfit: "cover",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "absolute z-50 top-0 right-1 left-1 bottom-0 rounded-lg bg-[rgba(0,0,0,0.5)] ".concat(
                                            l && "group-hover:visible",
                                            " invisible"
                                          ),
                                        children: (0, i.jsxs)("div", {
                                          className:
                                            "relative top-1/2 -translate-y-1/2 flex gap-2 items-center justify-center my-auto",
                                          children: [
                                            (0, i.jsx)("p", {
                                              className:
                                                "test-[16px] font-gotham-medium",
                                              children: "View",
                                            }),
                                            (0, i.jsx)(N.Z, {}),
                                          ],
                                        }),
                                      }),
                                    ],
                                  });
                                },
                              },
                              n
                            );
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "absolute bottom-0 right-2 md:right-[300px] lg:right-[340px] z-40 swiper-arrow-prev cursor-pointer bg-white p-1 rounded-full hover:scale-105 transition-all",
                            children: (0, i.jsx)("div", {
                              className:
                                "w-[18px] lg:w-[28px] h-[20px] lg:h-[28px] relative",
                              children: (0, i.jsx)(c(), {
                                src: y,
                                alt: "arrow prev",
                                layout: "fill",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "absolute bottom-0 left-2 md:left-[300px] lg:left-[340px] z-40 swiper-arrow-next cursor-pointer bg-white p-1 rounded-full hover:scale-105 transition-all rotate-180",
                            children: (0, i.jsx)("div", {
                              className:
                                "w-[18px] lg:w-[28px] h-[20px] lg:h-[28px] relative",
                              children: (0, i.jsx)(c(), {
                                src: y,
                                alt: "arrow prev",
                                layout: "fill",
                              }),
                            }),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            });
          }),
        _ = function () {
          return (0, i.jsx)(o.Fragment, {
            children: (0, i.jsxs)("div", {
              className: "relative z-20 top-0 h-full w-full",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "relative z-20 h-[1000px] lg:h-[1600px] w-auto bg-[url('~/public/images/home/background-banner.png')] bg-no-repeat bg-center bg-cover",
                }),
                (0, i.jsx)("div", {
                  className:
                    "relative z-30 h-[2000px] top-[-600px] w-full bg-[url('~/public/images/home/collection/bg-purple.png')] bg-no-repeat bg-center bg-cover",
                }),
                (0, i.jsx)("div", {
                  className:
                    "relative z-20 h-[1400px] w-auto bg-[url('~/public/images/home/collection/bg-purple.png')] bg-no-repeat bg-center bg-cover",
                }),
                (0, i.jsx)("div", {
                  className:
                    "relative z-20 h-[350px] lg:h-[1900px] w-auto bg-[url('~/public/images/home/collection/bg-purple.png')] bg-no-repeat bg-center bg-cover",
                }),
                (0, i.jsx)("div", {
                  className:
                    "relative z-20 h-[2800px] lg:h-[2550px] w-auto bg-[url('~/public/images/home/collection/bg-purple.png')] bg-no-repeat bg-center bg-cover",
                }),
              ],
            }),
          });
        },
        F = "/_next/static/media/chibi.87b8e103.png",
        z = "/_next/static/media/arrow-right.8993fd15.svg",
        E = (n(5816), "/_next/static/media/sorawebsite.83514cbb.png"),
        O = n(7969),
        C = n(4705),
        S = function (e) {
          var t = e.meme,
            n = e.handleOpenMeme,
            l = t.data,
            a = t.isOpen,
            r = (0, o.useRef)(null);
          return (
            (0, O.Z)(r, function () {
              n(!1);
            }),
            (0, i.jsx)(i.Fragment, {
              children:
                a &&
                (0, i.jsx)("div", {
                  className:
                    "fixed z-[60] -top-12 lg:top-0 left-0 w-screen h-screen transition-all duration-300 lg:bg-[#000000]/80 ".concat(
                      a ? "block" : "hidden"
                    ),
                  children: (0, i.jsx)("div", {
                    className:
                      "relative flex items-center justify-center w-full h-full lg:mt-0",
                    children: (0, i.jsx)("div", {
                      className:
                        "relative w-[360px] lg:w-[680px] aspect-square bg-black rounded-3xl border-2 border-[#00FFFF] overflow-hidden",
                      ref: r,
                      children: (0, i.jsxs)("div", {
                        className:
                          "absolute top-0 right-0 left-0 bottom-0 w-full aspect-square bg-[url('~/public/images/home/collection/bg-purple.png')] rounded-3xl flex items-center justify-center flex-col mx-auto",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "absolute z-20 h-[32px] lg:h-[50px] w-[32px] right-2 lg:right-1 top-2 lg:top-1 cursor-pointer",
                            onClick: function () {
                              n(!1);
                            },
                            children: (0, i.jsx)("img", {
                              src: C.Z.src,
                              layout: "fill",
                              alt: "Close Menu Mobile",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "relative z-10 w-full aspect-square lg:top-1/2 lg:-translate-y-1/2 flex flex-col-reverse lg:flex-row items-center justify-center gap-2 lg:gap-6",
                            children: (0, i.jsx)("div", {
                              className:
                                "relative w-full lg:w-[600px] aspect-square rounded-xl overflow-hidden",
                              children: (0, i.jsx)(c(), {
                                src: l && l.image,
                                alt: "",
                                layout: "fill",
                                objectFit: "contain",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
            })
          );
        },
        M = function () {
          var e = (0, o.useState)([]),
            t = (e[0], e[1]),
            n = (0, o.useState)([]),
            r = (n[0], n[1]),
            s = (0, o.useState)([]),
            d = s[0],
            p = s[1],
            u = (0, o.useState)({ data: null, isOpen: !1 }),
            x = u[0],
            f = u[1];
          (0, o.useEffect)(function () {
            fetch("/data/manga.json")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                r(e);
              });
          }, []),
            (0, o.useEffect)(function () {
              fetch("/data/waifu.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  t(e);
                });
            }, []),
            (0, o.useEffect)(function () {
              fetch("/data/meme.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  p(e);
                });
            }, []);
          return (0, i.jsxs)(o.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className:
                  "relative z-30 w-full h-[1610px] lg:h-[1325px] lg:w-[1180px] mx-auto right-0 left-0 top-[64px] lg:top-[110px]",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "flex flex-col lg:flex-row justify-center items-center gap-[14px] lg:gap-[30px] mb-24",
                    children: (0, i.jsxs)("div", {
                      "data-aos": "zoom-in-up",
                      className:
                        "relative [background:linear-gradient(90deg,rgba(2,39,125,0.6)_0%,rgba(174,74,143,0.6)_100%)] w-[262px] lg:w-[384px] h-[244px] lg:h-[487px] rounded-[47px] lg:rounded-[70px] p-4 lg:p-5",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "w-[143px] lg:w-[316px] h-[163px] lg:h-[360px] mx-auto relative",
                          children: (0, i.jsx)(c(), {
                            src: F,
                            layout: "fill",
                            alt: "catboy-flag",
                            className: "select-none pointer-events-none",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "flex items-center justify-between gap-10 lg:gap-[60px]",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "px-3",
                              children: [
                                (0, i.jsx)("p", {
                                  className:
                                    "text-[20px] lg:text-[32px] font-league-bold leading-[20px] lg:leading-[32px]",
                                  children: "CHIBI RAFFLE",
                                }),
                                (0, i.jsx)("p", {
                                  className:
                                    "text-[12px] lg:text-[18px] font-league-medium",
                                  children: "WIN PRIZES",
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "flex items-center justify-center [background:linear-gradient(90deg,#58D8E3_0%,#0756B1_100%)] hover:shadow-[0px_0px_10px_0px_#FFFFFF] hover:scale-105 transition-all rounded-[32px] border-2 border-[#FFFFFF] min-w-[56px] lg:min-w-[83px] h-[37px] lg:h-[55px] cursor-pointer",
                              children: (0, i.jsx)("div", {
                                className:
                                  "relative w-[22px] lg:w-[33px] h-[10px] lg:h-[12px]",
                                children: (0, i.jsx)(c(), {
                                  src: z,
                                  alt: "arrow-right",
                                  layout: "fill",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "w-full lg:w-[1180px] px-4 lg:px-0",
                    children: (0, i.jsxs)("div", {
                      className:
                        "flex flex-col lg:flex-row max-lg:gap-4 items-center lg:items-end",
                      children: [
                        (0, i.jsx)("div", {
                          className: "basis-full max-lg:w-full lg:basis-5/12",
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex flex-col items-center h-[450px] lg:h-[600px]",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "text-left",
                                children: [
                                  (0, i.jsx)("p", {
                                    className: "text-xl lg:text-2xl mb-2",
                                    children: "Catboy",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-3xl lg:text-4xl font-gotham-bold font-bold",
                                    children: "Meme",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-3xl lg:text-4xl font-gotham-bold font-bold",
                                    children: "generator",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "relative w-full h-full",
                                children: (0, i.jsx)(c(), {
                                  src: E,
                                  layout: "fill",
                                  objectFit: "contain",
                                  objectPosition: "bottom",
                                  alt: "MemeImg",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "basis-auto lg:basis-7/12",
                          children: [
                            (0, i.jsx)("p", {
                              className:
                                "font-gotham w-full text-[14px] lg:text-[20px] leading-[20px] lg:leading-[32px] px-1 lg:px-0",
                              children:
                                "Meet Waifu Sora, your gateway to unleashing creativity and humor! Our innovative Ai bot, live in the main chat on Telegram, empowers you to craft your very own Catboy memes effortlessly. Explore endless possibilities! Join us for exciting contests and giveaways, where imagination knows no bounds!",
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "[background:linear-gradient(90deg,#5470FE_0%,#F567C7_100%)] cursor-pointer rounded-[47px] inline-flex items-center justify-center mr-3 lg:mr-0 mt-2 lg:mt-10 hover:scale-105 scale-100 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_#522C65]",
                              onClick: function () {
                                return window.open(
                                  "https://t.me/cat_boy_eth",
                                  "_blank"
                                );
                              },
                              children: (0, i.jsx)("p", {
                                className:
                                  "font-gotham-bold text-[14px] lg:text-[22px] px-4 py-2 lg:py-[11px] lg:px-12",
                                children: "Join us on Telegram",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, i.jsx)("div", {
                    className: "relative h-full z-30 mx-auto",
                    children: (0, i.jsx)("div", {
                      className: "Marquee",
                      children: (0, i.jsx)("div", {
                        className: "Marquee-content",
                        children:
                          d &&
                          d.length > 0 &&
                          d.map(function (e, t) {
                            return (0, i.jsxs)(
                              "div",
                              {
                                className:
                                  "Marquee-tag relative w-[150px] lg:w-[200px] aspect-square mx-1 cursor-pointer group rounded-xl overflow-hidden",
                                onClick: function () {
                                  return f({ data: e, isOpen: !0 });
                                },
                                children: [
                                  (0, i.jsx)("img", {
                                    src: e.image,
                                    alt: "",
                                    objectfit: "cover",
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "absolute z-50 top-0 left-0 right-0 bottom-0 rounded-lg bg-[rgba(0,0,0,0.5)] group-hover:visible invisible",
                                    children: (0, i.jsxs)("div", {
                                      className:
                                        "relative top-1/2 -translate-y-1/2 flex gap-2 items-center justify-center my-auto",
                                      children: [
                                        (0, i.jsx)("p", {
                                          className:
                                            "test-[16px] font-gotham-medium",
                                          children: "View",
                                        }),
                                        (0, i.jsx)(N.Z, {}),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                      }),
                    }),
                  }),
                  (0, i.jsx)(S, {
                    meme: x,
                    handleOpenMeme: function (e) {
                      f((0, a.Z)((0, l.Z)({}, x), { isOpen: e }));
                    },
                  }),
                ],
              }),
            ],
          });
        },
        P = "/_next/static/media/circle-chevron-left.5d0024dd.svg",
        q = "/_next/static/media/circle-chevron-right.6202d140.svg",
        Z = n(3967),
        T = n.n(Z),
        A = function (e) {
          var t = e.webtoon,
            n = e.handleOpenWebtoon,
            l = t.data,
            a = t.isOpen,
            r = (0, o.useRef)(null);
          return (
            (0, O.Z)(r, function () {
              n(!1);
            }),
            (0, i.jsx)(i.Fragment, {
              children:
                a &&
                (0, i.jsx)("div", {
                  className:
                    "fixed z-[60] -top-12 lg:top-0 left-0 w-screen h-screen transition-all duration-300 lg:bg-[#000000]/80 ".concat(
                      a ? "block" : "hidden"
                    ),
                  children: (0, i.jsx)("div", {
                    className:
                      "relative flex items-center justify-center w-full h-full lg:mt-0",
                    children: (0, i.jsx)("div", {
                      className:
                        "relative w-[360px] lg:w-[680px] aspect-square bg-black rounded-3xl border-2 border-[#00FFFF] overflow-hidden",
                      ref: r,
                      children: (0, i.jsxs)("div", {
                        className:
                          "absolute top-0 right-0 left-0 bottom-0 w-full aspect-square bg-[url('~/public/images/home/collection/bg-purple.png')] rounded-3xl flex items-center justify-center flex-col mx-auto",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "absolute z-20 h-[32px] lg:h-[50px] w-[32px] right-2 lg:right-1 top-2 lg:top-1 cursor-pointer",
                            onClick: function () {
                              n(!1);
                            },
                            children: (0, i.jsx)("img", {
                              src: C.Z.src,
                              layout: "fill",
                              alt: "Close Menu Mobile",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "relative z-10 w-full aspect-square lg:top-1/2 lg:-translate-y-1/2 flex flex-col-reverse lg:flex-row items-center justify-center gap-2 lg:gap-6",
                            children: (0, i.jsx)("div", {
                              className:
                                "relative w-full lg:w-[600px] aspect-square rounded-xl overflow-hidden",
                              children: (0, i.jsx)(c(), {
                                src: l && l.image,
                                alt: "",
                                layout: "fill",
                                objectFit: "contain",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
            })
          );
        },
        B = function () {
          var e = (0, o.useState)([]),
            t = e[0],
            n = e[1],
            r = (0, o.useState)({ data: null, isOpen: !1 }),
            s = r[0],
            d = r[1];
          (0, o.useEffect)(function () {
            fetch("/data/series.json")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                n(e);
              });
          }, []);
          return (0, i.jsx)(o.Fragment, {
            children: (0, i.jsxs)("div", {
              className:
                "relative z-[51] h-[464px] top-[290px] lg:top-[400px] w-full max-w-[1440px] mx-auto",
              children: [
                (0, i.jsx)("p", {
                  className:
                    "relative z-20 font-hitandrun text-[32px] lg:text-[64px] leading-[40px] lg:leading-[64px] uppercase text-center mb-4",
                  children: "Catboy Webtoon Series",
                }),
                (0, i.jsx)("div", {
                  className:
                    "absolute z-30 right-0 left-0 lg:top-[150px] mx-auto",
                  children:
                    t &&
                    t.length > 0 &&
                    (0, i.jsxs)(o.Fragment, {
                      children: [
                        (0, i.jsx)(w.tq, {
                          navigation: { nextEl: ".next", prevEl: ".prev" },
                          slidesPerView: 5,
                          loop: !0,
                          fadeEffect: { crossFade: !0 },
                          centeredSlides: !0,
                          modules: [j.tl, j.W_, j.xW],
                          className:
                            "mySwipper hidden lg:block relative z-30 h-[350px]",
                          children: t.map(function (e, t) {
                            return (0, i.jsx)(
                              w.o5,
                              {
                                children: function (t) {
                                  var n = t.isActive;
                                  return (0, i.jsx)("div", {
                                    className: T()(
                                      "relative transition-all duration-300 cursor-pointer m-auto",
                                      {
                                        "w-[200px] h-[325px] hover:scale-110":
                                          !n,
                                        "w-[226px] h-[325px]": n,
                                      }
                                    ),
                                    onClick: function () {
                                      return d({ data: e, isOpen: !0 });
                                    },
                                    children: (0, i.jsx)(c(), {
                                      src: e.image,
                                      alt: "Series",
                                      layout: "fill",
                                      objectFit: "contain",
                                    }),
                                  });
                                },
                              },
                              t
                            );
                          }),
                        }),
                        (0, i.jsx)(w.tq, {
                          navigation: { nextEl: ".next", prevEl: ".prev" },
                          slidesPerView: 1,
                          loop: !0,
                          pagination: { clickable: !0 },
                          fadeEffect: { crossFade: !0 },
                          modules: [j.tl, j.W_, j.xW],
                          className:
                            "mySwipper block lg:hidden relative z-30 h-[350px]",
                          children: t.map(function (e, t) {
                            return (0, i.jsx)(
                              w.o5,
                              {
                                children: (0, i.jsx)("div", {
                                  className:
                                    "relative transition-all duration-300 w-[222px] h-[325px] cursor-pointer mx-auto",
                                  onClick: function () {
                                    return d({ data: e, isOpen: !0 });
                                  },
                                  children: (0, i.jsx)(c(), {
                                    src: e.image,
                                    alt: "Series",
                                    layout: "fill",
                                    objectFit: "contain",
                                  }),
                                }),
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "block lg:hidden absolute z-30 left-3 lg:left-[28px] top-1/2 prev cursor-pointer",
                  children: (0, i.jsx)("div", {
                    className: "w-[54px] h-[54px] relative",
                    children: (0, i.jsx)(c(), {
                      src: P,
                      alt: "button prev",
                      layout: "fill",
                    }),
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "block lg:hidden absolute right-3 lg:right-[28px] z-30 top-1/2 next cursor-pointer",
                  children: (0, i.jsx)("div", {
                    className: "w-[54px] h-[54px] relative",
                    children: (0, i.jsx)(c(), {
                      src: q,
                      alt: "button next",
                      layout: "fill",
                    }),
                  }),
                }),
                (0, i.jsx)(A, {
                  webtoon: s,
                  handleOpenWebtoon: function (e) {
                    d((0, a.Z)((0, l.Z)({}, s), { isOpen: e }));
                  },
                }),
              ],
            }),
          });
        },
        W = function () {
          var e = (0, o.useState)([]),
            t = e[0],
            n = e[1],
            l = (0, o.useState)([]),
            a = l[0],
            r = l[1];
          return (
            (0, o.useEffect)(function () {
              fetch("/data/team.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  n(e);
                });
            }, []),
            (0, o.useEffect)(function () {
              fetch("/data/partner.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  r(e);
                });
            }, []),
            (0, i.jsx)(o.Fragment, {
              children: (0, i.jsxs)("div", {
                className:
                  "relative z-30 h-[764px] w-full top-[335px] lg:top-[500px]",
                children: [
                  (0, i.jsx)("p", {
                    className:
                      "font-hitandrun text-[32px] lg:text-[64px] leading-[40px] lg:leading-[64px] uppercase text-center mb-8 lg:mb-[61px]",
                    children: "Best PFPs",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "h-auto max grid grid-cols-2 lg:grid-cols-3 justify-around items-end lg:items-center w-full lg:w-[994px] px-5 lg:mx-auto gap-10 lg:gap-[64px] mb-[80px] lg:mb-[112px]",
                    children:
                      t &&
                      t.length > 0 &&
                      t.map(function (e, t) {
                        return (0, i.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-col items-center justify-between w-full lg:w-[200px] text-center mx-auto",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "relative w-[146px] lg:w-[196px] h-[146px] lg:h-[196px] rounded-full border-2 border-[#FFFFFF] grow",
                                children: (0, i.jsx)(c(), {
                                  src: e.image,
                                  alt: e.position,
                                  layout: "fill",
                                  objectFit: "contain",
                                  className: "select-none pointer-events-none",
                                }),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "relative z-30 w-full h-[61px] lg:h-[107px] bg-[url('~/public/images/home/bg-partner.png')] bg-no-repeat bg-center bg-cover",
                    children: (0, i.jsx)("div", {
                      className:
                        "absolute w-full h-[26px] lg:h-[46px] bg-[url('~/public/images/home/bg-partner-up.png')] bg-no-repeat bg-center bg-cover top-1/2 -translate-y-1/2",
                      children:
                        a &&
                        a.length > 0 &&
                        (0, i.jsx)(w.tq, {
                          slidesPerView: 12,
                          loop: !0,
                          spaceBetween: 30,
                          speed: 5e3,
                          autoplay: { delay: 1, disableOnInteraction: !1 },
                          allowTouchMove: !1,
                          breakpoints: {
                            1024: { slidesPerView: 12, spaceBetween: 30 },
                            768: { slidesPerView: 5, spaceBetween: 20 },
                            340: { slidesPerView: 4, spaceBetween: 20 },
                          },
                          modules: [j.xW, j.pt],
                          className:
                            "mySwipper relative z-30 h-[20px] lg:h-[35px] mt-1 lg:mt-2",
                          children: a.map(function (e, t) {
                            return (0,
                            i.jsx)(w.o5, { children: (0, i.jsx)("a", { href: e.url, className: "relative inline-block w-[94px] h-[20px] lg:h-[30px]", title: e.name, children: (0, i.jsx)(c(), { src: e.image, alt: e.name, layout: "fill", objectFit: "contain", priority: !0 }) }) }, t);
                          }),
                        }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        D = function (e) {
          var t,
            n,
            l,
            a,
            r,
            s,
            d = e.handleManga,
            p = (0, o.useState)([]),
            u = p[0],
            x = p[1],
            f = (0, o.useState)(0),
            g = f[0],
            m = f[1];
          return (
            (0, o.useEffect)(function () {
              fetch("/data/manga.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  x(e);
                });
            }, []),
            (0, i.jsx)(o.Fragment, {
              children: (0, i.jsxs)("div", {
                className:
                  "relative z-30 h-[490px] lg:h-[1200px] w-full lg:w-[1200px] top-[220px] lg:top-[300px] mx-auto",
                children: [
                  (0, i.jsx)("p", {
                    className:
                      "font-hitandrun text-[32px] lg:text-[64px] leading-[40px] lg:leading-[64px] uppercase text-center mb-8 lg:mb-[61px]",
                    children: "Manga Guidelines",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "hidden lg:flex items-center justify-between gap-[37px]",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex flex-col items-center justify-between",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "relative bg-[#3B2350] w-[528px] h-[777px] mb-8 rounded-md cursor-pointer",
                            onClick: function () {
                              d({ data: u[g], isOpen: !0 });
                            },
                            children: (0, i.jsx)("div", {
                              className:
                                "absolute h-[753px] w-[504px] top-3 bottom-3 left-3 right-3",
                              children:
                                u &&
                                (0, i.jsx)(c(), {
                                  src:
                                    null === (t = u[g]) || void 0 === t
                                      ? void 0
                                      : t.image,
                                  alt:
                                    null === (n = u[g]) || void 0 === n
                                      ? void 0
                                      : n.name,
                                  layout: "fill",
                                  objectFit: "contain",
                                }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "w-1/2 mx-auto",
                            children: [
                              (0, i.jsxs)("p", {
                                className:
                                  "text-[26px] leading-[26px] font-league-bold uppercase text-center mb-2",
                                children: [
                                  "# ",
                                  null === (l = u[g]) || void 0 === l
                                    ? void 0
                                    : l.name,
                                ],
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-[26px] leading-[26px] font-league-bold uppercase text-center",
                                children:
                                  null === (a = u[g]) || void 0 === a
                                    ? void 0
                                    : a.title,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-between gap-10",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "bg-[#323137] rounded-[24px] w-full h-auto py-4 ",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-[18px] leading-[16px] font-gotham-medium w-full mb-4 px-4",
                                children:
                                  "Welcome to the Catboy\u2019s Manga Guidelines Section!",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-[16px] leading-[22px] font-gotham w-full px-4",
                                children:
                                  "In this section, you'll find all the essential rules and instructions for the Catboy project. Whether you're a participant, contributor, or just curious about the project, this is the place to familiarize yourself with what Catboy is all about and what you can expect from it.",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "grid grid-cols-3 gap-6",
                            children:
                              u &&
                              u.length &&
                              u
                                .filter(function (e) {
                                  return e.id !== g;
                                })
                                .map(function (e, t) {
                                  return (0, i.jsx)(
                                    "div",
                                    {
                                      className:
                                        "relative hover:scale-110 w-[188px] h-[254px] rounded-[12px] bg-[#3B2350] transition-all duration-300",
                                      children:
                                        "" !== e.image
                                          ? (0, i.jsx)("div", {
                                              className:
                                                "absolute w-[166px] h-[234px] top-[10px] bottom-[10px] right-[10px] left-[10px] cursor-pointer",
                                              onClick: function () {
                                                return m(
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.id
                                                );
                                              },
                                              children: (0, i.jsx)(c(), {
                                                src: e.image,
                                                alt: e.name,
                                                layout: "fill",
                                                objectFit: "contain",
                                              }),
                                            })
                                          : (0, i.jsx)("div", {
                                              className:
                                                "absolute text-[14px] font-satoshi-bold font-extrabold uppercase top-1/2 right-0 left-0 mx-auto text-center -translate-1/2",
                                              children: "In the Making",
                                            }),
                                    },
                                    t
                                  );
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute z-30 right-0 left-0 lg:top-[150px] mx-auto",
                    children:
                      u &&
                      u.length &&
                      (0, i.jsx)(w.tq, {
                        navigation: {
                          nextEl: ".review-swiper-button-next",
                          prevEl: ".review-swiper-button-prev",
                        },
                        slidesPerView: 1,
                        loop: !0,
                        pagination: { clickable: !0 },
                        fadeEffect: { crossFade: !0 },
                        onSlideChange: function (e) {
                          m(e.activeIndex > u.length ? 0 : e.activeIndex - 1);
                        },
                        modules: [j.tl, j.W_, j.xW],
                        className:
                          "mySwipper block lg:hidden relative z-30 h-[325px]",
                        children: u.map(function (e, t) {
                          return (0, i.jsx)(
                            w.o5,
                            {
                              children: (0, i.jsx)("div", {
                                className:
                                  "relative w-[207px] h-[285px] rounded-[19px] bg-[#3B2350] mx-auto",
                                children:
                                  "" !== e.image
                                    ? (0, i.jsx)("div", {
                                        className:
                                          "absolute w-[190px] h-[267px] top-[8px] bottom-[8px] right-[8px] left-[8px]",
                                        onClick: function () {
                                          d({
                                            data: u[
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.id
                                            ],
                                            isOpen: !0,
                                          });
                                        },
                                        children: (0, i.jsx)(c(), {
                                          src: e.image,
                                          alt: e.name,
                                          layout: "fill",
                                          objectFit: "contain",
                                        }),
                                      })
                                    : (0, i.jsx)("div", {
                                        className:
                                          "absolute text-[14px] font-satoshi-bold font-extrabold uppercase top-1/2 right-0 left-0 mx-auto text-center -translate-1/2",
                                        children: "In the Making",
                                      }),
                              }),
                            },
                            t
                          );
                        }),
                      }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2",
                    children: [
                      (0, i.jsxs)("p", {
                        className:
                          "text-[16px] lg:text-[26px] leading-[26px] font-league-bold uppercase text-center mb-2",
                        children: [
                          "# ",
                          null === (r = u[g]) || void 0 === r ? void 0 : r.name,
                        ],
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-[16px] lg:text-[26px] leading-[26px] font-league-bold uppercase text-center",
                        children:
                          null === (s = u[g]) || void 0 === s
                            ? void 0
                            : s.title,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "block lg:hidden absolute z-30 left-3 lg:left-[28px] top-[180px] review-swiper-button-prev cursor-pointer",
                    children: (0, i.jsx)("div", {
                      className: "w-[54px] h-[54px] relative",
                      children: (0, i.jsx)(c(), {
                        src: P,
                        alt: "button prev",
                        layout: "fill",
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "block lg:hidden absolute right-3 lg:right-[28px] z-30 top-[180px] review-swiper-button-next cursor-pointer",
                    children: (0, i.jsx)("div", {
                      className: "w-[54px] h-[54px] relative",
                      children: (0, i.jsx)(c(), {
                        src: q,
                        alt: "button next",
                        layout: "fill",
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        L = n(2711),
        I = n.n(L),
        H = (n(8279), n(3137)),
        V = function (e) {
          var t = e.manga,
            n = e.handleOpenManga,
            l = t.data,
            a = t.isOpen,
            r = (0, o.useRef)(null);
          return (
            (0, O.Z)(r, function () {
              n(!1);
            }),
            (0, i.jsx)(i.Fragment, {
              children:
                a &&
                (0, i.jsx)("div", {
                  className:
                    "fixed z-[60] -top-12 lg:top-0 left-0 w-screen h-screen transition-all duration-300 lg:bg-[#000000]/80 ".concat(
                      a ? "block" : "hidden"
                    ),
                  children: (0, i.jsx)("div", {
                    className:
                      "relative flex items-center justify-center w-full h-full lg:mt-0",
                    children: (0, i.jsx)("div", {
                      className:
                        "relative w-[360px] h-[620px] lg:w-[680px] lg:h-screen bg-black rounded-3xl border-2 border-[#00FFFF] overflow-hidden",
                      ref: r,
                      children: (0, i.jsxs)("div", {
                        className:
                          "absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-[url('~/public/images/home/collection/bg-purple.png')] rounded-3xl flex items-center justify-center flex-col mx-auto",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "absolute z-20 h-[32px] lg:h-[50px] w-[32px] right-2 lg:right-1 top-2 lg:top-1 cursor-pointer",
                            onClick: function () {
                              n(!1);
                            },
                            children: (0, i.jsx)("img", {
                              src: C.Z.src,
                              layout: "fill",
                              alt: "Close Menu Mobile",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "relative z-10 w-full h-full lg:top-1/2 lg:-translate-y-1/2 flex flex-col-reverse lg:flex-row items-center justify-center gap-2 lg:gap-6",
                            children: (0, i.jsx)("div", {
                              className:
                                "relative w-full lg:w-[600px] h-full mt-3 lg:mt-0",
                              children: (0, i.jsx)(c(), {
                                src: l && l.image,
                                alt: l.name,
                                layout: "fill",
                                objectFit: "contain",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
            })
          );
        },
        R = function () {
          (0, o.useEffect)(function () {
            I().init({ duration: 1e3 });
          }, []);
          var e = (0, o.useState)({ data: null, isOpen: !1 }),
            t = e[0],
            n = e[1],
            r = (0, o.useState)({ data: null, isOpen: !1 }),
            s = r[0],
            c = r[1];
          return (0, i.jsxs)("div", {
            className: "relative overflow-hidden",
            children: [
              (0, i.jsx)(_, {}),
              (0, i.jsxs)("div", {
                className: "absolute top-0 z-40 right-0 left-0 mx-auto",
                children: [
                  (0, i.jsx)(f, {}),
                  (0, i.jsx)(v, {}),
                  (0, i.jsx)(k, {
                    handleCollection: function (e) {
                      n(
                        (0, a.Z)((0, l.Z)({}, t), {
                          data: e.data,
                          isOpen: e.isOpen,
                        })
                      );
                    },
                  }),
                  (0, i.jsx)(M, {}),
                  (0, i.jsx)(D, {
                    handleManga: function (e) {
                      c(
                        (0, a.Z)((0, l.Z)({}, s), {
                          data: e.data,
                          isOpen: e.isOpen,
                        })
                      );
                    },
                  }),
                  (0, i.jsx)(B, {}),
                  (0, i.jsx)(W, {}),
                ],
              }),
              (0, i.jsx)(H.Z, {
                slayer: t,
                handleOpenSlayer: function (e) {
                  n((0, a.Z)((0, l.Z)({}, t), { isOpen: e }));
                },
              }),
              (0, i.jsx)(V, {
                manga: s,
                handleOpenManga: function (e) {
                  c((0, a.Z)((0, l.Z)({}, s), { isOpen: e }));
                },
              }),
            ],
          });
        };
      R.getLayout = function (e) {
        return (0, i.jsx)(r.Z, { children: e });
      };
      var $ = R;
    },
    8279: function () {},
    5519: function () {},
    2338: function () {},
    9846: function () {},
    706: function () {},
    92: function () {},
    8770: function () {},
    3390: function () {},
    5083: function () {},
  },
  function (e) {
    e.O(0, [976, 366, 438, 148, 746, 774, 888, 179], function () {
      return (t = 5557), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
