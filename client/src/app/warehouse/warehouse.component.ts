import {Order} from '../model/order';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {WarehouseService} from './warehouse.service';
import {WarehouseMaterial} from '../model/warehouse-material';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData
} from '../confirmation-dialog/confirmation-dialog.component';
import {MaterialOrder} from '../model/material-order';
import {MaterialDeliveryComponent} from './material-delivery/material-delivery.component';


@Component({
  templateUrl: 'warehouse.component.html'
})
export class WarehouseComponent implements OnInit {

  constructor(
    protected warehouseService: WarehouseService,
    protected dialog: MatDialog) {
  }

  protected materialOrdersColumns: string[] = ['name', 'unit', 'amount', 'complete'];
  protected materialOrders: MatTableDataSource<MaterialOrder> = new MatTableDataSource();

  protected warehouseMaterialsColumns: string[] = ['name', 'unit', 'amount', 'delivery'];
  protected warehouseMaterials: MatTableDataSource<WarehouseMaterial> = new MatTableDataSource();

  protected ordersColumns: string[] = ['name', 'author', 'copies', 'manuscriptSheets', 'subject', 'details', 'dispatch'];
  protected orders: MatTableDataSource<Order> = new MatTableDataSource();

  ngOnInit() {
    this.warehouseService.materialOrders()
      .subscribe(materialOrders => {
        this.materialOrders.data = materialOrders;
        this.materialOrders._updateChangeSubscription();
      });
    this.warehouseService.warehouseMaterials()
      .subscribe(warehouseMaterials => {
        this.warehouseMaterials.data = warehouseMaterials;
        this.warehouseMaterials._updateChangeSubscription();
      });
    this.warehouseService.orders()
      .subscribe(orders => {
        this.orders.data = orders;
        this.orders._updateChangeSubscription();
      });
  }

  delivery(warehouseMaterial: WarehouseMaterial): void {
    const dialogRef = this.dialog.open(MaterialDeliveryComponent, {
      width: '500px',
      data: warehouseMaterial.material
    });
    dialogRef.afterClosed().subscribe(amount => {
      if (amount) {
        this.warehouseService.delivery(warehouseMaterial, amount).subscribe(() => this.ngOnInit());
      }
    });
  }

  complete(materialOrder: MaterialOrder): void {
    const onConfirm = () => {
      this.warehouseService.complete(materialOrder).subscribe(() => this.ngOnInit());
    };
    this.showConfirmation('Видати матеріал в цех?', onConfirm);
  }

  completeDisabled(materialOrder: MaterialOrder): boolean {
    const warehouseMaterial = this.warehouseMaterials.data
      .find(value => value.material.id === materialOrder.material.id);
    return !warehouseMaterial || warehouseMaterial.amount < materialOrder.amount;
  }

  dispatch(order: Order): void {
    const onConfirm = () => {
      this.warehouseService.dispatch(order).subscribe(newOrder => {
        order.status = newOrder.status;
        this.ngOnInit();
      });
    };
    this.showConfirmation('Відправити замовнику?', onConfirm);
  }

  showConfirmation(message: string, onConfirm: () => void): void {
    const dialogData = new ConfirmationDialogData(message, onConfirm);
    this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: dialogData
    });
  }
}
