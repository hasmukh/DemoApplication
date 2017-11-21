import { Component, OnInit, OnDestroy } from "@angular/core";
import { DepartmentService } from "./department/department.service";
import { EmployeeService } from "./employee/employee.service";
import { Department } from "./department/department.model";
import { Subscription } from "rxjs/Rx";
import { Employee } from "./employee/employee.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {

  private departmentServiceSubscription: Subscription;
  private employeeServiceSubscription: Subscription;
  private departments: Department[] = [];
  private employees: Employee[] = [];
  selectedRow: Number;
  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService) { }
  ngOnInit() {
    this.departmentServiceSubscription = this.departmentService
      .getDepartments()
      .subscribe((departments) => {
        this.departments = departments;
      });
  }

  getEmployees(departmentId, index): void {
    this.selectedRow = index;
    this.employeeServiceSubscription = this.employeeService
      .getEmployees(departmentId)
      .subscribe((employees) => this.employees = employees);
  }

  Departments() {
    return this.departments;
  }

  Employees() {
    return this.employees;
  }

  ngOnDestroy(): void {
    this.departmentServiceSubscription.unsubscribe();
    this.departmentServiceSubscription.unsubscribe();
  }

}
