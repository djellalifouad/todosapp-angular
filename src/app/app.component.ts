import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 inscription:FormGroup;
  constructor(private fb:FormBuilder) {}
   ngOnInit() {
    this.inscription= this.fb.group({
      username: ["",[Validators.required]],
      password: ["",[Validators.required,Validators.minLength(8)]],
      email:["",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    })
   }
   get f() {
      return this.inscription.controls
   }
  /*
  inscription = new FormGroup({
    username: new FormControl("",[Validators.required,Validators.minLength(10),])
  });
  get username() {
    return this.inscription.get('username');
  }
  */
  title = 'todosapp';
}
