import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarDesasociarComponent } from './asociar-desasociar.component';

describe('AsociarDesasociarComponent', () => {
  let component: AsociarDesasociarComponent;
  let fixture: ComponentFixture<AsociarDesasociarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsociarDesasociarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsociarDesasociarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
