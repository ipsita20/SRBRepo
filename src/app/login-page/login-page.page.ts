import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { EmployeeTaskService } from '../services/employee-task.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  private querySubscription;
  error = '';
  constructor(private loginService: LoginService, private employeeTaskService: EmployeeTaskService) { }

  ngOnInit() {
  }

  login(userId: string, userPswrd: string): void {
    this.querySubscription = this.loginService.login().subscribe(
      (dataValue: any) => {
        console.log(dataValue);
        /* for (const prop in dataValue) {
           if (dataValue[prop].userId === userId && dataValue[prop].userPassword === userPswrd) {
             this.goToEmployeeTaskPg(userId);
             return 0;
           }
         } */
      }, (error: any) => {
        console.log('error');
      });
  }

  goToEmployeeTaskPg(userId: string) {
    this.employeeTaskService.sendUserId(userId);
  }
}
