import { Component, OnInit } from '@angular/core';
import {Entity} from './../entity';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  user: Entity;

  constructor() { }

  ngOnInit() {
  }

}
