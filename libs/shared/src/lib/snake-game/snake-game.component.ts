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

  public started = false

  public start() {
    this.started = true
    this.game.actionStart()
  }

  public pause() {
    this.started = false
    this.game.actionStop()
  }
}
