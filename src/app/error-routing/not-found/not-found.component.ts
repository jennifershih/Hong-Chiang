import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-page-not-found',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<h2>Error 404: Page not found</h2>',
})
export class PageNotFoundComponent {}
