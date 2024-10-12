import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSupplyHomeComponent } from './home/ProductSupply-home.component';
import { ProductSupplyNewComponent } from './new/ProductSupply-new.component';
import { ProductSupplyDetailComponent } from './detail/ProductSupply-detail.component';

const routes: Routes = [
  {path: '', component: ProductSupplyHomeComponent},
  { path: 'new', component: ProductSupplyNewComponent },
  { path: ':id', component: ProductSupplyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProductSupply-detail-permissions'
      }
    }
  }
];

export const PRODUCTSUPPLY_MODULE_DECLARATIONS = [
    ProductSupplyHomeComponent,
    ProductSupplyNewComponent,
    ProductSupplyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSupplyRoutingModule { }