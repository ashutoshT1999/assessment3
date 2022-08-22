import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { employeedatabyapi } from './employee service/employee-data-service.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    EmployeeViewComponent,
    NavbarComponent,
    EmployeeEditComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,MatDividerModule,MatCardModule,MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientInMemoryWebApiModule.forRoot(employeedatabyapi),
    HttpClientModule, FormsModule, MatTableModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
