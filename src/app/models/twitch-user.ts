export class TwitchUser {
  private _id: string;
  private _login: string;
  private _displayName: string;
  private _type: string;
  private _broadcasterType: string;
  private _description: string;
  private _profileImageUrl: string;
  private _offlineImageUrl: string;
  private _viewCount: number;

  public getId(): string {
    return this._id;
  }

  public setId(id: string) {
      this._id = id;
  }

  public getLogin(): string {
      return this._login;
  }

  public setLogin(login: string) {
      this._login = login;
  }

  public getDisplayName(): string {
      return this._displayName;
  }

  public setDisplayName(displayName: string) {
      this._displayName = displayName;
  }

  public getType(): string {
      return this._type;
  }

  public setType(type: string) {
      this._type = type;
  }

  public getBroadcasterType(): string {
      return this._broadcasterType;
  }

  public setBroadcasterType(broadcasterType: string) {
      this._broadcasterType = broadcasterType;
  }

  public getDescription(): string {
      return this._description;
  }

  public setDescription(description: string) {
      this._description = description;
  }

  public getProfileImageUrl(): string {
      return this._profileImageUrl;
  }

  public setProfileImageUrl(profileImageUrl: string) {
      this._profileImageUrl = profileImageUrl;
  }

  public getOfflineImageUrl(): string {
      return this._offlineImageUrl;
  }

  public setOfflineImageUrl(offlineImageUrl: string) {
      this._offlineImageUrl = offlineImageUrl;
  }

  public getViewCount(): number {
      return this._viewCount;
  }

  public setViewCount(viewCount: number) {
      this._viewCount = viewCount;
  }
}
