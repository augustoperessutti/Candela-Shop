import { Component, Input, OnInit } from '@angular/core';
//MODELS
import { Iproducts } from 'src/app/models/Iglobals';
//SERVICES
import { DiscountService } from 'src/app/services/discount.service';
import { SaveFavsService } from 'src/app/services/save-favs.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @Input() public favsGetted!: Iproducts[];

  constructor(public favsService: SaveFavsService, public promotion: DiscountService, public addCart: CartService) { }

  public goCart() {
    location.replace('/cart');
  }

  ngOnInit(): void {
  }

}
