import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexistenteComponent } from './userexistente.component';

describe('UserexistenteComponent', () => {
  let component: UserexistenteComponent;
  let fixture: ComponentFixture<UserexistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserexistenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserexistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
