import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesPersonService } from '../../services/salespersonservice.service'

@Component({
    templateUrl: './fetchsalesperson.component.html',
    providers: [SalesPersonService]
})

export class FetchSalesPersonComponent {
    public salespersonList: SalesPersonData[];

    constructor(public http: Http, private _router: Router, private _salesPersonService: SalesPersonService) {
        //To display product data as the page loads
        this.getSalesPersons();
    }

    //To fetch the salesperson data and add to the salespersonList array
    getSalesPersons() {
        this._salesPersonService.getSalesPersons().subscribe(
            data => this.salespersonList = data
        )
    }
}

//to set up the model structure of the SalesPerson entity
interface SalesPersonData {
    salesPersonId: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    startDate: Date;
    terminationDate: Date;
    manager: string;

}