import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './creationCar.component.html'
})

export class CreationCarComponent implements OnInit {

    cities: [{},{}];

    ngOnInit(): void {
        this.cities = [{
            id: 1,
            name: 'New York'
        },
        {
            id: 2,
            name: 'XYZ'
        },
    ]
    }

    onUpload(e:any){

    }
}