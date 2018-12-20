import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatDividerModule,
  MatIconModule
} from '@angular/material';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
