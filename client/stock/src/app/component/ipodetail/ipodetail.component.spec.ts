import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpodetailComponent } from './ipodetail.component';

describe('IpodetailComponent', () => {
  let component: IpodetailComponent;
  let fixture: ComponentFixture<IpodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
