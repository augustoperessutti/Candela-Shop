import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/Iglobals';
import { SaveFavsService } from 'src/app/services/save-favs.service';

@Component({
  selector: 'app-favs-view',
  templateUrl: './favs-view.component.html',
  styleUrls: ['./favs-view.component.scss']
})
export class FavsViewComponent implements OnInit {

  public favsSaved: Iproducts[];
 
  constructor(public favsService: SaveFavsService) {
    this.favsSaved = favsService.getFavs()
  }

  ngOnInit(): void {
  }

}