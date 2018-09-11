import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor() { }

  choice(): Promise<number> {
    return new Promise<number>((resolve) => {
      resolve(
        Math.floor(Math.random() * (2 - 0 + 1))
      );
    });
  }
}
