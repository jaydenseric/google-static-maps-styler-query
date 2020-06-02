# google-static-maps-styler-query

[![npm version](https://badgen.net/npm/v/google-static-maps-styler-query)](https://npm.im/google-static-maps-styler-query) [![CI status](https://github.com/jaydenseric/google-static-maps-styler-query/workflows/CI/badge.svg)](https://github.com/jaydenseric/google-static-maps-styler-query/actions)

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

## Setup

To install from [npm](https://npmjs.com) run:

```sh
npm install google-static-maps-styler-query
```

## Support

- Node.js `^10.13.0 || ^12.0.0 || >= 13.7`
- Browsers [`> 0.5%, not OperaMini all, not dead`](https://browserl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead)

## API

### Table of contents

- [function googleStaticMapsStylerQuery](#function-googlestaticmapsstylerquery)

### function googleStaticMapsStylerQuery

Converts a Google Maps styler array to a Google Static Maps styler URL query string.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `styles` | Array&lt;object> | [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference). |

**Returns:** string — [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

#### Examples

_How to create a styled static map URL._

> ```js
> const googleStaticMapsStylerQuery = require('google-static-maps-styler-query');
>
> const styles = [{ elementType: 'labels', stylers: [{ visibility: 'off' }] }];
> const stylerQuery = googleStaticMapsStylerQuery(styles);
> const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`;
> ```
