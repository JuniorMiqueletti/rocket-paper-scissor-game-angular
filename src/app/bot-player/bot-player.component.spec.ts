import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotPlayerComponent } from './bot-player.component';

describe('BotPlayerComponent', () => {
  let component: BotPlayerComponent;
  let fixture: ComponentFixture<BotPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
