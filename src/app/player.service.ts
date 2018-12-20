import { Injectable } from '@angular/core';
import { Player } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  uniqueID = 0;
  playerDetail: Player;

  getUniqueID(): number {
    return this.uniqueID++;
  }
}
