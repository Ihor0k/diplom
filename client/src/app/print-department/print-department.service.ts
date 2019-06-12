import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class PrintDepartmentService {
  private readonly url: string;

  protected constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/printDepartment';
  }

  orders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/orders`);
  }

  printer(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/printer`, order, httpOptions);
  }

  bookbinder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/bookbinder`, order, httpOptions);
  }
}
