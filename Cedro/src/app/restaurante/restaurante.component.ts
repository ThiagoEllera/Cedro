import { Component, Input } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'restaurante',
    templateUrl: './restaurante.component.html',
})
export class RestauranteComponent {

    @Input() Id_Restaurante: string = '';
    @Input() Nome_Restaurante: string = '';
   
 
}