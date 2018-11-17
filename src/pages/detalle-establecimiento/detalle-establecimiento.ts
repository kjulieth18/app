import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstablecimientosRegistradosPage } from '../establecimientos-registrados/establecimientos-registrados';
import { RegistroEstablecimientoPage } from '../registro-establecimiento/registro-establecimiento';
import { DetalleEstablecimientoPage } from '../detalle-establecimiento/detalle-establecimiento';
import { ActualizarEstablecimientoPage } from '../actualizar-establecimiento/actualizar-establecimiento';

@Component({
  selector: 'page-detalle-establecimiento',
  templateUrl: 'detalle-establecimiento.html'
})
export class DetalleEstablecimientoPage {

  constructor(public navCtrl: NavController) {
  }
  goToEstablecimientosRegistrados(params){
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
  }
}
