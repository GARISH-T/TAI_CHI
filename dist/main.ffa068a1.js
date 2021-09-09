// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var n = 0;
var string = "\n/*\u753B\u4E00\u4E2A\u592A\u6781\u56FE\n *\u9996\u5148\u9700\u8981\u4E00\u4E2Adiv\n *\u518D\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n*/\n#div1{\n    width:200px;\n    height:200px;\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n    border-style: none;\n}\n/*\u592A\u6781\u5206\u4E24\u4EEA\n *\u4E24\u4EEA\u4E3A\u9634\u9633\n *\u662F\u4E00\u9ED1\u4E00\u767D\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n#div1::before{\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    background: #fff;\n    top:0;\n    left:0;\n    left:50%;\n    transform: translateX(-50%);\n}\n#div1::after{\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    background: #000;\n    bottom:0;\n    left:0;\n    left:50%;\n    transform: translateX(-50%);\n}\n/*\u9633\u4E2D\u6709\u9634\n *\u9634\u4E2D\u6709\u9633\n*/\n#div1::before{\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n#div1::after{\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n";

var string2 = "";
var step = function step() {
    setTimeout(function () {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        if (n < string.length - 1) {
            n += 1;
            step();
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
    }, 20);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ffa068a1.map