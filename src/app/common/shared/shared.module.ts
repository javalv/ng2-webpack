import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {LoadingShade} from "./shared.loading";
@NgModule({
    imports: [CommonModule],
    declarations: [LoadingShade],
    exports: [CommonModule, FormsModule, LoadingShade]
})
export class SharedModule {

    constructor() {
        console.log('SharedModule loading ... ')
    }


}