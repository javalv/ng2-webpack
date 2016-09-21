import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { heroesRouting } from './heroes.routing';
import {HeroesDetailComponent} from "./heroes.detail";
import {HeroesPageComponent} from "./heroes";
import {HeroesListPageComponent} from "./heroes.list";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        heroesRouting
    ],
    declarations: [
        HeroesListPageComponent,
        HeroesDetailComponent,
        HeroesPageComponent
    ],
    providers: [
        // HeroService
    ]
})
export class HeroesModule {}
