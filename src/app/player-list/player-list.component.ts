import { Component, OnInit } from '@angular/core';
import { Player, Race, Gender, Class } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  constructor(
    private router: Router,
    private playerService: PlayerService
    ) {}

  list: Player[] = [
    {
      id: this.playerService.getUniqueID(),
      name: 'Baulder',
      race: Race.Human,
      class: Class.Warrior,
      gender: Gender.Male,
      level: 20,
      height: `6'5"`,
      weight: 215,
      stats: {
        str: 18,
        dex: 13,
        con: 17,
        int: 9,
        wis: 10,
        cha: 15
      },
      background: 'Born in a small town. Yep.'
    },
    {
      id: this.playerService.getUniqueID(),
      name: 'Xavier',
      race: Race.Gnome,
      class: Class.Warlock,
      gender: Gender.Male,
      level: 20,
      height: `3'2"`,
      weight: 95,
      stats: {
        str: 12,
        dex: 17,
        con: 13,
        int: 18,
        wis: 17,
        cha: 15
      },
      background: 'Grew straight out of the ground!'
    }
  ];

  addPlayer() {
    this.playerService.playerDetail = null;
    this.router.navigate(['/edit']);
  }

  viewPlayer(player: Player) {
    this.playerService.playerDetail = player;
    this.router.navigate(['/details']);
  }

  ngOnInit() {
  }

}
