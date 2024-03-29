import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	employeeList: Employee[];

  constructor(private employeeService: EmployeeService, private tostr: ToastrService) {     this.tostr.success('Hello world!', 'Toastr fun!'); }

  ngOnInit() {
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      })
    })
    console.log(this.employeeList);
  }


  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }


}
