import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirDocumentosComponent } from './subir-documentos.component';

describe('SubirDocumentosComponent', () => {
  let component: SubirDocumentosComponent;
  let fixture: ComponentFixture<SubirDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirDocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubirDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
