import { Component, OnInit, Input } from '@angular/core';
import { PokemonService, pokemonData } from './pokemons.service'
import { IdbService } from '../commonservice/idb.service'
import { captureTemplate } from '../app.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  providers: [PokemonService],
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons = [];
  whose = "じぶん";
  @Input() side;
  private IdbService: IdbService;
  private captureTemplate: captureTemplate;
  private storeName = 'profileStore';
  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit() {
    if (this.side != "mine") {
      this.whose = "あいて";
    } else {

    }
    this.IdbService = new IdbService();
    this.IdbService.connectToIDB();
    this.getCaptureTemplate();
  }
  showData() {
    this.pokemonService.getData()
      .subscribe((data: pokemonData) => {
        this.pokemons = data[this.side];
        console.log(this.pokemons);
      })
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
      this.startObserveTimer();
      return this.captureTemplate;
    }).then((value: any) => {
      if (this.side == "mine") {
        this.pokemons = new Array<pokemonData>(6)
        this.pokemons[0] = ({
          name: value.pokemon1,
          isUse: value.use_pokemon1,
          isDown: value.down_pokemon1
        })
        this.pokemons[1] = ({
          name: value.pokemon2,
          isUse: value.use_pokemon2,
          isDown: value.down_pokemon2
        })
        this.pokemons[2] = ({
          name: value.pokemon3,
          isUse: value.use_pokemon3,
          isDown: value.down_pokemon3
        })
        this.pokemons[3] = ({
          name: value.pokemon4,
          isUse: value.use_pokemon4,
          isDown: value.down_pokemon4
        })
        this.pokemons[4] = ({
          name: value.pokemon5,
          isUse: value.use_pokemon5,
          isDown: value.down_pokemon5
        })
        this.pokemons[5] = ({
          name: value.pokemon6,
          isUse: value.use_pokemon6,
          isDown: value.down_pokemon6
        })
      } else {
        this.pokemons = new Array<pokemonData>(4)
        this.pokemons[0] = ({
          name: value.pokemon7,
          isUse: value.use_pokemon7,
          isDown: value.down_pokemon7
        })
        this.pokemons[1] = ({
          name: value.pokemon8,
          isUse: value.use_pokemon8,
          isDown: value.down_pokemon8
        })
        this.pokemons[2] = ({
          name: value.pokemon9,
          isUse: value.use_pokemon9,
          isDown: value.down_pokemon9
        })
        this.pokemons[3] = ({
          name: value.pokemon10,
          isUse: value.use_pokemon10,
          isDown: value.down_pokemon10
        })
      }
      return;
    })
  }

  startObserveTimer() {
    setTimeout(() => {
      new Promise(() => {
        this.getCaptureTemplate();
      }).then(() => {
        console.log(this.captureTemplate)
        this.startObserveTimer();
      })
    }, 1000);
  }
}
