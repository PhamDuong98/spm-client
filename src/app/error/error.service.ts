import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorCode: number;

  constructor() { }

  setErrorCode(error: number) {
    this.errorCode = error;
  }

  getErrorCode(): number {
    return this.errorCode;
  }
}
