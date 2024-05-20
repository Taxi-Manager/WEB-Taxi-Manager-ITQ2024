import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMantenimientoComponent } from './consultar-mantenimiento.component';

describe('ConsultarMantenimientoComponent', () => {
  let component: ConsultarMantenimientoComponent;
  let fixture: ComponentFixture<ConsultarMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
