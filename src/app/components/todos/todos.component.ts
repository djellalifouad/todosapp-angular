import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  input: string = "";
  input2: string = "";
  a: string = "";
  b: string = "";
   fruits=[

    {
      nom:"fraise",
      photo : "/assets/fraise.jpeg",

    },

    {
      nom:"orange",
      photo : "/assets/orange.jpeg",

    }
   ];
  constructor() { }
  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: true,
      },
      {
        content: 'second todo',
        completed: false,
      },
      {
        content: 'third todo',
        completed: false,
      },
    ]
  }
  changeState(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }
  deleteTodo(id: number) {
    delete this.todos[id];
  }
  addTodo() {
    this.todos.push({
      content: this.input,
      completed: false,
    });
    this.input = "";
  }
  changeinput(value = "") {
    if(value  == "CE") {
      this.input2 = "";
      return;
    }
    if(value == "=") {
      try {
      alert(eval(this.input2))
      }catch(e) {
        alert("wrong format")
      }
      this.input2= "";
      return;
    }
    this.input2 += value;

  }
  mafontion() {
   alert("hello from angular");
  }
val = true;

showtext = true;

toogle() {
  this.showtext = !this.showtext;
}
}
