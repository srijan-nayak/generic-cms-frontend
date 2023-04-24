import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  template: `
    <h1 class="text-4xl mt-3 mb-8 font-bold text-white">{{ text }}</h1>
  `,
})
export class PageHeadingComponent {
  @Input()
  text = '';
}
