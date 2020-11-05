/*
 * Template Name: BreezyCV - Resume / CV / vCard / Portfolio Template
 * Author: LMPixels
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.3.0
 */
console.log({ thisdd: window, thisd: document });

(window.Modernizr = (function (a, b, c) {
  console.log({ a, b, c });
  function z(a) {
    j.cssText = a;
  }
  function A(a, b) {
    return z(m.join(a + ";") + (b || ""));
  }
  function B(a, b) {
    return typeof a === b;
  }
  function C(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function D(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function E(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function F(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + o.join(d + " ") + d).split(" ");
    return B(b, "string") || B(b, "undefined")
      ? D(e, b)
      : ((e = (a + " " + p.join(d + " ") + d).split(" ")), E(e, b, c));
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = " -webkit- -moz- -o- -ms- ".split(" "),
    n = "Webkit Moz O ms",
    o = n.split(" "),
    p = n.toLowerCase().split(" "),
    q = {},
    r = {},
    s = {},
    t = [],
    u = t.slice,
    v,
    w = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ""),
          (n.style.overflow = "hidden"),
          (k = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      );
    },
    x = {}.hasOwnProperty,
    y;
  !B(x, "undefined") && !B(x.call, "undefined")
    ? (y = function (a, b) {
        return x.call(a, b);
      })
    : (y = function (a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = u.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(u.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(u.call(arguments)));
          };
        return e;
      }),
    (q.touch = function () {
      var c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : w(
              [
                "@media (",
                m.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    }),
    (q.cssanimations = function () {
      return F("animationName");
    }),
    (q.csstransforms = function () {
      return !!F("transform");
    }),
    (q.csstransforms3d = function () {
      var a = !!F("perspective");
      return (
        a &&
          "webkitPerspective" in g.style &&
          w(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (b, c) {
              a = b.offsetLeft === 9 && b.offsetHeight === 3;
            }
          ),
        a
      );
    }),
    (q.csstransitions = function () {
      return F("transition");
    });
  for (var G in q)
    y(q, G) &&
      ((v = G.toLowerCase()), (e[v] = q[G]()), t.push((e[v] ? "" : "no-") + v));
  return (
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) y(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    z(""),
    (i = k = null),
    (function (a, b) {
      function l(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function m() {
        var a = s.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function n(a) {
        var b = j[a[h]];
        return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b;
      }
      function o(a, c, d) {
        c || (c = b);
        if (k) return c.createElement(a);
        d || (d = n(c));
        var g;
        return (
          d.cache[a]
            ? (g = d.cache[a].cloneNode())
            : f.test(a)
            ? (g = (d.cache[a] = d.createElem(a)).cloneNode())
            : (g = d.createElem(a)),
          g.canHaveChildren && !e.test(a) && !g.tagUrn
            ? d.frag.appendChild(g)
            : g
        );
      }
      function p(a, c) {
        a || (a = b);
        if (k) return a.createDocumentFragment();
        c = c || n(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function q(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              m()
                .join()
                .replace(/[\w\-]+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(s, b.frag));
      }
      function r(a) {
        a || (a = b);
        var c = n(a);
        return (
          s.shivCSS &&
            !g &&
            !c.hasCSS &&
            (c.hasCSS = !!l(
              a,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          k || q(a, c),
          a
        );
      }
      var c = "3.7.0",
        d = a.html5 || {},
        e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = "_html5shiv",
        i = 0,
        j = {},
        k;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (g = "hidden" in a),
            (k =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (g = !0), (k = !0);
        }
      })();
      var s = {
        elements:
          d.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: c,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: k,
        shivMethods: d.shivMethods !== !1,
        type: "default",
        shivDocument: r,
        createElement: o,
        createDocumentFragment: p,
      };
      (a.html5 = s), r(b);
    })(this, b),
    (e._version = d),
    (e._prefixes = m),
    (e._domPrefixes = p),
    (e._cssomPrefixes = o),
    (e.testProp = function (a) {
      return D([a]);
    }),
    (e.testAllProps = F),
    (e.testStyles = w),
    (e.prefixed = function (a, b, c) {
      return b ? F(a, b, c) : F(a, "pfx");
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + t.join(" ") : "")),
    e
  );
})(window, document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror = l.onload = l.onreadystatechange = function () {
          k.call(this, r);
        }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload = function () {
            !l &&
              g(k.readyState) &&
              ((l = 1), c(), (k.onload = k.onreadystatechange = null));
          }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(window, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });

var PageTransitions = (function ($, options) {
  "use strict";
  var sectionsContainer = $(".animated-sections"),
    isAnimating = false,
    endCurrentPage = true,
    endNextPage = false,
    windowArea = $(window),
    animEndEventNames = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd",
      animation: "animationend",
    },
    // animation end event name
    animEndEventName = animEndEventNames[Modernizr.prefixed("animation")],
    // support css animations
    support = Modernizr.cssanimations;

  function init(options) {
    // Get all the .animated-section sections.
    $(".animated-section").each(function () {
      var $page = $(this);
      $page.data("originalClassList", $page.attr("class"));
    });

    // Get all the .pt-wrapper div which is the parent for all pt-div
    sectionsContainer.each(function () {
      if (location.hash === "") {
        $("section[data-id=" + pageStart + "]").addClass("section-active");
      }
    });

    // Adding click event to main menu link
    $(".header__menu-link").on("click", function (e) {
      e.preventDefault();
      if (isAnimating) {
        return false;
      }
      var pageTrigger = $(this);

      activeMenuItem(pageTrigger);

      Animate(pageTrigger);

      location.hash = $(this).attr("href");
    });

    window.onhashchange = function (event) {
      if (location.hash) {
        if (isAnimating) {
          return false;
        }
        var menuLink = $(
          menu + ' a[href*="' + location.hash.split("/")[0] + '"]'
        );
        activeMenuItem(menuLink);
        Animate(menuLink);

        ajaxLoader();
      }
    };

    var menu = options.menu,
      pageStart = getActiveSection();

    location.hash = pageStart;
    var menuLink = $(menu + ' a[href*="' + location.hash.split("/")[0] + '"]');

    activeMenuItem(menuLink);

    Animate(menuLink);

    $("body").append(
      '<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'
    );
    ajaxLoader();

    $(".lmpixels-arrow-right").click(function () {
      var activeItem = $(".main-menu a.active").parent("li");
      activeItem.next("li").children("a").click();
      if (activeItem.is(":last-child")) {
        $(".main-menu li:first-child").children("a").click();
      }
    });

    $(".lmpixels-arrow-left").click(function () {
      var activeItem = $(".main-menu a.active").parent("li");
      activeItem.prev("li").children("a").click();
      if (activeItem.is(":first-child")) {
        $(".main-menu li:last-child").children("a").click();
      }
    });
  }

  function getActiveSection() {
    if (location.hash === "") {
      return (location.hash = $("section.animated-section")
        .first()
        .attr("data-id"));
    } else {
      return location.hash;
    }
  }

  function activeMenuItem(item) {
    if (!item) {
      return false;
    }

    var navLink = $(item);
    navLink = navLink["0"];
    navLink = $(navLink);

    if (navLink) {
      $("ul.main-menu a").removeClass("active");
      navLink.addClass("active");
    }
  }

  function ajaxLoader() {
    // Check for hash value in URL
    var ajaxLoadedContent = $("#page-ajax-loaded");

    function showContent() {
      ajaxLoadedContent.removeClass("animated-section-moveToRight closed");
      ajaxLoadedContent.show();
      $("body").addClass("ajax-page-visible");
    }

    function hideContent() {
      $("#page-ajax-loaded").addClass("animated-section-moveToRight closed");
      $("body").removeClass("ajax-page-visible");
      setTimeout(function () {
        $("#page-ajax-loaded.closed").html("");
        ajaxLoadedContent.hide();
      }, 500);
    }

    var href = $(".ajax-page-load").each(function () {
      href = $(this).attr("href");
      if (
        location.hash ==
        location.hash.split("/")[0] + "/" + href.substr(0, href.length - 5)
      ) {
        var toLoad = $(this).attr("href");
        showContent();
        ajaxLoadedContent.load(toLoad);
        return false;
      }
    });

    $(document)
      .on("click", ".main-menu, #ajax-page-close-button", function (e) {
        // Hide Ajax Loaded Page on Navigation cleck and Close button
        e.preventDefault();
        hideContent();
        location.hash = location.hash.split("/")[0];
      })
      .on("click", ".ajax-page-load", function () {
        // Show Ajax Loaded Page
        var hash =
          location.hash.split("/")[0] +
          "/" +
          $(this)
            .attr("href")
            .substr(0, $(this).attr("href").length - 5);
        location.hash = hash;
        showContent();

        return false;
      });
  }

  function Animate($pageTrigger, gotoPage) {
    // Checking for 'data-animation' attribute.
    if (!$pageTrigger.attr("data-animation")) {
      var animNumber = parseInt(Math.floor(Math.random() * 67) + 1);
      $pageTrigger.data("animation", animNumber);
    }

    console.log({ dd: $pageTrigger });

    var animation = $pageTrigger.data("animation").toString(),
      gotoPage,
      inClass,
      outClass,
      selectedAnimNumber;

    // Check if the delimiter '-' is present then create an animation array list.
    if (animation.indexOf("-") != -1) {
      var randomAnimList = animation.split("-");
      selectedAnimNumber = parseInt(
        randomAnimList[Math.floor(Math.random() * randomAnimList.length)]
      );
    } else {
      selectedAnimNumber = parseInt(animation);
    }

    // Checking if the animation number is out of bound, max allowed value is 1 to 67.
    if (selectedAnimNumber > 67) {
      alert(
        "Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"
      );
      return false;
    }

    switch (selectedAnimNumber) {
      case 1:
        inClass = "animated-section-moveFromRight";
        outClass = "animated-section-moveToLeft";
        break;
      case 2:
        inClass = "animated-section-moveFromLeft";
        outClass = "animated-section-moveToRight";
        break;
      case 3:
        inClass = "animated-section-moveFromBottom";
        outClass = "animated-section-moveToTop";
        break;
      case 4:
        inClass = "animated-section-moveFromTop";
        outClass = "animated-section-moveToBottom";
        break;
      case 5:
        inClass = "animated-section-moveFromRight animated-section-ontop";
        outClass = "animated-section-fade";
        break;
      case 6:
        inClass = "animated-section-moveFromLeft animated-section-ontop";
        outClass = "animated-section-fade";
        break;
      case 7:
        inClass = "animated-section-moveFromBottom animated-section-ontop";
        outClass = "animated-section-fade";
        break;
      case 8:
        inClass = "animated-section-moveFromTop animated-section-ontop";
        outClass = "animated-section-fade";
        break;
      case 9:
        inClass = "animated-section-moveFromRightFade";
        outClass = "animated-section-moveToLeftFade";
        break;
      case 10:
        inClass = "animated-section-moveFromLeftFade";
        outClass = "animated-section-moveToRightFade";
        break;
      case 11:
        inClass = "animated-section-moveFromBottomFade";
        outClass = "animated-section-moveToTopFade";
        break;
      case 12:
        inClass = "animated-section-moveFromTopFade";
        outClass = "animated-section-moveToBottomFade";
        break;
      case 13:
        inClass = "animated-section-moveFromRight";
        outClass = "animated-section-moveToLeftEasing animated-section-ontop";
        break;
      case 14:
        inClass = "animated-section-moveFromLeft";
        outClass = "animated-section-moveToRightEasing animated-section-ontop";
        break;
      case 15:
        inClass = "animated-section-moveFromBottom";
        outClass = "animated-section-moveToTopEasing animated-section-ontop";
        break;
      case 16:
        inClass = "animated-section-moveFromTop";
        outClass = "animated-section-moveToBottomEasing animated-section-ontop";
        break;
      case 17:
        inClass = "animated-section-moveFromRight animated-section-ontop";
        outClass = "animated-section-scaleDown";
        break;
      case 18:
        inClass = "animated-section-moveFromLeft animated-section-ontop";
        outClass = "animated-section-scaleDown";
        break;
      case 19:
        inClass = "animated-section-moveFromBottom animated-section-ontop";
        outClass = "animated-section-scaleDown";
        break;
      case 20:
        inClass = "animated-section-moveFromTop animated-section-ontop";
        outClass = "animated-section-scaleDown";
        break;
      case 21:
        inClass = "animated-section-scaleUpDown animated-section-delay300";
        outClass = "animated-section-scaleDown";
        break;
      case 22:
        inClass = "animated-section-scaleUp animated-section-delay300";
        outClass = "animated-section-scaleDownUp";
        break;
      case 23:
        inClass = "animated-section-scaleUp";
        outClass = "animated-section-moveToLeft animated-section-ontop";
        break;
      case 24:
        inClass = "animated-section-scaleUp";
        outClass = "animated-section-moveToRight animated-section-ontop";
        break;
      case 25:
        inClass = "animated-section-scaleUp";
        outClass = "animated-section-moveToTop animated-section-ontop";
        break;
      case 26:
        inClass = "animated-section-scaleUp";
        outClass = "animated-section-moveToBottom animated-section-ontop";
        break;
      case 27:
        inClass = "animated-section-scaleUpCenter animated-section-delay400";
        outClass = "animated-section-scaleDownCenter";
        break;
      case 28:
        inClass =
          "animated-section-moveFromRight animated-section-delay200 animated-section-ontop";
        outClass = "animated-section-rotateRightSideFirst";
        break;
      case 29:
        inClass =
          "animated-section-moveFromLeft animated-section-delay200 animated-section-ontop";
        outClass = "animated-section-rotateLeftSideFirst";
        break;
      case 30:
        inClass =
          "animated-section-moveFromTop animated-section-delay200 animated-section-ontop";
        outClass = "animated-section-rotateTopSideFirst";
        break;
      case 31:
        inClass =
          "animated-section-moveFromBottom animated-section-delay200 animated-section-ontop";
        outClass = "animated-section-rotateBottomSideFirst";
        break;
      case 32:
        inClass = "animated-section-flipInLeft animated-section-delay500";
        outClass = "animated-section-flipOutRight";
        break;
      case 33:
        inClass = "animated-section-flipInRight animated-section-delay500";
        outClass = "animated-section-flipOutLeft";
        break;
      case 34:
        inClass = "animated-section-flipInBottom animated-section-delay500";
        outClass = "animated-section-flipOutTop";
        break;
      case 35:
        inClass = "animated-section-flipInTop animated-section-delay500";
        outClass = "animated-section-flipOutBottom";
        break;
      case 36:
        inClass = "animated-section-scaleUp";
        outClass = "animated-section-rotateFall animated-section-ontop";
        break;
      case 37:
        inClass =
          "animated-section-rotateInNewspaper animated-section-delay500";
        outClass = "animated-section-rotateOutNewspaper";
        break;
      case 38:
        inClass = "animated-section-moveFromRight";
        outClass = "animated-section-rotatePushLeft";
        break;
      case 39:
        inClass = "animated-section-moveFromLeft";
        outClass = "animated-section-rotatePushRight";
        break;
      case 40:
        inClass = "animated-section-moveFromBottom";
        outClass = "animated-section-rotatePushTop";
        break;
      case 41:
        inClass = "animated-section-moveFromTop";
        outClass = "animated-section-rotatePushBottom";
        break;
      case 42:
        inClass = "animated-section-rotatePullRight animated-section-delay180";
        outClass = "animated-section-rotatePushLeft";
        break;
      case 43:
        inClass = "animated-section-rotatePullLeft animated-section-delay180";
        outClass = "animated-section-rotatePushRight";
        break;
      case 44:
        inClass = "animated-section-rotatePullBottom animated-section-delay180";
        outClass = "animated-section-rotatePushTop";
        break;
      case 45:
        inClass = "animated-section-rotatePullTop animated-section-delay180";
        outClass = "animated-section-rotatePushBottom";
        break;
      case 46:
        inClass = "animated-section-moveFromRightFade";
        outClass = "animated-section-rotateFoldLeft";
        break;
      case 47:
        inClass = "animated-section-moveFromLeftFade";
        outClass = "animated-section-rotateFoldRight";
        break;
      case 48:
        inClass = "animated-section-moveFromBottomFade";
        outClass = "animated-section-rotateFoldTop";
        break;
      case 49:
        inClass = "animated-section-moveFromTopFade";
        outClass = "animated-section-rotateFoldBottom";
        break;
      case 50:
        inClass = "animated-section-rotateUnfoldLeft";
        outClass = "animated-section-moveToRightFade";
        break;
      case 51:
        inClass = "animated-section-rotateUnfoldRight";
        outClass = "animated-section-moveToLeftFade";
        break;
      case 52:
        inClass = "animated-section-rotateUnfoldTop";
        outClass = "animated-section-moveToBottomFade";
        break;
      case 53:
        inClass = "animated-section-rotateUnfoldBottom";
        outClass = "animated-section-moveToTopFade";
        break;
      case 54:
        inClass = "animated-section-rotateRoomLeftIn";
        outClass = "animated-section-rotateRoomLeftOut animated-section-ontop";
        break;
      case 55:
        inClass = "animated-section-rotateRoomRightIn";
        outClass = "animated-section-rotateRoomRightOut animated-section-ontop";
        break;
      case 56:
        inClass = "animated-section-rotateRoomTopIn";
        outClass = "animated-section-rotateRoomTopOut animated-section-ontop";
        break;
      case 57:
        inClass = "animated-section-rotateRoomBottomIn";
        outClass =
          "animated-section-rotateRoomBottomOut animated-section-ontop";
        break;
      case 58:
        inClass = "animated-section-rotateCubeLeftIn";
        outClass = "animated-section-rotateCubeLeftOut animated-section-ontop";
        break;
      case 59:
        inClass = "animated-section-rotateCubeRightIn";
        outClass = "animated-section-rotateCubeRightOut animated-section-ontop";
        break;
      case 60:
        inClass = "animated-section-rotateCubeTopIn";
        outClass = "animated-section-rotateCubeTopOut animated-section-ontop";
        break;
      case 61:
        inClass = "animated-section-rotateCubeBottomIn";
        outClass =
          "animated-section-rotateCubeBottomOut animated-section-ontop";
        break;
      case 62:
        inClass = "animated-section-rotateCarouselLeftIn";
        outClass =
          "animated-section-rotateCarouselLeftOut animated-section-ontop";
        break;
      case 63:
        inClass = "animated-section-rotateCarouselRightIn";
        outClass =
          "animated-section-rotateCarouselRightOut animated-section-ontop";
        break;
      case 64:
        inClass = "animated-section-rotateCarouselTopIn";
        outClass =
          "animated-section-rotateCarouselTopOut animated-section-ontop";
        break;
      case 65:
        inClass = "animated-section-rotateCarouselBottomIn";
        outClass =
          "animated-section-rotateCarouselBottomOut animated-section-ontop";
        break;
      case 66:
        inClass = "animated-section-rotateSidesIn animated-section-delay200";
        outClass = "animated-section-rotateSidesOut";
        break;
      case 67:
        inClass = "animated-section-rotateSlideIn";
        outClass = "animated-section-rotateSlideOut";
        break;
    }

    // This will get the header__main-menu-link elements parent wrapper div
    var $pageWrapper = sectionsContainer,
      currentPageId = $pageWrapper.data("current"),
      tempPageIndex,
      linkhref = $pageTrigger.attr("href").split("#"),
      gotoPage = linkhref[1];

    tempPageIndex = currentPageId;

    // Current page to be removed.
    var $currentPage = $('section[data-id="' + currentPageId + '"]');

    // NEXT PAGE
    currentPageId = gotoPage;

    // Check if the current page is same as the next page then do not do the animation
    // else reset the 'isAnimatiing' flag
    if (tempPageIndex != currentPageId) {
      isAnimating = true;

      $pageWrapper.data("current", currentPageId);

      // Next page to be animated.

      var $nextPage = $("section[data-id=" + currentPageId + "]").addClass(
        "section-active"
      );

      $nextPage.scrollTop(0);

      $currentPage.addClass(outClass).on(animEndEventName, function () {
        $currentPage.off(animEndEventName);
        endCurrentPage = true;
        if (endNextPage) {
          onEndAnimation($pageWrapper, $nextPage, $currentPage);
          endCurrentPage = false;
        }
      });

      $nextPage.addClass(inClass).on(animEndEventName, function () {
        $nextPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrentPage) {
          onEndAnimation($pageWrapper, $nextPage, $currentPage);
          endNextPage = false;
          isAnimating = false;
        }
      });
    } else {
      isAnimating = false;
    }

    // Check if the animation is supported by browser and reset the pages.
    if (!support) {
      onEndAnimation($currentPage, $nextPage);
    }
  }

  function onEndAnimation($pageWrapper, $nextPage, $currentPage) {
    resetPage($nextPage, $currentPage);
  }

  function resetPage($nextPage, $currentPage) {
    $currentPage.attr("class", $currentPage.data("originalClassList"));
    $nextPage.attr(
      "class",
      $nextPage.data("originalClassList") + " section-active"
    );
  }

  return {
    init: init,
  };
})(jQuery);

module.exports = PageTransitions;
