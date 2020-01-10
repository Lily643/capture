import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SettingComponent } from './setting/setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {IdbService} from './commonservice/idb.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [IdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
