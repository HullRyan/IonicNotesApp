import { NotesListPage } from './../pages/notes-list/notes-list.page';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { promise } from 'selenium-webdriver';
import { identifierName } from '@angular/compiler';

export interface Note {
  id?: string,
  title: string,
  body: string,
  createdOn: Date, 
  updatedOn: Date,
  colorTag: string
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Observable<Note[]>;
  private noteCollection: AngularFirestoreCollection<Note>;

  constructor(private firestore: AngularFirestore) { 
    this.noteCollection = this.firestore.collection<Note>('notes', 
    ref => ref.orderBy('createdOn', 'desc'));
    this.notes = this.noteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id  = a.payload.doc.id;
          return {id, ...data};
        })
      })
    );
  }

  getNotes(): Observable<Note[]> {
    return this.notes;
  }

  getNote(id: string): Observable<Note> {
    return this.noteCollection.doc<Note>(id).valueChanges().pipe(
      take(1),
      map(note => {
        note.id = id;
        return note;
      })
    )
  }

  addNote(note: Note): Promise<DocumentReference> {
    return this.noteCollection.add(note);
  }

  deleteNote(id: string): Promise<void>  {
    return this.noteCollection.doc(id).delete();
  }

  updateNote(note: Note): Promise<void> {
    return this.noteCollection.doc(note.id).update({
      title: note.title,
      body: note.body,
      createdOn: note.createdOn, 
      updatedOn: new Date(),
      colorTag: note.colorTag
    })
  }

}