import { Router } from '@angular/router';
import { AuthenticateService } from './../../services/authenticate.service';
import { Observable } from 'rxjs';
import { NoteService, Note } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.page.html',
  styleUrls: ['./notes-list.page.scss'],
})
export class NotesListPage implements OnInit {
  private notes: Observable<Note[]>;

  constructor(
    private noteService: NoteService,
    private authService: AuthenticateService,
    private router: Router,
    private menu: MenuController
  ) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  getShortBody(s: string) {
    let body = this.extractContent(s);
    if (body.length > 80) {
      body = body.substring(0, 80);
    }
    return body;
  }

  extractContent(s) {
    const span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  }

  signout() {
    this.authService.signOut();
    this.router.navigate(['home']).then(() => window.location.reload());
  }
}
