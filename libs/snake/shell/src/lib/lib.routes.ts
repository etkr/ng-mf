import { Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const snakeShellRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('@ng-mf/snake/feature').then(
      //       (module) => module.SnakeFeatureModule
      //     ),
      // },
    ],
  },
];
