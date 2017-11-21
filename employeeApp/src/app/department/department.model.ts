export interface IDepartment {
  departmentId: String;
  deprtmentName: String;
  managerId: String;
  locationId: String;
}

export class Department {
  constructor(
    private _departmentId: String,
    private _departmentName: String,
    private _managerId: String,
    private _locationId: String
  ) { }

  static fromJson(departmentPayload?: IDepartment): Department {
    return new Department(
      departmentPayload.departmentId,
      departmentPayload.deprtmentName,
      departmentPayload.managerId,
      departmentPayload.locationId
    );
  }

  static fromJsonList(departmentsPayload?: IDepartment[]): Department[] {
    const departments: Department[] = [];
    departmentsPayload.forEach(department => {
      console.log(this.fromJson(department));
      departments.push(this.fromJson(department));
    });
    return departments;
  }

  departmentId(departmentId?: String): String {
    if (arguments.length === 1) {
      this._departmentId = departmentId;
    }
    return this._departmentId;
  }

  departmentName(departmentName?: String): String {
    if (arguments.length === 1) {
      this._departmentName = departmentName;
    }
    return this._departmentName;
  }

  managerId(managerId?: String): String {
    if (arguments.length === 1) {
      this._managerId = managerId;
    }
    return this._departmentId;
  }

  locationId(locationId?: String): String {
    if (arguments.length === 1) {
      this._locationId = locationId;
    }
    return this._locationId;
  }

}
