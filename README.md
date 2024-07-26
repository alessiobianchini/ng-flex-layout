<h3 align="center">
ng-flex-layout
</h3>
<h5 align="center">
 <a href="https://github.com/sponsors/alessiobianchini" target="_blank">
  Support my open-source code as a sponsor
 </a>
</h5>

*** 

  - Updated to Angular 18.1.1
  - Migrated from tslint to eslint
***


[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=18.1.1-beta.2&x2=0)](https://www.npmjs.com/package/ng-flex-layout) 
[![Test lib CI](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/test-lib.yml/badge.svg)](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/test-lib.yml)
[![CodeQL](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/alessiobianchini/ng-flex-layout/actions/workflows/github-code-scanning/codeql)

Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery.
This module provides Angular developers with component layout features using a
custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.

The Flex Layout engine intelligently automates the process of applying appropriate
Flexbox CSS to browser view hierarchies. This automation also addresses many of the
complexities and workarounds encountered with the traditional, manual, CSS-only application of box CSS.

The **real** power of Flex Layout, however, is its **responsive** engine. The
[Responsive API](https://github.com/alessiobianchini/flex-layout/wiki/Responsive-API) enables developers to easily specify
different layouts, sizing, visibilities for different viewport sizes and display devices.

---
### Getting Started

Start by installing the Angular Layout library from `npm`

`npm i -s ng-flex-layout @angular/cdk`

Next, you'll need to import the Layout module in your app's module.

**app.module.ts**

```ts

import { FlexLayoutModule } from 'ng-flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});
```

After that is configured, you can use the Angular Layout attributes in your HTML tags for flex layout:
```html
<div fxLayout="row" fxLayoutAlign="space-between">
</div>
```

Check out [all of the available options](https://github.com/alessiobianchini/flex-layout/wiki/Declarative-API-Overview) for using Angular Layout in your application.

---

### Quick Links

*  [ChangeLog](https://github.com/alessiobianchini/flex-layout/blob/master/CHANGELOG.md)
*  [Wiki Documentation](https://github.com/alessiobianchini/flex-layout/wiki)

### Demos

*  [Explore Examples Online](https://ng-flex-layout.azurewebsites.net/)
*  [Demo Source Code](https://github.com/alessiobianchini/flex-layout/blob/master/src/apps/demo-app/src/app/app.module.ts)

### StackBlitz Templates

  *  [Flex-Layout Template](https://stackblitz.com/edit/ng-flex-layout-seed)

### Developers

*  [API Documentation](https://github.com/alessiobianchini/flex-layout/wiki/API-Documentation)
*  [Developer Setup](https://github.com/alessiobianchini/flex-layout/wiki/Developer-Setup)
*  [Builds + Fast Start](https://github.com/alessiobianchini/flex-layout/wiki/Fast-Starts)
*  [Integration with Angular CLI](https://github.com/alessiobianchini/flex-layout/wiki/Using-Angular-CLI)


----

### Browser Support
&nbsp;
<a href="https://caniuse.com/?search=ng-flex-layout" target="_blank">
![caniuseflexbox](https://github.com/alessiobianchini/ng-flex-layout/assets/33493281/a699c7a9-cf8f-4bb0-967e-ef2b65a64d9f.png)
</a>

<br/>

---

### License

The sources for this package are in the [Flex Layout](https://github.com/alessiobianchini/flex-layout) repository. <br/>
Please file issues and pull requests against that repo.

License: MIT
