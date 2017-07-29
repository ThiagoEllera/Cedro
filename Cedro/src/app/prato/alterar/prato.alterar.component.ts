import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { PratoComponent } from '../prato.component';

@Component({
    moduleId: module.id,
    selector: 'alterar',
    templateUrl: './prato.alterar.component.html',
})
export class PratoAlterarComponent {

    restaurantes: Object[] = []
    prato: PratoComponent = new PratoComponent();
    http: Http;
    id: number;
    mensagem: string = '';

    constructor(private rota: ActivatedRoute, http: Http) {
        this.http = http;
        this.id = rota.snapshot.params['id'];

        this.http.get('http://localhost:50176/api/Prato/' + this.id)
            .map(res => res.json())
            .subscribe(pratos => {
                this.prato = pratos;
            },
            erro => console.log(erro));

        this.http.get('http://localhost:50176/api/Restaurante/')
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            }, erro => console.log(erro));
    }

    alterar() {
        console.log(this.prato);

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('Id_Prato', this.prato.Id_Prato);
        urlSearchParams.append('Nome_Prato', this.prato.Nome_Prato);
        urlSearchParams.append('Preco_Prato', this.prato.Preco_Prato);
        urlSearchParams.append('Id_Restaurante', this.prato.Id_Restaurante);
        let body = urlSearchParams.toString()

        this.http.put('http://localhost:50176/api/Prato/', body, { headers: headers })
            .subscribe(() => {
                this.mensagem = 'Prato alterado com sucesso.';
                console.log('Prato alterado via WEBAPI.');
            });
    }

}
