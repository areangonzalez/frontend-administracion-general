import { Injectable, OnInit } from '@angular/core';
import { ThemeService } from 'ng-bootstrap-darkmode';

@Injectable({
  providedIn: 'root'
})
export class TemaSistemaService {

  constructor(
      private _themeService: ThemeService,
    ) {
    _themeService.theme$.subscribe(theme => theme);
  }

}
