import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class ManagerService {
  private readonly url: string;

  protected constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/manager';
  }

  orders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/orders`);
  }

  newOrder(order: Order): Observable<any> {
    return this.http.post(`${this.url}/orders`, order, httpOptions);
  }
}
