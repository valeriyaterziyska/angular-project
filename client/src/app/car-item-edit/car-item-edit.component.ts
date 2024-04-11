import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarData } from '../types/car-data';

@Component({
  selector: 'app-car-item-edit',
  templateUrl: './car-item-edit.component.html',
  styleUrls: ['./car-item-edit.component.css'],
})
export class CarItemEditComponent implements OnInit {
  public id: string = this.route.snapshot.paramMap.get('id') || '';
  public car$: Observable<CarData> = this.carService.getSingleCar(this.id);


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
    this.car$.subscribe(car => {
      let {brand, model, imageUrl, price, testDrive} = car;
      console.log("on init edit car:", car);
      this.carEditForm.patchValue({brand, model, imageUrl});
    });
    
   
  }

  submitForm(): void {
    const newCar = this.carEditForm.value;
    console.log("new car values", newCar);

    this.carService.updateCar(this.id, newCar).subscribe((car) => {
      console.log('edited car:', car);
      this.router.navigate(['/catalog']);
    });
  }
}
