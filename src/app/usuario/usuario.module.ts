import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import {
  ListaUsuarioComponent, FormUsuarioComponent,
  ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent
} from './componentes';


@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuarioComponent,
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ModalAgregarUsuarioContent, ModalAgregarUsuarioComponent
  ]

})
export class UsuarioModule { }
