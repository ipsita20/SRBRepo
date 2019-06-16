import { TestBed } from '@angular/core/testing';

import { EmployeeTaskService } from './employee-task.service';

describe('EmployeeTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeTaskService = TestBed.get(EmployeeTaskService);
    expect(service).toBeTruthy();
  });
});
