import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorporatedComponent } from './incorporated.component';

describe('IncorporatedComponent', () => {
  let component: IncorporatedComponent;
  let fixture: ComponentFixture<IncorporatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorporatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorporatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
