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
    let data;

    for (let i=1; i<=150; i++){
      this.BBDD.BD(String(i)).subscribe(x=>{
        try{
          this.almacen.push(new pokemon(x.name, x.id, x.sprites.front_default, x.types[0].type.name, x.type[1].type.name))
        }catch{
          this.almacen.push(new pokemon(x.name, x.id, x.sprites.front_default, x.types[0].type.name, ''))
        }
      })
    }
  }

}
