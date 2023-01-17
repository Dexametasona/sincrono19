import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { pokemonCard } from 'src/app/pokemonCard.module';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  id!:string | null;
  pokeDetail:any=[];
  pokemon!:pokemonCard;

  regresar(){
    this.router.navigate(['/home'])
  }
  constructor(private BBDD:DataService, private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    let colorIzq='';
    let colorDer='';
    this.id=this.route.snapshot.paramMap.get('id')
    
    if(this.id!=null){
      this.BBDD.BD(String(this.id)).subscribe(x=>{
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
          this.pokemon=new pokemonCard(
            x.name, 
            x.id, 
            x.sprites.front_default,
            x.sprites.front_shiny, 
            x.types[0].type.name, 
            x.types[1].type.name, 
            colorIzq, 
            colorDer,
            x.abilities[0].ability.name, 
            x.moves[0].move.name, 
            x.moves[1].move.name, 
            x.height, 
            x.weight)
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
          this.pokemon= new pokemonCard(
            x.name, 
            x.id, 
            x.sprites.front_default,
            x.sprites.front_shiny, 
            x.types[0].type.name, 
            '', 
            colorIzq, 
            colorIzq,
            x.abilities[0].ability.name, 
            x.moves[0].move.name, 
            x.moves[1].move.name, 
            x.height, 
            x.weight
          )
        }
      })

    }
  }

}
