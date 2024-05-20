import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFallasComponent } from './crear-fallas.component';

describe('CrearFallasComponent', () => {
  let component: CrearFallasComponent;
  let fixture: ComponentFixture<CrearFallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFallasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearFallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
