import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise3PageRoutingModule } from './exercise3-routing.module';

import { Exercise3Page } from './exercise3.page';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise3PageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [Exercise3Page]
})
export class Exercise3PageModule {}
