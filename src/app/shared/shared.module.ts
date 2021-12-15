import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusquedaAvanzadaComponent } from './componentes';


@NgModule({
  declarations: [
    BusquedaAvanzadaComponent
  ],
  imports: [
    CommonModule,
    RouterModule, FormsModule, ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RouterModule, FormsModule,
    BusquedaAvanzadaComponent, ReactiveFormsModule
  ]
})
export class SharedModule { }