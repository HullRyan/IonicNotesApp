import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: () => ({}) });
    const navControllerStub = () => ({});
    const alertControllerStub = () => ({});
    const authenticateServiceStub = () => ({
      signIn: value => ({ then: () => ({}) })
    });
    const routerStub = () => ({ navigate: () => ({}) });
    const noteServiceStub = () => ({ refreshNotesCollection: () => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomePage],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: NavController, useFactory: navControllerStub },
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: AuthenticateService, useFactory: authenticateServiceStub },
        { provide: NoteService, useFactory: noteServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
});
