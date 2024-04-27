import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConductorComponent } from './crear-conductor.component';

describe('CrearConductorComponent', () => {
  let component: CrearConductorComponent;
  let fixture: ComponentFixture<CrearConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearConductorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
