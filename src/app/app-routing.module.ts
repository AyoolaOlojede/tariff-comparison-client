import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TarrifComponent } from './modules/tarrif/tarrif.component';

const routes: Routes =
[
  {
    path: '',
    component: TarrifComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
  export class AppRoutingModule { }
