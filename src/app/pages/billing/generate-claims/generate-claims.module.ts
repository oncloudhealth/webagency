import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateClaimsComponent } from './generate-claims.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', data: { breadcrumb: 'Generate Claims' }, component: GenerateClaimsComponent }
        ]),
        FormsModule,
        TableModule,
        ProgressBarModule,
        DropdownModule,
        MultiSelectModule,
        InputTextModule,
        ButtonModule
    ],
    declarations: [GenerateClaimsComponent]
})
export class GenerateClaimsModule { }
