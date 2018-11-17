import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroEstablecimientoPage } from '../registro-establecimiento/registro-establecimiento';
import { DetalleEstablecimientoPage } from '../detalle-establecimiento/detalle-establecimiento';
import { EstablecimientosRegistradosPage } from '../establecimientos-registrados/establecimientos-registrados';
import { ActualizarEstablecimientoPage } from '../actualizar-establecimiento/actualizar-establecimiento';

@Component({
  selector: 'page-establecimientos-registrados',
  templateUrl: 'establecimientos-registrados.html'
})
export class EstablecimientosRegistradosPage {

  constructor(public navCtrl: NavController) {
  }
  goToRegistroEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroEstablecimientoPage);
  }goToDetalleEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalleEstablecimientoPage);
  }goToEstablecimientosRegistrados(params){
    if (!params) params = {};
    this.navCtrl.push(EstablecimientosRegistradosPage);
  }goToActualizarEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.push(ActualizarEstablecimientoPage);
  }
}
