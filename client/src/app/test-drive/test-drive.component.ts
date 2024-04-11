import { AfterViewInit, Component } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { Router } from '@angular/router';
import { CarData } from '../types/car-data';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.css']
})
export class TestDriveComponent implements AfterViewInit {
  public cars: CarData[] = [];
  public emptyCatalog: boolean = true;
  constructor(private carService: CarServiceService, private router: Router) {}


  ngAfterViewInit(): void {
    this.carService.getAllCars().forEach((car) => {
      Object.entries(car).map((c) => {
        if(c[1].testDrive === true) {
          this.cars.push(c[1]);
          this.emptyCatalog = false;
        }
      });
    });
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`/car-item-details/${id}`);
  }
}
