import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioService, LocalidadService, ModuloService } from '../core/service';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '', component: UsuarioComponent,
    resolve: { usuarios: UsuarioService, localidades: LocalidadService, modulos: ModuloService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsuarioService, LocalidadService, ModuloService]
})
export class UsuarioRoutingModule { }
