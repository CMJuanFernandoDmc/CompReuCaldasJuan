import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() username: string="";
  @Input() profileImage: string="";
  @Input() additionalInfo: string="";
  constructor() { }
}
