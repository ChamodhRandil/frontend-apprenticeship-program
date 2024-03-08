import { Injectable } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {API_URL} from "../constants/api.constants";
import {HttpClient} from "@angular/common/http";
import {ExceptionService} from "./exception.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private exceptionService: ExceptionService) { }

  getData(): Observable<any> {
    return this.http.get<{ data: any }>(API_URL).pipe(
      map((response: any) => response?.data),
      catchError((error) => throwError(() => this.exceptionService.handleError(error)))
    );
  }

}
