import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarMantenimientoComponent } from './programar-mantenimiento.component';

describe('ProgramarMantenimientoComponent', () => {
  let component: ProgramarMantenimientoComponent;
  let fixture: ComponentFixture<ProgramarMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramarMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramarMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
