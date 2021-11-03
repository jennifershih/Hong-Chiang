import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxToggleModule, IgxIconModule, IgxGridModule, IgxActionStripModule, IgxDialogModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { View1Component } from './view1.component';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxToggleModule, IgxIconModule, IgxGridModule, IgxActionStripModule, IgxDialogModule, IgxNavigationDrawerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
