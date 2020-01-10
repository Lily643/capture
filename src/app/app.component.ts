import { Component } from '@angular/core';
export interface captureTemplate {
  id:number,
  title?:string,
  pokemon1?:string,
  use_pokemon1?:boolean,
  down_pokemon1?:boolean,
  pokemon2?:string,
  use_pokemon2?:boolean,
  down_pokemon2?:boolean,
  pokemon3?:string,
  use_pokemon3?:boolean,
  down_pokemon3?:boolean,
  pokemon4?:string,
  use_pokemon4?:boolean,
  down_pokemon4?:boolean,
  pokemon5?:string,
  use_pokemon5?:boolean,
  down_pokemon5?:boolean,
  pokemon6?:string,
  use_pokemon6?:boolean,
  down_pokemon6?:boolean,
  pokemon7?:string,
  use_pokemon7?:boolean,
  down_pokemon7?:boolean,
  pokemon8?:string,
  use_pokemon8?:boolean,
  down_pokemon8?:boolean,
  pokemon9?:string,
  use_pokemon9?:boolean,
  down_pokemon9?:boolean,
  pokemon10?:string,
  use_pokemon10?:boolean,
  down_pokemon10?:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capture';
}
