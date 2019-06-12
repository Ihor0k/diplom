import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class EditorialDepartmentService {
  private readonly url: string;

  protected constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/editorialDepartment';
  }

  orders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/orders`);
  }

  editor(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/editor`, order, httpOptions);
  }

  artist(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/artist`, order, httpOptions);
  }

  bookmaker(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/bookmaker`, order, httpOptions);
  }
}
