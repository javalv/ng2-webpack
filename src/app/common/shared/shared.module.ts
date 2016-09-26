import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {LoadingShade} from "./shared.loading";
// import {BaseComponent} from "../base/com.base";
@NgModule({
    imports: [CommonModule],
    declarations: [LoadingShade],
    exports: [CommonModule, FormsModule]
})
export class SharedModule {

    constructor() {
        console.log('SharedModule loading ... ')
    }


}