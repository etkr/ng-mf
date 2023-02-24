import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgxSnakeComponent} from "ngx-snake";

@Component({
  selector: 'ng-mf-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent {


  @Output()
  public mystateChanged = new EventEmitter<boolean>();

  @ViewChild(NgxSnakeComponent)
  private game!: NgxSnakeComponent;

  public started = false

  public start() {
    this.started = true
    this.game.actionStart()
    this.mystateChanged.emit(this.started)
  }

  public pause() {
    this.started = false
    this.game.actionStop()
    this.mystateChanged.emit(this.started)
  }
}
