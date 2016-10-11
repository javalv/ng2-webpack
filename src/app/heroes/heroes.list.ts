import {Component,ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../common/core/http.service";
import {BaseComponent} from "../common/base/com.base";
import {LoadingShadeComponent} from "../common/shared/shared.loading";
@Component({
    selector: 'heroes-list-page',
    template: `<div>
                    <div (click)="onSelect('zhangsan')">张三</div>
                    <div (click)="onSelect('lisi')">李四</div>
                    <div (click)="gotoDemo()">DEMO</div>
                </div>
                <load-shade ></load-shade>`,

})
export class HeroesListPageComponent{

    @ViewChild(LoadingShadeComponent)
    protected loadingShade: LoadingShadeComponent;

    onLoaded(){
        if(this.loadingShade){
            this.loadingShade.hasLoaded();
        }
    }

    constructor(
        private router:Router,
        private httpService:HttpService){
        // super();
    }

    ngOnInit(){
        console.log(this.httpService.getName())
        setTimeout(()=>{
            this.onLoaded();
        },1000)
        this.router.navigate(['/heroes', "demo"]);
    }

    onSelect(name:any) {
        this.router.navigate(['/heroes', name]);
    }

    gotoDemo(){
        this.router.navigate(['/demo']);
    }
}