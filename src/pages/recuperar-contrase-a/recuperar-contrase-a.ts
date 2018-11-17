import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EstablecimientosRegistradosPage } from '../establecimientos-registrados/establecimientos-registrados';
import { RegistroEstablecimientoPage } from '../registro-establecimiento/registro-establecimiento';
import { DetalleEstablecimientoPage } from '../detalle-establecimiento/detalle-establecimiento';
import { ActualizarEstablecimientoPage } from '../actualizar-establecimiento/actualizar-establecimiento';
import { RecuperarContraseA2Page } from '../recuperar-contrase-a2/recuperar-contrase-a2';
import { CambiarContraseAPage } from '../cambiar-contrase-a/cambiar-contrase-a';

@Component({
  selector: 'page-recuperar-contrase-a',
  templateUrl: 'recuperar-contrase-a.html'
})
export class RecuperarContraseAPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToEstablecimientosRegistrados(params){
    if (!params) params = {};
    this.navCtrl.push(EstablecimientosRegistradosPage);
  }goToRegistroEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroEstablecimientoPage);
  }goToDetalleEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalleEstablecimientoPage);
  }goToActualizarEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(ActualizarEstablecimientoPage);
  }goToRecuperarContraseA2(params){
    if (!params) params = {};
    this.navCtrl.push(RecuperarContraseA2Page);
  }goToCambiarContraseA(params){
    if (!params) params = {};
    this.navCtrl.push(CambiarContraseAPage);
  }
}
