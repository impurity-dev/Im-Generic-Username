import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';
import { TwitchUser } from 'src/app/models/twitch-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-count',
  templateUrl: './view-count.component.html',
  styleUrls: ['./view-count.component.css']
})
export class ViewCountComponent implements OnInit {

  public _twitchUser$: Observable<TwitchUser>;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    // Grab the Twitch User
    this._twitchUser$ = this._twitchService.getUser();
  }

}
