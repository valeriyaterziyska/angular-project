import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements AfterViewInit {
  constructor(private carService: CarServiceService, private router: Router) {}

  ngAfterViewInit(): void {
    this.carService.getAllCars().forEach((car) => {
      console.log(car);
    });
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`/car-item-details/${id}`);
  }
}
