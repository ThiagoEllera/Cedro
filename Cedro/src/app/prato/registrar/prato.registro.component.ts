import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { PratoComponent } from '../prato.component';

@Component({
    moduleId: module.id,
    selector: 'registro',
    templateUrl: './prato.registro.component.html',
})
export class PratoRegistroComponent {

    restaurantes: Object[] = []
    mensagem: string = "";
    prato: PratoComponent = new PratoComponent();
    http: Http;
    router: Router;

    constructor(http: Http) {
        this.http = http;

        this.http.get('http://localhost:50176/api/Restaurante/')
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            }, erro => console.log(erro));
    }

    cadastrar() {

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('Nome_Prato', this.prato.Nome_Prato);
        urlSearchParams.append('Preco_Prato', this.prato.Preco_Prato);
        urlSearchParams.append('Id_Restaurante', this.prato.Id_Restaurante);
        let body = urlSearchParams.toString()

        this.http.post('http://localhost:50176/api/Prato/', body, { headers: headers })
            .subscribe(() => {
                this.prato.Nome_Prato = "";
                this.prato.Preco_Prato = "";
                this.prato.Id_Restaurante = "";
                this.mensagem = "Prato cadastrado com sucesso.";
            });
    }
  }
