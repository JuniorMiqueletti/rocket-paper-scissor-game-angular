import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import {MatCardModule, MatButtonModule, MatToolbarModule, MatTooltipModule, MatIconModule, MatDividerModule, MatSnackBarModule} from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PlayerComponent } from './player/player.component';
import { ScoreComponent } from './score/score.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { BotPlayerComponent } from './bot-player/bot-player.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PlayerComponent,
    ScoreComponent,
    WeaponsComponent,
    BotPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
