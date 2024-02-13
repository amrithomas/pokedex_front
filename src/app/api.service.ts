import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrlApi = 'http://127.0.0.1:8000/api'; 
  private baseUrlWeb = 'http://127.0.0.1:8000/web'; 

  constructor(private http: HttpClient) { }

  getAllPokemon(limit: number, start: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrlApi}/pokemon?offset=${start}&limit=${limit}`);
  }
  

  getPokemonByGeneration(generation: string) : Observable<any>{
    console.log(generation)
    return this.http.get<any>(`${this.baseUrlApi}/pokemon`);
  }
}
