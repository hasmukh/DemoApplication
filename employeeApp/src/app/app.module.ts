import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import {HttpModule} from "@angular/http";
import {DepartmentService} from "./department/department.service";
import {EmployeeService} from "./employee/employee.service";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule],
  providers: [DepartmentService, EmployeeService  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
