import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const redirectLoggedInToNotes = () => redirectLoggedInTo(['/notes']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    ...canActivate(redirectLoggedInToNotes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    ...canActivate(redirectUnauthorizedToLogin),
    path: 'notes',
    loadChildren: () =>
      import('./pages/notes-list/notes-list.module').then(
        (m) => m.NotesListPageModule
      ),
  },
  {
    ...canActivate(redirectUnauthorizedToLogin),
    path: 'note',
    loadChildren: () =>
      import('./pages/note-details/note-details.module').then(
        (m) => m.NoteDetailsPageModule
      ),
  },
  {
    ...canActivate(redirectUnauthorizedToLogin),
    path: 'note/:id',
    loadChildren: () =>
      import('./pages/note-details/note-details.module').then(
        (m) => m.NoteDetailsPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
