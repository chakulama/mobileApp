import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {NavController,NavParams} from '@ionic/angular';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  private APIUrl="http://127.0.0.1:3000/personas";
  lista:any[];
  selecionados:boolean[];
  todos:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.dameAlumnos()
 
   
  
  }

  dameAlumnos()
  {this.http.get<any[]>(this.APIUrl)
    .subscribe( lista=> {
      this.lista=lista;
      console.log(this.lista);
      this.selecionados = Array(this.lista.length).fill(false);
    }
    );
 

  }
  IncrementarPuntos(){
    console.log('Voy a incrementar puntos:');
    console.log(this.selecionados)
    for(var i =0; i<this.selecionados.length;i++)
    {
     if (this.selecionados[i])
     {
       this.lista[i].puntos++;
       this.http.put<any>(this.APIUrl+'/'+this.lista[i].nombre,this.lista[i])
       .subscribe(()=>this.dameAlumnos);
     } 
    }

  }


}
