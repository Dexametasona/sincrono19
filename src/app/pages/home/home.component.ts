import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  almacen:any=[]

  constructor(private BBDD:DataService) { }

  ngOnInit(): void {
    for (let i=1; i<152; i++){
      this.BBDD.BD(String(i)).subscribe(x=>this.almacen.push(x))
    }
    console.log(this.almacen)
  }

}
