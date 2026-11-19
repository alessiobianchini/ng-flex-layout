<h3 align="center">
ng-flex-layout
</h3>
<h5 align="center">
 <a href="https://github.com/sponsors/alessiobianchini" target="_blank">
  Support my open-source code as a sponsor
 </a>
</h5>

*** 

  - Updated to Angular 22
  - Migrated from tslint to eslint
  - Migrated tests to **Vitest**
  - Added non-breaking **Signals** wrappers (RxJS remains the base API)

***

[![npm version](https://img.shields.io/npm/v/ng-flex-layout)](https://www.npmjs.com/package/ng-flex-layout)
[![Test lib CI](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/test-lib.yml/badge.svg)](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/test-lib.yml)
[![CodeQL](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/github-code-scanning/codeql)

Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.

The Flex Layout engine intelligently automates the process of applying appropriate Flexbox CSS to browser view hierarchies. This automation also addresses many of the complexities and workarounds encountered with the traditional, manual, CSS-only application of box CSS.

The **real** power of Flex Layout, however, is its **responsive** engine. The [Responsive API](https://github.com/alessiobianchini/ng-flex-layout/wiki/Responsive-API) enables developers to easily specify different layouts, sizing, visibilities for different viewport sizes and display devices.

---

### Getting Started

Start by installing the Angular Layout library and CDK from `npm`:

```bash
npm install -s ng-flex-layout @angular/cdk@^22.3
```

The 22.x package built from this branch requires Angular and Angular CDK 22.3 or
later. Use a CDK version matching your application's Angular version.

Next, import the Layout module in your app's module.

**app.module.ts**

```typescript
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from 'ng-flex-layout';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [FlexLayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

After configuration, use the Angular Layout attributes in your HTML tags:

```html
<div fxLayout="row" fxLayoutAlign="space-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Check out [all of the available options](https://github.com/alessiobianchini/ng-flex-layout/wiki/Declarative-API-Overview) for using Angular Layout in your application.

---

### Signals (Optional)

RxJS remains the canonical API; Signals wrappers are provided as conveniences for Signal-based components.

- `MediaObserver.asSignal()` (wraps `asObservable()` via `toSignal()`)
- `MatchMedia.observeAsSignal()` (wraps `observe()` via `toSignal()`)
- `MediaMarshaller.trackValueAsSignal()` (wraps `trackValue()` via `toSignal()`)

---

### 🛠️ Troubleshooting / FAQ

**Error:** `NG0304: 'fxLayout' is not a known property of 'div'`
* **Solution:** Ensure that `FlexLayoutModule` is imported in your module or standalone component.

**Error:** `Cannot find module '@angular/cdk'`
* **Solution:** `ng-flex-layout` relies on the Angular CDK. Ensure you have installed `@angular/cdk` matching your Angular version.
```bash
npm install @angular/cdk@^22.3
```

**Error:** `Vitest: Failed to resolve import "..."`
* **Solution:** When running `npm run test`, ensure `vite-tsconfig-paths` is correctly resolving paths in your `vitest.config.ts`. Run `npm run build` once to generate necessary dist files if path mapping fails.

---

### Quick Links

* [ChangeLog](CHANGELOG.md)
* [Documentation](https://github.com/alessiobianchini/ng-flex-layout/wiki)

### Demos

* [Explore Examples Online](https://ng-flex-layout.azurewebsites.net/)
* [Demo Source Code](projects/apps/demo-app)
* [Flex-Layout Template on StackBlitz](https://stackblitz.com/edit/ng-flex-layout-seed)

### Developers

The Angular toolchain requires Node.js 22.22.3+ in the 22.x series, 24.15.0+
in the 24.x series, or 26.0.0+. Node.js 22 and 24 include Corepack; Node.js 26
and later do not, so install it first with `npm install --global corepack`.
Then enable Corepack and activate the repository's pnpm 10.10.0:

```bash
npm install --global corepack # Node.js 26+ only
corepack enable
corepack prepare pnpm@10.10.0 --activate
pnpm install --frozen-lockfile
pnpm run build
pnpm test --run
```

The dependency upgrade to Angular 22.3 is unreleased; npm's published package
version is independent of the dependencies used to build this branch. Packages
built from this branch require Angular 22.3 or later.

* [API Documentation](https://github.com/alessiobianchini/ng-flex-layout/wiki/API-Documentation)
* [Developer Setup](https://github.com/alessiobianchini/ng-flex-layout/wiki/Developer-Setup)
* [Fast Starts](https://github.com/alessiobianchini/ng-flex-layout/wiki/Fast-Starts)
* [Integration with Angular CLI](https://github.com/alessiobianchini/ng-flex-layout/wiki/Using-Angular-CLI)

### Browser Support

<a href="https://caniuse.com/?search=ng-flex-layout" target="_blank">
![caniuseflexbox](https://github.com/alessiobianchini/ng-flex-layout/assets/33493281/a699c7a9-cf8f-4bb0-967e-ef2b65a64d9f.png)
</a>

---

### License

The sources for this package are in this repository: [https://github.com/alessiobianchini/ng-flex-layout](https://github.com/alessiobianchini/ng-flex-layout)

License: MIT
