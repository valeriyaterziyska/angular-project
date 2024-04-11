import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { Router } from '@angular/router';
import { CarData } from '../types/car-data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements AfterViewInit {
  public cars: CarData[] = [];
  public emptyCatalog: boolean = true;
  constructor(private carService: CarServiceService, private router: Router) {}

  ngAfterViewInit(): void {
    this.carService.getAllCars().forEach((car) => {
      Object.entries(car).map((c) => {
        this.cars.push(c[1]);
        this.emptyCatalog = false;
      });
    });
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`/car-item-details/${id}`);
  }
}
