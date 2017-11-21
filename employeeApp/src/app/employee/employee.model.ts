export interface IEmployee {
  employeeId: Number;
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  hireDate: String;
  jobId: String;
  salary: Number;
  commissionPct: Number;
  managerId: Number;
  departmentId: Number;
}

export class Employee {
  constructor(
    employeeId: Number,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    hireDate: String,
    jobId: String,
    salary: Number,
    commissionPct: Number,
    managerId: Number,
    departmentId: Number
  ) {}

  static fromJson(employeePayload: IEmployee): Employee {
    return new Employee(
      employeePayload.employeeId,
      employeePayload.firstName,
      employeePayload.lastName,
      employeePayload.email,
      employeePayload.phoneNumber,
      employeePayload.hireDate,
      employeePayload.jobId,
      employeePayload.salary,
      employeePayload.commissionPct,
      employeePayload.managerId,
      employeePayload.departmentId
    );
  }

  static fromJsonList(employeePayload: IEmployee[]): Employee[] {
    const employees: Employee[] = [];
    employeePayload.forEach(employee => {
      employees.push(employee);
    });
    return employees;
  }
}
