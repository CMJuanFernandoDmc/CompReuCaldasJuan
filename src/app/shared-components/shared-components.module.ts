import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[NavBarComponent]
})
export class SharedComponentsModule { }