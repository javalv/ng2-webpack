import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {heroesRouting} from './heroes.routing';
import {HeroesDetailComponent} from "./heroes.detail";
import {HeroesPageComponent} from "./heroes";
import {HeroesListPageComponent} from "./heroes.list";
import {SharedModule} from "../common/shared/shared.module";
import {HeroesService} from "./heroes.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        heroesRouting,
        SharedModule
    ],
    declarations: [
        HeroesListPageComponent,
        HeroesDetailComponent,
        HeroesPageComponent,

    ],
    providers: [
         HeroesService
    ]
})
export class HeroesModule {}
