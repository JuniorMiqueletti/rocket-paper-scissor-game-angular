import { Component, OnInit, Input } from '@angular/core';

import { GameService } from './../game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  lastChoice: number;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

  play(humanChoice: number) {
    this.lastChoice = humanChoice;
    this.gameService.checkWinner(humanChoice);
  }
}
