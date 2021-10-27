import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
//SERVICES
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mobile: boolean = false;

  constructor(private titleService: Title, private requestService: RequestService) {
    this.getHeaderInfo()
      .then((data: any) => {
        this.setTitle(`${data.data.title} ${data.data.subtitle}`);
      })
  }

  public getHeaderInfo() {
    return new Promise((res, rej) => {
      this.requestService.getRequest('components/header/json').subscribe((data: any) => {
        res(data);
      })
    })
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    // localStorage.clear();
  } 
}
