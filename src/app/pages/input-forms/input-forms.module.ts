import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputFormsPageRoutingModule } from './input-forms-routing.module';

import { InputFormsPage } from './input-forms.page';


import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputFormsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InputFormsPage]
})
export class InputFormsPageModule {}
