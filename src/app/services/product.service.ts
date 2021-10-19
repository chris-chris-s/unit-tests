import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.interface';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Base url
  baseurl = 'http://localhost:3004';

  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // POST
  CreateProduct(data): Observable<Product> {
    return this.http
      .post<Product>(this.baseurl + '/products/', JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetProduct(id): Observable<Product> {
    return this.http.get<Product>(this.baseurl + '/products/' + id).pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl + '/products/').pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  UpdateProduct(id, data): Observable<Product> {
    return this.http
      .put<Product>(this.baseurl + '/products/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  DeleteProduct(id) {
    return this.http
      .delete<Product>(this.baseurl + '/products/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
