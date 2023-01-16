import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  id!:string | null;
  pokeDetail:any=[];

  regresar(){
    this.router.navigate(['/home'])
  }
  constructor(private BBDD:DataService, private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    let pokemon;
    this.id=this.route.snapshot.paramMap.get('id')

    if(this.id!=null){
      this.BBDD.BD(this.id).subscribe(x=>this.pokeDetail.push(x))

    }
  }

}
