import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportresultComponent } from './importresult.component';

describe('ImportresultComponent', () => {
  let component: ImportresultComponent;
  let fixture: ComponentFixture<ImportresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
