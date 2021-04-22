import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'note',
    loadChildren: () => import('./pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
  {
    path: 'note/:id',
    loadChildren: () => import('./pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
