import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import {
  ListaUsuarioComponent, FormPersonaComponent, FormUsuarioComponent, PermisosGcbComponent,
  ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent,
  SeleccionarModuloContent, SeleccionarModuloComponent

} from './componentes';
import {  } from './componentes/modal/seleccionar-modulo.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuarioComponent,
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent,
    FormPersonaComponent, FormUsuarioComponent, PermisosGcbComponent,
    SeleccionarModuloContent, SeleccionarModuloComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent, SeleccionarModuloContent, SeleccionarModuloComponent
  ]

})
export class UsuarioModule { }
