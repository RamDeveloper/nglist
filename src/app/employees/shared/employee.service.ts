import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee} from './employee.model';

@Injectable()
export class EmployeeService {
	employeeList: AngularFireList<any>;
	selectedEmployee: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) { console.log(this.employeeList);}

  getData(){
  	this.employeeList = this.firebase.list('employees');
    console.log('get');
    console.log(this.employeeList);
  	return this.employeeList;
  }

  insertEmployee(employee: Employee){
  console.log(employee);
  console.log('insert');
  console.log(employee.name);
  console.log(employee.salary);
  console.log('list');
  console.log(this.employeeList);
  console.log('listend');
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  	/*this.employeeList.push({
  		name: employee.name,
  		position: employee.position,
  		office: employee.office,
  		salary: employee.salary
  	});*/
  }


  updateEmployee(employee: Employee){
  	this.employeeList.update(employee.$key,
  	{
  		name: employee.name,
  		position: employee.position,
  		office: employee.office,
  		salary: employee.salary
  	});
  }

  deleteEmployee($key: string){
  	this.employeeList.remove($key);
  }


}
