import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnakeGameComponent} from './snake-game/snake-game.component';
import {NgxSnakeModule} from "ngx-snake";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, NgxSnakeModule, MatButtonModule, MatIconModule],
  declarations: [SnakeGameComponent],
  exports: [
    SnakeGameComponent
  ]
})
export class SharedModule {
}
