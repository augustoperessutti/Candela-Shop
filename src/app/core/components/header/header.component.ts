import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Ifooter } from '../footer/models/ifooter';
import { Iheader, Iheader2 } from './models/Iheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerData: Iheader = {
    title: '',
    subtitle: '',
    url: ''
  };

  public footerLinks: Ifooter = {
    copyright: '',
    icons: [{
      name: '',
      navigate: '',
      icon: ''
    }]
  };

  constructor(private requestService: RequestService) {
    this.getHeaderInfo();
    this.getFooterInfo();
   }

  public getHeaderInfo() {
    this.requestService.getRequest('components/header/json').subscribe((data: any) => {
      this.headerData = data.data;
    })
  }

  public getFooterInfo() {
    this.requestService.getRequest('components/footer/json').subscribe((data: any) => {
      this.footerLinks = data.data;
    })
  }

  public closeStatus: boolean = true;
  
  public closeAdd() {
    this.closeStatus = false;
  }

  ngOnInit(): void {
  }
}
