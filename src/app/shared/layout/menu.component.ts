import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'ng-bootstrap-darkmode';
import { AutenticacionService } from 'src/app/core/service';

@Component({
  selector: 'layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public tema: any;
  public isCollapsedInv:boolean = true;
  public isCollapsedLug:boolean = true;

  constructor(private _themeService: ThemeService, private _auth: AutenticacionService, private _router: Router ) {
    _themeService.theme$.subscribe(theme => this.getTheme(theme));
  }

  ngOnInit(): void {
  }

  getTheme(theme: any) {
    if (!theme){
      this.tema = 'auto';
      this._themeService.theme$.next('auto');
    }else{
      this.tema = theme;
    }
  }

  cerrarSesion() {
    this._auth.logout();
    this._router.navigate(['./login']);
  }

}
