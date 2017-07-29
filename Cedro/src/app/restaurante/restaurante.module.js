"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routes_1 = require("../app.routes");
var restaurante_component_1 = require("./restaurante.component");
var restaurante_registro_component_1 = require("./registrar/restaurante.registro.component");
var restaurante_alterar_component_1 = require("./alterar/restaurante.alterar.component");
var restaurante_listar_pipes_1 = require("./listar/restaurante.listar.pipes");
var RestauranteModule = (function () {
    function RestauranteModule() {
    }
    return RestauranteModule;
}());
RestauranteModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule],
        declarations: [restaurante_component_1.RestauranteComponent, restaurante_registro_component_1.RestauranteRegistroComponent, restaurante_listar_pipes_1.FiltroPorNomeRestaurante, restaurante_alterar_component_1.RestauranteAlterarComponent],
        bootstrap: [restaurante_component_1.RestauranteComponent]
    })
], RestauranteModule);
exports.RestauranteModule = RestauranteModule;
//# sourceMappingURL=restaurante.module.js.map