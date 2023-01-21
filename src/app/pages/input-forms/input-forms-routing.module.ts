import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputFormsPage } from './input-forms.page';

const routes: Routes = [
  {
    path: '',
    component: InputFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputFormsPageRoutingModule {}
