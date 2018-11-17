import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmpresaRecicladoraPage } from '../empresa-recicladora/empresa-recicladora';

@Component({
  selector: 'page-actualizar-empresa-recicladora',
  templateUrl: 'actualizar-empresa-recicladora.html'
})
export class ActualizarEmpresaRecicladoraPage {

  constructor(public navCtrl: NavController) {
  }
  goToEmpresaRecicladora(params){
    if (!params) params = {};
    this.navCtrl.push(EmpresaRecicladoraPage);
  }
}
