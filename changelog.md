# google-static-maps-styler-query changelog

## Next

### Major

- Updated Node.js support to `^10.13.0 || ^12.0.0 || >= 13.7`.

### Patch

- Ensure GitHub Actions run on pull request.
- Also run GitHub Actions in Node.js v14 and drop v13.

## 3.0.0

### Major

- Support Node.js v10+, from v8+. This mostly applies to this project’s development environment.
- The published files have been reorganized.
- The package now exports a single default export, instead of a named export.
- ESM is no longer published.

### Minor

- Setup [GitHub Sponsors funding](https://github.com/sponsors/jaydenseric):
  - Added `.github/funding.yml` to display a sponsor button in GitHub.
  - Added a `package.json` `funding` field to enable npm CLI funding features.

### Patch

- Updated dev dependencies.
- Setup [`eslint-plugin-compat`](https://npm.im/eslint-plugin-compat).
- Replaced the [`size-limit`](https://npm.im/size-limit) dev dependency with [`@size-limit/preset-small-lib`](https://npm.im/@size-limit/preset-small-lib).
- Removed the now redundant [`eslint-plugin-import-order-alphabetical`](https://npm.im/eslint-plugin-import-order-alphabetical) dev dependency.
- Stop using [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged).
- Added tests using new [`test-director`](https://npm.im/test-director), [`coverage-node`](https://npm.im/coverage-node) and [`hard-rejection`](https://npm.im/hard-rejection) dev dependencies.
- Refactored source to CJS, removed the build scripts and Babel related tooling.
- Removed the package `sideEffects` field.
- Removed `package-lock.json` from `.gitignore` and `.prettierignore` as it’s disabled in `.npmrc` anyway.
- Use GitHub Actions instead of Travis for CI.
- Tweaked the setup instructions.
- Clarified that Opera Mini isn’t supported in the Browserslist queries and readme “Support” section.
- Tweaked the JSDoc and simplified the example.

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
