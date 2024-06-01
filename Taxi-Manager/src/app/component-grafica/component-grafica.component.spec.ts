import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGraficaComponent } from './component-grafica.component';

describe('ComponentGraficaComponent', () => {
  let component: ComponentGraficaComponent;
  let fixture: ComponentFixture<ComponentGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentGraficaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
