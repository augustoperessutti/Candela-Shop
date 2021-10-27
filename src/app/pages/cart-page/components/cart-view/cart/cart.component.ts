import { Component, Input, OnInit } from '@angular/core';
//MODELS
import { Iproducts } from 'src/app/models/Iglobals';
//SERVICES
import { CartService } from 'src/app/services/cart.service';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() public saveCart!: Iproducts[];
  
  constructor(public cartService: CartService ,public promotion: DiscountService) {
    this.calculateTotal()
   }

  public parseNumber = (string: string) => {
    let number = parseFloat(string);
    return number;
  };

  public totalCalculated: number = 0;

  public calculateTotal() {
    let actualCart = this.cartService.getCart()
    
    actualCart.forEach((e) => {
      this.totalCalculated += this.parseNumber(e.price);
    })
  }

  ngOnInit(): void {
  }

}
