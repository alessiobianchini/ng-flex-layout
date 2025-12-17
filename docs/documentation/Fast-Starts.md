### Install from npm

```terminal
npm install --save ng-flex-layout
```

or with pnpm:

```terminal
pnpm add ng-flex-layout
```

Next, modify your `app.module.ts` to use the `FlexLayoutModule`:

```typescript
import {NgModule}         from '@angular/core';
import {BrowserModule}    from '@angular/platform-browser';
import {FlexLayoutModule} from "ng-flex-layout";

import {DemoAppComponent}          from './demo-app/demo-app';

@NgModule({
  declarations: [DemoAppComponent],
  bootstrap: [DemoAppComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ]
})
export class DemoAppModule {}
```

----

### Angular CLI + `ng-flex-layout`

If you are using the Angular CLI to bundle and serve your application (using `ng serve`), run the following command:

```terminal
npm install --save ng-flex-layout
```

Next, modify your `app.module.ts` to use the `FlexLayoutModule`:

```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from "ng-flex-layout";

import {DemoAppComponent} from './demo-app/demo-app';

@NgModule({
  declarations: [DemoAppComponent],
  bootstrap: [DemoAppComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ]
})
export class DemoAppModule {}
```

### Local Builds

Developers can, however, easily install this `ng-flex-layout` library using a **local repository build** 
and a directory copy:

```console
pnpm run build
cd dist/releases/flex-layout
npm pack
```
