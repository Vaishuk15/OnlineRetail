import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { input } from './data';



@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {


  constructor(
    private http: HttpClient
  ) {

  }

  getData(): Observable<input[]> {
    const getUrl = environment.baseUrl + "/Product";
    return this.http.get<input[]>(getUrl)
    }

  orderProduct(data: any): Observable<any> {
    const orderUrl = environment.baseUrl + "/orderProducts";
    return this.http.post(orderUrl, data)
  }
}
