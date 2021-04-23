import { NoteService } from 'src/app/services/note.service';
import { AngularFireModule } from '@angular/fire';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import firebase from "firebase";

export interface User {
  id?: string,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>

  constructor(private firestore: AngularFirestore,
              private afAuth: AngularFireAuth) {
    this.userCollection = firestore.collection<User> ('users');
    this.users = this.userCollection.snapshotChanges().pipe(
      map (actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ... data};
        })
      })
    )
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
        result => {
          console.log("User id after reigstration = "+result.user.uid);
          let user: User = {
            email: value.email,
            id: result.user.uid,
            name: value.name
          };
          this.userCollection.doc(result.user.uid).set(user);
          resolve(result);
        }, error => {
          console.log(error);
          reject(error);
        }
      )
    })
  }
  


  signIn(value) {
    return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
  }

  signOut() {
    this.afAuth.signOut();
  }

  getCurrentUser() {
    if(firebase.auth().currentUser) {
      return firebase.auth().currentUser;
    } else {
      return null;
    }
  }
}
