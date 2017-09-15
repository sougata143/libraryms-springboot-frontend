import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIssueBooksComponent } from './view-issue-books.component';

describe('ViewIssueBooksComponent', () => {
  let component: ViewIssueBooksComponent;
  let fixture: ComponentFixture<ViewIssueBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIssueBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIssueBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
