import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {Material} from '../model/material';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class PlanningDepartmentService {
  private readonly url: string;

  protected constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/planningDepartment';
  }

  orders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/orders`);
  }

  newOrderDetails(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/orders`, order, httpOptions);
  }

  materials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.url}/materials`);
  }
}
