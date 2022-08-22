import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  {path:"",component:EmployeeFormComponent},
  {path:"emptable",component:EmployeeTableComponent},
  {path:"view/:id",component:EmployeeViewComponent},
  {path:"edit/:id",component:EmployeeEditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
