import { Component, Input } from '@angular/core';
import { RestauranteComponent } from '../restaurante.component';
import { Http, Headers, URLSearchParams } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'registro',
    templateUrl: './restaurante.registro.component.html'
})
export class RestauranteRegistroComponent {

    restaurante: RestauranteComponent = new RestauranteComponent();
    http: Http;
    mensagem: string = "";

    constructor(http: Http) {
        this.http = http;
    }

    cadastrar() {
        console.log(this.restaurante);

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('Id_Restaurante', this.restaurante.Id_Restaurante);
        urlSearchParams.append('Nome_Restaurante', this.restaurante.Nome_Restaurante);
        let body = urlSearchParams.toString()
        console.log(body);

        this.http.post('http://localhost:50176/api/Restaurante/', body, { headers: headers })
            .subscribe(() => {
                this.restaurante.Nome_Restaurante = "";
                this.mensagem = "Restaurante cadastrado com sucesso.";
            });
    }

}