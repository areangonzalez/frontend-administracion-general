import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalidadComponent } from '.';

const routes: Routes = [
  {
    path: 'localidad', component: LocalidadComponent,
    // resolve: { unidadMedidas: UnidadMedidaService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugarRoutingModule { }
