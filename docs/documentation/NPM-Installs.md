## Install Latest NPM Release

```bash
npm install --save ng-flex-layout@latest
```

or:

```bash
pnpm add ng-flex-layout@latest
```

> For recent fixes and code merges that have **not yet been released to npm**, prefer installing from a local build.

### Install from a Local Build (unreleased changes)

From this repository:

```bash
pnpm install
pnpm run build
cd dist/releases/flex-layout
npm pack
```

Then, in your app:

```bash
npm install /path/to/ng-flex-layout-<version>.tgz
```

----

> Developers may need to first clear their existing `node_modules` directory using:
```bash
rm -rf node_modules/
npm install
```
