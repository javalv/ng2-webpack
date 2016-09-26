import {ViewChild} from '@angular/core';
import {LoadingShade} from "../shared/shared.loading";
import {HttpService} from "../core/http.service";
export abstract class BaseComponent {
    constructor() {
    }

    @ViewChild(LoadingShade)
    protected loadingShade:LoadingShade;

    onLoaded() {
        if (this.loadingShade) {
            this.loadingShade.hasLoaded();
        }
    }




}
