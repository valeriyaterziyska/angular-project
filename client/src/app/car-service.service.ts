import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarData } from './types/car-data';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  private API = 'http://localhost:3030/jsonstore/cars';
  private headers = { 'Content-Type': 'application/json' };
  constructor(private http: HttpClient) {}

  getSingleCar(id: string): Observable<CarData> {
    return this.http.get<CarData>(`${this.API}/${id}`);
  }

  getAllCars(): Observable<CarData[]> {
    return this.http.get<CarData[]>(`${this.API}`);
  }

  createCar({...newCar}): Observable<CarData> {
    return this.http.post<CarData>(`${this.API}`, newCar, {headers: this.headers});
  }

  deleteCar(id: string){
    return this.http.delete(`${this.API}/${id}`);
  }

}
