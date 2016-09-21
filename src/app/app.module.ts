import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import {HeroesModule} from "./heros/heroes.module";
import {routing} from "./app.routing";
import {HomePageComponent} from "./app.home";
@NgModule({
    imports: [
        BrowserModule,routing
    ],
    declarations: [
        AppComponent,
        HomePageComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }