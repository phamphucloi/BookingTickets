import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Discount } from "src/app/Models/discount.model";
import { ResultApi } from "src/app/Models/result.model";
import { DiscountService } from "src/app/Service/discountService";

@Component({
    templateUrl: './editDis.component.html'
})

export class EditDisComponent implements OnInit {
    constructor(
        private _DiscountService: DiscountService,
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
    ) {}
    
    editDisFomrm: FormGroup;
    id: number;

    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe(assignment=>{
            this.id = parseInt(assignment.get('id'));
        })

        this._DiscountService.findById(this.id).then(res=>{
            var discount = res as Discount;
            this.editDisFomrm = this._formBuilder.group({
                content: discount.content,
                price: discount.price,
                status: discount.status,
                dateEnd: discount.dateEnd
            })
        })
    }  
    
    update(){
        var discount: Discount = this.editDisFomrm.value as Discount;
        discount.id = Number(this.id);
        discount.dateEnd = formatDate(discount.dateEnd,"dd/MM/yyyy","en-Us");
        this._DiscountService.updateDis(discount).then(res=>{
            var rs = res as ResultApi;
            if(rs.status){
                this._router.navigate(['/viewDis'])
            }else{
                alert('Failure');
            }
        },er=>console.log(er))
    }
}