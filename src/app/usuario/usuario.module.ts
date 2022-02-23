import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import {
  ListaUsuarioComponent, FormPersonaComponent, FormUsuarioComponent,
  ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent
} from './componentes';

@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuarioComponent,
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent,
    FormPersonaComponent, FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent
  ]

})
export class UsuarioModule { }
