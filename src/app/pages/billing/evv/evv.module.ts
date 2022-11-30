import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EvvComponent } from './evv.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', data: { breadcrumb: 'Generate Claims' }, component: EvvComponent }
        ])
    ],
    declarations: [EvvComponent]
})
export class EvvModule { }
