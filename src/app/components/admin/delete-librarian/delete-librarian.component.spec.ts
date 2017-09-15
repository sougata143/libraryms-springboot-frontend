import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLibrarianComponent } from './delete-librarian.component';

describe('DeleteLibrarianComponent', () => {
  let component: DeleteLibrarianComponent;
  let fixture: ComponentFixture<DeleteLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
