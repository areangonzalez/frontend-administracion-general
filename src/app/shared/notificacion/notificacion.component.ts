import { Component, OnInit, TemplateRef } from '@angular/core';
import { NotificacionService } from 'src/app/core/service';

@Component({
  selector: 'shared-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
  host: {'class': 'toast-container position-fixed top-0 end-0 p-3', 'style': 'z-index: 1200'}
})
export class NotificacionComponent {

  constructor(public toastService: NotificacionService) {}


  isTemplate(toast:any) { return toast.textOrTpl instanceof TemplateRef; }

}
