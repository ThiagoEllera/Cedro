import { Pipe, PipeTransform } from '@angular/core';
import { PratoListarComponent } from './prato.listar.component';

@Pipe({
    name: 'filtroPorNomePrato'
})
export class FiltroPorNomePrato implements PipeTransform {

    transform(items: any[], criteria: any): any {

        return items.filter(item => {
            for (let key in item) {
                if (("" + item[key]).includes(criteria)) {
                    return true;
                }
            }
            return false;
        });
    }

}