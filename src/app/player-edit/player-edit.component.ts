import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {

  player: Player;

  constructor(
    private router: Router,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.playerService.playerDetail;
  }

}
