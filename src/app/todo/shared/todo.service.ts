import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class TodoService {
	toDoList: AngularFireList<any>;

	constructor(private firebasedb: AngularFireDatabase) { }

//Fetch the values from firebase
	getToDoList(){
		this.toDoList = this.firebasedb.list('titles');
		return this.toDoList;
	}

//Add the values to firebase
	addTitle(title: string){
		this.toDoList.push({
			title: title,
			isChecked: false
		});
	}
//Check the element is checked or not and update to Firebase
	checkedOrUncheckTitle($key: string, flag: boolean){
		this.toDoList.update($key, {isChecked: true});
	}

//Remove the value from Firebase
	removeTitle($key: string){
		this.toDoList.remove($key);
	}

}

