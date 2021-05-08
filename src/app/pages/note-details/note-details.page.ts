import { ModalController } from '@ionic/angular';
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService, Note } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {
  note: Note = {
    title: '',
    body: '',
    createdOn: new Date(),
    updatedOn: new Date(),
    colorTag: '',
    notifId: 0,
  };

  dataReturned: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private toastCtrl: ToastController,
    private router: Router,
    private notificationService: NotificationService,
    private alertController: AlertController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.noteService.getNote(id).subscribe((note) => {
        this.note = note;
      });
    }
  }

  addNote() {
    this.noteService.addNote(this.note).then(
      () => {
        this.router.navigateByUrl('notes');
        this.presentToast('Note created!');
      },
      (error) => {
        this.presentToast('Error creating note!');
      }
    );
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id).then(
      () => {
        this.presentToast('Note deleted!');
      },
      (error) => {
        this.presentToast('Error deleting note!');
      }
    );
    this.router.navigateByUrl('notes');
  }

  updateNote() {
    this.noteService.updateNote(this.note).then(
      () => {
        this.presentToast('Note updated!');
      },
      (error) => {
        this.presentToast('Error updating note!');
      }
    );
  }

  presentToast(text) {
    this.toastCtrl
      .create({
        message: text,
        duration: 2000,
      })
      .then((toast) => toast.present());
  }

  scheduleNoteReminder(value: number) {
    this.notificationService.setSingleNotification(
      this.note.title,
      value,
      this.note.notifId
    );
  }

  showColorPrompt() {
    this.alertController
      .create({
        header: 'Set Note Color',
        inputs: [
          {
            type: 'radio',
            label: 'Green',
            value: 'green',
          },
          {
            type: 'radio',
            label: 'Blue',
            value: 'blue',
          },
          {
            type: 'radio',
            label: 'Purple',
            value: 'purple',
          },
          {
            type: 'radio',
            label: 'Orange',
            value: 'orange',
          },
          {
            type: 'radio',
            label: 'Yellow',
            value: 'yellow',
          },
          {
            type: 'radio',
            label: 'Red',
            value: 'red',
          },
          {
            type: 'radio',
            label: 'None',
            value: '',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: (data: any) => {
              console.log('Canceled', data);
            },
          },
          {
            text: 'Set Color!',
            handler: (data: any) => {
              if (data == 'green') {
                this.note.colorTag = 'green';
              }
              if (data == 'blue') {
                this.note.colorTag = 'blue';
              }
              if (data == 'purple') {
                this.note.colorTag = 'purple';
              }
              if (data == 'orange') {
                this.note.colorTag = 'orange';
              }
              if (data == 'yellow') {
                this.note.colorTag = 'yellow';
              }
              if (data == '') {
                this.note.colorTag = '';
              }
              if (data == 'red') {
                this.note.colorTag = 'danger';
              }
              console.log('Selected Information', data);
              if (this.note.id) {
                this.updateNote();
              }
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  showPrompt() {
    this.alertController
      .create({
        header: 'Set Reminder',
        inputs: [
          {
            type: 'radio',
            label: 'One Day',
            value: '1',
          },
          {
            type: 'radio',
            label: 'One Week',
            value: '2',
          },
          {
            type: 'radio',
            label: 'Every Day',
            value: '3',
          },
          {
            type: 'radio',
            label: 'Every Week',
            value: '4',
          },
          {
            type: 'radio',
            label: 'Every Month',
            value: '5',
          },
          {
            type: 'radio',
            label: 'Test, 5 seconds',
            value: '6',
          },
          {
            type: 'radio',
            label: 'Clear Notifications',
            value: '7',
          },
          {
            type: 'radio',
            label: 'Show All Notifications',
            value: '8',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: (data: any) => {
              console.log('Canceled', data);
            },
          },
          {
            text: 'Done!',
            handler: (data: any) => {
              if (data == 1) {
                this.notificationService.setSingleNotification(
                  this.note.title,
                  8.64e7,
                  this.note.notifId
                );
              }
              if (data == 2) {
                this.notificationService.setSingleNotification(
                  this.note.title,
                  6.048e8,
                  this.note.notifId
                );
              }
              if (data == 3) {
                this.notificationService.setRecurringNotificationDay(
                  this.note.title,
                  this.note.notifId
                );
              }
              if (data == 4) {
                this.notificationService.setRecurringNotificationWeek(
                  this.note.title,
                  this.note.notifId
                );
              }
              if (data == 5) {
                this.notificationService.setRecurringNotificationMonth(
                  this.note.title,
                  this.note.notifId
                );
              }
              if (data == 6) {
                this.notificationService.setSingleNotificationTest(
                  this.note.title,
                  this.note.notifId
                );
              }
              if (data == 7) {
                this.notificationService.removeSpecificNotifcation(
                  this.note.notifId
                );
              }
              if (data == 8) {
                console.log(this.notificationService.getScheduledNotifications);
              }
              console.log('Selected Information', data);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
