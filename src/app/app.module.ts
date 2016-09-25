import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {HomePageComponent} from "./app.home";
import {CoreModule} from "./common/core/core.module";
import {SharedModule} from "./common/shared/shared.module";
@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot({host: '192.168.1.1'}),
        SharedModule,
        routing,
    ],
    declarations: [
        AppComponent,
        HomePageComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }