import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  private alert = new Subject<string>();

  createAlert(message: string) {
    this.alert.next(message);
  }

  get alerts$() {
    return this.alert.asObservable();
  }
}
