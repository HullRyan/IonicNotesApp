import { Observable } from 'rxjs';
//import { notifcation } from './notification.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage'
import { ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications';
import { Injectable } from '@angular/core';

export interface notifcation {
  alert_id: number
  note_id: string
}

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(private localNotifications:  LocalNotifications
              //private storage: Storage,
              //private notifcations: Observable<notifcation[]>
              ) { }

  setSingleNotification(noteTitle: string, time: number, alert_id: number){
    if (this.localNotifications.isPresent(alert_id)){
      this.localNotifications.cancel(alert_id);
    }
    this.localNotifications.schedule({
      id: alert_id,
      text: "Hey, looks like its time to work on " + noteTitle + 
            ".\nClick here to open!",
      trigger: {at: new Date(new Date().getTime() + time)}, 
      led: 'FF0000'
      //icon: ''
    });
  }

  setRecurringNotificationWeek(noteTitle: string, alert_id: number){
    if (this.localNotifications.isPresent(alert_id)){
      this.localNotifications.cancel(alert_id);
    }
    this.localNotifications.schedule({
      id: alert_id,
      text: "Hey, looks like its time to work on " + noteTitle + 
            ".\nClick here to open!",
      trigger: { every: ELocalNotificationTriggerUnit.WEEK }, 
      led: 'FF0000'
      //icon: ''
    });
  }

  setRecurringNotificationMonth(noteTitle: string, alert_id: number){
    if (this.localNotifications.isPresent(alert_id)){
      this.localNotifications.cancel(alert_id);
    }
    this.localNotifications.schedule({
      id: alert_id,
      text: "Hey, looks like its time to work on " + noteTitle + 
            ".\nClick here to open!",
      trigger: { every: ELocalNotificationTriggerUnit.MONTH }, 
      led: 'FF0000'
      //icon: ''
    });
  }

  getScheduledNotifications(){
    return this.localNotifications.getAllScheduled();
  }

  removeSpecificNotifcation(alert_id: number){
    if(this.localNotifications.isPresent(alert_id)){
      this.localNotifications.cancel(alert_id);
    }
  }

  removeAllNotifications(){
    this.localNotifications.cancelAll;
  }

  setSingleNotificationTest(noteTitle: string, alert_id: number){
    if (this.localNotifications.isPresent(alert_id)){
      this.localNotifications.cancel(alert_id);
    }
    this.localNotifications.schedule({
      id: alert_id,
      text: "*Test* Hey, looks like its time to work on " + noteTitle + 
            ".\nClick here to open!",
      trigger: {at: new Date(new Date().getTime() + 5000)}, 
      led: 'FF0000'
      //icon: ''
    });
  }
}
