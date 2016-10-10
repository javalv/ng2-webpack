import {Routes, RouterModule} from '@angular/router';

import {HeroesPageComponent} from "./heroes";
import {HeroesListPageComponent} from './heroes.list';
import {HeroesDetailComponent} from "./heroes.detail";
import {DemoDetailComponent} from "./demo";

const heroesRoutes:Routes = <Routes>[
    {
        path: '',
        component: HeroesPageComponent,
        children: [
            {path: '', component: HeroesListPageComponent},
            {path: ':id', component: DemoDetailComponent},
            // {path: 'demo', component: DemoDetailComponent}
        ]
    }
];

export const heroesRouting = RouterModule.forChild(heroesRoutes);