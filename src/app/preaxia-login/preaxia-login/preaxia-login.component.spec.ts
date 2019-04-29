import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreaxiaLoginComponent } from './preaxia-login.component';

describe('PreaxiaLoginComponent', () => {
  let component: PreaxiaLoginComponent;
  let fixture: ComponentFixture<PreaxiaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreaxiaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreaxiaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
