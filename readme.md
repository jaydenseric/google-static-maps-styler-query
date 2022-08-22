# google-static-maps-styler-query

Converts a [Google Maps styler array](https://developers.google.com/maps/documentation/javascript/style-reference) to a [Google Static Maps styler URL query string](https://developers.google.com/maps/documentation/maps-static/styling).

## Installation

For [Node.js](https://nodejs.org), to install [`google-static-maps-styler-query`](https://npm.im/google-static-maps-styler-query) with [npm](https://npmjs.com/get-npm), run:

```sh
npm install google-static-maps-styler-query
```

For browsers, an example import map:

```json
{
  "imports": {
    "google-static-maps-styler-query": "https://unpkg.com/google-static-maps-styler-query@6.0.0/googleStaticMapsStylerQuery.mjs"
  }
}
```

Then, import and use the function [`googleStaticMapsStylerQuery`](./googleStaticMapsStylerQuery.mjs).

## Examples

How to create a styled static map URL:

```js
import googleStaticMapsStylerQuery from "google-static-maps-styler-query";

const styles = [{ elementType: "labels", stylers: [{ visibility: "off" }] }];
const stylerQuery = googleStaticMapsStylerQuery(styles);
const googleStaticMapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=250x200${stylerQuery}`;
```

## Requirements

Supported runtime environments:

- [Node.js](https://nodejs.org) versions `^14.17.0 || ^16.0.0 || >= 18.0.0`.
- Browsers matching the [Browserslist](https://browsersl.ist) query [`> 0.5%, not OperaMini all, not dead`](https://browsersl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead).

Projects must configure [TypeScript](https://typescriptlang.org) to use types from the ECMAScript modules that have a `// @ts-check` comment:

- [`compilerOptions.allowJs`](https://typescriptlang.org/tsconfig#allowJs) should be `true`.
- [`compilerOptions.maxNodeModuleJsDepth`](https://typescriptlang.org/tsconfig#maxNodeModuleJsDepth) should be reasonably large, e.g. `10`.
- [`compilerOptions.module`](https://typescriptlang.org/tsconfig#module) should be `"node16"` or `"nodenext"`.

## Exports

The [npm](https://npmjs.com) package [`google-static-maps-styler-query`](https://npm.im/google-static-maps-styler-query) features [optimal JavaScript module design](https://jaydenseric.com/blog/optimal-javascript-module-design). These ECMAScript modules are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`googleStaticMapsStylerQuery.mjs`](./googleStaticMapsStylerQuery.mjs)
