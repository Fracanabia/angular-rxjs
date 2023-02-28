import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'operations-rxjs/observable', pathMatch: 'full' },
  {
    path: 'operations-rxjs',
    redirectTo: 'operations-rxjs/observable',
    pathMatch: 'full',
  },
  {
    path: 'operations-creation',
    redirectTo: 'operations-creation/from',
    pathMatch: 'full',
  },
  {
    path: 'operations-creation-join',
    redirectTo: 'operations-creation-join/fork-join',
    pathMatch: 'full',
  },
  {
    path: 'operations-transformation',
    redirectTo: 'operations-transformation/map',
    pathMatch: 'full',
  },
  {
    path: 'operations-rxjs',
    children: [
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
      {
        path: 'ajax',
        loadChildren: () =>
          import('./components/operations-creation/ajax/ajax.module').then(
            m => m.AjaxModule
          ),
      },
    ],
  },
  {
    path: 'operations-creation-join',
    children: [
      {
        path: 'fork-join',
        loadChildren: () =>
          import(
            './components/operations-creation-join/fork-join/fork-join.module'
          ).then(m => m.ForkJoinModule),
      },
      {
        path: 'zip',
        loadChildren: () =>
          import('./components/operations-creation-join/zip/zip.module').then(
            m => m.ZipModule
          ),
      },
      {
        path: 'merge-concat',
        loadChildren: () =>
          import(
            './components/operations-creation-join/merge-concat/merge-concat.module'
          ).then(m => m.MergeConcatModule),
      },
    ],
  },
  {
    path: 'operations-transformation',
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import('./components/operations-transformation/map/map.module').then(
            m => m.MapModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
