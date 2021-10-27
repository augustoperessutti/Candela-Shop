import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavsViewComponent } from './components/favs-view/favs-view.component';

const routes: Routes = [
  {
    path: '', component: FavsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavsPageRoutingModule { }
