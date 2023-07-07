import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Discount } from "src/app/Models/discount.model";
import { DiscountService } from "src/app/Service/discountService";

@Component({
    templateUrl: './discount.component.html'
})

export class DiscountComponent implements OnInit {
    constructor(
        private _DiscountService: DiscountService,
        private _formBuilder: FormBuilder,
    ) {}

    discountForm: FormGroup;
    ngOnInit(): void {
        this.discountForm = this._formBuilder.group({
            content: '',
            status: false,
            price: '',
            dateEnd: ''
        })
    }

    save() {
        var discount: Discount = this.discountForm.value as Discount;
        discount.dateEnd = formatDate(discount.dateEnd,"dd/MM/yyyy","en-Us");
        this._DiscountService.addDis(discount).then(
            res=>{
                console.log(res);
                alert("success")
            }, 
            er => {
                console.log(er)
            });
    }
}