import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { NgxSnakeModule } from 'ngx-snake';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    NgxSnakeModule,
    MatIconModule,
    RouterModule.forRoot([{ path: '', component: SnakeGameComponent }]),
  ],
  declarations: [SnakeGameComponent],
})
export class SnakeFeatureModule {}
