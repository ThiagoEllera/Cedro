"use strict";
var router_1 = require("@angular/router");
var inicio_component_1 = require("./inicio/inicio.component");
var restaurante_listar_component_1 = require("./restaurante/listar/restaurante.listar.component");
var restaurante_registro_component_1 = require("./restaurante/registrar/restaurante.registro.component");
var restaurante_alterar_component_1 = require("./restaurante/alterar/restaurante.alterar.component");
var prato_listar_component_1 = require("./prato/listar/prato.listar.component");
var prato_registro_component_1 = require("./prato/registrar/prato.registro.component");
var prato_alterar_component_1 = require("./prato/alterar/prato.alterar.component");
var appRoutes = [
    { path: '', component: inicio_component_1.InicioComponent },
    { path: 'restaurante', component: restaurante_listar_component_1.RestauranteListarComponent },
    { path: 'restaurante/registrar', component: restaurante_registro_component_1.RestauranteRegistroComponent },
    { path: 'restaurante/alterar/:id', component: restaurante_alterar_component_1.RestauranteAlterarComponent },
    { path: 'prato', component: prato_listar_component_1.PratoListarComponent },
    { path: 'prato/registrar', component: prato_registro_component_1.PratoRegistroComponent },
    { path: 'prato/alterar/:id', component: prato_alterar_component_1.PratoAlterarComponent },
    { path: '**', component: inicio_component_1.InicioComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map