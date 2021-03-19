import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { input } from './data';
import { BehaviorSubject } from 'rxjs';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

const getUrl = environment.baseUrl + 'Product';
@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
 
  listProducts: input[] = [];

  private content = new BehaviorSubject<string>('default');
  public share = this.content.asObservable();
  constructor(private http: HttpClient) {}

  getData(): Observable<input[]> {
    return this.http.get<input[]>(getUrl).pipe(
      map((data) => {
        this.listProducts = data;
        return data;
      })
    );
  }

  getItems() {
    return this.listProducts;
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(getUrl, data, {
      responseType: 'text' as 'json',
    });
  }

  deleteData(data: any): Observable<any> {
   
    return this.http.delete<any>(getUrl + '/' + data, {
      responseType: 'text' as 'json',
    });
  }


  updateProduct(id:string,data: any): Observable<any> {
    
    return this.http.put<any>(getUrl+"/"+id, data,{
      responseType: 'text' as 'json',
    });
  }
}
