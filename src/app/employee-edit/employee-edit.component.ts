import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employeedata } from '../employee service/employee-service.component';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  providers:[employeedata]
})
export class EmployeeEditComponent implements OnInit {

  constructor(private _data:ActivatedRoute ,private _api:employeedata) { }

  empbyid:any[]=[];
  ngOnInit(): void {
  
      this._api.getdatabyApi().subscribe((data)=>this.empbyid = data.filter(x => x.code == this._data.snapshot.paramMap.get('id')))
  
    }

}
