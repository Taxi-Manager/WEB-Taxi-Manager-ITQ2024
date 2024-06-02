import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla3DTaxiScanComponent } from './pantalla3-d-taxi-scan.component';

describe('Pantalla3DTaxiScanComponent', () => {
  let component: Pantalla3DTaxiScanComponent;
  let fixture: ComponentFixture<Pantalla3DTaxiScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla3DTaxiScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pantalla3DTaxiScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
