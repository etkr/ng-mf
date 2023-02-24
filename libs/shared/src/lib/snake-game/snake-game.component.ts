import {Component, ViewChild} from '@angular/core';
import {NgxSnakeComponent} from "ngx-snake";

@Component({
  selector: 'ng-mf-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent {

  @ViewChild(NgxSnakeComponent)
  private game!: NgxSnakeComponent;

  started = false

  start() {
    this.started = true
    this.game.actionStart()
  }


  pause() {
    this.started = false
    this.game.actionStop()
  }
}
