import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';
import { Observable } from 'rxjs';
import { CarData } from '../types/car-data';
import { UserServiceService } from '../user/user-service.service';

@Component({
  selector: 'app-car-item-details',
  templateUrl: './car-item-details.component.html',
  styleUrls: ['./car-item-details.component.css'],
})
export class CarItemDetailsComponent implements OnInit {
  public id: string = this.route.snapshot.paramMap.get('id') || '';
  public car$: Observable<CarData> = this.carService.getSingleCar(this.id);
  loggedUser$ = this.userService.getLoggedUser();

  constructor(
    private carService: CarServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    // console.log('id edit page: ', this.id);
    // this.carService.getSingleCar(this.id).subscribe((car) => {
    //   this.car = car;
    // })
    // this.carService.getSingleCar(this.id)
    // const car = this.carService.getSingleCar(id);
    // console.log("signel car", car);
  }

  navigateToCar(): void {
    this.router.navigateByUrl(`/car-item-edit/${this.id}`);
  }

  addtoTestDrive(): void {
    console.log('Added to test drive');

    this.carService.getSingleCar(this.id).subscribe((car) => {
      console.log('Added to test drive 22');

      this.carService.updateCar(this.id, { ...car, testDrive: true });
      this.router.navigateByUrl(`/test-drive`);
    });
  }

  deleteCar(): void {
    this.carService.deleteCar(this.id).subscribe((res) => {
      console.log('delete function');
      this.router.navigate(['/catalog']);
    });
  }
}
