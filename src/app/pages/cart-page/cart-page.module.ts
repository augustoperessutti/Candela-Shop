import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CartComponent } from './components/cart-view/cart/cart.component';
import { CartService } from 'src/app/services/cart.service';


@NgModule({
  declarations: [
    CartViewComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule
  ],
  providers: [CartService]

})
export class CartPageModule { }
