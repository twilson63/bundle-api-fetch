const baseUrl = process.env.API
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

export default {
  name: "api_bundle",
  getExtraArgs(store) {
    if (!store.selectAccessToken) {
      throw new Error('Access Token Selector Required!')
    }
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
