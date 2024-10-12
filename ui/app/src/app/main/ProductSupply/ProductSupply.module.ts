import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PRODUCTSUPPLY_MODULE_DECLARATIONS, ProductSupplyRoutingModule} from  './ProductSupply-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProductSupplyRoutingModule
  ],
  declarations: PRODUCTSUPPLY_MODULE_DECLARATIONS,
  exports: PRODUCTSUPPLY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductSupplyModule { }