import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SaleService } from '../../services/saleservice.service'

@Component({
    templateUrl: './fetchsale.component.html',
    providers: [SaleService]
})

export class FetchSaleComponent {
    public saleList: SaleData[];

    constructor(public http: Http, private _router: Router, private _saleService: SaleService) {
        //To display product data as the page loads
        this.getProducts();
    }

    //To fetch the products data and add to the productsList array
    getProducts() {
        this._saleService.getSales().subscribe(
            data => this.saleList = data
        )
    }
}

//to set up the model structure of the Sales entity
interface SaleData {
    salesId: number;
    product: number;
    salesPerson: number;
    customer: number;
    salesDate: Date;
}