import { Component } from '@angular/core';
import { UserServiceService } from '../user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  loggedUser$ = this.userService.getLoggedUser();
  constructor(private userService: UserServiceService) {}

  logout(): void {
    this.userService.logoutUser();
  }
}
