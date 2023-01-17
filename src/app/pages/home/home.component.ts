import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { pokemon } from 'src/app/pokemon.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  almacen:pokemon[]=[]
  mostrar=false;

  buscar(id:string){
    this.route.navigate(['/detalles', id])
  }
  constructor(private BBDD:DataService, private route:Router, router:ActivatedRoute) { }
  ordenar(){
    this.mostrar=!this.mostrar
    this.almacen=this.almacen.sort((a:pokemon,b:pokemon)=>(a.id>b.id)? 1:-1)
  }

  ngOnInit(): void {
    let colorIzq='';
    let colorDer='';

    for (let i=1; i<=150; i++){
      this.BBDD.BD(String(i)).subscribe(x=>{
        try{
          switch(x.types[0].type.name){
            case 'bug': colorIzq='#9fc139';
            break;
            case 'dark': colorIzq='#616371'
            break
            case 'dragon': colorIzq='#0873c4'
            break
            case 'electric': colorIzq='#f8df66'
            break
            case 'fairy': colorIzq='#f29fe7'
            break
            case 'fighting': colorIzq='#e2434e'
            break
            case 'fire': colorIzq='#fba34a'
            break
            case 'flying': colorIzq='#a1bbeb'
            break
            case 'ghost': colorIzq='#7372d2'
            break
            case 'grass': colorIzq='#5cbf6c'
            break
            case 'ground': colorIzq='#d59162'
            break
            case 'ice': colorIzq='#85d3cd'
            break
            case 'normal': colorIzq='#9ca0a0'
            break
            case 'poison': colorIzq='#bb60d6'
            break
            case 'psychic': colorIzq='#fd958b'
            break
            case 'rock': colorIzq='#d3c58c'
            break
            case 'steel': colorIzq='#549aa4'
            break
            case 'water': colorIzq='#5ba7e1'
            break
          }
          switch(x.types[1].type.name){
            case 'bug': colorDer='#9fc139';
            break;
            case 'dark': colorDer='#616371'
            break
            case 'dragon': colorDer='#0873c4'
            break
            case 'electric': colorDer='#f8df66'
            break
            case 'fairy': colorDer='#f29fe7'
            break
            case 'fighting': colorDer='#e2434e'
            break
            case 'fire': colorDer='#fba34a'
            break
            case 'flying': colorDer='#a1bbeb'
            break
            case 'ghost': colorDer='#7372d2'
            break
            case 'grass': colorDer='#5cbf6c'
            break
            case 'ground': colorDer='#d59162'
            break
            case 'ice': colorDer='#85d3cd'
            break
            case 'normal': colorDer='#9ca0a0'
            break
            case 'poison': colorDer='#bb60d6'
            break
            case 'psychic': colorDer='#fd958b'
            break
            case 'rock': colorDer='#d3c58c'
            break
            case 'steel': colorDer='#549aa4'
            break
            case 'water': colorDer='#5ba7e1'
            break
          }
          this.almacen.push(new pokemon(x.name, x.id, x.sprites.front_default, x.types[0].type.name, x.types[1].type.name, colorIzq, colorDer))
        }catch (error){
          switch(x.types[0].type.name){
            case 'bug': colorIzq='#9fc139';
            break;
            case 'dark': colorIzq='#616371'
            break
            case 'dragon': colorIzq='#0873c4'
            break
            case 'electric': colorIzq='#f8df66'
            break
            case 'fairy': colorIzq='#f29fe7'
            break
            case 'fighting': colorIzq='#e2434e'
            break
            case 'fire': colorIzq='#fba34a'
            break
            case 'flying': colorIzq='#a1bbeb'
            break
            case 'ghost': colorIzq='#7372d2'
            break
            case 'grass': colorIzq='#5cbf6c'
            break
            case 'ground': colorIzq='#d59162'
            break
            case 'ice': colorIzq='#85d3cd'
            break
            case 'normal': colorIzq='#9ca0a0'
            break
            case 'poison': colorIzq='#bb60d6'
            break
            case 'psychic': colorIzq='#fd958b'
            break
            case 'rock': colorIzq='#d3c58c'
            break
            case 'steel': colorIzq='#549aa4'
            break
            case 'water': colorIzq='#5ba7e1'
            break
          }
          this.almacen.push(new pokemon(x.name, x.id, x.sprites.front_default, x.types[0].type.name, '', colorIzq, colorIzq))
        }
      })
    }
    console.log(this.almacen)
  }

}
