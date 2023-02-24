import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {remoteRoutes} from './entry.routes';
import {SharedModule} from "@ng-mf/shared";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), SharedModule],
  providers: [],
})
export class RemoteEntryModule {
}
