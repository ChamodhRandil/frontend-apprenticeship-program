import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  constructor() { }

  handleError(error: any): string {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return errorMessage;
  }
}
