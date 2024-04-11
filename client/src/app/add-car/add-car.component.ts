import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarServiceService } from '../car-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  carForm = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.minLength(3)]),
    model: new FormControl('', [Validators.required, Validators.minLength(2)]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(100)]),
    testDrive: new FormControl(false),
  });

  constructor(private carService: CarServiceService, private router: Router) {}

  submitForm(): void {
    const newCar = this.carForm.value;
    if(!!this.carForm.value.testDrive) {
      this.carForm.value.testDrive = false;
    }
    console.log(newCar);
    

    this.carService.createCar(newCar).subscribe((car) => {
      console.log('id newCar:', car);
      this.router.navigate(['/catalog']); 
    });
  }
}
