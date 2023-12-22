import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter',
  standalone: true
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
