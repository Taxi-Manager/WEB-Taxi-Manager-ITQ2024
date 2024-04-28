import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarDatosVehiculoComponent } from './guardar-datos-vehiculo.component';

describe('GuardarDatosVehiculoComponent', () => {
  let component: GuardarDatosVehiculoComponent;
  let fixture: ComponentFixture<GuardarDatosVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarDatosVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardarDatosVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
