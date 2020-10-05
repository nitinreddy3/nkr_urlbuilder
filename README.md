# REST API URL Builder

Generate the REST API Urls in the front-end with this little code-snippet.
Don't write:
 ```javascript
  /someapi/users/123/details?name='abc'&age=20&...
 ```

 Use the snippet

```javascript
  let url = '/someapi/users/{id}/details';
  let urlParams = {id: 123};
  let queryParams = {name: 'abc', age: 20 };

  buildRestUrl(url, urlParams, queryParams); //someapi/users/123/details?name='abc'&age=20&...
```


## Installation

```javascript
  $ npm install nkr_urlbuilder
```



## Usage

```javascript
import { buildRestUrl } from 'nkr_urlbuilder';

let url = '/someapi/users/{id}/details';
let urlParams = {id: 123};
let queryParams = {name: 'abc', age: 20 };

buildRestUrl(url, urlParams, queryParams);
```