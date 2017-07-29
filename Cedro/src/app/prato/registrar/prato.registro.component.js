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
var prato_component_1 = require("../prato.component");
var PratoRegistroComponent = (function () {
    function PratoRegistroComponent(http) {
        var _this = this;
        this.restaurantes = [];
        this.mensagem = "";
        this.prato = new prato_component_1.PratoComponent();
        this.http = http;
        this.http.get('http://localhost:50176/api/Restaurante/')
            .map(function (res) { return res.json(); })
            .subscribe(function (restaurantes) {
            _this.restaurantes = restaurantes;
        }, function (erro) { return console.log(erro); });
    }
    PratoRegistroComponent.prototype.cadastrar = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('Nome_Prato', this.prato.Nome_Prato);
        urlSearchParams.append('Preco_Prato', this.prato.Preco_Prato);
        urlSearchParams.append('Id_Restaurante', this.prato.Id_Restaurante);
        var body = urlSearchParams.toString();
        this.http.post('http://localhost:50176/api/Prato/', body, { headers: headers })
            .subscribe(function () {
            _this.prato.Nome_Prato = "";
            _this.prato.Preco_Prato = "";
            _this.prato.Id_Restaurante = "";
            _this.mensagem = "Prato cadastrado com sucesso.";
        });
    };
    return PratoRegistroComponent;
}());
PratoRegistroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'registro',
        templateUrl: './prato.registro.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], PratoRegistroComponent);
exports.PratoRegistroComponent = PratoRegistroComponent;
//# sourceMappingURL=prato.registro.component.js.map