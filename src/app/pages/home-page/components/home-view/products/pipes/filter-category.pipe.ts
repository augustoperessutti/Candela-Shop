import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from 'src/app/models/Iglobals';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(productsElements: Iproducts[], ...selectedCategory: any[]):any {
    if(selectedCategory.length != 0) return productsElements
  }

}
