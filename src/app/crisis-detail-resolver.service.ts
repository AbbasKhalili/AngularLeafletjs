import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { CompanyService } from './CompanyService';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<any> {

  constructor(private companyService: CompanyService, private router: Router) {
    debugger;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    debugger;
    //return this.companyService.getCompany();  

    return this.companyService.getCompany().pipe(
      take(1),
      mergeMap(book => {
        if (book) {
          return of(book);
        } else { // id not found
          this.router.navigate(['/datepicker']);
          return EMPTY;
        }
      })
    );
  }
}

