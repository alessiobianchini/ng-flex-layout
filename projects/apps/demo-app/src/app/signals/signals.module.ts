import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from 'ng-flex-layout';

import {DocsSignalsComponent} from './signals.component';
import {RoutingModule} from './routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        RoutingModule,
    ],
    declarations: [DocsSignalsComponent],
})
export class DocsSignalsModule {}

