import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(mensaje: string) {
    this.show(mensaje, { classname: 'showing bg-success text-light fadein', delay: 5000 });
  }

  showDanger(mensaje: string) {
    this.show(mensaje, { classname: 'bg-danger text-light', delay: 15000 });
  }
}
