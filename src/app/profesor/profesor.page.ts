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
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.APIUrl)
    .subscribe( lista=> {
      this.lista=lista;
      console.log(this.lista);
    }
    );
 
   
  
  }


}
