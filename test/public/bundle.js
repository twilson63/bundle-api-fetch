(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */













    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var fulfil;
    var done = new Promise(function (f) {
        fulfil = f;
    });
    function start() {
        if (!running) {
            running = true;
            console.log('TAP version 13');
            Promise.resolve().then(function () {
                var hasOnly = tests.some(function (test) { return test.only; });
                tests.forEach(function (test) {
                    test.shouldRun = test.skip
                        ? false
                        : hasOnly ? test.only : true;
                });
                dequeue();
            });
        }
    }
    var test = Object.assign(function test(name, fn) {
        tests.push({ name: name, fn: fn, skip: false, only: false, shouldRun: false });
        start();
    }, {
        skip: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: true, only: false, shouldRun: null });
            start();
        },
        only: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: false, only: true, shouldRun: null });
            start();
        }
    });
    var i = 0;
    var running = false;
    var tests = [];
    var passed = 0;
    var failed = 0;
    var skipped = 0;
    var isNode = typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
    function logResult(ok, operator, msg, info) {
        if (info === void 0) { info = {}; }
        if (ok) {
            console.log("ok " + i + " \u2014 " + msg);
            passed += 1;
        }
        else {
            console.log("not ok " + i + " \u2014 " + msg);
            failed += 1;
            console.log('  ---');
            console.log("  operator: " + operator);
            if (isNode) {
                var util = require('util');
                if ('expected' in info)
                    console.log("  expected:\n    " + util.format(info.expected).replace(/\n/gm, "\n    "));
                if ('actual' in info)
                    console.log("  actual:\n    " + util.format(info.actual).replace(/\n/gm, "\n    "));
            }
            else {
                if ('expected' in info)
                    console.log("  expected:", info.expected);
                if ('actual' in info)
                    console.log("  actual:", info.actual);
            }
            // find where the error occurred, and try to clean it up
            var lines = new Error().stack.split('\n').slice(3);
            var cwd_1 = '';
            if (isNode) {
                cwd_1 = process.cwd();
                if (/[\/\\]/.test(cwd_1[0]))
                    cwd_1 += cwd_1[0];
                var dirname = typeof __dirname === 'string' && __dirname.replace(/dist$/, '');
                for (var i_1 = 0; i_1 < lines.length; i_1 += 1) {
                    if (~lines[i_1].indexOf(dirname)) {
                        lines = lines.slice(0, i_1);
                        break;
                    }
                }
            }
            var stack = lines
                .map(function (line) { return "    " + line.replace(cwd_1, '').trim(); })
                .join('\n');
            console.log("  stack:   \n" + stack);
            console.log("  ...");
        }
    }
    var assert = {
        fail: function (msg) { return logResult(false, 'fail', msg); },
        pass: function (msg) { return logResult(true, 'pass', msg); },
        ok: function (value, msg) {
            if (msg === void 0) { msg = 'should be truthy'; }
            return logResult(Boolean(value), 'ok', msg, {
                actual: value,
                expected: true
            });
        },
        equal: function (a, b, msg) {
            if (msg === void 0) { msg = 'should be equal'; }
            return logResult(a === b, 'equal', msg, {
                actual: a,
                expected: b
            });
        },
        throws: function (fn, expected, msg) {
            if (msg === void 0) { msg = 'should throw'; }
            try {
                fn();
                logResult(false, 'throws', msg, {
                    expected: expected
                });
            }
            catch (err) {
                if (expected instanceof Error) {
                    logResult(err.name === expected.name, 'throws', msg, {
                        actual: err.name,
                        expected: expected.name
                    });
                }
                else if (expected instanceof RegExp) {
                    logResult(expected.test(err.toString()), 'throws', msg, {
                        actual: err.toString(),
                        expected: expected
                    });
                }
                else if (typeof expected === 'function') {
                    logResult(expected(err), 'throws', msg, {
                        actual: err
                    });
                }
                else {
                    throw new Error("Second argument to t.throws must be an Error constructor, regex, or function");
                }
            }
        }
    };
    function dequeue() {
        return __awaiter(this, void 0, void 0, function () {
            var test, err_1, total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = tests[i++];
                        if (!test) return [3 /*break*/, 5];
                        if (!test.shouldRun) {
                            if (test.skip) {
                                console.log("# skip " + test.name);
                            }
                            skipped += 1;
                            dequeue();
                            return [2 /*return*/];
                        }
                        console.log("# " + test.name);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, test.fn(assert)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        failed += 1;
                        console.log("not ok " + i + " \u2014 " + err_1.message);
                        console.error("  " + err_1.stack.replace(/^\s+/gm, '    '));
                        return [3 /*break*/, 4];
                    case 4:
                        dequeue();
                        return [3 /*break*/, 6];
                    case 5:
                        total = passed + failed + skipped;
                        console.log("\n1.." + total);
                        console.log("# tests " + total);
                        if (passed)
                            console.log("# pass " + passed);
                        if (failed)
                            console.log("# fail " + failed);
                        if (skipped)
                            console.log("# skip " + skipped);
                        fulfil();
                        if (isNode)
                            process.exit(failed ? 1 : 0);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    //# sourceMappingURL=tape-modern.esm.js.map

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var tapBrowserColor = createCommonjsModule(function (module) {
    /**
     * Activate the runner by overriding `console.log` to intercept tap output.
     * Call the return value to undo the override.
     */

    module.exports = function() {
      var olog = console.log;
      var pre = document.body.appendChild(document.createElement('pre'));
      style(); // Apply initial pending style.
      console.log = function(line) {
        parse(line);
        style();
        olog.apply(console, arguments);
        pre.innerHTML += line + '\n';
      };

      return function undo() {
        console.log = olog;
      }
    };

    /**
     * These control what colors are used for the pending/failing/passing states.
     * Ensure that these are assigned by individual value, and that the entire
     * object is not assigned at once to ensure that references are intact.
     */

    var colors = module.exports.colors = {
        PENDING: '#FCD62A'
      , FAILING: '#F28E82'
      , PASSING: '#8ECA6C'
    };

    var failed = 0;
    var passed = 0;

    function parse(line) {
      if (typeof line !== 'string') line = line + '';
      if (line.indexOf('ok') === 0) {
        passed += 1;
        return;
      }

      if (line.indexOf('not ok') === 0) {
        failed += 1;
        return;
      }
    }

    function style() {
      var s = document.body.style;
      if (failed > 0) {
        s.backgroundColor = colors.FAILING;
      } else if (passed > 0 && failed === 0) {
        s.backgroundColor = colors.PASSING;
      } else {
        s.backgroundColor = colors.PENDING;
      }
    }
    });
    var tapBrowserColor_1 = tapBrowserColor.colors;

    const baseUrl = "https://jsonplaceholder.typicode.com";
    /**
     * apiFetch
     *
     * wrapper around fetch takes method, path, token and [body]
     *
     * @param {string} method - GET, POST, PUT or DELETE
     * @param {string} path - url path
     * @param {string} token - access_token
     * @param {Object} body - json body
     *
     * @returns {Promise}
     */
    const apiFetch = (method, path, token, body) => {
      let options = {
        method,
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`
        }
      };
      if (body) {
        options.body = body;
      }

      return fetch(baseUrl + path, options).then(res => res.json());
    };

    var api = {
      name: "api_bundle",
      getExtraArgs(store) {
        return {
          api: {
            get(path) {
              const token = store.selectAccessToken();
              return apiFetch("GET", path, token);
            },
            post(path, body) {
              const token = store.selectAccessToken();
     
              return apiFetch("POST", path, token, body);
            },
            put(path, body) {
              const token = store.selectAccessToken();
              return apiFetch("PUT", path, token, body);
            },
            delete(path) {
              const token = store.selectAccessToken();
              return apiFetch("DELETE", path, token);
            }
          }
        };
      }
    };

    if (!fetch) {
      throw new Error('fetch is not found! "npm install isomorphic-fetch"')
    }

    const doFetch = fetch;
    let tests$1 = [];


    /**
     * mockFetch
     *
     * create a wrapper around fetch to capture the initial request
     * and if it matches the criteria, return the response versus
     * proceeding with the fetch request
     *
     * @param {string} testUrl - the absolute url to match on
     * @param {string} testMethod - the http method to match on
     * @param {Object} response - the mock response Object
     *
     */
    function mfetch(testUrl='', testMethod='GET', response={status: 200, body: {ok: true}}) {
      if (!response.status ) { response.status = 200; } 
      if (!response.body ) { response.body = {ok: true}; }

      const matches = isMatch(testUrl, testMethod);
      tests$1 = append({test: matches, response}, tests$1);

      fetch = (url, opts={method: 'GET'}) => {
        if (!opts.method) { opts.method = 'GET'; }
        const match = tests$1.reduce((acc, t) => {
          if (t.test(url, opts.method)) {
            return t.response
          }
          return acc
        }, null, tests$1);

        if(match) {
          return Promise.resolve({
            status: match.status,
            json: () => match.body
          })
        }
        console.log(opts.method + ' -  ' + url);
        return doFetch(url, opts)
      };
    }

    mfetch.post = function (url, response) {
      return mfetch(url, 'POST', response)
    };

    mfetch.put = function (url, response) {
      return mfetch(url, 'PUT', response)
    };

    mfetch.delete = function (url, response) {
      return mfetch(url, 'DELETE', response)
    };

    /**
     * unMockFetch 
     *
     * unwraps the fetch module
     *
     */
    function clear() {
      tests$1 = [];
      fetch = doFetch;
    }

    // pure functions
    //
    function isMatch(a1, b1) {
      return function(a2, b2) {
        return and(expMatch(a1,a2), equals(b1,b2))
      }
    }

    function append(value, array) {
      return [...array, value]
    }

    function expMatch(a,b) {
      return new RegExp(a).test(b)
    }

    function and (a,b) {
      return a && b
    }

    function equals(a,b) {
      return a === b
    }

    var namedActionMiddleware = (function (store) { return function (next) { return function (action) {
      var actionCreator = action.actionCreator;
      var args = action.args;

      if (actionCreator) {
        var found = store.meta.unboundActionCreators[actionCreator];

        if (!found) {
          throw Error(("NoSuchActionCreator: " + actionCreator));
        }

        return next(args ? found.apply(void 0, args) : found());
      }

      return next(action);
    }; }; });

    var thunkMiddleware = (function (extraArgCreators) { return function (store) {
      var extraArgs = extraArgCreators.reduce(function (result, fn) { return Object.assign(result, fn(store)); }, {});
      return function (next) { return function (action) {
        if (typeof action === 'function') {
          var getState = store.getState;
          var dispatch = store.dispatch;
          return action(Object.assign({}, {
            getState: getState,
            dispatch: dispatch,
            store: store
          }, extraArgs));
        }

        return next(action);
      }; };
    }; });

    function symbolObservablePonyfill(root) {
    	var result;
    	var Symbol = root.Symbol;

    	if (typeof Symbol === 'function') {
    		if (Symbol.observable) {
    			result = Symbol.observable;
    		} else {
    			result = Symbol('observable');
    			Symbol.observable = result;
    		}
    	} else {
    		result = '@@observable';
    	}

    	return result;
    }

    /* global window */

    var root;

    if (typeof self !== 'undefined') {
      root = self;
    } else if (typeof window !== 'undefined') {
      root = window;
    } else if (typeof global !== 'undefined') {
      root = global;
    } else if (typeof module !== 'undefined') {
      root = module;
    } else {
      root = Function('return this')();
    }

    var result = symbolObservablePonyfill(root);

    /**
     * These are private action types reserved by Redux.
     * For any unknown actions, you must return the current state.
     * If the current state is undefined, you must return the initial state.
     * Do not reference these action types directly in your code.
     */
    var ActionTypes = {
      INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
      REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
    };

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    /**
     * @param {any} obj The object to inspect.
     * @returns {boolean} True if the argument appears to be a plain object.
     */
    function isPlainObject(obj) {
      if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

      var proto = obj;
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }

      return Object.getPrototypeOf(obj) === proto;
    }

    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */
    function createStore(reducer, preloadedState, enhancer) {
      var _ref2;

      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
      }

      if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
          throw new Error('Expected the enhancer to be a function.');
        }

        return enhancer(createStore)(reducer, preloadedState);
      }

      if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
      }

      var currentReducer = reducer;
      var currentState = preloadedState;
      var currentListeners = [];
      var nextListeners = currentListeners;
      var isDispatching = false;

      function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice();
        }
      }

      /**
       * Reads the state tree managed by the store.
       *
       * @returns {any} The current state tree of your application.
       */
      function getState() {
        if (isDispatching) {
          throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }

        return currentState;
      }

      /**
       * Adds a change listener. It will be called any time an action is dispatched,
       * and some part of the state tree may potentially have changed. You may then
       * call `getState()` to read the current state tree inside the callback.
       *
       * You may call `dispatch()` from a change listener, with the following
       * caveats:
       *
       * 1. The subscriptions are snapshotted just before every `dispatch()` call.
       * If you subscribe or unsubscribe while the listeners are being invoked, this
       * will not have any effect on the `dispatch()` that is currently in progress.
       * However, the next `dispatch()` call, whether nested or not, will use a more
       * recent snapshot of the subscription list.
       *
       * 2. The listener should not expect to see all state changes, as the state
       * might have been updated multiple times during a nested `dispatch()` before
       * the listener is called. It is, however, guaranteed that all subscribers
       * registered before the `dispatch()` started will be called with the latest
       * state by the time it exits.
       *
       * @param {Function} listener A callback to be invoked on every dispatch.
       * @returns {Function} A function to remove this change listener.
       */
      function subscribe(listener) {
        if (typeof listener !== 'function') {
          throw new Error('Expected the listener to be a function.');
        }

        if (isDispatching) {
          throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
        }

        var isSubscribed = true;

        ensureCanMutateNextListeners();
        nextListeners.push(listener);

        return function unsubscribe() {
          if (!isSubscribed) {
            return;
          }

          if (isDispatching) {
            throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
          }

          isSubscribed = false;

          ensureCanMutateNextListeners();
          var index = nextListeners.indexOf(listener);
          nextListeners.splice(index, 1);
        };
      }

      /**
       * Dispatches an action. It is the only way to trigger a state change.
       *
       * The `reducer` function, used to create the store, will be called with the
       * current state tree and the given `action`. Its return value will
       * be considered the **next** state of the tree, and the change listeners
       * will be notified.
       *
       * The base implementation only supports plain object actions. If you want to
       * dispatch a Promise, an Observable, a thunk, or something else, you need to
       * wrap your store creating function into the corresponding middleware. For
       * example, see the documentation for the `redux-thunk` package. Even the
       * middleware will eventually dispatch plain object actions using this method.
       *
       * @param {Object} action A plain object representing “what changed”. It is
       * a good idea to keep actions serializable so you can record and replay user
       * sessions, or use the time travelling `redux-devtools`. An action must have
       * a `type` property which may not be `undefined`. It is a good idea to use
       * string constants for action types.
       *
       * @returns {Object} For convenience, the same action object you dispatched.
       *
       * Note that, if you use a custom middleware, it may wrap `dispatch()` to
       * return something else (for example, a Promise you can await).
       */
      function dispatch(action) {
        if (!isPlainObject(action)) {
          throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }

        if (typeof action.type === 'undefined') {
          throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }

        if (isDispatching) {
          throw new Error('Reducers may not dispatch actions.');
        }

        try {
          isDispatching = true;
          currentState = currentReducer(currentState, action);
        } finally {
          isDispatching = false;
        }

        var listeners = currentListeners = nextListeners;
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener();
        }

        return action;
      }

      /**
       * Replaces the reducer currently used by the store to calculate the state.
       *
       * You might need this if your app implements code splitting and you want to
       * load some of the reducers dynamically. You might also need this if you
       * implement a hot reloading mechanism for Redux.
       *
       * @param {Function} nextReducer The reducer for the store to use instead.
       * @returns {void}
       */
      function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
          throw new Error('Expected the nextReducer to be a function.');
        }

        currentReducer = nextReducer;
        dispatch({ type: ActionTypes.REPLACE });
      }

      /**
       * Interoperability point for observable/reactive libraries.
       * @returns {observable} A minimal observable of state changes.
       * For more information, see the observable proposal:
       * https://github.com/tc39/proposal-observable
       */
      function observable() {
        var _ref;

        var outerSubscribe = subscribe;
        return _ref = {
          /**
           * The minimal observable subscription method.
           * @param {Object} observer Any object that can be used as an observer.
           * The observer object should have a `next` method.
           * @returns {subscription} An object with an `unsubscribe` method that can
           * be used to unsubscribe the observable from the store, and prevent further
           * emission of values from the observable.
           */
          subscribe: function subscribe(observer) {
            if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
              throw new TypeError('Expected the observer to be an object.');
            }

            function observeState() {
              if (observer.next) {
                observer.next(getState());
              }
            }

            observeState();
            var unsubscribe = outerSubscribe(observeState);
            return { unsubscribe: unsubscribe };
          }
        }, _ref[result] = function () {
          return this;
        }, _ref;
      }

      // When a store is created, an "INIT" action is dispatched so that every
      // reducer returns their initial state. This effectively populates
      // the initial state tree.
      dispatch({ type: ActionTypes.INIT });

      return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
      }, _ref2[result] = observable, _ref2;
    }

    function getUndefinedStateErrorMessage(key, action) {
      var actionType = action && action.type;
      var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

      return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
    }

    function assertReducerShape(reducers) {
      Object.keys(reducers).forEach(function (key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, { type: ActionTypes.INIT });

        if (typeof initialState === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
        }

        var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
        if (typeof reducer(undefined, { type: type }) === 'undefined') {
          throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
        }
      });
    }

    /**
     * Turns an object whose values are different reducer functions, into a single
     * reducer function. It will call every child reducer, and gather their results
     * into a single state object, whose keys correspond to the keys of the passed
     * reducer functions.
     *
     * @param {Object} reducers An object whose values correspond to different
     * reducer functions that need to be combined into one. One handy way to obtain
     * it is to use ES6 `import * as reducers` syntax. The reducers may never return
     * undefined for any action. Instead, they should return their initial state
     * if the state passed to them was undefined, and the current state for any
     * unrecognized action.
     *
     * @returns {Function} A reducer function that invokes every reducer inside the
     * passed object, and builds a state object with the same shape.
     */
    function combineReducers(reducers) {
      var reducerKeys = Object.keys(reducers);
      var finalReducers = {};
      for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];

        if (typeof reducers[key] === 'function') {
          finalReducers[key] = reducers[key];
        }
      }
      var finalReducerKeys = Object.keys(finalReducers);

      var shapeAssertionError = void 0;
      try {
        assertReducerShape(finalReducers);
      } catch (e) {
        shapeAssertionError = e;
      }

      return function combination() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        if (shapeAssertionError) {
          throw shapeAssertionError;
        }

        var hasChanged = false;
        var nextState = {};
        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
          var _key = finalReducerKeys[_i];
          var reducer = finalReducers[_key];
          var previousStateForKey = state[_key];
          var nextStateForKey = reducer(previousStateForKey, action);
          if (typeof nextStateForKey === 'undefined') {
            var errorMessage = getUndefinedStateErrorMessage(_key, action);
            throw new Error(errorMessage);
          }
          nextState[_key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
      };
    }

    function bindActionCreator(actionCreator, dispatch) {
      return function () {
        return dispatch(actionCreator.apply(this, arguments));
      };
    }

    /**
     * Turns an object whose values are action creators, into an object with the
     * same keys, but with every function wrapped into a `dispatch` call so they
     * may be invoked directly. This is just a convenience method, as you can call
     * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
     *
     * For convenience, you can also pass a single function as the first argument,
     * and get a function in return.
     *
     * @param {Function|Object} actionCreators An object whose values are action
     * creator functions. One handy way to obtain it is to use ES6 `import * as`
     * syntax. You may also pass a single function.
     *
     * @param {Function} dispatch The `dispatch` function available on your Redux
     * store.
     *
     * @returns {Function|Object} The object mimicking the original object, but with
     * every action creator wrapped into the `dispatch` call. If you passed a
     * function as `actionCreators`, the return value will also be a single
     * function.
     */
    function bindActionCreators(actionCreators, dispatch) {
      if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
      }

      if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
        throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      }

      var keys = Object.keys(actionCreators);
      var boundActionCreators = {};
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') {
          boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
      }
      return boundActionCreators;
    }

    /**
     * Composes single-argument functions from right to left. The rightmost
     * function can take multiple arguments as it provides the signature for
     * the resulting composite function.
     *
     * @param {...Function} funcs The functions to compose.
     * @returns {Function} A function obtained by composing the argument functions
     * from right to left. For example, compose(f, g, h) is identical to doing
     * (...args) => f(g(h(...args))).
     */

    function compose() {
      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      if (funcs.length === 0) {
        return function (arg) {
          return arg;
        };
      }

      if (funcs.length === 1) {
        return funcs[0];
      }

      return funcs.reduce(function (a, b) {
        return function () {
          return a(b.apply(undefined, arguments));
        };
      });
    }

    // Modified to expose all of `store` to middleware instead of just
    var customApplyMiddleware = (function () {
      var middlewares = [], len = arguments.length;
      while ( len-- ) middlewares[ len ] = arguments[ len ];

      return function (createStore$$1) { return function (reducer, preloadedState, enhancer) {
      var store = createStore$$1(reducer, preloadedState, enhancer);
      var chain = middlewares.map(function (middleware) { return middleware(store); });
      store.dispatch = compose.apply(void 0, chain)(store.dispatch);
      return store;
    }; };
    });

    function defaultEqualityCheck(a, b) {
      return a === b;
    }

    function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
      if (prev === null || next === null || prev.length !== next.length) {
        return false;
      }

      // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
      var length = prev.length;
      for (var i = 0; i < length; i++) {
        if (!equalityCheck(prev[i], next[i])) {
          return false;
        }
      }

      return true;
    }

    function defaultMemoize(func) {
      var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

      var lastArgs = null;
      var lastResult = null;
      // we reference arguments instead of spreading them for performance reasons
      return function () {
        if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
          // apply arguments instead of spreading for performance.
          lastResult = func.apply(null, arguments);
        }

        lastArgs = arguments;
        return lastResult;
      };
    }

    function getDependencies(funcs) {
      var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

      if (!dependencies.every(function (dep) {
        return typeof dep === 'function';
      })) {
        var dependencyTypes = dependencies.map(function (dep) {
          return typeof dep;
        }).join(', ');
        throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
      }

      return dependencies;
    }

    function createSelectorCreator(memoize) {
      for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        memoizeOptions[_key - 1] = arguments[_key];
      }

      return function () {
        for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          funcs[_key2] = arguments[_key2];
        }

        var recomputations = 0;
        var resultFunc = funcs.pop();
        var dependencies = getDependencies(funcs);

        var memoizedResultFunc = memoize.apply(undefined, [function () {
          recomputations++;
          // apply arguments instead of spreading for performance.
          return resultFunc.apply(null, arguments);
        }].concat(memoizeOptions));

        // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
        var selector = defaultMemoize(function () {
          var params = [];
          var length = dependencies.length;

          for (var i = 0; i < length; i++) {
            // apply arguments instead of spreading and mutate a local list of params for performance.
            params.push(dependencies[i].apply(null, arguments));
          }

          // apply arguments instead of spreading for performance.
          return memoizedResultFunc.apply(null, params);
        });

        selector.resultFunc = resultFunc;
        selector.recomputations = function () {
          return recomputations;
        };
        selector.resetRecomputations = function () {
          return recomputations = 0;
        };
        return selector;
      };
    }

    var createSelector = createSelectorCreator(defaultMemoize);
    var resolveSelectors = function (obj) {
      // an item is resolved if it is either a
      // function with no dependencies or if
      // it's on the object with no dependencies
      var isResolved = function (name) { return name.call && !name.deps || !obj[name].deps; }; // flag for checking if we have *any*


      var hasAtLeastOneResolved = false; // extract all deps and any resolved items

      var loop = function ( selectorName ) {
        var fn = obj[selectorName];

        if (!isResolved(selectorName)) {
          fn.deps = fn.deps.map(function (val, index) {
            // if it is a function not a string
            if (val.call) {
              // look for it already on the object
              for (var key in obj) {
                if (obj[key] === val) {
                  // return its name if found
                  return key;
                }
              } // we didn't find it and it doesn't have a name
              // but if it's a fully resolved selector that's ok


              if (!val.deps) {
                hasAtLeastOneResolved = true;
                return val;
              }
            } // the `val` is a string that exists on the object return the string
            // we'll resolve it later


            if (obj[val]) { return val; } // if we get here, its a string that doesn't exist on the object
            // which won't work, so we throw a helpful error

            throw Error(("The input selector at index " + index + " for '" + selectorName + "' is missing from the object passed to resolveSelectors()"));
          });
        } else {
          hasAtLeastOneResolved = true;
        }
      };

      for (var selectorName in obj) loop( selectorName );

      if (!hasAtLeastOneResolved) {
        throw Error("You must pass at least one real selector. If they're all string references there's no");
      }

      var depsAreResolved = function (deps) { return deps.every(isResolved); };

      var resolve = function () {
        var hasUnresolved = false;

        for (var selectorName in obj) {
          var fn = obj[selectorName];

          if (!isResolved(selectorName)) {
            hasUnresolved = true;

            if (depsAreResolved(fn.deps)) {
              // we could just use `obj[selectorName] = fn(obj, fn.deps)`, but that
              // has a significant performance impact when trying to perform this
              // on a large object (> 1000). More on this here:
              // http://2ality.com/2014/01/object-assign.html
              var selectorFn = fn(obj, fn.deps);
              delete obj[selectorName];
              obj[selectorName] = selectorFn;
            }
          }
        }

        return hasUnresolved;
      };

      var startTime;

      while (resolve()) {
        if (!startTime) { startTime = Date.now(); }
        var duration = Date.now() - startTime;

        if (duration > 500) {
          throw Error('Could not resolve selector dependencies.');
        }
      }

      return obj;
    };
    //# sourceMappingURL=index.m.js.map

    var debug = false;

    try {
      debug = !!window.localStorage.debug;
    } catch (e) {}

    var HAS_DEBUG_FLAG = debug || false;
    var HAS_WINDOW = typeof window !== 'undefined';
    var IS_BROWSER = HAS_WINDOW || typeof self !== 'undefined';
    var IS_PROD = "production" === 'production';

    var fallback = function (func) {
      setTimeout(func, 0);
    };

    var raf = IS_BROWSER && self.requestAnimationFrame ? self.requestAnimationFrame : fallback;
    var ric = IS_BROWSER && self.requestIdleCallback ? self.requestIdleCallback : fallback; // can dump this once IE 11 support is no longer necessary

    var isPassiveSupported = function () {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function () {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
      } catch (err) {
        passiveSupported = false;
      }

      return passiveSupported;
    };
    var PASSIVE_EVENTS_SUPPORTED = isPassiveSupported();
    var startsWith = function (string, searchString) { return string.substr(0, searchString.length) === searchString; };
    var selectorNameToValueName = function (name) {
      var start = name[0] === 's' ? 6 : 5;
      return name[start].toLowerCase() + name.slice(start + 1);
    };

    var normalizeBundle = function (bundle) {
      var name = bundle.name;
      if (!name) { throw TypeError('bundles must have a "name" property'); }
      var result = {
        name: name,
        reducer: bundle.reducer || bundle.getReducer && bundle.getReducer() || null,
        init: bundle.init || null,
        extraArgCreators: bundle.getExtraArgs || null,
        middlewareCreators: bundle.getMiddleware,
        actionCreators: null,
        selectors: null,
        reactorNames: null,
        rawBundle: bundle
      };
      Object.keys(bundle).forEach(function (key) {
        if (startsWith(key, 'do')) {
          (result.actionCreators || (result.actionCreators = {}))[key] = bundle[key];
          return;
        }

        var isSelector = startsWith(key, 'select');
        var isReactor = startsWith(key, 'react');

        if (isSelector || isReactor) {
          (result.selectors || (result.selectors = {}))[key] = bundle[key];

          if (isReactor) {
            (result.reactorNames || (result.reactorNames = [])).push(key);
          }
        }
      });
      return result;
    };
    var createChunk = function (rawBundles) {
      var normalizedBundles = rawBundles.map(normalizeBundle);
      var result = {
        bundleNames: [],
        reducers: {},
        selectors: {},
        actionCreators: {},
        rawBundles: [],
        processedBundles: [],
        initMethods: [],
        middlewareCreators: [],
        extraArgCreators: [],
        reactorNames: []
      };
      normalizedBundles.forEach(function (bundle) {
        var obj, ref;

        result.bundleNames.push(bundle.name);
        Object.assign(result.selectors, bundle.selectors);
        Object.assign(result.actionCreators, bundle.actionCreators);

        if (bundle.reducer) {
          Object.assign(result.reducers, ( obj = {}, obj[bundle.name] = bundle.reducer, obj ));
        }

        if (bundle.init) { result.initMethods.push(bundle.init); }

        if (bundle.middlewareCreators) {
          result.middlewareCreators.push(bundle.middlewareCreators);
        }

        if (bundle.extraArgCreators) {
          result.extraArgCreators.push(bundle.extraArgCreators);
        }

        if (bundle.reactorNames) { (ref = result.reactorNames).push.apply(ref, bundle.reactorNames); }
        result.processedBundles.push(bundle);
        result.rawBundles.push(bundle.rawBundle);
      });
      return result;
    };

    var addBindingMethods = (function (store) {
      store.subscriptions = {
        watchedValues: {}
      };
      var subscriptions = store.subscriptions.set = new Set();
      var watchedSelectors = store.subscriptions.watchedSelectors = {};

      var watch = function (selectorName) {
        watchedSelectors[selectorName] = (watchedSelectors[selectorName] || 0) + 1;
      };

      var unwatch = function (selectorName) {
        var count = watchedSelectors[selectorName] - 1;

        if (count === 0) {
          delete watchedSelectors[selectorName];
        } else {
          watchedSelectors[selectorName] = count;
        }
      }; // add single store subscription for tracking watched changes


      store.subscribe(function () {
        var newValues = watchedSelectors.all ? store.selectAll() : store.select(Object.keys(watchedSelectors));
        var ref = store.subscriptions;
        var watchedValues = ref.watchedValues; // the only diffing in the app happens here

        var changed = {};

        for (var key in newValues) {
          var val = newValues[key];

          if (val !== watchedValues[key]) {
            changed[key] = val;
          }
        }

        store.subscriptions.watchedValues = newValues; // look through subscriptions to trigger

        subscriptions.forEach(function (subscription) {
          var relevantChanges = {};
          var hasChanged = false;

          if (subscription.names === 'all') {
            Object.assign(relevantChanges, changed);
            hasChanged = !!Object.keys(relevantChanges).length;
          } else {
            subscription.names.forEach(function (name) {
              if (changed.hasOwnProperty(name)) {
                relevantChanges[name] = changed[name];
                hasChanged = true;
              }
            });
          }

          if (hasChanged) {
            subscription.fn(relevantChanges);
          }
        });
      }); // this exists separately in order to support
      // subscribing to all changes even after lazy-loading
      // additional bundles

      store.subscribeToAllChanges = function (callback) { return store.subscribeToSelectors('all', callback); }; // given an array of selector names, it will call the
      // callback any time those have changed with an object
      // containing only changed values


      store.subscribeToSelectors = function (keys, callback) {
        var isAll = keys === 'all'; // re-use loop for double duty
        // extract names, but also ensure
        // selector actually exists on store

        var subscription = {
          fn: callback,
          names: isAll ? 'all' : keys.map(selectorNameToValueName)
        };
        subscriptions.add(subscription);
        isAll ? watch('all') : keys.forEach(watch); // make sure starting values are in watched so we can
        // track changes

        Object.assign(store.subscriptions.watchedValues, isAll ? store.selectAll() : store.select(keys)); // return function that can be used to unsubscribe

        return function () {
          subscriptions.delete(subscription);
          isAll ? unwatch('all') : keys.forEach(unwatch);
        };
      };
    });

    var bindSelectorsToStore = function (store, selectors) {
      var loop = function ( key ) {
        var selector = selectors[key];

        if (!store[key]) {
          store[key] = function () { return selector(store.getState()); };
        }
      };

      for (var key in selectors) loop( key );
    };

    var decorateStore = function (store, processed) {
      if (!store.meta) {
        store.meta = {
          chunks: [],
          unboundSelectors: {},
          unboundActionCreators: {},
          reactorNames: []
        };
      }

      var meta = store.meta; // attach for reference

      meta.chunks.push(processed); // grab existing unbound (but resolved) selectors, combine with new ones

      var combinedSelectors = Object.assign(meta.unboundSelectors, processed.selectors); // run resolver

      resolveSelectors(combinedSelectors); // update collection of resolved selectors

      meta.unboundSelectors = combinedSelectors; // make sure all selectors are bound (won't overwrite if already bound)

      bindSelectorsToStore(store, combinedSelectors); // build our list of reactor names

      meta.reactorNames = meta.reactorNames.concat(processed.reactorNames); // extend global collections with new stuff

      Object.assign(meta.unboundActionCreators, processed.actionCreators); // bind and attach only the next action creators to the store

      Object.assign(store, bindActionCreators(processed.actionCreators, store.dispatch)); // run any new init methods

      processed.initMethods.forEach(function (fn) { return fn(store); });
    };

    var enableBatchDispatch = function (reducer) { return function (state, action) {
      if (action.type === 'BATCH_ACTIONS') {
        return action.actions.reduce(reducer, state);
      }

      return reducer(state, action);
    }; };

    var enableReplaceState = function (reducer) { return function (state, action) {
      if (action.type === 'REPLACE_STATE') {
        return reducer(action.payload, action);
      }

      return reducer(state, action);
    }; };

    var enhanceReducer = compose(enableBatchDispatch, enableReplaceState);

    var devTools = function () { return HAS_WINDOW && window.__REDUX_DEVTOOLS_EXTENSION__ && (HAS_DEBUG_FLAG || !IS_PROD) ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (a) { return a; }; };

    var composeBundles = function () {
      var bundles = [], len = arguments.length;
      while ( len-- ) bundles[ len ] = arguments[ len ];

      // build out object of extracted bundle info
      var firstChunk = createChunk(bundles);
      return function (data) {
        // actually init our store
        var store = createStore(enhanceReducer(combineReducers(firstChunk.reducers)), data, compose(customApplyMiddleware.apply(void 0, [ namedActionMiddleware, thunkMiddleware(firstChunk.extraArgCreators) ].concat( firstChunk.middlewareCreators.map(function (fn) { return fn(firstChunk); }) )), devTools())); // get values from an array of selector names

        store.select = function (selectorNames) { return selectorNames.reduce(function (obj, name) {
          if (!store[name]) { throw Error(("SelectorNotFound " + name)); }
          obj[selectorNameToValueName(name)] = store[name]();
          return obj;
        }, {}); }; // get all values from all available selectors (even if added later)


        store.selectAll = function () { return store.select(Object.keys(store.meta.unboundSelectors)); }; // add support for dispatching an action by name


        store.action = function (name, args) { return store[name].apply(store, args); }; // adds support for subscribing to changes from an array of selector strings


        addBindingMethods(store); // add all the gathered bundle data into the store

        decorateStore(store, firstChunk); // defines method for integrating other bundles later

        store.integrateBundles = function () {
          var bundlesToIntegrate = [], len = arguments.length;
          while ( len-- ) bundlesToIntegrate[ len ] = arguments[ len ];

          decorateStore(store, createChunk(bundlesToIntegrate));
          var allReducers = store.meta.chunks.reduce(function (accum, chunk) { return Object.assign(accum, chunk.reducers); }, {});
          store.replaceReducer(enhanceReducer(combineReducers(allReducers)));
        };

        return store;
      };
    };

    var loc = (function () {
      if (!HAS_WINDOW) { return {}; }
      return window.location;
    })();
    var composeBundlesRaw = composeBundles;

    const url = 'https://jsonplaceholder.typicode.com';

    const testBundle = {
      name: 'test',
      doFetchExample() {
        return async ({dispatch, api}) => {
          const result = await api.get('/todos');
          if (result.error) { 
            return Promise.resolve(false)
          }
          dispatch({type: 'FETCH_TODOS', payload: result});
          return Promise.resolve(true)
        }
      },
      reducer(state={data: []}, {type, payload}) {
        if (type === 'FETCH_TODOS') {
          return merge(state, {data: payload})
        }
        return state
      },
      selectTodos(state) {
        return state.test.data
      },
      selectAccessToken() {
        return 'OPENSESME'
      }
    };

    const store = composeBundlesRaw(testBundle, api)({});

    test('get example', async t => {
      mfetch(url + '/todos', 'GET', { 
        status: 200, 
        body: [{name:'Get Milk'}, {name: 'sell boat'}]
      });
      
      const result = await store.doFetchExample();
      if (!result) {
        t.ok(false);
      }
      const todos = store.selectTodos();
      t.equal(todos.length, 2);

      clear();
    });

    function merge(...args) {
      return Object.assign({}, ...args)
    }

    tapBrowserColor();

    window.done = done;

}());
