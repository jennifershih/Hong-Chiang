import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-uncaught-error',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<h2>Error 500: Internal Server Error</h2>',
})
export class UncaughtErrorComponent {}
