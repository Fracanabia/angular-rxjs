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
    path: 'operations-filter',
    redirectTo: 'operations-filter/filter',
    pathMatch: 'full',
  },
  {
    path: 'operations-join',
    redirectTo: 'operations-join/switch-all',
    pathMatch: 'full',
  },
  {
    path: 'operations-multicasting',
    redirectTo: 'operations-multicasting/share-replay',
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
      {
        path: 'map-to',
        loadChildren: () =>
          import(
            './components/operations-transformation/map-to/map-to.module'
          ).then(m => m.MapToModule),
      },
      {
        path: 'switch-map',
        loadChildren: () =>
          import(
            './components/operations-transformation/switch-map/switch-map.module'
          ).then(m => m.SwitchMapModule),
      },
      {
        path: 'pluck',
        loadChildren: () =>
          import(
            './components/operations-transformation/pluck/pluck.module'
          ).then(m => m.PluckModule),
      },
      {
        path: 'to-array',
        loadChildren: () =>
          import(
            './components/operations-transformation/to-array/to-array.module'
          ).then(m => m.ToArrayModule),
      },
    ],
  },
  {
    path: 'operations-filter',
    children: [
      {
        path: 'filter',
        loadChildren: () =>
          import('./components/operations-filter/filter/filter.module').then(
            m => m.FilterModule
          ),
      },
      {
        path: 'take',
        loadChildren: () =>
          import('./components/operations-filter/take/take.module').then(
            m => m.TakeModule
          ),
      },
      {
        path: 'take-until',
        loadChildren: () =>
          import(
            './components/operations-filter/take-until/take-until.module'
          ).then(m => m.TakeUntilModule),
      },
      {
        path: 'take-while',
        loadChildren: () =>
          import(
            './components/operations-filter/take-while/take-while.module'
          ).then(m => m.TakeWhileModule),
      },
      {
        path: 'skip',
        loadChildren: () =>
          import('./components/operations-filter/skip/skip.module').then(
            m => m.SkipModule
          ),
      },
      {
        path: 'debounce-time',
        loadChildren: () =>
          import(
            './components/operations-filter/debounce-time/debounce-time.module'
          ).then(m => m.DebounceTimeModule),
      },
    ],
  },
  {
    path: 'operations-join',
    children: [
      {
        path: 'switch-all',
        loadChildren: () =>
          import(
            './components/operations-join/switch-all/switch-all.module'
          ).then(m => m.SwitchAllModule),
      },
      {
        path: 'start-with',
        loadChildren: () =>
          import(
            './components/operations-join/start-with/start-with.module'
          ).then(m => m.StartWithModule),
      },
      {
        path: 'combine-latest',
        loadChildren: () =>
          import(
            './components/operations-join/combine-latest/combine-latest.module'
          ).then(m => m.CombineLatestModule),
      },
      {
        path: 'with-latest-from',
        loadChildren: () =>
          import(
            './components/operations-join/with-latest-from/with-latest-from.module'
          ).then(m => m.WithLatestFromModule),
      },
    ],
  },
  {
    path: 'operations-multicasting',
    children: [
      {
        path: 'share-replay',
        loadChildren: () =>
          import(
            './components/operation-multicasting/share-replay/share-replay.module'
          ).then(m => m.ShareReplayModule),
      },
      {
        path: 'share',
        loadChildren: () =>
          import('./components/operation-multicasting/share/share.module').then(
            m => m.ShareModule
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
