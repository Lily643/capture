import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface pokemonData {
    mine: [
        {
            name: string,
            isUse:boolean,
            isDown:boolean
        }
    ],
    opponent:[
        {
            name: string,
            isUse:boolean,
            isDown:boolean
        }
    ]

}

@Injectable()
export class PokemonService {
    dataurl = 'assets/pokemon_data.json';
    constructor(private http: HttpClient) { }
    getData() {
        return this.http.get(this.dataurl);
    }
}