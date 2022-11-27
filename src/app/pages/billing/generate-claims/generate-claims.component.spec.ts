import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateClaimsComponent } from './generate-claims.component';

describe('GenerateClaimsComponent', () => {
  let component: GenerateClaimsComponent;
  let fixture: ComponentFixture<GenerateClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
