import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakeGameComponent } from '../../../snake/feature/src/lib/snake-game/snake-game.component';
import { NgxSnakeModule } from 'ngx-snake';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VersionComponent } from './version/version.component';
import { TwohundredandfortyeightComponent } from './twohundredandfortyeight/twohundredandfortyeight.component';

@NgModule({
  imports: [CommonModule, NgxSnakeModule, MatButtonModule, MatIconModule],
  declarations: [
    SnakeGameComponent,
    VersionComponent,
    TwohundredandfortyeightComponent,
  ],
  exports: [
    SnakeGameComponent,
    VersionComponent,
    TwohundredandfortyeightComponent,
  ],
})
export class SharedModule {}
