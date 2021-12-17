import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusquedaAvanzadaComponent, TablaPersonalizadaComponent } from './componentes';
import { CrearEditarModalComponent } from './componentes/modal/crear-editar-modal.component';


@NgModule({
  declarations: [
    BusquedaAvanzadaComponent,
    TablaPersonalizadaComponent,
    CrearEditarModalComponent
  ],
  imports: [
    CommonModule, NgbPaginationModule,
    RouterModule, FormsModule, ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NgbPaginationModule, RouterModule, FormsModule, ReactiveFormsModule,
    BusquedaAvanzadaComponent, TablaPersonalizadaComponent
  ]
})
export class SharedModule { }
