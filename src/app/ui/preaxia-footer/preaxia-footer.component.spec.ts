import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreaxiaFooterComponent } from './preaxia-footer.component';

describe('PreaxiaFooterComponent', () => {
  let component: PreaxiaFooterComponent;
  let fixture: ComponentFixture<PreaxiaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreaxiaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreaxiaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
