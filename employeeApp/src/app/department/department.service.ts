import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { Department, IDepartment } from "./department.model";

@Injectable()
export class DepartmentService {
  private static departmentUrl = "http://10.170.21.16:9090/departments/";

  constructor(private http: Http) { }

  getDepartments(): Observable<Department[]> {
    return this.http
      .get(DepartmentService.departmentUrl)
        .map((res: Response) => {
          return Department.fromJsonList(res.json());
        });
  }

  // Update Department

  // Delete Department
}
