(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-saver"], {
  /***/
  "./node_modules/file-saver/dist/FileSaver.min.js":
  /*!*******************************************************!*\
    !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function _node_modules_fileSaver_dist_FileSaverMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (a, b) {
      if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    })(this, function () {
      "use strict";

      function b(a, b) {
        return "undefined" == typeof b ? b = {
          autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
          autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
          type: a.type
        }) : a;
      }

      function c(a, b, c) {
        var d = new XMLHttpRequest();
        d.open("GET", a), d.responseType = "blob", d.onload = function () {
          g(d.response, b, c);
        }, d.onerror = function () {
          console.error("could not download file");
        }, d.send();
      }

      function d(a) {
        var b = new XMLHttpRequest();
        b.open("HEAD", a, !1);

        try {
          b.send();
        } catch (a) {}

        return 200 <= b.status && 299 >= b.status;
      }

      function e(a) {
        try {
          a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
          var b = document.createEvent("MouseEvents");
          b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
      }

      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
          a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
          g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
        var i = f.URL || f.webkitURL,
            j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
          i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function () {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
          var i = document.createElement("a");
          i.href = f, i.target = "_blank", setTimeout(function () {
            e(i);
          });
        }
      } : function (b, d, e, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
        var h = "application/octet-stream" === b.type,
            i = /constructor/i.test(f.HTMLElement) || f.safari,
            j = /CriOS\/[\d]+/.test(navigator.userAgent);

        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function () {
            var a = k.result;
            a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
          }, k.readAsDataURL(b);
        } else {
          var l = f.URL || f.webkitURL,
              m = l.createObjectURL(b);
          g ? g.location = m : location.href = m, g = null, setTimeout(function () {
            l.revokeObjectURL(m);
          }, 4E4);
        }
      });
      f.saveAs = g.saveAs = g, true && (module.exports = g);
    }); //# sourceMappingURL=FileSaver.min.js.map

    /***/

  }
}]);
//# sourceMappingURL=file-saver-es5.js.map