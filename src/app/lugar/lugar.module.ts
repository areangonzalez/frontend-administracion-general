import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LugarRoutingModule } from './lugar-routing.module';
import { LocalidadComponent } from './localidad';


@NgModule({
  declarations: [
    LocalidadComponent
  ],
  imports: [
    NgbModule,
    LugarRoutingModule
  ]
})
export class LugarModule { }
