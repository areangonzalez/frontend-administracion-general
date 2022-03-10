import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalidadComponent } from '.';
import { LocalidadBackendService, LocalidadExtraService } from '../core/service';

const routes: Routes = [
  {
    path: 'localidad', component: LocalidadComponent,
    resolve: { localidadesBackend: LocalidadBackendService, localidadesExtras: LocalidadExtraService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LocalidadBackendService, LocalidadExtraService]
})
export class LugarRoutingModule { }
