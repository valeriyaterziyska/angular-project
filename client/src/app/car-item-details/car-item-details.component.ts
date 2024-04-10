import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-car-item-details',
  templateUrl: './car-item-details.component.html',
  styleUrls: ['./car-item-details.component.css'],
})
export class CarItemDetailsComponent {
  constructor(private carService: CarServiceService,private router: Router) {}

  navigateToCar(id: string): void {
    this.router.navigateByUrl(`/car-item-edit/${id}`);
  }

  addtoTestDrive(id: string): void {
    console.log("Added to test drive");
    
    this.router.navigateByUrl(`/test-drive`);
  }

  deleteCar(id: string):void {
    this.carService.deleteCar(id);
    this.router.navigate(['/catalog']);
  }
}
