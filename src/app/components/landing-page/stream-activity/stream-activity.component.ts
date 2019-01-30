import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { Observable } from 'rxjs';
import { TwitchStream } from 'src/app/models/twitch/twitch-stream';

@Component({
  selector: 'app-stream-activity',
  templateUrl: './stream-activity.component.html',
  styleUrls: ['./stream-activity.component.css']
})
export class StreamActivityComponent implements OnInit {

  public _twitchStream$: Observable<TwitchStream>;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    this._twitchStream$ = this._twitchService.getStream();
  }

}
