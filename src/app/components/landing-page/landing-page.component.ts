import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';
import { TwitchUser } from 'src/app/models/twitch-user';
import { Observable } from 'rxjs';
import { TwitchFollower } from 'src/app/models/twitch-follower';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  private _channelName: String = 'imgenericusername1';
  public _twitchUser: TwitchUser;
  public _twitchTotalFollowers: number;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    // Grab the Twitch User
    this._twitchService.getUser(this._channelName)
      .subscribe(
        twitchUser => {
          this._twitchUser = twitchUser;
        }
      );

    // Grab the Twitch Followers
    this._twitchService.getTotalFollowers(this._channelName)
      .subscribe(
        twitchTotalFollowers => {
          this._twitchTotalFollowers = twitchTotalFollowers;
        }
      );

  }

}
