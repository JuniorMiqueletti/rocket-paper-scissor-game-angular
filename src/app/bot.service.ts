import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  private botChoiceSubject = new BehaviorSubject<number>(0);
  botChoiceObservable = this.botChoiceSubject.asObservable();

  constructor() { }

  choice(): Promise<number> {
    return new Promise<number>((resolve) => {
      resolve(
        this.botChoice()
      );
    });
  }

  private botChoice(): any {
    const choice = Math.floor(Math.random() * (2 - 0 + 1));
    this.botChoiceSubject.next(choice);
    return choice;
  }
}
