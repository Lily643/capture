import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-router',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  mine ="mine";
  opponent="opponent";
  constructor() { 
    
  }

  ngOnInit() {
  }
}
