import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreaxiaNavComponent } from './preaxia-nav.component';

describe('PreaxiaNavComponent', () => {
  let component: PreaxiaNavComponent;
  let fixture: ComponentFixture<PreaxiaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreaxiaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreaxiaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
