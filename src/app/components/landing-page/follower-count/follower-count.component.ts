import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';

@Component({
  selector: 'app-follower-count',
  templateUrl: './follower-count.component.html',
  styleUrls: ['./follower-count.component.css']
})
export class FollowerCountComponent implements OnInit {

  private _channelName: String = 'imgenericusername1';
  public _twitchTotalFollowers: number;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    // Grab the Twitch Followers
    this._twitchService.getTotalFollowers(this._channelName)
      .subscribe(
        twitchTotalFollowers => {
          this._twitchTotalFollowers = twitchTotalFollowers;
        }
      );

  }
}
