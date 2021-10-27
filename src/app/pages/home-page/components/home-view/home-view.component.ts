import { Component, OnInit } from '@angular/core';

import { Icategory, Iproducts } from 'src/app/models/Iglobals';

import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public productsElements: Iproducts[] = [];
  public categoryElements: Icategory[] = [];

  constructor(private requestService: RequestService) { 
    this.getProducts()
    this.getCategories()
  }

  public getProducts() {
    this.requestService.getRequest('products/json').subscribe((data: any) => {
      this.productsElements = data;
    })
  }

  public getCategories() {
    this.requestService.getRequest('category/json').subscribe((data: any) => {
      this.categoryElements = data;
    })
  }

  ngOnInit(): void {
  }

}
