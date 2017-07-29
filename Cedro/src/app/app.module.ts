import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteListarComponent } from './restaurante/listar/restaurante.listar.component';
import { FiltroPorNomeRestaurante } from './restaurante/listar/restaurante.listar.pipes';
import { RestauranteRegistroComponent } from './restaurante/registrar/restaurante.registro.component';
import { RestauranteAlterarComponent } from './restaurante/alterar/restaurante.alterar.component';
import { PratoComponent } from './prato/prato.component';
import { PratoListarComponent } from './prato/listar/prato.listar.component';
import { FiltroPorNomePrato } from './prato/listar/prato.listar.pipes';
import { PratoRegistroComponent } from './prato/registrar/prato.registro.component';
import { PratoAlterarComponent } from './prato/alterar/prato.alterar.component';


@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule],
    declarations: [AppComponent, InicioComponent, RestauranteComponent, PratoComponent, RestauranteRegistroComponent, FiltroPorNomeRestaurante, RestauranteListarComponent, RestauranteAlterarComponent,
        PratoListarComponent, FiltroPorNomePrato, PratoRegistroComponent, PratoAlterarComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }
