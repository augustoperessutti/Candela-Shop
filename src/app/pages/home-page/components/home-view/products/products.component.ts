import { Component, Input, OnInit } from '@angular/core';
//MODELOS
import { Icategory, Iproducts } from 'src/app/models/Iglobals';
//SERVICIOS
import { DiscountService } from 'src/app/services/discount.service';
import { SaveFavsService } from 'src/app/services/save-favs.service';
import { CartService } from 'src/app/services/cart.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() public productsElements: Iproducts[] = [];
  @Input() public categoryElements: Icategory[] = [];

  public selectedCategory: Icategory = {
    _id: '',
    name: '',
    products: []
  };

  public products!: Iproducts[];

  constructor(public favsService: SaveFavsService, public promotion: DiscountService, public addCart: CartService, private requestService: RequestService) {
    this.onSelect('');
    this.productsElements = this.getProducts();
  }

  ngOnInit(): void {
  }

  public getProducts(): any {
    this.requestService.getRequest('products/json').subscribe((data: any) => {
      return data;
    })
  }

  async onSelect(id: string) {
    if (this.selectedCategory._id == '') {
      this.requestService.getRequest('products/json').subscribe((data: any) => {
        this.products = data;
      })
    } else {
        this.products = this.getProducts().filter((item: any) => item.category._id == id);
    }
  }

}


