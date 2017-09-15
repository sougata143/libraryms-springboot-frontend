import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBooksComponent } from './issue-books.component';

describe('IssueBooksComponent', () => {
  let component: IssueBooksComponent;
  let fixture: ComponentFixture<IssueBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
