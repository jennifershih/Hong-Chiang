import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { DataSource1StoreService } from '../services/data-source1-store.service';

@Component({
  standalone: false,
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view1.component.scss'],
})
export class View1Component implements OnInit {
  private dataSource1StoreService = inject(DataSource1StoreService);

  public dataSource1StoreTable1: any = null;

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource1StoreService
      .getData('Table 1')
      .subscribe((data) => (this.dataSource1StoreTable1 = data));
  }
}
