import { TestBed, inject } from '@angular/core/testing';

import { BotService } from './bot.service';

describe('BotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BotService]
    });
  });

  it('should be created', inject([BotService], (service: BotService) => {
    expect(service).toBeTruthy();
  }));

  it('should be returned', inject([BotService], (service: BotService) => {
    service.choice()
    .then((result) => expect(result));
  }));

  it('should be returned a number between 0 and 2', inject([BotService], (service: BotService) => {
      service.choice()
      .then((result) => {
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(2);
      });
  }));

  it('should be returned a number between 0 and 2 call service 100 times', inject([BotService], (service: BotService) => {
    for (let i = 0; i < 100; i++) {
      service.choice()
      .then((result) => {
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(2);
      });
    }
  }));
});
