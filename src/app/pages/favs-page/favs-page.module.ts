import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavsPageRoutingModule } from './favs-page-routing.module';
import { FavsViewComponent } from './components/favs-view/favs-view.component';
import { SaveFavsService } from 'src/app/services/save-favs.service';
import { FavoritesComponent } from './components/favs-view/favorites/favorites.component';


@NgModule({
  declarations: [
    FavsViewComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavsPageRoutingModule
  ],
  providers: [SaveFavsService]
})
export class FavsPageModule { }
