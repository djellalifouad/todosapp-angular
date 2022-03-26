import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [

  {
    path: "todos", component: TodosComponent,
  },
  {
    path: "todos/:id", component: TodoDetailComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
