import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Ifooter } from './models/ifooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerLinks: Ifooter = {
    copyright: '',
    icons: [{
      name: '',
      navigate: '',
      icon: ''
    }]
  };

  constructor(private requestService: RequestService) { 
    this.getFooterInfo()
  }

  public async getFooterInfo() {
    await this.requestService.getRequest('components/footer/json').subscribe((data: any) => {
      this.footerLinks = data.data;
    })
  }

  ngOnInit(): void { }

}
