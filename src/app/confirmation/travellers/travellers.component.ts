import { Component, OnInit } from '@angular/core';

import { Travellers } from './travellers.model';

@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.css']
})
export class TravellersComponent implements OnInit {
  travellers: Travellers[] = [
    new Travellers('John',31,'C-4','Male'),
    new Travellers('Adam',20,'C-3','Male'),
    new Travellers('Kinsey',25,'C-6','Female')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
