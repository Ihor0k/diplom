import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {MaterialOrder} from '../model/material-order';
import {WarehouseMaterial} from '../model/warehouse-material';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class WarehouseService {
  private readonly url: string;

  protected constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/warehouse';
  }

  orders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/orders`);
  }

  materialOrders(): Observable<MaterialOrder[]> {
    return this.http.get<MaterialOrder[]>(`${this.url}/materialOrders`);
  }

  warehouseMaterials(): Observable<WarehouseMaterial[]> {
    return this.http.get<WarehouseMaterial[]>(`${this.url}/warehouseMaterials`);
  }

  complete(materialOrder: MaterialOrder): Observable<MaterialOrder> {
    return this.http.post<MaterialOrder>(`${this.url}/complete`, materialOrder, httpOptions);
  }

  dispatch(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/dispatch`, order, httpOptions);
  }

  delivery(warehouseMaterial: WarehouseMaterial, amount: number): Observable<WarehouseMaterial> {
    return this.http.post<WarehouseMaterial>(`${this.url}/delivery/${warehouseMaterial.id}`, amount, httpOptions);
  }
}
