import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ProductSupply-new',
  templateUrl: './ProductSupply-new.component.html',
  styleUrls: ['./ProductSupply-new.component.scss']
})
export class ProductSupplyNewComponent {
  @ViewChild("ProductSupplyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}