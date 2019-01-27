import { Component, Input } from '@angular/core';
import { SteamGame } from 'src/app/models/steam/steam-game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
  @Input() public appId: number;
  @Input() public name: string;
  @Input() public playtimeForever: number;
  @Input() public imgIconUrl: string;
  @Input() public imgLogoUrl: string;
  public hasBrokenImage: boolean;

  /**
   * Fires if the image url does not exist
   * Notifies the template to change
   */
  public imageNotFound(): void {
    this.hasBrokenImage = true;
  }
}
