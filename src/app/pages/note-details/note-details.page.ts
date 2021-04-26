import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService, Note } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';
import { IonSelect, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})

//@ViewChild('alarmList') selectRef: IonSelect;

export class NoteDetailsPage implements OnInit {

  note: Note = {
    title: '',
    body: '',
    createdOn: new Date, 
    updatedOn: new Date,
    colorTag: '', 
    notifId: 0
  }
  

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService,
    private toastCtrl: ToastController, private router: Router, 
    private notificationService: NotificationService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.noteService.getNote(id).subscribe(note => {
        this.note = note;
      });
    }
  }

  addNote() {
    this.noteService.addNote(this.note).then(() => {
      this.router.navigateByUrl('notes');
      this.presentToast('Note created!');
    }, error => {
      this.presentToast('Error creating note!');
    });
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id).then(() => {
      this.router.navigateByUrl('notes');
      this.presentToast('Note deleted!');
    }, error => {
      this.presentToast('Error deleting note!');
    });
  }

  updateNote() {
    this.noteService.updateNote(this.note).then(() => {
      this.presentToast('Note updated!');
    }, error => {
      this.presentToast('Error updating note!');
    });
  }

  presentToast(text) {
    this.toastCtrl.create({
      message: text,
      duration: 2000
    }).then(toast => toast.present());
  }

  scheduleNoteReminder(value: number){
    this.notificationService.setSingleNotification(this.note.title, value, this.note.notifId);
  }


  showPrompt() {
    this.alertController.create({
      header: 'Set Reminder',
      inputs: [
        {
          type: 'radio',
          label: 'One Day',
          value: '1'
        },
        {
          type: 'radio',
          label: 'One Week',
          value: '2'
        },
        {
          type: 'radio',
          label: 'Every Day',
          value: '3'
        },
        {
          type: 'radio',
          label: 'Every Week',
          value: '4'
        },
        {
          type: 'radio',
          label: 'Every Month',
          value: '5'
        },
        {
          type: 'radio',
          label: 'Test, 5 seconds',
          value: '6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Done!',
          handler: (data: any) => {
            if(data == 6){
              this.notificationService.setSingleNotificationTest(this.note.title, this.note.notifId);
            }
            console.log('Selected Information', data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}
