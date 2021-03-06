import { NgModule } from '@angular/core';
import { ProductService } from './services/productservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchProductComponent } from './components/fetchproduct/fetchproduct.component'
import { createproduct } from './components/addproduct/AddProduct.component'
import { FetchSalesPersonComponent } from './components/fetchsalesperson/fetchsalesperson.component'
import { addorupdatesalesperson } from './components/addorupdatesalesperson/addorupdatesalesperson.component'
import { FetchCustomerComponent } from './components/fetchcustomer/fetchcustomer.component'
import { FetchSaleComponent } from './components/fetchsale/fetchsale.component'
import { createsale } from './components/addsale/addsale.component'



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchProductComponent,
        createproduct,
        FetchSalesPersonComponent,
        addorupdatesalesperson,
        FetchCustomerComponent,
        FetchSaleComponent,
        createsale
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-product', component: FetchProductComponent },
            { path: 'register-product', component: createproduct },
            { path: 'product/edit/:id', component: createproduct },
            { path: 'fetch-salesperson', component: FetchSalesPersonComponent },
            { path: 'salesperson/edit/:id', component: addorupdatesalesperson },
            { path: 'fetch-customer', component: FetchCustomerComponent },
            { path: 'fetch-sale', component: FetchSaleComponent },
            { path: 'register-sale', component: createsale },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ProductService]
})
export class AppModuleShared {
}
