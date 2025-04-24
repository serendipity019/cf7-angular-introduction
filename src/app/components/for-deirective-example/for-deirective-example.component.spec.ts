import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDeirectiveExampleComponent } from './for-deirective-example.component';

describe('ForDeirectiveExampleComponent', () => {
  let component: ForDeirectiveExampleComponent;
  let fixture: ComponentFixture<ForDeirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDeirectiveExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForDeirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
