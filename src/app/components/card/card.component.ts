import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="bg-white drop-shadow-2xl rounded-lg px-5 py-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {}
