import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { BehaviorSubject, Subject } from 'rxjs';

import { BotService } from './bot.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private scorePlayerOneSubject = new BehaviorSubject<boolean>(false);
  private scorePlayerTwoSubject = new BehaviorSubject<boolean>(false);

  isPlayerOneWinner = this.scorePlayerOneSubject.asObservable();
  isPlayerTwoWinner = this.scorePlayerTwoSubject.asObservable();

  constructor(
    private botService: BotService,
    public snackBar: MatSnackBar
  ) { }

  checkWinner(humanChoice) {
    this.botService.choice()
    .then(botChoice => {
      this.computeScore(humanChoice, botChoice);
    })
    .catch( error => console.log(error));
  }

  private computeScore(humanChoice, botChoice) {
    if (humanChoice === botChoice) {
      this.showMessage('Draw game.');
    } else {

      if ((humanChoice - botChoice + 3) % 3 === 1) {
        this.scorePlayerOneSubject.next(true);
        this.showMessage('You Wins!! :D');

      } else {
        this.scorePlayerTwoSubject.next(true);
        this.showMessage(' oh sh.. Jarvis Wins!!');

      }
    }
  }
  private showMessage(message) {
    this.snackBar.open(message, 'Undo', {duration: 1000});
  }
}
