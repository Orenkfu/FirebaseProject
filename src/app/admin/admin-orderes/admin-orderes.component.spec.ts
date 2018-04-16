import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderesComponent } from './admin-orderes.component';

describe('AdminOrderesComponent', () => {
  let component: AdminOrderesComponent;
  let fixture: ComponentFixture<AdminOrderesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
