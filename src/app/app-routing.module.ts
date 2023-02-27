import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'operations-rxjs/rxjs', pathMatch: 'full' },
  {
    path: 'operations-rxjs',
    redirectTo: 'operations-rxjs/rxjs',
    pathMatch: 'full',
  },
  {
    path: 'operations-rxjs',
    children: [
      {
        path: 'rxjs',
        loadChildren: () =>
          import('./components/rxjs/rxjs.module').then(m => m.RxjsModule),
      },
      {
        path: 'observable',
        loadChildren: () =>
          import(
            './components/operations-rxjs/observable/observable.module'
          ).then(m => m.ObservableModule),
      },
      {
        path: 'subject',
        loadChildren: () =>
          import('./components/operations-rxjs/subject/subject.module').then(
            m => m.SubjectModule
          ),
      },
    ],
  },
  {
    path: 'operations-creation',
    redirectTo: 'operations-creation/from',
    pathMatch: 'full',
  },
  {
    path: 'operations-creation',
    children: [
      {
        path: 'from',
        loadChildren: () =>
          import('./components/operations-creation/from/from.module').then(
            m => m.FromModule
          ),
      },
      {
        path: 'of',
        loadChildren: () =>
          import('./components/operations-creation/of/of.module').then(
            m => m.OfModule
          ),
      },
      {
        path: 'from-event',
        loadChildren: () =>
          import(
            './components/operations-creation/from-event/from-event.module'
          ).then(m => m.FromEventModule),
      },
      {
        path: 'interval',
        loadChildren: () =>
          import(
            './components/operations-creation/interval/interval.module'
          ).then(m => m.IntervalModule),
      },
      {
        path: 'timer',
        loadChildren: () =>
          import('./components/operations-creation/timer/timer.module').then(
            m => m.TimerModule
          ),
      },
      {
        path: 'throw-error',
        loadChildren: () =>
          import(
            './components/operations-creation/throw-error/throw-error.module'
          ).then(m => m.ThrowErrorModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
