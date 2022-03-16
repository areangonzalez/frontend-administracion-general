import { LocalidadService } from 'src/app/core/services';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioService, LoaderService } from '../core/service';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '', component: UsuarioComponent,
    resolve: { usuarios: UsuarioService, LocalidadService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsuarioService]
})
export class UsuarioRoutingModule { }
