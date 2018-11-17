import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmpresaRecicladoraPage } from '../empresa-recicladora/empresa-recicladora';

@Component({
  selector: 'page-registro-empresa-recicladora',
  templateUrl: 'registro-empresa-recicladora.html'
})
export class RegistroEmpresaRecicladoraPage {

  constructor(public navCtrl: NavController) {
  }
  goToEmpresaRecicladora(params){
    if (!params) params = {};
    this.navCtrl.push(EmpresaRecicladoraPage);
  }
}
