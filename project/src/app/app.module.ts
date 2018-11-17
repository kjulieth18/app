import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EstablecimientosRegistradosPage } from '../pages/establecimientos-registrados/establecimientos-registrados';
import { EmpresaRecicladoraPage } from '../pages/empresa-recicladora/empresa-recicladora';
import { EstadSticasPage } from '../pages/estad-sticas/estad-sticas';
import { LoginPage } from '../pages/login/login';
import { RecuperarContraseAPage } from '../pages/recuperar-contrase-a/recuperar-contrase-a';
import { RecuperarContraseA2Page } from '../pages/recuperar-contrase-a2/recuperar-contrase-a2';
import { CambiarContraseAPage } from '../pages/cambiar-contrase-a/cambiar-contrase-a';
import { DetalleEstablecimientoPage } from '../pages/detalle-establecimiento/detalle-establecimiento';
import { ActualizarEstablecimientoPage } from '../pages/actualizar-establecimiento/actualizar-establecimiento';
import { RegistroEstablecimientoPage } from '../pages/registro-establecimiento/registro-establecimiento';
import { RegistroEmpresaRecicladoraPage } from '../pages/registro-empresa-recicladora/registro-empresa-recicladora';
import { ActualizarEmpresaRecicladoraPage } from '../pages/actualizar-empresa-recicladora/actualizar-empresa-recicladora';
import { UbicaciNEstablecimientosPage } from '../pages/ubicaci-nestablecimientos/ubicaci-nestablecimientos';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    EstablecimientosRegistradosPage,
    EmpresaRecicladoraPage,
    EstadSticasPage,
    LoginPage,
    RecuperarContraseAPage,
    RecuperarContraseA2Page,
    CambiarContraseAPage,
    DetalleEstablecimientoPage,
    ActualizarEstablecimientoPage,
    RegistroEstablecimientoPage,
    RegistroEmpresaRecicladoraPage,
    ActualizarEmpresaRecicladoraPage,
    UbicaciNEstablecimientosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EstablecimientosRegistradosPage,
    EmpresaRecicladoraPage,
    EstadSticasPage,
    LoginPage,
    RecuperarContraseAPage,
    RecuperarContraseA2Page,
    CambiarContraseAPage,
    DetalleEstablecimientoPage,
    ActualizarEstablecimientoPage,
    RegistroEstablecimientoPage,
    RegistroEmpresaRecicladoraPage,
    ActualizarEmpresaRecicladoraPage,
    UbicaciNEstablecimientosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}