"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var restaurante_component_1 = require("../restaurante.component");
var RestauranteListarComponent = (function () {
    function RestauranteListarComponent(http) {
        var _this = this;
        this.restaurantes = [];
        this.mensagem = '';
        this.http = http;
        this.http.get('http://localhost:50176/api/Restaurante/')
            .map(function (res) { return res.json(); })
            .subscribe(function (restaurantes) {
            _this.restaurantes = restaurantes;
            console.log(_this.restaurantes);
        }, function (erro) { return console.log(erro); });
    }
    RestauranteListarComponent.prototype.excluir = function (restaurante) {
        var _this = this;
        if (restaurante === void 0) { restaurante = new restaurante_component_1.RestauranteComponent(); }
        this.http.delete('http://localhost:50176/api/Restaurante/' + restaurante.Id_Restaurante)
            .subscribe(function () {
            var indiceDoRestaurante = _this.restaurantes.indexOf(restaurante);
            if (indiceDoRestaurante > -1) {
                _this.mensagem = 'Restaurante removido com sucesso.';
                _this.restaurantes.slice(indiceDoRestaurante, 1);
                _this.atualizarLista();
            }
        }, function (erro) {
            console.log(erro);
            _this.mensagem = 'N�o foi poss�vel remover o Restaurante.';
        });
    };
    RestauranteListarComponent.prototype.atualizarLista = function () {
        var _this = this;
        this.http.get('http://localhost:50176/api/Restaurante/')
            .map(function (res) { return res.json(); })
            .subscribe(function (restaurantes) {
            _this.restaurantes = restaurantes;
        }, function (erro) { return console.log(erro); });
    };
    return RestauranteListarComponent;
}());
RestauranteListarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'listar',
        templateUrl: './restaurante.listar.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RestauranteListarComponent);
exports.RestauranteListarComponent = RestauranteListarComponent;
//# sourceMappingURL=restaurante.listar.component.js.map