import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';
import { TwitchUser } from 'src/app/models/twitch-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  private _channelName: String = 'imgenericusername1';
  public _twitchUser: TwitchUser;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    this._twitchService.getTwitchUser(this._channelName)
      .subscribe(
        twitchUser => {
          this._twitchUser = twitchUser;
        }
      );
  }

}
