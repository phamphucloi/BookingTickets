import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    constructor(private _router: Router){}

    ngOnInit(): void {

    }

    Login(){
        this._router.navigate(['/homepage']);
    }
}