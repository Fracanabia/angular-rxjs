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
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
