import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchSalesPersonComponent } from '../fetchsalesperson/fetchsalesperson.component';
import { SalesPersonService } from '../../services/salespersonservice.service';

@Component({
    templateUrl: './AddOrUpdateSalesPerson.component.html',
    providers: [SalesPersonService]
})

export class addorupdatesalesperson implements OnInit {
    salespersonForm: FormGroup;
    title: string = "Edit";
    salesPersonId: number;
    errorMessage: any;


    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _salespersonService: SalesPersonService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.salesPersonId = this._avRoute.snapshot.params["id"];
        }

        this.salespersonForm = this._fb.group({
            salesPersonId: 0,
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            address: '',
            phone: '',
            startDate: [null, [Validators.required]],
            terminationDate: null,
            manager: ''
        })
    }

    ngOnInit() {

        if (this.salesPersonId > 0) {
            this.title = "Edit";
            this._salespersonService.getSalesPersonById(this.salesPersonId)
                .subscribe(resp => this.salespersonForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.salespersonForm.valid) {
            return;
        }

        if (this.title == "Edit") {
            this._salespersonService.updateSalesPerson(this.salespersonForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-salesperson']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-salesperson']);
    }

    get firstName() { return this.salespersonForm.get('firstName'); }
    get lastName() { return this.salespersonForm.get('lastName'); }
    get address() { return this.salespersonForm.get('address'); }
    get phone() { return this.salespersonForm.get('phone'); }
    get startDate() { return this.salespersonForm.get('startDate'); }
    get terminationDate() { return this.salespersonForm.get('terminationDate'); }
    get manager() { return this.salespersonForm.get('manager'); }

}