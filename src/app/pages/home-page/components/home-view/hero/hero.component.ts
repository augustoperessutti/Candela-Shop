import { Component, OnInit } from '@angular/core';

import { RequestService } from 'src/app/services/request.service';

import { Ihome } from './models/Ihome';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {

  public homeInfo: Ihome = {
    offerTitle: "",
    offerImage: {
      src: "",
      alt: ""
    },
    rrssTitle: "",
    rrss: [{
      name: "",
      url: "",
      icon:""
    }]
  };

  constructor(private requestService: RequestService) { 
    this.getProducts()
  }

  public getProducts() {
    this.requestService.getRequest('components/home/json').subscribe((data: any) => {
      this.homeInfo = data.data;
    })
  }

  ngOnInit(): void {
  }

}
