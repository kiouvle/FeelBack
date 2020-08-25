// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"blocks/profile/profile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Profile = /*#__PURE__*/function () {
  function Profile(profile) {
    _classCallCheck(this, Profile);

    this._profile = profile;
  }

  _createClass(Profile, [{
    key: "create",
    value: function create() {
      return "<section class=\"profile\">\n   <div class=\"profile__info\">\n     <img class=\"profile__info_pic\" src=\"".concat(this._profile.image, "\" alt=\"avatar\">\n     <div>\n     <h1 class=\"profile__info_name\">").concat(this._profile.name, "</h1>\n     <span class=\"profile__info_job\">").concat(this._profile.job, "</span>\n   </div>\n   </div>\n     <h2 class=\"profile__title\">\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0430</h2>\n     <span class=\"profile__quality\">Weirdness</span>\n     <span class=\"profile__quantity\">").concat(this._profile.qualities.weirdness, "</span>\n     <span class=\"profile__quality\">Dexterity</span>\n     <span class=\"profile__quantity\">").concat(this._profile.qualities.dexterity, "</span>\n     <span class=\"profile__quality\">Intelligence</span>\n     <span class=\"profile__quantity\">").concat(this._profile.qualities.intelligence, "</span>\n   \n </section>");
    }
  }]);

  return Profile;
}();

exports.default = Profile;
},{}],"blocks/colleague/colleague.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Colleague = /*#__PURE__*/function () {
  function Colleague(colleague, index) {
    _classCallCheck(this, Colleague);

    this._colleague = colleague;
    this._index = index;
  }

  _createClass(Colleague, [{
    key: "create",
    value: function create() {
      return "<div data-index=\"".concat(this._index, "\" class=\"card\">\n   <h3 class=\"card__title\">").concat(this._colleague.name, "</h3>\n   <p class=\"card__description\">").concat(this._colleague.job, "</p>\n </div>");
    }
  }]);

  return Colleague;
}();

exports.default = Colleague;
},{}],"blocks/feedback/feedback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Feedback = /*#__PURE__*/function () {
  function Feedback(feedback) {
    _classCallCheck(this, Feedback);

    this._feedback = feedback;
  }

  _createClass(Feedback, [{
    key: "create",
    value: function create() {
      return "<div class=\"card\">\n   <h3 class=\"card__title\">".concat(this._feedback.name, "</h3>\n   <p class=\"card__description\">").concat(this._feedback.text, "</p>\n </div>");
    }
  }]);

  return Feedback;
}();

exports.default = Feedback;
},{}],"blocks/leader/leader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Leader = /*#__PURE__*/function () {
  function Leader(leader) {
    _classCallCheck(this, Leader);

    this._leader = leader;
  }

  _createClass(Leader, [{
    key: "create",
    value: function create() {
      return "<div class=\"card\">\n   <h3 class=\"card__title\">".concat(this._leader.name, "</h3>\n   <p class=\"card__description\">").concat(this._leader.quality, ", ").concat(this._leader.value, "</p>\n </div>");
    }
  }]);

  return Leader;
}();

exports.default = Leader;
},{}],"blocks/popup/popup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(container) {
    var _this = this;

    _classCallCheck(this, Popup);

    this._container = container;
    this._name = container.querySelector('.popup__title');
    this._popupClose = container.querySelector('.popup__close');

    this._popupClose.addEventListener('click', function () {
      return _this.close();
    });

    console.log(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open(colleague) {
      this._container.classList.add('popup_opened');

      this._name.innerHTML = colleague.name;
    }
  }, {
    key: "close",
    value: function close() {
      this._container.classList.remove('popup_opened');
    }
  }]);

  return Popup;
}();

exports.default = Popup;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _profile = _interopRequireDefault(require("./blocks/profile/profile"));

var _colleague = _interopRequireDefault(require("./blocks/colleague/colleague"));

var _feedback = _interopRequireDefault(require("./blocks/feedback/feedback"));

var _leader = _interopRequireDefault(require("./blocks/leader/leader"));

var _popup = _interopRequireDefault(require("./blocks/popup/popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dictionary = {
  profile: {
    image: 'https://i.pinimg.com/originals/46/a2/01/46a2016f137c2ab6d139d0c0e0ccdaa6.jpg',
    name: 'Cat Grey',
    job: 'Cuteness-enhancer',
    qualities: {
      weirdness: 3.1,
      dexterity: 4.7,
      intelligence: 2.5
    }
  },
  colleagues: [{
    name: 'Giraffe Orange',
    job: 'Leaf-eater'
  }, {
    name: 'Bear Polar',
    job: 'Fish-catcher'
  }, {
    name: 'Dog Black',
    job: 'Ball-licker'
  }, {
    name: 'Pickle Green',
    job: 'Dinner appetizer'
  }],
  feedback: [{
    name: 'Pickle Green',
    text: 'Pretty scratchy'
  }, {
    name: 'Dog Black',
    text: 'Sneacky rascal'
  }, {
    name: 'Bear Polar',
    text: 'Stole my fishes'
  }, {
    name: 'Giraffe Orange',
    text: 'Extremely Tiny'
  }],
  leaders: {
    all: [{
      name: 'Bear Polar',
      quality: 'Intelligence',
      value: '4.8'
    }, {
      name: 'Cat Grey',
      quality: 'Dexterity',
      value: '4.7'
    }, {
      name: 'Pickle Green',
      quality: 'Weirdness',
      value: '394'
    }],
    weirdness: [{
      name: 'Pickle Green',
      quality: 'Weirdness',
      value: '394'
    }],
    dexterity: [{
      name: 'Cat Grey',
      quality: 'Dexterity',
      value: '4.7'
    }],
    intelligence: [{
      name: 'Bear Polar',
      quality: 'Intelligence',
      value: '4.8'
    }]
  }
};
var feedback = document.querySelector('.panel_feedback');
var leader = document.querySelector('.panel_leaders');
var colleagues = document.querySelector('.panel_colleagues');
document.querySelector('.page').insertAdjacentHTML('beforeend', new _profile.default(dictionary.profile).create());
colleagues.insertAdjacentHTML('beforeend', dictionary.colleagues.map(function (colleague, index) {
  return new _colleague.default(colleague, index).create();
}).join(''));
feedback.insertAdjacentHTML('beforeend', dictionary.feedback.map(function (message) {
  return new _feedback.default(message).create();
}).join(''));
leader.insertAdjacentHTML('beforeend', dictionary.leaders.all.map(function (leader) {
  return new _leader.default(leader).create();
}).join(''));
var popup = new _popup.default(document.querySelector('.popup'));
colleagues.addEventListener('click', function (e) {
  return popup.open(dictionary.colleagues[e.target.closest('.card').dataset.index]);
});

function fetchFeedback() {
  feedback.querySelectorAll('.card').forEach(function (item) {
    return item.remove();
  });
  feedback.insertAdjacentHTML('beforeend', dictionary.feedback.map(function (message) {
    return new _feedback.default(message).create();
  }).join(''));
}

setInterval(fetchFeedback, 20000);
var selector = document.querySelector('.panel__select');
selector.addEventListener('change', function (e) {
  return fetchLeader(e.target.value);
});

function fetchLeader(quality) {
  leader.querySelectorAll('.card').forEach(function (item) {
    return item.remove();
  });
  leader.insertAdjacentHTML('beforeend', dictionary.leaders[quality].map(function (leader) {
    return new _leader.default(leader).create();
  }).join(''));
}
},{"./blocks/profile/profile":"blocks/profile/profile.js","./blocks/colleague/colleague":"blocks/colleague/colleague.js","./blocks/feedback/feedback":"blocks/feedback/feedback.js","./blocks/leader/leader":"blocks/leader/leader.js","./blocks/popup/popup":"blocks/popup/popup.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57821" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/test%20task.e31bb0bc.js.map