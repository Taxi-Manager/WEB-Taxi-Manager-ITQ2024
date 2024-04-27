import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarDocumentosComponent } from './verificar-documentos.component';

describe('VerificarDocumentosComponent', () => {
  let component: VerificarDocumentosComponent;
  let fixture: ComponentFixture<VerificarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarDocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
