import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddTodosComponent } from './add-todos/add-todos.component';



@NgModule({
  declarations: [TodosListComponent, AddTodosComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
