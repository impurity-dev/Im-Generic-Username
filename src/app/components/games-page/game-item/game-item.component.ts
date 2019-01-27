import { Component, Input } from '@angular/core';
import { SteamGame } from 'src/app/models/steam/steam-game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
  @Input() public name: string;
}
