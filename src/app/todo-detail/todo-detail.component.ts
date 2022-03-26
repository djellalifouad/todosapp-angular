import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  content: String = "";
  ngOnInit(): void {

    this.content = this.router.snapshot.params['id'];
    console.log(this.content);

  }

}
