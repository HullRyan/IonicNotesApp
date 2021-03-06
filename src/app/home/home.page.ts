/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';

//Using home-page as login

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //Create validation form for login
  validations_form: FormGroup;
  errorMessage = '';
  //Messages for user when not following validation form
  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
    password: [
      { type: 'required', message: 'You must provide a password' },
      {
        type: 'minlength',
        message: 'The minimum length of your password must be 6',
      },
    ],
  };

  constructor(
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notesService: NoteService
  ) {}
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  login(value) {
    this.authService.signIn(value).then(
      (res) => {
        //res => response for the user credentials
        //Update the notes collection
        this.notesService.refreshNotesCollection(res.user.uid);
        //Navigate to the list of notes
        this.router.navigate(['/notes']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
