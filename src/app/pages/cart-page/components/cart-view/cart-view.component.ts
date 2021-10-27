import { Component, OnInit } from '@angular/core';
//MODELS
import { Iproducts } from 'src/app/models/Iglobals';
//SERVICES
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  public getCart: Iproducts[] = []

  constructor(public saveCart: CartService) {
    this.getCart = saveCart.getCart()
   }

  ngOnInit(): void {
  }

}
