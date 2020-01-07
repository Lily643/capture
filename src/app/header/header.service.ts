import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface HeaderData {
  title:string
}

@Injectable()
export class HeaderService {
  dataurl = 'assets/header_data.json';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.dataurl);
  }
}