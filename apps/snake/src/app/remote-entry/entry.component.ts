import {Component} from '@angular/core';

@Component({
  selector: 'ng-mf-snake-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {

  public state: boolean = false

  updateState($event: boolean) {
    this.state = $event
  }
}
