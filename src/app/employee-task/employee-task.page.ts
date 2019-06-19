import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeTaskService } from '../services/employee-task.service';
import { ApiCallingService } from '../services/api-calling.service';
import * as appGlobals from '../appGlobals/globalVariables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-task',
  templateUrl: './employee-task.page.html',
  styleUrls: ['./employee-task.page.scss'],
})
export class EmployeeTaskPage implements OnInit {
  querySubscription: any;
  subscription: Subscription;
  userId: string;
  employeeDetails: { name: string, department: string, storeLocs: [] };
  employee = {
    "id": "9",
    "userId": "user9",
    "employeeName": "Harsh",
    "department": "Department 5",
    "storeLocs": [
      "Dumdum",
      "Saltlake",
      "Warehouse"
    ]
  }
  constructor(private employeeTaskService: EmployeeTaskService, private apiCallingService: ApiCallingService, private router: Router) { }

  ngOnInit() {
    this.userId = this.employeeTaskService.getUserId();
    this.subscription = this.employeeTaskService.userIdObservable().
      subscribe((userId: string) => { this.userId = userId; });
    this.getEmployeeDetails(this.userId);
  }

  getEmployeeDetails(userId: string) {
    this.querySubscription = this.apiCallingService.callGetApi(appGlobals.employeeUrl).subscribe(
      (dataValue: any) => {
        for (const prop in dataValue) {
          if (dataValue[prop].userId === userId) {
            this.employeeDetails = {
              name: dataValue[prop].employeeName, department: dataValue[prop].department,
              storeLocs: dataValue[prop].storeLocs
            };
            console.log(this.employeeDetails);
            return 0;
          }
        }
      }, (error: any) => {
        console.log('error');
      });
  }

  goToStartTask() {
    this.router.navigate(['/start-task']);
  }
}
