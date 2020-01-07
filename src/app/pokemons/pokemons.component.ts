import { Component, OnInit,Input } from '@angular/core';
import { PokemonService, pokemonData } from './pokemons.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  providers: [PokemonService],
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons=[];
  whose="じぶん";
  @Input() side;
  constructor(private pokemonService: PokemonService) { 
    
  }

  ngOnInit() {
    if(this.side != "mine"){
      this.whose="あいて";
    }
    this.showData()
  }
  showData() {
    this.pokemonService.getData()
      .subscribe((data: pokemonData) => {
        this.pokemons = data[this.side];
        console.log(this.pokemons);
      })
  }
}
