import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla3DComponent } from './pantalla3-d.component';

describe('Pantalla3DComponent', () => {
  let component: Pantalla3DComponent;
  let fixture: ComponentFixture<Pantalla3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla3DComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pantalla3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
