import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFallasComponent } from './consultar-fallas.component';

describe('ConsultarFallasComponent', () => {
  let component: ConsultarFallasComponent;
  let fixture: ComponentFixture<ConsultarFallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarFallasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarFallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
