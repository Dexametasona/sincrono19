import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  almacen:any=[]

  buscar(id:string){
    this.route.navigate(['/detalles', id])
  }
  constructor(private BBDD:DataService, private route:Router, router:ActivatedRoute) { }

  ngOnInit(): void {
    for (let i=1; i<152; i++){
      this.BBDD.BD(String(i)).subscribe(x=>this.almacen.push(x))
    }
    console.log(this.almacen)
  }

}
