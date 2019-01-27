import { Component, OnInit } from '@angular/core';
import { SteamGame } from 'src/app/models/steam/steam-game';
import { SteamService } from 'src/app/services/steam/steam.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit {

  public _games$: Observable<SteamGame[]>;

  constructor(private _steamService: SteamService) {}

  ngOnInit(): void {
    this._games$ = this._steamService.getLibrary();
  }
}
