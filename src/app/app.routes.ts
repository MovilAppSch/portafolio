import { Routes, RouterModule } from '@angular/router';

import {
    AboutComponent,
    PortafolioComponent,
    ItemComponent,
    SearchComponent
} from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
//{ path: '**', pathMatch: 'full', redirectTo: 'home' } me redirecciona al home si la ruta
//esta vacia 
export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });