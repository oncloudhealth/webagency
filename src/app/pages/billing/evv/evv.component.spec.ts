import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvvComponent } from './evv.component';

describe('EvvComponent', () => {
  let component: EvvComponent;
  let fixture: ComponentFixture<EvvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
