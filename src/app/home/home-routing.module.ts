import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('../pages/notes-list/notes-list.module').then( m => m.NotesListPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('../pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
  {
    path: 'note/:id',
    loadChildren: () => import('../pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
