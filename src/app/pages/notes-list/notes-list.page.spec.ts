import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './../../services/authenticate.service';
import { NoteService } from './../../services/note.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NotesListPage } from './notes-list.page';

describe('NotesListPage', () => {
  let component: NotesListPage;
  let fixture: ComponentFixture<NotesListPage>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array) => ({ then: () => ({}) }) });
    const authenticateServiceStub = () => ({ signOut: () => ({}) });
    const noteServiceStub = () => ({ getNotes: () => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NotesListPage],
      providers: [
        { provide: AuthenticateService, useFactory: authenticateServiceStub },
        { provide: NoteService, useFactory: noteServiceStub },
      ],
    });
    fixture = TestBed.createComponent(NotesListPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const noteServiceStub: NoteService = fixture.debugElement.injector.get(
        NoteService
      );
      spyOn(noteServiceStub, 'getNotes').and.callThrough();
      component.ngOnInit();
      expect(noteServiceStub.getNotes).toHaveBeenCalled();
    });
  });

  describe('signout', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const authenticateServiceStub: AuthenticateService = fixture.debugElement.injector.get(
        AuthenticateService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(authenticateServiceStub, 'signOut').and.callThrough();
      component.signout();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(authenticateServiceStub.signOut).toHaveBeenCalled();
    });
  });
});
