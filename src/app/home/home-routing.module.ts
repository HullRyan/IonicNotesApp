import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'notes',
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
