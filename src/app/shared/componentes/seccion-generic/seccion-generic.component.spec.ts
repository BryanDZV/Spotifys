import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionGenericComponent } from './seccion-generic.component';

describe('SeccionGenericComponent', () => {
  let component: SeccionGenericComponent;
  let fixture: ComponentFixture<SeccionGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionGenericComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeccionGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
