export interface IEmployee {
  employeeId: String;
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  hireDate: String;
  jobId: String;
  salary: Number;
  commissionPct: String;
  managerId: String;
  departmentId: String;
}

export class Employee {
  constructor(
    private _employeeId: String,
    private _firstName: String,
    private _lastName: String,
    private _email: String,
    private _phoneNumber: String,
    private _hireDate: String,
    private _jobId: String,
    private _salary: Number,
    private _commissionPct: String,
    private _managerId: String,
    private _departmentId: String
  ) { }

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
      employees.push(this.fromJson(employee));
    });
    return employees;
  }

  employeeId(employeeId?: String): String {
    if (arguments.length === 1) {
      this._employeeId = employeeId;
    }
    return this._employeeId;
  }

  firstName(firstName?: String): String {
    if (arguments.length === 1) {
      this._firstName = firstName;
    }
    return this._firstName;
  }

  lastName(lastName?: String): String {
    if (arguments.length === 1) {
      this._lastName = lastName;
    }
    return this._lastName;
  }

  email(email?: String): String {
    if (arguments.length === 1) {
      this._email = email;
    }
    return this._email;
  }

  phoneNumber(phoneNumber?: String): String {
    if (arguments.length === 1) {
      this._phoneNumber = phoneNumber;
    }
    return this._phoneNumber;
  }

  hireDate(hireDate?: String): String {
    if (arguments.length === 1) {
      this._hireDate = hireDate;
    }
    return this._hireDate;
  }

  jobId(jobId?: String): String {
    if (arguments.length === 1) {
      this._jobId = jobId;
    }
    return this._jobId;
  }

  salary(salary?: Number): Number {
    if (arguments.length === 1) {
      this._salary = salary;
    }
    return this._salary;
  }

  commissionPct(commissionPct?: String): String {
    if (arguments.length === 1) {
      this._commissionPct = commissionPct;
    }
    return this._commissionPct;
  }

  managerId(managerId?: String): String {
    if (arguments.length === 1) {
      this._managerId = managerId;
    }
    return this._managerId;
  }

  departmentId(departmentId?: String): String {
    if (arguments.length === 1) {
      this._departmentId = departmentId;
    }
    return this._departmentId;
  }

}
