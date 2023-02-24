import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgxSnakeComponent} from "ngx-snake";

@Component({
  selector: 'ng-mf-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent {


  @Output()
  public stateChanged = new EventEmitter<boolean>();

  @ViewChild(NgxSnakeComponent)
  private game!: NgxSnakeComponent;

  public started = false

  public start() {
    this.started = true
    this.game.actionStart()
    this.stateChanged.emit(this.started)
  }

  public pause() {
    this.started = false
    this.game.actionStop()
    this.stateChanged.emit(this.started)
  }
}
