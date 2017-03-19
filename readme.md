# google-static-maps-styler-query

![NPM version](https://img.shields.io/npm/v/google-static-maps-styler-query.svg?style=flat-square) ![Github issues](https://img.shields.io/github/issues/jaydenseric/google-static-maps-styler-query.svg?style=flat-square) ![Github stars](https://img.shields.io/github/stars/jaydenseric/google-static-maps-styler-query.svg?style=flat-square)

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/static-maps/styling).

- Node >= 6.4 supported.
- [> 2%](http://browserl.ist/?q=%3E+2%25) market share browsers supported.
- [MIT license](https://en.wikipedia.org/wiki/MIT_License).

## Usage

Install with [Yarn](https://yarnpkg.com):

```
yarn add google-static-maps-styler-query
```

```js
import googleStaticMapsStylerQuery from 'google-static-maps-styler-query'

const stylerArray = [{
  stylers: [{
    visibility: 'simplified'
  }, {
    hue: '#e91e63'
  }, {
    gamma: 0.8
  }]
}, {
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}]
const stylerQuery = googleStaticMapsStylerQuery(stylerArray)
const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`
```
