import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SaleService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    //Fetch results from Index controller
    getSales() {
        return this._http.get(this.myAppUrl + 'api/Sales/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getProductList() {
        return this._http.get(this.myAppUrl + 'api/Sales/GetProductsList')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getSalesPersonList() {
        return this._http.get(this.myAppUrl + 'api/Sales/GetSalesList')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCustomerList() {
        return this._http.get(this.myAppUrl + 'api/Sales/GetCustomerList')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveSale(sale) {
        return this._http.post(this.myAppUrl + 'api/Sales/Create', sale)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}