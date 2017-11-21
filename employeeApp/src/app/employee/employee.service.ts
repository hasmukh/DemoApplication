import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Employee, IEmployee } from "./employee.model";

@Injectable()
export class EmployeeService {
  private static empUrl = "http://10.170.21.16:9090/department/110/employees";

  constructor(private http: Http) {}

  getEmployees(departmentId: string): Observable<Employee[]> {
    return this.http
      .get(EmployeeService.empUrl + "employee/:id")
      .map((res: Response) => {
        return Employee.fromJsonList(res.json());
      });
  }
}
