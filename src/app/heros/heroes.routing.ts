import {Routes, RouterModule} from '@angular/router';

import {HeroesPageComponent} from "./heroes";
import {HeroesListPageComponent} from './heroes.list';
import {HeroesDetailComponent} from "./heroes.detail";

const heroesRoutes:Routes = [
    {
        path: '',
        component: HeroesPageComponent,
        children: [
            {path: '', component: HeroesListPageComponent},
            {path: ':id', component: HeroesDetailComponent}
        ]
    }
];

export const heroesRouting = RouterModule.forChild(heroesRoutes);