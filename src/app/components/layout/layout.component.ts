import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="container max-w-screen-md mx-auto px-4 pb-4">
      <app-nav-bar></app-nav-bar>
      <ng-content></ng-content>
    </div>
  `,
})
export class LayoutComponent {}
