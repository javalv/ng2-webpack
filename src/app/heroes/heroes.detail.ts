import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import "../../../public/images/angular.png";
import {BaseComponent} from "../common/base/com.base";
import {HeroesService} from "./heroes.service";
import {LoadingShadeComponent} from "../common/shared/shared.loading";
@Component({
    selector: 'heroes-detail-page',
    template: `<span (click)="test()">详情页{{name}}</span>
                <div>
                    <img src="assets/angular.png"/>
                </div>
                <span (click)="next()">next</span> 
                <load-shade ></load-shade>`,

})
export class HeroesDetailComponent extends BaseComponent/* implements OnInit, OnDestroy */{
    @ViewChild(LoadingShadeComponent)
    private loadingShade:LoadingShadeComponent;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private heroesService:HeroesService
    ){
        // super(this.loadingShade);
        super();
    }

    private name: any;
    private sub: Subscription;
    ngOnInit() {

        setTimeout(()=>{
            this.loadingShade.hasLoaded();
            this.request();
        },1000);

        // this.name = this.route.snapshot.params['id']; 这种方式为不需要连续调用详情页，常规模式
        //用Subscription接收主要是为了连续的调用一个详情页
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            this.name = params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    next(){
        this.router.navigate(['/heroes', 'nextName']);
    }

    test(){
        console.log('test click ...');
        this.loadingShade.hasLoaded();

    }

    private request():void {
        console.log("heroes: " + this.heroesService.getCrises("123"));
    }

}
