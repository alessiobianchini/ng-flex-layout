## Getting your environment set up

1. Make sure you have `node` installed (Node 20+ recommended; see `package.json` `engines.node`).
2. Install pnpm (recommended via Corepack): `corepack enable`
3. Fork the `alessiobianchini/ng-flex-layout` repo
4. Clone your fork
5. From the root of the project, run `pnpm install`

## Building the library

* To build the library, run `pnpm run build`
* To build and serve the demo-app, run `pnpm run demo:serve`
* To build and serve the Universal app, run `pnpm run serve:universal-demo-app`

## Integration within your project

Developers should read the [Fast Starts](Fast-Starts.md) for alternate integration instructions.

### Running tests

* To run unit tests, run `pnpm test`
* To run lint, run `pnpm run lint`
