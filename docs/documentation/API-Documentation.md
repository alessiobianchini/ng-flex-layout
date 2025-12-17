## JavaScript API (Imperative)

Most of the **ng-flex-layout** functionality is provided via Directives used **declaratively** in template HTML. 
There are three (3) programmatic features, however, that are published for programmatic usages:

* **[ObservableMedia](ObservableMedia.md)**:  
Injectable Observable used to subscribe to MediaQuery activation changes.
```typescript
import {ObservableMedia} from 'ng-flex-layout';
constructor(public media: ObservableMedia ) { ... }
```

* **[BREAKPOINTS](BreakPoints.md)**:  
Injection token used to override or extend the default breakpoints with custom MediaQuery breakpoints.
```typescript
import {BREAKPOINTS} from 'ng-flex-layout';
providers: [{provide: BREAKPOINTS, useValue: MY_CUSTOM_BREAKPOINTS }]
```

* **[BaseDirectiveAdapter](BaseFxDirectiveAdapter.md)**:  
Adapter class useful to extend existing Directives with MediaQuery activation features.  
```typescript
import {NgClass} from '@angular/core';
export class ClassDirective extends NgClass { ... }
```

## HTML API (Declarative)

The features of Flex-Layout are best used declaratively in template HTML. This API has two (2) significant feature sets:

* **[Static API](Declarative-API-Overview.md)**: Summary of static API 
features.
* **[Responsive API](Responsive-API.md)**: Introducing Responsive API and 
BreakPoints details.

As each directive (aka API) within **ng-flex-layout** has its own constraints and options, 
the links below should be used to navigate to the specific documentation pages for each directive


### Containers

This API set applies flexbox CSS stylings for DOM **container elements** with 1 or more nested flex children:

* [**fxLayout**](fxLayout-API.md): 
Defines the flow order of child items within a flexbox container
```html
<div fxLayout="row" fxLayout.xs="column"></div>
```
* **[fxLayoutGap](fxLayoutGap-API.md)**:
Defines if child items within a flexbox container should have a gap
```html
<div fxLayoutGap="10px"></div>
```
* **[fxLayoutAlign](fxLayoutAlign-API.md)**:
Defines how flexbox items are aligned according to both the main-axis and the cross-axis, within a flexbox container
```html
<div fxLayoutAlign="start stretch"></div>
```


### Child Elements within Containers

This API set applies flexbox CSS stylings for a DOM element nested within FlexBox DOM container:

* **[fxFlex](fxFlex-API.md)**: 
This markup specifies the resizing of its host element within a flexbox container flow
```html
<div fxFlex="1 2 calc(15em + 20px)"></div>
```
* **[fxFlexOrder](fxFlexOrder-API.md)**: 
Defines the order of a flexbox item
```html
<div fxFlexOrder="2"></div>
```
* **[fxFlexOffset](fxFlexOffset-API.md)**: 
Offset a flexbox item in its parent container flow layout
```html
<div fxFlexOffset="20px"></div>
```
* **[fxFlexAlign](fxFlexAlign-API.md)**: 
Works like fxLayoutAlign, but applies only to a single flexbox item, instead of all of them
```html
<div fxFlexAlign="center"></div>
```
* **[fxFlexFill](fxFlexFill-API.md)**:  
Maximizes width and height of element in a layout container
```html
<div fxFlexFill></div>
```


### Special Responsive Features

While the following APIs also add or remove DOM element inline styles, they are NOT FlexBox CSS specific. 

Instead these are **Responsive** APIs used to adjust specific, non-flexbox styles when a specific mediaQuery has 
activated:

* **[fxShow](fxShow-API.md)**:
This markup specifies if its host element should be displayed (or not)
```html
<div fxShow [fxShow.xs]="isVisibleOnMobile()"></div>
```
* **[fxHide](fxHide-API.md)**: 
This markup specifies if its host element should NOT be displayed
```html
<div fxHide [fxHide.gt-sm]="isVisibleOnDesktop()"></div>
```
* **[ngClass](ngClass-API.md)** :
Enhances the **ngClass** directives with class changes based on mediaQuery activations
```html
<div [ngClass.sm]="{'fxClass-sm': hasStyle}"></div>
``` 
* **[ngStyle](ngStyle-API.md)**: 
Enhances the **ngStyle** directive with style updates based on mediaQuery activations
```html
<div [ngStyle.xs]="{'font-size.px': 10, color: 'blue'}"></div>
```

