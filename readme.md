# google-static-maps-styler-query

[![npm version](https://badgen.net/npm/v/google-static-maps-styler-query)](https://npm.im/google-static-maps-styler-query) [![CI status](https://github.com/jaydenseric/google-static-maps-styler-query/workflows/CI/badge.svg)](https://github.com/jaydenseric/google-static-maps-styler-query/actions)

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

## Setup

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install google-static-maps-styler-query
```

## Support

- [Node.js](https://nodejs.org): `^12.20 || >= 14.13`
- [Browsers](https://npm.im/browserslist): `> 0.5%, not OperaMini all, not IE > 0, not dead`

## API

### function googleStaticMapsStylerQuery

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `styles` | Array<object> | [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference). |

**Returns:** string — [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

#### Examples

_How to `import`._

> ```js
> import googleStaticMapsStylerQuery from 'google-static-maps-styler-query';
> ```

_How to `require`._

> ```js
> const googleStaticMapsStylerQuery = require('google-static-maps-styler-query');
> ```

_How to create a styled static map URL._

> ```js
> const styles = [{ elementType: 'labels', stylers: [{ visibility: 'off' }] }];
> const stylerQuery = googleStaticMapsStylerQuery(styles);
> const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`;
> ```
