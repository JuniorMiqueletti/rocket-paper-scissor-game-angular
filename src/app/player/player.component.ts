import { BotService } from './../bot.service';
import { GameService } from './../game.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() isHuman = false;
  @Input() playerName: string;
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
