import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteDetailsPageRoutingModule } from './note-details-routing.module';

import { NoteDetailsPage } from './note-details.page';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteDetailsPageRoutingModule,
    QuillModule.forRoot(),
  ],
  declarations: [NoteDetailsPage]
})
export class NoteDetailsPageModule {}
