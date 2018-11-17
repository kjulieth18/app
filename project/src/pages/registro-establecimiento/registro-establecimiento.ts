import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalleEstablecimientoPage } from '../detalle-establecimiento/detalle-establecimiento';
import { EstablecimientosRegistradosPage } from '../establecimientos-registrados/establecimientos-registrados';
import { ActualizarEstablecimientoPage } from '../actualizar-establecimiento/actualizar-establecimiento';

@Component({
  selector: 'page-registro-establecimiento',
  templateUrl: 'registro-establecimiento.html'
})
export class RegistroEstablecimientoPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetalleEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalleEstablecimientoPage);
  }goToEstablecimientosRegistrados(params){
    if (!params) params = {};
    this.navCtrl.push(EstablecimientosRegistradosPage);
  }goToRegistroEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroEstablecimientoPage);
  }goToActualizarEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(ActualizarEstablecimientoPage);
  }
}
