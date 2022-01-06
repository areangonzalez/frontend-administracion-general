import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LugarRoutingModule } from './lugar-routing.module';
import {
  LocalidadComponent,
  LocalidadListaComponent, LocalidadExtraListaComponent,
  LocalidadBusquedaComponent, LocalidadFormComponent,
  LocalidadModalContent, LocalidadModalComponent,
  LocalidadExtraBorrarModalContent, LocalidadExtraBorrarModalComponent
} from './localidad';

@NgModule({
  declarations: [
    LocalidadComponent,
    LocalidadListaComponent,
    LocalidadExtraListaComponent,
    LocalidadBusquedaComponent,
    LocalidadFormComponent,
    LocalidadModalContent, LocalidadModalComponent,
    LocalidadExtraBorrarModalContent, LocalidadExtraBorrarModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    LugarRoutingModule
  ]
})
export class LugarModule { }
