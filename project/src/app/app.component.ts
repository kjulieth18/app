import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EstablecimientosRegistradosPage } from '../pages/establecimientos-registrados/establecimientos-registrados';
import { RegistroEstablecimientoPage } from '../pages/registro-establecimiento/registro-establecimiento';
import { DetalleEstablecimientoPage } from '../pages/detalle-establecimiento/detalle-establecimiento';
import { ActualizarEstablecimientoPage } from '../pages/actualizar-establecimiento/actualizar-establecimiento';
import { EmpresaRecicladoraPage } from '../pages/empresa-recicladora/empresa-recicladora';
import { EstadSticasPage } from '../pages/estad-sticas/estad-sticas';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToEstablecimientosRegistrados(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EstablecimientosRegistradosPage);
  }goToRegistroEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RegistroEstablecimientoPage);
  }goToDetalleEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DetalleEstablecimientoPage);
  }goToActualizarEstablecimiento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ActualizarEstablecimientoPage);
  }goToEmpresaRecicladora(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EmpresaRecicladoraPage);
  }goToEstadSticas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EstadSticasPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }
}
