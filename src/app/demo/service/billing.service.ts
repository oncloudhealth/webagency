import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
