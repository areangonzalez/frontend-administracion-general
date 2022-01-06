import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LugarRoutingModule } from './lugar-routing.module';
import {
  LocalidadComponent,
  LocalidadListaComponent, LocalidadExtraListaComponent,
  LocalidadBusquedaComponent, LocalidadFormComponent,
  LocalidadModalContent, LocalidadModalComponent
} from './localidad';
import { LocalidadBajaModalComponent } from './localidad/componentes/modal/localidad-baja-modal.component';

@NgModule({
  declarations: [
    LocalidadComponent,
    LocalidadListaComponent,
    LocalidadExtraListaComponent,
    LocalidadBusquedaComponent,
    LocalidadFormComponent,
    LocalidadModalContent, LocalidadModalComponent, LocalidadBajaModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    LugarRoutingModule
  ]
})
export class LugarModule { }
