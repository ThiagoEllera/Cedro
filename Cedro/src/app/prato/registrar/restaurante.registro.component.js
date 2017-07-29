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
var restaurante_component_1 = require("../restaurante.component");
var http_1 = require("@angular/http");
var RestauranteRegistroComponent = (function () {
    function RestauranteRegistroComponent(http) {
        this.restaurante = new restaurante_component_1.RestauranteComponent();
        this.mensagem = "";
        this.http = http;
    }
    RestauranteRegistroComponent.prototype.cadastrar = function () {
        var _this = this;
        console.log(this.restaurante);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('Id_Restaurante', this.restaurante.Id_Restaurante);
        urlSearchParams.append('Nome_Restaurante', this.restaurante.Nome_Restaurante);
        var body = urlSearchParams.toString();
        console.log(body);
        this.http.post('http://localhost:50176/api/Restaurante/', body, { headers: headers })
            .subscribe(function () {
            _this.restaurante.Nome_Restaurante = "";
            _this.mensagem = "Restaurante cadastrado com sucesso.";
        });
    };
    return RestauranteRegistroComponent;
}());
RestauranteRegistroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'registro',
        templateUrl: './restaurante.registro.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RestauranteRegistroComponent);
exports.RestauranteRegistroComponent = RestauranteRegistroComponent;
//# sourceMappingURL=restaurante.registro.component.js.map