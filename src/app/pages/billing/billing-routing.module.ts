import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        // { path: '', pathMatch:'prefix', redirectTo: '/billing/generate-claims' },
        { path: 'generate-claims', loadChildren: () => import('./generate-claims/generate-claims.module').then(m => m.GenerateClaimsModule) },
        { path: 'evv', loadChildren: () => import('./evv/evv.module').then(m => m.EvvModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class BillingRoutingModule { }
