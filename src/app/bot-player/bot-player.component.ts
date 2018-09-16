import { Component, OnInit } from '@angular/core';

import { BotService } from '../bot.service';

@Component({
  selector: 'app-bot-player',
  templateUrl: './bot-player.component.html',
  styleUrls: ['./bot-player.component.css']
})
export class BotPlayerComponent implements OnInit {

  lastChoice = 0;

  constructor(private botService: BotService) {
    this.botService.botChoiceObservable.subscribe(r => this.lastChoice = r);
  }

  ngOnInit() {
  }

}
