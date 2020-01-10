import { Component, OnInit, NgModule } from '@angular/core';
import { IdbService } from '../commonservice/idb.service'
import { captureTemplate } from '../app.component';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  private IdbService: IdbService;
  private captureTemplate: captureTemplate;
  private storeName = 'profileStore';
  constructor() { }

  ngOnInit() {
    this.IdbService = new IdbService();
    this.IdbService.connectToIDB();
    this.getCaptureTemplate();
  }
  onTitleNotify() {
    this.IdbService.addItems(this.storeName, this.captureTemplate);
  }
  getCaptureTemplate() {
    this.IdbService.getAllData(this.storeName).then((values: any) => {
      return values[0];
    }).then((value: any) => {
      value.title = value.title || "配信タイトル"
      value.pokemon1 = value.pokemon1 || ""
      value.use_pokemon1 = !!value.use_pokemon1
      value.down_pokemon1 = !!value.down_pokemon1
      value.pokemon2 = value.pokemon2 || ""
      value.use_pokemon2 = !!value.use_pokemon2
      value.down_pokemon2 = !!value.down_pokemon2
      value.pokemon3 = value.pokemon3 || ""
      value.use_pokemon3 = !!value.use_pokemon3
      value.down_pokemon3 = !!value.down_pokemon3
      value.pokemon4 = value.pokemon4 || ""
      value.use_pokemon4 = !!value.use_pokemon4
      value.down_pokemon4 = !!value.down_pokemon4
      value.pokemon5 = value.pokemon5 || ""
      value.use_pokemon5 = !!value.use_pokemon5
      value.down_pokemon5 = !!value.down_pokemon5
      value.pokemon6 = value.pokemon6 || ""
      value.use_pokemon6 = !!value.use_pokemon6
      value.down_pokemon6 = !!value.down_pokemon6
      value.pokemon7 = value.pokemon7 || ""
      value.use_pokemon7 = !!value.use_pokemon7
      value.down_pokemon7 = !!value.down_pokemon7
      value.pokemon8 = value.pokemon8 || ""
      value.use_pokemon8 = !!value.use_pokemon8
      value.down_pokemon8 = !!value.down_pokemon8
      value.pokemon9 = value.pokemon9 || ""
      value.use_pokemon9 = !!value.use_pokemon9
      value.down_pokemon9 = !!value.down_pokemon9
      value.pokemon10 = value.pokemon10 || ""
      value.use_pokemon10 = !!value.use_pokemon10
      value.down_pokemon10 = !!value.down_pokemon10
      this.captureTemplate = value;
      return this.captureTemplate;
    })
  }

}
