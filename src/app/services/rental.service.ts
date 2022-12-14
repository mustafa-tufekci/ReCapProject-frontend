import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:7272/api/";

  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.apiUrl + 'Rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
}
