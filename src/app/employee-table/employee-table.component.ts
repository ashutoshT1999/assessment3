import { Component, OnInit } from '@angular/core';
import { employeedata } from '../employee service/employee-service.component';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
  providers:[employeedata]
})
export class EmployeeTableComponent implements OnInit {

  employeedatabyapi:any[]=[];
  constructor(private _employeeservice:employeedata) { }

  ngOnInit(): void {
    this._employeeservice.getdatabyApi().subscribe((data: any[]) => { this.employeedatabyapi = data; })
  }

  displayedColumns: string[] = ["s.no",'FullName','EmailID','Contact-No','Action'];


}
