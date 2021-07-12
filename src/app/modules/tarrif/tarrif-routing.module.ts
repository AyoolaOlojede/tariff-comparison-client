import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarrifComponent } from './tarrif.component';

const routes: Routes = [
  {
    path: '',
    component: TarrifComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TarrifRoutingModule { }
