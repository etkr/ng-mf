import {Route} from '@angular/router';
import {StartComponent} from "./start/start.component";

export const appRoutes: Route[] = [
  {
    path: 'snake',
    loadChildren: () => import('snake/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: StartComponent,
  },
];
