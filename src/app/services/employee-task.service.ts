import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTaskService {
  private subject = new Subject<string>();
  private userId: string;
  getUserId() {
    return this.userId;
  }
  userIdObservable() {
    return this.subject.asObservable();
  }
  constructor(private router: Router) { }

  sendUserId(userId: string) {
    this.userId = userId;
    this.subject.next(userId);
    this.router.navigate(['/employee-task']);
  }
}
