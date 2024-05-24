import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarConductorComponent } from './consultar-conductor.component';

describe('ConsultarConductorComponent', () => {
  let component: ConsultarConductorComponent;
  let fixture: ComponentFixture<ConsultarConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarConductorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
