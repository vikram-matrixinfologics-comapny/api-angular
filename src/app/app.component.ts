import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../den/employee';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employees:Employee[];
 
  constructor( empService:EmployeeService ) {
 
    empService.getEmployees().subscribe(data =>this.employees = data);  
 
  } 
}