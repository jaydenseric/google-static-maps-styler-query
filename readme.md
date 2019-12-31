# google-static-maps-styler-query

[![npm version](https://badgen.net/npm/v/google-static-maps-styler-query)](https://npm.im/google-static-maps-styler-query) [![Build status](https://travis-ci.org/jaydenseric/google-static-maps-styler-query.svg?branch=master)](https://travis-ci.org/jaydenseric/google-static-maps-styler-query)

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

## Setup

To install [`google-static-maps-styler-query`](https://npm.im/google-static-maps-styler-query) from [npm](https://npmjs.com) run:

```sh
npm install google-static-maps-styler-query
```

## Support

- Node.js v10+
- Browsers [`> 0.5%, not dead`](https://browserl.ist/?q=%3E+0.5%25%2C+not+dead)

## API

### Table of contents

- [function googleStaticMapsStylerQuery](#function-googlestaticmapsstylerquery)

### function googleStaticMapsStylerQuery

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

| Parameter | Type             | Description               |
| :-------- | :--------------- | :------------------------ |
| `styles`  | Array&lt;object> | Google Maps styler array. |

**Returns:** string — Google Static Maps styler URL query string.

#### Examples

_Import using ESM._

> ```js
> import { googleStaticMapsStylerQuery } from 'google-static-maps-styler-query'
> ```

_Import using CJS._

> ```js
> const { googleStaticMapsStylerQuery } require('google-static-maps-styler-query')
> ```

_A simple conversion._

> ```js
> const stylerArray = [
>   {
>     stylers: [
>       { visibility: 'simplified' },
>       { hue: '#e91e63' },
>       { gamma: 0.8 }
>     ]
>   },
>   {
>     elementType: 'labels',
>     stylers: [{ visibility: 'off' }]
>   }
> ]
> const stylerQuery = googleStaticMapsStylerQuery(stylerArray)
> const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`
> ```
