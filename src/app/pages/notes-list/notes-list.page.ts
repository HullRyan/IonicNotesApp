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

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

}
