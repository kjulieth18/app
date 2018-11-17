import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstablecimientosRegistradosPage } from '../establecimientos-registrados/establecimientos-registrados';
import { RegistroEstablecimientoPage } from '../registro-establecimiento/registro-establecimiento';
import { DetalleEstablecimientoPage } from '../detalle-establecimiento/detalle-establecimiento';
import { ActualizarEstablecimientoPage } from '../actualizar-establecimiento/actualizar-establecimiento';
import { ApiProvider } from '../../providers/api/api'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: {nit?:string, pass?:string} = {}
  constructor(public navCtrl: NavController, public api: ApiProvider) {
  }
  
  
  authUser(){
    console.log(this.user)
    this.api.authUser(this.user);
  }

 
}
