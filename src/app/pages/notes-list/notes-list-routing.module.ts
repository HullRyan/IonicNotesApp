import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesListPage } from './notes-list.page';

const routes: Routes = [
  {
    path: '',
    component: NotesListPage
  },
  {
  path: 'home',
  loadChildren: () => import("../../home/home.module").then(m => m.HomePageModule)
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesListPageRoutingModule {}
