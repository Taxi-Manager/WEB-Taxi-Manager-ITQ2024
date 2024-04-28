import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoFuncionRegistroComponent } from './acesso-funcion-registro.component';

describe('AcessoFuncionRegistroComponent', () => {
  let component: AcessoFuncionRegistroComponent;
  let fixture: ComponentFixture<AcessoFuncionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoFuncionRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcessoFuncionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
