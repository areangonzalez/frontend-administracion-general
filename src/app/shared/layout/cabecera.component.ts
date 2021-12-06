import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'layout-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  @Output('ocultarMenu') public ocultarMenu = new EventEmitter();
  public mostrar = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu() {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);

    this.ocultarMenu.emit(this.mostrar);
  }
}
