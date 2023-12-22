import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'productFilter',
  standalone: true
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    
    
      
    filterText = filterText?filterText.toLowerCase():filterText="";
    
    return filterText?value.filter((p:Product)=> p.name.toLowerCase().indexOf(filterText)!==-1):value;
  }

}
