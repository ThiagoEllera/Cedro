import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { RestauranteComponent } from '../restaurante.component';

@Component({
    moduleId: module.id,
    selector: 'alterar',
    templateUrl: './restaurante.alterar.component.html',
})
export class RestauranteAlterarComponent {

    restaurante: RestauranteComponent = new RestauranteComponent();
    http: Http;
    id: number;
    mensagem: string = '';

    constructor(private rota: ActivatedRoute, http: Http) {
        this.http = http;
        this.id = rota.snapshot.params['id'];

        this.http.get('http://localhost:50176/api/Restaurante/' + this.id)
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurante = restaurantes;
            },
            erro => console.log(erro));
    }

    alterar() {
        console.log(this.restaurante);

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id_restaurante', this.restaurante.Id_Restaurante);
        urlSearchParams.append('nome_restaurante', this.restaurante.Nome_Restaurante);
        let body = urlSearchParams.toString()

        this.http.put('http://localhost:50176/api/Restaurante/', body, { headers: headers })
            .subscribe(() => {
                this.mensagem = 'Restaurante alterado com sucesso.';
            });
    }

}
