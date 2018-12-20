import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';

const routes: Routes = [
  {path: '', component: PlayerListComponent, pathMatch: 'full'},
  {path: 'details', component: PlayerDetailComponent},
  {path: 'edit', component: PlayerEditComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
