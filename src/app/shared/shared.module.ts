import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  BusquedaAvanzadaComponent, TablaPersonalizadaComponent, CrearEditarModalContent, CrearEditarModalComponent,
  FormPersonalizadoComponent, BajaModalContent, BajaModalComponent
} from './componentes';
import { LoaderComponent } from './loader';



@NgModule({
  declarations: [
    BusquedaAvanzadaComponent,
    TablaPersonalizadaComponent,
    CrearEditarModalContent, CrearEditarModalComponent, FormPersonalizadoComponent, BajaModalContent, BajaModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule, NgbPaginationModule, NgbTooltipModule,
    RouterModule, FormsModule, ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NgbPaginationModule, RouterModule, FormsModule, ReactiveFormsModule,
    BusquedaAvanzadaComponent, TablaPersonalizadaComponent,
    CrearEditarModalContent, CrearEditarModalComponent, FormPersonalizadoComponent, BajaModalContent, BajaModalComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
