import { Component, OnInit } from "@angular/core";
import {DepartmentService} from "./department/department.service";
import {Department} from "./department/department.model";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  private DepartmentServiceSubscription: Subscription;
  public departments: Department[] = [];
  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.DepartmentServiceSubscription = this.departmentService
      .getDepartments()
      .subscribe((departments) => {
        this.departments = departments;});
  }

  getEmployees(departmentId): void {
    console.log("Getting employees of " + departmentId);
    return;
  }

  Departments() {
    return this.departments;
  }
}
