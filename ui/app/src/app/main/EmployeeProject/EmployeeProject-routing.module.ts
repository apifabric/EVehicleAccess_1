import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProjectHomeComponent } from './home/EmployeeProject-home.component';
import { EmployeeProjectNewComponent } from './new/EmployeeProject-new.component';
import { EmployeeProjectDetailComponent } from './detail/EmployeeProject-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeProjectHomeComponent},
  { path: 'new', component: EmployeeProjectNewComponent },
  { path: ':id', component: EmployeeProjectDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeProject-detail-permissions'
      }
    }
  }
];

export const EMPLOYEEPROJECT_MODULE_DECLARATIONS = [
    EmployeeProjectHomeComponent,
    EmployeeProjectNewComponent,
    EmployeeProjectDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeProjectRoutingModule { }