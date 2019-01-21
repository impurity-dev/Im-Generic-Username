import { Injectable } from '@angular/core';
import { TwitchUser } from '../models/twitch-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TwitchFollower } from '../models/twitch-follower';

/**
 * Twitch service to interact with twitch data
 */
@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  // Location of back-end service
  private BASE_URL: String = 'https://twitch-web-integrator.herokuapp.com/';

  /**
   * Create our service with http client
   * @param _http HttpClient to perform restful calls with
   */
  constructor(private _http: HttpClient) { }

  /**
   * Get the twitch user
   * @param channelName Channel name that we are trying to get the user for
   */
  public getUser(channelName: String): Observable<TwitchUser> {
    return this._http.get<TwitchUser>(this.BASE_URL + 'user?channelName=' + channelName);
  }

  /**
   * Get the twitch followers
   * @param channelName Channel name that we are trying to get the followers for
   */
  public getRecentFollowers(channelName: String): Observable<TwitchFollower[]> {
    return this._http.get<TwitchFollower[]>(this.BASE_URL + 'recent/followers?channelName=' + channelName);
  }

  /**
   * Get the twitch follower total
   * @param channelName Channel name that we are trying to get the follower total for
   */
  public getTotalFollowers(channelName: String): Observable<number> {
    return this._http.get<number>(this.BASE_URL + 'total/followers?channelName=' + channelName);
  }
}
