import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/rxjs/rxjs.module').then(m => m.RxjsModule),
  },
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./components/rxjs/rxjs.module').then(m => m.RxjsModule),
  },
  {
    path: 'observable',
    loadChildren: () =>
      import('./components/observable/observable.module').then(
        m => m.ObservableModule
      ),
  },
  {
    path: 'subject',
    loadChildren: () =>
      import('./components/subject/subject.module').then(m => m.SubjectModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
