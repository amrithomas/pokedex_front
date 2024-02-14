import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonData: any;
  generation: string = '1';
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllPokemon(151, 0);
    // this.getPokemonByGeneration(this.generation)
  }

  getAllPokemon(limit : number, start: number) {
    this.isLoading = true;
    this.apiService.getAllPokemon(limit, start).subscribe(
      (data) => {
        this.pokemonData = data;
        this.isLoading = false;
        console.log(this.pokemonData);
      },
      (error) => {
        console.error('Error fetching Pokemon data: ', error)
      }
    )
  }

  getPokemonByGeneration(generation: string) {
    this.apiService.getPokemonByGeneration(generation).subscribe(
      (data) => {
        this.pokemonData = data;
        console.log(this.pokemonData);
      },
      (error) => {
        console.error('Error fetching Pokemon data:', error);
      }
    );
  }

  chunkArray(array: any[], size: number): any[] {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  }

  teste(inicio: string, fim: string) {
    console.log(inicio);
    console.log(fim)
  }
  
}
