import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { order } from './Order';
import{input} from './data';


@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  orderList = new Subject<order[]>();
  constructor(private http: HttpClient) {}

  getData(productId:string): Observable<input[]> {
    const getUrl = environment.baseUrl + 'Product/'+productId;
    console.log(getUrl)
    return this.http.get<input[]>(getUrl,{
      responseType: 'text' as 'json',
    });
  }
  getOrderData() {
    const orderUrl = environment.baseUrl + 'order';
    console.log(orderUrl)
    this.http.get<order[]>(orderUrl).subscribe(orderList=>this.orderList.next(orderList))
  }

  orderProduct(data: any): Observable<any> {
    const orderUrl = environment.baseUrl + 'order';
    return this.http.post<any>(orderUrl, data, {
      responseType: 'text' as 'json',
    });
  }

  deleteData(orderId:string): Observable<any> {
    const orderUrl = environment.baseUrl + 'order';
    // var endpoint = orderUrl + "/" + id
    // console.log(endpoint)
    return this.http.delete<any>(orderUrl+"/"+orderId, {
      responseType: 'text' as 'json',
    });
  }
}
