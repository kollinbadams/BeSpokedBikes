import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/productservice.service'

@Component({
    templateUrl: './fetchproduct.component.html'
})

export class FetchProductComponent {
    public productList: ProductData[];

    constructor(public http: Http, private _router: Router, private _productService: ProductService) {
        //To display product data as the page loads
        this.getProducts();
    }

    //To fetch the products data and add to the productsList array
    getProducts() {
        this._productService.getProducts().subscribe(
            data => this.productList = data
        )
    }
}

//to set up the model structure of the Products entity
interface ProductData {
    productId: number;
    name: string;
    manufacturer: string;
    style: string;
    purchasePrice: number;
    salePrice: number;
    qtyOnHand: number;
    commissionPercentage: number;

}