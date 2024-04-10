import { Component } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.css']
})
export class TestDriveComponent {
  constructor(private carService: CarServiceService, private router: Router) {}

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`/car-item-details/${id}`);
  }
}
