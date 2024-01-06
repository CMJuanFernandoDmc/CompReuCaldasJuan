import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise2PageRoutingModule } from './exercise2-routing.module';

import { Exercise2Page } from './exercise2.page';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise2PageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [Exercise2Page]
})
export class Exercise2PageModule {}
