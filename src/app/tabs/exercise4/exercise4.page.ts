import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.page.html',
  styleUrls: ['./exercise4.page.scss'],
})
export class Exercise4Page implements OnInit {
  colores = ['#FF5733', '#33FF57', '#5733FF', '#FF3333', '#33FFFF'];
  constructor() { }

  ngOnInit() {
  }

}