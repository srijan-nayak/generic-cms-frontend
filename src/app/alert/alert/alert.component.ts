import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  animations: [
    trigger('enterExit', [
      state(
        'exit',
        style({
          bottom: '-2.75rem',
        })
      ),
      state(
        'enter',
        style({
          bottom: '2rem',
        })
      ),
      transition('exit => enter', [animate('0.2s ease-out')]),
      transition('enter => exit', [animate('0.1s ease-in')]),
    ]),
  ],
})
export class AlertComponent implements OnInit {
  message?: string;
  animationState: 'exit' | 'enter' = 'exit';

  constructor(private readonly alertsService: AlertsService) {}

  async ngOnInit() {
    this.alertsService.alerts$.subscribe(
      async (message) => await this.showTemporaryAlert(message)
    );
  }
  async showTemporaryAlert(message: string) {
    this.message = message;
    await this.wait(100);
    this.animationState = 'enter';
    await this.wait(3000);
    this.animationState = 'exit';
    await this.wait(150);
    this.message = undefined;
  }

  private async wait(duration: number) {
    await new Promise((resolve) => setTimeout(resolve, duration));
  }
}
