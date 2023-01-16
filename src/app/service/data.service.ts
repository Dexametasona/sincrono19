import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  url='https://pokeapi.co/api/v2/pokemon/'
  BD(id:string){
    return this.http.get<any>(this.url+id)
  }
}
