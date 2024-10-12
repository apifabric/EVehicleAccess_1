import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEEPROJECT_MODULE_DECLARATIONS, EmployeeProjectRoutingModule} from  './EmployeeProject-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeProjectRoutingModule
  ],
  declarations: EMPLOYEEPROJECT_MODULE_DECLARATIONS,
  exports: EMPLOYEEPROJECT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeProjectModule { }