import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing-routing.module';
import { EvvComponent } from './evv/evv.component';

@NgModule({
	imports: [
		CommonModule,
		BillingRoutingModule
	]
})
export class BillingModule { }
