import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise4PageRoutingModule } from './exercise4-routing.module';

import { Exercise4Page } from './exercise4.page';
import { ColorListComponent } from 'src/app/color-list/color-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise4PageRoutingModule
  ],
  declarations: [Exercise4Page,ColorListComponent]
})
export class Exercise4PageModule {}
