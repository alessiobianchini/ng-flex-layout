import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocsSignalsComponent} from './signals.component';
import {SignalsCookbookComponent} from './signals-cookbook.component';
import {SignalsPatternsComponent} from './signals-patterns.component';
import {SignalsSsrComponent} from './signals-ssr.component';
import {SignalsShellComponent} from './signals-shell.component';

const ROUTES: Routes = [
    {
        path: '',
        component: SignalsShellComponent,
        children: [
            {path: '', component: DocsSignalsComponent},
            {path: 'cookbook', component: SignalsCookbookComponent},
            {path: 'patterns', component: SignalsPatternsComponent},
            {path: 'ssr', component: SignalsSsrComponent},
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class RoutingModule {}
