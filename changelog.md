# google-static-maps-styler-query changelog

## 2.0.0

### Major

- Support Node.js >= v8.
- New project file structure.
- Changed the single default export to a named `googleStaticMapsStylerQuery` export.
- Use `.mjs` for source files, as well as the prepared ESM files.
- Dropped the package `module` field.
- No longer publishing source code and source maps.

### Patch

- Added `changelog.md`.
- Changed a `let` to a `const`.
- Removed `yarn.lock` and Yarn installation instructions in the readme.
- Redid the readme.
- Setup Travis.
- Replaced Rollup with the Babel CLI.
- Use [`jsdoc-md`](https://npm.im/jsdoc-md) to automatically populate a new readme “API” section from source code JSDoc.
- Replaced [`standard`](https://npm.im/standard) with [`eslint-config-env`](https://npm.im/eslint-config-env).
- Use [`prettier`](https://npm.im/prettier) lint a variety of project files.
- Use [`size-limit`](https://npm.im/size-limit) to test the package bundle size.
- Use [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged) to lint on commit.
- Overhaul the package scripts:
  - Added a `clean` script.
  - Added a `prepare` script, so forks can be installed via Git.
  - Added a `test` script.
- Moved dev tool config from `package.json` to separate files, except for a new `browserslist` field.
- Added `"sideEffects": false` to `package.json`.
- Simplified the `package.json` `repository` field.
- Use HTTPS for the `package.json` `author.url` field.

## 1.0.0

Initial release.
