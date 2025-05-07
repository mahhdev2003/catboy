"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    5975: function (e, t) {
      t.Z = {
        src: "/_next/static/media/footer-catboy.903ab00d.png",
        height: 93,
        width: 270,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42mP4V/ZP7Z/TP69/tv8c/8X+Y2b4l/Gv+1/vv+X/Fvyb9c/tHw/DP65/fP+YgST3P6Z/iv8cASWYHh7pd9+GAAAAAElFTkSuQmCC",
      };
    },
    4705: function (e, t) {
      t.Z = {
        src: "/_next/static/media/close-menu.be5deb08.svg",
        height: 32,
        width: 32,
      };
    },
    7406: function (e, t) {
      t.Z = {
        src: "/_next/static/media/copy.ee58a7d4.svg",
        height: 25,
        width: 25,
      };
    },
    7969: function (e, t, l) {
      var n = l(7294);
      t.Z = function (e, t) {
        (0, n.useEffect)(
          function () {
            var l = function (l) {
              e.current &&
                !e.current.contains(l.target) &&
                (t(), (document.body.style.overflowY = "auto"));
            };
            return (
              document.addEventListener("mousedown", l),
              function () {
                document.removeEventListener("mousedown", l);
              }
            );
          },
          [t, e]
        );
      };
    },
    7746: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return W;
        },
      });
      var n = l(5893),
        a = l(9008),
        s = l.n(a),
        i = l(7294),
        r = l(4924),
        o = l(5675),
        c = l.n(o),
        x = l(1664),
        d = l.n(x),
        p = "/_next/static/media/logo-token.0dfdeecd.svg",
        h = l(7969),
        u = l(1163),
        m = l(3967),
        g = l.n(m),
        f = "/_next/static/media/menu-mobile.5272e42c.svg",
        w = l(4705),
        v = function () {
          var e = (0, i.useState)(!1),
            t = e[0],
            l = e[1],
            a = (0, i.useState)(null),
            s = a[0],
            o = a[1],
            x = (0, i.useState)(!1),
            m = x[0],
            v = x[1],
            b = (0, i.useState)(!1),
            j = b[0],
            N = b[1],
            k = (0, i.useState)(""),
            F = (k[0], k[1], (0, i.useState)("")),
            y = (F[0], F[1], (0, u.useRouter)()),
            C = (0, i.useRef)(null),
            _ = (0, i.useRef)(null);
          return (
            (0, h.Z)(C, function () {
              l(!1);
            }),
            (0, h.Z)(_, function () {
              v(!1);
            }),
            (0, i.useEffect)(function () {
              fetch("/data/header.json")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  o(e);
                });
            }, []),
            (0, n.jsxs)("header", {
              className: "fixed z-50 top-0 left-0 w-full lg:h-[74px]",
              ref: C,
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "relative z-50 w-full h-[72px] lg:h-[74px] bg-gradient1",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "max-w-[1440px] h-full lg:px-[150px] xl:px-[250px] mx-auto hidden lg:block",
                      children: (0, n.jsx)("div", {
                        className: "flex items-center h-full justify-around",
                        children:
                          null != s &&
                          s.map(function (e, t) {
                            return (0, n.jsx)(
                              d(),
                              {
                                href:
                                  e.url === "/docs"
                                    ? "https://docs.catboy-eth.space/"
                                    : e.url,
                                children: (0, n.jsx)("div", {
                                  className: g()(
                                    "cursor-pointer group grow flex items-center justify-center border-r-2 border-white",
                                    (0, r.Z)(
                                      {
                                        "":
                                          "/" !== e.url &&
                                          y.pathname.includes(e.url),
                                      },
                                      "",
                                      e.url !== y.pathname
                                    )
                                  ),
                                  children: (0, n.jsx)("a", {
                                    className: g()(
                                      "relative flex items-center text-center text-[24px] leading-[22px] group- h-full font-gotham-medium hover:text-[#FFFFFF] transition-all",
                                      {
                                        "text-[#FFFFFF]": y.pathname === e.url,
                                        "text-neutral-400":
                                          y.pathname !== e.url,
                                      }
                                    ),
                                    target: e.target,
                                    children: e.name,
                                  }),
                                }),
                              },
                              t
                            );
                          }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "w-[56px] lg:w-[74px] h-[56px] lg:h-[74px] absolute top-2 lg:top-0 left-3",
                      children: (0, n.jsx)(c(), {
                        src: p,
                        layout: "fill",
                        alt: "Logo",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "w-[32px] h-[32px] absolute top-5 right-4 block lg:hidden",
                      onClick: function () {
                        return l(!t);
                      },
                      children: [
                        (0, n.jsx)(c(), {
                          src: f,
                          layout: "fill",
                          alt: "Menu Mobile",
                          className: "".concat(t ? "invisible" : "visible"),
                        }),
                        (0, n.jsx)(c(), {
                          src: w.Z.src,
                          layout: "fill",
                          alt: "Close Menu Mobile",
                          className: "".concat(t ? "visible" : "invisible"),
                        }),
                      ],
                    }),
                    (0, n.jsx)("button", {
                      className:
                        "hidden lg:block absolute top-2.5 right-4 [background:linear-gradient(90deg,#5470FE_0%,#F567C7_100%)] rounded-[47px] px-3 lg:px-7 h-[40px] lg:h-[55px] lg:max-h-[55px] hover:scale-105 scale-100 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_#522C65]",
                      onClick: function () {
                        window.open("https://dapp.catboy-eth.space/");
                      },
                      children: (0, n.jsx)("p", {
                        className:
                          "text-[16px] lg:text-[22px] font-gotham-bold uppercase",
                        children: "DApp",
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "fixed z-40 block lg:hidden top-[70px] left-0 transition-all duration-300 ease-out w-full ".concat(
                      !0 === t
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0"
                    ),
                  children: (0, n.jsx)("div", {
                    className: "bg-gradient-to-r from-[#21163F] to-[#522C65]",
                    children: (0, n.jsxs)("ul", {
                      className: "py-4 flex flex-col",
                      children: [
                        null != s &&
                          s.map(function (e, a) {
                            return "Docs" === e.name
                              ? (0, n.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "relative group h-full grow cursor-pointer transition-all duration-300",
                                    onClick: function () {
                                      return N(!j);
                                    },
                                    id: "dropdownDefaultButton",
                                    "data-dropdown-toggle": "dropdown",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: g()(
                                          "flex justify-start items-center gap-3 py-[10px] px-6",
                                          {
                                            "bg-[#300C42]":
                                              j ||
                                              "/docs/medium" === y.pathname ||
                                              "/docs/whitepaper" === y.pathname,
                                          }
                                        ),
                                        children: [
                                          (0, n.jsx)("div", {
                                            className: g()(
                                              "text-[16px] leading-[22px] h-full font-gotham"
                                            ),
                                            target: e.target,
                                            children: e.name,
                                          }),
                                          (0, n.jsx)("div", {
                                            className: "-rotate-90",
                                            children: (0, n.jsx)("svg", {
                                              width: "14",
                                              height: "18",
                                              viewBox: "0 0 11 8",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: (0, n.jsx)("path", {
                                                d: "M10.6487 0.571289H9.64428C9.57598 0.571289 9.51169 0.604771 9.47152 0.659682L5.6666 5.90433L1.86169 0.659682C1.82151 0.604771 1.75723 0.571289 1.68893 0.571289H0.684461C0.597407 0.571289 0.546514 0.670396 0.597407 0.741379L5.31973 7.25165C5.49116 7.48736 5.84205 7.48736 6.01214 7.25165L10.7345 0.741379C10.7867 0.670396 10.7358 0.571289 10.6487 0.571289Z",
                                                fill: "gray",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: g()(
                                          "overflow-hidden transition-all duration-300 ",
                                          {
                                            "h-[120px] transition-all duration-300":
                                              j,
                                            "h-0 overflow-hidden": !j,
                                          }
                                        ),
                                        children: [
                                          (0, n.jsx)("div", {
                                            className: g()("py-3 px-6", {
                                              "bg-[#300C42]":
                                                "/docs/whitepaper" ===
                                                y.pathname,
                                              "bg-gradient-to-r from-[#21163F] to-[#522C65]":
                                                "/docs/whitepaper" !==
                                                y.pathname,
                                            }),
                                            onClick: function () {
                                              return l(!1);
                                            },
                                            children: (0, n.jsx)(d(), {
                                              href: "/",
                                              children: (0, n.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-start gap-1",
                                                onClick: function () {
                                                  return window.open(
                                                    "https://gitbook.catboy.io/",
                                                    "_blank"
                                                  );
                                                },
                                                children: [
                                                  (0, n.jsx)("div", {
                                                    className:
                                                      "w-[6px] h-[6px] rounded-full bg-[#FFFFFF] ml-3",
                                                  }),
                                                  (0, n.jsx)("p", {
                                                    className:
                                                      "text-[14px] leading-[17px] text-[#FFFFFF] border-none font-gotham cursor-pointer italic",
                                                    children: "Whitepaper",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          (0, n.jsx)("div", {
                                            className: g()("py-3 px-6", {
                                              "bg-[#300C42]":
                                                "/docs/audit" === y.pathname,
                                              "bg-gradient-to-r from-[#21163F] to-[#522C65]":
                                                "/docs/audit" !== y.pathname,
                                            }),
                                            onClick: function () {
                                              return l(!1);
                                            },
                                            children: (0, n.jsx)(d(), {
                                              href: "/",
                                              children: (0, n.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-start gap-1",
                                                onClick: function () {
                                                  return window.open(
                                                    "https://medium.com/@catboy",
                                                    "_blank"
                                                  );
                                                },
                                                children: [
                                                  (0, n.jsx)("div", {
                                                    className:
                                                      "w-[6px] h-[6px] rounded-full bg-[#FFFFFF] ml-3",
                                                  }),
                                                  (0, n.jsx)("p", {
                                                    className:
                                                      "text-[14px] leading-[17px] text-[#FFFFFF] border-none font-gotham cursor-pointer italic",
                                                    children: "Medium",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  a
                                )
                              : (0, n.jsx)(
                                  d(),
                                  {
                                    href: e.url,
                                    children: (0, n.jsx)("li", {
                                      className: g()(
                                        "relative flex items-center px-6 py-[18px]",
                                        { "bg-[#300C42]": y.pathname === e.url }
                                      ),
                                      onClick: function () {
                                        return l(!1);
                                      },
                                      children: (0, n.jsx)("a", {
                                        className:
                                          "block font-gotham text-[16px] leading-[22px] ".concat(
                                            !0 === t
                                              ? "translate-y-0 opacity-100"
                                              : "-translate-y-[20px] opacity-0"
                                          ),
                                        target: e.target,
                                        children: e.name,
                                      }),
                                    }),
                                  },
                                  a
                                );
                          }),
                        (0, n.jsx)("li", {
                          className:
                            "relative group h-full grow cursor-pointer transition-all duration-300 px-6 py-6",
                          children: (0, n.jsx)("button", {
                            className:
                              "block lg:hidden [background:linear-gradient(90deg,#5470FE_0%,#F567C7_100%)] rounded-[47px] px-5 lg:px-7 h-[40px] lg:h-[55px] lg:max-h-[55px] hover:scale-105 scale-100 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_#522C65]",
                            onClick: function () {
                              return window.open(
                                "https://dapp.catboy-eth.space/",
                                "_blank"
                              );
                            },
                            children: (0, n.jsx)("p", {
                              className:
                                "text-[16px] lg:text-[22px] font-gotham-bold uppercase",
                              children: "DApp",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, n.jsx)("div", {
                  className: g()(
                    "absolute h-screen bg-black opacity-60 w-full z-0 pointer-events-none transition-all duration-300 ease-out",
                    { " block ": t, " hidden ": !t }
                  ),
                }),
              ],
            })
          );
        },
        b = "/_next/static/media/coinmarketcap.bbcdd289.png",
        j = "/_next/static/media/coin-gecko.4a75ab97.svg",
        N = "/_next/static/media/pinksale.28b02df6.png",
        k = "/_next/static/media/dexview.4992da1d.png",
        F = "/_next/static/media/flooz.4a44b99e.png",
        y = "/_next/static/media/dextools.57c925f9.png",
        C = {
          src: "/_next/static/media/icons8-twitter.6edee8aa.svg",
          height: 250,
          width: 250,
        },
        _ = {
          src: "/_next/static/media/icons8-discord.544d78e0.svg",
          height: 250,
          width: 250,
        },
        A = {
          src: "/_next/static/media/icons8-facebook.936b8529.svg",
          height: 250,
          width: 250,
        },
        D = {
          src: "/_next/static/media/icons8-instagram.2bdd605a.svg",
          height: 256,
          width: 256,
        },
        B = {
          src: "/_next/static/media/icons8-medium.c1f952b2.svg",
          height: 250,
          width: 250,
        },
        S = {
          src: "/_next/static/media/icons8-reddit.0ac3e521.svg",
          height: 250,
          width: 250,
        },
        E = {
          src: "/_next/static/media/icons8-telegram.07a85a22.svg",
          height: 250,
          width: 250,
        },
        L = {
          src: "/_next/static/media/tiktok.8f6edb71.png",
          height: 636,
          width: 558,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAX0lEQVR42g3HsQ0BARgG0O8uFhAKBYXEFsxAIZHbgtUMcCOIUFlBdd2V77973YtYiLOykWjNdVGethHRuCqjip2frw4Hp3gbHN2UpUR5iE5ZS/RGd38v0cRKr3zsRTsBDjNOtazzw/8AAAAASUVORK5CYII=",
        },
        M = {
          src: "/_next/static/media/icons8-youtube.4d9ca8ea.svg",
          height: 250,
          width: 250,
        },
        Z = "/_next/static/media/pankage-swap.e3348136.svg",
        R = "/_next/static/media/uniswap.0c253ba4.svg",
        U = "/_next/static/media/gempad.8884c92e.png",
        z = "/_next/static/media/moontok.9bd54e2e.jpeg",
        P = "/_next/static/media/ave.b4d39a01.png",
        G = "/_next/static/media/etherscan.46222009.jpeg",
        T = "/_next/static/media/bscscan.3d78e373.svg",
        V = "/_next/static/media/mexc.1570bf66.png",
        O = "/_next/static/media/bitget.2b094bd9.png",
        Y = "/_next/static/media/lbank.afeca713.jpeg",
        H = (l(7406), l(5975)),
        I = (l(4855), "/_next/static/media/cls.286ee8e0.jpeg"),
        Q = "/_next/static/media/cryptic.b7413675.jpeg",
        K = function () {
          var e = (0, i.useState)("0xTBA"),
            t = (e[0], e[1], (0, i.useState)(!1));
          t[0], t[1];
          return (0, n.jsx)("footer", {
            className: "absolute z-30 bottom-0 w-full",
            children: (0, n.jsxs)("div", {
              className:
                "w-full max-w-[860px] mx-auto flex flex-col items-center justify-center gap-8 lg:gap-5",
              children: [
                (0, n.jsxs)("div", {
                  className: "mb-4 lg:mb-12 w-full",
                  children: [
                    (0, n.jsx)("h3", {
                      className:
                        "text-[32px] font-extrabold font-league-bold mt-[62px] lg:my-5 text-center",
                      children: "Partners",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-0 gap-y-4 lg:my-3 px-4 lg:px-0",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://flooz.xyz/trade",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Flooz",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: F,
                                layout: "fill",
                                alt: "Flooz",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Flooz",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://www.cls.global/",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "CLS",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: I,
                                layout: "fill",
                                alt: "CLS",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "CLS",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://crypticweb3.com/",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Cryptic",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: Q,
                                layout: "fill",
                                alt: "Cryptic",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Cryptic",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://www.mexc.com/price/CATBOY?calculatorTab=trade",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Mexc",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: V,
                                layout: "fill",
                                alt: "Mexc",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Mexc",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://www.bitget.com/spot/CATBOYUSDT",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Bitget",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: O,
                                layout: "fill",
                                alt: "Bitget",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Bitget",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://www.lbank.com/trade/catboy_usdt",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "LBank",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: Y,
                                layout: "fill",
                                alt: "LBank",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "LBank",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "mb-4 lg:mb-12 w-full",
                  children: [
                    (0, n.jsx)("h3", {
                      className:
                        "text-[32px] font-extrabold font-league-bold mt-[62px] lg:my-5 text-center",
                      children: "Find us here",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-0 gap-y-4 lg:my-3 px-4 lg:px-0",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://www.coingecko.com/",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "CoinGecko",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: j,
                                layout: "fill",
                                alt: "CoinGecko",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "CoinGecko",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://dextools.io/app/en/ether/pair-explorer/0xTBA",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Dextools",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: y,
                                layout: "fill",
                                alt: "Dextools",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Dextools",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://etherscan.io/token/0xTBA",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Etherscan",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: G,
                                layout: "fill",
                                alt: "Etherscan",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Etherscan",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://bscscan.com/token/0xTBA",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "BscScan",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: T,
                                layout: "fill",
                                alt: "BscScan",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "BscScan",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://app.uniswap.org/swap?outputCurrency=0xTBA",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "UniSwap",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: R,
                                layout: "fill",
                                alt: "UniSwap",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "UniSwap",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://gempad.app/presale/all",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Gempad",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: U,
                                layout: "fill",
                                alt: "Gempad",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Gempad",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://www.pinksale.finance/",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "PinkSale",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: N,
                                layout: "fill",
                                alt: "PinkSale",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Pinksale",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://www.dexview.com/bsc/0xTBA",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "DexView",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: k,
                                layout: "fill",
                                alt: "DexView",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "DexView",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://coinmarketcap.com/",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "CoinMarketCap",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: b,
                                layout: "fill",
                                alt: "CoinMarketCap",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "CoinMarketCap",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://pancakeswap.finance/?outputCurrency=0xTBA",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "PancakeSwap",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: Z,
                                layout: "fill",
                                alt: "PancakeSwap",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "PancakeSwap",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://moontok.io/coins/catboy",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Moontok",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: z,
                                layout: "fill",
                                alt: "Moontok",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Moontok",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "text-center w-1/4 sm:w-1/6 lg:w-1/6",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://ave.ai/token/0xTBA-bsc?from=Default",
                              className:
                                "inline-block w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] relative cursor-pointer rounded-full overflow-hidden",
                              title: "Ave.ai",
                              target: "_blank",
                              children: (0, n.jsx)(c(), {
                                src: P,
                                layout: "fill",
                                alt: "Ave.ai",
                                className: "select-none pointer-events-none",
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: "text-xs lg:text-sm",
                              children: "Ave.ai",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {}),
                (0, n.jsx)("div", {
                  className: "w-[180px] h-[61px] relative",
                  children: (0, n.jsx)(c(), {
                    src: H.Z,
                    layout: "fill",
                    alt: "Logo Catboy",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-wrap items-center justify-center gap-[8px] lg:gap-[28px]",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] relative cursor-pointer group rounded-full overflow-hidden text-center bg-[#8B4DD2] p-1 lg:p-2",
                      onClick: function () {
                        return window.open(
                          "https://t.me/cat_boy_eth",
                          "_blank"
                        );
                      },
                      children: (0, n.jsx)("div", {
                        className: "relative w-full h-full",
                        children: (0, n.jsx)(c(), {
                          src: E,
                          layout: "fill",
                          alt: "Telegram",
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] relative cursor-pointer group rounded-full overflow-hidden text-center bg-[#8B4DD2] p-1 lg:p-2",
                      onClick: function () {
                        return window.open(
                          "https://x.com/catboy_eth",
                          "_blank"
                        );
                      },
                      children: (0, n.jsx)("div", {
                        className: "relative w-full h-full",
                        children: (0, n.jsx)(c(), {
                          src: C,
                          layout: "fill",
                          alt: "Twitter",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row items-center justify-center",
                  onClick: function () {
                    return window.open("https://t.me/cat_boy_eth", "_blank");
                  },
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center justify-center",
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "text-[16px] lg:text-[22px] leading-[20px] lg:leading-[28px] font-gotham-medium font-medium text-[#E4C1A8] hover:text-[#FFFFFF] px-3 border-r border-[#E4C1A8] hover:border-[#FFFFFF] cursor-pointer transition-all",
                          onClick: function () {
                            return window.open(
                              "https://gitbook.catboy.io/informations/terms-and-conditions",
                              "_blank"
                            );
                          },
                          children: "Terms and Conditions",
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-[16px] lg:text-[22px] leading-[20px] lg:leading-[28px] font-gotham-medium font-medium text-[#E4C1A8] hover:text-[#FFFFFF] px-3 lg:border-r lg:border-[#E4C1A8] lg:hover:border-[#FFFFFF] cursor-pointer transition-all",
                          onClick: function () {
                            return window.open(
                              "https://gitbook.catboy.io/informations/terms-and-conditions",
                              "_blank"
                            );
                          },
                          children: "Disclaimer",
                        }),
                      ],
                    }),
                    (0, n.jsx)("p", {
                      className:
                        "text-[16px] lg:text-[22px] leading-[28px] font-gotham-medium font-medium text-[#E4C1A8] hover:text-[#FFFFFF] px-3 cursor-pointer transition-all",
                      onClick: function () {
                        return window.open("Mailto:Info@Catboy.io", "_blank");
                      },
                      children: "Contact Us",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "text-center text-[16px] pt-2 pb-4",
                  children: (0, n.jsx)("p", {
                    children: "\xa9 Catboy Token 2025",
                  }),
                }),
              ],
            }),
          });
        },
        W = function (e) {
          var t = e.children;
          return (0, n.jsxs)(i.Fragment, {
            children: [
              (0, n.jsxs)(s(), {
                children: [
                  (0, n.jsx)("title", { children: "Catboy" }),
                  (0, n.jsx)("link", {
                    rel: "shortcut icon",
                    href: "/images/favicon.ico",
                  }),
                  (0, n.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                  }),
                  (0, n.jsx)("meta", {
                    name: "description",
                    content: "Welcome to the world of Catboy.",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:title",
                    content: "Cat Boy",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:description",
                    content: "Welcome to the world of Catboy.",
                  }),
                  (0, n.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                  }),
                  (0, n.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossOrigin: "true",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "bg-[#000000] w-full h-full relative",
                children: (0, n.jsxs)("div", {
                  className: "",
                  children: [
                    (0, n.jsx)(v, {}),
                    (0, n.jsx)("main", { className: " z-40", children: t }),
                    (0, n.jsx)(K, {}),
                  ],
                }),
              }),
            ],
          });
        };
    },
  },
]);
