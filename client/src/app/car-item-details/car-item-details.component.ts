import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-item-details',
  templateUrl: './car-item-details.component.html',
  styleUrls: ['./car-item-details.component.css'],
})
export class CarItemDetailsComponent implements OnInit {
  public id: string | null = this.route.snapshot.paramMap.get('id');

  constructor(private carService: CarServiceService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('id edit page: ', this.id);
    // this.carService.getSingleCar(this.id)
    // this.carService.getSingleCar(this.id)
   
    // const car = this.carService.getSingleCar(id);
    // console.log("signel car", car);
    
  }
  

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
