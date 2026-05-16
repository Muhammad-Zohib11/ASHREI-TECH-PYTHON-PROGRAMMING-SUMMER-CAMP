(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$3 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$3.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
    return a2;
  })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a)) for (var g = 0; g < a.length; g++) {
    k2 = a[g];
    var f2 = d + Q$1(k2, g);
    h += R$1(k2, b, e, f2, c);
  }
  else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f2 in b) J.call(b, f2) && !L$3.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a: for (; 0 < c; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
      else break a;
    }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
        else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
        else break a;
      }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback) k2(t2);
      else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
    else {
      var b = h(t2);
      null !== b && K2(H2, b.startTime - a);
    }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else k2(r2);
        v2 = h(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
  if (d) return false;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return false === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) if (b = function() {
      throw Error();
    }, Object.defineProperty(b.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a, [], b);
    } else {
      try {
        b.call();
      } catch (l2) {
        d = l2;
      }
      a.call(b.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e[g] !== f2[h]) {
              var k2 = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {
      }
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b = a._valueTracker;
  if (!b) return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c) if ("number" === d) {
    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
  } else a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b.firstChild; ) a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate) for (; b.return; ) b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c) return Xb(e), a;
        if (f2 === d) return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d)) d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;
  else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++) ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++) ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length) return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c) a = b.contentWindow;
    else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a], c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h = d[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
        else if (me(h2)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c) e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I) return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ng(a) {
  var b = a._init;
  return b(a._payload);
}
function Og(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a) return null;
    for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Pg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a) return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
    d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Lg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Mg(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      Mg(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      Mg(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c(
      e2,
      m3
    ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = Lg(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c(a2, d2.sibling);
                d2 = e(d2, f3.children || []);
                d2.return = a2;
                a2 = d2;
                break a;
              } else {
                c(a2, d2);
                break;
              }
              else b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3)) return n2(a2, d2, f3, h2);
      if (Ka(f3)) return t2(a2, d2, f3, h2);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b = Wg.current;
  E(Wg);
  a._currentValue = b;
}
function bh(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return ih(a, d);
}
function ih(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return ih(a, c);
}
function oh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function qh(a, b, c, d) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;
      else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function sh(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b], e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b) {
  G(wh, b);
  G(vh, a);
  G(uh, th);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(uh);
  G(uh, b);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a) {
  xh(wh.current);
  var b = xh(uh.current);
  var c = lb(b, a.type);
  b !== c && (G(vh, a), G(uh, c));
}
function Bh(a) {
  vh.current === a && (E(uh), E(vh));
}
var L$2 = Uf(0);
function Ch(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a, b) {
  if (null === b) return false;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
  return true;
}
function Nh(a, b, c, d, e, f2) {
  Hh = f2;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = false;
  if (b) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N) {
    var a = M.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a;
  else {
    if (null === a) throw Error(p(310));
    N = a;
    a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Wh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        M.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (dh = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function Xh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (dh = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a, b) {
  var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, dh = true);
  d = d.queue;
  $h(ai.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi(9, ci.bind(null, c, d, e, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c, b, e);
  }
  return e;
}
function di(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ci(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  ei(b) && fi(a);
}
function ai(a, b, c) {
  return c(function() {
    ei(b) && fi(a);
  });
}
function ei(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function fi(a) {
  var b = ih(a, 1);
  null !== b && gi(b, a, 1, -1);
}
function hi(a) {
  var b = Th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ii.bind(null, M, a);
  return [b.memoizedState, a];
}
function bi(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b, c, d) {
  var e = Th();
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function li(a, b, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi(b, c, f2, d);
      return;
    }
  }
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, f2, d);
}
function mi(a, b) {
  return ki(8390656, 8, a, b);
}
function $h(a, b) {
  return li(2048, 8, a, b);
}
function ni(a, b) {
  return li(4, 2, a, b);
}
function oi(a, b) {
  return li(4, 4, a, b);
}
function pi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function() {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
    b.current = null;
  };
}
function qi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li(4, 4, pi.bind(null, b, a), c);
}
function ri() {
}
function si(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ti(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function ui(a, b, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
  return b;
}
function vi(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b, c) {
  var d = yi(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, c);
  else if (c = hh(a, b, c, d), null !== c) {
    var e = R();
    gi(c, a, d, e);
    Bi(c, b, d);
  }
}
function ii(a, b, c) {
  var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
      var g = b.lastRenderedState, h = f2(g, c);
      e.hasEagerState = true;
      e.eagerState = h;
      if (He(h, g)) {
        var k2 = b.interleaved;
        null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c = hh(a, b, e, d);
    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
  }
}
function zi(a) {
  var b = a.alternate;
  return a === M || null !== b && b === M;
}
function Ai(a, b) {
  Jh = Ih = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Bi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
  Th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ki(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ki(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Th();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Th();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = xi.bind(null, M, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = Th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = M, e = Th();
  if (I) {
    if (void 0 === c) throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  mi(ai.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  bi(9, ci.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = Th(), b = Q.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Kh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b = Uh();
    return ui(b, N.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b = Uh();
  return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b = Uh().memoizedState;
  return [a, b];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Di(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = R(), d = yi(a), e = mh(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = nh(a, e, d);
  null !== b && (gi(b, a, d, c), oh(b, a, d));
} };
function Fi(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function Gi(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Hi(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Ki(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Li(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Oi || (Oi = true, Pi = d);
    Li(a, b);
  };
  return c;
}
function Qi(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Li(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Li(a, b);
    "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Si(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
}
function Ui(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b, c, d) {
  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
}
function Yi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  ch(b, e);
  d = Nh(a, b, c, d, f2, e);
  c = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Xi(a, b, d, e);
  return b.child;
}
function $i(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
    a = Rg(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
  }
  b.flags |= 1;
  a = Pg(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function bj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b.lanes = a.lanes, Zi(a, b, e);
  }
  return cj(a, b, c, d, e);
}
function dj(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
  else {
    if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
    b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c;
    G(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
  Xi(a, b, e, c);
  return b.child;
}
function gj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function cj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  ch(b, e);
  c = Nh(a, b, c, d, f2, e);
  d = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Xi(a, b, c, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else f2 = false;
  ch(b, e);
  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
    jh = false;
    var r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    lh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
    jh = false;
    r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return jj(a, b, c, d, f2, e);
}
function jj(a, b, c, d, e, f2) {
  gj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
  d = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function kj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  yh(a, b.containerInfo);
}
function lj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Xi(a, b, c, d);
  return b.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b, c) {
  var d = b.pendingProps, e = L$2.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h) f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G(L$2, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = mj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function qj(a, b) {
  b = pj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function sj(a, b, c, d) {
  null !== d && Jg(d);
  Ug(b, a.child, null, c);
  a = qj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function rj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = pj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Tg(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f2;
  }
  if (0 === (b.mode & 1)) return sj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Ki(f2, d, void 0);
    return sj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki(Error(p(421)));
    return sj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = qj(b, d.children);
  b.flags |= 4096;
  return b;
}
function vj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  bh(a.return, b, c);
}
function wj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function xj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Xi(a, b, d.children, c);
  d = L$2.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
      else if (19 === a.tag) vj(a, c, b);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(L$2, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;
  else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      wj(b, false, e, c, f2);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b, true, c, null, f2);
      break;
    case "together":
      wj(b, false, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  rh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = Pg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function yj(a, b, c) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(L$2, L$2.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
        G(L$2, L$2.current & 1);
        a = Zi(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(L$2, L$2.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(L$2, L$2.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a, b, c);
  }
  return Zi(a, b, c);
}
var zj, Aj, Bj, Cj;
zj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h = e[l2];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
      } else c || (f2 || (f2 = []), f2.push(
        l2,
        c
      )), c = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2) b.flags |= 4;
  }
};
Cj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Dj(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Ej(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      zh();
      E(Wf);
      E(H);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e = xh(wh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h,
              a
            ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          zj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
            }
          }
          f2 && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(L$2);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L$2.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(L$2);
      f2 = b.memoizedState;
      if (null === f2) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
          g = Ch(a);
          if (null !== g) {
            b.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b.updateQueue = d, b.flags |= 4);
            b.subtreeFlags = 0;
            d = c;
            for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
            G(L$2, L$2.current & 1 | 2);
            return b.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
      }
      else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L$2.current, G(L$2, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E(L$2);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(L$2), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  }
  else c.current = null;
}
function Mj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Nj = false;
function Oj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f2.nodeType;
        } catch (F2) {
          c = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c && ++l2 === e && (h = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c = null;
    }
    c = c || { start: 0, end: 0 };
  } else c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
  else for (; null !== V; ) {
    b = V;
    try {
      var n2 = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W(b, b.return, F2);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Rj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Sj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Sj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
}
var X = null, Xj = false;
function Yj(a, b, c) {
  for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
}
function Zj(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {
  }
  switch (c.tag) {
    case 5:
      U || Lj(c, b);
    case 6:
      var d = X, e = Xj;
      X = null;
      Yj(a, b, c);
      X = d;
      Xj = e;
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Xj;
      X = c.stateNode.containerInfo;
      Xj = true;
      Yj(a, b, c);
      X = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b, c);
      break;
    case 1:
      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Yj(a, b, c);
      break;
    case 21:
      Yj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
      break;
    default:
      Yj(a, b, c);
  }
}
function ak(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b.forEach(function(b2) {
      var d = bk.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function ck(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f2 = a, g = b, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      Zj(f2, g, e);
      X = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W(e, b, l2);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
}
function dk(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t2) {
        W(a, a.return, t2);
      }
      break;
    case 4:
      ck(b, a);
      ek(a);
      break;
    case 13:
      ck(b, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
      d & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
      ek(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c = r2.return;
                  try {
                    b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W(d, c, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function hk(a, b, c) {
  V = a;
  ik(a);
}
function ik(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l2 = U;
        Jj = g;
        if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e;
        Jj = h;
        U = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
            else {
              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b.updateQueue;
            null !== f2 && sh(b, f2, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              sh(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k2 = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c.focus();
                  break;
                case "img":
                  k2.src && (c.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l2 = b.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function gk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function jk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Qj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K & 6) && jg();
    }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Gk(a, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Jk();
    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K = e;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
    if (6 === b) Ck(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
  a = Ik(a, b);
  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f2(), e)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
    else {
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Ck(a, b) {
  b &= ~rk;
  b &= ~qk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Dk(a, B()), null;
  var c = Ik(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Pk(a, tk, uk);
  Dk(a, B());
  return null;
}
function Qk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c = ok.transition, d = C;
  try {
    if (ok.transition = null, C = 1, a) return a();
  } finally {
    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c; ) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L$2);
        break;
      case 19:
        E(L$2);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q = a;
  Y = a = Pg(a.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next, f2 = c.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b) {
  do {
    var c = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g, h, f2, b);
            y2.mode & 1 && Si(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f2, l2, b);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Ui(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g, h, f2, b);
            Jg(Ji(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Ni(f2, k2, b);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Qi(f2, h, b);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a, b) {
  var c = K;
  K |= 2;
  var d = Jk();
  if (Q !== a || Z !== b) uk = null, Kk(a, b);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K = c;
  mk.current = d;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b ? Sk(a) : Y = b;
  nk.current = null;
}
function Sk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Ej(c, b, fj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Ij(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a, b, c) {
  var d = C, e = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a, b, c, d);
  } finally {
    ok.transition = e, C = d;
  }
  return null;
}
function Wk(a, b, c, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === Q && (Y = Q = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c);
    dc();
    K = h;
    C = g;
    ok.transition = f2;
  } else a.current = c;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c.stateNode);
  Dk(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b = ok.transition, c = C;
    try {
      ok.transition = null;
      C = 16 > a ? 16 : a;
      if (null === wk) var d = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V = F2;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C = c, ok.transition = b;
    }
  }
  return false;
}
function Xk(a, b, c) {
  b = Ji(c, b);
  b = Ni(a, b, 1);
  a = nh(a, b, 1);
  b = R();
  null !== a && (Ac(a, 1, b), Dk(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Xk(a, a, c);
  else for (; null !== b; ) {
    if (3 === b.tag) {
      Xk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
        a = Ji(c, a);
        a = Qi(b, a, 1);
        b = nh(b, a, 1);
        a = R();
        null !== b && (Ac(b, 1, a), Dk(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = R();
  a.pingedLanes |= a.suspendedLanes & c;
  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b);
}
function Yk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R();
  a = ih(a, b);
  null !== a && (Ac(a, b, c), Dk(a, c));
}
function uj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Yk(a, c);
}
function bk(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Yk(a, c);
}
var Vk;
Vk = function(a, b, c) {
  if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      ij(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      ch(b, c);
      e = Nh(null, b, d, a, e, c);
      var f2 = Sh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        ij(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Zk(d);
        a = Ci(d, a);
        switch (e) {
          case 0:
            b = cj(null, b, d, a, c);
            break a;
          case 1:
            b = hj(null, b, d, a, c);
            break a;
          case 11:
            b = Yi(null, b, d, a, c);
            break a;
          case 14:
            b = $i(null, b, d, Ci(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
    case 3:
      a: {
        kj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        lh(a, b);
        qh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
          e = Ji(Error(p(423)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else if (d !== e) {
          e = Ji(Error(p(424)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = Zi(a, b, c);
            break a;
          }
          Xi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return oj(a, b, c);
    case 4:
      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
    case 7:
      return Xi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He(f2.value, g)) {
          if (f2.children === e.children && !Wf.current) {
            b = Zi(a, b, c);
            break a;
          }
        } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c & -c);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c);
                bh(
                  f2.return,
                  c,
                  b
                );
                h.lanes |= c;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
    case 15:
      return bj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
    case 19:
      return xj(a, b, c);
    case 22:
      return dj(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Fk(a, b) {
  return ac(a, b);
}
function $k(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new $k(a, b, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);
  else if ("string" === typeof a) g = 5;
  else a: switch (a) {
    case ya:
      return Tg(c.children, e, f2, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c, e, f2, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Tg(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function pj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function Sg(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function al(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b, c, d, e, f2, g, h, k2) {
  a = new al(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function el(a, b, c, d, e, f2, g, h, k2) {
  a = bl(c, d, true, a, e, f2, g, h, k2);
  a.context = dl(null);
  c = a.current;
  d = R();
  e = yi(c);
  f2 = mh(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  nh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b, c, d) {
  var e = b.current, f2 = R(), g = yi(e);
  c = dl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = mh(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = nh(e, b, g);
  null !== a && (gi(a, e, g, f2), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function il(a, b) {
  hl(a, b);
  (a = a.alternate) && hl(a, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = gl(g);
        f2.call(a2);
      };
    }
    var g = el(b, d, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = gl(k2);
      h.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b, k2, c, d);
  });
  return k2;
}
function rl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = gl(g);
        h.call(a2);
      };
    }
    fl(b, g, a, e);
  } else g = ql(c, b, a, e, d);
  return gl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b2 = ih(a, 1);
        if (null !== b2) {
          var c2 = R();
          gi(b2, a, 1, c2);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = ih(a, 134217728);
    if (null !== b) {
      var c = R();
      gi(b, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = yi(a), c = ih(a, b);
    if (null !== c) {
      var d = R();
      gi(c, a, b, d);
    }
    il(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; ) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!nl(a)) throw Error(p(299));
  var c = false, d = "", e = kl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = bl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
    c,
    e
  );
  return new ml(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b, c, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const STORAGE_KEY = "ashri-progress-v1";
const defaultState = {
  // ── Onboarding ──
  onboardingDone: false,
  studentName: "",
  avatar: "?",
  // 2-char initials OR chosen emoji
  avatarEmoji: "🚀",
  // chosen avatar emoji
  batch: "",
  // morning | evening | weekend | ninjas
  experienceLevel: "beginner",
  // beginner | some | experienced
  gamerTag: "",
  // ── Progression ──
  xp: 0,
  streak: 0,
  lastCompletedDate: null,
  // ISO date string 'YYYY-MM-DD' of last challenge complete
  completedDays: [],
  unlockedDays: [1],
  // Day 1 always unlocked
  earnedBadges: [],
  completedChallenges: []
};
function progressReducer(state, action) {
  switch (action.type) {
    case "COMPLETE_ONBOARDING": {
      const { studentName, avatarEmoji, batch, experienceLevel, gamerTag } = action.payload;
      const initials = studentName.trim().slice(0, 2).toUpperCase() || "??";
      return {
        ...state,
        onboardingDone: true,
        studentName: studentName.trim(),
        avatar: initials,
        avatarEmoji,
        batch,
        experienceLevel,
        gamerTag: gamerTag.trim()
      };
    }
    case "AWARD_CHALLENGE_XP": {
      return { ...state, xp: state.xp + (action.payload.xp || 0) };
    }
    case "COMPLETE_CHALLENGE": {
      const { dayId, xpReward, badgeName } = action.payload;
      if (state.completedChallenges.includes(dayId)) return state;
      const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      let newStreak = state.streak;
      if (!state.lastCompletedDate) {
        newStreak = 1;
      } else if (state.lastCompletedDate === todayStr) {
        newStreak = state.streak;
      } else {
        const yesterday = /* @__PURE__ */ new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];
        newStreak = state.lastCompletedDate === yesterdayStr ? state.streak + 1 : 1;
      }
      const nextDayId = dayId + 1;
      const newUnlocked = state.unlockedDays.includes(nextDayId) ? state.unlockedDays : [...state.unlockedDays, nextDayId];
      const newCompleted = state.completedDays.includes(dayId) ? state.completedDays : [...state.completedDays, dayId];
      const newBadges = badgeName && !state.earnedBadges.includes(badgeName) ? [...state.earnedBadges, badgeName] : state.earnedBadges;
      return {
        ...state,
        xp: state.xp + xpReward,
        streak: newStreak,
        lastCompletedDate: todayStr,
        completedDays: newCompleted,
        unlockedDays: newUnlocked,
        earnedBadges: newBadges,
        completedChallenges: [...state.completedChallenges, dayId]
      };
    }
    case "SET_STUDENT_NAME":
      return {
        ...state,
        studentName: action.payload,
        avatar: action.payload.slice(0, 2).toUpperCase()
      };
    case "ADMIN_UNLOCK_ALL":
      return {
        ...defaultState,
        onboardingDone: true,
        studentName: "Admin (Test Mode)",
        avatar: "AD",
        avatarEmoji: "🛡️",
        batch: "ninjas",
        experienceLevel: "experienced",
        gamerTag: "admin123",
        xp: 9999,
        unlockedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        // all unlocked, last one pending showcase
        earnedBadges: [],
        completedChallenges: []
      };
    case "RESET_ACCOUNT":
      return { ...defaultState };
    case "RESET":
      return { ...defaultState };
    default:
      return state;
  }
}
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState;
    return { ...defaultState, ...JSON.parse(saved) };
  } catch {
    return defaultState;
  }
}
const ProgressContext = reactExports.createContext(null);
function ProgressProvider({ children }) {
  const [state, dispatch] = reactExports.useReducer(progressReducer, void 0, loadState);
  reactExports.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressContext.Provider, { value: { state, dispatch }, children });
}
function useProgress() {
  const ctx = reactExports.useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}
const GAMES_SHOWCASE = [
  { title: "Window Builder", icon: "🪟", desc: "Open a window, draw shapes, and move things with the keyboard", color: "#06b6d4", day: 9 },
  { title: "Flappy Bird", icon: "🐦", desc: "Navigate through pipes using precise, rhythmic jumps", color: "#ff6b35", day: 10 },
  { title: "Shooter Core", icon: "🔫", desc: "WASD ship + bullets + enemy spawner — the core systems", color: "#8b5cf6", day: 11 },
  { title: "Space Shooter", icon: "🚀", desc: "Complete game: collision, HUD, start screen, game over + restart", color: "#f59e0b", day: 12 },
  { title: "Coin Collector", icon: "💰", desc: "Grab coins before the timer runs out", color: "#f59e0b", day: 2 },
  { title: "Rock Paper Scissors", icon: "✊", desc: "Battle the AI with strategy, logic and a bit of luck", color: "#10b981", day: 4 },
  { title: "Meteor Dodge", icon: "☄️", desc: "Dodge incoming meteors as they speed up over time", color: "#8b5cf6", day: 8 }
];
const STARS = Array.from({ length: 90 }, (_, i) => ({
  x: i * 137.508 % 100,
  y: i * 79.33 % 100,
  size: i % 3 + 1,
  delay: i * 0.37 % 5,
  dur: 2 + i % 4,
  opacity: 0.15 + i % 6 * 0.08
}));
const SPACE_SHOOTER_FEATURES = [
  { d: 1, feat: "Output", icon: "🖨️" },
  { d: 2, feat: "Variables", icon: "💎" },
  { d: 3, feat: "Math", icon: "📐" },
  { d: 4, feat: "Logic", icon: "🧠" },
  { d: 5, feat: "Loops", icon: "🔄" },
  { d: 6, feat: "Functions", icon: "🧙" },
  { d: 7, feat: "Lists", icon: "📋" },
  { d: 8, feat: "Random", icon: "🎲" },
  { d: 9, feat: "Window", icon: "🪟" },
  { d: 10, feat: "Flappy", icon: "🐦" },
  { d: 11, feat: "Shooter", icon: "🔫" },
  { d: 12, feat: "LEGEND!", icon: "🏆" }
];
function StarField() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }, children: [
    STARS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      borderRadius: "50%",
      background: "#fff",
      width: s.size + "px",
      height: s.size + "px",
      left: s.x + "%",
      top: s.y + "%",
      opacity: s.opacity,
      animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`
    } }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", top: "5%", right: "0%", pointerEvents: "none" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)", bottom: "15%", left: "5%", pointerEvents: "none" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)", top: "50%", left: "40%", pointerEvents: "none" } })
  ] });
}
const RANKS = [
  { name: "Code Recruit", minXP: 0, icon: "🔰", color: "#94a3b8" },
  { name: "Python Explorer", minXP: 300, icon: "🧭", color: "#10b981" },
  { name: "Logic Warrior", minXP: 650, icon: "⚔️", color: "#00f5ff" },
  { name: "Loop Master", minXP: 1100, icon: "🔄", color: "#8b5cf6" },
  { name: "Game Architect", minXP: 1600, icon: "🏗️", color: "#ff6b35" },
  { name: "Python Ninja", minXP: 2200, icon: "🥷", color: "#f59e0b" }
];
function getRankInfo(xp) {
  let current = RANKS[0];
  for (const r2 of RANKS) {
    if (xp >= r2.minXP) current = r2;
  }
  const nextIdx = RANKS.indexOf(current) + 1;
  const next = RANKS[nextIdx] || null;
  const min = current.minXP;
  const max = next ? next.minXP : current.minXP + 500;
  const pct = Math.min(100, Math.round((xp - min) / (max - min) * 100));
  return { current, next, pct };
}
function XPBar({ showDetails = false }) {
  const { state } = useProgress();
  const { current, next, pct } = getRankInfo(state.xp);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    showDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: current.color, fontWeight: 700, fontSize: 13 }, children: [
        current.icon,
        " ",
        current.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: [
        state.xp,
        " / ",
        next ? next.minXP : "MAX",
        " XP"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden", position: "relative" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      height: "100%",
      borderRadius: 99,
      width: pct + "%",
      background: `linear-gradient(90deg, ${current.color}, ${(next == null ? void 0 : next.color) || "#fff"})`,
      boxShadow: `0 0 14px ${current.color}90`,
      transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)"
    } }) }),
    showDetails && next && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right", marginTop: 4, color: "rgba(255,255,255,0.35)", fontSize: 11 }, children: [
      next.minXP - state.xp,
      " XP to ",
      next.icon,
      " ",
      next.name
    ] })
  ] });
}
function Navbar({ view, setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  const { current } = getRankInfo(state.xp);
  const navItems = [
    { id: "landing", label: "Home", icon: "🏠" },
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "lessons", label: "Lessons", icon: "📚" },
    { id: "badges", label: "Badges", icon: "🏅" }
  ];
  const goTo = (id2) => {
    setView(id2);
    setSelectedDay(null);
  };
  const switchAccount = () => {
    if (window.confirm("Switch account? This will return to the login screen.")) {
      dispatch({ type: "RESET_ACCOUNT" });
    }
  };
  const isAdmin = state.gamerTag === "admin123";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { style: {
    position: "sticky",
    top: 0,
    zIndex: 200,
    background: "rgba(8,12,24,0.92)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,107,0,0.15)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }, onClick: () => goTo("landing"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/ashrei-logo.png", alt: "ASHRI Tech", style: { height: 32, objectFit: "contain" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { borderLeft: "1px solid rgba(255,107,0,0.3)", paddingLeft: 14 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "var(--font-head)", fontSize: 11, letterSpacing: 3, color: "var(--orange)", lineHeight: 1 }, children: "AI & PYTHON PROGRAMMING" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 2 }, children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => goTo(item.id),
          style: {
            padding: "7px 16px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            background: view === item.id ? "rgba(255,107,0,0.12)" : "transparent",
            color: view === item.id ? "var(--orange)" : "var(--muted)",
            borderBottom: view === item.id ? "2px solid var(--orange)" : "2px solid transparent",
            transition: "all 0.2s"
          },
          onMouseEnter: (e) => {
            if (view !== item.id) {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }
          },
          onMouseLeave: (e) => {
            if (view !== item.id) {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.background = "transparent";
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hide-mobile", children: [
              item.icon,
              " "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-label", children: item.label })
          ]
        },
        item.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
        isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          background: "rgba(255,107,0,0.12)",
          border: "1px solid rgba(255,107,0,0.35)",
          borderRadius: 6,
          padding: "3px 10px",
          color: "var(--orange)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1
        }, children: "🛡️ ADMIN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          background: "rgba(255,107,0,0.1)",
          border: "1px solid rgba(255,107,0,0.25)",
          borderRadius: 6,
          padding: "5px 14px",
          color: "var(--orange)",
          fontSize: 13,
          fontWeight: 700
        }, children: [
          "⚡ ",
          state.xp,
          " XP"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => goTo("dashboard"),
            title: state.studentName,
            style: {
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${current.color}33, rgba(255,255,255,0.06))`,
              border: `2px solid ${current.color}60`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              cursor: "pointer",
              boxShadow: `0 0 14px ${current.color}40`,
              transition: "all 0.2s"
            },
            children: state.avatarEmoji || state.avatar
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: switchAccount,
            title: "Switch Account",
            style: {
              width: 34,
              height: 34,
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              color: "rgba(255,255,255,0.35)",
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.borderColor = "rgba(239,68,68,0.5)";
              e.currentTarget.style.color = "#ef4444";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "rgba(255,255,255,0.35)";
            },
            children: "⏏"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 2, background: "rgba(255,107,0,0.06)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(XPBar, {}) })
  ] });
}
function MainLayout({ children, view, setView, setSelectedDay }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minHeight: "100vh", background: "#04080f" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { view, setView, setSelectedDay }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children })
  ] });
}
const AVATARS = ["🚀", "🐍", "🎮", "⚡", "🧠", "🔥", "🤖", "💎", "🌟", "🥷", "🎯", "👾"];
const BATCHES = [
  { id: "morning", label: "Morning Batch", icon: "🌅" },
  { id: "evening", label: "Evening Batch", icon: "🌆" },
  { id: "weekend", label: "Weekend Warriors", icon: "⚔️" },
  { id: "ninjas", label: "Python Ninjas", icon: "🥷" }
];
const LEVELS = [
  { id: "beginner", label: "Total Beginner", desc: "Never coded before", icon: "🌱" },
  { id: "some", label: "Some Experience", desc: "Tried a little coding", icon: "🌿" },
  { id: "experienced", label: "I Can Code!", desc: "Comfortable with basics", icon: "🌳" }
];
function Onboarding() {
  var _a, _b;
  const { dispatch } = useProgress();
  const [step, setStep] = reactExports.useState(0);
  const [name, setName] = reactExports.useState("");
  const [gamerTag, setGamerTag] = reactExports.useState("");
  const [batch, setBatch] = reactExports.useState("morning");
  const [experienceLevel, setExperienceLevel] = reactExports.useState("beginner");
  const [avatarEmoji, setAvatarEmoji] = reactExports.useState("🚀");
  const [nameError, setNameError] = reactExports.useState("");
  const TOTAL_STEPS = 3;
  const handleNext = () => {
    if (step === 0) {
      if (!name.trim()) {
        setNameError("Please enter your name!");
        return;
      }
      if (name.trim().toLowerCase() === "admin123") {
        dispatch({ type: "ADMIN_UNLOCK_ALL" });
        return;
      }
      setNameError("");
      setStep(1);
      return;
    }
    if (step === 1) {
      setStep(2);
      return;
    }
    dispatch({
      type: "COMPLETE_ONBOARDING",
      payload: { studentName: name.trim(), avatarEmoji, batch, experienceLevel, gamerTag: gamerTag.trim() }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    minHeight: "100vh",
    background: "var(--bg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily: "var(--font-body)",
    position: "relative",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)", top: "-15%", right: "-10%", pointerEvents: "none" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,214,143,0.06) 0%, transparent 70%)", bottom: "-15%", left: "-10%", pointerEvents: "none" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      width: "100%",
      maxWidth: 480,
      background: "var(--card)",
      border: "1px solid rgba(255,107,0,0.2)",
      borderRadius: 20,
      padding: "44px 40px",
      backdropFilter: "blur(24px)",
      boxShadow: "0 0 60px rgba(255,107,0,0.08)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/ashrei-logo.png", alt: "ASHRI Tech", style: { height: 40, objectFit: "contain", marginBottom: 12 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "var(--font-head)", color: "var(--orange)", fontSize: 13, letterSpacing: 3, marginTop: 4 }, children: "AI & PYTHON PROGRAMMING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--muted)", fontSize: 11, letterSpacing: 2, marginTop: 4 }, children: "CREATE YOUR PROFILE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }, children: Array.from({ length: TOTAL_STEPS }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: i === step ? 24 : 8,
        height: 7,
        borderRadius: 99,
        background: i <= step ? "var(--orange)" : "rgba(255,255,255,0.1)",
        transition: "all 0.3s",
        boxShadow: i === step ? "0 0 10px rgba(255,107,0,0.5)" : "none"
      } }, i)) }),
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-enter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--orange)", fontFamily: "var(--font-head)", fontSize: 12, letterSpacing: 3, marginBottom: 8 }, children: "STEP 1 OF 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", color: "var(--white)", fontSize: 22, letterSpacing: 1, marginBottom: 6 }, children: "What's your name, Recruit?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 24, lineHeight: 1.6 }, children: "This appears on your badge and leaderboard." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            autoFocus: true,
            value: name,
            onChange: (e) => {
              setName(e.target.value);
              setNameError("");
            },
            onKeyDown: (e) => e.key === "Enter" && handleNext(),
            placeholder: "Your full name",
            style: {
              width: "100%",
              padding: "13px 18px",
              borderRadius: 8,
              fontSize: 15,
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${nameError ? "#ef4444" : "rgba(255,107,0,0.3)"}`,
              color: "var(--white)",
              fontFamily: "inherit",
              outline: "none",
              marginBottom: 4
            }
          }
        ),
        nameError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#ef4444", fontSize: 12, marginBottom: 12 }, children: [
          "⚠ ",
          nameError
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 16, marginBottom: 8 }, children: "Gamer tag (optional — shown in class):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: gamerTag,
            onChange: (e) => setGamerTag(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleNext(),
            placeholder: "e.g. ProCoder99",
            style: { width: "100%", padding: "10px 18px", borderRadius: 10, fontSize: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontFamily: "inherit", outline: "none" }
          }
        )
      ] }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-enter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--teal)", fontFamily: "var(--font-head)", fontSize: 12, letterSpacing: 3, marginBottom: 8 }, children: "STEP 2 OF 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", color: "var(--white)", fontSize: 22, letterSpacing: 1, marginBottom: 6 }, children: "Tell us about yourself" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 22 }, children: "Helps your instructor personalise your experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 800, letterSpacing: 1.5, marginBottom: 10 }, children: "YOUR BATCH" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 24 }, children: BATCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setBatch(b.id), style: {
          padding: "11px 14px",
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          background: batch === b.id ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.04)",
          outline: batch === b.id ? "2px solid #8b5cf6" : "2px solid transparent",
          color: batch === b.id ? "#fff" : "rgba(255,255,255,0.55)",
          fontFamily: "inherit",
          fontSize: 13,
          fontWeight: batch === b.id ? 700 : 400,
          transition: "all 0.18s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: 6 }, children: b.icon }),
          b.label
        ] }, b.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 800, letterSpacing: 1.5, marginBottom: 10 }, children: "YOUR EXPERIENCE LEVEL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: LEVELS.map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setExperienceLevel(l2.id), style: {
          padding: "12px 16px",
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: experienceLevel === l2.id ? "rgba(0,245,255,0.12)" : "rgba(255,255,255,0.04)",
          outline: experienceLevel === l2.id ? "2px solid #00f5ff" : "2px solid transparent",
          color: experienceLevel === l2.id ? "#fff" : "rgba(255,255,255,0.55)",
          fontFamily: "inherit",
          transition: "all 0.18s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 22 }, children: l2.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 13, fontWeight: experienceLevel === l2.id ? 700 : 400 }, children: l2.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 1 }, children: l2.desc })
          ] })
        ] }, l2.id)) })
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-enter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "var(--orange)", fontFamily: "var(--font-head)", fontSize: 12, letterSpacing: 3, marginBottom: 8 }, children: "STEP 3 OF 3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", color: "var(--white)", fontSize: 22, letterSpacing: 1, marginBottom: 6 }, children: "Pick your player badge" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 22 }, children: "This will appear on your profile and badge card." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, marginBottom: 20 }, children: AVATARS.map((emoji) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAvatarEmoji(emoji), style: {
          fontSize: 28,
          padding: "12px 0",
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
          background: avatarEmoji === emoji ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.04)",
          outline: avatarEmoji === emoji ? "2px solid #10b981" : "2px solid transparent",
          transform: avatarEmoji === emoji ? "scale(1.15)" : "scale(1)",
          transition: "all 0.18s",
          boxShadow: avatarEmoji === emoji ? "0 0 18px rgba(16,185,129,0.4)" : "none"
        }, children: emoji }, emoji)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 14, padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,245,255,0.12)", display: "flex", alignItems: "center", gap: 14 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 40 }, children: avatarEmoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 16 }, children: name }),
            gamerTag && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#00f5ff", fontSize: 12, fontFamily: "var(--font-code)" }, children: [
              "@",
              gamerTag
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 11, marginTop: 2 }, children: [
              (_a = BATCHES.find((b) => b.id === batch)) == null ? void 0 : _a.icon,
              " ",
              (_b = BATCHES.find((b) => b.id === batch)) == null ? void 0 : _b.label,
              " · 🌱 Code Recruit · 0 XP"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 12, marginTop: 28 }, children: [
        step > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep((s) => s - 1), style: { padding: "13px 20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "transparent", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontSize: 14, fontFamily: "inherit", flex: 1 }, children: "← Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleNext,
            style: {
              padding: "14px 28px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: step === 2 ? "linear-gradient(135deg, var(--teal), #00a36e)" : "linear-gradient(135deg, var(--orange), #cc5500)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              fontFamily: "var(--font-body)",
              flex: 2,
              letterSpacing: 0.5,
              boxShadow: step === 2 ? "0 0 28px rgba(0,214,143,0.35)" : "0 0 28px rgba(255,107,0,0.35)"
            },
            children: step === 2 ? "🚀 Launch Academy!" : "Continue →"
          }
        )
      ] })
    ] })
  ] });
}
function SectionLabel({ color = "#00f5ff", children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    color,
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 10
  }, children });
}
const DAYS_DATA_PART1 = [
  {
    id: 1,
    color: "#00f5ff",
    title: "How Computers Understand Humans",
    subtitle: "Input & Output",
    concepts: ["print()", "input()", "Variables", "Comments"],
    project: "Robot Maze",
    xp: 150,
    badge: "First Program",
    badgeIcon: "🚀",
    missionTag: "FIRST CONTACT",
    story: "Welcome, Code Recruit! Today you take your first step into Python — the language that powers games, robots, and AI. You will make the computer LISTEN to you. Every legend starts with a single line of code. Are you ready to speak the language of machines?",
    spaceFeature: "Game Window — your Space Shooter gets its screen today!",
    snippets: [
      {
        title: "Say Hello to the World",
        code: `print("Hello, Game World!")
print("I am learning Python!")
print("Let the adventure begin!")`,
        desc: "The print() function displays text on screen. Every game has a screen — this is yours.",
        tryThis: "Change the message to include YOUR name and add your favourite emoji at the end!",
        output: `Hello, Game World!
I am learning Python!
Let the adventure begin!`
      },
      {
        title: "Listen to the Player",
        code: `name = input("Enter your hero name: ")
print("Welcome,", name, "!")
print("Your quest begins NOW.")`,
        desc: "input() collects what the player types. Now your program talks back!",
        tryThis: "Ask the player for their favourite game using input(), then print it back with a comment.",
        output: `Enter your hero name: Alex
Welcome, Alex !
Your quest begins NOW.`
      },
      {
        title: "Add Comments Like a Pro",
        code: `# This is a comment - Python ignores it!
# Use comments to explain your thinking

print("Score: 0")    # Starting score
print("Lives: 3")    # Starting lives
print("Level: 1")    # Starting level`,
        desc: "Comments are notes for yourself and teammates. Professional game devs write them constantly.",
        tryThis: "Add a comment above each print() explaining what that line does in your game.",
        output: `Score: 0
Lives: 3
Level: 1`
      }
    ],
    challenge: "Build a 'Player Registration' screen: ask the player for their name and favourite colour, then print a personalised welcome message with both!",
    gamePreviewIcon: "🤖",
    gamePreviewLines: ["▶ Robot Maze.py — Running...", ">>> Enter your name: Alex", ">>> Welcome to the Maze, Alex!"]
  },
  {
    id: 2,
    color: "#8b5cf6",
    title: "Variables & The Power of Names",
    subtitle: "Data Storage",
    concepts: ["Variables", "Strings", "Integers", "f-strings"],
    project: "Coin Collector",
    xp: 200,
    badge: "Variable Explorer",
    badgeIcon: "💎",
    missionTag: "DATA WIZARD",
    story: "Every great game stores data. Player health, coins, speed, score — it is ALL variables! Without variables, games forget everything the instant it happens. You are about to become a data wizard. Name your data wisely and it will serve you forever.",
    spaceFeature: "Player Ship — your Space Shooter now has a controllable player variable!",
    snippets: [
      {
        title: "Player Stats Board",
        code: `player_name = "Alex"
health = 100
coins = 0
speed = 5

print(f"Player: {player_name}")
print(f"Health: {health} | Coins: {coins} | Speed: {speed}")`,
        desc: "Variables store your game's data. Name them clearly so you always know what they hold!",
        tryThis: "Add a 'level' variable set to 1 and print it in the stats line.",
        output: `Player: Alex
Health: 100 | Coins: 0 | Speed: 5`
      },
      {
        title: "Collect Coins!",
        code: `coins = 0
print(f"Start: {coins} coins")

coins = coins + 10
print(f"Coin collected! {coins} coins")

coins += 5   # Shortcut for coins = coins + 5
print(f"Another one! {coins} coins total!")`,
        desc: "+= is the power shortcut. Every game uses it constantly to update scores and counters.",
        tryThis: "Make the player collect 3 more coins worth 25 each using +=, then print the total.",
        output: `Start: 0 coins
Coin collected! 10 coins
Another one! 15 coins total!`
      },
      {
        title: "f-Strings: Your Display HUD",
        code: `player = "Alex"
health = 85
score = 1250
level = 3

# f-strings let you embed variables directly in text
hud = f"[{player}] HP:{health} | Score:{score} | Lv{level}"
print(hud)
print(f"You are on Level {level}. Keep going!")`,
        desc: "f-strings (formatted strings) are how game HUDs display live data. Put variables in {} curly braces.",
        tryThis: "Add a 'wave' variable and include it in the HUD display.",
        output: `[Alex] HP:85 | Score:1250 | Lv3
You are on Level 3. Keep going!`
      }
    ],
    challenge: "Create a full player stats card: name, health (100), coins (0), speed (5), level (1). Use += to collect 3 coins worth 20 each. Print the final stats using f-strings.",
    gamePreviewIcon: "💰",
    gamePreviewLines: ["▶ Coin Collector.py — Running...", ">>> [Alex] HP:100 | Score:0 | Lv1", ">>> Coin collected! Score: 10"]
  },
  {
    id: 3,
    color: "#ff6b35",
    title: "Operations & Typecasting",
    subtitle: "Math Magic",
    concepts: ["Arithmetic operators", "int() / float()", "Math module", "Order of operations"],
    project: "Health Battle Simulator",
    xp: 220,
    badge: "Math Wizard",
    badgeIcon: "⚡",
    missionTag: "MATH MAGIC",
    story: "Games calculate EVERYTHING. Damage dealt, distance traveled, score multipliers, enemy health. Today you teach Python to crunch numbers like a real game engine. Math is the secret power behind every game ever made. Embrace it.",
    spaceFeature: "Math Engine — Space Shooter calculates bullet speed and enemy damage!",
    snippets: [
      {
        title: "Battle Damage Calculator",
        code: `attack = 35
defense = 12
critical_hit = True

damage = attack - defense

if critical_hit:
    damage = damage * 2
    print("CRITICAL HIT!")

print(f"Damage dealt: {damage}")
print(f"Enemy health: {100 - damage}")`,
        desc: "Math operations power your game's entire combat system. +, -, *, / are your weapons.",
        tryThis: "Add a 'bonus_damage' variable of 5 and add it to the final damage total.",
        output: `CRITICAL HIT!
Damage dealt: 46
Enemy health: 54`
      },
      {
        title: "Type Conversion — Always Convert!",
        code: `# input() always gives TEXT, not numbers!
level_str = input("Enter your level (1-10): ")
level = int(level_str)   # Convert text to number!

bonus_xp = level * 150
health_bonus = level * 20

print(f"Level {level} bonuses:")
print(f"  XP Bonus:     +{bonus_xp}")
print(f"  Health Bonus: +{health_bonus}")`,
        desc: "NEVER forget: input() gives you a string. Always convert with int() or float() before math!",
        tryThis: "Ask for the player's speed as a float input, then multiply it by 1.5 to get boosted speed.",
        output: `Enter your level (1-10): 5
Level 5 bonuses:
  XP Bonus:     +750
  Health Bonus: +100`
      },
      {
        title: "The Math Module",
        code: `import math

speed = 7.8
distance = 142.5

# Round numbers properly
print(f"Speed (rounded): {round(speed)}")
print(f"Distance ceiling: {math.ceil(distance)}")
print(f"Square root of 64: {math.sqrt(64)}")

# Calculate game score
score = math.floor(distance * speed * 1.5)
print(f"Final Score: {score}")`,
        desc: "The math module gives you powerful tools: round(), ceil(), floor(), sqrt() and many more.",
        tryThis: "Calculate how many seconds it takes to travel 500 units at the given speed using division.",
        output: `Speed (rounded): 8
Distance ceiling: 143
Square root of 64: 8.0
Final Score: 1601`
      }
    ],
    challenge: "Build a Health Battle Simulator: ask the player for attack power (int), add a random defense (use 12), calculate damage = attack - defense. If damage > 20, print 'Critical!'. Show remaining enemy HP.",
    gamePreviewIcon: "⚔️",
    gamePreviewLines: ["▶ Health Battle.py — Running...", ">>> Enter attack power: 35", ">>> CRITICAL HIT! Damage: 46"]
  },
  {
    id: 4,
    color: "#10b981",
    title: "Conditions: Games That Think",
    subtitle: "Decision Making",
    concepts: ["if / elif / else", "Comparison operators", "Boolean logic", "Nested conditions"],
    project: "Rock Paper Scissors",
    xp: 250,
    badge: "Condition Commander",
    badgeIcon: "🧠",
    missionTag: "BRAIN POWER",
    story: "Today we teach your game to THINK. Should the enemy attack or run? Did the player win or lose? Did health drop to zero? Conditions are the brain of every game ever made. Without if/else, programs are just calculators. With it — they become intelligent.",
    spaceFeature: "Bullet Logic — Space Shooter fires bullets only WHEN the player presses SPACE!",
    snippets: [
      {
        title: "The Health Check System",
        code: `health = 45

if health > 80:
    print("Status: HEALTHY 💚")
elif health > 50:
    print("Status: DAMAGED 🟡")
elif health > 20:
    print("Status: CRITICAL 🔴")
else:
    print("Status: DEAD 💀")
    print("Game Over!")`,
        desc: "if/elif/else creates decision chains. Python checks each condition top to bottom and picks the first True one.",
        tryThis: "Change health to 15 and then to 95. See how the output changes each time!",
        output: `Status: CRITICAL 🔴`
      },
      {
        title: "Rock Paper Scissors Logic",
        code: `player = "rock"
computer = "scissors"

if player == computer:
    print("TIE! Try again.")
elif (player == "rock"     and computer == "scissors") or      (player == "scissors" and computer == "paper")   or      (player == "paper"    and computer == "rock"):
    print(f"YOU WIN! {player} beats {computer}! 🎉")
else:
    print(f"COMPUTER WINS! {computer} beats {player}! 🤖")`,
        desc: "Boolean logic (and, or) lets you combine multiple conditions. This is the entire RPS brain!",
        tryThis: "Change player to 'scissors' and computer to 'rock'. Who wins?",
        output: `YOU WIN! rock beats scissors! 🎉`
      },
      {
        title: "Nested Conditions: Difficulty Levels",
        code: `score = 850
streak = 5

if score >= 1000:
    if streak >= 10:
        print("LEGENDARY performance! 🏆")
    else:
        print("Excellent! Keep your streak up!")
elif score >= 500:
    if streak >= 5:
        print("Great combo! You're on fire! 🔥")
    else:
        print("Good score. Build your streak!")
else:
    print("Keep practicing. You'll get there!")`,
        desc: "You can put if statements INSIDE other if statements. This is called nesting — great for complex game logic.",
        tryThis: "Add a third condition: if lives == 0, always print 'Game Over!' regardless of score.",
        output: `Great combo! You're on fire! 🔥`
      }
    ],
    challenge: "Build the full Rock Paper Scissors game: use input() to get the player's choice, hardcode the computer's choice, then use if/elif/else to print who won. Add a score counter for the winner.",
    gamePreviewIcon: "✊",
    gamePreviewLines: ["▶ Rock Paper Scissors.py — Running...", ">>> Enter choice (rock/paper/scissors): rock", ">>> YOU WIN! rock beats scissors! 🎉"]
  },
  {
    id: 5,
    color: "#f59e0b",
    title: "Loops: Infinite Power",
    subtitle: "Repetition",
    concepts: ["for loops", "while loops", "range()", "break / continue"],
    project: "Endless Falling Blocks",
    xp: 275,
    badge: "Loop Master",
    badgeIcon: "🔄",
    missionTag: "INFINITE LOOP",
    story: "Every game runs in a LOOP. The screen redraws 60 times per second. Enemies spawn in loops. Players keep playing until they die — and that is a while loop! Today you master the engine of ALL games. Without loops, games run once and stop forever.",
    spaceFeature: "Enemy Spawner — Space Shooter now spawns enemies in a loop every few seconds!",
    snippets: [
      {
        title: "For Loop: Spawn Enemies",
        code: `# Spawn 5 enemy waves
for wave in range(1, 6):
    enemies = wave * 3
    print(f"Wave {wave}: {enemies} enemies incoming!")

print("All waves complete. BOSS INCOMING! 👾")`,
        desc: "for loops repeat a fixed number of times. range(1, 6) gives you 1, 2, 3, 4, 5 — perfect for waves!",
        tryThis: "Change range to spawn 10 waves. Print the total enemy count at the end using a variable.",
        output: `Wave 1: 3 enemies incoming!
Wave 2: 6 enemies incoming!
Wave 3: 9 enemies incoming!
Wave 4: 12 enemies incoming!
Wave 5: 15 enemies incoming!
All waves complete. BOSS INCOMING! 👾`
      },
      {
        title: "While Loop: The Game Loop",
        code: `lives = 3
score = 0

while lives > 0:
    score += 100
    print(f"Score: {score} | Lives: {lives}")
    
    if score >= 300:
        print("Level complete! 🎉")
        break   # Exit the loop early
    
    lives -= 1  # Simulate taking damage

print(f"Final Score: {score}")`,
        desc: "while loops keep running AS LONG AS the condition is True. This IS the game loop pattern!",
        tryThis: "Change the winning condition to score >= 500. How many lives does it take?",
        output: `Score: 100 | Lives: 3
Score: 200 | Lives: 2
Score: 300 | Lives: 1
Level complete! 🎉
Final Score: 300`
      },
      {
        title: "Falling Blocks with Speed",
        code: `# Endless falling blocks simulation
block_speed = 2
blocks_fallen = 0

for block in range(1, 11):
    block_speed += 0.5  # Speed increases each block
    blocks_fallen += 1
    
    if block % 3 == 0:  # Every 3rd block is special
        print(f"Block {block}: ⚡ SPEED BLOCK! Speed: {block_speed:.1f}")
    else:
        print(f"Block {block}: 🟦 Falling at speed {block_speed:.1f}")

print(f"
{blocks_fallen} blocks fell. Max speed: {block_speed:.1f}")`,
        desc: "combine loops with math to simulate game mechanics. The modulo % operator finds every 3rd item.",
        tryThis: "Add a 'bonus_score' that adds 50 every time a speed block appears (block % 3 == 0).",
        output: `Block 1: 🟦 Falling at speed 2.5
Block 2: 🟦 Falling at speed 3.0
Block 3: ⚡ SPEED BLOCK! Speed: 3.5
...`
      }
    ],
    challenge: "Simulate 10 falling blocks. Each block falls faster by 1. Every 5th block gives a bonus life. Print each block's speed and whether it gave a bonus. Print total lives at the end.",
    gamePreviewIcon: "🧱",
    gamePreviewLines: ["▶ Falling Blocks.py — Running...", ">>> Block 1: 🟦 Speed: 2.5", ">>> Block 5: ⚡ BONUS BLOCK!"]
  }
];
const DAYS_DATA_PART2 = [
  {
    id: 6,
    color: "#ec4899",
    title: "Functions: Your Custom Powers",
    subtitle: "Code Superpowers",
    concepts: ["def keyword", "Parameters", "Return values", "Default arguments"],
    project: "Reaction Speed Game",
    xp: 300,
    badge: "Function Wizard",
    badgeIcon: "🧙",
    missionTag: "SUPERPOWER FORGE",
    story: "Functions are your reusable superpowers. Define once, call everywhere. Want to calculate damage? Call calculate_damage(). Spawn an enemy? Call spawn_enemy(). Professional developers THINK in functions. Today you stop writing scripts and start writing real programs.",
    spaceFeature: "Power-Ups — Space Shooter now has a use_powerup() function that applies effects!",
    snippets: [
      {
        title: "Your First Function",
        code: `def greet_player(name):
    print(f"Welcome, {name}!")
    print(f"Prepare for battle, {name}!")

# Call the function (as many times as you want!)
greet_player("Alex")
greet_player("Luna")
greet_player("Zara")`,
        desc: "def creates a function. You define it once, then CALL it as many times as you need. No repetition!",
        tryThis: "Add a second parameter 'level' to greet_player and include it in the welcome message.",
        output: `Welcome, Alex!
Prepare for battle, Alex!
Welcome, Luna!
Prepare for battle, Luna!
Welcome, Zara!
Prepare for battle, Zara!`
      },
      {
        title: "Functions That Return Values",
        code: `def calculate_damage(attack, defense, is_critical=False):
    damage = attack - defense
    if is_critical:
        damage = damage * 2
    return damage   # Send the result back!

# Use the returned value
hit1 = calculate_damage(40, 10)
hit2 = calculate_damage(40, 10, is_critical=True)

print(f"Normal hit:   {hit1} damage")
print(f"Critical hit: {hit2} damage")`,
        desc: "return sends a value BACK to whoever called the function. This is how game engines share data.",
        tryThis: "Add a 'bonus' default parameter of 0. Include it in the damage calculation.",
        output: `Normal hit:   30 damage
Critical hit: 60 damage`
      },
      {
        title: "Reaction Speed Game",
        code: `import time
import random

def measure_reaction():
    wait = random.uniform(1, 3)
    print("Get ready...")
    time.sleep(wait)
    
    start = time.time()
    input("PRESS ENTER NOW! >>>")
    end = time.time()
    
    reaction = round((end - start) * 1000)
    return reaction

def rate_reaction(ms):
    if ms < 150:   return "LEGENDARY ⚡"
    elif ms < 250: return "EXCELLENT 🔥"
    elif ms < 400: return "GOOD 👍"
    else:          return "KEEP TRAINING 💪"

reaction_ms = measure_reaction()
rating = rate_reaction(reaction_ms)
print(f"Reaction: {reaction_ms}ms — {rating}")`,
        desc: "Functions work together as a team. measure_reaction() gets data, rate_reaction() judges it.",
        tryThis: "Call measure_reaction() 3 times, store each result, then print the average reaction time.",
        output: `Get ready...
PRESS ENTER NOW! >>>
Reaction: 187ms — EXCELLENT 🔥`
      }
    ],
    challenge: "Build a full damage system with 3 functions: calculate_damage(attack, defense), apply_critical(damage, is_crit), and show_battle_result(player_hp, enemy_hp). Call them in order and display the result.",
    gamePreviewIcon: "⚡",
    gamePreviewLines: ["▶ Reaction Game.py — Running...", ">>> Get ready...", ">>> PRESS ENTER NOW!", ">>> Reaction: 187ms — EXCELLENT 🔥"]
  },
  {
    id: 7,
    color: "#06b6d4",
    title: "Lists: Armies of Data",
    subtitle: "Collections",
    concepts: ["List creation", "Indexing", "append() / remove()", "Looping through lists"],
    project: "Snake Lite",
    xp: 325,
    badge: "Array Warrior",
    badgeIcon: "🐍",
    missionTag: "DATA ARMY",
    story: "A Snake game IS a list of positions. High scores ARE a list. Enemy waves ARE a list. Power-ups ARE a list. Lists are the backbone of every game ever made. Today you command armies of data. With lists, your programs go from single soldiers to full battalions.",
    spaceFeature: "Wave System — Space Shooter tracks all active enemies in a list and removes them when hit!",
    snippets: [
      {
        title: "Snake Body as a List",
        code: `# Snake body = list of (x, y) positions
snake = [(5, 5), (4, 5), (3, 5)]

print(f"Snake length: {len(snake)}")
print(f"Head position: {snake[0]}")
print(f"Tail position: {snake[-1]}")

# Snake moves: add new head, remove tail
new_head = (6, 5)
snake.insert(0, new_head)   # Add to front
snake.pop()                  # Remove from back

print(f"After move: {snake}")`,
        desc: "Lists store ordered data. snake[0] is the head, snake[-1] is the tail. This IS the Snake game core!",
        tryThis: "Make the snake eat food at (8, 5) by adding the new head but NOT removing the tail.",
        output: `Snake length: 3
Head position: (5, 5)
Tail position: (3, 5)
After move: [(6, 5), (5, 5), (4, 5)]`
      },
      {
        title: "High Score Leaderboard",
        code: `scores = [1200, 850, 2100, 650, 1750]

# Sort from highest to lowest
scores.sort(reverse=True)

print("🏆 TOP SCORES:")
for i, score in enumerate(scores):
    medal = ["🥇", "🥈", "🥉", "4.", "5."][i]
    print(f"  {medal}  {score} pts")

# Add a new score
new_score = 1900
scores.append(new_score)
scores.sort(reverse=True)
print(f"
New score {new_score} entered!")
print(f"Your rank: #{scores.index(new_score) + 1}")`,
        desc: "sort() orders lists. enumerate() gives you both the index AND the value while looping.",
        tryThis: "Add 3 more scores and print only the Top 3 using scores[:3] (list slicing).",
        output: `🏆 TOP SCORES:
  🥇  2100 pts
  🥈  1750 pts
  🥉  1200 pts
  4.  850 pts
  5.  650 pts`
      },
      {
        title: "Enemy Wave Manager",
        code: `enemies = ["Goblin", "Orc", "Troll", "Dragon", "Slime"]

print(f"Enemies remaining: {len(enemies)}")

# Player defeats enemies one by one
while len(enemies) > 0:
    defeated = enemies.pop(0)   # Remove first enemy
    print(f"  ⚔️  Defeated: {defeated}!")
    
    if "Dragon" not in enemies and len(enemies) > 0:
        print("  🛡️  WARNING: Dragon is gone — Boss spawning!")
        enemies.append("FINAL BOSS")
        break

print(f"
Remaining: {enemies}")`,
        desc: "pop(0) removes from the front. append() adds to the end. in checks if something exists in the list.",
        tryThis: "After defeating all enemies, print 'VICTORY!' and show how many enemies were defeated.",
        output: `Enemies remaining: 5
  ⚔️  Defeated: Goblin!
  ⚔️  Defeated: Orc!
  ⚔️  Defeated: Troll!
  🛡️  WARNING: Dragon is gone — Boss spawning!

Remaining: ['Dragon', 'Slime', 'FINAL BOSS']`
      }
    ],
    challenge: "Build Snake Lite: create a snake list of 3 positions. Loop 5 times: each turn, move the snake right by adding a new head (x+1, same y) and removing the tail. Print the snake after each move.",
    gamePreviewIcon: "🐍",
    gamePreviewLines: ["▶ Snake Lite.py — Running...", ">>> Snake: [(6,5),(5,5),(4,5)]", ">>> Ate food! Length: 4 🍎"]
  },
  {
    id: 8,
    color: "#8b5cf6",
    title: "Random: Chaos is Power",
    subtitle: "Randomness",
    concepts: ["random module", "randint()", "choice()", "shuffle()", "seed()"],
    project: "Meteor Dodge",
    xp: 350,
    badge: "Randomness Ninja",
    badgeIcon: "🎲",
    missionTag: "CHAOS MASTER",
    story: "What makes games ADDICTIVE? SURPRISE! Random meteor positions, random item drops, random enemy behaviour, random loot. Today you add the element of chaos that keeps players hooked forever. Random is the secret ingredient of every great game.",
    spaceFeature: "Random Meteors — Space Shooter now spawns meteors at random positions with random speeds!",
    snippets: [
      {
        title: "Spawn Random Meteors",
        code: `import random

print("🌌 METEOR STORM INCOMING!")
print("-" * 35)

total_damage = 0

for i in range(1, 6):
    x_pos  = random.randint(0, 800)    # Random screen position
    speed  = random.randint(3, 10)     # Random fall speed
    size   = random.choice(["Small", "Medium", "LARGE"])
    damage = random.randint(5, 25)
    total_damage += damage
    
    print(f"Meteor {i}: x={x_pos} | Speed={speed} | {size} | -{damage}HP")

print(f"
Total damage incoming: {total_damage}HP")`,
        desc: "randint(a, b) picks a random whole number between a and b. choice() picks from a list randomly.",
        tryThis: "Add a 10% chance that a meteor is a 'Golden Meteor' worth +50 coins using random.randint(1,10) == 1.",
        output: `🌌 METEOR STORM INCOMING!
-----------------------------------
Meteor 1: x=342 | Speed=7 | Medium | -14HP
Meteor 2: x=89  | Speed=4 | Small  | -8HP
...`
      },
      {
        title: "Random Loot Drops",
        code: `import random

def get_loot_drop(enemy_level):
    roll = random.randint(1, 100)
    
    if roll <= 5:      # 5% chance
        loot = "💎 LEGENDARY SWORD!"
        bonus = enemy_level * 50
    elif roll <= 20:   # 15% chance
        loot = "🗡️  Rare Dagger"
        bonus = enemy_level * 20
    elif roll <= 50:   # 30% chance
        loot = "🪙 Gold Coins"
        bonus = enemy_level * 10
    else:              # 50% chance
        loot = "💨 Nothing..."
        bonus = 0
    
    return loot, bonus

for enemy_lv in [1, 3, 5, 8]:
    item, gold = get_loot_drop(enemy_lv)
    print(f"Lv{enemy_lv} Enemy dropped: {item} (+{gold} gold)")`,
        desc: "Probability in games is just math! Roll 1-100 and check ranges. 1-5 = 5% chance of legendary loot.",
        tryThis: "Add a 1% chance (roll == 1) for an 'ULTRA LEGENDARY' item worth enemy_level * 200 gold.",
        output: `Lv1 Enemy dropped: 🪙 Gold Coins (+10 gold)
Lv3 Enemy dropped: 🗡️  Rare Dagger (+60 gold)
...`
      },
      {
        title: "Shuffle Deck — Card Game",
        code: `import random

# Build a deck of cards
suits  = ["♠️", "♥️", "♦️", "♣️"]
values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

deck = [f"{v}{s}" for s in suits for v in values]
print(f"Deck size: {len(deck)} cards")

# Shuffle the deck
random.shuffle(deck)
print("Deck shuffled! 🃏")

# Deal 5 cards to each player
player1_hand = deck[:5]
player2_hand = deck[5:10]

print(f"
Player 1: {' '.join(player1_hand)}")
print(f"Player 2: {' '.join(player2_hand)}")`,
        desc: "shuffle() randomises a list in place. List comprehensions ([x for x in y]) build lists in one line.",
        tryThis: "Deal a third player's hand from the deck and print all three hands.",
        output: `Deck size: 52 cards
Deck shuffled! 🃏
Player 1: 7♠️ Q♥️ 3♦️ A♣️ 9♠️
Player 2: K♦️ 5♥️ J♠️ 2♣️ 8♦️`
      }
    ],
    challenge: "Build Meteor Dodge: spawn 5 meteors using randint for x position (0-800) and speed (3-10). Calculate total damage. If total damage > 60, print 'SHIELD BROKEN!' otherwise 'You survived!'",
    gamePreviewIcon: "☄️",
    gamePreviewLines: ["▶ Meteor Dodge.py — Running...", ">>> ☄️ Meteor at x=342, speed=7", ">>> SHIELD BROKEN! Total: 73HP"]
  },
  {
    id: 9,
    color: "#06b6d4",
    title: "Pygame Foundations",
    subtitle: "Building the Visual Engine",
    concepts: ["pygame.init()", "set_mode()", "Game loop", "Drawing shapes", "Keyboard input", "FPS"],
    project: "Window Builder",
    xp: 400,
    badge: "Pygame Pioneer",
    badgeIcon: "🪟",
    missionTag: "PYGAME PIONEER",
    story: "Eight days ago you made a computer print your name. Today you open a WINDOW. You draw shapes. You make things MOVE. Everything you've learned — variables, loops, conditions, functions, lists, random — all of it was building up to this moment. The visual era begins NOW.",
    spaceFeature: "The Window — your Space Shooter gets its very first game window and star-field background!",
    snippets: [
      {
        title: "Open Your First Window",
        code: `import pygame
import sys

pygame.init()

WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("My First Game Window")
clock = pygame.time.Clock()

running = True
while running:           # THE GAME LOOP
    clock.tick(60)       # Lock to 60 FPS

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((10, 20, 40))   # Background colour (RGB)
    pygame.display.flip()       # Show everything drawn

pygame.quit()
sys.exit()`,
        desc: "This is the skeleton of EVERY Pygame game. init → window → game loop → events → fill → flip. Never changes.",
        tryThis: "Change (10, 20, 40) to (80, 0, 0) for a red background. Then try (0, 60, 0) for green.",
        output: "[Pygame window opens — 800×600 dark blue screen at 60 FPS]"
      },
      {
        title: "Draw Shapes",
        code: `# Inside the game loop, AFTER screen.fill() and BEFORE display.flip():

# Rectangle: (surface, colour, (x, y, width, height))
pygame.draw.rect(screen, (0, 200, 255), (100, 200, 80, 80))

# Circle: (surface, colour, (cx, cy), radius)
pygame.draw.circle(screen, (255, 107, 0), (400, 300), 40)

# Triangle (polygon): list of (x,y) points
pygame.draw.polygon(screen, (34, 197, 94),
    [(400, 100), (370, 160), (430, 160)])

# Line: (surface, colour, start, end, thickness)
pygame.draw.line(screen, (255,255,255), (0,0), (800,600), 2)`,
        desc: "Pygame's coordinates: (0,0) is TOP-LEFT. X goes right, Y goes DOWN. RGB colours: (255,0,0) = red.",
        tryThis: "Draw a 'spaceship' using one triangle (body) and two circles (engines). Use orange + cyan.",
        output: "[Window shows a cyan square, orange circle, green triangle, and white diagonal line]"
      },
      {
        title: "Move a Shape with the Keyboard",
        code: `# Setup BEFORE the game loop:
box_x = 400
box_y = 300
SPEED = 5

# Inside the game loop:
keys = pygame.key.get_pressed()

if keys[pygame.K_LEFT]  and box_x > 0:           box_x -= SPEED
if keys[pygame.K_RIGHT] and box_x < WIDTH - 40:  box_x += SPEED
if keys[pygame.K_UP]    and box_y > 0:           box_y -= SPEED
if keys[pygame.K_DOWN]  and box_y < HEIGHT - 40: box_y += SPEED

pygame.draw.rect(screen, (0, 200, 255), (box_x, box_y, 40, 40))`,
        desc: "key.get_pressed() checks which keys are held RIGHT NOW. Boundary checks stop the shape leaving the screen.",
        tryThis: "Remove the boundary checks (the 'and box_x > 0' parts) and watch the box escape off-screen!",
        output: "[Blue square moves smoothly with arrow keys, stops at window edges]"
      }
    ],
    challenge: "Build a Moving Rectangle Scene: (1) open 800×600 dark window, (2) generate 80 random stars using a list + for loop, (3) draw a triangle ship that moves with arrow keys, (4) keep ship inside boundaries.",
    gamePreviewIcon: "🪟",
    gamePreviewLines: ["▶ Window Builder.py — Running...", ">>> [Pygame window: 800×600]", ">>> Moving rectangle with arrow keys", ">>> Stars: 80 | FPS: 60"]
  },
  {
    id: 10,
    color: "#ff6b35",
    title: "Flappy Bird: Full Build",
    subtitle: "Physics, Pipes & Collision",
    concepts: ["Bird physics", "Gravity & velocity", "Pipe collision", "Score system", "Game-over screen"],
    project: "Flappy Bird",
    xp: 500,
    badge: "Flappy Legend",
    badgeIcon: "🐦",
    missionTag: "FLAPPY LEGEND",
    story: "THE DAY HAS COME. You have the skills. Variables, conditions, loops, functions, lists, randomness — all of it led to THIS. Today we build Flappy Bird from scratch using Pygame. This is not a tutorial. This is a game launch. You ARE a game developer.",
    spaceFeature: "Score System + Game Over — Space Shooter now has a full score display and game over screen!",
    snippets: [
      {
        title: "Pygame Setup & Game Window",
        code: `import pygame
import sys

# Initialize Pygame
pygame.init()

# Game constants
WIDTH, HEIGHT = 400, 600
FPS = 60
WHITE  = (255, 255, 255)
BLACK  = (0,   0,   0)
CYAN   = (0,   200, 255)

# Create window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Flappy Bird — ASHRI Tech")
clock = pygame.time.Clock()

# Game loop
running = True
while running:
    clock.tick(FPS)   # Limit to 60 FPS
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    screen.fill(BLACK)
    pygame.display.flip()

pygame.quit()
sys.exit()`,
        desc: "This is the foundation of EVERY Pygame game: init → window → game loop → event handling → draw → flip.",
        tryThis: "Change the background colour from BLACK to a dark blue: (10, 20, 40). Run it and see the sky!",
        output: `[Pygame window opens — 400×600 black screen at 60 FPS]`
      },
      {
        title: "Bird Physics & Jump",
        code: `# Bird variables
bird_x  = 80
bird_y  = HEIGHT // 2
bird_vel = 0        # Current vertical velocity
GRAVITY  = 0.5      # Pulls bird down each frame
JUMP_FORCE = -9     # Negative = upward!

# Inside the game loop:
# --- Physics ---
bird_vel += GRAVITY         # Gravity pulls down
bird_y   += bird_vel        # Move bird by velocity

# --- Jump ---
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_SPACE:
            bird_vel = JUMP_FORCE   # Flap!

# --- Draw bird ---
pygame.draw.circle(screen, CYAN, (bird_x, int(bird_y)), 20)

# --- Floor collision ---
if bird_y > HEIGHT - 20:
    print("Game Over! Hit the floor.")
    running = False`,
        desc: "Gravity is just adding 0.5 to velocity each frame. Jump sets velocity to -9 (upward). Physics in 3 lines!",
        tryThis: "Change GRAVITY to 0.3 for a slower, floatier bird. See how it changes the feel!",
        output: `[Bird falls with gravity, jumps on SPACE key]`
      },
      {
        title: "Pipes & Collision Detection",
        code: `import random

# Pipe variables
PIPE_WIDTH = 70
GAP_SIZE   = 160   # Space between top and bottom pipe
pipe_x     = WIDTH
pipe_gap_y = random.randint(150, HEIGHT - 200)

# Inside game loop:
# --- Move pipe ---
pipe_x -= 4   # Pipe scrolls left

# --- Respawn pipe ---
if pipe_x < -PIPE_WIDTH:
    pipe_x     = WIDTH
    pipe_gap_y = random.randint(150, HEIGHT - 200)
    score     += 1

# --- Draw pipes ---
GREEN = (34, 197, 94)
# Top pipe
pygame.draw.rect(screen, GREEN, (pipe_x, 0, PIPE_WIDTH, pipe_gap_y - GAP_SIZE//2))
# Bottom pipe
pygame.draw.rect(screen, GREEN, (pipe_x, pipe_gap_y + GAP_SIZE//2, PIPE_WIDTH, HEIGHT))

# --- Collision ---
bird_rect = pygame.Rect(bird_x - 18, int(bird_y) - 18, 36, 36)
top_pipe  = pygame.Rect(pipe_x, 0, PIPE_WIDTH, pipe_gap_y - GAP_SIZE//2)
bot_pipe  = pygame.Rect(pipe_x, pipe_gap_y + GAP_SIZE//2, PIPE_WIDTH, HEIGHT)

if bird_rect.colliderect(top_pipe) or bird_rect.colliderect(bot_pipe):
    running = False   # Game over!`,
        desc: "Rect.colliderect() is Pygame's collision detection. Two rectangles overlapping = True. One line of collision!",
        tryThis: "Add a high_score variable that saves the best score and displays it even after game over.",
        output: `[Pipes scroll left, bird must navigate through gaps]`
      }
    ],
    challenge: "Add a high score system to Flappy Bird: save the best score in a variable, display it in the top-right corner, and show a 'NEW HIGH SCORE!' message on the game over screen when beaten.",
    gamePreviewIcon: "🐦",
    gamePreviewLines: ["▶ Flappy Bird.py — Running...", ">>> [Pygame Window: Flappy Bird]", ">>> Score: 7 | Best: 12", ">>> SPACE to flap!"]
  },
  {
    id: 11,
    color: "#8b5cf6",
    title: "Space Shooter Part 1",
    subtitle: "Building the Core Systems",
    concepts: ["pygame.Rect", "WASD movement", "Bullet list system", "Enemy spawner", "List comprehension cleanup"],
    project: "Shooter Core",
    xp: 600,
    badge: "Space Cadet",
    badgeIcon: "🔫",
    missionTag: "SPACE CADET",
    story: "Yesterday you controlled one thing: a bird. Today you build an entire battlefield. A player ship. Bullets that fire. Enemies that fall. This is a REAL game architecture — the same pattern used in Space Invaders, Galaga, and every shooter ever made.",
    spaceFeature: "The Full System — player + bullets + enemies working together for the first time!",
    snippets: [
      {
        title: "Window, Stars & Player",
        code: `import pygame, sys, random
pygame.init()

W, H = 800, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption("Space Shooter — ASHRI Tech")
clock = pygame.time.Clock()

BG     = (4, 8, 15)
PLAYER = (0, 200, 255)
ORANGE = (255, 107, 0)

# Star field — generated ONCE before the loop
stars = [(random.randint(0,W), random.randint(0,H)) for _ in range(100)]

# Player — pygame.Rect stores position + size
player = pygame.Rect(W//2-25, H-90, 50, 50)
PLAYER_SPEED = 6`,
        desc: "pygame.Rect stores position AND size together — perfect for movement and collision. Stars generated once before the loop so they don't flicker.",
        tryThis: "Change range(100) to range(200) for a denser star field. Notice how it still doesn't slow down!",
        output: "[800×600 dark window with 100 white star dots and a cyan player ship]"
      },
      {
        title: "Player Movement & Boundaries",
        code: `# Inside game loop — UPDATE section:
keys = pygame.key.get_pressed()

if keys[pygame.K_a] and player.left   > 0:      player.x -= PLAYER_SPEED
if keys[pygame.K_d] and player.right  < W:      player.x += PLAYER_SPEED
if keys[pygame.K_w] and player.top    > H // 2: player.y -= PLAYER_SPEED
if keys[pygame.K_s] and player.bottom < H:      player.y += PLAYER_SPEED

# DRAW section:
for sx, sy in stars:
    pygame.draw.circle(screen, (255,255,255), (sx, sy), 1)

# Triangle ship shape
pygame.draw.polygon(screen, PLAYER, [
    (player.centerx, player.top),    # Nose
    (player.left,    player.bottom), # Left wing
    (player.right,   player.bottom)  # Right wing
])
pygame.draw.circle(screen, ORANGE, (player.centerx, player.bottom), 6)`,
        desc: "player.left, player.right, player.top, player.bottom are built-in Rect properties. The boundary player.top > H//2 keeps the player in the bottom half.",
        tryThis: "Remove the boundary checks (the 'and player.left > 0' parts) and watch the ship fly off-screen!",
        output: "[Triangle ship moves with WASD, locked to bottom half, engine glow orange]"
      },
      {
        title: "Bullet System + Enemy Spawner",
        code: `# BEFORE loop:
bullets = []; BULLET_SPEED = 10
enemies = []; enemy_timer = 0; ENEMY_SPEED = 3

# EVENTS — fire on SPACE (one-time press, not held):
if event.type == pygame.KEYDOWN:
    if event.key == pygame.K_SPACE:
        b = pygame.Rect(player.centerx-3, player.top, 6, 16)
        bullets.append(b)

# UPDATE:
for b in bullets: b.y -= BULLET_SPEED
bullets = [b for b in bullets if b.bottom > 0]  # Remove off-screen

enemy_timer += 1
if enemy_timer >= 60:  # Every 1 second at 60 FPS
    e = pygame.Rect(random.randint(0, W-40), -40, 40, 40)
    enemies.append(e); enemy_timer = 0
for e in enemies: e.y += ENEMY_SPEED
enemies = [e for e in enemies if e.top < H]      # Remove fallen`,
        desc: "Every bullet and enemy is a Rect in a list. List comprehension [b for b if...] automatically removes off-screen objects — same pattern for both bullets AND enemies!",
        tryThis: "Print f'Bullets: {len(bullets)}' each frame. Watch the count go up when you shoot and drop when they leave the screen.",
        output: "[Green bullets fire upward, red enemies spawn from top and fall — lists clean themselves!]"
      }
    ],
    challenge: "Combine all three systems: WASD player + SPACE to shoot + enemies every second. Add a shoot cooldown of 20 frames (only one bullet per 20 frames) to prevent spam.",
    gamePreviewIcon: "🔫",
    gamePreviewLines: ["▶ Space Shooter Pt1.py — Running...", ">>> Player: WASD to move", ">>> SPACE to fire bullets", ">>> Enemies spawning every second..."]
  },
  {
    id: 12,
    color: "#f59e0b",
    title: "Space Shooter Part 2 + Showcase",
    subtitle: "Python Legend",
    concepts: ["Bullet-enemy collision", "Health bar HUD", "Start screen", "Game-over + restart", "Presentation"],
    project: "Space Shooter Complete",
    xp: 1e3,
    badge: "Python Legend",
    badgeIcon: "🏆",
    missionTag: "PYTHON LEGEND",
    story: "You made it, LEGEND. Today you finish what you started. Collision — so bullets destroy enemies. A HUD — so health and score are always visible. A start screen — so it feels like a REAL game. Then you present it to the world. Every line of code, every badge — it all led to THIS moment.",
    spaceFeature: "COMPLETE — Collision + HUD + start screen + game-over with restart. Every concept used in one game!",
    snippets: [
      {
        title: "Bullet-Enemy Collision",
        code: `# Game state (add BEFORE the loop):
score  = 0
health = 100

# In UPDATE section — AFTER moving bullets & enemies:
for b in bullets[:]:          # [:] = safe copy
    for e in enemies[:]:
        if b.colliderect(e):
            bullets.remove(b)
            enemies.remove(e)
            score += 10
            break             # CRITICAL — stop checking removed bullet!

for e in enemies[:]:
    if e.colliderect(player):
        enemies.remove(e)
        health -= 20
    if e.top > H:
        enemies.remove(e)

if health <= 0:
    running = False`,
        desc: "bullets[:] creates a SAFE COPY so we can remove during the loop. break is CRITICAL — without it, checking a removed bullet crashes the game.",
        tryThis: "Remove the break and shoot an enemy. The game crashes with ValueError. Put it back. Now you KNOW why it exists.",
        output: "[Bullets destroy enemies on hit, enemies reduce health on contact]"
      },
      {
        title: "Adding a Start Menu",
        code: `def show_menu(screen, W, H):
    font_big = pygame.font.SysFont("Arial", 56, bold=True)
    font_med = pygame.font.SysFont("Arial", 28)
    
    while True:
        screen.fill((4, 8, 15))
        
        # Title
        title = font_big.render("SPACE SHOOTER", True, (0, 200, 255))
        screen.blit(title, title.get_rect(center=(W//2, H//2 - 80)))
        
        # Prompt
        prompt = font_med.render("Press ENTER to Start", True, (255, 255, 255))
        screen.blit(prompt, prompt.get_rect(center=(W//2, H//2 + 20)))
        
        pygame.display.flip()
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RETURN:
                    return  # Start the game!

# Call before game loop:
show_menu(screen, W, H)`,
        desc: "A menu function runs its own mini-loop waiting for ENTER. When pressed, it returns and the game starts.",
        tryThis: "Add an 'instructions' line to the menu: 'ARROWS: Move | SPACE: Shoot'",
        output: `[Menu screen: SPACE SHOOTER title + Press ENTER to Start]`
      }
    ],
    challenge: "Add a draw_hud() function showing a health bar + score, a show_start_screen() menu function, and a show_game_over() screen with R=restart, Q=quit. Wrap the whole game in an outer while True loop for restart support.",
    gamePreviewIcon: "🚀",
    gamePreviewLines: ["▶ Space Shooter.py — Running...", ">>> Score: 120 | HP: 80", ">>> [Enemies spawning...]", ">>> GAME COMPLETE! 🏆"]
  }
];
const DAYS_DATA = [...DAYS_DATA_PART1, ...DAYS_DATA_PART2];
const FLOATERS = [
  { e: "🚀", x: "7%", y: "14%", d: "0s", s: "38px" },
  { e: "⭐", x: "87%", y: "18%", d: "0.6s", s: "30px" },
  { e: "💰", x: "4%", y: "62%", d: "1.1s", s: "34px" },
  { e: "🐍", x: "91%", y: "55%", d: "1.7s", s: "36px" },
  { e: "🎮", x: "14%", y: "78%", d: "0.8s", s: "32px" },
  { e: "⚡", x: "80%", y: "72%", d: "1.4s", s: "28px" },
  { e: "☄️", x: "48%", y: "4%", d: "0.3s", s: "26px" },
  { e: "🏆", x: "73%", y: "88%", d: "2s", s: "30px" }
];
function LandingPage({ setView, setSelectedDay }) {
  const { state } = useProgress();
  const completedCount = state.completedDays.length;
  const pct = Math.round(completedCount / 12 * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", zIndex: 1 }, className: "page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { minHeight: "92vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center", position: "relative" }, children: [
      FLOATERS.map((f2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", left: f2.x, top: f2.y, fontSize: f2.s, animation: `float 4s ease-in-out ${f2.d} infinite`, pointerEvents: "none", userSelect: "none", opacity: 0.65 }, children: f2.e }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.25)", borderRadius: 99, padding: "7px 22px", marginBottom: 28 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#00f5ff", display: "inline-block", boxShadow: "0 0 10px #00f5ff", animation: "blink 1.5s ease-in-out infinite" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#00f5ff", fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }, children: "ASHRI Tech · Summer Camp 2025" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { fontFamily: "var(--font-head)", fontSize: "clamp(34px,6vw,74px)", fontWeight: 900, lineHeight: 1.08, marginBottom: 24, color: "#fff", maxWidth: 900 }, children: [
        "Build Games with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }, children: "Python" }),
        " ",
        "in",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f59e0b", textShadow: "0 0 30px rgba(245,158,11,0.5)" }, children: "12 Days" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "clamp(16px,2vw,20px)", color: "rgba(255,255,255,0.6)", maxWidth: 580, lineHeight: 1.65, marginBottom: 44 }, children: "Learn Python through Space Shooters, Flappy Bird, and Mini Arcade Games. Level up every day. Earn badges. Ship real games from scratch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("dashboard"), style: { padding: "16px 44px", borderRadius: 12, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #00f5ff, #7c3aed)", color: "#000", fontWeight: 900, fontSize: 16, fontFamily: "inherit", boxShadow: "0 0 40px rgba(0,245,255,0.35)", animation: "heroglowbtn 2s ease-in-out infinite", letterSpacing: 0.5 }, children: "🚀 Start Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("lessons"), style: { padding: "16px 44px", borderRadius: 12, cursor: "pointer", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.85)", fontWeight: 700, fontSize: 16, fontFamily: "inherit", border: "1px solid rgba(255,255,255,0.18)", letterSpacing: 0.5 }, children: "📚 View Curriculum" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap", justifyContent: "center" }, children: [{ v: "12", l: "Days" }, { v: "6+", l: "Games Built" }, { v: "30+", l: "Skills" }, { v: "12", l: "Badges" }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "var(--font-head)", fontSize: 36, fontWeight: 900, color: "#00f5ff", textShadow: "0 0 20px rgba(0,245,255,0.4)" }, children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4, fontWeight: 600 }, children: s.l })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 52 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { color: "#00f5ff", children: "WHAT YOU'LL BUILD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", fontSize: "clamp(26px,4vw,42px)", color: "#fff", fontWeight: 800 }, children: "5 Complete Games" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.45)", marginTop: 10, fontSize: 15 }, children: "Every game ships in a single day. No fluff. Real code." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: 20 }, children: GAMES_SHOWCASE.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: { borderRadius: 18, padding: "30px 20px", textAlign: "center", background: `radial-gradient(ellipse at 50% 0%, ${g.color}22, rgba(255,255,255,0.02))`, border: `1px solid ${g.color}30`, transition: "all 0.3s", cursor: "default" },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = `0 24px 50px ${g.color}25`;
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 52, marginBottom: 16, animation: "float 4s ease-in-out infinite" }, children: g.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 8 }, children: g.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.5, marginBottom: 14 }, children: g.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: g.color, fontSize: 11, fontWeight: 800, letterSpacing: 1, background: `${g.color}15`, border: `1px solid ${g.color}30`, borderRadius: 99, display: "inline-block", padding: "4px 14px" }, children: [
              "DAY ",
              g.day
            ] })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { padding: "80px 24px", maxWidth: 900, margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 52 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { color: "#8b5cf6", children: "THE JOURNEY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", fontSize: "clamp(26px,4vw,42px)", color: "#fff", fontWeight: 800 }, children: "12-Day Roadmap" })
      ] }),
      completedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 10 }, children: "YOUR PROGRESS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 320, height: 8, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden", margin: "0 auto 8px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #00f5ff, #8b5cf6, #ff6b35)", borderRadius: 99, boxShadow: "0 0 12px rgba(0,245,255,0.4)", transition: "width 1.2s" } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#00f5ff", fontWeight: 800, fontSize: 14 }, children: [
          completedCount,
          "/12 Days Complete · ",
          pct,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", left: "50%", top: 20, bottom: 20, width: 2, background: "linear-gradient(to bottom, #00f5ff, #7c3aed, #ff6b35)", transform: "translateX(-50%)", opacity: 0.25 } }),
        DAYS_DATA.map((day, i) => {
          const done = state.completedDays.includes(day.id);
          const active = state.unlockedDays.includes(day.id) && !done;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 20, flexDirection: i % 2 === 0 ? "row" : "row-reverse" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, display: "flex", justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              borderRadius: 12,
              padding: "14px 20px",
              maxWidth: 320,
              background: done ? `${day.color}15` : active ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${done ? day.color + "55" : active ? day.color + "30" : "rgba(255,255,255,0.07)"}`,
              textAlign: i % 2 === 0 ? "right" : "left",
              boxShadow: done ? `0 0 16px ${day.color}20` : "none",
              transition: "all 0.4s"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: done ? day.color : active ? day.color + "cc" : "rgba(255,255,255,0.35)", fontWeight: 700, fontSize: 12, marginBottom: 4 }, children: [
                "Day ",
                day.id,
                " · ",
                day.subtitle
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: done || active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)", fontSize: 13, fontWeight: 600, marginBottom: 4 }, children: day.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 12 }, children: [
                "🎮 ",
                day.project
              ] }),
              done && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: day.color, fontSize: 11, fontWeight: 800, marginTop: 6 }, children: [
                "✓ COMPLETE · +",
                day.xp,
                " XP"
              ] }),
              active && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#f59e0b", fontSize: 11, fontWeight: 800, marginTop: 6, animation: "blink 1.5s ease-in-out infinite" }, children: "🎯 IN PROGRESS" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              width: 36,
              height: 36,
              borderRadius: "50%",
              flexShrink: 0,
              zIndex: 1,
              background: done ? day.color : active ? `${day.color}30` : "rgba(255,255,255,0.06)",
              border: `2px solid ${done ? day.color : active ? day.color : "rgba(255,255,255,0.15)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: done ? `0 0 20px ${day.color}70` : active ? `0 0 12px ${day.color}40` : "none",
              color: done ? "#000" : active ? day.color : "rgba(255,255,255,0.4)",
              fontSize: 14,
              fontWeight: 900,
              animation: active ? "badgepulse 2s ease-in-out infinite" : "none",
              transition: "all 0.4s"
            }, children: done ? "✓" : active ? "▶" : day.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 } })
          ] }, day.id);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 52 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { color: "#10b981", children: "THE SCIENCE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", fontSize: "clamp(26px,4vw,42px)", color: "#fff", fontWeight: 800 }, children: "Why Learn Through Games?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 22 }, children: [
        { icon: "🎯", title: "Instant Feedback", desc: "See your code come alive on screen immediately. Bugs become puzzles, not problems.", color: "#00f5ff" },
        { icon: "🧠", title: "Deeper Retention", desc: "When you build something you are proud of, the concepts stick 3× longer.", color: "#8b5cf6" },
        { icon: "🚀", title: "Real Deliverables", desc: "Every single day you ship a complete mini-game. Your portfolio grows daily.", color: "#ff6b35" },
        { icon: "🏆", title: "Gamified Progress", desc: "Earn XP, unlock badges, level up your rank. Learning feels like winning.", color: "#f59e0b" }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: { borderRadius: 18, padding: 28, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.3s" },
          onMouseEnter: (e) => {
            e.currentTarget.style.borderColor = item.color + "45";
            e.currentTarget.style.background = `${item.color}08`;
            e.currentTarget.style.transform = "translateY(-4px)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            e.currentTarget.style.background = "rgba(255,255,255,0.025)";
            e.currentTarget.style.transform = "none";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 40, marginBottom: 16 }, children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 10 }, children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.6 }, children: item.desc })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { padding: "80px 24px", maxWidth: 900, margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 52 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { color: "#f59e0b", children: "YOUR DESTINY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", fontSize: "clamp(26px,4vw,42px)", color: "#fff", fontWeight: 800 }, children: "Rank Up Your Skills" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 16 }, children: RANKS.map((rank, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 14, padding: "20px 14px", textAlign: "center", background: `${rank.color}10`, border: `1px solid ${rank.color}30`, opacity: i <= 2 ? 1 : 0.6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 32, marginBottom: 10 }, children: rank.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: rank.color, fontWeight: 800, fontSize: 12, marginBottom: 4 }, children: rank.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.3)", fontSize: 11 }, children: [
          rank.minXP,
          "+ XP"
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { padding: "80px 24px 100px", textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 680, margin: "0 auto", padding: "64px 40px", borderRadius: 28, background: "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(124,58,237,0.1))", border: "1px solid rgba(0,245,255,0.2)", position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,245,255,0.1) 0%, transparent 60%)", pointerEvents: "none" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 56, marginBottom: 20, animation: "float 3s ease-in-out infinite" }, children: "🏆" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontFamily: "var(--font-head)", fontSize: 30, color: "#fff", fontWeight: 900, marginBottom: 14, position: "relative" }, children: "Ready to Become a Python Legend?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.55)", marginBottom: 36, fontSize: 16, lineHeight: 1.6, position: "relative" }, children: "Join the 12-day adventure. Build games you'll be proud to show." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("dashboard"), style: { padding: "18px 56px", borderRadius: 14, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #00f5ff, #7c3aed)", color: "#000", fontWeight: 900, fontSize: 18, fontFamily: "inherit", boxShadow: "0 0 50px rgba(0,245,255,0.4)", position: "relative" }, children: "🚀 Begin Your Quest" })
    ] }) })
  ] });
}
const BADGES_ALL = [
  { name: "First Program", icon: "🚀", desc: "Wrote your very first Python program", color: "#00f5ff", day: 1 },
  { name: "Variable Explorer", icon: "💎", desc: "Mastered variables and data storage", color: "#8b5cf6", day: 2 },
  { name: "Math Wizard", icon: "⚡", desc: "Conquered operations and typecasting", color: "#ff6b35", day: 3 },
  { name: "Condition Commander", icon: "🧠", desc: "Built decision-making logic with if/else", color: "#10b981", day: 4 },
  { name: "Loop Master", icon: "🔄", desc: "Harnessed the infinite power of loops", color: "#f59e0b", day: 5 },
  { name: "Function Wizard", icon: "🧙", desc: "Created your own reusable superpowers", color: "#ec4899", day: 6 },
  { name: "Array Warrior", icon: "🐍", desc: "Commanded lists and data collections", color: "#00f5ff", day: 7 },
  { name: "Randomness Ninja", icon: "🎲", desc: "Mastered chaos and unpredictability", color: "#8b5cf6", day: 8 },
  { name: "Pygame Pioneer", icon: "🪟", desc: "Opened your first game window with Pygame", color: "#06b6d4", day: 9 },
  { name: "Flappy Legend", icon: "🐦", desc: "Built a complete Flappy Bird from scratch", color: "#ff6b35", day: 10 },
  { name: "Space Cadet", icon: "🔫", desc: "Built a working shooter: player, bullets, enemies", color: "#8b5cf6", day: 11 },
  { name: "Python Legend", icon: "🏆", desc: "Completed the full 12-day journey", color: "#f59e0b", day: 12 }
];
function ConceptTag({ label, color = "#00f5ff", locked = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
    background: locked ? "rgba(255,255,255,0.03)" : `${color}12`,
    color: locked ? "rgba(255,255,255,0.2)" : color,
    border: `1px solid ${locked ? "rgba(255,255,255,0.05)" : color + "30"}`,
    borderRadius: 99,
    padding: "3px 9px",
    fontSize: 10,
    fontWeight: 700
  }, children: label });
}
function DayCard({ day, onClick }) {
  const { state } = useProgress();
  const locked = !state.unlockedDays.includes(day.id);
  const done = state.completedDays.includes(day.id);
  const active = !locked && !done;
  const [hovered, setHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      onClick: () => !locked && onClick(day),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        borderRadius: 18,
        padding: 22,
        position: "relative",
        overflow: "hidden",
        background: locked ? "rgba(255,255,255,0.02)" : `linear-gradient(135deg, ${day.color}12, rgba(255,255,255,0.03))`,
        border: `1px solid ${done ? day.color + "55" : active ? day.color + "35" : "rgba(255,255,255,0.06)"}`,
        cursor: locked ? "default" : "pointer",
        opacity: locked ? 0.5 : 1,
        transform: hovered && !locked ? "translateY(-6px)" : "none",
        boxShadow: hovered && !locked ? `0 16px 40px ${day.color}20` : done ? `0 0 20px ${day.color}15` : "none",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)"
      },
      children: [
        done && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 0, right: 0, width: 0, height: 0, borderTop: `50px solid ${day.color}40`, borderLeft: "50px solid transparent" } }),
        done && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 8, right: 6, fontSize: 14 }, children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: locked ? "rgba(255,255,255,0.04)" : `${day.color}20`, border: `1px solid ${locked ? "rgba(255,255,255,0.08)" : day.color + "45"}`, color: locked ? "rgba(255,255,255,0.2)" : day.color, fontWeight: 900, fontSize: 15, fontFamily: "var(--font-head)" }, children: day.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }, children: [
              "Day ",
              day.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: locked ? "rgba(255,255,255,0.25)" : day.color, fontSize: 11, fontWeight: 700 }, children: day.subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: "auto", fontSize: 18 }, children: done ? "✅" : active ? "🔓" : "🔒" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: locked ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: 14, marginBottom: 8, lineHeight: 1.35 }, children: day.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 12 }, children: [
          "🎮 ",
          day.project
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }, children: day.concepts.slice(0, 3).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ConceptTag, { label: c, color: day.color, locked }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: locked ? "rgba(255,255,255,0.15)" : "#f59e0b", fontSize: 12, fontWeight: 800 }, children: [
            "⚡ +",
            day.xp,
            " XP"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 18 }, children: day.badgeIcon })
        ] })
      ]
    }
  );
}
function GlowBadge({ badge, size = "normal" }) {
  const { state } = useProgress();
  const earned = state.earnedBadges.includes(badge.name);
  const sm = size === "small";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        position: "relative",
        textAlign: "center",
        padding: sm ? "18px 12px" : "28px 18px",
        borderRadius: 16,
        background: earned ? `radial-gradient(ellipse at 50% 0%, ${badge.color}25, rgba(255,255,255,0.02))` : "rgba(255,255,255,0.02)",
        border: `1px solid ${earned ? badge.color + "50" : "rgba(255,255,255,0.06)"}`,
        filter: earned ? "none" : "grayscale(1)",
        opacity: earned ? 1 : 0.45,
        boxShadow: earned ? `0 0 30px ${badge.color}20` : "none",
        animation: earned ? "badgepulse 4s ease-in-out infinite" : "none",
        cursor: "default",
        transition: "transform 0.2s"
      },
      onMouseEnter: (e) => earned && (e.currentTarget.style.transform = "scale(1.05)"),
      onMouseLeave: (e) => e.currentTarget.style.transform = "scale(1)",
      children: [
        earned && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 8, right: 8, background: badge.color, borderRadius: 99, padding: "2px 7px", fontSize: 9, fontWeight: 900, color: "#000", letterSpacing: 1 }, children: "✓ EARNED" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: sm ? 34 : 52, marginBottom: 10 }, children: badge.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: earned ? "#fff" : "rgba(255,255,255,0.3)", fontWeight: 800, fontSize: sm ? 11 : 13, marginBottom: 4 }, children: badge.name }),
        !sm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 12, lineHeight: 1.4 }, children: badge.desc }),
        !sm && earned && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 10, color: badge.color, fontSize: 11, fontWeight: 700 }, children: [
          "Day ",
          badge.day
        ] }),
        !earned && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 6, fontSize: 20 }, children: "🔒" })
      ]
    }
  );
}
function SpaceShooterTracker() {
  const { state } = useProgress();
  const completedCount = state.completedDays.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 20, padding: "24px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 24 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#00f5ff", fontSize: 11, fontWeight: 800, letterSpacing: 2, marginBottom: 4 }, children: "🚀 SPACE SHOOTER: EVOLUTION TRACKER" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.3)", fontSize: 12, marginBottom: 16 }, children: "Watch your game grow feature by feature across all 10 days" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }, children: SPACE_SHOOTER_FEATURES.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: 48,
        height: 48,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        background: i < completedCount ? "rgba(0,245,255,0.15)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${i < completedCount ? "rgba(0,245,255,0.45)" : "rgba(255,255,255,0.08)"}`,
        boxShadow: i < completedCount ? "0 0 14px rgba(0,245,255,0.25)" : "none",
        transition: "all 0.4s"
      }, children: item.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: i < completedCount ? "rgba(0,245,255,0.7)" : "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: i < completedCount ? 700 : 400 }, children: item.feat })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 16, height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 99, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${completedCount * 10}%`, background: "linear-gradient(90deg, #00f5ff, #7c3aed)", borderRadius: 99, boxShadow: "0 0 10px rgba(0,245,255,0.4)", transition: "width 1s" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 8, color: "rgba(255,255,255,0.25)", fontSize: 11 }, children: [
      completedCount,
      "/10 features unlocked · ",
      completedCount * 10,
      "% complete"
    ] })
  ] });
}
function Dashboard({ setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  const { current } = getRankInfo(state.xp);
  const completedCount = state.completedDays.length;
  const currentDay = DAYS_DATA.find((d) => state.unlockedDays.includes(d.id) && !state.completedDays.includes(d.id));
  const [confirmReset, setConfirmReset] = reactExports.useState(false);
  const BATCH_LABELS = { morning: "Morning Batch 🌅", evening: "Evening Batch 🌆", weekend: "Weekend Warriors ⚔️", ninjas: "Python Ninjas 🥷" };
  const batchLabel = BATCH_LABELS[state.batch] || "ASHRI Tech Academy";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }, className: "page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 36 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 13, marginBottom: 4 }, children: [
        "Welcome back, ",
        state.studentName,
        " 👋"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-head)", fontSize: 30, color: "#fff", fontWeight: 900 }, children: "Player Profile" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-grid", style: { display: "grid", gridTemplateColumns: "300px 1fr", gap: 22, marginBottom: 28 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 22, padding: "32px 24px", background: `linear-gradient(160deg, ${current.color}18, rgba(255,255,255,0.02))`, border: `1px solid ${current.color}35`, textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 84, height: 84, borderRadius: "50%", margin: "0 auto 16px", background: `rgba(255,255,255,0.05)`, border: `2px solid ${current.color}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, boxShadow: `0 0 35px ${current.color}40` }, children: state.avatarEmoji || "🚀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 2 }, children: state.studentName }),
        state.gamerTag && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#00f5ff", fontSize: 13, marginBottom: 4, fontFamily: "var(--font-code)" }, children: [
          "@",
          state.gamerTag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: current.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }, children: [
          current.icon,
          " ",
          current.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.3)", fontSize: 11, marginBottom: 20, background: "rgba(255,255,255,0.04)", borderRadius: 99, padding: "3px 12px", display: "inline-block" }, children: batchLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XPBar, { showDetails: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", gap: 28, marginTop: 24 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#f59e0b", fontWeight: 900, fontSize: 26 }, children: [
              "🔥",
              state.streak
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 11 }, children: "Day Streak" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 1, background: "rgba(255,255,255,0.08)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#00f5ff", fontWeight: 900, fontSize: 26 }, children: [
              "🏅",
              state.earnedBadges.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 11 }, children: "Badges" })
          ] })
        ] }),
        !confirmReset ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setConfirmReset(true),
            style: { marginTop: 20, background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "5px 14px", color: "rgba(255,255,255,0.2)", cursor: "pointer", fontSize: 11, fontFamily: "inherit" },
            children: "⟳ Reset Profile"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 20, display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.45)", fontSize: 12 }, children: "Reset all progress? This cannot be undone." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  dispatch({ type: "RESET" });
                  setConfirmReset(false);
                },
                style: { background: "rgba(239,68,68,0.18)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 8, padding: "5px 14px", color: "#ef4444", cursor: "pointer", fontSize: 12, fontFamily: "inherit", fontWeight: 700 },
                children: "Yes, Reset"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setConfirmReset(false),
                style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "5px 14px", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 12, fontFamily: "inherit" },
                children: "Cancel"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dashboard-stats", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16 }, children: [
        { label: "Total XP Earned", value: state.xp, suffix: " XP", icon: "⚡", color: "#00f5ff" },
        { label: "Days Completed", value: completedCount, suffix: "/10", icon: "📅", color: "#10b981" },
        { label: "Current Rank", value: current.name, suffix: "", icon: current.icon, color: current.color, small: true },
        { label: "Badges Collected", value: state.earnedBadges.length, suffix: "/10", icon: "🏅", color: "#f59e0b" }
      ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 18, padding: "24px 22px", background: `${s.color}0e`, border: `1px solid ${s.color}22` }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 28, marginBottom: 10 }, children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: s.color, fontSize: s.small ? 18 : 30, fontWeight: 900, fontFamily: s.small ? "inherit" : "var(--font-head)" }, children: [
          s.value,
          s.suffix
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 4 }, children: s.label })
      ] }, i)) })
    ] }),
    currentDay && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 20, padding: "26px 30px", background: `linear-gradient(135deg, ${currentDay.color}15, rgba(255,255,255,0.02))`, border: `1px solid ${currentDay.color}45`, marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: currentDay.color, fontSize: 11, fontWeight: 800, letterSpacing: 2, marginBottom: 8 }, children: "🎯 ACTIVE MISSION" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#fff", fontWeight: 900, fontSize: 22, marginBottom: 6 }, children: [
          "Day ",
          currentDay.id,
          ": ",
          currentDay.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.45)", fontSize: 13, display: "flex", gap: 16, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "🎮 ",
            currentDay.project
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "⚡ +",
            currentDay.xp,
            " XP"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            currentDay.badgeIcon,
            " ",
            currentDay.badge
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setSelectedDay(currentDay);
        setView("day");
      }, style: { padding: "14px 32px", borderRadius: 12, border: "none", cursor: "pointer", background: `linear-gradient(135deg, ${currentDay.color}, ${currentDay.color}99)`, color: "#000", fontWeight: 900, fontSize: 15, fontFamily: "inherit", whiteSpace: "nowrap" }, children: "Continue Mission →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SpaceShooterTracker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 18 }, children: "🏅 Badge Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("badges"), style: { background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 16px", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }, children: "View All →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: 12 }, children: BADGES_ALL.slice(0, 5).map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(GlowBadge, { badge: b, size: "small" }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 18 }, children: "📚 Lesson Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("lessons"), style: { background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 16px", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }, children: "Full Map →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16 }, children: DAYS_DATA.slice(0, 3).map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx(DayCard, { day, onClick: (d) => {
        setSelectedDay(d);
        setView("day");
      } }, day.id)) })
    ] })
  ] });
}
function LessonsGrid({ setView, setSelectedDay }) {
  const { state } = useProgress();
  const done = state.completedDays.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 1200, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }, className: "page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 40 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { color: "var(--orange)", children: "12-DAY CURRICULUM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-head)", fontSize: 34, color: "#fff", fontWeight: 900 }, children: "Mission Map" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.4)", marginTop: 8, fontSize: 15 }, children: "Complete each day to unlock the next. Ship a real game every single day." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 18, padding: "20px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 32, display: "flex", alignItems: "center", gap: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.65)", fontSize: 14, fontWeight: 700 }, children: "Overall Progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--orange)", fontSize: 14, fontWeight: 800 }, children: [
            done,
            "/12 Days Complete"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 10, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${done / 12 * 100}%`, background: "linear-gradient(90deg, var(--orange), var(--teal))", borderRadius: 99, boxShadow: "0 0 14px rgba(255,107,0,0.4)", transition: "width 1.2s" } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "var(--orange)", fontWeight: 900, fontFamily: "var(--font-head)", fontSize: 28 }, children: [
        Math.round(done / 12 * 100),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 18 }, children: DAYS_DATA.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx(DayCard, { day, onClick: (d) => {
      setSelectedDay(d);
      setView("day");
    } }, day.id)) })
  ] });
}
const SETUP_DATA = {
  1: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: "python --version", comment: "confirm Python is installed" },
      { cmd: "python", comment: "open the Python interactive shell" },
      { cmd: 'print("Hello, Game World!")', comment: "type this inside the shell to test" },
      { cmd: "exit()", comment: "quit the Python shell" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance"],
    note: "No extra packages needed today! Pure Python only.",
    troubleshooting: [
      { issue: '"python" is not recognized as a command', fix: 'Open the Microsoft Store and search "Python 3.11". Install it, then restart VS Code.' },
      { issue: 'VS Code says "Select Python Interpreter"', fix: 'Press Ctrl+Shift+P → "Python: Select Interpreter" → choose the Python 3.x version from the list.' },
      { issue: "print() shows nothing / errors", fix: "Make sure you are running the FILE (click ▶ Run), not typing in a terminal manually without the Python shell open." }
    ]
  },
  2: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: "python --version", comment: "confirm Python 3.8+" },
      { cmd: "python day2.py", comment: "run your variables script" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance", "indent-rainbow"],
    note: "Still no packages needed. Focus on getting comfortable with VS Code Run button (▶).",
    troubleshooting: [
      { issue: "f-string gives SyntaxError", fix: 'f-strings require Python 3.6+. Run "python --version" to check. If you see 2.x, install Python 3.' },
      { issue: "Variable name has spaces — SyntaxError", fix: 'Variable names cannot have spaces. Use underscore: player_name not "player name".' },
      { issue: 'TypeError: can only concatenate str (not "int") to str', fix: 'Use an f-string: f"Score: {score}" instead of "Score: " + score.' }
    ]
  },
  3: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: "python --version", comment: "check version" },
      { cmd: 'python -c "import math; print(math.pi)"', comment: "test math module (built-in, no install needed)" },
      { cmd: "python day3.py", comment: "run your math script" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance"],
    note: "The math module is built into Python — no pip install needed!",
    troubleshooting: [
      { issue: "ValueError: invalid literal for int()", fix: "The user typed letters instead of a number. Add input validation: use a try/except block or ask again." },
      { issue: "ZeroDivisionError", fix: "You tried to divide by zero. Add an if statement: if divisor != 0: before dividing." },
      { issue: "int() vs float() — when to use which?", fix: "Use int() for whole numbers (lives, score, level). Use float() when decimals matter (speed, health %)." }
    ]
  },
  4: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: "python day4.py", comment: "run your conditions script" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance", "indent-rainbow"],
    note: "Indentation is CRITICAL in Python. Use 4 spaces (or Tab). Never mix them!",
    troubleshooting: [
      { issue: "IndentationError: expected an indented block", fix: "The code inside your if/elif/else must be indented with 4 spaces. Check that every line under if has a tab." },
      { issue: "= vs == confusion", fix: '"=" assigns a value (x = 5). "==" checks equality (if x == 5). They are completely different!' },
      { issue: "elif / else not being reached", fix: "Check that your if condition is not always True. Add print() statements above each branch to debug." }
    ]
  },
  5: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: "python day5.py", comment: "run your loops script" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance"],
    note: "If your program seems stuck/frozen, it might be an infinite loop! Press Ctrl+C to stop it.",
    troubleshooting: [
      { issue: "Program freezes / runs forever", fix: "Press Ctrl+C in the terminal to stop. You likely have a while loop where the condition never becomes False. Add print() to debug." },
      { issue: "range() not including the last number", fix: "range(1, 6) gives 1,2,3,4,5 — not 6. The end value is EXCLUDED. Use range(1, 11) for 1 through 10." },
      { issue: "break not working inside nested loops", fix: "break only exits the innermost loop. To break outer loops, use a flag variable (found = True) and check it." }
    ]
  },
  6: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: "python day6.py", comment: "run your functions script" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance", "indent-rainbow"],
    note: "Functions must be DEFINED before they are CALLED. Always write def at the top of your file.",
    troubleshooting: [
      { issue: 'NameError: name "my_function" is not defined', fix: "Make sure you called the function AFTER the def block. Python reads top to bottom." },
      { issue: "Function returns None unexpectedly", fix: 'You forgot to add "return" at the end of your function. Without return, Python returns None by default.' },
      { issue: "Wrong number of arguments error", fix: "Count the parameters in your def line and make sure you pass the same number when calling it." }
    ]
  },
  7: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: "python day7.py", comment: "run your lists script" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance"],
    note: "Lists are zero-indexed: the first item is at index [0], NOT [1]!",
    troubleshooting: [
      { issue: "IndexError: list index out of range", fix: "You accessed an index that does not exist. If list has 3 items, valid indexes are 0, 1, 2. Check len(your_list)." },
      { issue: "List not updating after append()", fix: "Make sure you are calling append() on the LIST VARIABLE, not on a copy. Check your variable names." },
      { issue: "Iterating and modifying list at same time", fix: "Never modify a list while looping over it. Build a new list instead, or loop over a copy: for item in my_list[:]." }
    ]
  },
  8: {
    pythonVersion: "3.8+",
    commands: [
      { cmd: 'python -c "import random; print(random.randint(1,10))"', comment: "test random module" },
      { cmd: "python day8.py", comment: "run your random script" }
    ],
    packages: [],
    extensions: ["Python (Microsoft)", "Pylance"],
    note: 'random is a built-in module — no pip install! Just "import random" at the top of your file.',
    troubleshooting: [
      { issue: "Same random numbers every run", fix: "If you used random.seed(42), remove it. Seeds make randomness predictable (useful for testing, bad for games)." },
      { issue: "randint vs randrange", fix: "randint(1, 10) includes BOTH 1 and 10. randrange(1, 10) excludes 10. Use randint for dice/game choices." },
      { issue: "random.choice() on empty list crashes", fix: "Add a check: if len(my_list) > 0: before calling random.choice(my_list)." }
    ]
  },
  9: {
    pythonVersion: "3.9+",
    commands: [
      { cmd: "pip install pygame", comment: "install the Pygame library" },
      { cmd: 'python -c "import pygame; print(pygame.ver)"', comment: "verify Pygame installed correctly" },
      { cmd: "python day9.py", comment: "run your Flappy Bird script" }
    ],
    packages: ["pygame"],
    extensions: ["Python (Microsoft)", "Pylance", "Pygame Snippets"],
    note: "Pygame opens a SEPARATE WINDOW — not output in VS Code terminal. If nothing appears, check your taskbar!",
    troubleshooting: [
      { issue: 'ModuleNotFoundError: No module named "pygame"', fix: "Run: pip install pygame in the TERMINAL (not Python shell). Make sure you are using the right Python environment." },
      { issue: "pip is not recognized", fix: "Try: python -m pip install pygame or py -m pip install pygame on Windows." },
      { issue: "Pygame window opens but immediately closes", fix: "You are missing the game loop: while running: followed by pygame.event.get(). Add it to keep the window open." },
      { issue: "Black screen / nothing renders", fix: "Call pygame.display.flip() or pygame.display.update() at the end of your game loop." }
    ]
  },
  10: {
    pythonVersion: "3.9+",
    commands: [
      { cmd: "pip show pygame", comment: "confirm pygame version" },
      { cmd: "python space_shooter.py", comment: "run your final Space Shooter!" },
      { cmd: "pip freeze > requirements.txt", comment: "export your dependencies for sharing" }
    ],
    packages: ["pygame"],
    extensions: ["Python (Microsoft)", "Pylance", "GitLens"],
    note: "Today is showcase day! Make sure your game runs from a FRESH terminal before presenting.",
    troubleshooting: [
      { issue: "Game runs slow / low FPS", fix: "Add pygame.time.Clock() and call clock.tick(60) in your game loop to cap at 60 FPS." },
      { issue: "Images/sounds not loading", fix: "Check that asset file paths are relative to where you run the script. Use os.path.join() for cross-platform paths." },
      { issue: "Sharing the game — friend cannot run it", fix: "They need Python + pygame installed. Share requirements.txt and tell them to run: pip install -r requirements.txt" }
    ]
  }
};
const KEYWORDS = /* @__PURE__ */ new Set([
  "print",
  "input",
  "int",
  "str",
  "float",
  "bool",
  "len",
  "range",
  "list",
  "dict",
  "def",
  "return",
  "if",
  "elif",
  "else",
  "for",
  "while",
  "import",
  "from",
  "True",
  "False",
  "None",
  "and",
  "or",
  "not",
  "in",
  "break",
  "continue",
  "pass",
  "random",
  "math",
  "pygame",
  "time",
  "sys",
  "append",
  "pop",
  "insert",
  "sort",
  "shuffle",
  "randint",
  "choice",
  "uniform",
  "seed",
  "self",
  "class",
  "try",
  "except",
  "with",
  "as",
  "lambda",
  "global",
  "yield",
  "open",
  "read",
  "write",
  "format",
  "round",
  "abs",
  "min",
  "max",
  "sum",
  "type",
  "enumerate"
]);
function escHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function tokenizeLine(line) {
  let html = "";
  let i = 0;
  const n2 = line.length;
  while (i < n2) {
    const ch2 = line[i];
    if (ch2 === "#") {
      html += `<span style="color:#6a737d;font-style:italic">${escHtml(line.slice(i))}</span>`;
      break;
    }
    if (ch2 === '"') {
      let j = i + 1;
      while (j < n2 && line[j] !== '"') j++;
      if (j < n2) j++;
      html += `<span style="color:#a5d6ff">${escHtml(line.slice(i, j))}</span>`;
      i = j;
      continue;
    }
    if (ch2 === "'") {
      let j = i + 1;
      while (j < n2 && line[j] !== "'") j++;
      if (j < n2) j++;
      html += `<span style="color:#a5d6ff">${escHtml(line.slice(i, j))}</span>`;
      i = j;
      continue;
    }
    if (/[a-zA-Z_]/.test(ch2)) {
      let j = i;
      while (j < n2 && /\w/.test(line[j])) j++;
      const word = line.slice(i, j);
      html += KEYWORDS.has(word) ? `<span style="color:#ff7b72;font-weight:700">${word}</span>` : escHtml(word);
      i = j;
      continue;
    }
    if (/[0-9]/.test(ch2)) {
      let j = i;
      while (j < n2 && /[0-9.]/.test(line[j])) j++;
      html += `<span style="color:#79c0ff">${escHtml(line.slice(i, j))}</span>`;
      i = j;
      continue;
    }
    if ("=!<>+-*/%".includes(ch2)) {
      html += `<span style="color:#ffa657">${escHtml(ch2)}</span>`;
      i++;
      continue;
    }
    if ("()[]{}:,".includes(ch2)) {
      html += `<span style="color:#e6edf3">${escHtml(ch2)}</span>`;
      i++;
      continue;
    }
    html += escHtml(ch2);
    i++;
  }
  return html;
}
function highlight(code) {
  return code.split("\n").map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: { minHeight: "1.5em" },
      dangerouslySetInnerHTML: { __html: tokenizeLine(line) || "&nbsp;" }
    },
    i
  ));
}
function CodeSnippet({ snippet, dayColor = "#00f5ff" }) {
  const [open, setOpen] = reactExports.useState(true);
  const [copied, setCopied] = reactExports.useState(false);
  const [showTry, setShowTry] = reactExports.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.09)", marginBottom: 20 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", padding: "10px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: dayColor, fontWeight: 700, fontSize: 14 }, children: [
        "💻 ",
        snippet.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleCopy,
            style: { background: copied ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.07)", border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.12)"}`, borderRadius: 6, padding: "4px 10px", color: copied ? "#10b981" : "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 11, fontFamily: "inherit", transition: "all 0.2s" },
            children: copied ? "✓ Copied!" : "⧉ Copy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen(!open),
            style: { background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 12, padding: "4px 8px", fontFamily: "inherit" },
            children: open ? "▲" : "▼ Show"
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "#0d1117", padding: "18px 20px", fontFamily: "var(--font-code)", fontSize: 13, lineHeight: 1.7, color: "#e6edf3", overflowX: "auto" }, children: highlight(snippet.code) }),
      snippet.output && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(0,0,0,0.4)", padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,0.05)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#6a737d", fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }, children: "▶ OUTPUT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "var(--font-code)", fontSize: 12, color: "#10b981", lineHeight: 1.7, whiteSpace: "pre-line" }, children: snippet.output })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(0,245,255,0.04)", padding: "10px 18px", color: "rgba(255,255,255,0.55)", fontSize: 13, borderTop: "1px solid rgba(255,255,255,0.05)", lineHeight: 1.6 }, children: [
        "💡 ",
        snippet.desc
      ] }),
      snippet.tryThis && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setShowTry(!showTry),
            style: { background: "rgba(245,158,11,0.06)", borderTop: "1px solid rgba(245,158,11,0.15)", padding: "9px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", userSelect: "none" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f59e0b", fontSize: 12, fontWeight: 700 }, children: "🎯 Try This Challenge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.35)", fontSize: 11 }, children: showTry ? "▲ Hide" : "▼ Show" })
            ]
          }
        ),
        showTry && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "rgba(245,158,11,0.06)", padding: "14px 18px", color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.65, borderTop: "1px solid rgba(245,158,11,0.1)" }, children: snippet.tryThis })
      ] })
    ] })
  ] });
}
const CONFETTI_COLORS = ["#00f5ff", "#f59e0b", "#10b981", "#8b5cf6", "#ff6b35", "#ec4899", "#fff"];
function Confetti() {
  const pieces = Array.from({ length: 36 }, (_, i) => {
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    const left = `${(i * 2.78).toFixed(1)}%`;
    const delay = `${(i * 0.08).toFixed(2)}s`;
    const dur = `${(1.8 + i % 5 * 0.3).toFixed(1)}s`;
    const size = `${6 + i % 4 * 3}px`;
    const shape = i % 3 === 0 ? "50%" : i % 3 === 1 ? "2px" : "0";
    return { color, left, delay, dur, size, shape };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 999, overflow: "hidden" }, children: pieces.map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    position: "absolute",
    top: 0,
    left: p2.left,
    width: p2.size,
    height: p2.size,
    background: p2.color,
    borderRadius: p2.shape,
    animation: `confettiFall ${p2.dur} ${p2.delay} ease-in forwards,
                      confettiSway ${p2.dur} ${p2.delay} ease-in-out forwards`,
    opacity: 0
  } }, i)) });
}
function RewardPopup({ type, day, onClose }) {
  if (type === "xp") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Confetti, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          onClick: onClose,
          style: { position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1e3, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(12px)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            background: "linear-gradient(135deg, rgba(0,245,255,0.16), rgba(245,158,11,0.16))",
            border: "1px solid rgba(0,245,255,0.5)",
            borderRadius: 28,
            padding: "52px 72px",
            textAlign: "center",
            animation: "popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            position: "relative"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 80, marginBottom: 12, animation: "float 2s ease-in-out infinite" }, children: "⚡" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontFamily: "var(--font-head)", fontSize: 56, color: "#f59e0b", fontWeight: 900, textShadow: "0 0 30px rgba(245,158,11,0.6)" }, children: [
              "+",
              day.xp
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#f59e0b", fontWeight: 800, fontSize: 22, marginBottom: 8 }, children: "XP EARNED!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.55)", fontSize: 15, marginBottom: 8 }, children: "Challenge Complete — Incredible Work!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.25)", fontSize: 12 }, children: "Click anywhere to continue" })
          ] })
        }
      )
    ] });
  }
  if (type === "badge") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onClick: onClose,
        style: { position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1e3, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(12px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          background: `linear-gradient(135deg, ${day.color}28, rgba(255,255,255,0.04))`,
          border: `2px solid ${day.color}80`,
          borderRadius: 28,
          padding: "52px 72px",
          textAlign: "center",
          animation: "popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: `0 0 80px ${day.color}40`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", display: "inline-block", marginBottom: 14 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", inset: -20, borderRadius: "50%", border: `2px solid ${day.color}60`, animation: "pulseRing 1.5s ease-out infinite" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 90, animation: "float 2s ease-in-out infinite" }, children: day.badgeIcon })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 800, letterSpacing: 3, marginBottom: 12 }, children: "🏅 BADGE UNLOCKED!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "var(--font-head)", fontSize: 26, color: day.color, fontWeight: 900, marginBottom: 8, textShadow: `0 0 20px ${day.color}` }, children: day.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 20 }, children: "Added to your collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.25)", fontSize: 12 }, children: "Click anywhere to continue" })
        ] })
      }
    );
  }
  return null;
}
function CopyBtn({ text }) {
  const [copied, setCopied] = reactExports.useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handle, style: {
    background: copied ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.07)",
    border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.12)"}`,
    borderRadius: 6,
    padding: "3px 10px",
    color: copied ? "#10b981" : "rgba(255,255,255,0.5)",
    cursor: "pointer",
    fontSize: 11,
    fontFamily: "inherit",
    flexShrink: 0,
    transition: "all 0.2s"
  }, children: copied ? "✓ Copied" : "⧉ Copy" });
}
function TerminalLine({ cmd, comment }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 10, alignItems: "flex-start", flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#10b981", fontFamily: "var(--font-code)", flexShrink: 0 }, children: "$" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#e6edf3", fontFamily: "var(--font-code)", fontSize: 13, wordBreak: "break-all" }, children: cmd }),
        comment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 11, marginTop: 2 }, children: [
          "# ",
          comment
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CopyBtn, { text: cmd })
  ] });
}
function SetupBlock({ setup, dayColor = "#00f5ff" }) {
  var _a, _b, _c, _d;
  const [open, setOpen] = reactExports.useState(false);
  const [showTB, setShowTB] = reactExports.useState(false);
  if (!setup) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.09)", marginBottom: 24 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => setOpen((o) => !o),
        style: { background: "rgba(16,185,129,0.08)", padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 18 }, children: "🛠️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#10b981", fontWeight: 800, fontSize: 14 }, children: "Setup for Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: "Terminal commands · VS Code extensions · Python checks" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: open ? "▲ Hide" : "▼ Show Setup" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#060d14" }, children: [
      setup.pythonVersion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 800, letterSpacing: 2, marginBottom: 8 }, children: "PYTHON VERSION REQUIRED" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontFamily: "var(--font-code)", color: "#a5d6ff", fontSize: 13 }, children: [
            "Python ",
            setup.pythonVersion,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "rgba(255,255,255,0.3)", fontSize: 11, marginLeft: 8 }, children: [
              "— check with: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { color: "#10b981" }, children: "python --version" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CopyBtn, { text: "python --version" })
        ] })
      ] }),
      ((_a = setup.commands) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 800, letterSpacing: 2, marginBottom: 10 }, children: "TERMINAL COMMANDS (run in order)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: setup.commands.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine, { cmd: c.cmd, comment: c.comment }, i)) })
      ] }),
      ((_b = setup.packages) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 800, letterSpacing: 2, marginBottom: 10 }, children: "PACKAGES TO INSTALL" }),
        setup.packages.map((pkg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine, { cmd: `pip install ${pkg}`, comment: `installs the ${pkg} library` }, i))
      ] }),
      ((_c = setup.extensions) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 800, letterSpacing: 2, marginBottom: 8 }, children: "VS CODE EXTENSIONS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: setup.extensions.map((ext, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 8, padding: "4px 12px", color: "#00f5ff", fontSize: 12, fontFamily: "var(--font-code)" }, children: ext }, i)) })
      ] }),
      setup.note && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(245,158,11,0.04)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#f59e0b", fontSize: 13 }, children: [
        "⚠️ ",
        setup.note
      ] }) }),
      ((_d = setup.troubleshooting) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "14px 18px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setShowTB((t2) => !t2),
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", marginBottom: showTB ? 12 : 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#f59e0b", fontSize: 13, fontWeight: 700 }, children: [
                "🔧 Troubleshooting (",
                setup.troubleshooting.length,
                " known issues)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.35)", fontSize: 11 }, children: showTB ? "▲" : "▼ Expand" })
            ]
          }
        ),
        showTB && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: setup.troubleshooting.map((tb2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "12px 14px", borderLeft: "3px solid #f59e0b" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#f59e0b", fontSize: 12, fontWeight: 700, marginBottom: 4 }, children: [
            "❓ ",
            tb2.issue
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.65)", fontSize: 12, lineHeight: 1.6 }, children: [
            "✅ ",
            tb2.fix
          ] })
        ] }, i)) })
      ] })
    ] })
  ] });
}
function TerminalShell({ color, title, lines, input, onInput, onSubmit, placeholder, onReset, disabled }) {
  const outRef = reactExports.useRef(null);
  const inRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [lines]);
  reactExports.useEffect(() => {
    var _a;
    if (!disabled) (_a = inRef.current) == null ? void 0 : _a.focus();
  }, [disabled]);
  const C2 = {
    output: "rgba(200,230,255,0.75)",
    info: "rgba(100,200,255,0.9)",
    success: "#10b981",
    error: "#f87171",
    border: `${color}80`,
    title: color,
    subtitle: "rgba(255,255,255,0.5)",
    maze: "rgba(220,240,255,0.92)",
    input: "rgba(255,255,255,0.5)",
    prompt: `${color}cc`,
    warn: "#f59e0b"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: "100%", borderRadius: 12, overflow: "hidden", border: `1px solid ${color}30`, background: "#060a12" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 14px", background: "rgba(255,255,255,0.04)", borderBottom: `1px solid ${color}20`, display: "flex", gap: 6, alignItems: "center" }, children: [
      ["#ff5f57", "#febc2e", "#28c840"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 11, height: 11, borderRadius: "50%", background: c } }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.3)", fontSize: 11, marginLeft: 8 }, children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onReset, style: { marginLeft: "auto", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, color: "rgba(255,255,255,0.45)", fontSize: 11, padding: "2px 10px", cursor: "pointer", fontFamily: "inherit" }, children: "↺ Reset" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: outRef, style: { height: 380, overflowY: "auto", padding: "10px 0", fontFamily: "var(--font-code)", fontSize: 13, lineHeight: 1.65 }, children: lines.map((l2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: C2[l2.t] || "rgba(255,255,255,0.7)", whiteSpace: "pre", paddingLeft: 4, fontWeight: l2.t === "title" ? 800 : 400 }, children: l2.s }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 12px", borderTop: `1px solid ${color}20`, display: "flex", gap: 8, alignItems: "center", background: "rgba(0,0,0,0.3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color, fontFamily: "var(--font-code)", fontSize: 13 }, children: ">" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: inRef,
          value: input,
          onChange: (e) => onInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") onSubmit();
          },
          placeholder: disabled ? "— game over —" : placeholder,
          disabled,
          style: { flex: 1, background: "transparent", border: "none", outline: "none", color: "#e2e8f0", fontFamily: "var(--font-code)", fontSize: 13, caretColor: color, opacity: disabled ? 0.3 : 1 },
          autoComplete: "off",
          spellCheck: false
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSubmit, disabled, style: { background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 6, color, fontSize: 12, padding: "4px 12px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, opacity: disabled ? 0.3 : 1 }, children: "Enter ↵" })
    ] })
  ] });
}
const L$1 = (s, t2 = "output") => ({ s, t: t2 });
const rnd = (lo, hi2) => Math.floor(Math.random() * (hi2 - lo + 1)) + lo;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const BOOT$1 = (title, subtitle) => [
  L$1("════════════════════════════════════════════", "border"),
  L$1(`   ${title}`, "title"),
  L$1(`   ASHRI Tech Game Academy — ${subtitle}`, "subtitle"),
  L$1("════════════════════════════════════════════", "border"),
  L$1("")
];
function Day2Game({ color }) {
  const canvasRef = reactExports.useRef(null);
  const gameRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  const keysRef = reactExports.useRef({});
  const [status, setStatus] = reactExports.useState("idle");
  const W2 = 380, H2 = 440, BW = 64, BH = 16;
  const ITEM_TYPES = [
    { icon: "💰", pts: 10, life: 0 },
    { icon: "⭐", pts: 25, life: 0 },
    { icon: "💎", pts: 50, life: 0 },
    { icon: "💣", pts: 0, life: -1 }
  ];
  const initGame = (hs = 0) => ({
    bx: W2 / 2 - BW / 2,
    by: H2 - 36,
    bspeed: 6,
    items: [],
    score: 0,
    lives: 3,
    level: 1,
    caught: 0,
    spawnT: 0,
    spawnInterval: 70,
    fallSpeed: 2.5,
    frame: 0,
    hs
  });
  const spawnItem = (g) => {
    const bomb = Math.random() < 0.15;
    const t2 = bomb ? ITEM_TYPES[3] : ITEM_TYPES[Math.floor(Math.random() * 3)];
    g.items.push({ x: rnd(24, W2 - 44), y: -30, type: t2 });
  };
  const drawGame = (ctx, g, stat) => {
    ctx.fillStyle = "#04080f";
    ctx.fillRect(0, 0, W2, H2);
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.05 + i * 37 % 5 / 60})`;
      ctx.fillRect((i * 127 + g.frame / 4) % W2, i * 83 % H2, 1, 1);
    }
    ctx.strokeStyle = `${color}25`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H2 - 20);
    ctx.lineTo(W2, H2 - 20);
    ctx.stroke();
    ctx.font = "22px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    g.items.forEach((it) => ctx.fillText(it.type.icon, it.x, it.y));
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(g.bx, g.by, BW, BH, 6);
    ctx.fill();
    ctx.fillStyle = `${color}50`;
    ctx.beginPath();
    ctx.roundRect(g.bx + 4, g.by + 3, BW - 8, BH - 5, 4);
    ctx.fill();
    ctx.fillStyle = "#04080f";
    ctx.font = "bold 8px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("BASKET", g.bx + BW / 2, g.by + BH / 2);
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.font = "bold 14px Arial";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${g.score}`, 10, 8);
    ctx.fillStyle = "#ef4444";
    ctx.font = "13px Arial";
    ctx.fillText("❤️".repeat(g.lives), 10, 28);
    ctx.fillStyle = color;
    ctx.textAlign = "right";
    ctx.font = "bold 13px Arial";
    ctx.fillText(`Lv ${g.level}`, W2 - 10, 8);
    ctx.fillStyle = "#facc15";
    ctx.font = "11px Arial";
    ctx.fillText(`Best: ${g.hs}`, W2 - 10, 26);
    if (stat === "idle") {
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.font = "bold 28px Arial";
      ctx.fillText("💰 COIN COLLECTOR", W2 / 2, H2 / 2 - 60);
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.fillText("Catch coins, avoid 💣 bombs!", W2 / 2, H2 / 2 - 20);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "14px Arial";
      ctx.fillText("A/D  or  ← →  to move basket", W2 / 2, H2 / 2 + 10);
      ctx.fillStyle = color;
      ctx.font = "bold 16px Arial";
      ctx.fillText("Press ENTER or click Play", W2 / 2, H2 / 2 + 46);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.font = "12px Arial";
      ctx.fillText("Day 2 — Variables & f-strings", W2 / 2, H2 / 2 + 72);
    }
    if (stat === "dead") {
      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 32px Arial";
      ctx.fillText("GAME OVER", W2 / 2, H2 / 2 - 60);
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${g.score}`, W2 / 2, H2 / 2 - 18);
      ctx.fillStyle = "#facc15";
      ctx.font = "16px Arial";
      ctx.fillText(`Best: ${g.hs}`, W2 / 2, H2 / 2 + 12);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "14px Arial";
      ctx.fillText(`Level reached: ${g.level}`, W2 / 2, H2 / 2 + 40);
      ctx.fillStyle = color;
      ctx.font = "bold 15px Arial";
      ctx.fillText("ENTER to play again", W2 / 2, H2 / 2 + 68);
    }
  };
  const startGame = () => {
    var _a;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const hs = ((_a = gameRef.current) == null ? void 0 : _a.hs) || 0;
    gameRef.current = initGame(hs);
    setStatus("playing");
    cancelAnimationFrame(rafRef.current);
    const loop = () => {
      const g = gameRef.current;
      g.frame++;
      const k2 = keysRef.current;
      if ((k2["ArrowLeft"] || k2["a"] || k2["A"]) && g.bx > 0) g.bx -= g.bspeed;
      if ((k2["ArrowRight"] || k2["d"] || k2["D"]) && g.bx + BW < W2) g.bx += g.bspeed;
      g.spawnT++;
      if (g.spawnT >= g.spawnInterval) {
        spawnItem(g);
        g.spawnT = 0;
      }
      g.items.forEach((it) => {
        it.y += g.fallSpeed;
      });
      g.items.forEach((it) => {
        if (it.y + 12 >= g.by && it.y - 12 <= g.by + BH && it.x >= g.bx - 12 && it.x <= g.bx + BW + 12) {
          it.caught = true;
          if (it.type.life < 0) {
            g.lives = Math.max(0, g.lives + it.type.life);
          } else {
            g.score += it.type.pts;
            g.caught++;
            if (g.score > g.hs) g.hs = g.score;
          }
        }
      });
      g.items = g.items.filter((it) => !it.caught && it.y < H2 + 40);
      const lv = Math.floor(g.caught / 10) + 1;
      if (lv > g.level) {
        g.level = lv;
        g.fallSpeed = 2.5 + (lv - 1) * 0.4;
        g.spawnInterval = Math.max(28, 70 - (lv - 1) * 6);
      }
      const dead = g.lives <= 0;
      drawGame(ctx, g, dead ? "dead" : "playing");
      if (dead) {
        setStatus("dead");
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    gameRef.current = initGame(0);
    drawGame(canvas.getContext("2d"), gameRef.current, "idle");
    const onKey = (e) => {
      keysRef.current[e.key] = e.type === "keydown";
      if (e.type === "keydown" && e.key === "Enter") startGame();
    };
    canvas.addEventListener("keydown", onKey);
    canvas.addEventListener("keyup", onKey);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("keyup", onKey);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "canvas",
      {
        ref: canvasRef,
        width: W2,
        height: H2,
        tabIndex: 0,
        onClick: () => {
          var _a;
          return (_a = canvasRef.current) == null ? void 0 : _a.focus();
        },
        style: { borderRadius: 12, border: `2px solid ${color}40`, outline: "none", cursor: "pointer", display: "block" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
      [["◀ A", "ArrowLeft"], ["D ▶", "ArrowRight"]].map(([lbl, k2]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onMouseDown: () => {
            keysRef.current[k2] = true;
          },
          onMouseUp: () => {
            keysRef.current[k2] = false;
          },
          onTouchStart: (e) => {
            e.preventDefault();
            keysRef.current[k2] = true;
          },
          onTouchEnd: () => {
            keysRef.current[k2] = false;
          },
          style: { padding: "9px 24px", borderRadius: 8, border: `1px solid ${color}40`, background: `${color}15`, color, fontSize: 14, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, userSelect: "none" },
          children: lbl
        },
        k2
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: startGame,
          style: { padding: "9px 18px", borderRadius: 8, border: `1px solid ${color}50`, background: `${color}20`, color, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 },
          children: status === "idle" ? "▶ Play" : "↺ Restart"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: "Click canvas · A/D or ← → to move · catch coins, dodge bombs" })
  ] });
}
function Day3Game({ color }) {
  const [lines, setLines] = reactExports.useState([...BOOT$1("⚔️   BATTLE CALCULATOR", "Day 3"), L$1("  Enter your hero name:", "prompt")]);
  const [input, setInput] = reactExports.useState("");
  const [phase, setPhase] = reactExports.useState("name");
  const [st, setSt] = reactExports.useState({ name: "", heroHp: 100, dragonHp: 100, round: 0 });
  const [key, setKey] = reactExports.useState(0);
  const push = (...ls) => setLines((p2) => [...p2, ...ls]);
  const submit = () => {
    const cmd = input.trim();
    setInput("");
    if (phase === "name") {
      const n2 = cmd || "Hero";
      push(L$1(`  > ${n2}`, "input"), L$1(""), L$1(`  ⚔️  ${n2} vs The Dragon!`, "success"), L$1(""));
      setSt((s) => ({ ...s, name: n2 }));
      push(L$1(`--- Round 1 ---`, "border"), L$1(`  Your HP: 100  |  Dragon HP: 100`, "info"), L$1(""), L$1("  Your attack power (1-50):", "prompt"));
      setPhase("attack");
    } else if (phase === "attack") {
      const atk = Math.max(1, Math.min(50, parseInt(cmd) || 10));
      push(L$1(`  > ${atk}`, "input"));
      setSt((s) => {
        const defense = rnd(5, 15);
        const raw = atk - defense;
        const crit = raw > 30;
        const damage = crit ? Math.floor(raw * 1.5) : Math.max(0, raw);
        const counter = rnd(8, 22);
        const newDragon = Math.max(0, s.dragonHp - damage);
        const newHero = Math.max(0, s.heroHp - counter);
        const newRound = s.round + 1;
        push(crit ? L$1(`  💥 CRITICAL HIT! Defense=${defense} | Damage=${damage}`, "success") : L$1(`  ⚔️  Hit! Defense=${defense} | Damage=${damage}`, "output"));
        if (newDragon > 0) push(L$1(`  🐉 Dragon attacks! -${counter} HP`, "error"));
        push(L$1(`  Dragon HP remaining: ${Math.max(0, newDragon / 100 * 100).toFixed(1)}%`, "info"), L$1(""));
        if (newDragon <= 0) {
          push(
            L$1("════════════════════════════════════════════", "border"),
            L$1(`  🏆 ${s.name} WINS after ${newRound} rounds!`, "title"),
            L$1(`  Dragon dealt: ${100 - newHero} total damage`, "info"),
            L$1(`  ${s.name} HP remaining: ${newHero}`, "info"),
            L$1("════════════════════════════════════════════", "border"),
            L$1(""),
            L$1("  Play again? [Y/N]:", "prompt")
          );
          setPhase("again");
        } else if (newHero <= 0) {
          push(
            L$1("════════════════════════════════════════════", "border"),
            L$1(`  💀 The Dragon wins after ${newRound} rounds.`, "error"),
            L$1("  Tip: Use higher attack values next time!", "warn"),
            L$1("════════════════════════════════════════════", "border"),
            L$1(""),
            L$1("  Play again? [Y/N]:", "prompt")
          );
          setPhase("again");
        } else {
          push(L$1(`--- Round ${newRound + 1} ---`, "border"), L$1(`  Your HP: ${newHero}  |  Dragon HP: ${newDragon}`, "info"), L$1(""), L$1("  Your attack power (1-50):", "prompt"));
          return { ...s, heroHp: newHero, dragonHp: newDragon, round: newRound };
        }
        return { ...s, heroHp: newHero, dragonHp: newDragon, round: newRound };
      });
    } else if (phase === "again") {
      push(L$1(`  > ${cmd}`, "input"));
      if (cmd.toUpperCase() === "Y") setKey((k2) => k2 + 1);
      else {
        push(L$1("  See you next mission! 🚀", "success"));
        setPhase("done");
      }
    }
  };
  if (key > 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Day3Game, { color }, key);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalShell, { color, title: "⚔️ battle-calculator.py — Terminal", lines, input, onInput: setInput, onSubmit: submit, placeholder: phase === "name" ? "Enter hero name..." : "Enter attack power (1-50)", onReset: () => setKey((k2) => k2 + 1), disabled: phase === "done" });
}
const RPS_CHOICES = ["rock", "paper", "scissors"];
const RPS_ICONS = { rock: "✊", paper: "✋", scissors: "✌️" };
const RPS_WIN = (p2, c) => p2 === "rock" && c === "scissors" || p2 === "scissors" && c === "paper" || p2 === "paper" && c === "rock";
function Day4Game({ color }) {
  const [lines, setLines] = reactExports.useState([...BOOT$1("✊  ROCK PAPER SCISSORS DUEL", "Day 4"), L$1("  Enter your name:", "prompt")]);
  const [input, setInput] = reactExports.useState("");
  const [phase, setPhase] = reactExports.useState("name");
  const [st, setSt] = reactExports.useState({ name: "", ps: 0, cs: 0 });
  const [key, setKey] = reactExports.useState(0);
  const push = (...ls) => setLines((p2) => [...p2, ...ls]);
  const submit = () => {
    const cmd = input.trim();
    setInput("");
    if (phase === "name") {
      const n2 = cmd || "Player";
      push(
        L$1(`  > ${n2}`, "input"),
        L$1(""),
        L$1(`  First to 3 wins, ${n2}!`, "success"),
        L$1(""),
        L$1("  Choose [rock / paper / scissors]:", "prompt")
      );
      setSt((s) => ({ ...s, name: n2 }));
      setPhase("choose");
    } else if (phase === "choose") {
      const p2 = cmd.toLowerCase();
      if (!RPS_CHOICES.includes(p2)) {
        push(L$1(`  > ${cmd}`, "input"), L$1(`  ❌ Type: rock, paper, or scissors`, "error"));
        return;
      }
      const c = pick(RPS_CHOICES);
      push(L$1(`  > ${p2}`, "input"), L$1(""), L$1(`  ${RPS_ICONS[p2]} ${p2}  vs  ${RPS_ICONS[c]} ${c}`, "output"));
      setSt((s) => {
        let ps = s.ps, cs = s.cs;
        if (p2 === c) push(L$1("  ➖ TIE!", "warn"));
        else if (RPS_WIN(p2, c)) {
          ps++;
          push(L$1("  ✅ YOU WIN this round!", "success"));
        } else {
          cs++;
          push(L$1("  🤖 Computer wins this round!", "error"));
        }
        push(L$1(`  Score: ${s.name} ${ps}  —  Computer ${cs}`, "info"), L$1(""));
        const ns = { ...s, ps, cs };
        if (ps >= 3 || cs >= 3) {
          push(
            L$1("════════════════════════════════════════════", "border"),
            ps >= 3 ? L$1(`  🏆 ${s.name} is the CHAMPION!`, "title") : L$1("  🤖 Computer wins the duel!", "error"),
            L$1("════════════════════════════════════════════", "border"),
            L$1(""),
            L$1("  Play again? [Y/N]:", "prompt")
          );
          setPhase("again");
        } else push(L$1("  Choose [rock / paper / scissors]:", "prompt"));
        return ns;
      });
    } else if (phase === "again") {
      push(L$1(`  > ${cmd}`, "input"));
      if (cmd.toUpperCase() === "Y") setKey((k2) => k2 + 1);
      else {
        push(L$1("  See you next mission! 🚀", "success"));
        setPhase("done");
      }
    }
  };
  if (key > 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Day4Game, { color }, key);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalShell, { color, title: "✊ rock-paper-scissors.py — Terminal", lines, input, onInput: setInput, onSubmit: submit, placeholder: phase === "name" ? "Enter name..." : "rock / paper / scissors", onReset: () => setKey((k2) => k2 + 1), disabled: phase === "done" });
}
const BOOT = (title, sub) => [
  L$1("════════════════════════════════════════════", "border"),
  L$1(`   ${title}`, "title"),
  L$1(`   ASHRI Tech Game Academy — ${sub}`, "subtitle"),
  L$1("════════════════════════════════════════════", "border"),
  L$1("")
];
function Day5Game({ color }) {
  const canvasRef = reactExports.useRef(null);
  const gameRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  const keysRef = reactExports.useRef({});
  const [status, setStatus] = reactExports.useState("idle");
  const W2 = 380, H2 = 460, PW = 72, PH = 14;
  const BLOCKS = [
    { icon: "🟩", label: "Normal", pts: 10, life: 0, w: 36, h: 36 },
    { icon: "🥇", label: "Gold", pts: 30, life: 0, w: 36, h: 36 },
    { icon: "💎", label: "Diamond", pts: 60, life: 0, w: 36, h: 36 },
    { icon: "💣", label: "Bomb", pts: 0, life: -1, w: 36, h: 36 },
    { icon: "❤️", label: "Heart", pts: 0, life: 1, w: 36, h: 36 }
  ];
  const initGame = (hs = 0) => ({
    px: W2 / 2 - PW / 2,
    py: H2 - 40,
    pspeed: 7,
    blocks: [],
    score: 0,
    lives: 3,
    level: 1,
    caught: 0,
    spawnT: 0,
    spawnInterval: 60,
    fallSpeed: 2.2,
    frame: 0,
    hs
  });
  const spawnBlock = (g) => {
    const r2 = Math.random();
    let t2;
    if (r2 < 0.12) t2 = BLOCKS[3];
    else if (r2 < 0.18) t2 = BLOCKS[4];
    else if (r2 < 0.35) t2 = BLOCKS[2];
    else if (r2 < 0.55) t2 = BLOCKS[1];
    else t2 = BLOCKS[0];
    g.blocks.push({ x: rnd(20, W2 - 56), y: -40, type: t2 });
  };
  const drawGame = (ctx, g, stat) => {
    const grad = ctx.createLinearGradient(0, 0, 0, H2);
    grad.addColorStop(0, "#04080f");
    grad.addColorStop(1, "#060a18");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W2, H2);
    ctx.strokeStyle = "rgba(255,255,255,0.03)";
    ctx.lineWidth = 1;
    for (let x2 = 0; x2 < W2; x2 += 40) {
      ctx.beginPath();
      ctx.moveTo(x2, 0);
      ctx.lineTo(x2, H2);
      ctx.stroke();
    }
    ctx.font = "26px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    g.blocks.forEach((b) => {
      if (b.type.pts >= 30 || b.type.life > 0) {
        ctx.shadowColor = b.type.life > 0 ? "#ef4444" : b.type.pts >= 60 ? "#00f5ff" : "#f59e0b";
        ctx.shadowBlur = 10;
      }
      ctx.fillText(b.type.icon, b.x + 18, b.y + 18);
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
    });
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(g.px, g.py, PW, PH, 7);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
    ctx.fillStyle = `${color}60`;
    ctx.beginPath();
    ctx.roundRect(g.px + 4, g.py + 3, PW - 8, PH - 6, 4);
    ctx.fill();
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.font = "bold 14px Arial";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${g.score}`, 10, 8);
    let hx = 10;
    for (let i = 0; i < g.lives && i < 5; i++) {
      ctx.font = "14px Arial";
      ctx.fillText("❤️", hx, 28);
      hx += 22;
    }
    ctx.fillStyle = color;
    ctx.textAlign = "right";
    ctx.font = "bold 13px Arial";
    ctx.fillText(`Lv ${g.level}`, W2 - 10, 8);
    ctx.fillStyle = "#facc15";
    ctx.font = "11px Arial";
    ctx.fillText(`Best: ${g.hs}`, W2 - 10, 26);
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.fillText("🟩+10  🥇+30  💎+60  💣-life  ❤️+life", W2 / 2, H2 - 8);
    if (stat === "idle") {
      ctx.fillStyle = "rgba(0,0,0,0.62)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.font = "bold 28px Arial";
      ctx.fillText("🧱 FALLING BLOCKS", W2 / 2, H2 / 2 - 65);
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.fillText("Catch blocks, avoid 💣 bombs!", W2 / 2, H2 / 2 - 25);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "14px Arial";
      ctx.fillText("A/D  or  ← →  to move", W2 / 2, H2 / 2 + 10);
      ctx.fillStyle = color;
      ctx.font = "bold 16px Arial";
      ctx.fillText("Press ENTER or click Play", W2 / 2, H2 / 2 + 46);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.font = "12px Arial";
      ctx.fillText("Day 5 — Loops & Conditionals", W2 / 2, H2 / 2 + 72);
    }
    if (stat === "dead") {
      ctx.fillStyle = "rgba(0,0,0,0.72)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 32px Arial";
      ctx.fillText("GAME OVER", W2 / 2, H2 / 2 - 62);
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${g.score}`, W2 / 2, H2 / 2 - 20);
      ctx.fillStyle = "#facc15";
      ctx.font = "16px Arial";
      ctx.fillText(`Best: ${g.hs}`, W2 / 2, H2 / 2 + 12);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "14px Arial";
      ctx.fillText(`Blocks caught: ${g.caught}`, W2 / 2, H2 / 2 + 40);
      ctx.fillStyle = color;
      ctx.font = "bold 15px Arial";
      ctx.fillText("ENTER to play again", W2 / 2, H2 / 2 + 68);
    }
  };
  const startGame = () => {
    var _a;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const hs = ((_a = gameRef.current) == null ? void 0 : _a.hs) || 0;
    gameRef.current = initGame(hs);
    setStatus("playing");
    cancelAnimationFrame(rafRef.current);
    const loop = () => {
      const g = gameRef.current;
      g.frame++;
      const k2 = keysRef.current;
      if ((k2["ArrowLeft"] || k2["a"] || k2["A"]) && g.px > 0) g.px -= g.pspeed;
      if ((k2["ArrowRight"] || k2["d"] || k2["D"]) && g.px + PW < W2) g.px += g.pspeed;
      g.spawnT++;
      if (g.spawnT >= g.spawnInterval) {
        spawnBlock(g);
        g.spawnT = 0;
      }
      g.blocks.forEach((b) => {
        b.y += g.fallSpeed;
      });
      g.blocks.forEach((b) => {
        if (b.y + 18 >= g.py && b.y - 18 <= g.py + PH && b.x + 18 >= g.px && b.x - 18 <= g.px + PW) {
          b.caught = true;
          if (b.type.life < 0) g.lives = Math.max(0, g.lives + b.type.life);
          else if (b.type.life > 0) g.lives = Math.min(5, g.lives + b.type.life);
          else {
            g.score += b.type.pts * g.level;
            g.caught++;
            if (g.score > g.hs) g.hs = g.score;
          }
        }
      });
      g.blocks = g.blocks.filter((b) => !b.caught && b.y < H2 + 50);
      const lv = Math.floor(g.caught / 12) + 1;
      if (lv > g.level) {
        g.level = lv;
        g.fallSpeed = 2.2 + (lv - 1) * 0.35;
        g.spawnInterval = Math.max(25, 60 - (lv - 1) * 5);
      }
      const dead = g.lives <= 0;
      drawGame(ctx, g, dead ? "dead" : "playing");
      if (dead) {
        setStatus("dead");
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    gameRef.current = initGame(0);
    drawGame(canvas.getContext("2d"), gameRef.current, "idle");
    const onKey = (e) => {
      keysRef.current[e.key] = e.type === "keydown";
      if (e.type === "keydown" && e.key === "Enter") startGame();
    };
    canvas.addEventListener("keydown", onKey);
    canvas.addEventListener("keyup", onKey);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("keyup", onKey);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "canvas",
      {
        ref: canvasRef,
        width: W2,
        height: H2,
        tabIndex: 0,
        onClick: () => {
          var _a;
          return (_a = canvasRef.current) == null ? void 0 : _a.focus();
        },
        style: { borderRadius: 12, border: `2px solid ${color}40`, outline: "none", cursor: "pointer", display: "block" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
      [["◀ A", "ArrowLeft"], ["D ▶", "ArrowRight"]].map(([lbl, k2]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onMouseDown: () => {
            keysRef.current[k2] = true;
          },
          onMouseUp: () => {
            keysRef.current[k2] = false;
          },
          onTouchStart: (e) => {
            e.preventDefault();
            keysRef.current[k2] = true;
          },
          onTouchEnd: () => {
            keysRef.current[k2] = false;
          },
          style: { padding: "9px 24px", borderRadius: 8, border: `1px solid ${color}40`, background: `${color}15`, color, fontSize: 14, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, userSelect: "none" },
          children: lbl
        },
        k2
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: startGame,
          style: { padding: "9px 18px", borderRadius: 8, border: `1px solid ${color}50`, background: `${color}20`, color, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 },
          children: status === "idle" ? "▶ Play" : "↺ Restart"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: "Click canvas · A/D or ← → to move · ❤️ adds life · 💣 removes life" })
  ] });
}
function rateMs(ms) {
  if (ms < 150) return "LEGENDARY ⚡";
  if (ms < 250) return "EXCELLENT 🔥";
  if (ms < 400) return "GOOD 👍";
  if (ms < 600) return "AVERAGE 😐";
  return "KEEP TRAINING 💪";
}
function Day6Game({ color }) {
  const [lines, setLines] = reactExports.useState([...BOOT("⚡  REACTION SPEED TESTER", "Day 6"), L$1("  Your name:", "prompt")]);
  const [input, setInput] = reactExports.useState("");
  const [phase, setPhase] = reactExports.useState("name");
  const [st, setSt] = reactExports.useState({ name: "", round: 0, results: [] });
  const [key, setKey] = reactExports.useState(0);
  const signalRef = reactExports.useRef(null);
  const timerRef = reactExports.useRef(null);
  const push = (...ls) => setLines((p2) => [...p2, ...ls]);
  reactExports.useEffect(() => () => {
    clearTimeout(signalRef.current);
  }, []);
  const startReady = (state) => {
    const rnd2 = state.round + 1;
    push(L$1(`--- Round ${rnd2} / 3 ---`, "border"), L$1("  Get ready...", "output"));
    setPhase("waiting");
    const delay = 1500 + Math.random() * 2500;
    signalRef.current = setTimeout(() => {
      push(L$1(""), L$1("  ⚡⚡⚡  PRESS ENTER NOW!  ⚡⚡⚡", "title"));
      timerRef.current = Date.now();
      setPhase("react");
    }, delay);
  };
  const submit = () => {
    const cmd = input.trim();
    setInput("");
    if (phase === "name") {
      const n2 = cmd || "Player";
      push(L$1(`  > ${n2}`, "input"), L$1(""), L$1(`  3 rounds, ${n2}. React as fast as you can!`, "success"), L$1(""));
      setSt({ name: n2, round: 0, results: [] });
      push(L$1("  Press ENTER when ready for Round 1...", "prompt"));
      setPhase("ready");
    } else if (phase === "ready") {
      push(L$1(`  > [enter]`, "input"));
      startReady(st);
    } else if (phase === "waiting") {
      push(L$1(`  > ${cmd}`, "input"), L$1("  ⚠️  Too early! Wait for the signal.", "error"), L$1(""));
      clearTimeout(signalRef.current);
      setTimeout(() => startReady(st), 800);
    } else if (phase === "react") {
      const ms = Date.now() - timerRef.current;
      const rate = rateMs(ms);
      push(L$1(`  > [enter]`, "input"), L$1(`  Round ${st.round + 1}: ${ms}ms — ${rate}`, "success"), L$1(""));
      setSt((s) => {
        const results = [...s.results, ms];
        const ns = { ...s, round: s.round + 1, results };
        if (ns.round >= 3) {
          const best = Math.min(...results), worst = Math.max(...results);
          const avg = Math.round(results.reduce((a, b) => a + b, 0) / results.length);
          push(
            L$1("════════════════════════════════════════════", "border"),
            L$1(`  Results for ${s.name}:`, "title"),
            L$1(`    Best    : ${best}ms  — ${rateMs(best)}`, "success"),
            L$1(`    Worst   : ${worst}ms`, "info"),
            L$1(`    Average : ${avg}ms  — ${rateMs(avg)}`, "info"),
            L$1("════════════════════════════════════════════", "border"),
            L$1(""),
            L$1("  Play again? [Y/N]:", "prompt")
          );
          setPhase("again");
        } else {
          push(L$1(`  Press ENTER for Round ${ns.round + 1}...`, "prompt"));
          setPhase("ready");
        }
        return ns;
      });
    } else if (phase === "again") {
      push(L$1(`  > ${cmd}`, "input"));
      cmd.toUpperCase() === "Y" ? setKey((k2) => k2 + 1) : (push(L$1("  See you next mission! 🚀", "success")), setPhase("done"));
    }
  };
  if (key > 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Day6Game, { color }, key);
  const ph2 = { name: "Enter name...", ready: "Press ENTER to start round...", waiting: "Waiting for signal...", react: "PRESS ENTER!", again: "Y or N" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalShell, { color, title: "⚡ reaction-game.py — Terminal", lines, input, onInput: setInput, onSubmit: submit, placeholder: ph2[phase] || "...", onReset: () => setKey((k2) => k2 + 1), disabled: phase === "done" });
}
const SN_GRID = 12;
const SN_DIR = { W: [0, -1], S: [0, 1], A: [-1, 0], D: [1, 0] };
function newFood(snake) {
  while (true) {
    const p2 = [rnd(1, SN_GRID - 2), rnd(1, SN_GRID - 2)];
    if (!snake.find((s) => s[0] === p2[0] && s[1] === p2[1])) return p2;
  }
}
function drawGrid(snake, food) {
  const SN_EMPTY = "  ", SN_WALL = "██", SN_BODY = "🟩", SN_HEAD = "🐍", SN_FOOD = "🍎";
  const rows = [];
  for (let r2 = 0; r2 < SN_GRID; r2++) {
    let line = "";
    for (let c = 0; c < SN_GRID; c++) {
      if (r2 === 0 || r2 === SN_GRID - 1 || c === 0 || c === SN_GRID - 1) line += SN_WALL;
      else if (c === snake[0][0] && r2 === snake[0][1]) line += SN_HEAD;
      else if (snake.find((s) => s[0] === c && s[1] === r2)) line += SN_BODY;
      else if (c === food[0] && r2 === food[1]) line += SN_FOOD;
      else line += SN_EMPTY;
    }
    rows.push(L$1("  " + line, "maze"));
  }
  return rows;
}
function Day7Game({ color }) {
  const [key, setKey] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Day7Inner, { color, onReset: () => setKey((k2) => k2 + 1) }, key);
}
function Day7Inner({ color, onReset }) {
  const initSnake = [[6, 6], [5, 6], [4, 6]];
  const initFood = newFood(initSnake);
  const [lines, setLines] = reactExports.useState([
    ...BOOT("🐍  SNAKE LITE", "Day 7"),
    L$1("  Player name:", "prompt")
  ]);
  const [input, setInput] = reactExports.useState("");
  const [phase, setPhase] = reactExports.useState("name");
  const [snake, setSnake] = reactExports.useState(initSnake);
  const [food, setFood] = reactExports.useState(initFood);
  const [score, setScore] = reactExports.useState(0);
  const [name, setName] = reactExports.useState("");
  const push = (...ls) => setLines((p2) => [...p2, ...ls]);
  const showGrid = (sn, fd2) => push(...drawGrid(sn, fd2));
  const submit = () => {
    const cmd = input.trim().toUpperCase();
    setInput("");
    if (phase === "name") {
      const n2 = input.trim() || "Player";
      setName(n2);
      push(
        L$1(`  > ${n2}`, "input"),
        L$1(""),
        L$1(`  Control ${n2}'s snake — eat 🍎 to grow!`, "success"),
        L$1("  W=Up  S=Down  A=Left  D=Right  Q=Quit", "info"),
        L$1("")
      );
      showGrid(snake, food);
      push(L$1(`  Length: ${snake.length}  Score: 0`, "info"), L$1("  Move [W/A/S/D] or Q:", "prompt"));
      setPhase("play");
      return;
    }
    if (phase !== "play") return;
    push(L$1(`  > ${cmd}`, "input"));
    if (cmd === "Q") {
      push(L$1(`  ${name} quit! Score: ${score}`, "warn"));
      setPhase("done");
      return;
    }
    if (!SN_DIR[cmd]) {
      push(L$1("  ❌ Use W A S D to move.", "error"), L$1("  Move [W/A/S/D] or Q:", "prompt"));
      return;
    }
    const [dx, dy] = SN_DIR[cmd];
    const [hx, hy] = snake[0];
    const nx = hx + dx, ny = hy + dy;
    if (nx <= 0 || nx >= SN_GRID - 1 || ny <= 0 || ny >= SN_GRID - 1) {
      push(L$1("  💥 Hit the wall! Game over.", "error"), L$1(`  Final score: ${score}`, "info"), L$1("  Play again? [Y/N]:", "prompt"));
      setPhase("again");
      return;
    }
    if (snake.find((s) => s[0] === nx && s[1] === ny)) {
      push(L$1("  💥 Hit yourself! Game over.", "error"), L$1(`  Final score: ${score}`, "info"), L$1("  Play again? [Y/N]:", "prompt"));
      setPhase("again");
      return;
    }
    const newHead = [nx, ny];
    let nSnake, nfood = food, nScore = score;
    if (nx === food[0] && ny === food[1]) {
      nSnake = [newHead, ...snake];
      nScore += 10;
      nfood = newFood(nSnake);
      push(L$1(`  🍎 Ate food! Score: ${nScore} | Length: ${nSnake.length}`, "success"));
      setFood(nfood);
    } else {
      nSnake = [newHead, ...snake.slice(0, -1)];
    }
    setSnake(nSnake);
    setScore(nScore);
    showGrid(nSnake, nfood);
    push(L$1(`  Length: ${nSnake.length}  Score: ${nScore}`, "info"), L$1("  Move [W/A/S/D] or Q:", "prompt"));
    if (nScore >= 100) {
      push(L$1(`  🏆 ${name} reached 100 points! WINNER!`, "title"), L$1("  Play again? [Y/N]:", "prompt"));
      setPhase("again");
    }
  };
  if (phase === "again") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalShell, { color, title: "🐍 snake-lite.py — Terminal", lines, input, onInput: (v2) => setInput(v2), onSubmit: () => {
      const c = input.trim();
      setInput("");
      if (c.toUpperCase() === "Y") onReset();
      else {
        setLines((p2) => [...p2, L$1("  See you next mission! 🚀", "success")]);
        setPhase("done");
      }
    }, placeholder: "Y or N", onReset, disabled: false });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalShell, { color, title: "🐍 snake-lite.py — Terminal", lines, input, onInput: setInput, onSubmit: submit, placeholder: phase === "name" ? "Enter name..." : "W/A/S/D to move, Q to quit", onReset, disabled: phase === "done" });
}
function Day9Game({ color }) {
  const cvRef = reactExports.useRef(null), rafRef = reactExports.useRef(null), kRef = reactExports.useRef({});
  const [started, setStarted] = reactExports.useState(false);
  const W2 = 380, H2 = 420;
  const drawScene = (ctx, bx2, by2, fr, overlay) => {
    ctx.fillStyle = "#04080f";
    ctx.fillRect(0, 0, W2, H2);
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.2 + i * 37 % 5 / 15})`;
      ctx.fillRect(i * 127 % W2, i * 83 % H2, 1, 1);
    }
    ctx.fillStyle = "rgba(0,200,255,0.85)";
    ctx.fillRect(40, 60, 70, 70);
    ctx.fillStyle = "rgba(255,107,0,0.85)";
    ctx.beginPath();
    ctx.arc(W2 / 2, 80, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(34,197,94,0.85)";
    ctx.beginPath();
    ctx.moveTo(W2 - 80, 50);
    ctx.lineTo(W2 - 110, 110);
    ctx.lineTo(W2 - 50, 110);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(W2, H2);
    ctx.stroke();
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.fillStyle = color;
    ctx.fillRect(bx2, by2, 40, 40);
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.font = "10px monospace";
    ctx.textAlign = "left";
    ctx.fillText("pygame.draw.rect", 44, 140);
    ctx.fillText("pygame.draw.circle", W2 / 2 - 42, 125);
    ctx.fillText("pygame.draw.polygon", W2 - 115, 130);
    ctx.fillStyle = color;
    ctx.fillText("← YOU (arrow keys)", bx2 + 42, by2 + 26);
    if (overlay) {
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.font = "bold 24px Arial";
      ctx.fillText("🪟 WINDOW BUILDER", W2 / 2, H2 / 2 - 50);
      ctx.fillStyle = "white";
      ctx.font = "15px Arial";
      ctx.fillText("See all Pygame drawing commands!", W2 / 2, H2 / 2 - 12);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "13px Arial";
      ctx.fillText("Arrow Keys / WASD to move the box", W2 / 2, H2 / 2 + 18);
      ctx.fillStyle = color;
      ctx.font = "bold 15px Arial";
      ctx.fillText("Press ENTER or click Play ▶", W2 / 2, H2 / 2 + 50);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = "11px Arial";
      ctx.fillText("Day 9 — Pygame Foundations", W2 / 2, H2 / 2 + 76);
    }
  };
  reactExports.useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    drawScene(ctx, W2 / 2 - 20, H2 / 2 - 20, 0, true);
    let lbx = W2 / 2 - 20, lby = H2 / 2 - 20, lf2 = 0, running = false;
    const onKey = (e) => {
      kRef.current[e.key] = e.type === "keydown";
      if (e.type === "keydown" && e.key === "Enter") {
        running = true;
        setStarted(true);
      }
    };
    cv.addEventListener("keydown", onKey);
    cv.addEventListener("keyup", onKey);
    const loop = () => {
      if (running) {
        const k2 = kRef.current;
        if ((k2["ArrowLeft"] || k2["a"] || k2["A"]) && lbx > 0) lbx -= 4;
        if ((k2["ArrowRight"] || k2["d"] || k2["D"]) && lbx < W2 - 40) lbx += 4;
        if ((k2["ArrowUp"] || k2["w"] || k2["W"]) && lby > 0) lby -= 4;
        if ((k2["ArrowDown"] || k2["s"] || k2["S"]) && lby < H2 - 40) lby += 4;
        lf2++;
        drawScene(ctx, lbx, lby, lf2, false);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      cv.removeEventListener("keydown", onKey);
      cv.removeEventListener("keyup", onKey);
    };
  }, []);
  const startGame = () => {
    var _a;
    setStarted(true);
    (_a = cvRef.current) == null ? void 0 : _a.focus();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: cvRef, width: W2, height: H2, tabIndex: 0, onClick: startGame, style: { borderRadius: 12, border: `2px solid ${color}40`, outline: "none", cursor: "crosshair", display: "block" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }, children: [
      [["▲", "ArrowUp"], ["◀", "ArrowLeft"], ["▼", "ArrowDown"], ["▶", "ArrowRight"]].map(([l2, k2]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onMouseDown: () => {
        kRef.current[k2] = true;
        setStarted(true);
      }, onMouseUp: () => {
        kRef.current[k2] = false;
      }, style: { padding: "6px 12px", borderRadius: 8, border: `1px solid ${color}40`, background: `${color}15`, color, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }, children: l2 }, k2)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: startGame, style: { padding: "6px 14px", borderRadius: 8, border: `1px solid ${color}40`, background: `${color}25`, color, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }, children: started ? "↺ Reset" : "▶ Play" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: "Arrow Keys / WASD — move the glowing box!" })
  ] });
}
function Day8Game({ color }) {
  const cvRef = reactExports.useRef(null), gRef = reactExports.useRef(null), rafRef = reactExports.useRef(null), kRef = reactExports.useRef({});
  const [st, setSt] = reactExports.useState("idle");
  const W2 = 380, H2 = 460, PW = 48, PH = 48;
  const init = (hs = 0) => ({ px: W2 / 2 - PW / 2, py: H2 - 80, spd: 5, meteors: [], score: 0, lives: 3, spawnT: 0, spawnI: 80, mspd: 2, frame: 0, hs, survived: 0 });
  const spawn = (g) => {
    const sizes = [{ r: 14, pts: 0, dmg: 1 }, { r: 20, pts: 0, dmg: 1 }, { r: 28, pts: 0, dmg: 2 }];
    const s = sizes[Math.floor(Math.random() * sizes.length)];
    g.meteors.push({ x: rnd(s.r, W2 - s.r), y: -s.r * 2, vy: g.mspd + Math.random() * 1.5, vx: (Math.random() - 0.5) * 1.5, ...s });
  };
  const draw = (ctx, g, stat) => {
    const grad = ctx.createLinearGradient(0, 0, 0, H2);
    grad.addColorStop(0, "#04080f");
    grad.addColorStop(1, "#08051a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W2, H2);
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(255,255,255,${i * 37 % 5 / 30})`;
      ctx.fillRect(i * 127 % W2, (i * 83 + g.frame / 5) % H2, 1, 1);
    }
    g.meteors.forEach((m2) => {
      const grad2 = ctx.createRadialGradient(m2.x, m2.y, 0, m2.x, m2.y, m2.r);
      grad2.addColorStop(0, "#ef4444");
      grad2.addColorStop(0.6, "#b91c1c");
      grad2.addColorStop(1, "#450a0a");
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(m2.x, m2.y, m2.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#fca5a5";
      ctx.lineWidth = 1;
      ctx.stroke();
    });
    const px = g.px, py = g.py;
    ctx.shadowColor = color;
    ctx.shadowBlur = 16;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(px + PW / 2, py);
    ctx.lineTo(px + 4, py + PH);
    ctx.lineTo(px + PW - 4, py + PH);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.ellipse(px + PW / 2, py + PH / 2, 8, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "white";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${g.score}`, 10, 8);
    ctx.fillStyle = "#ef4444";
    ctx.fillText("❤️".repeat(g.lives), 10, 28);
    ctx.fillStyle = color;
    ctx.textAlign = "right";
    ctx.fillText(`Best: ${g.hs}`, W2 - 10, 8);
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "11px Arial";
    ctx.fillText(`Survived: ${g.survived}s`, W2 - 10, 26);
    if (stat === "idle") {
      ctx.fillStyle = "rgba(0,0,0,0.62)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;
      ctx.font = "bold 28px Arial";
      ctx.fillText("☄️ METEOR DODGE", W2 / 2, H2 / 2 - 65);
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.fillText("Dodge ALL meteors to survive!", W2 / 2, H2 / 2 - 25);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "14px Arial";
      ctx.fillText("W/A/S/D  or  Arrow Keys to move", W2 / 2, H2 / 2 + 10);
      ctx.fillStyle = color;
      ctx.font = "bold 16px Arial";
      ctx.fillText("Press ENTER to Play", W2 / 2, H2 / 2 + 46);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.font = "12px Arial";
      ctx.fillText("Day 8 — Random & Collision Logic", W2 / 2, H2 / 2 + 72);
    }
    if (stat === "dead") {
      ctx.fillStyle = "rgba(0,0,0,0.72)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 32px Arial";
      ctx.fillText("SHIP DESTROYED", W2 / 2, H2 / 2 - 62);
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${g.score}`, W2 / 2, H2 / 2 - 20);
      ctx.fillStyle = "#facc15";
      ctx.font = "16px Arial";
      ctx.fillText(`Best: ${g.hs}`, W2 / 2, H2 / 2 + 12);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "14px Arial";
      ctx.fillText(`Survived: ${g.survived}s`, W2 / 2, H2 / 2 + 40);
      ctx.fillStyle = color;
      ctx.font = "bold 15px Arial";
      ctx.fillText("ENTER to play again", W2 / 2, H2 / 2 + 68);
    }
  };
  const start = () => {
    var _a;
    const canvas = cvRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const hs = ((_a = gRef.current) == null ? void 0 : _a.hs) || 0;
    gRef.current = init(hs);
    setSt("playing");
    cancelAnimationFrame(rafRef.current);
    let lastSec = Date.now();
    const loop = () => {
      const g = gRef.current;
      g.frame++;
      const k2 = kRef.current;
      if ((k2["a"] || k2["A"] || k2["ArrowLeft"]) && g.px > 0) g.px -= g.spd;
      if ((k2["d"] || k2["D"] || k2["ArrowRight"]) && g.px + PW < W2) g.px += g.spd;
      if ((k2["w"] || k2["W"] || k2["ArrowUp"]) && g.py > 0) g.py -= g.spd;
      if ((k2["s"] || k2["S"] || k2["ArrowDown"]) && g.py + PH < H2) g.py += g.spd;
      if (Date.now() - lastSec >= 1e3) {
        g.survived++;
        g.score += 10 * g.survived;
        if (g.score > g.hs) g.hs = g.score;
        lastSec = Date.now();
      }
      g.spawnT++;
      if (g.spawnT >= g.spawnI) {
        spawn(g);
        g.spawnT = 0;
        g.spawnI = Math.max(30, 80 - g.survived * 3);
        g.mspd = 2 + g.survived * 0.08;
      }
      g.meteors.forEach((m2) => {
        m2.y += m2.vy;
        m2.x += m2.vx;
      });
      g.meteors.forEach((m2) => {
        const dx = m2.x - (g.px + PW / 2), dy = m2.y - (g.py + PH / 2);
        if (Math.sqrt(dx * dx + dy * dy) < m2.r + 18) {
          m2.hit = true;
          g.lives = Math.max(0, g.lives - m2.dmg);
        }
      });
      g.meteors = g.meteors.filter((m2) => !m2.hit && m2.y < H2 + 50);
      const dead = g.lives <= 0;
      draw(ctx, g, dead ? "dead" : "playing");
      if (dead) {
        setSt("dead");
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };
  reactExports.useEffect(() => {
    const canvas = cvRef.current;
    if (!canvas) return;
    gRef.current = init(0);
    draw(canvas.getContext("2d"), gRef.current, "idle");
    const onKey = (e) => {
      kRef.current[e.key] = e.type === "keydown";
      if (e.type === "keydown" && e.key === "Enter") start();
    };
    canvas.addEventListener("keydown", onKey);
    canvas.addEventListener("keyup", onKey);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("keyup", onKey);
    };
  }, []);
  const btnStyle = (bg2) => ({ padding: "8px 14px", borderRadius: 8, border: `1px solid ${color}40`, background: bg2, color, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, userSelect: "none" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: cvRef, width: W2, height: H2, tabIndex: 0, onClick: () => {
      var _a;
      return (_a = cvRef.current) == null ? void 0 : _a.focus();
    }, style: { borderRadius: 12, border: `2px solid ${color}40`, outline: "none", cursor: "crosshair", display: "block" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }, children: [
      [["▲", "ArrowUp"], ["◀", "ArrowLeft"], ["▼", "ArrowDown"], ["▶", "ArrowRight"]].map(([l2, k2]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onMouseDown: () => {
        kRef.current[k2] = true;
      }, onMouseUp: () => {
        kRef.current[k2] = false;
      }, style: btnStyle(`${color}15`), children: l2 }, k2)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: start, style: btnStyle(`${color}25`), children: st === "idle" ? "▶ Play" : "↺ Restart" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: "Click canvas · WASD or Arrows to dodge · survive as long as possible!" })
  ] });
}
function Day10Game({ color }) {
  const canvasRef = reactExports.useRef(null), stateRef = reactExports.useRef(null), rafRef = reactExports.useRef(null);
  const [status, setStatus] = reactExports.useState("idle");
  const W2 = 380, H2 = 420, GAP = 130, PIPE_W = 52, SPEED = 2.8, GRAVITY = 0.38, JUMP = -7.5;
  const initState = () => {
    var _a;
    return { by: H2 / 2, bv: 0, pipes: [{ x: W2 + 80, gy: rnd(120, H2 - 150) }], score: 0, hs: ((_a = stateRef.current) == null ? void 0 : _a.hs) || 0, frame: 0 };
  };
  const draw = (ctx, s, status2) => {
    ctx.fillStyle = "#04080f";
    ctx.fillRect(0, 0, W2, H2);
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.arc(i * 97 % W2, i * 73 % H2, 1, 0, Math.PI * 2);
      ctx.fill();
    }
    s.pipes.forEach((p2) => {
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(p2.x, 0, PIPE_W, p2.gy - GAP / 2);
      ctx.fillRect(p2.x, p2.gy + GAP / 2, PIPE_W, H2);
      ctx.fillStyle = "#16a34a";
      ctx.fillRect(p2.x - 4, p2.gy - GAP / 2 - 18, PIPE_W + 8, 18);
      ctx.fillRect(p2.x - 4, p2.gy + GAP / 2, PIPE_W + 8, 18);
    });
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(80, s.by, 18, 13, Math.atan2(s.bv, 10), 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(90, s.by - 4, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#060a12";
    ctx.beginPath();
    ctx.arc(92, s.by - 4, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    ctx.fillText(s.score, W2 / 2, 36);
    if (s.hs > 0) {
      ctx.font = "13px Arial";
      ctx.fillStyle = "#facc15";
      ctx.fillText(`Best: ${s.hs}`, W2 - 50, 20);
    }
    if (status2 === "idle") {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.fillStyle = color;
      ctx.font = "bold 28px Arial";
      ctx.textAlign = "center";
      ctx.fillText("FLAPPY BIRD", W2 / 2, H2 / 2 - 40);
      ctx.fillStyle = "white";
      ctx.font = "18px Arial";
      ctx.fillText("SPACE or tap to flap", W2 / 2, H2 / 2);
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = "13px Arial";
      ctx.fillText("Day 9 — Pygame in the browser!", W2 / 2, H2 / 2 + 28);
    }
    if (status2 === "dead") {
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 30px Arial";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", W2 / 2, H2 / 2 - 50);
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${s.score}`, W2 / 2, H2 / 2 - 10);
      ctx.fillStyle = "#facc15";
      ctx.font = "16px Arial";
      ctx.fillText(`Best: ${s.hs}`, W2 / 2, H2 / 2 + 20);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "15px Arial";
      ctx.fillText("SPACE to play again", W2 / 2, H2 / 2 + 52);
    }
  };
  const startGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    stateRef.current = { ...initState() };
    setStatus("playing");
    cancelAnimationFrame(rafRef.current);
    const loop = () => {
      const s = stateRef.current;
      s.bv += GRAVITY;
      s.by += s.bv;
      s.frame++;
      s.pipes.forEach((p2) => {
        p2.x -= SPEED;
      });
      if (s.pipes[s.pipes.length - 1].x < W2 - 220) s.pipes.push({ x: W2 + 30, gy: rnd(120, H2 - 150) });
      s.pipes = s.pipes.filter((p2) => p2.x > -PIPE_W);
      s.pipes.forEach((p2) => {
        if (!p2.passed && p2.x + PIPE_W < 80) {
          p2.passed = true;
          s.score++;
          if (s.score > s.hs) s.hs = s.score;
        }
      });
      const dead = s.by > H2 - 15 || s.by < 0 || s.pipes.some((p2) => 80 + 16 > p2.x && 80 - 16 < p2.x + PIPE_W && (s.by - 11 < p2.gy - GAP / 2 || s.by + 11 > p2.gy + GAP / 2));
      draw(ctx, s, dead ? "dead" : "playing");
      if (dead) {
        setStatus("dead");
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };
  const handleInput = (e) => {
    if (e.type === "keydown" && e.code !== "Space") return;
    e.preventDefault();
    if (status === "idle" || status === "dead") {
      startGame();
      return;
    }
    if (stateRef.current) stateRef.current.bv = JUMP;
  };
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    stateRef.current = initState();
    draw(canvas.getContext("2d"), stateRef.current, "idle");
    const ok2 = (e) => {
      if (e.type === "keydown" && e.code !== "Space") return;
      e.preventDefault();
      if (status === "idle" || status === "dead") startGame();
      else if (stateRef.current) stateRef.current.bv = JUMP;
    };
    canvas.addEventListener("keydown", ok2);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("keydown", ok2);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, width: W2, height: H2, tabIndex: 0, onClick: handleInput, onKeyDown: handleInput, style: { borderRadius: 12, border: `2px solid ${color}40`, outline: "none", cursor: "pointer", display: "block" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onMouseDown: (e) => {
        e.preventDefault();
        if (stateRef.current) stateRef.current.bv = JUMP;
      }, style: { padding: "8px 20px", borderRadius: 8, border: `1px solid ${color}50`, background: `${color}15`, color, fontSize: 14, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }, children: "🐦 FLAP" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onMouseDown: () => {
        var _a;
        cancelAnimationFrame(rafRef.current);
        const cv = canvasRef.current;
        const ctx = cv == null ? void 0 : cv.getContext("2d");
        stateRef.current = { ...initState(), hs: ((_a = stateRef.current) == null ? void 0 : _a.hs) || 0 };
        if (ctx) draw(ctx, stateRef.current, "idle");
        setStatus("idle");
      }, style: { padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)", fontSize: 14, cursor: "pointer", fontFamily: "inherit" }, children: "↺ Reset" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: "SPACE / Click / Tap to flap" })
  ] });
}
function SpaceShooterGame({ color }) {
  const canvasRef = reactExports.useRef(null), gameRef = reactExports.useRef(null), rafRef = reactExports.useRef(null), keysRef = reactExports.useRef({});
  const [status, setStatus] = reactExports.useState("idle");
  const W2 = 380, H2 = 460;
  const initGame = (hs = 0) => ({ player: { x: W2 / 2 - 20, y: H2 - 80, w: 40, h: 50 }, bullets: [], enemies: [], score: 0, lives: 3, hs, shootCd: 0, spawnT: 0, frame: 0 });
  const drawGame = (ctx, g, stat) => {
    const grad = ctx.createLinearGradient(0, 0, 0, H2);
    grad.addColorStop(0, "#04080f");
    grad.addColorStop(1, "#060a18");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W2, H2);
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.1 + i * 37 % 5 / 20})`;
      ctx.fillRect(i * 127 % W2, (i * 83 + g.frame / 3) % H2, 1, 1);
    }
    g.bullets.forEach((b) => {
      ctx.fillStyle = "#86efac";
      ctx.fillRect(b.x, b.y, 4, 12);
    });
    g.enemies.forEach((e) => {
      const ec2 = ["#ef4444", "#f59e0b", "#8b5cf6"][Math.min(e.tier - 1, 2)];
      ctx.fillStyle = ec2;
      ctx.beginPath();
      ctx.roundRect(e.x, e.y, e.w, e.h, 6);
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.font = "bold 11px Arial";
      ctx.textAlign = "center";
      ctx.fillText(e.tier, e.x + e.w / 2, e.y + e.h / 2 + 4);
    });
    const p2 = g.player;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(p2.x + p2.w / 2, p2.y);
    ctx.lineTo(p2.x + 6, p2.y + p2.h);
    ctx.lineTo(p2.x + p2.w - 6, p2.y + p2.h);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${g.score}`, 10, 8);
    ctx.fillStyle = "#ef4444";
    ctx.fillText("❤️".repeat(g.lives), 10, 28);
    ctx.fillStyle = "#facc15";
    ctx.font = "12px Arial";
    ctx.textAlign = "right";
    ctx.fillText(`Best: ${g.hs}`, W2 - 10, 8);
    const overlay = (txt1, c1, txt2, hint) => {
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = c1;
      ctx.font = "bold 26px Arial";
      ctx.fillText(txt1, W2 / 2, H2 / 2 - 50);
      ctx.fillStyle = "white";
      ctx.font = "17px Arial";
      ctx.fillText(txt2, W2 / 2, H2 / 2);
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.font = "14px Arial";
      ctx.fillText(hint, W2 / 2, H2 / 2 + 30);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = "12px Arial";
      ctx.fillText("Day 10 — Flappy Bird | Physics + Collision", W2 / 2, H2 / 2 + 56);
    };
    if (stat === "idle") overlay("SPACE SHOOTER", color, "WASD to move  SPACE to shoot", "Press ENTER to Launch");
    if (stat === "dead") {
      ctx.fillStyle = "rgba(0,0,0,0.65)";
      ctx.fillRect(0, 0, W2, H2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 28px Arial";
      ctx.fillText("GAME OVER", W2 / 2, H2 / 2 - 50);
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${g.score}`, W2 / 2, H2 / 2 - 10);
      ctx.fillStyle = "#facc15";
      ctx.font = "16px Arial";
      ctx.fillText(`Best: ${g.hs}`, W2 / 2, H2 / 2 + 20);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "14px Arial";
      ctx.fillText("ENTER to play again", W2 / 2, H2 / 2 + 52);
    }
  };
  const startGame = () => {
    var _a;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const hs = ((_a = gameRef.current) == null ? void 0 : _a.hs) || 0;
    gameRef.current = initGame(hs);
    setStatus("playing");
    cancelAnimationFrame(rafRef.current);
    const loop = () => {
      const g = gameRef.current;
      g.frame++;
      const k2 = keysRef.current, p2 = g.player;
      if ((k2["a"] || k2["A"]) && p2.x > 0) p2.x -= 5;
      if ((k2["d"] || k2["D"]) && p2.x + p2.w < W2) p2.x += 5;
      if ((k2["w"] || k2["W"]) && p2.y > H2 / 2) p2.y -= 5;
      if ((k2["s"] || k2["S"]) && p2.y + p2.h < H2) p2.y += 5;
      g.shootCd = Math.max(0, g.shootCd - 1);
      if ((k2[" "] || k2["Space"]) && g.shootCd === 0) {
        g.bullets.push({ x: p2.x + p2.w / 2 - 2, y: p2.y - 10 });
        g.shootCd = 12;
      }
      g.bullets.forEach((b) => b.y -= 13);
      g.bullets = g.bullets.filter((b) => b.y > 0);
      g.spawnT++;
      const interval = Math.max(35, 75 - g.score / 50);
      if (g.spawnT >= interval) {
        const tier = 1 + Math.floor(g.score / 200);
        g.enemies.push({ x: rnd(10, W2 - 50), y: -40, w: 40, h: 36, speed: 2 + Math.floor(g.score / 100), tier, hp: tier });
        g.spawnT = 0;
      }
      g.enemies.forEach((e) => e.y += e.speed);
      g.enemies = g.enemies.filter((e) => {
        if (e.y > H2) {
          g.lives--;
          return false;
        }
        return true;
      });
      g.bullets.forEach((b) => {
        g.enemies.forEach((e) => {
          if (b.x > e.x && b.x < e.x + e.w && b.y > e.y && b.y < e.y + e.h) {
            e.hp--;
            b.done = true;
            if (e.hp <= 0) {
              e.dead = true;
              g.score += 10 * e.tier;
              if (g.score > g.hs) g.hs = g.score;
            }
          }
        });
      });
      g.bullets = g.bullets.filter((b) => !b.done);
      g.enemies = g.enemies.filter((e) => !e.dead);
      const dead = g.lives <= 0;
      drawGame(ctx, g, dead ? "dead" : "playing");
      if (dead) {
        setStatus("dead");
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    gameRef.current = initGame(0);
    drawGame(canvas.getContext("2d"), gameRef.current, "idle");
    const onKey = (e) => {
      keysRef.current[e.key] = e.type === "keydown";
      if (e.code === "Space") e.preventDefault();
      if (e.type === "keydown" && e.key === "Enter") startGame();
    };
    canvas.addEventListener("keydown", onKey);
    canvas.addEventListener("keyup", onKey);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("keyup", onKey);
    };
  }, []);
  const bs = (extra = {}) => ({ padding: "6px 12px", borderRadius: 8, border: `1px solid ${color}40`, background: `${color}15`, color, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, userSelect: "none", ...extra });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, width: W2, height: H2, tabIndex: 0, onClick: () => {
      var _a;
      return (_a = canvasRef.current) == null ? void 0 : _a.focus();
    }, style: { borderRadius: 12, border: `2px solid ${color}40`, outline: "none", cursor: "crosshair", display: "block" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }, children: [
      [["◀ A", "a"], ["▲ W", "w"], ["▼ S", "s"], ["D ▶", "d"]].map(([l2, k2]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onMouseDown: () => {
        keysRef.current[k2] = true;
      }, onMouseUp: () => {
        keysRef.current[k2] = false;
      }, style: bs(), children: l2 }, k2)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onMouseDown: () => {
        keysRef.current[" "] = true;
      }, onMouseUp: () => {
        keysRef.current[" "] = false;
      }, style: bs({ background: `${color}25`, border: `1px solid ${color}60` }), children: "🔫 SHOOT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: startGame, style: bs({ background: `${color}20` }), children: status === "idle" ? "▶ Launch" : "↺ Restart" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 12 }, children: "Click canvas · WASD to move · SPACE to shoot" })
  ] });
}
function Day11Game({ color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SpaceShooterGame, { color });
}
function Day12Game({ color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SpaceShooterGame, { color });
}
const MAZE_TEMPLATE = [
  "###########",
  "#R   # G  #",
  "# # # ### #",
  "# #   #   #",
  "# ##### # #",
  "#       # #",
  "# ##### # #",
  "#   #     #",
  "###########"
];
const MOVES_LIMIT = 30;
const GOAL_X = 7, GOAL_Y = 1;
const START_X = 1, START_Y = 1;
const DIR = { N: [0, -1], S: [0, 1], E: [1, 0], W: [-1, 0] };
const DN = { N: "North ↑", S: "South ↓", E: "East →", W: "West ←" };
const L = (s, t2 = "output") => ({ s, t: t2 });
function isWall(x2, y2) {
  const r2 = MAZE_TEMPLATE[y2];
  return !r2 || x2 < 0 || x2 >= r2.length || r2[x2] === "#";
}
function renderMaze(rx, ry) {
  return MAZE_TEMPLATE.map((row, ry2) => {
    let l2 = "";
    for (let cx = 0; cx < row.length; cx++) {
      const c = row[cx];
      l2 += cx === rx && ry2 === ry ? "🤖" : c === "G" ? "🚪" : c === "#" ? "██" : "  ";
    }
    return L("  " + l2, "maze");
  });
}
function dist(x2, y2) {
  return Math.abs(x2 - GOAL_X) + Math.abs(y2 - GOAL_Y);
}
function TerminalRobotMaze({ color }) {
  const [lines, setLines] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [robotX, setRobotX] = reactExports.useState(START_X);
  const [robotY, setRobotY] = reactExports.useState(START_Y);
  const [moves, setMoves] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("name");
  const [playerName, setPlayerName] = reactExports.useState("");
  const [gameKey, setGameKey] = reactExports.useState(0);
  const outRef = reactExports.useRef(null);
  const inRef = reactExports.useRef(null);
  const push = (...ls) => setLines((p2) => [...p2, ...ls]);
  reactExports.useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [lines]);
  reactExports.useEffect(() => {
    var _a;
    (_a = inRef.current) == null ? void 0 : _a.focus();
  }, [phase, gameKey]);
  reactExports.useEffect(() => {
    setLines([L("════════════════════════════════════════════", "border"), L("   🤖  ROBOT MAZE EXPLORER", "title"), L("   ASHRI Tech Game Academy — Day 1", "subtitle"), L("════════════════════════════════════════════", "border"), L("")]);
    setPhase("name");
    setRobotX(START_X);
    setRobotY(START_Y);
    setMoves(0);
    setInput("");
  }, [gameKey]);
  const pushMaze = (rx, ry) => push(...renderMaze(rx, ry));
  const pushStats = (rx, ry, m2) => push(L(""), L(`  📍 Position : (${rx}, ${ry})`, "info"), L(`  🎯 Goal     : (${GOAL_X}, ${GOAL_Y})  — ${dist(rx, ry)} steps away`, "info"), L(`  👣 Moves    : ${m2} / ${MOVES_LIMIT}`, "info"), L(""));
  const submit = () => {
    const cmd = input.trim();
    setInput("");
    if (phase === "name") {
      const n2 = cmd || "Recruit";
      setPlayerName(n2);
      push(L(`  > ${n2}`, "input"), L(""), L(`  Welcome, ${n2}! You control ROBO-1.`, "success"), L("  Navigate the maze and find the exit portal 🚪"), L(""), L("  Controls:"), L("    N = Move North (up)    S = Move South (down)"), L("    E = Move East (right)  W = Move West (left)"), L("    MAP = Show maze  RESET = Restart  QUIT = Exit"), L(""));
      pushMaze(START_X, START_Y);
      pushStats(START_X, START_Y, 0);
      push(L(`  > Move [N/S/E/W] or command:`, "prompt"));
      setPhase("playing");
      return;
    }
    if (phase === "won" || phase === "lost") {
      push(L(`  > ${cmd}`, "input"));
      if (cmd.toUpperCase() === "Y" || cmd.toUpperCase() === "RESET") setGameKey((k2) => k2 + 1);
      else push(L(`  Thanks for playing, ${playerName}! See you next mission 🚀`, "success"));
      return;
    }
    const up = cmd.toUpperCase();
    push(L(`  > ${cmd}`, "input"));
    if (up === "QUIT") {
      push(L(`  Goodbye, ${playerName}! ROBO-1 will wait. 👋`));
      setPhase("lost");
      return;
    }
    if (up === "MAP") {
      pushMaze(robotX, robotY);
      pushStats(robotX, robotY, moves);
      push(L(`  > Move [N/S/E/W] or command:`, "prompt"));
      return;
    }
    if (up === "RESET") {
      setGameKey((k2) => k2 + 1);
      return;
    }
    if (!DIR[up]) {
      push(L(`  ❌ Unknown: '${cmd}'. Use N, S, E, W, MAP, RESET, or QUIT.`, "error"), L(""), L(`  > Move [N/S/E/W] or command:`, "prompt"));
      return;
    }
    const [dx, dy] = DIR[up];
    const nx = robotX + dx, ny = robotY + dy;
    if (isWall(nx, ny)) {
      push(L(`  🚫 WALL BLOCKED! Can't move ${DN[up]}.`, "error"), L(""), L(`  > Move [N/S/E/W] or command:`, "prompt"));
      return;
    }
    const nm = moves + 1;
    setRobotX(nx);
    setRobotY(ny);
    setMoves(nm);
    push(L(`  ✅ ROBO-1 moved ${DN[up]}!`, "success"));
    pushMaze(nx, ny);
    if (nx === GOAL_X && ny === GOAL_Y) {
      push(L("  " + "═".repeat(41), "border"), L(`  🎉  MISSION COMPLETE, ${playerName}!`, "title"), L(`  🤖  ROBO-1 escaped the maze!`, "success"), L(`  👣  You used ${nm} moves.`, "info"), L(nm <= 15 ? "  ⭐  SPEED RUNNER! Incredible efficiency!" : nm <= 22 ? "  🔥  Great navigation!" : "  💪  You did it! Try again for a better score.", "success"), L("  " + "═".repeat(41), "border"), L(""), L("  Play again? [Y/N]:", "prompt"));
      setPhase("won");
      return;
    }
    pushStats(nx, ny, nm);
    if (nm >= MOVES_LIMIT) {
      push(L("  " + "═".repeat(41), "border"), L("  ⏰  OUT OF MOVES! ROBO-1 is stuck.", "error"), L("  💡  Type RESET to try again!", "warn"), L("  " + "═".repeat(41), "border"), L(""), L("  Play again? [Y/N]:", "prompt"));
      setPhase("lost");
      return;
    }
    push(L(`  > Move [N/S/E/W] or command:`, "prompt"));
  };
  const C2 = { output: "rgba(200,230,255,0.75)", info: "rgba(100,200,255,0.9)", success: "#10b981", error: "#f87171", border: `${color}80`, title: color, subtitle: "rgba(255,255,255,0.5)", maze: "rgba(220,240,255,0.92)", input: "rgba(255,255,255,0.5)", prompt: `${color}cc`, warn: "#f59e0b" };
  const promptLabel = phase === "name" ? "  Enter your name, Recruit:" : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: "100%", borderRadius: 12, overflow: "hidden", border: `1px solid ${color}30`, background: "#060a12" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 14px", background: "rgba(255,255,255,0.04)", borderBottom: `1px solid ${color}20`, display: "flex", gap: 6, alignItems: "center" }, children: [
      ["#ff5f57", "#febc2e", "#28c840"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 11, height: 11, borderRadius: "50%", background: c } }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.3)", fontSize: 11, marginLeft: 8 }, children: "🤖 robot-maze.py — Terminal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setGameKey((k2) => k2 + 1), style: { marginLeft: "auto", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, color: "rgba(255,255,255,0.45)", fontSize: 11, padding: "2px 10px", cursor: "pointer", fontFamily: "inherit" }, children: "↺ Reset" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: outRef, style: { height: 380, overflowY: "auto", padding: "10px 0", fontFamily: "var(--font-code)", fontSize: 13, lineHeight: 1.65 }, children: [
      lines.map((l2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: C2[l2.t] || "rgba(255,255,255,0.7)", whiteSpace: "pre", paddingLeft: 4, fontWeight: l2.t === "title" ? 800 : 400 }, children: l2.s }, i)),
      promptLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: C2.prompt, paddingLeft: 4, fontFamily: "var(--font-code)", fontSize: 13 }, children: promptLabel })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "8px 12px", borderTop: `1px solid ${color}20`, display: "flex", gap: 8, alignItems: "center", background: "rgba(0,0,0,0.3)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color, fontFamily: "var(--font-code)", fontSize: 13 }, children: ">" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inRef, value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && submit(), placeholder: phase === "name" ? "Enter your name..." : "N / S / E / W / MAP / RESET / QUIT", style: { flex: 1, background: "transparent", border: "none", outline: "none", color: "#e2e8f0", fontFamily: "var(--font-code)", fontSize: 13, caretColor: color }, autoComplete: "off", spellCheck: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submit, style: { background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 6, color, fontSize: 12, padding: "4px 12px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700 }, children: "Enter ↵" })
    ] })
  ] });
}
const GAME_MAP = { 1: TerminalRobotMaze, 2: Day2Game, 3: Day3Game, 4: Day4Game, 5: Day5Game, 6: Day6Game, 7: Day7Game, 8: Day8Game, 9: Day9Game, 10: Day10Game, 11: Day11Game, 12: Day12Game };
const TITLES = { 1: "robot-maze.py", 2: "coin-collector.py", 3: "battle-calculator.py", 4: "rock-paper-scissors.py", 5: "falling-blocks.py", 6: "reaction-game.py", 7: "snake-lite.py", 8: "meteor-dodge.py", 9: "window-builder.py — Pygame Canvas", 10: "flappy-bird.py — Pygame Canvas", 11: "shooter-core.py — Space Shooter Pt1", 12: "space-shooter.py — Full Game" };
function MiniGame({ dayId, dayColor, autoPlay = false }) {
  const GameComponent = GAME_MAP[dayId];
  const title = TITLES[dayId] || `day${dayId}-game.py`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: autoPlay ? 0 : 28 }, children: [
    !autoPlay && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 14 }, children: "🕹️ Mini Game" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 16, overflow: "hidden", border: `1px solid ${dayColor}25` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(255,255,255,0.04)", padding: "10px 18px", display: "flex", gap: 8, alignItems: "center", borderBottom: `1px solid ${dayColor}15` }, children: [
        ["#ff5f57", "#febc2e", "#28c840"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 12, height: 12, borderRadius: "50%", background: c } }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "rgba(255,255,255,0.35)", fontSize: 12, marginLeft: 8 }, children: [
          "🕹️ ",
          title
        ] }),
        autoPlay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "auto", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 99, padding: "2px 10px", color: "#10b981", fontSize: 10, fontWeight: 800 }, children: "▶ LIVE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "#060a12", padding: dayId <= 8 ? 0 : "20px" }, children: GameComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(GameComponent, { color: dayColor }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: 40, textAlign: "center", color: "rgba(255,255,255,0.4)" }, children: "Game coming soon!" }) })
    ] })
  ] });
}
const CHALLENGES_DATA = {
  1: {
    miniGame: {
      title: "Robot Maze Explorer",
      description: "Navigate a robot through a maze using Python logic! Type directions to guide the robot to the exit portal.",
      icon: "🤖",
      difficulty: 1,
      concepts: ["print()", "input()", "Variables"]
    },
    howToPlay: {
      objective: "Guide ROBO-1 through the maze and reach the exit portal 🚪 before running out of moves! The robot starts at position R and must navigate to G.",
      controls: [
        { key: "N", action: "Move North (up)" },
        { key: "S", action: "Move South (down)" },
        { key: "E", action: "Move East (right)" },
        { key: "W", action: "Move West (left)" },
        { key: "MAP", action: "Show the full maze" },
        { key: "RESET", action: "Restart from beginning" },
        { key: "QUIT", action: "Exit the game" }
      ],
      winCondition: "Reach the exit portal 🚪 before using all 30 moves.",
      loseCondition: "Run out of moves (30 move limit). Type RESET to try again!",
      mechanics: [
        "The maze is displayed in the terminal — # symbols are walls you cannot pass through",
        "Your current position and distance to goal is shown after each move",
        "Fewer moves = better rating: Under 15 = Speed Runner ⭐",
        "Try changing robot_name at the top of the file to personalise your robot!",
        "Try changing moves_limit to make the challenge harder or easier"
      ],
      tips: [
        "Before moving, type MAP to see the full maze and plan your route!",
        "Count the steps mentally before moving — efficiency matters for the Speed Runner badge.",
        "Try modifying the robot_name variable in the .py file to name your robot anything you want!",
        "Challenge: beat the maze in under 15 moves for the SPEED RUNNER rating!"
      ]
    },
    steps: [
      {
        id: "1a",
        instruction: "🎯 **Mission 1:** Use `print()` to display your name on screen.",
        example: 'print("Alex")',
        placeholder: 'print("Your Name")',
        xp: 30,
        validator: {
          type: "contains",
          tokens: ["print("],
          minLength: 5
        },
        hints: [
          'Use print() with your name inside quotes: print("Alex")',
          'Make sure you have opening and closing parentheses: print("Name")'
        ],
        successMessage: "🚀 The robot hears you! Your name echoes through the maze..."
      },
      {
        id: "1b",
        instruction: "🎯 **Mission 2:** Ask the player for their hero name using `input()`.",
        example: 'name = input("Enter your hero name: ")',
        placeholder: 'name = input("...")',
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["input(", "name"],
          minLength: 10
        },
        hints: [
          'Store input() in a variable: name = input("Enter your hero name: ")',
          "The variable name comes first, then = , then input()"
        ],
        successMessage: "🤖 The robot registers your hero identity! Access granted..."
      },
      {
        id: "1c",
        instruction: "🎯 **Mission 3:** Print a welcome message using the `name` variable.",
        example: 'print("Welcome,", name)',
        placeholder: 'print("Welcome,", name)',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["print(", "name"],
          minLength: 10
        },
        hints: [
          'Use print() with the variable: print("Welcome,", name)',
          'You can also use an f-string: print(f"Welcome, {name}!")'
        ],
        successMessage: "🏁 MAZE UNLOCKED! The robot welcomes its new commander!"
      }
    ]
  },
  2: {
    miniGame: {
      title: "Coin Collector Dash",
      description: "Collect coins on a grid! Each coin is stored as a variable — collect them all!",
      icon: "💰",
      difficulty: 1,
      concepts: ["Variables", "f-strings", "Integers"],
      fileName: "day2_coin_collector.py",
      password: "admin"
    },
    steps: [
      {
        id: "2a",
        instruction: "🎯 **Mission 1:** Create a variable `coins` and set it to `0`.",
        example: "coins = 0",
        placeholder: "coins = 0",
        xp: 30,
        validator: {
          type: "contains",
          tokens: ["coins", "=", "0"],
          minLength: 7
        },
        hints: [
          "Variable syntax: name = value — so: coins = 0",
          "Make sure there are no quotes around 0 — it must be a number!"
        ],
        successMessage: "💰 Your coin counter is initialised! Ready to collect..."
      },
      {
        id: "2b",
        instruction: "🎯 **Mission 2:** Collect 10 coins! Use `+=` to add 10 to `coins`.",
        example: "coins += 10",
        placeholder: "coins += 10",
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["coins", "+=", "10"],
          minLength: 8
        },
        hints: [
          '"+=" is the shortcut for coins = coins + 10',
          "Write it exactly: coins += 10"
        ],
        successMessage: "🌟 10 coins collected! The counter ticks up!"
      },
      {
        id: "2c",
        instruction: '🎯 **Mission 3:** Print the score using an f-string: `f"Coins: {coins}"`',
        example: 'print(f"Coins: {coins}")',
        placeholder: 'print(f"Coins: {coins}")',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["print(", 'f"', "coins", "}"],
          minLength: 15
        },
        hints: [
          'f-strings use curly braces: f"Coins: {coins}"',
          "Don't forget the f before the first quote!"
        ],
        successMessage: "🏆 HUD ACTIVATED! The score display lights up!"
      }
    ]
  },
  3: {
    miniGame: {
      title: "Battle Calculator",
      description: "Calculate attack damage in real-time! Enter attack and defense values to see the outcome.",
      icon: "⚔️",
      difficulty: 1,
      concepts: ["Arithmetic operators", "int()", "Math module"],
      fileName: "day3_battle_calc.py",
      password: "admin"
    },
    steps: [
      {
        id: "3a",
        instruction: "🎯 **Mission 1:** Create two variables: `attack = 35` and `defense = 12`.",
        example: "attack = 35\ndefense = 12",
        placeholder: "attack = 35\ndefense = 12",
        xp: 30,
        validator: {
          type: "contains",
          tokens: ["attack", "=", "defense"],
          minLength: 15
        },
        hints: [
          "Two variables on two lines: attack = 35 then defense = 12",
          "Make sure both are whole numbers (integers), no quotes!"
        ],
        successMessage: "⚔️ Battle stats loaded! Combat calculations online..."
      },
      {
        id: "3b",
        instruction: "🎯 **Mission 2:** Calculate `damage = attack - defense` and print it.",
        example: "damage = attack - defense\nprint(damage)",
        placeholder: "damage = attack - defense\nprint(damage)",
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["damage", "attack", "-", "defense", "print"],
          minLength: 20
        },
        hints: [
          "Subtract: damage = attack - defense",
          'Then print it: print(damage) or print(f"Damage: {damage}")'
        ],
        successMessage: "💥 CRITICAL CALCULATION! The battle engine fires up!"
      },
      {
        id: "3c",
        instruction: '🎯 **Mission 3:** Convert user input to int — write `level = int(input("Level: "))`',
        example: 'level = int(input("Level: "))',
        placeholder: 'level = int(input("Level: "))',
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["int(", "input(", "level"],
          minLength: 15
        },
        hints: [
          'Wrap input() inside int(): level = int(input("Level: "))',
          "int() converts the text from input() into a real number"
        ],
        successMessage: "🧮 TYPE CONVERSION MASTERED! The math engine is ready!"
      }
    ]
  },
  4: {
    miniGame: {
      title: "Rock Paper Scissors Duel",
      description: "Play RPS against the AI! The game uses the exact if/elif/else logic you learned today.",
      icon: "✊",
      difficulty: 2,
      concepts: ["if/elif/else", "Comparison operators", "Boolean logic"],
      fileName: "day4_rps_duel.py",
      password: "admin"
    },
    steps: [
      {
        id: "4a",
        instruction: '🎯 **Mission 1:** Write an `if` statement: if `health > 50`, print `"Healthy!"`',
        example: 'if health > 50:\n    print("Healthy!")',
        placeholder: 'if health > 50:\n    print("Healthy!")',
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["if", ">", "print("],
          minLength: 15
        },
        hints: [
          "if syntax: if condition: (colon at the end!)",
          'Indent the print() with 4 spaces: if health > 50:\\n    print("Healthy!")'
        ],
        successMessage: "🧠 Condition logic activated! The game now thinks!"
      },
      {
        id: "4b",
        instruction: "🎯 **Mission 2:** Add `elif` and `else` — check if health > 20 (damaged) or else (dead).",
        example: 'elif health > 20:\n    print("Damaged!")\nelse:\n    print("Dead!")',
        placeholder: 'elif health > 20:\n    print("Damaged!")\nelse:\n    print("Dead!")',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["elif", "else"],
          minLength: 20
        },
        hints: [
          "elif goes between if and else",
          "else has no condition — it catches everything that didn't match above"
        ],
        successMessage: "🔮 Decision chain complete! The AI can now think in branches!"
      },
      {
        id: "4c",
        instruction: "🎯 **Mission 3:** Use `and` to combine two conditions: `if x == 'rock' and y == 'scissors'`",
        example: `if x == 'rock' and y == 'scissors':
    print("Win!")`,
        placeholder: `if x == 'rock' and y == 'scissors':
    print("Win!")`,
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["and", "==", "if"],
          minLength: 20
        },
        hints: [
          '"and" combines two conditions — both must be True',
          'Use == (double equals) to compare: if x == "rock" and y == "scissors"'
        ],
        successMessage: "🎉 BOOLEAN POWER UNLOCKED! The RPS brain is wired!"
      }
    ]
  },
  5: {
    miniGame: {
      title: "Falling Blocks Frenzy",
      description: "Watch blocks fall faster each round — built with the exact for loop logic from today!",
      icon: "🧱",
      difficulty: 2,
      concepts: ["for loops", "while loops", "range()"],
      fileName: "day5_falling_blocks.py",
      password: "admin"
    },
    steps: [
      {
        id: "5a",
        instruction: "🎯 **Mission 1:** Write a `for` loop using `range(1, 6)` that prints each number.",
        example: "for i in range(1, 6):\n    print(i)",
        placeholder: "for i in range(1, 6):\n    print(i)",
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["for", "range(", "print("],
          minLength: 20
        },
        hints: [
          "for loop syntax: for i in range(1, 6):",
          "Indent print(i) with 4 spaces inside the loop"
        ],
        successMessage: "🔁 Loop engaged! Numbers fly across the screen!"
      },
      {
        id: "5b",
        instruction: "🎯 **Mission 2:** Write a `while` loop: while `lives > 0`, subtract 1 each time.",
        example: "lives = 3\nwhile lives > 0:\n    lives -= 1\n    print(lives)",
        placeholder: "lives = 3\nwhile lives > 0:\n    lives -= 1",
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["while", "lives", "-="],
          minLength: 25
        },
        hints: [
          "while loop: while lives > 0: (the loop keeps going as long as this is True)",
          "Use -= to decrease: lives -= 1 subtracts 1 each loop"
        ],
        successMessage: "💫 GAME LOOP PATTERN MASTERED! Every game uses this!"
      },
      {
        id: "5c",
        instruction: "🎯 **Mission 3:** Use `break` to exit a loop early when `score >= 300`.",
        example: "if score >= 300:\n    break",
        placeholder: "if score >= 300:\n    break",
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["break", ">="],
          minLength: 15
        },
        hints: [
          "break instantly exits the loop it's inside",
          "Put it inside an if: if score >= 300: then indented break"
        ],
        successMessage: "⚡ BREAK COMMAND LEARNED! You control the loop's destiny!"
      }
    ]
  },
  6: {
    miniGame: {
      title: "Reaction Speed Tester",
      description: "Test your reactions! The game calls functions to measure and rate your speed.",
      icon: "⚡",
      difficulty: 2,
      concepts: ["def", "Parameters", "Return values"],
      fileName: "day6_reaction_game.py",
      password: "admin"
    },
    steps: [
      {
        id: "6a",
        instruction: "🎯 **Mission 1:** Define a function called `greet` that takes a `name` parameter.",
        example: 'def greet(name):\n    print(f"Hello, {name}!")',
        placeholder: 'def greet(name):\n    print(f"Hello, {name}!")',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["def ", "name", "print("],
          minLength: 20
        },
        hints: [
          "def syntax: def function_name(parameter):",
          'The body must be indented: def greet(name):\\n    print(f"Hello, {name}!")'
        ],
        successMessage: "⚙️ FUNCTION DEFINED! A reusable superpower is born!"
      },
      {
        id: "6b",
        instruction: "🎯 **Mission 2:** Add a `return` statement — return the damage value from a function.",
        example: "def calc(attack, defense):\n    damage = attack - defense\n    return damage",
        placeholder: "def calc(attack, defense):\n    damage = attack - defense\n    return damage",
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["def ", "return"],
          minLength: 20
        },
        hints: [
          "return sends a value back: return damage",
          "The return line must be inside the function (indented)"
        ],
        successMessage: "📤 RETURN VALUE MASTERED! Functions now send data back!"
      },
      {
        id: "6c",
        instruction: "🎯 **Mission 3:** Call your function and store the result: `result = calc(40, 10)`",
        example: "result = calc(40, 10)\nprint(result)",
        placeholder: "result = calc(40, 10)\nprint(result)",
        xp: 70,
        validator: {
          type: "contains",
          tokens: ["result", "=", "print("],
          minLength: 15
        },
        hints: [
          "Call the function by name with arguments: result = calc(40, 10)",
          "Then print the result: print(result)"
        ],
        successMessage: "🚀 FUNCTION CALL COMPLETE! The superpower is activated!"
      }
    ]
  },
  7: {
    miniGame: {
      title: "Snake Lite",
      description: "Control a growing snake on a grid — the snake body IS a Python list!",
      icon: "🐍",
      difficulty: 3,
      concepts: ["List creation", "Indexing", "append()", "Looping through lists"],
      fileName: "day7_snake_lite.py",
      password: "admin"
    },
    steps: [
      {
        id: "7a",
        instruction: "🎯 **Mission 1:** Create a list called `enemies` with 3 enemy names.",
        example: 'enemies = ["Goblin", "Orc", "Dragon"]',
        placeholder: 'enemies = ["Goblin", "Orc", "Dragon"]',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["enemies", "=", "["],
          minLength: 15
        },
        hints: [
          "List syntax: name = [item1, item2, item3]",
          'String items go in quotes: enemies = ["Goblin", "Orc", "Dragon"]'
        ],
        successMessage: "📋 Enemy army assembled! The list is ready for battle!"
      },
      {
        id: "7b",
        instruction: "🎯 **Mission 2:** Use `append()` to add a new enemy to your list.",
        example: 'enemies.append("Boss")',
        placeholder: 'enemies.append("Boss")',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["append("],
          minLength: 10
        },
        hints: [
          'append() adds to the END of the list: enemies.append("Boss")',
          "Call it on your list variable: list_name.append(new_item)"
        ],
        successMessage: "➕ BOSS ADDED! The army grows stronger!"
      },
      {
        id: "7c",
        instruction: "🎯 **Mission 3:** Loop through the list and print each enemy: `for e in enemies:`",
        example: "for e in enemies:\n    print(e)",
        placeholder: "for e in enemies:\n    print(e)",
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["for", "in enemies", "print("],
          minLength: 20
        },
        hints: [
          "for loop on a list: for e in enemies:",
          "Then print each item: indent print(e) inside the loop"
        ],
        successMessage: "🐍 SNAKE AWAKENS! All enemies marching in formation!"
      }
    ]
  },
  8: {
    miniGame: {
      title: "Meteor Dodge",
      description: "Dodge randomly spawning meteors! Positions use randint() — just like today's lesson.",
      icon: "☄️",
      difficulty: 3,
      concepts: ["random module", "randint()", "choice()", "shuffle()"],
      fileName: "day8_meteor_dodge.py",
      password: "admin"
    },
    steps: [
      {
        id: "8a",
        instruction: "🎯 **Mission 1:** Import random and use `randint(1, 10)` to get a random number.",
        example: "import random\nnum = random.randint(1, 10)\nprint(num)",
        placeholder: "import random\nnum = random.randint(1, 10)",
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["import random", "randint("],
          minLength: 20
        },
        hints: [
          "First line: import random",
          "Then use: num = random.randint(1, 10)"
        ],
        successMessage: "🎲 CHAOS UNLOCKED! Random numbers flow through the code!"
      },
      {
        id: "8b",
        instruction: "🎯 **Mission 2:** Use `random.choice()` to pick a random item from a list.",
        example: 'items = ["sword", "shield", "potion"]\npick = random.choice(items)\nprint(pick)',
        placeholder: 'items = ["sword", "shield", "potion"]\npick = random.choice(items)',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["random.choice(", "["],
          minLength: 20
        },
        hints: [
          "Create a list first, then: pick = random.choice(my_list)",
          "choice() picks ONE random item from any list"
        ],
        successMessage: "🎰 RANDOM LOOT DROPS ACTIVATED!"
      },
      {
        id: "8c",
        instruction: "🎯 **Mission 3:** Spawn 3 meteors with random x positions using `randint(0, 800)`.",
        example: 'for i in range(3):\n    x = random.randint(0, 800)\n    print(f"Meteor at x={x}")',
        placeholder: 'for i in range(3):\n    x = random.randint(0, 800)\n    print(f"Meteor at x={x}")',
        xp: 70,
        validator: {
          type: "contains",
          tokens: ["for", "randint(", "print("],
          minLength: 30
        },
        hints: [
          "Combine a for loop with randint: for i in range(3):",
          "Inside the loop: x = random.randint(0, 800)"
        ],
        successMessage: "☄️ METEOR STORM DEPLOYED! Random chaos is your weapon!"
      }
    ]
  },
  9: {
    miniGame: {
      title: "Window Builder",
      description: "Open a Pygame window, draw shapes, and move a rectangle with the keyboard!",
      icon: "??",
      difficulty: 3,
      concepts: ["pygame.init()", "set_mode()", "Game loop", "Drawing shapes"],
      fileName: "day9_window_builder.py",
      password: "admin"
    },
    steps: [
      {
        id: "9a",
        instruction: "?? **Mission 1:** Import pygame and call `pygame.init()`.",
        example: "import pygame\npygame.init()",
        placeholder: "import pygame\npygame.init()",
        xp: 60,
        validator: { type: "contains", tokens: ["import pygame", "pygame.init()"], minLength: 20 },
        hints: ["Two lines: import pygame then pygame.init()", "pygame.init() must be called before anything else!"],
        successMessage: "?? PYGAME ONLINE! The game engine starts its engines!"
      },
      {
        id: "9b",
        instruction: "?? **Mission 2:** Create the window: `screen = pygame.display.set_mode((800, 600))`",
        example: "screen = pygame.display.set_mode((800, 600))",
        placeholder: "screen = pygame.display.set_mode((800, 600))",
        xp: 70,
        validator: { type: "contains", tokens: ["pygame.display.set_mode(", "screen"], minLength: 30 },
        hints: ["Double parentheses: set_mode((width, height))", "Store in screen: screen = pygame.display.set_mode((800, 600))"],
        successMessage: "??? GAME WINDOW CREATED! The arena is ready!"
      },
      {
        id: "9c",
        instruction: "?? **Mission 3:** Add the game loop with `clock.tick(60)` and `pygame.display.flip()`.",
        example: "while running:\n    clock.tick(60)\n    screen.fill((10,20,40))\n    pygame.display.flip()",
        placeholder: "while running:\n    clock.tick(60)\n    ...\n    pygame.display.flip()",
        xp: 80,
        validator: { type: "contains", tokens: ["clock.tick", "display.flip()", "while running"], minLength: 40 },
        hints: ["clock.tick(60) caps at 60 FPS", "pygame.display.flip() shows everything drawn each frame"],
        successMessage: "?? WINDOW BUILDER UNLOCKED! The game loop is alive!"
      }
    ]
  },
  10: {
    miniGame: {
      title: "Flappy Bird Clone",
      description: "A full Flappy Bird with physics, pipes, and collision � built with everything you learned!",
      icon: "??",
      difficulty: 4,
      concepts: ["Bird physics", "Gravity & velocity", "Pipe collision", "Score system"],
      fileName: "day10_flappy_bird.py",
      password: "admin"
    },
    steps: [
      {
        id: "10a",
        instruction: "?? **Mission 1:** Apply gravity � `bird_vel += 0.5` and `bird_y += bird_vel` each frame.",
        example: "bird_vel += 0.5\nbird_y += bird_vel",
        placeholder: "bird_vel += 0.5\nbird_y += bird_vel",
        xp: 80,
        validator: { type: "contains", tokens: ["bird_vel", "+=", "bird_y"], minLength: 20 },
        hints: ["bird_vel += 0.5 adds downward velocity each frame", "bird_y += bird_vel moves the bird"],
        successMessage: "?? PHYSICS ACTIVE! The bird now falls with gravity!"
      },
      {
        id: "10b",
        instruction: "?? **Mission 2:** Detect pipe collision � `if bird_rect.colliderect(top_pipe): running = False`",
        example: "bird_rect = pygame.Rect(bird_x-15, int(bird_y)-15, 30, 30)\nif bird_rect.colliderect(top_pipe):\n    running = False",
        placeholder: "if bird_rect.colliderect(top_pipe):\n    running = False",
        xp: 100,
        validator: { type: "contains", tokens: ["colliderect(", "running = False"], minLength: 30 },
        hints: ["Create bird_rect with pygame.Rect()", "colliderect() returns True if two Rects overlap"],
        successMessage: "?? COLLISION DETECTED! The pipe is now deadly!"
      },
      {
        id: "10c",
        instruction: "?? **Mission 3:** Add a game-over screen showing final score after the loop ends.",
        example: "screen.blit(font.render('GAME OVER', True, (220,38,38)), (100, 200))\npygame.display.flip()",
        placeholder: "screen.blit(font.render('GAME OVER', True, ...), (...))\npygame.display.flip()",
        xp: 120,
        validator: { type: "contains", tokens: ["render(", "blit(", "GAME OVER"], minLength: 30 },
        hints: ["font.render() creates text surface", "blit() stamps it on screen � then flip() to display"],
        successMessage: "?? FLAPPY LEGEND UNLOCKED! Your first complete Pygame game!"
      }
    ]
  },
  11: {
    miniGame: {
      title: "Shooter Core",
      description: "WASD player ship + SPACE to fire bullets + enemies spawning from the top. The core shooter engine!",
      icon: "??",
      difficulty: 4,
      concepts: ["WASD movement", "Bullet list", "Enemy spawner", "List comprehension"],
      fileName: "day11_shooter_core.py",
      password: "admin"
    },
    steps: [
      {
        id: "11a",
        instruction: "?? **Mission 1:** Move the player with WASD � `if keys[pygame.K_a] and player.left > 0: player.x -= SPEED`",
        example: "keys = pygame.key.get_pressed()\nif keys[pygame.K_a] and player.left > 0:\n    player.x -= 6",
        placeholder: "keys = pygame.key.get_pressed()\nif keys[pygame.K_a] and player.left > 0:\n    player.x -= 6",
        xp: 80,
        validator: { type: "contains", tokens: ["pygame.K_a", "player", "get_pressed()"], minLength: 30 },
        hints: ["get_pressed() returns current key states", "player.left > 0 prevents the ship going off the left edge"],
        successMessage: "??? PLAYER ONLINE! The ship responds to your commands!"
      },
      {
        id: "11b",
        instruction: "?? **Mission 2:** Fire a bullet on SPACE � `bullets.append(pygame.Rect(player.centerx-3, player.top, 6, 16))`",
        example: "if event.key == pygame.K_SPACE:\n    b = pygame.Rect(player.centerx-3, player.top, 6, 16)\n    bullets.append(b)",
        placeholder: "if event.key == pygame.K_SPACE:\n    bullets.append(pygame.Rect(...))",
        xp: 100,
        validator: { type: "contains", tokens: ["pygame.K_SPACE", "bullets.append(", "pygame.Rect("], minLength: 40 },
        hints: ["Use KEYDOWN event so each press fires exactly once", "Bullet spawns at player.centerx-3, player.top (front of ship)"],
        successMessage: "?? WEAPONS HOT! Bullets fire from the ship!"
      },
      {
        id: "11c",
        instruction: "?? **Mission 3:** Clean up off-screen bullets: `bullets = [b for b in bullets if b.bottom > 0]`",
        example: "for b in bullets: b.y -= 10\nbullets = [b for b in bullets if b.bottom > 0]",
        placeholder: "bullets = [b for b in bullets if b.bottom > 0]",
        xp: 120,
        validator: { type: "contains", tokens: ["for b in bullets", "if b.bottom"], minLength: 30 },
        hints: ["List comprehension [item for item in list if condition]", "b.bottom > 0 keeps only bullets still on screen"],
        successMessage: "?? SPACE CADET UNLOCKED! The battlefield is ready!"
      }
    ]
  },
  12: {
    miniGame: {
      title: "Space Shooter � Final Build",
      description: "Collision, health bar HUD, start screen, and game-over with restart. The complete game!",
      icon: "??",
      difficulty: 5,
      concepts: ["Bullet-enemy collision", "Health bar HUD", "Start screen", "Game-over + restart"],
      fileName: "day12_space_shooter.py",
      password: "admin"
    },
    steps: [
      {
        id: "12a",
        instruction: "?? **Final Mission 1:** Add bullet-enemy collision with `colliderect()` and `break` after removing.",
        example: "for b in bullets[:]:\n    for e in enemies[:]:\n        if b.colliderect(e):\n            bullets.remove(b); enemies.remove(e)\n            score += 10; break",
        placeholder: "for b in bullets[:]:\n    for e in enemies[:]:\n        if b.colliderect(e):\n            ...\n            break",
        xp: 150,
        validator: { type: "contains", tokens: ["colliderect(", "bullets.remove(", "break"], minLength: 50 },
        hints: ["Use bullets[:] safe copy so you can remove during the loop", "break is CRITICAL � prevents ValueError on a removed bullet"],
        successMessage: "?? COLLISION SYSTEM LIVE! Bullets actually destroy enemies!"
      },
      {
        id: "12b",
        instruction: "?? **Final Mission 2:** Write `draw_hud()` showing a health bar that scales with health and a score label.",
        example: "def draw_hud(surface, health, score):\n    pygame.draw.rect(surface,(60,0,0),(10,10,200,20))\n    pygame.draw.rect(surface,(220,38,38),(10,10,int(200*health/100),20))",
        placeholder: "def draw_hud(surface, health, score):\n    ...",
        xp: 200,
        validator: { type: "contains", tokens: ["def draw_hud", "health", "score"], minLength: 40 },
        hints: ["def draw_hud(surface, health, score): � define as a function", "int(200 * health / 100) scales bar width to health percentage"],
        successMessage: "??? HUD ONLINE! Health and score always visible!"
      },
      {
        id: "12c",
        instruction: "?? **LEGEND MISSION:** Describe ONE feature of your Space Shooter as a Python comment!",
        example: "# My Space Shooter has: bullet shooting, enemy spawning, health bar, and a start screen",
        placeholder: "# My game has: ...",
        xp: 150,
        validator: { type: "contains", tokens: ["#"], minLength: 15 },
        hints: ["A comment starts with # � describe your proudest feature!"],
        successMessage: "?? PYTHON LEGEND ACHIEVED! You are officially a game developer!"
      }
    ]
  }
};
function normalize(code) {
  return code.trim().replace(/\s+/g, " ").replace(/"/g, "'").toLowerCase();
}
function exactMatch(userCode, acceptedAnswers) {
  const userNorm = normalize(userCode);
  return acceptedAnswers.some((ans) => normalize(ans) === userNorm);
}
function matchesPattern(userCode, pattern) {
  return pattern.test(userCode);
}
function validateCode(userCode, validator) {
  if (!userCode || userCode.trim().length === 0) {
    return { valid: false, feedback: "❌ Write your code first!" };
  }
  if (validator.minLength && userCode.trim().length < validator.minLength) {
    return { valid: false, feedback: `❌ Too short! Write at least ${validator.minLength} characters.` };
  }
  switch (validator.type) {
    case "exact": {
      const ok2 = exactMatch(userCode, validator.accepted || []);
      return ok2 ? { valid: true, feedback: "✅ Perfect! That's exactly right!" } : { valid: false, feedback: "❌ Not quite. Check your syntax and try again." };
    }
    case "contains": {
      const missing = (validator.tokens || []).filter(
        (tok) => !userCode.toLowerCase().includes(tok.toLowerCase())
      );
      if (missing.length === 0) {
        return { valid: true, feedback: "✅ Great! All the right pieces are there." };
      }
      return { valid: false, feedback: `❌ Missing: ${missing.map((t2) => `\`${t2}\``).join(", ")}` };
    }
    case "regex": {
      const ok2 = matchesPattern(userCode, validator.pattern);
      return ok2 ? { valid: true, feedback: "✅ Correct! Pattern matched." } : { valid: false, feedback: validator.failMessage || "❌ Pattern doesn't match. Try again." };
    }
    case "multi": {
      const results = (validator.checks || []).map((check) => validateCode(userCode, check));
      const failed = results.filter((r2) => !r2.valid);
      if (failed.length === 0) {
        return { valid: true, feedback: "✅ Excellent! Everything checks out!" };
      }
      return { valid: false, feedback: failed[0].feedback };
    }
    default:
      return { valid: false, feedback: "❌ Unknown validator type." };
  }
}
function getHint(hints, attemptCount) {
  if (!hints || hints.length === 0) return null;
  if (attemptCount <= 0) return null;
  const idx = Math.min(Math.floor((attemptCount - 1) / 2), hints.length - 1);
  return hints[idx];
}
function CodeChallengeCard({ step, dayColor, onSuccess, stepIndex, totalSteps }) {
  const [userCode, setUserCode] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [attempts, setAttempts] = reactExports.useState(0);
  const [hint, setHint] = reactExports.useState(null);
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  const [shaking, setShaking] = reactExports.useState(false);
  const textareaRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const ta2 = textareaRef.current;
    if (!ta2) return;
    ta2.style.height = "auto";
    ta2.style.height = Math.max(ta2.scrollHeight, 80) + "px";
  }, [userCode]);
  const handleValidate = () => {
    const res = validateCode(userCode, step.validator);
    setResult(res);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (res.valid) {
      setShowSuccess(true);
      setTimeout(() => {
        onSuccess(step.xp);
      }, 1400);
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      const h = getHint(step.hints, newAttempts);
      setHint(h);
    }
  };
  const handleKey = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const next = userCode.substring(0, start) + "    " + userCode.substring(end);
      setUserCode(next);
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 4;
          textareaRef.current.selectionEnd = start + 4;
        }
      });
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleValidate();
    }
  };
  const done = showSuccess;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: shaking ? "challenge-shake" : "",
      style: {
        borderRadius: 18,
        border: `1px solid ${done ? "#10b98160" : `${dayColor}50`}`,
        background: done ? "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(0,0,0,0.4))" : `linear-gradient(135deg, ${dayColor}10, rgba(0,0,0,0.4))`,
        overflow: "hidden",
        transition: "all 0.4s ease",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          padding: "12px 20px",
          background: done ? "rgba(16,185,129,0.12)" : `${dayColor}12`,
          borderBottom: `1px solid ${done ? "#10b98140" : `${dayColor}25`}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: done ? "#10b981" : `${dayColor}30`,
              border: `2px solid ${done ? "#10b981" : dayColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 900,
              color: done ? "#000" : dayColor
            }, children: done ? "✓" : stepIndex + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: done ? "#10b981" : dayColor, fontSize: 12, fontWeight: 800, letterSpacing: 1 }, children: [
              "STEP ",
              stepIndex + 1,
              " / ",
              totalSteps
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            background: `${dayColor}20`,
            border: `1px solid ${dayColor}35`,
            borderRadius: 99,
            padding: "3px 12px",
            color: dayColor,
            fontSize: 11,
            fontWeight: 800
          }, children: [
            "⚡ +",
            step.xp,
            " XP"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px 22px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.88)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }, children: step.instruction.split("**").map(
            (part, i) => i % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: dayColor }, children: part }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, i)
          ) }),
          !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "relative", marginBottom: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              background: "#060a12",
              borderRadius: 10,
              border: `1px solid ${(result == null ? void 0 : result.valid) === false ? "rgba(239,68,68,0.5)" : `${dayColor}30`}`,
              overflow: "hidden",
              transition: "border-color 0.3s"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                padding: "6px 12px",
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                gap: 6,
                alignItems: "center"
              }, children: [
                ["#ff5f57", "#febc2e", "#28c840"].map(
                  (c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 9, height: 9, borderRadius: "50%", background: c } }, i)
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.25)", fontSize: 11, marginLeft: 6 }, children: "🐍 your_code.py" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "auto", color: "rgba(255,255,255,0.2)", fontSize: 10 }, children: "Ctrl+Enter to run" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  ref: textareaRef,
                  value: userCode,
                  onChange: (e) => {
                    setUserCode(e.target.value);
                    setResult(null);
                  },
                  onKeyDown: handleKey,
                  placeholder: step.placeholder,
                  spellCheck: false,
                  style: {
                    width: "100%",
                    minHeight: 80,
                    padding: "14px 16px",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#e2e8f0",
                    fontFamily: "var(--font-code)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    resize: "none",
                    display: "block"
                  }
                }
              )
            ] }) }),
            result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              padding: "10px 14px",
              borderRadius: 8,
              marginBottom: 12,
              background: result.valid ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.1)",
              border: `1px solid ${result.valid ? "rgba(16,185,129,0.35)" : "rgba(239,68,68,0.3)"}`,
              color: result.valid ? "#10b981" : "#f87171",
              fontSize: 13,
              fontWeight: 600,
              animation: "slideUp 0.25s ease forwards"
            }, children: result.feedback }),
            hint && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              padding: "10px 14px",
              borderRadius: 8,
              marginBottom: 12,
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.25)",
              animation: "slideUp 0.25s ease forwards"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#f59e0b", fontSize: 10, fontWeight: 800, letterSpacing: 1, marginBottom: 4 }, children: "💡 HINT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.7)", fontSize: 13 }, children: hint })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleValidate,
                style: {
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "none",
                  background: `linear-gradient(135deg, ${dayColor}, ${dayColor}aa)`,
                  color: "#000",
                  fontWeight: 900,
                  fontSize: 14,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  letterSpacing: 0.5,
                  boxShadow: `0 0 20px ${dayColor}40`,
                  transition: "all 0.2s"
                },
                onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-1px)",
                onMouseLeave: (e) => e.currentTarget.style.transform = "none",
                children: "▶ Run & Validate Code"
              }
            )
          ] }) : (
            // Success state
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              textAlign: "center",
              padding: "20px 0",
              animation: "popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 48, marginBottom: 10 }, children: "✅" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#10b981", fontWeight: 900, fontSize: 18, marginBottom: 6 }, children: "Challenge Passed!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 13 }, children: step.successMessage }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                display: "inline-block",
                marginTop: 12,
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.35)",
                borderRadius: 99,
                padding: "4px 16px",
                color: "#f59e0b",
                fontSize: 12,
                fontWeight: 800
              }, children: [
                "⚡ +",
                step.xp,
                " XP earned!"
              ] })
            ] })
          )
        ] })
      ]
    }
  );
}
function LockedContentCard({ unlocked, dayColor, label, children }) {
  const [revealed, setRevealed] = reactExports.useState(unlocked);
  const [animating, setAnimating] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (unlocked && !revealed) {
      setAnimating(true);
      const t2 = setTimeout(() => {
        setRevealed(true);
        setAnimating(false);
      }, 600);
      return () => clearTimeout(t2);
    }
  }, [unlocked]);
  if (revealed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { animation: "unlockReveal 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards" }, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", borderRadius: 18, overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { filter: "blur(6px)", opacity: 0.35, pointerEvents: "none", userSelect: "none" }, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      background: `radial-gradient(ellipse at center, ${dayColor}12 0%, rgba(4,8,15,0.85) 70%)`,
      backdropFilter: "blur(2px)",
      animation: animating ? "lockPulse 0.6s ease forwards" : "none"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: `${dayColor}15`,
        border: `2px solid ${dayColor}50`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
        animation: "float 3s ease-in-out infinite",
        boxShadow: `0 0 30px ${dayColor}30`
      }, children: "🔒" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "0 24px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: dayColor, fontWeight: 900, fontSize: 15, marginBottom: 6 }, children: "LOCKED" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6 }, children: label || "Complete the challenge above to unlock this section" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: "50%",
        border: `2px solid ${dayColor}40`,
        animation: "pulseRing 2s ease-out infinite"
      } })
    ] })
  ] });
}
function XPRewardPopup({ xp, dayColor, onDone }) {
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t2 = setTimeout(() => {
      setVisible(false);
      if (onDone) setTimeout(onDone, 400);
    }, 1800);
    return () => clearTimeout(t2);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    position: "fixed",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    opacity: visible ? 1 : 0,
    transition: "opacity 0.4s ease",
    animation: "xpFloat 1.8s ease forwards"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: `linear-gradient(135deg, ${dayColor}, ${dayColor}88)`,
      borderRadius: 99,
      padding: "12px 28px",
      color: "#000",
      fontWeight: 900,
      fontSize: 24,
      fontFamily: "var(--font-head)",
      boxShadow: `0 0 40px ${dayColor}80, 0 8px 32px rgba(0,0,0,0.4)`,
      letterSpacing: 1
    }, children: [
      "⚡ +",
      xp,
      " XP"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 22, letterSpacing: 6, animation: "popupIn 0.3s ease forwards" }, children: "✨✨✨" })
  ] });
}
function ChallengeEngine({ day, dayColor, setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  const data = CHALLENGES_DATA[day.id];
  if (!data) return null;
  const { steps, miniGame } = data;
  const totalSteps = steps.length;
  const isAdmin = state.gamerTag === "admin123";
  const allStepIds = steps.map((s) => s.id);
  const [completedSteps, setCompletedSteps] = reactExports.useState(isAdmin ? allStepIds : []);
  const [xpPopup, setXpPopup] = reactExports.useState(null);
  const [showComplete, setShowComplete] = reactExports.useState(false);
  const [alreadyFired, setAlreadyFired] = reactExports.useState(isAdmin);
  const completedCount = completedSteps.length;
  const allDone = completedCount >= totalSteps;
  const progressPct = Math.round(completedCount / totalSteps * 100);
  const dayBadge = BADGES_ALL.find((b) => b.day === day.id);
  const nextDayId = day.id + 1;
  const hasNextDay = nextDayId <= 12;
  reactExports.useEffect(() => {
    var _a;
    if (allDone && !alreadyFired && !((_a = state.completedDays) == null ? void 0 : _a.includes(day.id))) {
      setAlreadyFired(true);
      dispatch({
        type: "COMPLETE_CHALLENGE",
        payload: {
          dayId: day.id,
          xpReward: totalSteps * 30,
          badgeName: (dayBadge == null ? void 0 : dayBadge.name) || null
        }
      });
      setTimeout(() => setShowComplete(true), 1200);
    }
  }, [allDone]);
  const handleStepSuccess = (stepId, xp) => {
    if (completedSteps.includes(stepId)) return;
    setCompletedSteps((prev) => [...prev, stepId]);
    setXpPopup({ xp, key: Date.now() });
    dispatch({ type: "AWARD_CHALLENGE_XP", payload: { xp } });
  };
  const goNextDay = () => {
    setShowComplete(false);
    if (hasNextDay && setSelectedDay && setView) {
      const nextDay = DAYS_DATA.find((d) => d.id === nextDayId);
      if (nextDay) {
        setSelectedDay(nextDay);
        setView("day");
      }
    }
  };
  reactExports.useEffect(() => {
    if (!showComplete) return;
    const handle = (e) => {
      if (e.type === "keydown" || e.type === "click") goNextDay();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [showComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 32 }, children: [
    xpPopup && /* @__PURE__ */ jsxRuntimeExports.jsx(XPRewardPopup, { xp: xpPopup.xp, dayColor, onDone: () => setXpPopup(null) }, xpPopup.key),
    showComplete && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DayCompleteOverlay,
      {
        day,
        dayColor,
        badge: dayBadge,
        hasNextDay,
        nextDayId,
        onContinue: goNextDay
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 18 }, children: "⚡ Code Missions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: `${dayColor}18`,
        border: `1px solid ${dayColor}35`,
        borderRadius: 99,
        padding: "4px 14px",
        color: dayColor,
        fontSize: 12,
        fontWeight: 800
      }, children: [
        completedCount,
        "/",
        totalSteps,
        " Complete"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 6, borderRadius: 99, background: "rgba(255,255,255,0.07)", marginBottom: 20, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      height: "100%",
      borderRadius: 99,
      background: `linear-gradient(90deg, ${dayColor}, ${dayColor}88)`,
      width: `${progressPct}%`,
      transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
      boxShadow: `0 0 12px ${dayColor}60`
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "12px 18px",
      borderRadius: 12,
      marginBottom: 20,
      background: `${dayColor}10`,
      border: `1px solid ${dayColor}25`,
      color: "rgba(255,255,255,0.65)",
      fontSize: 13,
      lineHeight: 1.6
    }, children: [
      "🎯 Complete all ",
      totalSteps,
      " missions to unlock the live game below!  Tab = 4 spaces · Ctrl+Enter = validate"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: steps.map((step, idx) => {
      const prevDone = idx === 0 || completedSteps.includes(steps[idx - 1].id);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        LockedContentCard,
        {
          unlocked: prevDone,
          dayColor,
          label: `Complete Mission ${idx} to unlock this step`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CodeChallengeCard,
            {
              step,
              dayColor,
              stepIndex: idx,
              totalSteps,
              onSuccess: (xp) => handleStepSuccess(step.id, xp)
            }
          )
        },
        step.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 24 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      LockedContentCard,
      {
        unlocked: allDone,
        dayColor,
        label: "Complete all code missions above to play the live game!",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(GameUnlockPanel, { miniGame, dayColor, dayId: day.id })
      }
    ) })
  ] });
}
function DayCompleteOverlay({ day, dayColor, badge, hasNextDay, nextDayId, onContinue }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      onClick: onContinue,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1e3,
        background: "rgba(4,8,15,0.92)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.4s ease",
        cursor: "pointer"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            width: "100%",
            maxWidth: 480,
            margin: "0 24px",
            borderRadius: 24,
            overflow: "hidden",
            border: `1px solid ${dayColor}50`,
            background: `linear-gradient(145deg, rgba(4,8,15,0.98), rgba(10,20,40,0.98))`,
            boxShadow: `0 0 80px ${dayColor}30, 0 40px 80px rgba(0,0,0,0.8)`,
            animation: "unlockReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 4, background: `linear-gradient(90deg, transparent, ${dayColor}, transparent)` } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "36px 32px", textAlign: "center" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 48, marginBottom: 4, animation: "float 2s ease-in-out infinite" }, children: "🎉" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: dayColor, fontWeight: 900, fontSize: 13, letterSpacing: 3, marginBottom: 8, opacity: 0.8 }, children: [
                "DAY ",
                day.id,
                " COMPLETE"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 900, fontSize: 28, lineHeight: 1.2, marginBottom: 24 }, children: day.title }),
              badge && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                margin: "0 auto 28px",
                padding: "20px 24px",
                borderRadius: 16,
                background: `${badge.color}12`,
                border: `1px solid ${badge.color}40`,
                maxWidth: 320
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 48, marginBottom: 8 }, children: badge.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: badge.color, fontWeight: 900, fontSize: 16, marginBottom: 4 }, children: [
                  "🏅 BADGE UNLOCKED: ",
                  badge.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.5 }, children: badge.desc })
              ] }),
              hasNextDay ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: 24 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: 99,
                padding: "6px 18px",
                marginBottom: 16
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#10b981", fontWeight: 800, fontSize: 13 }, children: [
                "🔓 Day ",
                nextDayId,
                " Unlocked!"
              ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#f59e0b", fontWeight: 800, fontSize: 16, marginBottom: 24 }, children: "🏆 You completed the full 10-day course!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onContinue,
                  style: {
                    width: "100%",
                    padding: "16px 24px",
                    borderRadius: 12,
                    border: `1px solid ${dayColor}60`,
                    background: `linear-gradient(135deg, ${dayColor}30, ${dayColor}15)`,
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 16,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    boxShadow: `0 0 24px ${dayColor}30`,
                    transition: "all 0.2s"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${dayColor}50, ${dayColor}30)`;
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${dayColor}30, ${dayColor}15)`;
                  },
                  children: hasNextDay ? `🚀 Continue to Day ${nextDayId}` : "🏆 View My Badges"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 12, color: "rgba(255,255,255,0.25)", fontSize: 12 }, children: "Press any key to continue" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 4, background: `linear-gradient(90deg, transparent, ${dayColor}, transparent)` } })
          ]
        }
      )
    }
  );
}
function GameUnlockPanel({ miniGame, dayColor, dayId }) {
  var _a;
  const DIFF_LABELS = ["", "Beginner", "Easy", "Medium", "Hard", "Expert"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    borderRadius: 18,
    overflow: "hidden",
    border: `1px solid ${dayColor}50`,
    background: `linear-gradient(135deg, ${dayColor}08, rgba(0,0,0,0.6))`,
    animation: "unlockReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "12px 20px",
      textAlign: "center",
      background: `linear-gradient(90deg, ${dayColor}30, ${dayColor}15, ${dayColor}30)`,
      borderBottom: `1px solid ${dayColor}35`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 18 }, children: "🏆" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: dayColor, fontSize: 12, fontWeight: 900, letterSpacing: 2 }, children: "ALL MISSIONS COMPLETE — GAME UNLOCKED!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 18 }, children: "🎮" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "14px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      borderBottom: `1px solid ${dayColor}20`,
      background: `${dayColor}06`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 28 }, children: miniGame.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 900, fontSize: 15 }, children: miniGame.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 12 }, children: miniGame.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
          background: `${dayColor}18`,
          border: `1px solid ${dayColor}35`,
          borderRadius: 99,
          padding: "3px 12px",
          color: dayColor,
          fontSize: 11,
          fontWeight: 700
        }, children: [
          "🎯 ",
          DIFF_LABELS[miniGame.difficulty] || "Beginner"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          background: "rgba(16,185,129,0.12)",
          border: "1px solid rgba(16,185,129,0.3)",
          borderRadius: 99,
          padding: "3px 12px",
          color: "#10b981",
          fontSize: 11,
          fontWeight: 800
        }, children: "▶ LIVE IN BROWSER" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MiniGame, { dayId, dayColor, autoPlay: true }) }),
    ((_a = miniGame.concepts) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "14px 20px",
      borderTop: `1px solid ${dayColor}15`,
      background: "rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 700 }, children: "CONCEPTS USED:" }),
      miniGame.concepts.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 99,
        padding: "2px 10px",
        color: "rgba(255,255,255,0.55)",
        fontSize: 11
      }, children: c }, i))
    ] })
  ] });
}
function MissionHeader({ day }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 22, padding: "34px 32px", background: `linear-gradient(135deg, ${day.color}18, rgba(255,255,255,0.02))`, border: `1px solid ${day.color}45`, marginBottom: 28, position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", top: 0, right: 0, width: 200, height: 200, background: `radial-gradient(circle at 100% 0%, ${day.color}15 0%, transparent 60%)`, pointerEvents: "none" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: day.color, color: "#000", borderRadius: 10, padding: "6px 18px", fontFamily: "var(--font-head)", fontWeight: 900, fontSize: 13 }, children: [
        "DAY ",
        day.id
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: `${day.color}18`, color: day.color, borderRadius: 99, padding: "5px 16px", fontSize: 12, fontWeight: 700, border: `1px solid ${day.color}35` }, children: day.subtitle }),
      day.missionTag && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(245,158,11,0.12)", color: "#f59e0b", borderRadius: 99, padding: "5px 16px", fontSize: 11, fontWeight: 800, border: "1px solid rgba(245,158,11,0.25)", letterSpacing: 1 }, children: [
        "🎯 ",
        day.missionTag
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-head)", fontSize: "clamp(18px,3vw,30px)", color: "#fff", fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }, children: day.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(0,0,0,0.3)", borderLeft: `3px solid ${day.color}`, borderRadius: "0 10px 10px 0", padding: "14px 18px", marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: day.color, fontSize: 10, fontWeight: 800, letterSpacing: 2, marginBottom: 6 }, children: "📖 MISSION BRIEFING" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.75 }, children: day.story })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 20, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#f59e0b", fontWeight: 800, fontSize: 14 }, children: [
        "⚡ +",
        day.xp,
        " XP"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "rgba(255,255,255,0.4)", fontSize: 14 }, children: [
        "🎮 ",
        day.project
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "rgba(255,255,255,0.4)", fontSize: 14 }, children: [
        day.badgeIcon,
        " ",
        day.badge
      ] })
    ] }),
    day.spaceFeature && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 16, background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.15)", borderRadius: 10, padding: "10px 16px", display: "flex", gap: 10, alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 18 }, children: "🚀" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#00f5ff", fontSize: 10, fontWeight: 800, letterSpacing: 1.5 }, children: "SPACE SHOOTER UPDATE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 2 }, children: day.spaceFeature })
      ] })
    ] })
  ] });
}
const CONCEPT_EXPLAINERS = {
  "print()": { icon: "🖨️", tip: "Displays text on screen — your game's output!" },
  "input()": { icon: "⌨️", tip: "Reads keyboard input from the player." },
  "Variables": { icon: "📦", tip: "Named boxes that store data in memory." },
  "Comments": { icon: "📝", tip: "Notes for humans — Python ignores them." },
  "Strings": { icon: "💬", tip: 'Text data wrapped in "quotes".' },
  "Integers": { icon: "🔢", tip: "Whole numbers: 1, 42, -10." },
  "f-strings": { icon: "🧩", tip: "Embed variables directly inside text." },
  "Arithmetic operators": { icon: "➕", tip: "+, -, *, /, // — the math toolkit." },
  "int() / float()": { icon: "🔄", tip: "Convert strings from input() into numbers." },
  "Math module": { icon: "📐", tip: "import math gives you sqrt, ceil, floor and more." },
  "if / elif / else": { icon: "🧠", tip: "Choose different paths based on conditions." },
  "Comparison operators": { icon: "⚖️", tip: "==, !=, >, <, >=, <= — compare values." },
  "Boolean logic": { icon: "🔮", tip: "True/False — and, or, not — combine conditions." },
  "for loops": { icon: "🔁", tip: "Repeat a block for each item in a range/list." },
  "while loops": { icon: "🔄", tip: "Keep repeating while a condition is True." },
  "range()": { icon: "📏", tip: "Generates a sequence of numbers." },
  "break / continue": { icon: "⚡", tip: "break exits the loop; continue skips to next iteration." },
  "def keyword": { icon: "⚙️", tip: "Defines a reusable function." },
  "Parameters": { icon: "📥", tip: "Inputs you pass into a function." },
  "Return values": { icon: "📤", tip: "The result a function sends back." },
  "List creation": { icon: "📋", tip: "[item1, item2, item3] — ordered collection." },
  "Indexing": { icon: "🎯", tip: "Access items: list[0] is the first." },
  "random module": { icon: "🎲", tip: "import random — generates random numbers." },
  "randint()": { icon: "🎯", tip: "Random whole number between two values." },
  "Default arguments": { icon: "🔧", tip: "def fn(x=10) — x has a default if not passed." },
  "append() / remove()": { icon: "✏️", tip: "append() adds to end; remove() deletes by value." },
  "Looping through lists": { icon: "🔁", tip: "for item in my_list: — visits every element." },
  "choice()": { icon: "🎰", tip: "random.choice(list) picks one item at random." },
  "shuffle()": { icon: "🃏", tip: "random.shuffle(list) randomises the order in place." },
  "seed()": { icon: "🌱", tip: "random.seed(n) makes randomness reproducible." },
  "Pygame setup": { icon: "🎮", tip: "pygame.init() + display.set_mode() — the game window." },
  "Physics & gravity": { icon: "⬇️", tip: "velocity += gravity each frame = realistic falling." },
  "Collision detection": { icon: "💥", tip: "rect.colliderect(other) — one line for collisions!" },
  "Score system": { icon: "🏆", tip: "A variable that increments on events." },
  "Game loop": { icon: "🔄", tip: "while running: — every game lives inside this loop." },
  "Game polish": { icon: "✨", tip: "Sounds, menus, particles — the final 10% that feels like 90%." },
  "Sound effects": { icon: "🔊", tip: "pygame.mixer.Sound().play() — audio in one line." },
  "Menus": { icon: "📋", tip: "A separate loop that waits for input before starting." },
  "Presentation skills": { icon: "🎤", tip: "Explain what your code does — as important as writing it." },
  "Portfolio": { icon: "💼", tip: "Games you built = proof of your skills." },
  "Nested conditions": { icon: "🌲", tip: "if inside an if — for complex multi-condition logic." },
  "Order of operations": { icon: "📐", tip: "PEMDAS: Parentheses, Exponents, *, /, +, - in that order." }
};
function ConceptCards({ day }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 28 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 14 }, children: "🧠 Today's Power-Ups" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }, children: day.concepts.map((c, i) => {
      const ex = CONCEPT_EXPLAINERS[c] || { icon: "⚡", tip: "A core Python concept." };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: { background: `${day.color}10`, border: `1px solid ${day.color}30`, borderRadius: 12, padding: "14px 16px", transition: "all 0.2s" },
          onMouseEnter: (e) => {
            e.currentTarget.style.background = `${day.color}1e`;
            e.currentTarget.style.transform = "translateY(-2px)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.background = `${day.color}10`;
            e.currentTarget.style.transform = "none";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 24, marginBottom: 8 }, children: ex.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: day.color, fontWeight: 700, fontSize: 13, marginBottom: 4 }, children: c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 1.5 }, children: ex.tip })
          ]
        },
        i
      );
    }) })
  ] });
}
function DayLesson({ day, setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  state.completedChallenges.includes(day.id);
  const [popup, setPopup] = reactExports.useState(null);
  const handlePopupClose = () => {
    if (popup === "xp") {
      setPopup("badge");
      return;
    }
    setPopup(null);
  };
  const prevDay = day.id > 1 ? DAYS_DATA[day.id - 2] : null;
  const nextDay = day.id < 12 ? DAYS_DATA[day.id] : null;
  const nextUnlocked = nextDay && state.unlockedDays.includes(nextDay.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 900, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }, className: "page-enter day-lesson-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
      setView("lessons");
      setSelectedDay(null);
    }, style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "8px 18px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontSize: 13, marginBottom: 32, fontFamily: "inherit" }, children: "← Back to Mission Map" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MissionHeader, { day }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SetupBlock, { setup: SETUP_DATA[day.id], dayColor: day.color }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConceptCards, { day }),
    day.snippets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 28 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 8 }, children: "💻 Code Missions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 13, marginBottom: 16 }, children: "Study each snippet. Try the challenges. Modify the code and experiment!" }),
      day.snippets.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CodeSnippet, { snippet: s, dayColor: day.color }, i))
    ] }),
    day.snippets.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 16, padding: 28, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 28, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 40, marginBottom: 12 }, children: "📝" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.6)", fontSize: 15 }, children: "Code snippets for this day will be revealed in class!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 6 }, children: "Your instructor will walk through each snippet live." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChallengeEngine, { day, dayColor: day.color, setView, setSelectedDay }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      prevDay ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedDay(prevDay), style: { padding: "12px 24px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "transparent", color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 14, fontFamily: "inherit" }, children: [
        "← Day ",
        prevDay.id
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      nextDay && nextUnlocked ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedDay(nextDay), style: { padding: "12px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${day.color}, ${nextDay.color})`, color: "#000", cursor: "pointer", fontSize: 14, fontWeight: 800, fontFamily: "inherit" }, children: [
        "Day ",
        nextDay.id,
        ": ",
        nextDay.subtitle,
        " →"
      ] }) : nextDay && !nextUnlocked ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "rgba(255,255,255,0.3)", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }, children: [
        "🔒 Complete this challenge to unlock Day ",
        nextDay.id
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
    ] }),
    popup && /* @__PURE__ */ jsxRuntimeExports.jsx(RewardPopup, { type: popup, day, onClose: handlePopupClose })
  ] });
}
function BadgesPage() {
  const { state } = useProgress();
  const earned = state.earnedBadges.length;
  const total = BADGES_ALL.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 1e3, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }, className: "page-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: 44 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { color: "#f59e0b", children: "ACHIEVEMENTS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontFamily: "var(--font-head)", fontSize: 34, color: "#fff", fontWeight: 900 }, children: "Badge Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "rgba(255,255,255,0.4)", marginTop: 8, fontSize: 15 }, children: [
        "Earn all ",
        total,
        " badges to become a Python Legend."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { borderRadius: 18, padding: "22px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 36, display: "flex", gap: 32, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#f59e0b", fontFamily: "var(--font-head)", fontSize: 34, fontWeight: 900 }, children: earned }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 13 }, children: "Earned" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 1, height: 40, background: "rgba(255,255,255,0.08)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-head)", fontSize: 34, fontWeight: 900 }, children: total - earned }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 13 }, children: "Locked" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: 1, height: 40, background: "rgba(255,255,255,0.08)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#00f5ff", fontFamily: "var(--font-head)", fontSize: 34, fontWeight: 900 }, children: [
          Math.round(earned / total * 100),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "rgba(255,255,255,0.4)", fontSize: 13 }, children: "Complete" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "0 0 200px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 8, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "100%", width: `${Math.round(earned / total * 100)}%`, background: "linear-gradient(90deg, #f59e0b, #ff6b35)", borderRadius: 99, boxShadow: "0 0 12px rgba(245,158,11,0.4)" } }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(175px,1fr))", gap: 16 }, children: BADGES_ALL.map((badge, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(GlowBadge, { badge }, i)) })
  ] });
}
function AppInner() {
  const { state } = useProgress();
  const [view, setView] = reactExports.useState("landing");
  const [selectedDay, setSelectedDay] = reactExports.useState(null);
  if (!state.onboardingDone) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Onboarding, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MainLayout, { view, setView, setSelectedDay, children: [
    view === "landing" && /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, { setView, setSelectedDay }),
    view === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { setView, setSelectedDay }),
    view === "lessons" && /* @__PURE__ */ jsxRuntimeExports.jsx(LessonsGrid, { setView, setSelectedDay }),
    view === "day" && selectedDay && /* @__PURE__ */ jsxRuntimeExports.jsx(DayLesson, { day: selectedDay, setView, setSelectedDay }),
    view === "badges" && /* @__PURE__ */ jsxRuntimeExports.jsx(BadgesPage, {})
  ] });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppInner, {}) });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
