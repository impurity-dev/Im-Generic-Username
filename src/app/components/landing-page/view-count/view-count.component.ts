import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';
import { StreamerConstants } from 'src/app/constants/streamer-constants';

@Component({
  selector: 'app-view-count',
  templateUrl: './view-count.component.html',
  styleUrls: ['./view-count.component.css']
})
export class ViewCountComponent implements OnInit {

  protected _viewCount: number;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    // Grab the Twitch User
    this._twitchService.getUser(StreamerConstants.CHANNEL_NAME)
      .subscribe(
        twitchUser => {
          this._viewCount = twitchUser.view_count;
        }
      );
  }

}
