import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string;
  password:string;

  constructor (public navCtrl : NavController){}


  Autentificar()
  {console.log(" login successful:"+this.nombre);
  console.log(" Password:"+this.password);}

  Greet()
{
  console.log("hola");
}

}
