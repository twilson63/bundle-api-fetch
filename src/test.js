import { test } from 'tape-modern'

import api from './index'

import { mfetch, clear } from '@twilson63/mock-fetch'

import { composeBundlesRaw } from 'redux-bundler'

const url = 'https://jsonplaceholder.typicode.com'

const testBundle = {
  name: 'test',
  doFetchExample() {
    return async ({dispatch, api}) => {
      const result = await api.get('/todos')
      if (result.error) { 
        return Promise.resolve(false)
      }
      dispatch({type: 'FETCH_TODOS', payload: result})
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
}

const store = composeBundlesRaw(testBundle, api)({})

test('get example', async t => {
  mfetch(url + '/todos', 'GET', { 
    status: 200, 
    body: [{name:'Get Milk'}, {name: 'sell boat'}]
  })
  
  const result = await store.doFetchExample()
  if (!result) {
    t.ok(false)
  }
  const todos = store.selectTodos()
  t.equal(todos.length, 2)

  clear()
})

function merge(...args) {
  return Object.assign({}, ...args)
}
