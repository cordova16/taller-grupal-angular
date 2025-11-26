import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListComponent } from './tabla-list';

describe('TablaList', () => {
  let component: TablaListComponent;
  let fixture: ComponentFixture<TablaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
