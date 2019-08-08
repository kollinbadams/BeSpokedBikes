import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customerservice.service'

@Component({
    templateUrl: './fetchcustomer.component.html',
    providers: [CustomerService]
})

export class FetchCustomerComponent {
    public customerList: CustomerData[];

    constructor(public http: Http, private _router: Router, private _customerService: CustomerService) {
        //To display customer data as the page loads
        this.getCustomers();
    }

    //To fetch the products data and add to the customerList array
    getCustomers() {
        this._customerService.getCustomers().subscribe(
            data => this.customerList = data
        )
    }
}

//to set up the model structure of the Customer entity
interface CustomerData {
    customerId: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    startDate: Date;
}