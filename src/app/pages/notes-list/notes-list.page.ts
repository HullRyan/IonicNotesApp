import { Router } from '@angular/router';
import { AuthenticateService } from './../../services/authenticate.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NoteService, Note } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.page.html',
  styleUrls: ['./notes-list.page.scss'],
})
export class NotesListPage implements OnInit {

  private notes: Observable<Note[]>;

  constructor(private noteService: NoteService,
              private authService: AuthenticateService,
              private router: Router) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  getShortBody(body: string){
    if (body.length > 40){
      body = body.substr(0, 40) + "...";
    }
    return body;
  }

  signout(){
    this.authService.signOut();
    this.router.navigate(['home']).then(() => window.location.reload());
  }

}
