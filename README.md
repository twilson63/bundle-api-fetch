# bundler-api-fetch

An opinionated bundle for fetching api resources.

api-fetch wraps around the whatwg fetch command and provides four functions.

* get
* post
* put
* delete

They should look familiar they are http verbs.

## Install

```
npm install bundle-api-fetch
```

## Usage

``` js
import { composeBundles } from 'redux-bundler'
import { api } from 'bundle-api-fetch'

export default composeBundles(api, ...)
```

## Testing

```
yarn test
```




