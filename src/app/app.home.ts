import {Component} from '@angular/core';
import {HttpService} from "./common/core/http.service";
@Component({
    selector: 'home-page',
    template: `HOME`,
    //providers: [HttpService]
})
export class HomePageComponent {

    httpService:any;
    constructor(httpService:HttpService){
        this.httpService = httpService;
    }

    ngOnInit(){
        console.log(this.httpService.getName())
    }
}