import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { input } from './data';
import { BehaviorSubject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

const getUrl = environment.baseUrl + "/Product";
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  listProducts: input[] = [];

  private content = new BehaviorSubject<string>("default");
  public share = this.content.asObservable();
  constructor(private http: HttpClient) { }

  updateData(text: string) {
    this.content.next(text)
  }
  getData(): Observable<input[]> {
    return this.http.get<input[]>(getUrl).pipe(map(data => {
      this.listProducts = data;
      return data;
    }));
  }

  getItems() {
    return this.listProducts;
  }
  postData(data: any): Observable<any> {

    return this.http.post<any>(getUrl, data)

  }

}


