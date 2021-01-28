import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Card } from './../models/card.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  cards: Observable<Card[]>;


  constructor(private store: Store<AppState>) {
    this.cards = store.select('card');
  }

  ngOnInit() {
  }

}
