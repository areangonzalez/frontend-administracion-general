import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import {
  ListaUsuarioComponent, FormPersonaComponent, FormUsuarioComponent,
  ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent,
  SeleccionarModuloContent, SeleccionarModuloComponent,
  PermisosGcbComponent, ListaPermisosGcbComponent,
  PermisosInventarioComponent, ListaPermisosInventarioComponent,
  PermisosPrestacionesSocialesComponent
} from './componentes';

@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuarioComponent,
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent,
    FormPersonaComponent, FormUsuarioComponent,
    SeleccionarModuloContent, SeleccionarModuloComponent,
    PermisosGcbComponent, ListaPermisosGcbComponent,
    PermisosInventarioComponent, ListaPermisosInventarioComponent,
    PermisosPrestacionesSocialesComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    UsuarioRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent, SeleccionarModuloContent, SeleccionarModuloComponent,
    PermisosGcbComponent, ListaPermisosGcbComponent,
    PermisosInventarioComponent, ListaPermisosInventarioComponent,
    PermisosPrestacionesSocialesComponent
  ]

})
export class UsuarioModule { }
