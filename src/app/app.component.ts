import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-administracion-general';
  mostrar: boolean = false;


  ocultarMenu(ocultar: boolean) {
    return this.mostrar = ocultar;
  }
}
