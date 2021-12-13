import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {of} from 'rxjs';
import {NgBootstrapDarkmodeModule, THEME_LOADER, THEME_SAVER} from 'ng-bootstrap-darkmode';

import { CabeceraComponent, MenuComponent } from "./shared";
import { AppComponent } from './app.component';
import { MarcaComponent } from './invetnario/marca/marca.component';
import { ProductoComponent } from './invetnario/producto/producto.component';
import { UnidadMedidaComponent } from './invetnario/unidad-medida/unidad-medida.component';

@NgModule({
  declarations: [
    CabeceraComponent, MenuComponent,
    AppComponent,
    MarcaComponent,
    ProductoComponent,
    UnidadMedidaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgBootstrapDarkmodeModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
