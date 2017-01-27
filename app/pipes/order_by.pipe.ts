import '../interfaces/weather.interface';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })

export class OrderByPipe implements PipeTransform {
    transform(value: Array<IDataListItem>, key: string) {
        let favor: Array<IDataListItem>,
            result: Array<IDataListItem>;

        value.forEach((variable: IDataListItem, index: number) => {
            if (variable['key']) {
                favor.push(variable);
                value.splice(index, 1);
            }
        });
        if(favor){
          console.log(favor)
          return favor.concat(value)
        } else {
          return value;
        }
    }
}
