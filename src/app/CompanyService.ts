import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class CompanyService {
  private url2 = "http://apig.iraniangeo.ir/api/cmp/company";

  constructor(private http: HttpClient) {
      debugger;
   }

  getCompany(): Observable<any> {
      debugger;
    //return this.http.get<any>(this.url2);
    return new Observable<any>(observer => {
        this.http.get<any>(this.url2).subscribe(d =>{
            debugger;
          observer.next(d);
        },err =>{
          console.log("Error : " + err);
        })
      });
  }
}
