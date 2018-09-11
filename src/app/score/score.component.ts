import { GameService } from './../game.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  scorePlayerOne = -1;
  scorePlayerTwo = -1;

  constructor(
    private gameService: GameService
    ) { }

  ngOnInit() {
    this.gameService.isPlayerOneWinner.subscribe(r => this.scorePlayerOne++ );
    this.gameService.isPlayerTwoWinner.subscribe(r => this.scorePlayerTwo++ );
  }

}
