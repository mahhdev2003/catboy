(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [976],
  {
    9361: function (e, t) {
      "use strict";
      t.Z = function (e, t, n) {
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n);
        return e;
      };
    },
    640: function (e, t, n) {
      "use strict";
      var o = n(1742),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          a,
          l,
          c,
          u,
          s = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((a = o()),
            (l = document.createRange()),
            (c = document.getSelection()),
            ((u = document.createElement("span")).textContent = e),
            (u.ariaHidden = "true"),
            (u.style.all = "unset"),
            (u.style.position = "fixed"),
            (u.style.top = 0),
            (u.style.clip = "rect(0, 0, 0, 0)"),
            (u.style.whiteSpace = "pre"),
            (u.style.webkitUserSelect = "text"),
            (u.style.MozUserSelect = "text"),
            (u.style.msUserSelect = "text"),
            (u.style.userSelect = "text"),
            u.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = r[t.format] || r.default;
                  window.clipboardData.setData(i, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(u),
            l.selectNodeContents(u),
            c.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (f) {
          n && console.error("unable to copy using execCommand: ", f),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (s = !0);
          } catch (f) {
            n && console.error("unable to copy using clipboardData: ", f),
              n && console.error("falling back to prompt"),
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(l)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            a();
        }
        return s;
      };
    },
    1210: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, o) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8045: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(9361).Z,
        r = n(4941).Z,
        i = n(3929).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.src,
            n = e.sizes,
            l = e.unoptimized,
            c = void 0 !== l && l,
            g = e.priority,
            m = void 0 !== g && g,
            C = e.loading,
            _ = e.lazyRoot,
            R = void 0 === _ ? null : _,
            k = e.lazyBoundary,
            z = e.className,
            A = e.quality,
            P = e.width,
            L = e.height,
            I = e.style,
            M = e.objectFit,
            D = e.objectPosition,
            T = e.onLoadingComplete,
            N = e.placeholder,
            U = void 0 === N ? "empty" : N,
            q = e.blurDataURL,
            B = u(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "style",
              "objectFit",
              "objectPosition",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
            ]),
            Z = s.useContext(y.ImageConfigContext),
            H = s.useMemo(
              function () {
                var e = v || Z || d.imageConfigDefault,
                  t = i(e.deviceSizes)
                    .concat(i(e.imageSizes))
                    .sort(function (e, t) {
                      return e - t;
                    }),
                  n = e.deviceSizes.sort(function (e, t) {
                    return e - t;
                  });
                return a({}, e, { allSizes: t, deviceSizes: n });
              },
              [Z]
            ),
            W = B,
            V = n ? "responsive" : "intrinsic";
          "layout" in W && (W.layout && (V = W.layout), delete W.layout);
          var G = O;
          if ("loader" in W) {
            if (W.loader) {
              var F = W.loader;
              G = function (e) {
                e.config;
                var t = u(e, ["config"]);
                return F(t);
              };
            }
            delete W.loader;
          }
          var K = "";
          if (
            (function (e) {
              return (
                "object" === typeof e &&
                (x(e) ||
                  (function (e) {
                    return void 0 !== e.src;
                  })(e))
              );
            })(t)
          ) {
            var J = x(t) ? t.default : t;
            if (!J.src)
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(J)
                )
              );
            if (
              ((q = q || J.blurDataURL),
              (K = J.src),
              (!V || "fill" !== V) &&
                ((L = L || J.height),
                (P = P || J.width),
                !J.height || !J.width))
            )
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(J)
                )
              );
          }
          var Q = !m && ("lazy" === C || "undefined" === typeof C);
          ((t = "string" === typeof t ? t : K).startsWith("data:") ||
            t.startsWith("blob:")) &&
            ((c = !0), (Q = !1));
          h.has(t) && (Q = !1);
          b && (c = !0);
          var X,
            Y = r(s.useState(!1), 2),
            $ = Y[0],
            ee = Y[1],
            te = r(
              p.useIntersection({
                rootRef: R,
                rootMargin: k || "200px",
                disabled: !Q,
              }),
              3
            ),
            ne = te[0],
            oe = te[1],
            re = te[2],
            ie = !Q || oe,
            ae = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            le = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            ce = !1,
            ue = {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: M,
              objectPosition: D,
            },
            se = j(P),
            fe = j(L),
            de = j(A);
          0;
          var pe = Object.assign({}, I, ue),
            ye =
              "blur" !== U || $
                ? {}
                : {
                    backgroundSize: M || "cover",
                    backgroundPosition: D || "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("'.concat(q, '")'),
                  };
          if ("fill" === V)
            (ae.display = "block"),
              (ae.position = "absolute"),
              (ae.top = 0),
              (ae.left = 0),
              (ae.bottom = 0),
              (ae.right = 0);
          else if ("undefined" !== typeof se && "undefined" !== typeof fe) {
            var ge = fe / se,
              me = isNaN(ge) ? "100%" : "".concat(100 * ge, "%");
            "responsive" === V
              ? ((ae.display = "block"),
                (ae.position = "relative"),
                (ce = !0),
                (le.paddingTop = me))
              : "intrinsic" === V
              ? ((ae.display = "inline-block"),
                (ae.position = "relative"),
                (ae.maxWidth = "100%"),
                (ce = !0),
                (le.maxWidth = "100%"),
                (X =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                    .concat(se, "%27%20height=%27")
                    .concat(fe, "%27/%3e")))
              : "fixed" === V &&
                ((ae.display = "inline-block"),
                (ae.position = "relative"),
                (ae.width = se),
                (ae.height = fe));
          } else 0;
          var be = { src: w, srcSet: void 0, sizes: void 0 };
          ie &&
            (be = S({
              config: H,
              src: t,
              unoptimized: c,
              layout: V,
              width: se,
              quality: de,
              sizes: n,
              loader: G,
            }));
          var ve = t;
          0;
          var he,
            we = "imagesrcset",
            Ce = "imagesizes";
          (we = "imageSrcSet"), (Ce = "imageSizes");
          var xe = (o((he = {}), we, be.srcSet), o(he, Ce, be.sizes), he),
            Se = s.default.useLayoutEffect,
            je = s.useRef(T),
            Oe = s.useRef(t);
          s.useEffect(
            function () {
              je.current = T;
            },
            [T]
          ),
            Se(
              function () {
                Oe.current !== t && (re(), (Oe.current = t));
              },
              [re, t]
            );
          var _e = a(
            {
              isLazy: Q,
              imgAttributes: be,
              heightInt: fe,
              widthInt: se,
              qualityInt: de,
              layout: V,
              className: z,
              imgStyle: pe,
              blurStyle: ye,
              loading: C,
              config: H,
              unoptimized: c,
              placeholder: U,
              loader: G,
              srcString: ve,
              onLoadingCompleteRef: je,
              setBlurComplete: ee,
              setIntersection: ne,
              isVisible: ie,
              noscriptSizes: n,
            },
            W
          );
          return s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(
              "span",
              { style: ae },
              ce
                ? s.default.createElement(
                    "span",
                    { style: le },
                    X
                      ? s.default.createElement("img", {
                          style: {
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          },
                          alt: "",
                          "aria-hidden": !0,
                          src: X,
                        })
                      : null
                  )
                : null,
              s.default.createElement(E, Object.assign({}, _e))
            ),
            m
              ? s.default.createElement(
                  f.default,
                  null,
                  s.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + be.src + be.srcSet + be.sizes,
                        rel: "preload",
                        as: "image",
                        href: be.srcSet ? void 0 : be.src,
                      },
                      xe
                    )
                  )
                )
              : null
          );
        });
      var a = n(6495).Z,
        l = n(2648).Z,
        c = n(1598).Z,
        u = n(7273).Z,
        s = c(n(7294)),
        f = l(n(5443)),
        d = n(9309),
        p = n(7190),
        y = n(9977),
        g = (n(3794), n(2392));
      var m =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "",
            loader: "default",
            dangerouslyAllowSVG: !1,
          } || {},
        b = m.experimentalUnoptimized,
        v = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "",
          loader: "default",
          dangerouslyAllowSVG: !1,
        },
        h = new Set(),
        w =
          (new Map(),
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      var C = new Map([
        [
          "default",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width,
              r = e.quality;
            0;
            if (n.endsWith(".svg") && !t.dangerouslyAllowSVG) return n;
            return ""
              .concat(g.normalizePathTrailingSlash(t.path))
              .concat(g.normalizePathTrailingSlash(n));
          },
        ],
        [
          "imgix",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width,
              r = e.quality,
              i = new URL("".concat(t.path).concat(R(n))),
              a = i.searchParams;
            a.set("auto", a.get("auto") || "format"),
              a.set("fit", a.get("fit") || "max"),
              a.set("w", a.get("w") || o.toString()),
              r && a.set("q", r.toString());
            return i.href;
          },
        ],
        [
          "cloudinary",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width,
              r = e.quality,
              i =
                ["f_auto", "c_limit", "w_" + o, "q_" + (r || "auto")].join(
                  ","
                ) + "/";
            return "".concat(t.path).concat(i).concat(R(n));
          },
        ],
        [
          "akamai",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width;
            return "".concat(t.path).concat(R(n), "?imwidth=").concat(o);
          },
        ],
        [
          "custom",
          function (e) {
            var t = e.src;
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function x(e) {
        return void 0 !== e.default;
      }
      function S(e) {
        var t = e.config,
          n = e.src,
          o = e.unoptimized,
          r = e.layout,
          a = e.width,
          l = e.quality,
          c = e.sizes,
          u = e.loader;
        if (o) return { src: n, srcSet: void 0, sizes: void 0 };
        var s = (function (e, t, n, o) {
            var r = e.deviceSizes,
              a = e.allSizes;
            if (o && ("fill" === n || "responsive" === n)) {
              for (var l, c = /(^|\s)(1?\d?\d)vw/g, u = []; (l = c.exec(o)); l)
                u.push(parseInt(l[2]));
              if (u.length) {
                var s,
                  f = 0.01 * (s = Math).min.apply(s, i(u));
                return {
                  widths: a.filter(function (e) {
                    return e >= r[0] * f;
                  }),
                  kind: "w",
                };
              }
              return { widths: a, kind: "w" };
            }
            return "number" !== typeof t || "fill" === n || "responsive" === n
              ? { widths: r, kind: "w" }
              : {
                  widths: i(
                    new Set(
                      [t, 2 * t].map(function (e) {
                        return (
                          a.find(function (t) {
                            return t >= e;
                          }) || a[a.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(t, a, r, c),
          f = s.widths,
          d = s.kind,
          p = f.length - 1;
        return {
          sizes: c || "w" !== d ? c : "100vw",
          srcSet: f
            .map(function (e, o) {
              return ""
                .concat(u({ config: t, src: n, quality: l, width: e }), " ")
                .concat("w" === d ? e : o + 1)
                .concat(d);
            })
            .join(", "),
          src: u({ config: t, src: n, quality: l, width: f[p] }),
        };
      }
      function j(e) {
        return "number" === typeof e
          ? e
          : "string" === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function O(e) {
        var t,
          n = (null == (t = e.config) ? void 0 : t.loader) || "default",
          o = C.get(n);
        if (o) return o(e);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(", "), ". Received: ")
            .concat(n)
        );
      }
      function _(e, t, n, o, r, i) {
        e &&
          e.src !== w &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (
                e.parentNode &&
                (h.add(t),
                "blur" === o && i(!0),
                null == r ? void 0 : r.current)
              ) {
                var n = e.naturalWidth,
                  a = e.naturalHeight;
                r.current({ naturalWidth: n, naturalHeight: a });
              }
            }));
      }
      var E = function (e) {
        var t = e.imgAttributes,
          n = (e.heightInt, e.widthInt),
          o = e.qualityInt,
          r = e.layout,
          i = e.className,
          l = e.imgStyle,
          c = e.blurStyle,
          f = e.isLazy,
          d = e.placeholder,
          p = e.loading,
          y = e.srcString,
          g = e.config,
          m = e.unoptimized,
          b = e.loader,
          v = e.onLoadingCompleteRef,
          h = e.setBlurComplete,
          w = e.setIntersection,
          C = e.onLoad,
          x = e.onError,
          j = (e.isVisible, e.noscriptSizes),
          O = u(e, [
            "imgAttributes",
            "heightInt",
            "widthInt",
            "qualityInt",
            "layout",
            "className",
            "imgStyle",
            "blurStyle",
            "isLazy",
            "placeholder",
            "loading",
            "srcString",
            "config",
            "unoptimized",
            "loader",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setIntersection",
            "onLoad",
            "onError",
            "isVisible",
            "noscriptSizes",
          ]);
        return (
          (p = f ? "lazy" : p),
          s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(
              "img",
              Object.assign({}, O, t, {
                decoding: "async",
                "data-nimg": r,
                className: i,
                style: a({}, l, c),
                ref: s.useCallback(
                  function (e) {
                    w(e),
                      (null == e ? void 0 : e.complete) && _(e, y, 0, d, v, h);
                  },
                  [w, y, r, d, v, h]
                ),
                onLoad: function (e) {
                  _(e.currentTarget, y, 0, d, v, h), C && C(e);
                },
                onError: function (e) {
                  "blur" === d && h(!0), x && x(e);
                },
              })
            ),
            (f || "blur" === d) &&
              s.default.createElement(
                "noscript",
                null,
                s.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    O,
                    S({
                      config: g,
                      src: y,
                      unoptimized: m,
                      layout: r,
                      width: n,
                      quality: o,
                      sizes: j,
                      loader: b,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": r,
                      style: l,
                      className: i,
                      loading: p,
                    }
                  )
                )
              )
          )
        );
      };
      function R(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8418: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(4941).Z;
      n(5753).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(2648).Z,
        i = n(7273).Z,
        a = r(n(7294)),
        l = n(6273),
        c = n(2725),
        u = n(3462),
        s = n(1018),
        f = n(7190),
        d = n(1210),
        p = n(8684),
        y = "undefined" !== typeof a.default.useTransition,
        g = {};
      function m(e, t, n, o) {
        if (e && l.isLocalURL(t)) {
          e.prefetch(t, n, o).catch(function (e) {
            0;
          });
          var r =
            o && "undefined" !== typeof o.locale ? o.locale : e && e.locale;
          g[t + "%" + n + (r ? "%" + r : "")] = !0;
        }
      }
      var b = a.default.forwardRef(function (e, t) {
        var n,
          r = e.href,
          b = e.as,
          v = e.children,
          h = e.prefetch,
          w = e.passHref,
          C = e.replace,
          x = e.soft,
          S = e.shallow,
          j = e.scroll,
          O = e.locale,
          _ = e.onClick,
          E = e.onMouseEnter,
          R = e.onTouchStart,
          k = e.legacyBehavior,
          z = void 0 === k ? !0 !== Boolean(!1) : k,
          A = i(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "soft",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = v),
          !z ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = a.default.createElement("a", null, n));
        var P = !1 !== h,
          L = o(y ? a.default.useTransition() : [], 2)[1],
          I = a.default.useContext(u.RouterContext),
          M = a.default.useContext(s.AppRouterContext);
        M && (I = M);
        var D,
          T = a.default.useMemo(
            function () {
              var e = o(l.resolveHref(I, r, !0), 2),
                t = e[0],
                n = e[1];
              return { href: t, as: b ? l.resolveHref(I, b) : n || t };
            },
            [I, r, b]
          ),
          N = T.href,
          U = T.as,
          q = a.default.useRef(N),
          B = a.default.useRef(U);
        z && (D = a.default.Children.only(n));
        var Z = z ? D && "object" === typeof D && D.ref : t,
          H = o(f.useIntersection({ rootMargin: "200px" }), 3),
          W = H[0],
          V = H[1],
          G = H[2],
          F = a.default.useCallback(
            function (e) {
              (B.current === U && q.current === N) ||
                (G(), (B.current = U), (q.current = N)),
                W(e),
                Z &&
                  ("function" === typeof Z
                    ? Z(e)
                    : "object" === typeof Z && (Z.current = e));
            },
            [U, Z, N, G, W]
          );
        a.default.useEffect(
          function () {
            var e = V && P && l.isLocalURL(N),
              t = "undefined" !== typeof O ? O : I && I.locale,
              n = g[N + "%" + U + (t ? "%" + t : "")];
            e && !n && m(I, N, U, { locale: t });
          },
          [U, N, V, O, P, I]
        );
        var K = {
          ref: F,
          onClick: function (e) {
            z || "function" !== typeof _ || _(e),
              z &&
                D.props &&
                "function" === typeof D.props.onClick &&
                D.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, o, r, i, a, c, u, s) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var f = function () {
                      "softPush" in t && "softReplace" in t
                        ? t[
                            i
                              ? r
                                ? "softReplace"
                                : "softPush"
                              : r
                              ? "replace"
                              : "push"
                          ](n)
                        : t[r ? "replace" : "push"](n, o, {
                            shallow: a,
                            locale: u,
                            scroll: c,
                          });
                    };
                    s ? s(f) : f();
                  }
                })(e, I, N, U, C, x, S, j, O, M ? L : void 0);
          },
          onMouseEnter: function (e) {
            z || "function" !== typeof E || E(e),
              z &&
                D.props &&
                "function" === typeof D.props.onMouseEnter &&
                D.props.onMouseEnter(e),
              l.isLocalURL(N) && m(I, N, U, { priority: !0 });
          },
          onTouchStart: function (e) {
            z || "function" !== typeof R || R(e),
              z &&
                D.props &&
                "function" === typeof D.props.onTouchStart &&
                D.props.onTouchStart(e),
              l.isLocalURL(N) && m(I, N, U, { priority: !0 });
          },
        };
        if (!z || w || ("a" === D.type && !("href" in D.props))) {
          var J = "undefined" !== typeof O ? O : I && I.locale,
            Q =
              I &&
              I.isLocaleDomain &&
              d.getDomainLocale(U, J, I.locales, I.domainLocales);
          K.href = Q || p.addBasePath(c.addLocale(U, J, I && I.defaultLocale));
        }
        return z
          ? a.default.cloneElement(D, K)
          : a.default.createElement("a", Object.assign({}, A, K), n);
      });
      (t.default = b),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7190: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(4941).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            u = e.disabled || !a,
            s = r.useRef(),
            f = o(r.useState(!1), 2),
            d = f[0],
            p = f[1],
            y = o(r.useState(null), 2),
            g = y[0],
            m = y[1];
          r.useEffect(
            function () {
              if (a) {
                if ((s.current && (s.current(), (s.current = void 0)), u || d))
                  return;
                return (
                  g &&
                    g.tagName &&
                    (s.current = (function (e, t, n) {
                      var o = (function (e) {
                          var t,
                            n = {
                              root: e.root || null,
                              margin: e.rootMargin || "",
                            },
                            o = c.find(function (e) {
                              return e.root === n.root && e.margin === n.margin;
                            });
                          if (o && (t = l.get(o))) return t;
                          var r = new Map(),
                            i = new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = r.get(e.target),
                                  n =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && n && t(n);
                              });
                            }, e);
                          return (
                            (t = { id: n, observer: i, elements: r }),
                            c.push(n),
                            l.set(n, t),
                            t
                          );
                        })(n),
                        r = o.id,
                        i = o.observer,
                        a = o.elements;
                      return (
                        a.set(e, t),
                        i.observe(e),
                        function () {
                          if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                            i.disconnect(), l.delete(r);
                            var t = c.findIndex(function (e) {
                              return e.root === r.root && e.margin === r.margin;
                            });
                            t > -1 && c.splice(t, 1);
                          }
                        }
                      );
                    })(
                      g,
                      function (e) {
                        return e && p(e);
                      },
                      { root: null == t ? void 0 : t.current, rootMargin: n }
                    )),
                  function () {
                    null == s.current || s.current(), (s.current = void 0);
                  }
                );
              }
              if (!d) {
                var e = i.requestIdleCallback(function () {
                  return p(!0);
                });
                return function () {
                  return i.cancelIdleCallback(e);
                };
              }
            },
            [g, u, n, t, d]
          );
          var b = r.useCallback(function () {
            p(!1);
          }, []);
          return [m, d, b];
        });
      var r = n(7294),
        i = n(9311),
        a = "function" === typeof IntersectionObserver;
      var l = new Map(),
        c = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1018: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var o = (0, n(2648).Z)(n(7294)),
        r = o.default.createContext(null);
      t.AppRouterContext = r;
      var i = o.default.createContext(null);
      t.LayoutRouterContext = i;
      var a = o.default.createContext(null);
      t.GlobalLayoutRouterContext = a;
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    5675: function (e, t, n) {
      e.exports = n(8045);
    },
    1664: function (e, t, n) {
      e.exports = n(8418);
    },
    4300: function (e, t, n) {
      "use strict";
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
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
                }),
          o(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var r = l(n(7294)),
        i = l(n(640)),
        a = ["text", "onCopy", "options", "children"];
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = b(e);
          if (t) {
            var r = b(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return g(this, n);
        };
      }
      function g(e, t) {
        if (t && ("object" === o(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return m(e);
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var h = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && p(e, t);
        })(c, e);
        var t,
          n,
          o,
          l = y(c);
        function c() {
          var e;
          f(this, c);
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          return (
            v(
              m((e = l.call.apply(l, [this].concat(n)))),
              "onClick",
              function (t) {
                var n = e.props,
                  o = n.text,
                  a = n.onCopy,
                  l = n.children,
                  c = n.options,
                  u = r.default.Children.only(l),
                  s = (0, i.default)(o, c);
                a && a(o, s),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = s(e, a),
                  o = r.default.Children.only(t);
                return r.default.cloneElement(
                  o,
                  u(u({}, n), {}, { onClick: this.onClick })
                );
              },
            },
          ]) && d(t.prototype, n),
          o && d(t, o),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          c
        );
      })(r.default.PureComponent);
      (t.CopyToClipboard = h),
        v(h, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    4855: function (e, t, n) {
      "use strict";
      var o = n(4300).CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    1742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], o = 0;
          o < e.rangeCount;
          o++
        )
          n.push(e.getRangeAt(o));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);
