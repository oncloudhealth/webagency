import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClearingHouse } from '../api/clearing-house';
import { ModifierCode } from '../api/modifier-code';
import { Payer } from '../api/payer';
import { ProcedureCode } from '../api/procedure-code';
import { Product } from '../api/product';

@Injectable()
export class BillingService {

    constructor(private http: HttpClient) { }

    getGenerateClaims() {
        return this.http.get<any>('assets/demo/data/generate-claims.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getAllPayers() {
        return this.http.get<any>('assets/demo/data/get-all-payers.json')
            .toPromise()
            .then(res => res.data as Payer[])
            .then(data => data);
    }

    getAllProcedureCodes() {
        return this.http.get<any>('assets/demo/data/procedure-codes.json')
            .toPromise()
            .then(res => res.data as ProcedureCode[])
            .then(data => data);
    }
    
    getAllModifierCodes() {
        return this.http.get<any>('assets/demo/data/modifier-codes.json')
            .toPromise()
            .then(res => res.data as ModifierCode[])
            .then(data => data);
    }

    getAllClearingHouses() {
        return this.http.get<any>('assets/demo/data/clearing-house.json')
            .toPromise()
            .then(res => res.data as ClearingHouse[])
            .then(data => data);
    }
}
