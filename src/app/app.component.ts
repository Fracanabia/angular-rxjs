import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes: Routes = routes
    .filter(route => route.path)
    .filter(routes => routes.children?.filter(children => children.path));

  constructor() {
    console.log(
      '🚀 ~ file: app.component.ts:14 ~ AppComponent ~ routes',
      this.routes
    );
  }
}
