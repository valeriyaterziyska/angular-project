import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-item-edit',
  templateUrl: './car-item-edit.component.html',
  styleUrls: ['./car-item-edit.component.css'],
})
export class CarItemEditComponent implements OnInit {
  carEditForm = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.minLength(3)]),
    model: new FormControl('', [Validators.required, Validators.minLength(2)]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(100)]),
    testDrive: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private carService: CarServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id edit page: ', id);

    // this.carService.getSingleCar(this.id);
    // return object
    // fill the form with data
    // get the new data
    // put request to server
  }

  submitForm(): void {
    const newCar = this.carEditForm.value;
    console.log(newCar);

    this.carService.createCar(newCar).subscribe((car) => {
      console.log('id newCar:', car);
      this.router.navigate(['/catalog']);
    });
  }
}
