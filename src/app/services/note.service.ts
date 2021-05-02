import { AuthenticateService } from './authenticate.service';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Note {
  id?: string;
  title: string;
  body: string;
  createdOn: Date;
  updatedOn: Date;
  colorTag: string;
  notifId: number;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Observable<Note[]>;
  private noteCollection: AngularFirestoreCollection<Note>;

  constructor(
    private firestore: AngularFirestore,
    private authenticateService: AuthenticateService
  ) {
    const currentUser = this.authenticateService.getCurrentUser();

    if (currentUser) {
      this.refreshNotesCollection(currentUser.uid);
      console.log(currentUser.uid);
    }
  }

  refreshNotesCollection(userId) {
    this.noteCollection = this.firestore
      .collection('users')
      .doc(userId)
      .collection<Note>('notes', (ref) => ref.orderBy('updatedOn', 'desc'));
    this.notes = this.noteCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getNotes(): Observable<Note[]> {
    return this.notes;
  }

  getNote(id: string): Observable<Note> {
    return this.noteCollection
      .doc<Note>(id)
      .valueChanges()
      .pipe(
        take(1),
        map((note) => {
          note.id = id;
          return note;
        })
      );
  }

  addNote(note: Note): Promise<DocumentReference> {
    note.notifId = this.generateNotificationId();
    return this.noteCollection.add(note);
  }

  deleteNote(id: string): Promise<void> {
    return this.noteCollection.doc(id).delete();
  }

  updateNote(note: Note): Promise<void> {
    return this.noteCollection.doc(note.id).update({
      title: note.title,
      body: note.body,
      createdOn: note.createdOn,
      updatedOn: new Date(),
      colorTag: note.colorTag,
    });
  }

  generateNotificationId() {
    return Math.floor(Math.random() * 88888889 + 10000000);
  }
}
