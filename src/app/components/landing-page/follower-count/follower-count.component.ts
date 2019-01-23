import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-follower-count',
  templateUrl: './follower-count.component.html',
  styleUrls: ['./follower-count.component.css']
})
export class FollowerCountComponent implements OnInit {

  public _twitchTotalFollowers$: Observable<number>;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    // Grab the Twitch Followers
    this._twitchTotalFollowers$ = this._twitchService.getTotalFollowers();
  }
}
