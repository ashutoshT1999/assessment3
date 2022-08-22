import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employeedata } from '../employee service/employee-service.component';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
  providers:[employeedata]
})
export class EmployeeViewComponent implements OnInit {

  empbyid:any[]=[];
  constructor(private _data:ActivatedRoute ,private _api:employeedata) { }

  ngOnInit(): void {

    this._api.getdatabyApi().subscribe((data)=>this.empbyid = data.filter(x => x.code == this._data.snapshot.paramMap.get('id')))

  }

}
