import { LocalNotifications, ELocalNotificationTriggerUnit  } from '@ionic-native/local-notifications';
import { Injectable } from '@angular/core';

export interface notifcation {
  alert_id: number
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private localNotifications: typeof LocalNotifications) { }

  setSingleNotification(message: string, time: number, alert_id: number){
    
    this.localNotifications.schedule({
      id: alert_id,
      text: "Hey, looks like its time to work on " + message + 
            ".\nClick here to open!",
      trigger: {at: new Date(new Date().getTime() + time)}, 
      led: 'FF0000'
      //icon: ''
    });
  }

  setRecurringNotification(message: string, alert_id: number){
    this.localNotifications.schedule({
      id: alert_id,
      text: "Hey, looks like its time to work on " + message + 
            ".\nClick here to open!",
      trigger: { every: ELocalNotificationTriggerUnit.WEEK }, 
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
}
