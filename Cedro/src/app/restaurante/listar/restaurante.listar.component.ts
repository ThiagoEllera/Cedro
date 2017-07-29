import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { RestauranteComponent } from '../restaurante.component';



@Component({
    moduleId: module.id,
    selector: 'listar',
    templateUrl: './restaurante.listar.component.html',
})
export class RestauranteListarComponent {

    restaurantes: Object[] = []
    http: Http;
    mensagem: string = '';

    constructor(http: Http) {
        this.http = http;

        this.http.get('http://localhost:50176/api/Restaurante/')
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
                console.log(this.restaurantes);
            }, erro => console.log(erro));
    }

    excluir(restaurante: RestauranteComponent = new RestauranteComponent()) {

        this.http.delete('http://localhost:50176/api/Restaurante/' + restaurante.Id_Restaurante)
            .subscribe(() => {
                let indiceDoRestaurante = this.restaurantes.indexOf(restaurante);

                if (indiceDoRestaurante > -1) {
                    this.mensagem = 'Restaurante removido com sucesso.';
                    this.restaurantes.slice(indiceDoRestaurante, 1);
                    this.atualizarLista();
                }
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível remover o Restaurante.';
            });
    }

    atualizarLista() {
        this.http.get('http://localhost:50176/api/Restaurante/')
            .map(res => res.json())
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            }, erro => console.log(erro));
    }
}
