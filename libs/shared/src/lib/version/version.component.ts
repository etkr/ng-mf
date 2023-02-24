import { Component } from '@angular/core';

@Component({
  selector: 'ng-mf-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent {
  readonly version = '1.0.0'
}
