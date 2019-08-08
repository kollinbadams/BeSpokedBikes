import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchProductComponent } from '../fetchproduct/fetchproduct.component';
import { SaleService } from '../../services/saleservice.service';

@Component({
    templateUrl: './AddSale.component.html',
    providers: [SaleService]
})

export class createsale implements OnInit {
    saleForm: FormGroup;
    title: string = "Create";
    salesId: number;
    errorMessage: any;
    productList: Array<any> = [];
    salespersonList: Array<any> = [];
    customerList: Array<any> = [];


    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _saleService: SaleService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.salesId = this._avRoute.snapshot.params["id"];
        }

        this.saleForm = this._fb.group({
            salesId: 0,
            product: ['', [Validators.required]],
            salesPerson: ['', [Validators.required]],
            customer: '',
            salesDate: [null, [Validators.required]],
        })
    }

    ngOnInit() {

        this._saleService.getProductList().subscribe(
            data => this.productList = data
        ) 

        this._saleService.getSalesPersonList().subscribe(
            data => this.salespersonList = data
        ) 

        this._saleService.getCustomerList().subscribe(
            data => this.customerList = data
        ) 

        if (this.salesId > 0) {
            this.title = "Edit";
            this._saleService.getSales()
                .subscribe(resp => this.saleForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.saleForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._saleService.saveSale(this.saleForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-sale']);
                }, error => this.errorMessage = error)
        }
       
    }

    cancel() {
        this._router.navigate(['/fetch-sale']);
    }

    //get name() { return this.saleForm.get('name'); }
    //get manufacturer() { return this.saleForm.get('manufacturer'); }
    //get style() { return this.saleForm.get('style'); }
    //get purchasePrice() { return this.saleForm.get('purchasePrice'); }
    //get salePrice() { return this.saleForm.get('salePrice'); }
    //get qtyOnHand() { return this.saleForm.get('qtyOnHand'); }
    //get commissionPercentage() { return this.saleForm.get('commissionPercentage'); }

}