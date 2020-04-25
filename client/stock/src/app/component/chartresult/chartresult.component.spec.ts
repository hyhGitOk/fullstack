import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartresultComponent } from './chartresult.component';

describe('ChartresultComponent', () => {
  let component: ChartresultComponent;
  let fixture: ComponentFixture<ChartresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
