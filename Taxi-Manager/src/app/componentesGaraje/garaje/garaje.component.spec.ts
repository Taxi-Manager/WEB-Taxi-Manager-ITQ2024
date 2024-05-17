import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarajeComponent } from './garaje.component';

describe('GarajeComponent', () => {
  let component: GarajeComponent;
  let fixture: ComponentFixture<GarajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
