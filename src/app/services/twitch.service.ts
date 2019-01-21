import { Injectable } from '@angular/core';
import { TwitchUser } from '../models/twitch-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  private BASE_URL: String = 'https://twitch-web-integrator.herokuapp.com/';

  constructor(private _http: HttpClient) { }

  public getTwitchUser(channelName: String): Observable<TwitchUser> {
    return this._http.get<TwitchUser>(this.BASE_URL + 'user?channelName=' + channelName);
  }
}
