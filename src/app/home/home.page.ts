import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ProfesorPage} from '../profesor/profesor.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string;
  password:string;
  private APIUrl="http://192.168.1.39:3000/api/personas";

  constructor (public navCtrl : NavController,
    private http:HttpClient){}


  Autentificar()
  {
    this.http.get<any>(this.APIUrl+'/'+this.nombre).subscribe(
                                                  persona=> {
                                                    if (persona != null)
                                                    {
                                                      if (persona.rol =="Profesor")
                                                        {this.navCtrl.navigateForward("/profesor")
                                                        

                                                          console.log("Profesor")
                                                        //alert("Loged in as Profesor: "+persona.nombre);
                                                      }
                                                                                                               
                                                      else{
                                                          //window.location.href='./alumno/'+persona.nombre;
                                                          console.log("Log in "+persona.nombre );
                                                          alert("Log in "+persona.nombre);
                                                        }
                                                    }
                                                    else
                                                    console.log(persona);
                                                   
                                                      } );
   }
  Greet()
{
  console.log("hola");
}

}
