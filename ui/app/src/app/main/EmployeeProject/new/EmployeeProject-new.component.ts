import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeProject-new',
  templateUrl: './EmployeeProject-new.component.html',
  styleUrls: ['./EmployeeProject-new.component.scss']
})
export class EmployeeProjectNewComponent {
  @ViewChild("EmployeeProjectForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}