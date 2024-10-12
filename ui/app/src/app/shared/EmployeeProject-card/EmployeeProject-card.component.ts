import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeProject-card.component.html',
  styleUrls: ['./EmployeeProject-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeProject-card]': 'true'
  }
})

export class EmployeeProjectCardComponent {


}