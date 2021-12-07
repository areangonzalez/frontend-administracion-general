import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TemaSistemaService } from 'src/app/core/service';

@Component({
  selector: 'layout-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  @Output('ocultarMenu') public ocultarMenu = new EventEmitter();
  public mostrar = false;
  constructor(private _tema: TemaSistemaService) { }

  ngOnInit(): void {
  }

  mostrarMenu() {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);

    this.ocultarMenu.emit(this.mostrar);
  }
}
