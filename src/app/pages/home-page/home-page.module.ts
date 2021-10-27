import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';

import { HomeViewComponent } from './components/home-view/home-view.component';
import { HeroComponent } from './components/home-view/hero/hero.component';
import { ProductsComponent } from './components/home-view/products/products.component';

import { RequestService } from 'src/app/services/request.service';
import { SaveFavsService } from 'src/app/services/save-favs.service';
import { FormsModule } from '@angular/forms';
import { FilterCategoryPipe } from './components/home-view/products/pipes/filter-category.pipe';


@NgModule({
  declarations: [
  
    HomeViewComponent,
       HeroComponent,
       ProductsComponent,
       FilterCategoryPipe,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule
  ],
  providers: [RequestService, SaveFavsService]
})
export class HomePageModule { }
