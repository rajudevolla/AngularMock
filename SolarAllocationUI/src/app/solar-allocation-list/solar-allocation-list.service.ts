import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolarHeater } from '../shared/SolarHeater';

@Injectable({
  providedIn: 'root'
})
export class SolarAllocationListService {

  constructor(private http:HttpClient) { }

  getAllocations() : Observable<number[]>{
    return;
  }

  getSolarHeaterbyId(id) : Observable<SolarHeater>{
    return;
  }
}
