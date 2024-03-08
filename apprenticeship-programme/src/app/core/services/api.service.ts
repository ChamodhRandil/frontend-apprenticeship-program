import {Injectable} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {API_URL} from "../constants/api.constants";
import {HttpClient} from "@angular/common/http";
import {ExceptionService} from "./exception.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private exceptionService: ExceptionService) {
  }

  getData(): Observable<any> {
    return this.http.get(API_URL).pipe(
      map((response: any) => {
        console.log('Response:', response);
        return response;
      }),
      catchError((error) => throwError(() => this.exceptionService.handleError(error)))
    );
  }

  /*
    API payload is not in the correct format, so the method below has been commented out
  */
  /*  getData(): Observable<any> {
      return this.http.get<{ data: any }>(API_URL).pipe(
        map((response: any) => response?.data),
        catchError((error) => throwError(() => this.exceptionService.handleError(error)))
      );
    }*/
}
