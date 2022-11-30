import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { BillingService } from 'src/app/demo/service/billing.service';

@Component({
  selector: 'app-generate-claims',
  templateUrl: './generate-claims.component.html',
  styleUrls: ['./generate-claims.component.scss']
})
export class GenerateClaimsComponent implements OnInit {
  claims: Product[] = [];

  cols: any[] = [];
  loading: boolean = true;

  selectedRows: Product[] = [];
  representatives: any[] = [];
  statuses: any[] = [];

  constructor(private billingService: BillingService) { }

  ngOnInit() {
    this.billingService.getGenerateClaims().then(data => {
      this.loading = false;
      this.claims = data;
    });

    this.cols = [
      { field: "client['name']", header: 'Client' },
      { field: 'subscriber', header: 'Subscriber' },
      { field: 'payer', header: 'Payer' },
      { field: 'scheduleFrom', header: 'Schedule From' },
      { field: 'scheduleTo', header: 'Schedule To' },
      { field: 'scheduledHours', header: 'Schedule Hours' },
      { field: 'workedHours', header: 'Worked Hours' },
      { field: 'startingUnits', header: 'Starting Units' },
      { field: 'remainingUnits', header: 'Remaining Units' },
      { field: 'approved', header: 'Approved' },
      { field: 'employees', header: 'Employee(s)' },
      { field: 'totalAmount', header: 'Total Amount' }
    ];

    this.representatives = [
      { name: "Amy Elsner", image: 'amyelsner.png' },
      { name: "Anna Fali", image: 'annafali.png' },
      { name: "Asiya Javayant", image: 'asiyajavayant.png' },
      { name: "Bernardo Dominic", image: 'bernardodominic.png' },
      { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
      { name: "Ioni Bowcher", image: 'ionibowcher.png' },
      { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
      { name: "Onyama Limba", image: 'onyamalimba.png' },
      { name: "Stephen Shaw", image: 'stephenshaw.png' },
      { name: "Xuxue Feng", image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
  ]
  }

  clear(table: Table) {
    table.clear();
  }

}
