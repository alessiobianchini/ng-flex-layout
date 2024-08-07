Using Flex-Layout with the the Angular CLI is easy.

## Install the CLI
 
 ```bash
# Global
npm uninstall -g @angular/cli
npm install -g @angular/cli
```

 
## Create a new project
 
```bash
 ng new my-project
```

## Or, use with existing project

```bash
rm -rf node_modules/
npm install
```

The new command creates a project with a build system for your Angular app.

## Install Flex-Layout

```bash
npm install ng-flex-layout --save
```

>  This installs the most recent npm release of Flex-Layout.

```bash
npm install angular/flex-layout-builds --save
```

> This installs a nightly build which incorporates the latest updates not yet published to NPM

## Import the Angular Flex-Layout NgModule
  
**src/app/app.module.ts**
```typescript
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from 'ng-flex-layout';
// other imports 
@NgModule({
  imports: [FlexLayoutModule],
  ...
})
export class PizzaPartyAppModule {}
```

## Configuring SystemJS
If your project is using SystemJS for module loading, you will need to add `ng-flex-layout` 
to the SystemJS configuration:

```js
System.config({
  // existing configuration options
  map: {
    ...,
    'ng-flex-layout': 'npm:ng-flex-layout-builds/bundles/flex-layout.umd.js'
  }
});
```

## Sample Angular Flex-Layout projects

Developers are encouraged to review the live demos and source for the Flex-Layout Demos:

* [Live Demos](https://ng-flex-layout.azurewebsites.net/)
* [Demo Source Code](https://github.com/alessiobianchini/flex-layout/blob/master/projects/apps/demo-app/)
