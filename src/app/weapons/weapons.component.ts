import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  @Input() choiceNotClickable = false;
  @Input() choiceInput: number;
  @Output() choiceOutput = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  emitChoice(choice: number) {
    this.choiceInput = choice;
    this.choiceOutput.emit(choice);
  }

  weaponsShouldBeDisabled() {
    return this.choiceNotClickable === true;
  }
}
