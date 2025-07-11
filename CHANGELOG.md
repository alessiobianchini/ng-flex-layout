# [20.0.0](https://github.com/alessiobianchini/flex-layout/compare/19.2.6...20.0.0) (2025-06-17)

* Migrated to Angular 20 (`@angular/core`, `@angular/cli`, `@angular/material`, ...)
* Updated all main and dev dependencies to support Angular 20
* Updated build and test configuration for new Angular 20 builders
* Fixed TypeScript and test compatibility issues
* Updated GitHub Actions workflows to use Node.js 20

# [19.2.6](https://github.com/alessiobianchini/flex-layout/compare/19.0.0...19.2.6) (2024-11-22)

* Updated ng and ng material to 19.2.6
* Updated common packages
  
# [19.0.0](https://github.com/alessiobianchini/flex-layout/compare/18.2.9...19.0.0) (2024-11-22)

* Updated ng and ng material to 19.0.0
* Migrated ddirective as default standalone

## [18.2.9](https://github.com/alessiobianchini/flex-layout/compare/18.2.1...18.2.9) (2024-10-29)

* Updated ng and ng material to 18.2.9
* Updated common packages

# [18.2.1](https://github.com/alessiobianchini/ng-flex-layout/compare/18.1.1-beta.2...18.2.1) (2024-08-27)

* Updated ng and ng material to 18.2.1
* Updated common packages
* Removed beta tag

# [18.1.1-beta.2](https://github.com/alessiobianchini/ng-flex-layout/compare/18.1.1-beta.1...18.1.1-beta.2) (2024-07-26)

* Updated version.ts to expose correct version
* Updated demo-app for latest hight resolution screen
* Removed unused files
  
# [18.1.1-beta.1](https://github.com/alessiobianchini/ng-flex-layout/compare/17.3.7-beta.1...18.1.1-beta.1) (2024-07-23)

* Updated to Angular 18.1.1
* Updated common packages

# [17.3.7-beta.1](https://github.com/alessiobianchini/ng-flex-layout/compare/17.3.4-beta.1...17.3.7-beta.1) (2024-04-24)

* Updated to Angular 17.3.7
* Updated common packages
* Restored wiki
* Created [stackblitz template](https://stackblitz.com/edit/ng-flex-layout-seed)
* Created [google group](https://groups.google.com/g/ng-flex-layout)
  
# [17.3.4-beta.1](https://github.com/alessiobianchini/ng-flex-layout/compare/17.2.2-beta.1...17.3.4-beta.1) (2024-04-24)

* Updated to Angular 17.3.4
* Restored tests
  
# [17.2.2-beta.1](https://github.com/alessiobianchini/ng-flex-layout/compare/17.2.1-beta.1...17.2.2-beta.1) (2024-02-26)

* Updated to Angular 17.2.2
* Restored tests
* Created automatic test action (test-lib.yml)
  
# [17.1.3-beta.1](https://github.com/alessiobianchini/ng-flex-layout/compare/17.0.1-beta.2...17.1.3-beta.1) (2024-02-09)

* Updated to Angular 17.1.3
* Aligned NgClass instance creation 
  
# [15.0.0-beta.42](https://github.com/alessiobianchini/flex-layout/compare/14.0.0-beta.41...15.0.0-beta.42) (2022-11-18)

This release unpins the dependency on Angular and CDK to allow flexibility with future releases.

# [14.0.0-beta.41](https://github.com/alessiobianchini/flex-layout/compare/14.0.0-beta.40...14.0.0-beta.41) (2022-10-11)

This release fixes incompatibilities with Node v18 typings.

# [14.0.0-beta.40](https://github.com/alessiobianchini/flex-layout/compare/13.0.0-beta.38...14.0.0-beta.40) (2022-06-30)


This release is simply to capture a change in the peer dependencies requirement for Angular.


# [14.0.0-beta.39](https://github.com/alessiobianchini/flex-layout/compare/13.0.0-beta.38...14.0.0-beta.39) (2022-06-30)


### Bug Fixes

* **private:** remove fallback from flex-direction auto-prefixer ([#1408](https://github.com/alessiobianchini/flex-layout/issues/1408)) ([ee5d93a](https://github.com/alessiobianchini/flex-layout/commit/ee5d93a328537eb00391a4245af80a9fc3f6a31e)), closes [#1394](https://github.com/alessiobianchini/flex-layout/issues/1394)


### Features

* **core:** remove deprecated MediaObserver::media$ ([#1375](https://github.com/alessiobianchini/flex-layout/issues/1375)) ([14b8038](https://github.com/alessiobianchini/flex-layout/commit/14b803892b26e68b0ee88eeb21963cd326f5eb3c))

BREAKING CHANGES:
* `MediaObserver::media$` has been removed. Please consult the docs for an adequate, supported replacement.

# [13.0.0-beta.38](https://github.com/alessiobianchini/flex-layout/compare/13.0.0-beta.37...13.0.0-beta.38) (2022-02-03)


### Bug Fixes

* **core:** import distinctUntilChanged from rxjs/operators ([#1390](https://github.com/alessiobianchini/flex-layout/issues/1390)) ([e8e172b](https://github.com/alessiobianchini/flex-layout/commit/e8e172bf2bb9e0a45152a7ccbcbaf02b4c603b03))



# [13.0.0-beta.37](https://github.com/alessiobianchini/flex-layout/compare/13.0.0-beta.36...13.0.0-beta.37) (2022-01-28)


### Bug Fixes

* **core:** correctly set and restore breakpoints during print ([#1379](https://github.com/alessiobianchini/flex-layout/issues/1379)) ([edca0d4](https://github.com/alessiobianchini/flex-layout/commit/edca0d4661b960d948380d60bf2fdc96d885d149))
* **core:** only emit changed events from MediaObserver ([#1377](https://github.com/alessiobianchini/flex-layout/issues/1377)) ([51b6ebf](https://github.com/alessiobianchini/flex-layout/commit/51b6ebf230ad8c4490288d50b75dd38b4d589347))
* **core:** properly collect deactivated breakpoints before print ([#1380](https://github.com/alessiobianchini/flex-layout/issues/1380)) ([d73a3e4](https://github.com/alessiobianchini/flex-layout/commit/d73a3e4acbd8f42136b46acf5ca3ab1878ba92e5))
* **core:** reset current value when directive is cleared ([#1376](https://github.com/alessiobianchini/flex-layout/issues/1376)) ([c4f9fe2](https://github.com/alessiobianchini/flex-layout/commit/c4f9fe2a19b28787a4100baa7aa1fe6fd8ee1998))
* **server:** disable breakpoints correctly and avoid style overuse ([#1378](https://github.com/alessiobianchini/flex-layout/issues/1378)) ([5874498](https://github.com/alessiobianchini/flex-layout/commit/58744986b011cf3dab17e33b6198f06484545e94))


### Features

* **core:** add support for default unit for unitless values ([#1384](https://github.com/alessiobianchini/flex-layout/issues/1384)) ([80b4e5a](https://github.com/alessiobianchini/flex-layout/commit/80b4e5af9291c02e9092de46407f2f79fe7170b1))
* **core:** add value multiplication suffix feature ([#1383](https://github.com/alessiobianchini/flex-layout/issues/1383)) ([4d36b74](https://github.com/alessiobianchini/flex-layout/commit/4d36b74db8f4855b5210a2f329166e3037ff74a2))



# [13.0.0-beta.36](https://github.com/alessiobianchini/flex-layout/compare/12.0.0-beta.35...13.0.0-beta.36) (2021-11-24)

This version adds compatibility with Angular v13, in addition to shifting our publishing practices.
In line with the framework and other Angular libraries, Angular Layout will now publish artifacts in
accordance with Angular Package Format (APF) v13, meaning that we no longer distribute UMD bundles, in
favor of ESM. We also now publish our artifacts using Ivy partial compilation, in an effort to improve
the build experience of our users.

You can read more about this new format on the [Angular docs page](https://angular.io/guide/angular-package-format)
about it.

Many thanks to the contributors of this release, Paul Gschwendtner (@DevVersion), Alan Agius (@alan-agius4),
and Andrew Kushnir (@AndrewKushnir).

<a name="12.0.0-beta.35"></a>
# [12.0.0-beta.35](https://github.com/alessiobianchini/flex-layout/compare/12.0.0-beta.34...12.0.0-beta.35) (2021-09-15)

Allow usage of RxJS v7 with the v12 release.

<a name="12.0.0-beta.34"></a>
# [12.0.0-beta.34](https://github.com/alessiobianchini/flex-layout/compare/11.0.0-beta.33...12.0.0-beta.34) (2021-05-18)


### Bug Fixes

* **ssr:** check null _document.defaultView ([#1337](https://github.com/alessiobianchini/flex-layout/issues/1337)) ([b43681c](https://github.com/alessiobianchini/flex-layout/commit/b43681c))



<a name="11.0.0-beta.33"></a>
# [11.0.0-beta.33](https://github.com/alessiobianchini/flex-layout/compare/10.0.0-beta.32...11.0.0-beta.33) (2020-11-12)

This release adds support for Angular v11 and Angular CDK v11, along with TypeScript v4.0.

### Bug Fixes

* **core:** set fractional breakpoints to .98 instead of .9 ([#1308](https://github.com/alessiobianchini/flex-layout/issues/1308)) ([c1c545c](https://github.com/alessiobianchini/flex-layout/commit/c1c545c))



<a name="10.0.0-beta.32"></a>
# [10.0.0-beta.32](https://github.com/alessiobianchini/flex-layout/compare/9.0.0-beta.31...10.0.0-beta.32) (2020-06-15)

This release adds support for Angular v10 and Angular CDK v10.

### Bug Fixes

* **core:** add generic type to ModuleWithProviders to support v10 ([#1260](https://github.com/alessiobianchini/flex-layout/issues/1260)) ([f47da38](https://github.com/alessiobianchini/flex-layout/commit/f47da38))
* **mock-match-media:** ensure overlapping breakpoints are activated ([#1265](https://github.com/alessiobianchini/flex-layout/issues/1265)) ([af92cb0](https://github.com/alessiobianchini/flex-layout/commit/af92cb0))



<a name="9.0.0-beta.31"></a>
# [9.0.0-beta.31](https://github.com/alessiobianchini/flex-layout/compare/9.0.0-beta.30...9.0.0-beta.31) (2020-05-15)

This is a patch release to address a regression in the ShowHideDirective. The next full release will target
Angular v10.

### Bug Fixes

* **show-hide:** set explicit display fallback for SSR ([#1252](https://github.com/alessiobianchini/flex-layout/issues/1252)) ([0c5811d](https://github.com/alessiobianchini/flex-layout/commit/0c5811d))



<a name="9.0.0-beta.30"></a>
# [9.0.0-beta.30](https://github.com/alessiobianchini/flex-layout/compare/9.0.0-beta.29...9.0.0-beta.30) (2020-05-11)

This will be the last release with support for Angular v9. The next release will be for Angular v10.

### Bug Fixes

* **core:** ignore null values in breakpoint fallback mechanism ([#1247](https://github.com/alessiobianchini/flex-layout/issues/1247)) ([5085909](https://github.com/alessiobianchini/flex-layout/commit/5085909))
* **core:** only trigger style updates when value changes ([#1246](https://github.com/alessiobianchini/flex-layout/issues/1246)) ([a96ef13](https://github.com/alessiobianchini/flex-layout/commit/a96ef13))
* **flex:** wait for parent element until template is initialized ([#1237](https://github.com/alessiobianchini/flex-layout/issues/1237)) ([93a426a](https://github.com/alessiobianchini/flex-layout/commit/93a426a))
* **match-media:** unregister media query event listeners on destroy ([#1236](https://github.com/alessiobianchini/flex-layout/issues/1236)) ([2ca7848](https://github.com/alessiobianchini/flex-layout/commit/2ca7848))
* **media-marshaller:** do not propagate undefined value ([#1245](https://github.com/alessiobianchini/flex-layout/issues/1245)) ([b05d51a](https://github.com/alessiobianchini/flex-layout/commit/b05d51a))
* **media-observer:** return correct value for isActive on init ([#1244](https://github.com/alessiobianchini/flex-layout/issues/1244)) ([bf069af](https://github.com/alessiobianchini/flex-layout/commit/bf069af))
* **orientation:** use tablet landscape screen type ([#1220](https://github.com/alessiobianchini/flex-layout/issues/1220)) ([dd772d7](https://github.com/alessiobianchini/flex-layout/commit/dd772d7))
* **print-hook:** unregister event listeners on destroy ([#1235](https://github.com/alessiobianchini/flex-layout/issues/1235)) ([6d0cd00](https://github.com/alessiobianchini/flex-layout/commit/6d0cd00))
* **show-hide:** use initial value as fallback instead of parent ([#1243](https://github.com/alessiobianchini/flex-layout/issues/1243)) ([bf2355b](https://github.com/alessiobianchini/flex-layout/commit/bf2355b))


### Features

* **layout-gap:** add x/y options for grid mode ([#1234](https://github.com/alessiobianchini/flex-layout/issues/1234)) ([990586b](https://github.com/alessiobianchini/flex-layout/commit/990586b))


NOTE: if you consume Angular Layout through UMD, we no longer re-export secondary 
entrypoints (e.g. ng-flex-layout/flex) from the top-level (ng-flex-layout) bundle. Please
modify your apps accordingly. For users of the Angular CLI, this should not be an issue.

<a name="9.0.0-beta.29"></a>
# [9.0.0-beta.29](https://github.com/alessiobianchini/flex-layout/compare/9.0.0-beta.28...9.0.0-beta.29) (2020-02-06)

This release adds support for projects using Angular v9 without Ivy.

<a name="9.0.0-beta.28"></a>
# [9.0.0-beta.28](https://github.com/alessiobianchini/flex-layout/compare/8.0.0-beta.27...9.0.0-beta.28) (2020-01-27)

This release adds compatibility for Angular v9, which removed some private APIs this library depended on.

### Bug Fixes

* **ssr:** reset class counter to zero before each render ([#1153](https://github.com/alessiobianchini/flex-layout/issues/1153)) ([d062708](https://github.com/alessiobianchini/flex-layout/commit/d062708))


### Features

* **core:** support beforeprint and afterprint hooks ([#1080](https://github.com/alessiobianchini/flex-layout/issues/1080)) ([8302998](https://github.com/alessiobianchini/flex-layout/commit/8302998)), closes [#603](https://github.com/alessiobianchini/flex-layout/issues/603)
* change tslib from direct dependency to peerDependency ([#1132](https://github.com/alessiobianchini/flex-layout/issues/1132)) ([06268b8](https://github.com/alessiobianchini/flex-layout/commit/06268b8))


### BREAKING CHANGES

* We no longer directly have a direct depedency on `tslib`. Instead it is now listed a `peerDependency`.

Users not using the CLI will need to manually install `tslib` via;
```
yarn add tslib
```
or
```
npm install tslib --save
```

<a name="8.0.0-beta.27"></a>
# [8.0.0-beta.27](https://github.com/alessiobianchini/flex-layout/compare/8.0.0-beta.26...8.0.0-beta.27) (2019-08-30)

This release fixes compatibility issues for the next version of the Angular rendering engine, while
maintaining compatibility with Angular v8.

### Bug Fixes

* **core:** update breakpoints ranges to avoid overlapping ([#1075](https://github.com/alessiobianchini/flex-layout/issues/1075)) ([31cb34e](https://github.com/alessiobianchini/flex-layout/commit/31cb34e)), closes [angular/flex-layout#1052](https://github.com/alessiobianchini/flex-layout/issues/1052) [angular/flex-layout#1001](https://github.com/alessiobianchini/flex-layout/issues/1001)
* **fxFlex:** use correct type for basis validation in reflow case ([#1095](https://github.com/alessiobianchini/flex-layout/issues/1095)) ([d02377a](https://github.com/alessiobianchini/flex-layout/commit/d02377a)), closes [#1089](https://github.com/alessiobianchini/flex-layout/issues/1089)
* **server:** breakpoints can be used by MediaObserver ([#1087](https://github.com/alessiobianchini/flex-layout/issues/1087)) ([6bbfe23](https://github.com/alessiobianchini/flex-layout/commit/6bbfe23))



<a name="8.0.0-beta.26"></a>
# [8.0.0-beta.26](https://github.com/alessiobianchini/flex-layout/compare/7.0.0-beta.24...8.0.0-beta.26) (2019-05-24)

This release adds compatibility for Angular v8 final, which contained a breaking change from previous RCs.

<a name="8.0.0-beta.25"></a>
# [8.0.0-beta.25](https://github.com/alessiobianchini/flex-layout/compare/7.0.0-beta.24...8.0.0-beta.25) (2019-05-19)

This release is solely for compatibility with Angular and Components v8, with a minor Bazel fix as well.

<a name="7.0.0-beta.24"></a>
# [7.0.0-beta.24](https://github.com/alessiobianchini/flex-layout/compare/7.0.0-beta.23...7.0.0-beta.24) (2019-03-17)


### Bug Fixes

* **core:** align breakpoints with those used in CDK ([#1006](https://github.com/alessiobianchini/flex-layout/issues/1006)) ([6f43cf6](https://github.com/alessiobianchini/flex-layout/commit/6f43cf6)), closes [#685](https://github.com/alessiobianchini/flex-layout/issues/685) [#1001](https://github.com/alessiobianchini/flex-layout/issues/1001)
* **core:** fail-safe check of nullable value ([#1031](https://github.com/alessiobianchini/flex-layout/issues/1031)) ([5112a47](https://github.com/alessiobianchini/flex-layout/commit/5112a47)), closes [#958](https://github.com/alessiobianchini/flex-layout/issues/958)
* **core:** update breakpoint ranges to remove subpixel gaps ([#1004](https://github.com/alessiobianchini/flex-layout/issues/1004)) ([1154fae](https://github.com/alessiobianchini/flex-layout/commit/1154fae)), closes [#1001](https://github.com/alessiobianchini/flex-layout/issues/1001)
* **core:** update layout-bp mixin to use right overlapping maps ([#1020](https://github.com/alessiobianchini/flex-layout/issues/1020)) ([af15a61](https://github.com/alessiobianchini/flex-layout/commit/af15a61))
* **docs:** make splitter demo work in IE ([#982](https://github.com/alessiobianchini/flex-layout/issues/982)) ([0ba4bac](https://github.com/alessiobianchini/flex-layout/commit/0ba4bac))
* **fxFlex:** restore correct styles after fxLayoutAlign is applied ([#1038](https://github.com/alessiobianchini/flex-layout/issues/1038)) ([b245229](https://github.com/alessiobianchini/flex-layout/commit/b245229))
* **fxLayoutGap:** correctly handle lack of fallback value ([#1037](https://github.com/alessiobianchini/flex-layout/issues/1037)) ([ce9b989](https://github.com/alessiobianchini/flex-layout/commit/ce9b989)), closes [#1011](https://github.com/alessiobianchini/flex-layout/issues/1011)
* **fxLayoutGap:** not working with dynamic fxHide ([#983](https://github.com/alessiobianchini/flex-layout/issues/983)) ([0eccec4](https://github.com/alessiobianchini/flex-layout/commit/0eccec4))
* **img-src:** correctly initialize fallback value ([#986](https://github.com/alessiobianchini/flex-layout/issues/986)) ([c1fc857](https://github.com/alessiobianchini/flex-layout/commit/c1fc857))
* **layout-align:** respect inline-flex on sibling fxLayout ([#1036](https://github.com/alessiobianchini/flex-layout/issues/1036)) ([c23621c](https://github.com/alessiobianchini/flex-layout/commit/c23621c)), closes [#1009](https://github.com/alessiobianchini/flex-layout/issues/1009)
* **ngClass:** should properly remove classes without fallback ([#995](https://github.com/alessiobianchini/flex-layout/issues/995)) ([47248b1](https://github.com/alessiobianchini/flex-layout/commit/47248b1)), closes [#992](https://github.com/alessiobianchini/flex-layout/issues/992)
* **sass:** update stylesheet with correct keys ([#987](https://github.com/alessiobianchini/flex-layout/issues/987)) ([002eb66](https://github.com/alessiobianchini/flex-layout/commit/002eb66))


### Features

* **core:** implement MediaTrigger to allow manual breakpoint activations ([#997](https://github.com/alessiobianchini/flex-layout/issues/997)) ([66e7463](https://github.com/alessiobianchini/flex-layout/commit/66e7463))
* **core:** MediaObserver can report 1..n activations ([#994](https://github.com/alessiobianchini/flex-layout/issues/994)) ([8307655](https://github.com/alessiobianchini/flex-layout/commit/8307655))
* **core:** move MatchMedia to internal scope ([#998](https://github.com/alessiobianchini/flex-layout/issues/998)) ([53a6ebb](https://github.com/alessiobianchini/flex-layout/commit/53a6ebb))
* **demo:** add demo to show fxHide with used with custom breakpoint ([#969](https://github.com/alessiobianchini/flex-layout/issues/969)) ([f4eb901](https://github.com/alessiobianchini/flex-layout/commit/f4eb901)), closes [#961](https://github.com/alessiobianchini/flex-layout/issues/961)
* **server:** add ability to specify breakpoints for MediaObserver ([#999](https://github.com/alessiobianchini/flex-layout/issues/999)) ([1c136bc](https://github.com/alessiobianchini/flex-layout/commit/1c136bc)), closes [#991](https://github.com/alessiobianchini/flex-layout/issues/991)


### BREAKING CHANGES

* **core:** `MediaObserver` is the only supported mechanism to watch breakpoint activations outside the library. Developers should not use `MatchMedia`.

*  MatchMedia is no longer exported as a public utility. 
*  ServerMatchMedia is no longer exported at all
* **core:** The stream data type for `asObservable` is now **MediaChange[]** instead of *MediaChange* and `media$` is deprecated in favor of `asObservable()`. 

* `filterOverlaps` now defaults to `false`



<a name="7.0.0-beta.23"></a>
# [7.0.0-beta.23](https://github.com/alessiobianchini/flex-layout/compare/7.0.0-beta.22...7.0.0-beta.23) (2019-01-04)

In this release, we have improved the prioritization of standard breakpoints and added support for `print` mediaQueries.

When printing developers can now configure how layouts should render. Default print will use the current layout and current elements shown/visible. By specifying 1..n mediaQuery aliases, developers can specify alternate layouts with alternate breakpoints to be used for printing. And now DOM elements can also be shown and hidden for printing-only; use fxShow.print and fxHide.print support to show/hide elements during printing.

>  These enhancements allow totally different print outputs without modifying the current browser layout.

Using the new `printWithBreakpoints` allows developers to specify a breakpoint that should be used to render layouts only during printing. With the configuration below, the breakpoint associated with the **`md`** alias will be used.

```ts
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    })
```
Shown below is the print layout rendered in floating dialog over the normal layout that is currently using 'lg' breakpoints.

![angular-layout-printing](https://user-images.githubusercontent.com/210413/50407211-2e04ca00-0798-11e9-8f35-b4e9e2fca864.jpg)


### Features

* **core:** add print support with mediaQuery override ([#954](https://github.com/alessiobianchini/flex-layout/issues/954)) ([0c9e9cb](https://github.com/alessiobianchini/flex-layout/commit/0c9e9cb)), closes [#603](https://github.com/alessiobianchini/flex-layout/issues/603)


### Bug Fixes

* **core:** correctly handle lack of fallback values ([#949](https://github.com/alessiobianchini/flex-layout/issues/949)) ([01c4148](https://github.com/alessiobianchini/flex-layout/commit/01c4148)), closes [#947](https://github.com/alessiobianchini/flex-layout/issues/947)
* **core:** improve use of breakpoint priorities ([#955](https://github.com/alessiobianchini/flex-layout/issues/955)) ([d57b293](https://github.com/alessiobianchini/flex-layout/commit/d57b293)), closes [#648](https://github.com/alessiobianchini/flex-layout/issues/648) [#426](https://github.com/alessiobianchini/flex-layout/issues/426)
* **show-hide:** account for fxLayout on same element ([#948](https://github.com/alessiobianchini/flex-layout/issues/948)) ([c922ae3](https://github.com/alessiobianchini/flex-layout/commit/c922ae3)), closes [#945](https://github.com/alessiobianchini/flex-layout/issues/945)
* **style:** add SSR capabilities ([#962](https://github.com/alessiobianchini/flex-layout/issues/962)) ([f82bbc1](https://github.com/alessiobianchini/flex-layout/commit/f82bbc1)), closes [#813](https://github.com/alessiobianchini/flex-layout/issues/813)


BREAKING CHANGES:
* This version requires an upgrade to TypeScript 3.2 due to a change in how the DOM spec is typed

<a name="7.0.0-beta.22"></a>
# [7.0.0-beta.22](https://github.com/alessiobianchini/flex-layout/compare/7.0.0-beta.21...7.0.0-beta.22) (2018-12-19)


### Bug Fixes

* **core:** allow for breakpoints with periods in them ([#921](https://github.com/alessiobianchini/flex-layout/issues/921)) ([84e811b](https://github.com/alessiobianchini/flex-layout/commit/84e811b)), closes [#776](https://github.com/alessiobianchini/flex-layout/issues/776)
* **core:** avoid duplicate mediaQuery activations ([#937](https://github.com/alessiobianchini/flex-layout/issues/937)) ([23592ee](https://github.com/alessiobianchini/flex-layout/commit/23592ee))
* **core:** avoid race condition between registration and activation ([#923](https://github.com/alessiobianchini/flex-layout/issues/923)) ([232fc6e](https://github.com/alessiobianchini/flex-layout/commit/232fc6e))
* **core:** clear recent styles after responsive deactivation ([#927](https://github.com/alessiobianchini/flex-layout/issues/927)) ([d322ea7](https://github.com/alessiobianchini/flex-layout/commit/d322ea7)), closes [#697](https://github.com/alessiobianchini/flex-layout/issues/697) [#296](https://github.com/alessiobianchini/flex-layout/issues/296)
* **flex-offset:** correct type when using with 'strictNullChecks' ([#929](https://github.com/alessiobianchini/flex-layout/issues/929)) ([21b6d29](https://github.com/alessiobianchini/flex-layout/commit/21b6d29))
* **fxLayoutGap:** account for responsive fxHide on children elements ([#931](https://github.com/alessiobianchini/flex-layout/issues/931)) ([7759b6c](https://github.com/alessiobianchini/flex-layout/commit/7759b6c)), closes [#606](https://github.com/alessiobianchini/flex-layout/issues/606)
* **fxLayoutGap:** respond correctly to layout changes ([#919](https://github.com/alessiobianchini/flex-layout/issues/919)) ([676ddf7](https://github.com/alessiobianchini/flex-layout/commit/676ddf7))
* **ngStyle:** do not truncate URLs ([#938](https://github.com/alessiobianchini/flex-layout/issues/938)) ([1548727](https://github.com/alessiobianchini/flex-layout/commit/1548727)), closes [#935](https://github.com/alessiobianchini/flex-layout/issues/935)
* **ngStyle:** should work with preexisting styles ([#939](https://github.com/alessiobianchini/flex-layout/issues/939)) ([4be5cef](https://github.com/alessiobianchini/flex-layout/commit/4be5cef))


### Features

* **core:** add static scss mixin ([#940](https://github.com/alessiobianchini/flex-layout/issues/940)) ([ffd8331](https://github.com/alessiobianchini/flex-layout/commit/ffd8331)), closes [#783](https://github.com/alessiobianchini/flex-layout/issues/783)

Used for extra styling more easily at build time (instead of runtime with the HTML API), this feature (sass mixin) 
allows developers to generate and include Layout mediaQuery css to their own stylesheets.

NOTE: This feature is marked as experimental and is subject to change unless posted otherwise. To use, import
the new SASS file as follows:

```sass
@import '~ng-flex-layout/mq';

// This translates to (min-width: 0) and (max-width: 599px) {}
@include layout-bp(xs) {
  background-color: red;
}
```

Feedback on this feature is very much welcome, and we are open to adding additional functionality based on user interest.

<a name="7.0.0-beta.21"></a>
# [7.0.0-beta.21](https://github.com/alessiobianchini/flex-layout/compare/7.0.0-beta.20...7.0.0-beta.21) (2018-12-15)


### Bug Fixes

* **core:** register all breakpoints at startup ([#916](https://github.com/alessiobianchini/flex-layout/issues/916)) ([8f1a085](https://github.com/alessiobianchini/flex-layout/commit/8f1a085)), closes [#915](https://github.com/alessiobianchini/flex-layout/issues/915)



<a name="7.0.0-beta.20"></a>
# [7.0.0-beta.20](https://github.com/alessiobianchini/flex-layout/compare/7.0.0-beta.19...7.0.0-beta.20) (2018-12-14)

Beta 20 brings about numerous, high-visibility improvements to the library with very minimal API changes. These include:

* StyleBuilders: style memoization and support for easy customization of injected styles
* MediaMarshaller: centralizes handling of mediaQuery events to trigger layout style injections

#### StyleBuilders

With the introduction of `StyleBuilder`s, users now have the flexibility to augment or replace our style generation algorithms.  They also allow us to memoize style generation to improve performance. With the introduction of `MediaMarshaller`, we are able to _dramatically_ reduce the size and complexity of the library and improve the usability of custom breakpoints.

### Bug Fixes

* **fxLayoutAlign:** add space-between and space-around options ([#845](https://github.com/alessiobianchini/flex-layout/issues/845)) ([5e3ec0e](https://github.com/alessiobianchini/flex-layout/commit/5e3ec0e)), closes [#841](https://github.com/alessiobianchini/flex-layout/issues/841)
* **fxLayoutAlign:** do not apply cross-axis stretch styles when not needed ([#877](https://github.com/alessiobianchini/flex-layout/issues/877)) ([3cd5bc1](https://github.com/alessiobianchini/flex-layout/commit/3cd5bc1)), closes [#876](https://github.com/alessiobianchini/flex-layout/issues/876)
* **show-hide:** account for multiple directives on the same element ([ad3e9c9](https://github.com/alessiobianchini/flex-layout/commit/ad3e9c9))
* **show-hide:** work with Angular components and elements without fxLayout ([#881](https://github.com/alessiobianchini/flex-layout/issues/881)) ([3a0ec5d](https://github.com/alessiobianchini/flex-layout/commit/3a0ec5d)), closes [#848](https://github.com/alessiobianchini/flex-layout/issues/848) [#724](https://github.com/alessiobianchini/flex-layout/issues/724)


### Features

* **core:** add ability to override style building ([#884](https://github.com/alessiobianchini/flex-layout/issues/884)) ([9148e87](https://github.com/alessiobianchini/flex-layout/commit/9148e87)), closes [#689](https://github.com/alessiobianchini/flex-layout/issues/689)
* **core:** add centralized media marshal service ([#900](https://github.com/alessiobianchini/flex-layout/issues/900)) ([cd05cb4](https://github.com/alessiobianchini/flex-layout/commit/cd05cb4)), closes [#903](https://github.com/alessiobianchini/flex-layout/issues/903) [#692](https://github.com/alessiobianchini/flex-layout/issues/692)
* **core:** add memoization to style generation ([#888](https://github.com/alessiobianchini/flex-layout/issues/888)) ([4600672](https://github.com/alessiobianchini/flex-layout/commit/4600672))
* **flex:** add support for rem units ([#901](https://github.com/alessiobianchini/flex-layout/issues/901)) ([5990ed0](https://github.com/alessiobianchini/flex-layout/commit/5990ed0)), closes [#898](https://github.com/alessiobianchini/flex-layout/issues/898)
* **media-observer:** migrate ObservableMedia ([#892](https://github.com/alessiobianchini/flex-layout/issues/892)) ([1205588](https://github.com/alessiobianchini/flex-layout/commit/1205588)), closes [#885](https://github.com/alessiobianchini/flex-layout/issues/885)


### BREAKING CHANGES

* **media-observer:** `ObservableMedia` is now deprecated in anticipation of RxJS v7.
The new API is called **`MediaObserver`**, and provides the exact same functionality as ObservableMedia, except you cannot directly subscribe to it,

Developers should subscribe to MediaObserver's `media$` property; in place of subscribing directly to ObservableMedia.



<a name="7.0.0-beta.19"></a>
# [7.0.0-beta.19](https://github.com/alessiobianchini/flex-layout/compare/6.0.0-beta.18...7.0.0-beta.19) (2018-10-05)


### Bug Fixes

* **build:** upgrade to Angular and Material v7 and add strict flags  ([5ddccb5](https://github.com/alessiobianchini/flex-layout/commit/5ddccb5)), closes [#851](https://github.com/alessiobianchini/flex-layout/issues/851) [#855](https://github.com/alessiobianchini/flex-layout/issues/855)
* **module:** do not require breakpoints in withConfig ([#853](https://github.com/alessiobianchini/flex-layout/issues/853)) ([76c110e](https://github.com/alessiobianchini/flex-layout/commit/76c110e)), closes [#846](https://github.com/alessiobianchini/flex-layout/issues/846)



<a name="6.0.0-beta.18"></a>
# [6.0.0-beta.18](https://github.com/alessiobianchini/flex-layout/compare/6.0.0-beta.17...6.0.0-beta.18) (2018-08-31)


### Bug Fixes

* **build:** update to TypeScript 2.9 and RxJS 6.3  ([aa8fb8c](https://github.com/alessiobianchini/flex-layout/commit/aa8fb8c)), closes [#828](https://github.com/alessiobianchini/flex-layout/issues/828) [#827](https://github.com/alessiobianchini/flex-layout/issues/827)



<a name="6.0.0-beta.17"></a>
# [6.0.0-beta.17](https://github.com/alessiobianchini/flex-layout/compare/6.0.0-beta.16...6.0.0-beta.17) (2018-07-27)


### Bug Fixes

* **fxFlex:** do not eagerly listen to layout changes ([#771](https://github.com/alessiobianchini/flex-layout/issues/771)) ([dc431d8](https://github.com/alessiobianchini/flex-layout/commit/dc431d8)), closes [#700](https://github.com/alessiobianchini/flex-layout/issues/700) [#733](https://github.com/alessiobianchini/flex-layout/issues/733)
* **module:** make withConfig AOT compatible ([85e3145](https://github.com/alessiobianchini/flex-layout/commit/85e3145))
* use correct xl breakpoint ([#809](https://github.com/alessiobianchini/flex-layout/issues/809)) ([b64b1b3](https://github.com/alessiobianchini/flex-layout/commit/b64b1b3))


### Performance Improvements

* remove duplicate function calls ([#773](https://github.com/alessiobianchini/flex-layout/issues/773)) ([bc7f77f](https://github.com/alessiobianchini/flex-layout/commit/bc7f77f)), closes [#761](https://github.com/alessiobianchini/flex-layout/issues/761)



<a name="6.0.0-beta.16"></a>
# [6.0.0-beta.16](https://github.com/alessiobianchini/flex-layout/compare/v6.0.0-beta.15...6.0.0-beta.16) (2018-06-07)

With Beta 16, we have added support + API for CSS Grid. Now ng-flex-layout supports both Flexbox and CSS Grid layouts. 

### Bug Fixes

* **breakpoints:** use correct orientation mediaquery ([666aa0a](https://github.com/alessiobianchini/flex-layout/commit/666aa0a)), closes [#763](https://github.com/alessiobianchini/flex-layout/issues/763)


### Features

* **grid:** add CSS Grid directives and demo ([#712](https://github.com/alessiobianchini/flex-layout/issues/712)) ([b8c86be](https://github.com/alessiobianchini/flex-layout/commit/b8c86be))
* **lib:** add config options for flex basis and other tokens ([f01e551](https://github.com/alessiobianchini/flex-layout/commit/f01e551))


### BREAKING CHANGES

* **lib:** * Four configuration tokens have been removed:

* * `ADD_FLEX_STYLES`
* * `ADD_ORIENTATION_BREAKPOINTS`
* * `DISABLE_DEFAULT_BREAKPOINTS`
* * `DISABLE_VENDOR_PREFIXES`

These tokens have been consolidated into a new configuration token:

* * `LAYOUT_CONFIG`

* The default column flex-basis has been reverted to `1e-9px`. To
  have that value be `auto` instead, set the config in your top-level
  module as follows:

```
FlexLayoutModule.withConfig({useColumnBasisZero: false})
```



<a name="6.0.0-beta.15"></a>
# [6.0.0-beta.15](https://github.com/alessiobianchini/flex-layout/compare/v5.0.0-beta.14...6.0.0-beta.15) (2018-04-13)


### Features

* **core:** add validateBasis to core export ([#706](https://github.com/alessiobianchini/flex-layout/issues/706)) ([c603a86](https://github.com/alessiobianchini/flex-layout/commit/c603a86))


<a name="5.0.0-beta.15"></a>
# [5.0.0-beta.15](https://github.com/alessiobianchini/flex-layout/compare/v6.0.0-beta.15...5.0.0-beta.15) (2018-06-05)


### Bug Fixes

* **fxFlex:** enable parent flex styles by default ([76d14b7](https://github.com/alessiobianchini/flex-layout/commit/76d14b7))


<a name="5.0.0-beta.14"></a>
# [5.0.0-beta.14](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.old...5.0.0-beta.14) (2018-03-29)


### BREAKING CHANGES

* **tokens:** * `fxFlex` no longer adds `display: flex; flex-direction: row` by
  default
* **validateSuffixes:** * `validateSuffixes` is no longer exported for public use. Please use the new [BreakPoints API](https://github.com/alessiobianchini/flex-layout/wiki/Breakpoints). If you must use `validateSuffixes`, please use `DEFAULT_BREAKPOINTS_PROVIDER_FACTORY`, which is a deprecated wrapper around `validateSuffixes` (please note this has already been removed in the nightly builds, and will be removed completely in the next release)

BEFORE:

`import {validateSuffixes} from 'ng-flex-layout';`

AFTER:

`import {DEFAULT_BREAKPOINTS_PROVIDER_FACTORY} from 'ng-flex-layout';`

The functions can be called in the exact same manner, as `DEFAULT_BREAKPOINTS_PROVIDER_FACTORY` is simply a wrapper around `validateSuffixes`. Please note that `DEFAULT_BREAKPOINTS_PROVIDER_FACTORY` is deprecated in this release.

### Bug Fixes

* **breakpoints:** add global provider for BreakPointRegistry ([7cedf6f](https://github.com/alessiobianchini/flex-layout/commit/7cedf6f))
* **demo-app:** add polyfills for IE11 to demo-app ([a425035](https://github.com/alessiobianchini/flex-layout/commit/a425035))
* **demo-app:** fix sizing for layout-gap demo ([0562fcc](https://github.com/alessiobianchini/flex-layout/commit/0562fcc))
* **fxFlex:** apply correct flex-basis stylings ([#629](https://github.com/alessiobianchini/flex-layout/issues/629)) ([1e96cea](https://github.com/alessiobianchini/flex-layout/commit/1e96cea)), closes [#277](https://github.com/alessiobianchini/flex-layout/issues/277) [#280](https://github.com/alessiobianchini/flex-layout/issues/280) [#323](https://github.com/alessiobianchini/flex-layout/issues/323) [#528](https://github.com/alessiobianchini/flex-layout/issues/528) [#534](https://github.com/alessiobianchini/flex-layout/issues/534)
* **fxFlex:** fix non-wrapping behavior and default fxFlex value ([3cfafd1](https://github.com/alessiobianchini/flex-layout/commit/3cfafd1))
* **fxFlex:** fix wrapping in older versions of Safari ([3809608](https://github.com/alessiobianchini/flex-layout/commit/3809608))
* **fxFlex:** make sure not to set width/height when flex is default ([b152998](https://github.com/alessiobianchini/flex-layout/commit/b152998))
* **fxLayoutGap:** add proper gaps for reverse dir ([3a8041d](https://github.com/alessiobianchini/flex-layout/commit/3a8041d))
* **layout-gap:** apply correct gaps based on flex order ([de72903](https://github.com/alessiobianchini/flex-layout/commit/de72903)), closes [#608](https://github.com/alessiobianchini/flex-layout/issues/608)
* **lib:** resolve RegExp Issue in older versions of Safari ([#643](https://github.com/alessiobianchini/flex-layout/issues/643)) ([85e8aa2](https://github.com/alessiobianchini/flex-layout/commit/85e8aa2))
* **release:** Fix release script by removing ',' of the last item in the list ([0486e85](https://github.com/alessiobianchini/flex-layout/commit/0486e85))
* **ssr:** fix lazy-loading functionality ([d4f2514](https://github.com/alessiobianchini/flex-layout/commit/d4f2514))


### Features

* **demo-app:** add version number to header ([c984937](https://github.com/alessiobianchini/flex-layout/commit/c984937))
* **demo-app:** use Angular CLI to build demo and universal apps ([eda12c3](https://github.com/alessiobianchini/flex-layout/commit/eda12c3))
* **demo-app:** use/register custom breakpoints ([0d4144c](https://github.com/alessiobianchini/flex-layout/commit/0d4144c))
* **fxLayoutGap:** add gutter functionality to layout-gap ([84ca5c3](https://github.com/alessiobianchini/flex-layout/commit/84ca5c3))
* **tokens:** add configuration for breakpoints and flex styles ([605f4d1](https://github.com/alessiobianchini/flex-layout/commit/605f4d1))



<a name="5.0.0-beta.13"></a>
# [5.0.0-beta.13](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.12...5.0.0-beta.13) (2018-02-22)

This **ng-flex-layout** release provides full support for Angular 5.x

> This release bumps the version for parity with Angular Material and latest builds of Angular.

Angular SSR support has been fixed and is now enabled properly. Developers should see [Live Demo Docs](https://github.com/alessiobianchini/flex-layout/blob/master/docs/documentation/Live-Demos.md) for details on how to build and test [locally] the demo applications. 

### Features

* **apps:** use Angular CLI to build demo and universal apps ([eda12c3](https://github.com/alessiobianchini/flex-layout/commit/eda12c3))
* **ssr:** enhance support for Universal and SSR with stylesheets ([cf5266a](https://github.com/alessiobianchini/flex-layout/commit/cf5266a)), closes [#373](https://github.com/alessiobianchini/flex-layout/issues/373) [#567](https://github.com/alessiobianchini/flex-layout/issues/567)

### Bug Fixes

* **css:** add prefixed values before standard ones ([0c1bf4a](https://github.com/alessiobianchini/flex-layout/commit/0c1bf4a))
* **lib:** apply correct layout gaps based on flex order ([de72903](https://github.com/alessiobianchini/flex-layout/commit/de72903)), closes [#608](https://github.com/alessiobianchini/flex-layout/issues/608)
* **lib:** apply correct RTL margins ([7699957](https://github.com/alessiobianchini/flex-layout/commit/7699957))
* **lib:** read correct styles during SSR and add test for layout-wrap ([71e2dae](https://github.com/alessiobianchini/flex-layout/commit/71e2dae))
* **lib:** remove private Angular 'getDom()' APIs ([#402](https://github.com/alessiobianchini/flex-layout/pull/402)) ([703add02ad](https://github.com/alessiobianchini/flex-layout/commit/703add02ad)), closes [#547](https://github.com/alessiobianchini/flex-layout/issues/547)
* **ssr:** add browser check for MatchMedia ([9dd03c6](https://github.com/alessiobianchini/flex-layout/commit/9dd03c6)), closes [#624](https://github.com/alessiobianchini/flex-layout/issues/624)

### Documentation Fixes

* **docs:** add Universal app changes to documentation ([1cf8a810](https://github.com/alessiobianchini/flex-layout/commit/1cf8a810))
* **docs:** add ability to submit PRs for docs ([39c78be](https://github.com/alessiobianchini/flex-layout/commit/39c78be)), closes [#550](https://github.com/alessiobianchini/flex-layout/issues/550) [#520](https://github.com/alessiobianchini/flex-layout/issues/520)
* **docs:** restore images within links ([d9edab8](https://github.com/alessiobianchini/flex-layout/commit/d9edab8))

### BREAKING CHANGES

* **fxLayoutWrap:** * `[fxLayoutWrap]` was deprecated in earlier betas. fxLayoutWrap has now been removed. Developers should use `fxLayout` options.

*before* 

```html
<div  fxLayout="row" fxLayoutWrap="wrap"> ... </div>
```

*current* 

```html
<div  fxLayout="row wrap"> ... </div>
```


### Contributor(s)

To succeed in OSS, you have to get the community involved. Most of all, the developer community needs to contribute solutions, fixes, and enhancements to the project's growth.

Thank you to the contributors who helped with the v5.0.0-beta.13 release:


<table>
  <thead>
  <tr>
    <th align="center"><a href="https://github.com/CaerusKaru">
      <img alt="Splaktar" src="https://avatars3.githubusercontent.com/u/416563?v=4&amp;s=117" width="117" style="max-width:100%;">
      </a>
    </th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td align="center" class="annotated">
      <a href="https://github.com/CaerusKaru">
        <span>CaerusKaru</span>
      </a>
    </td>
  </tbody>
</table>


Adam has worked tirelessly on the design and implementation of the Flex Layout SSR solution, an improved docs experience, bug fixes, and so much more. How does he find the time? We try not to ask...



<a name="2.0.0-beta.12"></a>
# [2.0.0-beta.12](https://github.com/alessiobianchini/flex-layout/compare/2.0.0-beta.11...2.0.0-beta.12) (2017-12-14)

The 2.0.0-beta.10 and beta.11 releases on npm accidentally glitched-out midway, so we resolved some release scripting issues and cut 2.0.0-beta.12 instead. oops :-)

### Build Changes

Similar to those used in **@angular/material**, this release also upgrades the package dependencies to Angular ~5.1.0 and the RxJS 5.5.x. 
>  [Pipeable RxJS operators](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md) are now used instead of prototype-patching *add* operators. 

* **packages:** update deps to Angular v5 and RxJs 5.5 ([#523](https://github.com/alessiobianchini/flex-layout/pull/523)) ([62457a5972](https://github.com/alessiobianchini/flex-layout/commit/62457a5972)), closes [#519](https://github.com/alessiobianchini/flex-layout/issues/519)


<a name="2.0.0-beta.11"></a>
# [2.0.0-beta.11](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.9...2.0.0-beta.11) (2017-11-05)

This release was just to fix an issue with npm `peerDependencies` not being set correctly.


<a name="2.0.0-beta.10"></a>
# [2.0.0-beta.10](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.8...2.0.0-beta.10) (2017-10-31)


### Bug Fixes

* **api:** defer getComputedStyle() calls until ngOnInit phase ([#374](https://github.com/alessiobianchini/flex-layout/issues/374)) ([3611003](https://github.com/alessiobianchini/flex-layout/commit/3611003)), closes [#310](https://github.com/alessiobianchini/flex-layout/issues/310)
* **api:** layout with layoutAlign was not responding to reverse directions ([dde6e87](https://github.com/alessiobianchini/flex-layout/commit/dde6e87)), closes [#82](https://github.com/alessiobianchini/flex-layout/issues/82)
* **api:** remove circular dependencies ([7bff29e](https://github.com/alessiobianchini/flex-layout/commit/7bff29e)), closes [#88](https://github.com/alessiobianchini/flex-layout/issues/88)
* **api:** remove use of static ngModule.forRoot() ([#167](https://github.com/alessiobianchini/flex-layout/issues/167)) ([86010bf](https://github.com/alessiobianchini/flex-layout/commit/86010bf))
* **api:** restore orig display mode and more... ([#143](https://github.com/alessiobianchini/flex-layout/issues/143)) ([d269d73](https://github.com/alessiobianchini/flex-layout/commit/d269d73)), closes [#140](https://github.com/alessiobianchini/flex-layout/issues/140) [#141](https://github.com/alessiobianchini/flex-layout/issues/141)
* **api:** support query children on API directives ([#290](https://github.com/alessiobianchini/flex-layout/issues/290)) ([f5558de](https://github.com/alessiobianchini/flex-layout/commit/f5558de))
* **api:** use only Renderer2 instances ([#391](https://github.com/alessiobianchini/flex-layout/issues/391)) ([816d85a](https://github.com/alessiobianchini/flex-layout/commit/816d85a))
* **api, class:** fix valid ngClass usages ([db2fd59](https://github.com/alessiobianchini/flex-layout/commit/db2fd59)), closes [#428](https://github.com/alessiobianchini/flex-layout/issues/428)
* **api, class:** selector [class] should be removed from ClassDirective. ([#394](https://github.com/alessiobianchini/flex-layout/issues/394)) ([7a48c25](https://github.com/alessiobianchini/flex-layout/commit/7a48c25)), closes [#393](https://github.com/alessiobianchini/flex-layout/issues/393)
* **api, class, style:** remove deprecated selectors ([#419](https://github.com/alessiobianchini/flex-layout/issues/419)) ([e461d17](https://github.com/alessiobianchini/flex-layout/commit/e461d17)), closes [#410](https://github.com/alessiobianchini/flex-layout/issues/410) [#408](https://github.com/alessiobianchini/flex-layout/issues/408) [#273](https://github.com/alessiobianchini/flex-layout/issues/273) [#418](https://github.com/alessiobianchini/flex-layout/issues/418)
* **auto-prefixer:** resolve perf impacts as reported by LightHouse ([#283](https://github.com/alessiobianchini/flex-layout/issues/283)) ([bc0c900](https://github.com/alessiobianchini/flex-layout/commit/bc0c900)), closes [#282](https://github.com/alessiobianchini/flex-layout/issues/282)
* **breakpoints:** resolve 1px hole between lg -> xl breakpoints ([#159](https://github.com/alessiobianchini/flex-layout/issues/159)) ([d78527c](https://github.com/alessiobianchini/flex-layout/commit/d78527c)), closes [#149](https://github.com/alessiobianchini/flex-layout/issues/149)
* **breakpoints:** support print media ([#367](https://github.com/alessiobianchini/flex-layout/issues/367)) ([37a0b85](https://github.com/alessiobianchini/flex-layout/commit/37a0b85)), closes [#361](https://github.com/alessiobianchini/flex-layout/issues/361)
* **build:** add observable-media-service to exported barrel ([#139](https://github.com/alessiobianchini/flex-layout/issues/139)) ([b7dffaa](https://github.com/alessiobianchini/flex-layout/commit/b7dffaa))
* **build:** angular versions are not properly inserted ([e3b7fde](https://github.com/alessiobianchini/flex-layout/commit/e3b7fde)), closes [#470](https://github.com/alessiobianchini/flex-layout/issues/470)
* **build:** remove use of Angular private API ([#195](https://github.com/alessiobianchini/flex-layout/issues/195)) ([d95cb09](https://github.com/alessiobianchini/flex-layout/commit/d95cb09)), closes [#193](https://github.com/alessiobianchini/flex-layout/issues/193)
* **build:** support Angular 4 and AOT ([#255](https://github.com/alessiobianchini/flex-layout/issues/255)) ([fed87fa](https://github.com/alessiobianchini/flex-layout/commit/fed87fa)), closes [#254](https://github.com/alessiobianchini/flex-layout/issues/254) [#236](https://github.com/alessiobianchini/flex-layout/issues/236) [#227](https://github.com/alessiobianchini/flex-layout/issues/227)
* **changelog:** fix invalid parentheses and semver checks ([96aaa78](https://github.com/alessiobianchini/flex-layout/commit/96aaa78))
* **closure-compiler:** use Number to cast ([#289](https://github.com/alessiobianchini/flex-layout/issues/289)) ([052a4a9](https://github.com/alessiobianchini/flex-layout/commit/052a4a9))
* **css:** add prefixed styles before standard ones ([99eabfb](https://github.com/alessiobianchini/flex-layout/commit/99eabfb)), closes [#467](https://github.com/alessiobianchini/flex-layout/issues/467) [#468](https://github.com/alessiobianchini/flex-layout/issues/468)
* **demo:** correctly use template instead of templateUrl ([#100](https://github.com/alessiobianchini/flex-layout/issues/100)) ([c436824](https://github.com/alessiobianchini/flex-layout/commit/c436824))
* **demo:** fix bindings for fxLayout with AoT ([#101](https://github.com/alessiobianchini/flex-layout/issues/101)) ([51ea29e](https://github.com/alessiobianchini/flex-layout/commit/51ea29e))
* **demo:** import MdCheckboxModule ([5f198a3](https://github.com/alessiobianchini/flex-layout/commit/5f198a3))
* **demo:** improve use of ObservableMedia service ([#214](https://github.com/alessiobianchini/flex-layout/issues/214)) ([64b122a](https://github.com/alessiobianchini/flex-layout/commit/64b122a))
* **demo, media-query-status:** should use async pipe with ObservableMedia ([0e7d2e0](https://github.com/alessiobianchini/flex-layout/commit/0e7d2e0))
* **flex:** add min-width to elements with flex basis using px values ([3fe5ea3](https://github.com/alessiobianchini/flex-layout/commit/3fe5ea3)), closes [#68](https://github.com/alessiobianchini/flex-layout/issues/68)
* **flex:** fix use of values with 'auto' ([#122](https://github.com/alessiobianchini/flex-layout/issues/122)) ([04d24d5](https://github.com/alessiobianchini/flex-layout/commit/04d24d5)), closes [#120](https://github.com/alessiobianchini/flex-layout/issues/120)
* **flexbox:** add default display property to getDisplayStyle() ([#301](https://github.com/alessiobianchini/flex-layout/issues/301)) ([771f2c9](https://github.com/alessiobianchini/flex-layout/commit/771f2c9))
* **flexbox:** resolve 'renderer.setStyle()' error ([#298](https://github.com/alessiobianchini/flex-layout/issues/298)) ([3e1fcbd](https://github.com/alessiobianchini/flex-layout/commit/3e1fcbd)), closes [#270](https://github.com/alessiobianchini/flex-layout/issues/270)
* **flexbox:** scan flex-direction in css stylesheet ([#365](https://github.com/alessiobianchini/flex-layout/issues/365)) ([635c4f5](https://github.com/alessiobianchini/flex-layout/commit/635c4f5)), closes [#272](https://github.com/alessiobianchini/flex-layout/issues/272) [#364](https://github.com/alessiobianchini/flex-layout/issues/364)
* **FlexLayoutModule:** remove console.warn() conflicts with ngc+AOT ([#179](https://github.com/alessiobianchini/flex-layout/issues/179)) ([0797c85](https://github.com/alessiobianchini/flex-layout/commit/0797c85)), closes [#174](https://github.com/alessiobianchini/flex-layout/issues/174) [#175](https://github.com/alessiobianchini/flex-layout/issues/175) [#176](https://github.com/alessiobianchini/flex-layout/issues/176) [#178](https://github.com/alessiobianchini/flex-layout/issues/178)
* **fxFlex:** fxFlex=auto with overlapping breakpoints activated ([#183](https://github.com/alessiobianchini/flex-layout/issues/183)) ([cb614ed](https://github.com/alessiobianchini/flex-layout/commit/cb614ed)), closes [#135](https://github.com/alessiobianchini/flex-layout/issues/135)
* **fxFlex:** improve support for 'auto' and flex-basis variations ([#212](https://github.com/alessiobianchini/flex-layout/issues/212)) ([c28dfc7](https://github.com/alessiobianchini/flex-layout/commit/c28dfc7))
* **fxFlex:** prevent setting min/max-size when grow/shrink is zero ([#160](https://github.com/alessiobianchini/flex-layout/issues/160)) ([942939e](https://github.com/alessiobianchini/flex-layout/commit/942939e)), closes [#153](https://github.com/alessiobianchini/flex-layout/issues/153)
* **fxFlexFill, fxFlexAlign:** update selectors and wiki ([8f591c5](https://github.com/alessiobianchini/flex-layout/commit/8f591c5)), closes [#93](https://github.com/alessiobianchini/flex-layout/issues/93)
* **fxFlexOffset:** use parent flow direction for margin property ([#369](https://github.com/alessiobianchini/flex-layout/issues/369)) ([f0473e9](https://github.com/alessiobianchini/flex-layout/commit/f0473e9)), closes [#328](https://github.com/alessiobianchini/flex-layout/issues/328)
* **fxHide,fxShow:** fix standalone breakpoint selectors ([#121](https://github.com/alessiobianchini/flex-layout/issues/121)) ([0ca7d07](https://github.com/alessiobianchini/flex-layout/commit/0ca7d07)), closes [#62](https://github.com/alessiobianchini/flex-layout/issues/62) [#59](https://github.com/alessiobianchini/flex-layout/issues/59) [#105](https://github.com/alessiobianchini/flex-layout/issues/105)
* **fxLayoutAlign:** support flex-start and flex-end options ([#239](https://github.com/alessiobianchini/flex-layout/issues/239)) ([eb5cb9f](https://github.com/alessiobianchini/flex-layout/commit/eb5cb9f)), closes [#232](https://github.com/alessiobianchini/flex-layout/issues/232)
* **fxLayoutGap:** add gaps to dynamic content ([#124](https://github.com/alessiobianchini/flex-layout/issues/124)) ([6482c12](https://github.com/alessiobianchini/flex-layout/commit/6482c12)), closes [#95](https://github.com/alessiobianchini/flex-layout/issues/95)
* **fxLayoutGap:** fxLayoutWrap to apply gap logic for reverse directions ([#148](https://github.com/alessiobianchini/flex-layout/issues/148)) ([9f7137e](https://github.com/alessiobianchini/flex-layout/commit/9f7137e)), closes [#108](https://github.com/alessiobianchini/flex-layout/issues/108)
* **fxLayoutGap:** mutation observer should run outside the ngZone ([#370](https://github.com/alessiobianchini/flex-layout/issues/370)) ([9fb0877](https://github.com/alessiobianchini/flex-layout/commit/9fb0877)), closes [#329](https://github.com/alessiobianchini/flex-layout/issues/329)
* **fxLayoutGap:** skip hidden element nodes ([#145](https://github.com/alessiobianchini/flex-layout/issues/145)) ([6c45b35](https://github.com/alessiobianchini/flex-layout/commit/6c45b35)), closes [#136](https://github.com/alessiobianchini/flex-layout/issues/136)
* **fxLayoutGap:** update gap logic when num children reduces to 1. ([43b34fa](https://github.com/alessiobianchini/flex-layout/commit/43b34fa)), closes [#433](https://github.com/alessiobianchini/flex-layout/issues/433) [#444](https://github.com/alessiobianchini/flex-layout/issues/444)
* **fxShow, fxHide:** support fxHide+fxShow usages on same element ([#190](https://github.com/alessiobianchini/flex-layout/issues/190)) ([eee20b2](https://github.com/alessiobianchini/flex-layout/commit/eee20b2))
* **fxStyle:** enable raw input caching ([#173](https://github.com/alessiobianchini/flex-layout/issues/173)) ([d5b283c](https://github.com/alessiobianchini/flex-layout/commit/d5b283c))
* **lib:** remove all uses of [@internal](https://github.com/internal) ([ca64760](https://github.com/alessiobianchini/flex-layout/commit/ca64760))
* **lib, media-query:** support angular/universal ([#353](https://github.com/alessiobianchini/flex-layout/issues/353)) ([0f13b14](https://github.com/alessiobianchini/flex-layout/commit/0f13b14)), closes [#187](https://github.com/alessiobianchini/flex-layout/issues/187) [#354](https://github.com/alessiobianchini/flex-layout/issues/354) [#346](https://github.com/alessiobianchini/flex-layout/issues/346)
* **matchMediaObservable:** expose observable for rxjs operators ([#133](https://github.com/alessiobianchini/flex-layout/issues/133)) ([6e46561](https://github.com/alessiobianchini/flex-layout/commit/6e46561)), closes [#125](https://github.com/alessiobianchini/flex-layout/issues/125)
* **MatchMediaObservable:** register breakpoints so observable announces properly ([3555e14](https://github.com/alessiobianchini/flex-layout/commit/3555e14)), closes [#65](https://github.com/alessiobianchini/flex-layout/issues/65) [#64](https://github.com/alessiobianchini/flex-layout/issues/64)
* **ngClass:** add ngClass selector support ([#223](https://github.com/alessiobianchini/flex-layout/issues/223)) ([980d412](https://github.com/alessiobianchini/flex-layout/commit/980d412)), closes [#206](https://github.com/alessiobianchini/flex-layout/issues/206)
* **ngClass,ngStyle:** support proper API usages and ChangeDetectionStrategy.OnPush strategies ([#228](https://github.com/alessiobianchini/flex-layout/issues/228)) ([5db01e7](https://github.com/alessiobianchini/flex-layout/commit/5db01e7)), closes [#206](https://github.com/alessiobianchini/flex-layout/issues/206) [#215](https://github.com/alessiobianchini/flex-layout/issues/215)
* **ngStyle, ngClass:** StyleDirective security fixes &  merge activated styles ([#198](https://github.com/alessiobianchini/flex-layout/issues/198)) ([eb22fe5](https://github.com/alessiobianchini/flex-layout/commit/eb22fe5)), closes [#197](https://github.com/alessiobianchini/flex-layout/issues/197)
* **observableMedia:** consistently emit initial value ([f19bff2](https://github.com/alessiobianchini/flex-layout/commit/f19bff2))
* **ObservableMedia:** properly announce 'xs' activation at startup ([#396](https://github.com/alessiobianchini/flex-layout/issues/396)) ([66f3717](https://github.com/alessiobianchini/flex-layout/commit/66f3717)), closes [#388](https://github.com/alessiobianchini/flex-layout/issues/388)
* **ObservableMedia:** provide consistent reporting of active breakpoint ([#186](https://github.com/alessiobianchini/flex-layout/issues/186)) ([aa0dab4](https://github.com/alessiobianchini/flex-layout/commit/aa0dab4)), closes [#185](https://github.com/alessiobianchini/flex-layout/issues/185)
* **ObservableMedia:** startup should propagate lastReplay value properly ([#313](https://github.com/alessiobianchini/flex-layout/issues/313)) ([00ac57a](https://github.com/alessiobianchini/flex-layout/commit/00ac57a)), closes [#245](https://github.com/alessiobianchini/flex-layout/issues/245) [#275](https://github.com/alessiobianchini/flex-layout/issues/275) [#303](https://github.com/alessiobianchini/flex-layout/issues/303)
* import specific symbols from rxjs ([#99](https://github.com/alessiobianchini/flex-layout/issues/99)) ([88d1b0f](https://github.com/alessiobianchini/flex-layout/commit/88d1b0f))
* **prefixer:** improve flex css prefixes ([#276](https://github.com/alessiobianchini/flex-layout/issues/276)) ([beb5ed0](https://github.com/alessiobianchini/flex-layout/commit/beb5ed0))
* **release:** fix checkout CHANGELOG.md from origin/master ([e17cdc1](https://github.com/alessiobianchini/flex-layout/commit/e17cdc1))
* **release:** updates to commit to version changes: ([c2463a5](https://github.com/alessiobianchini/flex-layout/commit/c2463a5))
* **test:** fix test for fxFlex='' ([fcf851f](https://github.com/alessiobianchini/flex-layout/commit/fcf851f))
* **tests:** remove unneeded async() wrappers in karma tests ([a77de3c](https://github.com/alessiobianchini/flex-layout/commit/a77de3c))
* **universal:** remove browser check from style-utils ([8dcae02](https://github.com/alessiobianchini/flex-layout/commit/8dcae02)), closes [#466](https://github.com/alessiobianchini/flex-layout/issues/466)


### Features

* **api:** add responsive API for img elements ([#382](https://github.com/alessiobianchini/flex-layout/issues/382)) ([45cfd2e](https://github.com/alessiobianchini/flex-layout/commit/45cfd2e)), closes [#366](https://github.com/alessiobianchini/flex-layout/issues/366) [#376](https://github.com/alessiobianchini/flex-layout/issues/376)
* **api:** add responsive API for img elements ([#384](https://github.com/alessiobianchini/flex-layout/issues/384)) ([354f54f](https://github.com/alessiobianchini/flex-layout/commit/354f54f)), closes [#366](https://github.com/alessiobianchini/flex-layout/issues/366) [#81](https://github.com/alessiobianchini/flex-layout/issues/81) [#376](https://github.com/alessiobianchini/flex-layout/issues/376)
* **flexbox:** use protected access to allow API directives to be easily extended ([#163](https://github.com/alessiobianchini/flex-layout/issues/163)) ([e6bc451](https://github.com/alessiobianchini/flex-layout/commit/e6bc451))
* **fxFlex:** compute immediate parent flex-direction ([#220](https://github.com/alessiobianchini/flex-layout/issues/220)) ([ba0d85d](https://github.com/alessiobianchini/flex-layout/commit/ba0d85d))
* **layout:** add wrap options support to fxLayout ([#207](https://github.com/alessiobianchini/flex-layout/issues/207)) ([2340a19](https://github.com/alessiobianchini/flex-layout/commit/2340a19))
* **ObservableMedia:** use ObservableMedia class as provider token ([#158](https://github.com/alessiobianchini/flex-layout/issues/158)) ([dad69fe](https://github.com/alessiobianchini/flex-layout/commit/dad69fe))


### BREAKING CHANGES

* **ngStyle, ngClass:** * `[style.<alias>]` selectors are deprecated in favor of `[ngStyle.<alias>]` selectors
* `[class.<alias>]` selectors are deprecated in favor of `[ngClass.<alias>]` selectors
* default styles are merged with activated styles

```html
<div  fxLayout
  [class.xs]="['xs-1', 'xs-2']"
  [style]="{'font-size': '10px', 'margin-left' : '13px'}"
  [style.xs]="{'font-size': '16px'}"
  [style.md]="{'font-size': '12px'}">
</div>
```

```html
<div  fxLayout
  [ngClass.xs]="['xs-1', 'xs-2']"
  [ngStyle]="{'font-size': '10px', 'margin-left' : '13px'}"
  [ngStyle.xs]="{'font-size': '16px'}"
  [ngStyle.md]="{'font-size': '12px'}">
</div>
```
* **api:** Previously releases used FlexLayoutModule.forRoot(). This has been deprecated and removed.
* **ObservableMedia:** Deprecated use of `ObservableMediaService` opaque token. Developers now simply use the ObservableMedia class to inject the service.

*before*

```js
constructor( @Inject(ObserverableMediaService) private media:any ) { ... }
```

**after**
```js
constructor(private media:ObservableMedia) { ... }
```
* **matchMediaObservable:** * use opaque token `ObservableMediateService` to inject instance of `MediaService`
* use `MediaService::asObservable()` to get instance of observable

```js
// RxJS
import 'rxjs/add/operator/map';

@Component({ ... })
export class MyComponent {
  constructor( @Inject(ObservableMediaService) media) {
    media.asObservable()
      .map( (change:MediaChange) => change.mqAlias == 'md' )
      .subscribe((change:MediaChange) => {
        let state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : ""
        console.log( state );
      });
  }
}
```



<a name="2.0.0-beta.9"></a>
# [2.0.0-beta.9](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.8...2.0.0-beta.9) (2017-08-22)

This **ng-flex-layout** release provides full support for Angular 4.x; along with a long list of improvements:

* support for AOT and universal builds,
* more online demos and samples,
* improved performance,
* and more...

> Note that Angular 2.x is no longer supported.

### Features

* **api, ngClass, ngStyle:** add responsive support for ngClass and ngStyle ([#170](https://github.com/alessiobianchini/flex-layout/issues/170)) ([f57a63d](https://github.com/alessiobianchini/flex-layout/commit/f57a63d))
* **breakpoints:** support custom breakpoints and enhanced selectors ([#204](https://github.com/alessiobianchini/flex-layout/issues/204)) ([ecc6e51](https://github.com/alessiobianchini/flex-layout/commit/ecc6e51))
* **flexbox:** use protected access to allow API directives to be easily extended ([#163](https://github.com/alessiobianchini/flex-layout/issues/163)) ([e6bc451](https://github.com/alessiobianchini/flex-layout/commit/e6bc451))
* **fxFlex:** compute immediate parent flex-direction ([#220](https://github.com/alessiobianchini/flex-layout/issues/220)) ([ba0d85d](https://github.com/alessiobianchini/flex-layout/commit/ba0d85d))
* **fxLayout:** add wrap options support to fxLayout ([#207](https://github.com/alessiobianchini/flex-layout/issues/207)) ([2340a19](https://github.com/alessiobianchini/flex-layout/commit/2340a19))
* **ObservableMedia:** use ObservableMedia class as provider token ([#158](https://github.com/alessiobianchini/flex-layout/issues/158)) ([dad69fe](https://github.com/alessiobianchini/flex-layout/commit/dad69fe))

### BREAKING CHANGES

* **ngStyle, ngClass:** * `[style.<alias>]` selectors are deprecated in favor of `[ngStyle.<alias>]` selectors
* `[class.<alias>]` selectors are deprecated in favor of `[ngClass.<alias>]` selectors
* default styles are merged with activated styles

```html
<div  fxLayout
  [class.xs]="['xs-1', 'xs-2']"
  [style]="{'font-size': '10px', 'margin-left' : '13px'}"
  [style.xs]="{'font-size': '16px'}"
  [style.md]="{'font-size': '12px'}">
</div>
```

```html
<div  fxLayout
  [ngClass.xs]="['xs-1', 'xs-2']"
  [ngStyle]="{'font-size': '10px', 'margin-left' : '13px'}"
  [ngStyle.xs]="{'font-size': '16px'}"
  [ngStyle.md]="{'font-size': '12px'}">
</div>
```
* **api:** Previously releases used FlexLayoutModule.forRoot(). This has been deprecated and removed.

```js
import {FlexLayoutModule} from 'ng-flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule
  ]
})
export class DemoAppModule { }
```

* **ObservableMedia:** Deprecated use of `ObservableMediaService` opaque token. Developers now simply use the ObservableMedia class to inject the service.
* use `MediaService::asObservable()` to get instance of observable

*before*

```js
constructor( @Inject(ObserverableMediaService) private media:any ) { ... }
```

**after**
```js
constructor(private media:ObservableMedia) { ... }
```

##### Example

```js
import {ObservableMedia, MediaChange} from 'ng-flex-layout';

@Component({ ... })
export class MyComponent {
  
  constructor( @Inject(ObservableMedia) media) {
    
    media.asObservable()
      .map( (change:MediaChange) => change.mqAlias == 'md' )
      .subscribe((change:MediaChange) => {
        let state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : ""
        console.log( state );
      });
    
  }
}
```

### Bug Fixes

* **api:** defer getComputedStyle() calls until ngOnInit phase ([#374](https://github.com/alessiobianchini/flex-layout/issues/374)) ([3611003](https://github.com/alessiobianchini/flex-layout/commit/3611003)), closes [#310](https://github.com/alessiobianchini/flex-layout/issues/310)
* **api:** layout with layoutAlign was not responding to reverse directions ([dde6e87](https://github.com/alessiobianchini/flex-layout/commit/dde6e87)), closes [#82](https://github.com/alessiobianchini/flex-layout/issues/82)
* **api:** remove circular dependencies ([7bff29e](https://github.com/alessiobianchini/flex-layout/commit/7bff29e)), closes [#88](https://github.com/alessiobianchini/flex-layout/issues/88)
* **api:** remove use of static ngModule.forRoot() ([#167](https://github.com/alessiobianchini/flex-layout/issues/167)) ([86010bf](https://github.com/alessiobianchini/flex-layout/commit/86010bf))
* **api:** restore orig display mode and more... ([#143](https://github.com/alessiobianchini/flex-layout/issues/143)) ([d269d73](https://github.com/alessiobianchini/flex-layout/commit/d269d73)), closes [#140](https://github.com/alessiobianchini/flex-layout/issues/140) [#141](https://github.com/alessiobianchini/flex-layout/issues/141)
* **api:** support query children on API directives ([#290](https://github.com/alessiobianchini/flex-layout/issues/290)) ([f5558de](https://github.com/alessiobianchini/flex-layout/commit/f5558de))
* **api, flexbox:** add default display property to getDisplayStyle() ([#301](https://github.com/alessiobianchini/flex-layout/issues/301)) ([771f2c9](https://github.com/alessiobianchini/flex-layout/commit/771f2c9))
* **api, flexbox:** resolve 'renderer.setStyle()' error ([#298](https://github.com/alessiobianchini/flex-layout/issues/298)) ([3e1fcbd](https://github.com/alessiobianchini/flex-layout/commit/3e1fcbd)), closes [#270](https://github.com/alessiobianchini/flex-layout/issues/270)
* **api, flexbox:** scan flex-direction in css stylesheet ([#365](https://github.com/alessiobianchini/flex-layout/issues/365)) ([635c4f5](https://github.com/alessiobianchini/flex-layout/commit/635c4f5)), closes [#272](https://github.com/alessiobianchini/flex-layout/issues/272) [#364](https://github.com/alessiobianchini/flex-layout/issues/364)
* **api, breakpoints:** resolve 1px hole between lg -> xl breakpoints ([#159](https://github.com/alessiobianchini/flex-layout/issues/159)) ([d78527c](https://github.com/alessiobianchini/flex-layout/commit/d78527c)), closes [#149](https://github.com/alessiobianchini/flex-layout/issues/149)
* **api, breakpoints:** support print media ([#367](https://github.com/alessiobianchini/flex-layout/issues/367)) ([37a0b85](https://github.com/alessiobianchini/flex-layout/commit/37a0b85)), closes [#361](https://github.com/alessiobianchini/flex-layout/issues/361)
* **fxFlex:** add min-width to elements with flex basis using px values ([3fe5ea3](https://github.com/alessiobianchini/flex-layout/commit/3fe5ea3)), closes [#68](https://github.com/alessiobianchini/flex-layout/issues/68)
* **fxFlex:** fix use of values with 'auto' ([#122](https://github.com/alessiobianchini/flex-layout/issues/122)) ([04d24d5](https://github.com/alessiobianchini/flex-layout/commit/04d24d5)), closes [#120](https://github.com/alessiobianchini/flex-layout/issues/120)
* **FlexLayoutModule:** remove console.warn() conflicts with ngc+AOT ([#179](https://github.com/alessiobianchini/flex-layout/issues/179)) ([0797c85](https://github.com/alessiobianchini/flex-layout/commit/0797c85)), closes [#174](https://github.com/alessiobianchini/flex-layout/issues/174) [#175](https://github.com/alessiobianchini/flex-layout/issues/175) [#176](https://github.com/alessiobianchini/flex-layout/issues/176) [#178](https://github.com/alessiobianchini/flex-layout/issues/178)
* **fxFlex:** fxFlex=auto with overlapping breakpoints activated ([#183](https://github.com/alessiobianchini/flex-layout/issues/183)) ([cb614ed](https://github.com/alessiobianchini/flex-layout/commit/cb614ed)), closes [#135](https://github.com/alessiobianchini/flex-layout/issues/135)
* **fxFlex:** improve support for 'auto' and flex-basis variations ([#212](https://github.com/alessiobianchini/flex-layout/issues/212)) ([c28dfc7](https://github.com/alessiobianchini/flex-layout/commit/c28dfc7))
* **fxFlex:** prevent setting min/max-size when grow/shrink is zero ([#160](https://github.com/alessiobianchini/flex-layout/issues/160)) ([942939e](https://github.com/alessiobianchini/flex-layout/commit/942939e)), closes [#153](https://github.com/alessiobianchini/flex-layout/issues/153)
* **fxFlexFill, fxFlexAlign:** update selectors and wiki ([8f591c5](https://github.com/alessiobianchini/flex-layout/commit/8f591c5)), closes [#93](https://github.com/alessiobianchini/flex-layout/issues/93)
* **fxFlexOffset:** use parent flow direction for margin property ([#369](https://github.com/alessiobianchini/flex-layout/issues/369)) ([f0473e9](https://github.com/alessiobianchini/flex-layout/commit/f0473e9)), closes [#328](https://github.com/alessiobianchini/flex-layout/issues/328)
* **fxHide,fxShow:** fix standalone breakpoint selectors ([#121](https://github.com/alessiobianchini/flex-layout/issues/121)) ([0ca7d07](https://github.com/alessiobianchini/flex-layout/commit/0ca7d07)), closes [#62](https://github.com/alessiobianchini/flex-layout/issues/62) [#59](https://github.com/alessiobianchini/flex-layout/issues/59) [#105](https://github.com/alessiobianchini/flex-layout/issues/105)
* **fxLayoutAlign:** support flex-start and flex-end options ([#239](https://github.com/alessiobianchini/flex-layout/issues/239)) ([eb5cb9f](https://github.com/alessiobianchini/flex-layout/commit/eb5cb9f)), closes [#232](https://github.com/alessiobianchini/flex-layout/issues/232)
* **fxLayoutGap:** add gaps to dynamic content ([#124](https://github.com/alessiobianchini/flex-layout/issues/124)) ([6482c12](https://github.com/alessiobianchini/flex-layout/commit/6482c12)), closes [#95](https://github.com/alessiobianchini/flex-layout/issues/95)
* **fxLayoutGap:** fxLayoutWrap to apply gap logic for reverse directions ([#148](https://github.com/alessiobianchini/flex-layout/issues/148)) ([9f7137e](https://github.com/alessiobianchini/flex-layout/commit/9f7137e)), closes [#108](https://github.com/alessiobianchini/flex-layout/issues/108)
* **fxLayoutGap:** mutation observer should run outside the ngZone ([#370](https://github.com/alessiobianchini/flex-layout/issues/370)) ([9fb0877](https://github.com/alessiobianchini/flex-layout/commit/9fb0877)), closes [#329](https://github.com/alessiobianchini/flex-layout/issues/329)
* **fxLayoutGap:** skip hidden element nodes ([#145](https://github.com/alessiobianchini/flex-layout/issues/145)) ([6c45b35](https://github.com/alessiobianchini/flex-layout/commit/6c45b35)), closes [#136](https://github.com/alessiobianchini/flex-layout/issues/136)
* **fxShow, fxHide:** support fxHide+fxShow usages on same element ([#190](https://github.com/alessiobianchini/flex-layout/issues/190)) ([eee20b2](https://github.com/alessiobianchini/flex-layout/commit/eee20b2))
* **fxStyle:** enable raw input caching ([#173](https://github.com/alessiobianchini/flex-layout/issues/173)) ([d5b283c](https://github.com/alessiobianchini/flex-layout/commit/d5b283c))
* **matchMediaObservable:** expose observable for rxjs operators ([#133](https://github.com/alessiobianchini/flex-layout/issues/133)) ([6e46561](https://github.com/alessiobianchini/flex-layout/commit/6e46561)), closes [#125](https://github.com/alessiobianchini/flex-layout/issues/125)
* **MatchMediaObservable:** register breakpoints so observable announces properly ([3555e14](https://github.com/alessiobianchini/flex-layout/commit/3555e14)), closes [#65](https://github.com/alessiobianchini/flex-layout/issues/65) [#64](https://github.com/alessiobianchini/flex-layout/issues/64)
* **ngClass:** add ngClass selector support ([#223](https://github.com/alessiobianchini/flex-layout/issues/223)) ([980d412](https://github.com/alessiobianchini/flex-layout/commit/980d412)), closes [#206](https://github.com/alessiobianchini/flex-layout/issues/206)
* **ngClass,ngStyle:** support proper API usages and ChangeDetectionStrategy.OnPush strategies ([#228](https://github.com/alessiobianchini/flex-layout/issues/228)) ([5db01e7](https://github.com/alessiobianchini/flex-layout/commit/5db01e7)), closes [#206](https://github.com/alessiobianchini/flex-layout/issues/206) [#215](https://github.com/alessiobianchini/flex-layout/issues/215)
* **ngStyle, ngClass:** StyleDirective security fixes &  merge activated styles ([#198](https://github.com/alessiobianchini/flex-layout/issues/198)) ([eb22fe5](https://github.com/alessiobianchini/flex-layout/commit/eb22fe5)), closes [#197](https://github.com/alessiobianchini/flex-layout/issues/197)
* **ObservableMedia:** provide consistent reporting of active breakpoint ([#186](https://github.com/alessiobianchini/flex-layout/issues/186)) ([aa0dab4](https://github.com/alessiobianchini/flex-layout/commit/aa0dab4)), closes [#185](https://github.com/alessiobianchini/flex-layout/issues/185)
* **ObservableMedia:** startup should propagate lastReplay value properly ([#313](https://github.com/alessiobianchini/flex-layout/issues/313)) ([00ac57a](https://github.com/alessiobianchini/flex-layout/commit/00ac57a)), closes [#245](https://github.com/alessiobianchini/flex-layout/issues/245) [#275](https://github.com/alessiobianchini/flex-layout/issues/275) [#303](https://github.com/alessiobianchini/flex-layout/issues/303)
* **lib:** remove all uses of [@internal](https://github.com/internal) ([ca64760](https://github.com/alessiobianchini/flex-layout/commit/ca64760))
* **lib, auto-prefixer:** resolve perf impacts as reported by LightHouse ([#283](https://github.com/alessiobianchini/flex-layout/issues/283)) ([bc0c900](https://github.com/alessiobianchini/flex-layout/commit/bc0c900)), closes [#282](https://github.com/alessiobianchini/flex-layout/issues/282)
* **lib, media-query:** support angular/universal ([#353](https://github.com/alessiobianchini/flex-layout/issues/353)) ([0f13b14](https://github.com/alessiobianchini/flex-layout/commit/0f13b14)), closes [#187](https://github.com/alessiobianchini/flex-layout/issues/187) [#354](https://github.com/alessiobianchini/flex-layout/issues/354) [#346](https://github.com/alessiobianchini/flex-layout/issues/346)
* **lib, rxjs:** import specific symbols from rxjs insted of using prototype-mutating operators ([#99](https://github.com/alessiobianchini/flex-layout/issues/99)) ([88d1b0f](https://github.com/alessiobianchini/flex-layout/commit/88d1b0f))
* **lib, prefixer:** improve flex css prefixes ([#276](https://github.com/alessiobianchini/flex-layout/issues/276)) ([beb5ed0](https://github.com/alessiobianchini/flex-layout/commit/beb5ed0))
* **build:** add observable-media-service to exported barrel ([#139](https://github.com/alessiobianchini/flex-layout/issues/139)) ([b7dffaa](https://github.com/alessiobianchini/flex-layout/commit/b7dffaa))
* **build:** remove use of Angular private API ([#195](https://github.com/alessiobianchini/flex-layout/issues/195)) ([d95cb09](https://github.com/alessiobianchini/flex-layout/commit/d95cb09)), closes [#193](https://github.com/alessiobianchini/flex-layout/issues/193)
* **build:** support Angular 4 and AOT ([#255](https://github.com/alessiobianchini/flex-layout/issues/255)) ([fed87fa](https://github.com/alessiobianchini/flex-layout/commit/fed87fa)), closes [#254](https://github.com/alessiobianchini/flex-layout/issues/254) [#236](https://github.com/alessiobianchini/flex-layout/issues/236) [#227](https://github.com/alessiobianchini/flex-layout/issues/227)
* **demo:** correctly use template instead of templateUrl ([#100](https://github.com/alessiobianchini/flex-layout/issues/100)) ([c436824](https://github.com/alessiobianchini/flex-layout/commit/c436824))
* **demo:** fix bindings for fxLayout with AoT ([#101](https://github.com/alessiobianchini/flex-layout/issues/101)) ([51ea29e](https://github.com/alessiobianchini/flex-layout/commit/51ea29e))
* **demo:** improve use of ObservableMedia service ([#214](https://github.com/alessiobianchini/flex-layout/issues/214)) ([64b122a](https://github.com/alessiobianchini/flex-layout/commit/64b122a))
* **demo:** add ngxSplitter demo showing how splitters can be used with Flex-Layout ([ngxSplitter Demo](https://ng-flex-layout.azurewebsites.net/#/issues))


<a name="2.0.0-beta.8"></a>
# [2.0.0-beta.8](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.7...v2.0.0-beta.8) (2017-04-18)


### BREAKING CHANGES

These changes to **ng-flex-layout** will require Angular v4.x and will **not** be compatible with Angular v2.x.

### Bug Fixes

* **build:** support Angular 4 and AOT ([#255](https://github.com/alessiobianchini/flex-layout/issues/255)) ([fed87fa](https://github.com/alessiobianchini/flex-layout/commit/fed87fa)), closes [#254](https://github.com/alessiobianchini/flex-layout/issues/254) [#236](https://github.com/alessiobianchini/flex-layout/issues/236) [#227](https://github.com/alessiobianchini/flex-layout/issues/227)



<a name="2.0.0-beta.7"></a>
# [2.0.0-beta.7](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.6...v2.0.0-beta.7) (2017-03-17)

> ##### Note: Previous Release
> We prematurely labeled the previously release **ng-flex-layout v2.0.0-rc.1**.  
It should have been a beta release and is therefore renamed to ng-flex-layout v2.0.0-beta.6.

### Bug Fixes

* **demo:** improve use of ObservableMedia service ([#214](https://github.com/alessiobianchini/flex-layout/issues/214)) ([64b122a](https://github.com/alessiobianchini/flex-layout/commit/64b122a))
* **fxFlex:** improve support for 'auto' and flex-basis variations ([#212](https://github.com/alessiobianchini/flex-layout/issues/212)) ([c28dfc7](https://github.com/alessiobianchini/flex-layout/commit/c28dfc7))
* **fxLayoutAlign:** support flex-start and flex-end options ([#239](https://github.com/alessiobianchini/flex-layout/issues/239)) ([eb5cb9f](https://github.com/alessiobianchini/flex-layout/commit/eb5cb9f)), closes [#232](https://github.com/alessiobianchini/flex-layout/issues/232)
* **ngClass:** add ngClass selector support ([#223](https://github.com/alessiobianchini/flex-layout/issues/223)) ([980d412](https://github.com/alessiobianchini/flex-layout/commit/980d412)), closes [#206](https://github.com/alessiobianchini/flex-layout/issues/206)
* **ngClass,ngStyle:** support proper API usages and ChangeDetectionStrategy.OnPush strategies ([#228](https://github.com/alessiobianchini/flex-layout/issues/228)) ([5db01e7](https://github.com/alessiobianchini/flex-layout/commit/5db01e7)), closes [#206](https://github.com/alessiobianchini/flex-layout/issues/206) [#215](https://github.com/alessiobianchini/flex-layout/issues/215)
* **ngStyle, ngClass:** StyleDirective security fixes &  merge activated styles ([#198](https://github.com/alessiobianchini/flex-layout/issues/198)) ([eb22fe5](https://github.com/alessiobianchini/flex-layout/commit/eb22fe5)), closes [#197](https://github.com/alessiobianchini/flex-layout/issues/197)

### Features

* **breakpoints:** support custom breakpoints and enhanced selectors ([#204](https://github.com/alessiobianchini/flex-layout/issues/204)) ([ecc6e51](https://github.com/alessiobianchini/flex-layout/commit/ecc6e51))
* **fxFlex:** compute immediate parent flex-direction ([#220](https://github.com/alessiobianchini/flex-layout/issues/220)) ([ba0d85d](https://github.com/alessiobianchini/flex-layout/commit/ba0d85d))
* **fxLayout:** add wrap options support to fxLayout ([#207](https://github.com/alessiobianchini/flex-layout/issues/207)) ([2340a19](https://github.com/alessiobianchini/flex-layout/commit/2340a19))


### BREAKING CHANGES

* `FlexLayoutModule.forRoot()` was deprecated in *beta.6* and is now removed.

##### - before -

```js
imports : [  FlexLayoutModule.forRoot() ]
```

##### - after -

```js
imports : [  FlexLayoutModule ]
```

* **ngStyle, ngClass:** 
  * `[style.<alias>]` selectors are deprecated in favor of `[ngStyle.<alias>]` selectors
  * `[class.<alias>]` selectors are [destructive replacements](https://github.com/alessiobianchini/flex-layout/wiki/ngClass-API#standard-class-features) (no merging)
  * `[ngClass.<alias>]` selectors will [merge](https://github.com/alessiobianchini/flex-layout/wiki/ngClass-API#standard-ngclass-features) (add or remove classnames)
  * default styles are merged with activated styles
    *  see [ngClass API](http://bit.ly/ngClassAPI), [ngStyle API](http://bit.ly/ngStyleAPI) docs(s) for details.

##### - before -

```html
<div fxLayout
  [class.xs]="['xs-1', 'xs-2']"
  [style]="{'font-size': '10px', 'margin-left' : '13px'}"
  [style.xs]="{'font-size': '16px'}"
  [style.md]="{'font-size': '12px'}">
</div>
```
##### - after -

```html
<div fxLayout
  [ngClass.xs]="['xs-1', 'xs-2']"
  [ngStyle]="{'font-size': '10px', 'margin-left' : '13px'}"
  [ngStyle.xs]="{'font-size': '16px'}"
  [ngStyle.md]="{'font-size': '12px'}">
</div>
```



<a name="2.0.0-beta.6"></a>
# [2.0.0-beta.6](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.5...v2.0.0-beta.6) (2017-02-23)

### Bug Fixes

* **build:** remove use of Angular private API ([#195](https://github.com/alessiobianchini/flex-layout/issues/195)) ([d95cb09](https://github.com/alessiobianchini/flex-layout/commit/d95cb09)), closes [#193](https://github.com/alessiobianchini/flex-layout/issues/193)
* **FlexLayoutModule:** remove console.warn() conflicts with ngc+AOT ([#179](https://github.com/alessiobianchini/flex-layout/issues/179)) ([0797c85](https://github.com/alessiobianchini/flex-layout/commit/0797c85)), closes [#174](https://github.com/alessiobianchini/flex-layout/issues/174) [#175](https://github.com/alessiobianchini/flex-layout/issues/175) [#176](https://github.com/alessiobianchini/flex-layout/issues/176) [#178](https://github.com/alessiobianchini/flex-layout/issues/178)
* **fxFlex:** fxFlex=auto with overlapping breakpoints activated ([#183](https://github.com/alessiobianchini/flex-layout/issues/183)) ([cb614ed](https://github.com/alessiobianchini/flex-layout/commit/cb614ed)), closes [#135](https://github.com/alessiobianchini/flex-layout/issues/135)
* **fxShow, fxHide:** support fxHide+fxShow usages on same element ([#190](https://github.com/alessiobianchini/flex-layout/issues/190)) ([eee20b2](https://github.com/alessiobianchini/flex-layout/commit/eee20b2))
* **ObservableMedia:** provide consistent reporting of active breakpoint ([#186](https://github.com/alessiobianchini/flex-layout/issues/186)) ([aa0dab4](https://github.com/alessiobianchini/flex-layout/commit/aa0dab4)), closes [#185](https://github.com/alessiobianchini/flex-layout/issues/185)
* **release:** fix checkout CHANGELOG.md from origin/master ([e17cdc1](https://github.com/alessiobianchini/flex-layout/commit/e17cdc1))

<a name="2.0.0-beta.5"></a>
# [2.0.0-beta.5](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.4...v2.0.0-beta.5) (2017-02-09)

### Bug Fixes

* **breakpoints:** resolve 1px hole between lg -> xl breakpoints ([#159](https://github.com/alessiobianchini/flex-layout/issues/159)) ([d78527c](https://github.com/alessiobianchini/flex-layout/commit/d78527c)), closes [#149](https://github.com/alessiobianchini/flex-layout/issues/149)
* **FlexLayoutModule:** remove use of static ngModule.forRoot() ([#167](https://github.com/alessiobianchini/flex-layout/issues/167)) ([86010bf](https://github.com/alessiobianchini/flex-layout/commit/86010bf))
* **FlexLayoutModule:** add observable-media-service to exported barrel ([#139](https://github.com/alessiobianchini/flex-layout/issues/139)) ([b7dffaa](https://github.com/alessiobianchini/flex-layout/commit/b7dffaa))
* **fxFlex:** fix use of values with 'auto' ([#122](https://github.com/alessiobianchini/flex-layout/issues/122)) ([04d24d5](https://github.com/alessiobianchini/flex-layout/commit/04d24d5)), closes [#120](https://github.com/alessiobianchini/flex-layout/issues/120)
* **fxFlex:** prevent setting min/max-size when grow/shrink is zero ([#160](https://github.com/alessiobianchini/flex-layout/issues/160)) ([942939e](https://github.com/alessiobianchini/flex-layout/commit/942939e)), closes [#153](https://github.com/alessiobianchini/flex-layout/issues/153)
* **fxHide,fxShow:** restore orig display mode and more... ([#143](https://github.com/alessiobianchini/flex-layout/issues/143)) ([d269d73](https://github.com/alessiobianchini/flex-layout/commit/d269d73)), closes [#140](https://github.com/alessiobianchini/flex-layout/issues/140) [#141](https://github.com/alessiobianchini/flex-layout/issues/141)
* **fxHide,fxShow:** fix standalone breakpoint selectors ([#121](https://github.com/alessiobianchini/flex-layout/issues/121)) ([0ca7d07](https://github.com/alessiobianchini/flex-layout/commit/0ca7d07)), closes [#62](https://github.com/alessiobianchini/flex-layout/issues/62) [#59](https://github.com/alessiobianchini/flex-layout/issues/59) [#105](https://github.com/alessiobianchini/flex-layout/issues/105)
* **fxLayoutGap:** add gaps to dynamic content ([#124](https://github.com/alessiobianchini/flex-layout/issues/124)) ([6482c12](https://github.com/alessiobianchini/flex-layout/commit/6482c12)), closes [#95](https://github.com/alessiobianchini/flex-layout/issues/95)
* **fxLayoutGap:** fxLayoutWrap to apply gap logic for reverse directions ([#148](https://github.com/alessiobianchini/flex-layout/issues/148)) ([9f7137e](https://github.com/alessiobianchini/flex-layout/commit/9f7137e)), closes [#108](https://github.com/alessiobianchini/flex-layout/issues/108)
* **fxLayoutGap:** skip hidden element nodes ([#145](https://github.com/alessiobianchini/flex-layout/issues/145)) ([6c45b35](https://github.com/alessiobianchini/flex-layout/commit/6c45b35)), closes [#136](https://github.com/alessiobianchini/flex-layout/issues/136)
* **fxClass,fxStyle:** enable raw input caching ([#173](https://github.com/alessiobianchini/flex-layout/issues/173)) ([d5b283c](https://github.com/alessiobianchini/flex-layout/commit/d5b283c))
* **ObservableMedia:** expose `asObservable()` for rxjs operators ([#133](https://github.com/alessiobianchini/flex-layout/issues/133)) ([6e46561](https://github.com/alessiobianchini/flex-layout/commit/6e46561)), closes [#125](https://github.com/alessiobianchini/flex-layout/issues/125)

### Features

* **API:** use protected access to allow API directives to be easily extended ([#163](https://github.com/alessiobianchini/flex-layout/issues/163)) ([e6bc451](https://github.com/alessiobianchini/flex-layout/commit/e6bc451))
* **fxClass,fxStyle:** add responsive support for ngClass and ngStyle ([#170](https://github.com/alessiobianchini/flex-layout/issues/170)) ([f57a63d](https://github.com/alessiobianchini/flex-layout/commit/f57a63d))
* **ObservableMedia:** use ObservableMedia class as provider token ([#158](https://github.com/alessiobianchini/flex-layout/issues/158)) ([dad69fe](https://github.com/alessiobianchini/flex-layout/commit/dad69fe))

### BREAKING CHANGES

* ObservableMedia: Deprecated use of `ObservableMediaService` opaque token. Developers now simply use the ObservableMedia class to inject the service.
* FlexLayoutModule: Previously releases used FlexLayoutModule.forRoot(); This has been deprecated.

*before*

```js
constructor( @Inject(ObserverableMediaService) media:any ) { ... }
```

**after**
```js
constructor(private media:ObservableMedia) { ... }
```
* ObservableMedia: use class `ObservableMedia` to inject instance of service
* use `MediaService::asObservable()` to get instance of observable

```js
// RxJS
import 'rxjs/add/operator/map';
import {ObservableMedia} from 'ng-flex-layout';

@Component({ ... })
export class MyComponent {
  constructor( media:ObservableMedia ) {
    media.asObservable()
      .map( (change:MediaChange) => change.mqAlias == 'md' )
      .subscribe((change:MediaChange) => {
        let state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
        console.log( state );
      });
  }
}
```

Previously releases used FlexLayoutModule.forRoot().
This has been deprecated and will output a `console.warn()` if used.

-*before*-

```js
@NgModule({
  declarations : [...],
  imports : [
    CommonModule,
    FlexLayoutModule.forRoot()
  ]
})
export class DemosResponsiveLayoutsModule { }
```

-*after*-

```js
@NgModule({
  declarations : [...],
  imports : [ CommonModule, FlexLayoutModule ]
})
export class DemosResponsiveLayoutsModule { }
```

<a name="2.0.0-beta.4"></a>
# [2.0.0-beta.4](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.3...v2.0.0-beta.4) (2017-01-27)


### Bug Fixes

* **flex:** fix use of values with 'auto' ([#122](https://github.com/alessiobianchini/flex-layout/issues/122)) ([04d24d5](https://github.com/alessiobianchini/flex-layout/commit/04d24d5)), closes [#120](https://github.com/alessiobianchini/flex-layout/issues/120)
* **fxHide,fxShow:** fix standalone breakpoint selectors ([#121](https://github.com/alessiobianchini/flex-layout/issues/121)) ([0ca7d07](https://github.com/alessiobianchini/flex-layout/commit/0ca7d07)), closes [#62](https://github.com/alessiobianchini/flex-layout/issues/62) [#59](https://github.com/alessiobianchini/flex-layout/issues/59) [#105](https://github.com/alessiobianchini/flex-layout/issues/105)
* **fxLayoutGap:** add gaps to dynamic content ([#124](https://github.com/alessiobianchini/flex-layout/issues/124)) ([6482c12](https://github.com/alessiobianchini/flex-layout/commit/6482c12)), closes [#95](https://github.com/alessiobianchini/flex-layout/issues/95)
* **matchMediaObservable:** expose observable for rxjs operators ([#133](https://github.com/alessiobianchini/flex-layout/issues/133)) ([6e46561](https://github.com/alessiobianchini/flex-layout/commit/6e46561)), closes [#125](https://github.com/alessiobianchini/flex-layout/issues/125)


### BREAKING CHANGES

* matchMediaObservable: * use opaque token `ObservableMediateService` to inject instance of `MediaService`
* use `MediaService::asObservable()` to get instance of observable

```js
// RxJS
import 'rxjs/add/operator/map';

@Component({ ... })
export class MyComponent {
  constructor( @Inject(ObservableMediaService) media) {
    media.asObservable()
      .map( (change:MediaChange) => change.mqAlias == 'md' )
      .subscribe((change:MediaChange) => {
        let state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : ""
        console.log( state );
      });
  }
}
```

<a name="2.0.0-beta.3"></a>
# [2.0.0-beta.3](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2017-01-17)


<a name="2.0.0-beta.2"></a>
# [2.0.0-beta.2](https://github.com/alessiobianchini/flex-layout/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2017-01-13)


### Bug Fixes

* **api:** layout with layoutAlign was not responding to reverse directions ([dde6e87](https://github.com/alessiobianchini/flex-layout/commit/dde6e87)), closes [#82](https://github.com/alessiobianchini/flex-layout/issues/82)
* **api:** remove circular dependencies ([7bff29e](https://github.com/alessiobianchini/flex-layout/commit/7bff29e)), closes [#88](https://github.com/alessiobianchini/flex-layout/issues/88)
* **changelog:** fix invalid parentheses and semver checks ([96aaa78](https://github.com/alessiobianchini/flex-layout/commit/96aaa78))
* **demo:** correctly use template instead of templateUrl ([#100](https://github.com/alessiobianchini/flex-layout/issues/100)) ([c436824](https://github.com/alessiobianchini/flex-layout/commit/c436824))
* **demo:** fix bindings for fxLayout with AoT ([#101](https://github.com/alessiobianchini/flex-layout/issues/101)) ([51ea29e](https://github.com/alessiobianchini/flex-layout/commit/51ea29e))
* import specific symbols from rxjs ([#99](https://github.com/alessiobianchini/flex-layout/issues/99)) ([88d1b0f](https://github.com/alessiobianchini/flex-layout/commit/88d1b0f))
* **flex:** add min-width to elements with flex basis using px values ([3fe5ea3](https://github.com/alessiobianchini/flex-layout/commit/3fe5ea3)), closes [#68](https://github.com/alessiobianchini/flex-layout/issues/68)
* **fxFlexFill, fxFlexAlign:** update selectors and wiki ([8f591c5](https://github.com/alessiobianchini/flex-layout/commit/8f591c5)), closes [#93](https://github.com/alessiobianchini/flex-layout/issues/93)
* **lib:** remove all uses of [@internal](https://github.com/internal) ([ca64760](https://github.com/alessiobianchini/flex-layout/commit/ca64760))
* **MatchMediaObservable:** register breakpoints so observable announces properly ([3555e14](https://github.com/alessiobianchini/flex-layout/commit/3555e14)), closes [#65](https://github.com/alessiobianchini/flex-layout/issues/65) [#64](https://github.com/alessiobianchini/flex-layout/issues/64)
* **test:** fix test for fxFlex='' ([fcf851f](https://github.com/alessiobianchini/flex-layout/commit/fcf851f))
* **tests:** remove unneeded async() wrappers in karma tests ([a77de3c](https://github.com/alessiobianchini/flex-layout/commit/a77de3c))



<a name"2.0.0-beta.1"></a>
## 2.0.0-beta.1 (2016-12-24)

Initial public release to NPM
