import { Note } from './../../services/note.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NoteDetailsPage } from './note-details.page';

describe('NoteDetailsPage', () => {
  let component: NoteDetailsPage;
  let fixture: ComponentFixture<NoteDetailsPage>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } }
    });
    const routerStub = () => ({ navigateByUrl: () => ({}) });
    const noteServiceStub = () => ({
      getNote: id => ({ subscribe: f => f({}) }),
      addNote: note => ({ then: () => ({}) }),
      deleteNote: id => ({ then: () => ({}) }),
      updateNote: note => ({ then: () => ({}) })
    });
    const notificationServiceStub = () => ({
      setSingleNotification: (title, value, notifId) => ({}),
      setRecurringNotificationDay: (title, notifId) => ({}),
      setRecurringNotificationWeek: (title, notifId) => ({}),
      setRecurringNotificationMonth: (title, notifId) => ({}),
      setSingleNotificationTest: (title, notifId) => ({}),
      removeSpecificNotifcation: notifId => ({})
    });
    const toastControllerStub = () => ({
      create: object => ({ then: () => ({}) })
    });
    const alertControllerStub = () => ({
      create: object => ({ then: () => ({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NoteDetailsPage],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: NoteService, useFactory: noteServiceStub },
        { provide: NotificationService, useFactory: notificationServiceStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: AlertController, useFactory: alertControllerStub }
      ]
    });
    fixture = TestBed.createComponent(NoteDetailsPage);
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
      spyOn(noteServiceStub, 'getNote').and.callThrough();
      component.ngOnInit();
      expect(noteServiceStub.getNote).toHaveBeenCalled();
    });
  });

  describe('addNote', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const noteServiceStub: NoteService = fixture.debugElement.injector.get(
        NoteService
      );
      spyOn(component, 'presentToast').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      spyOn(noteServiceStub, 'addNote').and.callThrough();
      component.addNote();
      expect(component.presentToast).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
      expect(noteServiceStub.addNote).toHaveBeenCalled();
    });
  });

  describe('deleteNote', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const noteServiceStub: NoteService = fixture.debugElement.injector.get(
        NoteService
      );
      spyOn(component, 'presentToast').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      spyOn(noteServiceStub, 'deleteNote').and.callThrough();
      component.deleteNote();
      expect(component.presentToast).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
      expect(noteServiceStub.deleteNote).toHaveBeenCalled();
    });
  });

  describe('updateNote', () => {
    it('makes expected calls', () => {
      const noteServiceStub: NoteService = fixture.debugElement.injector.get(
        NoteService
      );
      spyOn(component, 'presentToast').and.callThrough();
      spyOn(noteServiceStub, 'updateNote').and.callThrough();
      component.updateNote();
      expect(component.presentToast).toHaveBeenCalled();
      expect(noteServiceStub.updateNote).toHaveBeenCalled();
    });
  });

  describe('showPrompt', () => {
    it('makes expected calls', () => {
      const notificationServiceStub: NotificationService = fixture.debugElement.injector.get(
        NotificationService
      );
      const alertControllerStub: AlertController = fixture.debugElement.injector.get(
        AlertController
      );
      spyOn(notificationServiceStub, 'setSingleNotification').and.callThrough();
      spyOn(
        notificationServiceStub,
        'setRecurringNotificationDay'
      ).and.callThrough();
      spyOn(
        notificationServiceStub,
        'setRecurringNotificationWeek'
      ).and.callThrough();
      spyOn(
        notificationServiceStub,
        'setRecurringNotificationMonth'
      ).and.callThrough();
      spyOn(
        notificationServiceStub,
        'setSingleNotificationTest'
      ).and.callThrough();
      spyOn(
        notificationServiceStub,
        'removeSpecificNotifcation'
      ).and.callThrough();
      spyOn(alertControllerStub, 'create').and.callThrough();
      component.showPrompt();
      expect(notificationServiceStub.setSingleNotification).toHaveBeenCalled();
      expect(
        notificationServiceStub.setRecurringNotificationDay
      ).toHaveBeenCalled();
      expect(
        notificationServiceStub.setRecurringNotificationWeek
      ).toHaveBeenCalled();
      expect(
        notificationServiceStub.setRecurringNotificationMonth
      ).toHaveBeenCalled();
      expect(
        notificationServiceStub.setSingleNotificationTest
      ).toHaveBeenCalled();
      expect(
        notificationServiceStub.removeSpecificNotifcation
      ).toHaveBeenCalled();
      expect(alertControllerStub.create).toHaveBeenCalled();
    });
  });
});
