import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  public parseNumber = (string: string) => {
    let number = parseFloat(string);
    return number;
  };

  public apli15Discount(price: string) {
    const newPrice = (this.parseNumber(price) * (0.85)).toFixed(2)
    return newPrice
  }
}
