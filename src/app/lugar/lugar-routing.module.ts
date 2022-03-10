import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalidadComponent } from '.';
import { LocalidadBackendService, LocalidadExtraService, ProvinciaService } from '../core/service';

const routes: Routes = [
  {
    path: 'localidad', component: LocalidadComponent,
    resolve: { localidadesBackend: LocalidadBackendService, localidadesExtras: LocalidadExtraService, provincias: ProvinciaService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LocalidadBackendService, LocalidadExtraService, ProvinciaService]
})
export class LugarRoutingModule { }
