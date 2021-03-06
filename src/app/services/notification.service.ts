import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications';
import { Injectable } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface notifcation {
  alertId: number;
  noteId: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private localNotifications: LocalNotifications
  )
  {}

  setSingleNotification(noteTitle: string, time: number, alertId: number) {
    if (this.localNotifications.isScheduled(alertId)) {
      this.localNotifications.cancel(alertId);
    }
    this.localNotifications.schedule({
      id: alertId,
      text:
        'Hey, looks like its time to work on ' +
        noteTitle +
        '.\nClick here to open!',
      trigger: { at: new Date(new Date().getTime() + time) },
      led: 'FF0000',
      //icon: ''
    });
  }

  setRecurringNotificationDay(noteTitle: string, alertId: number) {
    if (this.localNotifications.isScheduled(alertId)) {
      this.localNotifications.cancel(alertId);
    }
    this.localNotifications.schedule({
      id: alertId,
      text:
        'Hey, looks like its time to work on ' +
        noteTitle +
        '.\nClick here to open!',
      trigger: { every: ELocalNotificationTriggerUnit.DAY },
      led: 'FF0000',
      //icon: ''
    });
  }

  setRecurringNotificationWeek(noteTitle: string, alertId: number) {
    if (this.localNotifications.isScheduled(alertId)) {
      this.localNotifications.cancel(alertId);
    }
    this.localNotifications.schedule({
      id: alertId,
      text:
        'Hey, looks like its time to work on ' +
        noteTitle +
        '.\nClick here to open!',
      trigger: { every: ELocalNotificationTriggerUnit.WEEK },
      led: 'FF0000',
      //icon: ''
    });
  }

  setRecurringNotificationMonth(noteTitle: string, alertId: number) {
    if (this.localNotifications.isScheduled(alertId)) {
      this.localNotifications.cancel(alertId);
    }
    this.localNotifications.schedule({
      id: alertId,
      text:
        'Hey, looks like its time to work on ' +
        noteTitle +
        '.\nClick here to open!',
      trigger: { every: ELocalNotificationTriggerUnit.MONTH },
      led: 'FF0000',
      //icon: ''
    });
  }

  getScheduledNotifications() {
    return this.localNotifications.getAllScheduled();
  }

  getSPecificScheduledNotifications(alertId: number) {
    if (this.localNotifications.isScheduled(alertId)) {
    return this.localNotifications.get(alertId);
    }
  }

  removeSpecificNotifcation(alertId: number) {
    if (this.localNotifications.isScheduled(alertId)) {
      this.localNotifications.cancel(alertId);
    }
  }

  removeAllNotifications() {
    this.localNotifications.cancelAll();
  }

  setSingleNotificationTest(noteTitle: string, alertId: number) {
    if (this.localNotifications.isScheduled(alertId)) {
      this.localNotifications.cancel(alertId);
    }
    this.localNotifications.schedule({
      id: alertId,
      text:
        '*Test* Hey, looks like its time to work on ' +
        noteTitle +
        '.\nClick here to open!',
      trigger: { at: new Date(new Date().getTime() + 5000) },
      led: 'FF0000',
      //icon: ''
    });
  }
}
