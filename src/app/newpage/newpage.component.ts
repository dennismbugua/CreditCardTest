import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { PaymentsService } from '../payments.service';
import { Card } from './../models/card.model';

@Component({
  selector: 'app-newpage',
  template: `
<div class="left">

    <form (ngSubmit)="onSubmit()">

    <input type="text" placeholder="Card Holder Name" name="name" required #cardHolder>
    <input type="text" placeholder="Credit Card Number" name="number" required #creditCardNumber>
    <input type="date" placeholder="Expiration Date" name="expDate" required #expirationDate>
    <input type="number" placeholder="Amount" name="amount" required #amount>

    <button>POST</button>

    </form>

</div>
  `,
  styles: []
})
export class NewpageComponent implements OnInit {


  userModel = new Card('Dennis', '123456', '29/01/21', '123456');

  constructor(private _payments: PaymentsService) { }



  onSubmit() {
    this._payments.payment(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
  }

  ngOnInit() {
  }

}

