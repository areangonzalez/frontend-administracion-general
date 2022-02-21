import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { ListaUsuarioComponent } from './componentes';
import { ModalAgregarUsuarioComponent } from './componentes/modal-agregar-usuario.component';
import { FormUsuarioComponent } from './componentes/form-usuario.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuarioComponent,
    ModalAgregarUsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
