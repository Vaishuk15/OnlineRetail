import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {


  constructor(
    private http: HttpClient
  ) {

  }
  orderProduct(data: any): Observable<any> {
    const orderUrl = environment.baseUrl + "/orderProducts"
    return this.http.post(orderUrl, data)
  }
}
