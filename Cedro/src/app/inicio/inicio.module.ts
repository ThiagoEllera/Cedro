import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { InicioComponent } from '../inicio/inicio.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [InicioComponent],
    bootstrap: [InicioComponent]
})
export class InicioModule { }