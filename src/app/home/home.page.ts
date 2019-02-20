import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string;
  password:string;
  private APIUrl="http://127.0.0.1:3000/personas";

  constructor (public navCtrl : NavController,
    private http:HttpClient){}


  Autentificar()
  {
    this.http.get<any>(this.APIUrl+'/'+this.nombre).subscribe(
                                                  persona=> {
                                                    if (persona != null)
                                                    {
                                                      if (persona.rol ==="Profesor")
                                                        console.log("Profesor")
                                                                                                               
                                                      else{
                                                          //window.location.href='./alumno/'+persona.nombre;
                                                          console.log("Log in "+persona.nombre );
                                                          alert("Log in "+persona.nombre);
                                                        }
                                                    }
                                                   
                                                      } );
   }
  Greet()
{
  console.log("hola");
}

}
