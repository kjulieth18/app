import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalleEstablecimientoPage } from '../detalle-establecimiento/detalle-establecimiento';
import { EstablecimientosRegistradosPage } from '../establecimientos-registrados/establecimientos-registrados';
import { RegistroEstablecimientoPage } from '../registro-establecimiento/registro-establecimiento';

@Component({
  selector: 'page-actualizar-establecimiento',
  templateUrl: 'actualizar-establecimiento.html'
})
export class ActualizarEstablecimientoPage {

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
