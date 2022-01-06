import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }, */
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule)
  },
  {
    path: 'lugar',
    loadChildren: () => import('./lugar/lugar.module').then(m => m.LugarModule)
  },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
