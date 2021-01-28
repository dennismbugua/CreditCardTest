import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Card } from './../models/card.model'
import * as CardActions from './../actions/card.actions';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addCard(cardHolder, creditCardNumber, expirationDate, amount) {
    this.store.dispatch(new CardActions.AddCard({ cardHolder: cardHolder, creditCardNumber: creditCardNumber, expirationDate: expirationDate, amount: amount }))
  }

  ngOnInit() {
  }

}
