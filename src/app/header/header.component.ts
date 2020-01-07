import { Component, OnInit } from '@angular/core';
import {HeaderService,HeaderData} from './header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [ HeaderService ],
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  header_text = '';
  constructor(private headerdataService:HeaderService) { 
    this.showData()
  }

  ngOnInit() {
  }
  
  showData(){
    this.headerdataService.getData()
    .subscribe((data:HeaderData)=> {
      this.header_text = data['title'];
    })
  }

}
