import { Component } from '@angular/core';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent {
  public games: string[][] = [
    [
      'AOE II',
      'Among The Sleep',
      'Astroneer',
      'Battlerite',
      'Bioshock 1 & 2',
      'Borderlands 2 & Pre-Sequel'
    ],
    [
      'Chivalry Medieval Warfare',
      'Counter-Strike Global Offensive',
      'Dark Souls 3',
      'DayZ',
      'Dead By Daylight',
      'Deceit'
    ],
    [
      'Dolphin Emulator: Paper Mario, LOZ Windwaker',
      'The Elder Scrolls V Skyrim',
      'Fallout 3, New Vegas, & 4',
      'The Forest',
      'FTL Faster Than Light',
      'Golf It'
    ],
    [
      'GTA V',
      'Human Fall Flat',
      'Killing Floor 2',
      'Left For Dead 2',
      'Natural Selection 2',
      'No Man\'s Sky'
    ],
    [
      'PAYDAY 2',
      'PUBG',
      'Q.U.B.E',
      'Rampage Knights',
      'Resident Evil 5',
      'Rocket League'
    ],
    [
      'SCP: Secret Laboratory',
      'Sid Meier\'s Civilization V',
      'Slap City',
      'Starbound',
      'Subnautica',
      'Surgeon Simulator: Experience Reality'
    ]
  ];
}
