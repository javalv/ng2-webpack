import {Component, Input, ViewContainerRef, TemplateRef} from "@angular/core";
@Component({
    selector: 'load-shade',
    template: `<div *ngIf="hide">loading...</div>`,
    styles: ['div{' +
            'position: absolute;' +
            'top:60px;height:20px;width:100px;' +
            'background-color: #8c8c8c' +
            '}'],

})
export class LoadingShadeComponent {
    private hide:boolean;

    constructor() {
    }

    ngOnInit() {
        this.hide = true;
    }

    @Input() loaded:boolean = false;

    ngOnChanges() {
        console.log("ngOnChanges")
        if (this.loaded == true) {
            this.hide = false;
            console.info("loaded:" + this.loaded);
        } else {
            this.hide = true;
        }
    }

    hasLoaded() {
        this.hide = false;
        console.log("has loaded...");
    }

}
