import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  player: Player;

  constructor(
    private router: Router,
    private playerService: PlayerService
    ) { }

  editPlayer() {
    this.playerService.playerDetail = this.player;
    this.router.navigate(['/edit']);
  }

  ngOnInit() {
    this.player = this.playerService.playerDetail;
  }

}
