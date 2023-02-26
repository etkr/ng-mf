import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { snakeShellRoutes } from './lib.routes';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(snakeShellRoutes)],
  declarations: [ShellComponent],
})
export class SnakeShellModule {}
