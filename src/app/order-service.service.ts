import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { input } from './data';
// import { url } from 'node:inspector';



@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {


  constructor(
    private http: HttpClient
  ) {

  }

  getData(): Observable<input[]> {
    const getUrl = environment.baseUrl + "Product";
    return this.http.get<input[]>(getUrl)
    }

  orderProduct(data: any): Observable<any> {
    const orderUrl = environment.baseUrl + "order";
    // console.log(orderUrl)
    return this.http.post<any>(orderUrl, data,{ responseType: 'text' as 'json' })
  }
 
}
