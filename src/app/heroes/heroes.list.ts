import {Component,ViewChild} from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'heroes-list-page',
    template: `<div>
                    <div (click)="onSelect('zhangsan')">张三</div>
                    <div (click)="onSelect('lisi')">李四</div>
                </div>`,

})
export class HeroesListPageComponent{

    constructor(private router:Router){
        console.log('MyListPageComponent')
    }

    ngOnInit(){

    }

    onSelect(name:any) {
        this.router.navigate(['/heroes', name]);
    }
}