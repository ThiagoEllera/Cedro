import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { PratoComponent } from './prato.component';
import { FiltroPorNomePrato } from './listar/prato.listar.pipes';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [PratoComponent, FiltroPorNomePrato ],
  bootstrap: [PratoComponent ]
})
export class PratoModule { }
