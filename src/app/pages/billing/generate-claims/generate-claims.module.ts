import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateClaimsComponent } from './generate-claims.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', data: { breadcrumb: 'Generate Claims' }, component: GenerateClaimsComponent }
        ])
    ],
    declarations: [GenerateClaimsComponent]
})
export class GenerateClaimsModule { }
