import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteUpdateComponent } from './edit-delete-update.component';

describe('EditDeleteUpdateComponent', () => {
  let component: EditDeleteUpdateComponent;
  let fixture: ComponentFixture<EditDeleteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeleteUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeleteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
