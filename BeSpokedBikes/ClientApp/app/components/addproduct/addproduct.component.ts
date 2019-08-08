import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchProductComponent } from '../fetchproduct/fetchproduct.component';
import { ProductService } from '../../services/productservice.service';

@Component({
    templateUrl: './AddProduct.component.html'
})

export class createproduct implements OnInit {
    productForm: FormGroup;
    title: string = "Create";
    productId: number;
    errorMessage: any;
    

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _productService: ProductService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.productId = this._avRoute.snapshot.params["id"];
        }

        this.productForm = this._fb.group({
            productId: 0,
            name: ['', [Validators.required]],
            manufacturer: ['', [Validators.required]],
            style: '',
            purchasePrice: [null, [Validators.required]],
            salePrice: null,
            qtyOnHand: [null, [Validators.required]],
            commissionPercentage: [null, [Validators.required]]
        })
    }

    ngOnInit() {

        if (this.productId > 0) {
            this.title = "Edit";
            this._productService.getProductById(this.productId)
                .subscribe(resp => this.productForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.productForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._productService.saveProduct(this.productForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-product']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._productService.updateProduct(this.productForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-product']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-product']);
    }

    get name() { return this.productForm.get('name'); }
    get manufacturer() { return this.productForm.get('manufacturer'); }
    get style() { return this.productForm.get('style'); }
    get purchasePrice() { return this.productForm.get('purchasePrice'); }
    get salePrice() { return this.productForm.get('salePrice'); }
    get qtyOnHand() { return this.productForm.get('qtyOnHand'); }
    get commissionPercentage() { return this.productForm.get('commissionPercentage'); }

}