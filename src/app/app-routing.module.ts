import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { TestComponent } from './test/test.component';
import {AddTodosComponent} from './todo/add-todos/add-todos.component';
import {TodosListComponent} from './todo/todos-list/todos-list.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'test',component:TestComponent},
  {path:'addtodo',component:AddTodosComponent},
  {path:'listtodo',component:TodosListComponent},
 // {path:'',component:TodosListComponent},
  {path:'',redirectTo:'addtodo',pathMatch:'full'},
  
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
