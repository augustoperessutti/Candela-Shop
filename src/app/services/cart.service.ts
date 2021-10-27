import { Injectable } from '@angular/core';
//MODELS
import { Iproducts } from '../models/Iglobals';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public async clickBuy(element: Iproducts) {  
    let canAdd = await this.getCart();

    let isInside = false;

    canAdd.forEach((e) => {
      if(e._id === element._id) {
        isInside = true;
      }
    });

    if(isInside === false) {
      canAdd.push(element);  
      localStorage.setItem('my_cart', JSON.stringify(canAdd));
    }
  }

  public getCart() {
    let getCart: Iproducts[] = JSON.parse(localStorage.getItem('my_cart') || "[]");
  
    return getCart;
  }

  public deleteItemCart(product: Iproducts) {
    let recoverItem = this.getCart();

    recoverItem.forEach((e: Iproducts, i: number) => {
      if(e._id == product._id) {
        recoverItem.splice(i, 1);
      }
    });
    const newArrayCart = recoverItem;

    localStorage.setItem('my_cart', JSON.stringify(newArrayCart));

    location.reload();
  }
}
