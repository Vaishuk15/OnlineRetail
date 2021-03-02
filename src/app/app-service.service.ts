import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { input } from './data';
import {BehaviorSubject} from 'rxjs';
import { Observable, throwError} from 'rxjs';
import { AddItemsComponent } from './add-items/add-items.component';
import { map, catchError } from 'rxjs/operators';

import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  listProducts:input[]=[];
 
  private content =new BehaviorSubject<string>("default");
  public share=this.content.asObservable();
  constructor(private http:HttpClient) { }

  updateData(text: string){
     this.content.next(text)
  }
  getData(): Observable<input[]> {
    return this.http.get<input[]>('https://uiexercise.onemindindia.com/api/Product').pipe(map( data => {
      this.listProducts = data;
      return data;
    }));
  }

  getItems(){
    return this.listProducts;
  }

  orderProduct(data:any): Observable<any>{
    return this.http.post('https://uiexercise.onemindindia.com/api/OrderProducts',data)
  }

  postData(data: any):Observable<any> {
    
    return this.http.post<any>('https://uiexercise.onemindindia.com/api/Product' ,data)
 
  }

  
  
}


