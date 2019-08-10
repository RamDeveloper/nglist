import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { TodoComponent }   from './todo/todo.component';
import { EmployeesComponent } from './employees/employees.component';



const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'todo', component: TodoComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
