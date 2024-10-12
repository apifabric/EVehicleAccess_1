import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProductSupply-card.component.html',
  styleUrls: ['./ProductSupply-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProductSupply-card]': 'true'
  }
})

export class ProductSupplyCardComponent {


}