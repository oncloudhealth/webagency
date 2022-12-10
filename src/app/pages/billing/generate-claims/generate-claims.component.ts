import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ClearingHouse } from 'src/app/demo/api/clearing-house';
import { ModifierCode } from 'src/app/demo/api/modifier-code';
import { Payer } from 'src/app/demo/api/payer';
import { ProcedureCode } from 'src/app/demo/api/procedure-code';
import { Product } from 'src/app/demo/api/product';
import { BillingService } from 'src/app/demo/service/billing.service';

@Component({
  selector: 'app-generate-claims',
  templateUrl: './generate-claims.component.html',
  styleUrls: ['./generate-claims.component.scss'],
  providers: [MessageService]
})
export class GenerateClaimsComponent implements OnInit {
  claims!: Product[];
  payers!: Payer[];
  procedureCodes!: ProcedureCode[];
  modifierCodes!: ModifierCode[];
  clearingHouses!: ClearingHouse[];
  rangeDates!: Date[];

  filteredPayers: Payer[] = [];

  cols: any[] = [];
  loading: boolean = true;

  selectedPayer!: Payer;
  selectedProcedureCode!: ProcedureCode;
  selectedModifierCode!: ModifierCode;
  selectedClearingHouse!: ClearingHouse;

  selectedRows: Product[] = [];
  representatives: any[] = [];
  statuses: any[] = [];

  breadcrumb!: MenuItem[];
  home!: MenuItem;

  constructor(private billingService: BillingService, private messageService: MessageService) { }

  ngOnInit() {
    this.home = {icon: 'pi pi-home', routerLink: '/'};
    this.breadcrumb = [
      { label: 'Billing' },
      { label: 'Generate Claims' }
    ];

    this.billingService.getGenerateClaims().then(data => {
      this.claims = data;
    });

    this.billingService.getAllPayers().then(data => {
      this.payers = data;
    });

    this.billingService.getAllProcedureCodes().then(data => {
      this.procedureCodes = data;
    });

    this.billingService.getAllModifierCodes().then(data => {
      this.modifierCodes = data;
    });

    this.billingService.getAllClearingHouses().then(data => {
      this.loading = false;
      this.clearingHouses = data;
    });

    this.cols = [
      { field: "client", header: 'Client' },
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
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ]
  }

  filterPayer(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.payers.length; i++) {
      let payer = this.payers[i];
      if (payer.CompanyName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(payer);
      }
    }

    this.filteredPayers = filtered;
  }

  submit() {
    console.log(this.selectedRows);
    this.selectedRows.map((t: any) => {
      this.messageService.add({severity:'info', summary: `Selected: ${t.client.name}`, detail: t.name});
    });
  }

  clear(table: Table) {
    table.clear();
  }

}
