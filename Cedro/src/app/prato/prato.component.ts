import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'prato',
    templateUrl: './prato.component.html',
})
export class PratoComponent {

    @Input() Id_Prato: string = '';
    @Input() Nome_Prato: string = '';
    @Input() Preco_Prato: string = '';
    @Input() Id_Restaurante: string = '';
    @Input() Nome_Restaurante: string = '';
}