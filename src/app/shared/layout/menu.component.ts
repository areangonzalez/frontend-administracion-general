import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng-bootstrap-darkmode';

@Component({
  selector: 'layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public tema: any;
  public isCollapsedInv:boolean = true;
  public isCollapsedLug:boolean = true;

  constructor(private _themeService: ThemeService ) {
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

}
