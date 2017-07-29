import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { RestauranteComponent } from './restaurante.component';
import { RestauranteRegistroComponent } from './registrar/restaurante.registro.component';
import { RestauranteAlterarComponent } from './alterar/restaurante.alterar.component';
import { FiltroPorNomeRestaurante } from './listar/restaurante.listar.pipes';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [RestauranteComponent, RestauranteRegistroComponent, FiltroPorNomeRestaurante, RestauranteAlterarComponent  ],
  bootstrap: [RestauranteComponent ]
})
export class RestauranteModule { }
