import { TestBed } from '@angular/core/testing';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    const localNotificationsStub = () => ({
      isPresent: alertId => ({}),
      cancel: alertId => ({}),
      schedule: object => ({}),
      getAllScheduled: () => ({}),
      cancelAll: () => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        { provide: LocalNotifications, useFactory: localNotificationsStub }
      ]
    });
    service = TestBed.inject(NotificationService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getScheduledNotifications', () => {
    it('makes expected calls', () => {
      const localNotificationsStub: LocalNotifications = TestBed.inject(
        LocalNotifications
      );
      spyOn(localNotificationsStub, 'getAllScheduled').and.callThrough();
      service.getScheduledNotifications();
      expect(localNotificationsStub.getAllScheduled).toHaveBeenCalled();
    });
  });

  describe('removeAllNotifications', () => {
    it('makes expected calls', () => {
      const localNotificationsStub: LocalNotifications = TestBed.inject(
        LocalNotifications
      );
      spyOn(localNotificationsStub, 'cancelAll').and.callThrough();
      service.removeAllNotifications();
      expect(localNotificationsStub.cancelAll).toHaveBeenCalled();
    });
  });
});
