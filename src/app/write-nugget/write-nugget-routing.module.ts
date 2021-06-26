import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteNuggetPage } from './write-nugget.page';

const routes: Routes = [
  {
    path: '',
    component: WriteNuggetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteNuggetPageRoutingModule {}
