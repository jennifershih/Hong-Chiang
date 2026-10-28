import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view2.component.scss'],
})
export class View2Component {}
