import {ViewChild} from '@angular/core';
import {LoadingShade} from "../shared/shared.loading";
export class BaseComponent {
    constructor(){}

    @ViewChild(LoadingShade)
    protected loadingShade: LoadingShade;

    onLoaded(){
        if(this.loadingShade){
            this.loadingShade.hasLoaded();
        }
    }


}
