import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SalesPersonService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    //Fetch results from Index controller
    getSalesPersons() {
        return this._http.get(this.myAppUrl + 'api/SalesPerson/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getSalesPersonById(id: number) {
        return this._http.get(this.myAppUrl + "api/SalesPerson/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }


    updateSalesPerson(salesperson) {
        return this._http.put(this.myAppUrl + 'api/SalesPerson/Edit', salesperson)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}