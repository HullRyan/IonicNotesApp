import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService, Note } from 'src/app/services/note.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  note: Note = {
    title: '',
    body: '',
    createdOn: new Date, 
    updatedOn: new Date,
    colorTag: '' 
  }

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService,
    private toastCtrl: ToastController, private router: Router, 
    private notificationService: NotificationService) { }

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
      this.router.navigateByUrl('/');
      this.presentToast('Note created!');
    }, error => {
      this.presentToast('Error creating note!');
    });
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id).then(() => {
      this.router.navigateByUrl('/');
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
}
