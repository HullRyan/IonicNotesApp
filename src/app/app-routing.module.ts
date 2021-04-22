import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', 
    loadChildren: () => import('./pages/notes-list/notes-list.module').then( m => m.NotesListPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
  {
    path: 'note/:id',
    loadChildren: () => import('./pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
