import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  BusquedaAvanzadaComponent, TablaPersonalizadaComponent, CrearEditarModalContent, CrearEditarModalComponent,
  FormPersonalizadoComponent
} from './componentes';
import {  } from './componentes/form/form-personalizado.component';



@NgModule({
  declarations: [
    BusquedaAvanzadaComponent,
    TablaPersonalizadaComponent,
    CrearEditarModalContent, CrearEditarModalComponent, FormPersonalizadoComponent
  ],
  imports: [
    CommonModule, NgbPaginationModule,
    RouterModule, FormsModule, ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NgbPaginationModule, RouterModule, FormsModule, ReactiveFormsModule,
    BusquedaAvanzadaComponent, TablaPersonalizadaComponent,
    CrearEditarModalContent, CrearEditarModalComponent, FormPersonalizadoComponent
  ]
})
export class SharedModule { }
