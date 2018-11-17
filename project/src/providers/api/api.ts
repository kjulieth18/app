import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  authUser(user): Observable<any> {
    debugger  

    return this.http.post<any>("http://node22.codenvy.io:52545/auth", user, httpOptions).pipe(
      tap((is: any) => {
        console.log("asd", is)
        }),
        catchError(this.handleError<any>(`getHero id=`))
      );
    }
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}

