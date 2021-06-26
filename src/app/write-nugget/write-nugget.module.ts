import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteNuggetPageRoutingModule } from './write-nugget-routing.module';

import { WriteNuggetPage } from './write-nugget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteNuggetPageRoutingModule
  ],
  declarations: [WriteNuggetPage]
})
export class WriteNuggetPageModule {}
