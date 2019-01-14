import { TestBed, inject } from '@angular/core/testing';

import { TwitchServiceService } from './twitch-service.service';

describe('TwitchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitchServiceService]
    });
  });

  it('should be created', inject([TwitchServiceService], (service: TwitchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
