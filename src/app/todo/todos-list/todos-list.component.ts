import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Itodo} from '../../Interfaces/Itodo'





@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit,OnDestroy {

public title:string="Suresh Todo";
public todos:Itodo[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("todolistcomponent")
    this.http.get('https://todos-api-dev.herokuapp.com/todos').subscribe((todolisting:Itodo[])=>{
          console.log(todolisting);
      this.todos=todolisting;
    });
  }

  ngOnDestroy(): void{
    console.log("component unloaded")
  }

}
