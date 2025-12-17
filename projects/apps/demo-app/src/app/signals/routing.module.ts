import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocsSignalsComponent} from './signals.component';

const ROUTES: Routes = [
    {path: '', component: DocsSignalsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class RoutingModule {}

