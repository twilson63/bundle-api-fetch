(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['bundle-api-fetch'] = factory());
}(this, function () { 'use strict';

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

    return fetch(process.env.API + path, options).then(res => res.json());
  };

  var index = {
    name: "api",
    getExtraArgs(store) {
      const token = store.selectAccessToken();
      return {
        api: {
          get(path) {
            return apiFetch("GET", path, token);
          },
          post(path, body) {
            return apiFetch("POST", path, token, body);
          },
          put(path, body) {
            return apiFetch("PUT", path, token, body);
          },
          delete(path) {
            return apiFetch("DELETE", path, token);
          }
        }
      };
    }
  };

  return index;

}));
