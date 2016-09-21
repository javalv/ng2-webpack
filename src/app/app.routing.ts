import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./app.home";

const appRoutes:Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomePageComponent},
    {path: 'page1', loadChildren: 'app/heros/heroes.module#HeroesModule'},

];

export const appRoutingProviders:any[] = [];

export const routing = RouterModule.forRoot(appRoutes);