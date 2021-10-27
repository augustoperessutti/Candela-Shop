import { Injectable } from '@angular/core';
import { Iproducts } from '../models/Iglobals';

@Injectable({
  providedIn: 'root'
})
export class SaveFavsService {
  
  constructor() {}

  public clickFav(element: Iproducts) {  
    let canAdd = this.getFavs();

    let isInside = false;

    canAdd.forEach((e) => {
      if(e._id === element._id) {
        isInside = true;
      }
    });

    if(isInside === false) {
      canAdd.push(element);  
      localStorage.setItem('my_favs', JSON.stringify(canAdd));
    }
  }

  public getFavs() {
    let getFav: Iproducts[] = JSON.parse(localStorage.getItem('my_favs') || "[]");
  
    return getFav;
  }

  public deleteItemFav(product: Iproducts) {
    let recoverItem = this.getFavs();

    recoverItem.forEach((e: Iproducts, i: number) => {
      if(e._id == product._id) {
        recoverItem.splice(i, 1);
      }
    });
    const newArrayFavs = recoverItem;

    localStorage.setItem('my_favs', JSON.stringify(newArrayFavs));

    location.reload();
  }

}
