# google-static-maps-styler-query

[![npm version](https://badgen.net/npm/v/google-static-maps-styler-query)](https://npm.im/google-static-maps-styler-query) [![CI status](https://github.com/jaydenseric/google-static-maps-styler-query/workflows/CI/badge.svg)](https://github.com/jaydenseric/google-static-maps-styler-query/actions)

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

## Installation

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install google-static-maps-styler-query
```

## Examples

How to create a styled static map URL:

```js
import googleStaticMapsStylerQuery from "google-static-maps-styler-query";

const styles = [{ elementType: "labels", stylers: [{ visibility: "off" }] }];
const stylerQuery = googleStaticMapsStylerQuery(styles);
const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`;
```

## Requirements

- [Node.js](https://nodejs.org): `^12.22.0 || ^14.17.0 || >= 16.0.0`
- [Browsers](https://npm.im/browserslist): `> 0.5%, not OperaMini all, not IE > 0, not dead`

## Exports

These ECMAScript modules are published to [npm](https://npmjs.com) and exported via the [`package.json`](./package.json) `exports` field:

- [`googleStaticMapsStylerQuery.mjs`](./googleStaticMapsStylerQuery.mjs)
