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
})({137:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Elements;
function Elements() {

    this.addElement = function (id, i) {

        console.log(id);
        $('#container' + id).append("<div class='element'>I am an element</div>");
    };

    this.fecthElement = function () {};
}
},{}],136:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Controls;

var _elements = require('./elements/elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Controls() {

  this.initControls = function (id) {

    $('li#addElement').on('click', function () {
      console.log('clicked');
    });
  };
}
},{"./elements/elements":137}],94:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Container;

var _controls = require('../controls');

var _controls2 = _interopRequireDefault(_controls);

var _elements = require('../elements/elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Container() {

    this.addContainer = function (containerID) {
        var html = '\n        <div id="container' + containerID + '" data-sortid="' + containerID + '" class="droppable container">\n            <span class="handle fa fa-arrows"></span>\n            <div class="container-buttons">\n                <ul>\n                    <li id="addElement" data-container-id="' + containerID + '" ><span  class="oi oi-plus"></li>\n                    <li id="addTextBlock" data-container-id="' + containerID + '"><span  class="oi oi-pencil"></span></li>\n                    <li id="binContainer" data-container-id="' + containerID + '"><span class="oi oi-trash"></span></li>\n                </ul>\n            </div>\n         </div>';

        $(".container li#addElement").unbind("click");

        return html;
    };

    this.initControles = function () {

        var containerID;
        var element = new _elements2.default();

        $('.container li#addElement').each(function (el, i) {

            $(this).on('click', function () {
                containerID = $(this).data('container-id');
                element.addElement(containerID);
            });
        });

        $('.container li#addTextBlock').each(function (el, i) {
            $(this).on('click', function () {
                console.log('clicked');
            });
        });

        $('.container li#binContainer').each(function (el, i) {
            $(this).on('click', function () {
                containerID = $(this).data('container-id');
                console.log(containerID);
                removeContainer(containerID);
            });
        });

        $('.container').hover(function () {

            $(this).find('.container-buttons').css('display', 'block');
        }, function () {

            $(this).find('.container-buttons').css('display', 'none');
        });

        function removeContainer(containerID) {
            $('#container' + containerID).remove();
        }
    };
}
},{"../controls":136,"../elements/elements":137}],10:[function(require,module,exports) {
'use strict';

var _container = require('./elements/container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {

    var wh = $(window).height();
    var canvas = $('ul.sortableList');
    var sidebar = $('#sidebar-wrapper');
    var sidebarbutton = $('#sidebar-button');
    var containerID = 0;

    sidebar.height(wh);

    $('#addContainer').on('click', function () {
        var container = new _container2.default();
        var el = container.addContainer(containerID);
        $('.sortableList').append(el);
        container.initControles();
        containerID++;
    });

    $('.container-buttons').each(function (el, i) {});

    sidebarbutton.on('click', function () {

        if (sidebar.hasClass('active')) {
            sidebar.css('left', '-400px');
            sidebar.removeClass('active');
        } else {
            sidebar.css('left', '0px');
            sidebar.addClass('active');
        }
    });

    $(".sortableList").sortable({
        handle: '.handle',
        placeholder: 'ui-state-highlight',
        over: function over() {
            $('.placeholder').hide();
        },
        out: function out() {
            $('.placeholder').hide();
        },
        update: function update(event, ui) {
            var id = ui.item.attr("id");
        },
        start: function start(event, ui) {
            if (event.handleObj.namespace == "sortable") $('.remove-item').show();
            $('ul.sortableList .testing').css("width", "600");
        },
        stop: function stop(event, ui) {
            if (event.handleObj.namespace == "sortable") $('.remove-item').hide();
            $('ul.sortableList .testing').css("width", "");
        }
    });

    $(".draggable").draggable({
        connectToSortable: '.sortableList',
        cursor: 'pointer',
        helper: 'clone',
        start: function start(event, ui) {
            $(this).addClass('testing');
        }
    });

    $("#sidebar-wrapper").droppable({
        accept: 'div',
        drop: function drop(event, ui) {
            ui.helper.remove();
        }

    });
});
},{"./elements/container":94}],218:[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = undefined || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49208' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
        parents.push(+k);
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[218,10], null)
//# sourceMappingURL=/main.a0fe543c.map