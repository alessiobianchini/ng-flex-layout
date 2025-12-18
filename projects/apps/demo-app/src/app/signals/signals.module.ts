import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from 'ng-flex-layout';

import {DocsSignalsComponent} from './signals.component';
import {RoutingModule} from './routing.module';
import {SignalsCookbookComponent} from './signals-cookbook.component';
import {SignalsPatternsComponent} from './signals-patterns.component';
import {SignalsShellComponent} from './signals-shell.component';
import {SignalsSsrComponent} from './signals-ssr.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        RoutingModule,
    ],
    declarations: [
        DocsSignalsComponent,
        SignalsShellComponent,
        SignalsCookbookComponent,
        SignalsPatternsComponent,
        SignalsSsrComponent,
    ],
})
export class DocsSignalsModule {}
