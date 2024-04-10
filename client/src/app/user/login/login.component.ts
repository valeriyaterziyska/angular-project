import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserServiceService, private router: Router) {}

  formSubmitHandler(form: NgForm) {
    console.log(form.value);
    if (form?.invalid) {
      console.log('Form is invalid');
      return;
    }

    const { email, password } = form?.value;
    console.log("email: ", email);
    console.log("password: ", password); 

    this.userService.loginUser(email, password).subscribe((user) =>{
      console.log(user.email);
      this.router.navigate(['/catalog']);
      
    });
  }
}
