import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteListarComponent } from './restaurante/listar/restaurante.listar.component'; 
import { RestauranteRegistroComponent } from './restaurante/registrar/restaurante.registro.component';
import { RestauranteAlterarComponent } from './restaurante/alterar/restaurante.alterar.component'; 
import { PratoComponent } from './prato/prato.component';
import { PratoListarComponent } from './prato/listar/prato.listar.component';
import { PratoRegistroComponent } from './prato/registrar/prato.registro.component';
import { PratoAlterarComponent } from './prato/alterar/prato.alterar.component';

const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'restaurante', component: RestauranteListarComponent },
    { path: 'restaurante/registrar', component: RestauranteRegistroComponent },
    { path: 'restaurante/alterar/:id', component: RestauranteAlterarComponent },
    { path: 'prato', component: PratoListarComponent },
    { path: 'prato/registrar', component: PratoRegistroComponent },
    { path: 'prato/alterar/:id', component: PratoAlterarComponent },
    { path: '**', component: InicioComponent }
];

export const routing = RouterModule.forRoot(appRoutes);