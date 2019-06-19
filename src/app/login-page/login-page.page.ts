import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { EmployeeTaskService } from '../services/employee-task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  private querySubscription;
  error = '';
  constructor(private loginService: LoginService, private employeeTaskService: EmployeeTaskService, private router: Router) { }

  ngOnInit() {
  }

  login(userId: string, userPswrd: string): void {
    this.querySubscription = this.loginService.login().subscribe(
      (dataValue: any) => {
        // console.log(dataValue.Name);
        /* for (const prop in dataValue) {
           if (dataValue[prop].userId === userId && dataValue[prop].userPassword === userPswrd) {
             this.goToEmployeeTaskPg(userId);
             return 0;
           }
         } */
        // if (dataValue.Name === 'hello') {
        // this.goToEmployeeTaskPg(userId);
        //  }
      }, (error: any) => {
        console.log('error');
        this.router.navigate(['/start-task']);
      });
  }

  goToEmployeeTaskPg(userId: string) {
    this.employeeTaskService.sendUserId(userId);
  }
}
